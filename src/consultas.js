/*Quiero crear una coleccion para que solo vea los vendedores */

db.compras.aggregate([
    {
            $project:{
                _id: 0,
                id: 1,
                nombre:"$vendedor.nombre",
                CIF:"$vendedor.CIF"
            }
    },
    {
        $out: {
            db: "ProyectoCompras",
            coll: "vendedores"

        }
    }
])

/*Soy el supervisor de las compras y quiero ver todos las compras que se han realizado en una coleccion*/

db.compras.aggregate([  
    {
        $unwind: {
            path: "$item"
        }
    } ,
    {
         $project:{
             _id: 0,
             id: 1,
             nombre:"$item.nombre",
             precioventa:"$item.precioventa",
             unidadesvendidas:"$item.unidadesvendidas",
             preciofabricacion:"$item.preciofabricacion", 
             caracteristicas:"$item.caracteristicas"
         }
    },
    {
            $out: "ventas"
    }
    
] )

/*Como buen supervisor quiero saber el pais de las empresas las cuales he vendido sus productos y si hay algún pais repetido que se sume*/

db.empresa.aggregate([                                 
               {$group:                        
                  { _id:"$pais",        
                       paisesdeempresas:{$sum:1}  
                               } }])

/*Como buen supervisor quiero saber el producto que más ha vendido y el producto menos vendido*/

db.ordenadores.aggregate(
    [
     {$group:
             { _id: null,
               maxunidadesvendidas:{$max:'$unidadesvendidas'},
               minunidadesvendidas:{$min:'$unidadesvendidas'}
             }
      }
     ]
   )


/*Quiero saber cual es la media de dinero que ha ganado por cada venta cada vendedor*/

db.compras.aggregate([
    {
        $unwind: {
            path: "$item",    
        }
    },
    {
        $group:{
            _id: "$vendedor",
            mediaponderada: {
                $avg: {
                    $multiply: ["$item.precioventa", "$item.unidadesvendidas"]
            }, 
        },
        },
    },
])

/*Quiero tener una nueva colección para sacar dentro de los items el nombre, el precio de venta y las unidades vendidas  */ 


db.compras.aggregate([
    { 
        $unwind: "$item"
    },
    {
        $project: {
            item: 1,
            id: 1,
            _id: 0
        }
    },
    {
        $project: {
            id: 1,
            nombre: "$item.nombre",
            precioventas: "$item.precioventa",
            unidadesvendidas: "$item.unidadesvendidas",
        }
    },
    {
        $out:{
            db:"nuevo",
            coll:"compras2"
        }
    }
])
/*Quiero saber cual es el beneficio total que hemos generador por cada vendedor y quiero que lo ordene de mayor a menor*/

db.compras.aggregate([
    {
        $unwind:{
            path:"$item"
        }
    },
    {
        $project:{
            _id:0,
            vendedor:"$vendedor.nombre",
            dinerototal:{
                $multiply: ["$item.unidadesvendidas","$item.precioventa"] }
            }
        },
        {
                $group: {
                    _id:"$vendedor",
                    dinerototal:{ $sum:"$dinerototal"}
                }
        },
        {
            $sort: {
                dinerototal:-1
            }
        }
])

/*Queremos saber la media de departamentos que tienen las empresas por las que trabajamos divididos por paises, pero solo para aquellas empresas que tienen más de 20 departamentos */

db.empresa.aggregate( [
    {$group: 
        { _id:
            {empresa:"$nombre", pais:"$pais"}, 
            media: 
            {$avg:'$departamentos'} } },
    {$match: 
        {media:{$gt:20}} } ])

/*Quiero saber el dinero total generado por cada vendedor de mayor a menor */

db.compras.aggregate([
    {
            $lookup: {
                from:"ventas",
                localField:"id",
                foreignField:"id",
                as:"ventas"
            }
    },
    {
            $project:{
                _id:0,
                vendedores:{$arrayElemAt:["$ventas",0]},
                vendedor:"$vendedor.nombre"
            }
        },
        {
            $project:{
                vendedor:1,
                dinero:{ $multiply:["$vendedores.unidadesvendidas","$vendedores.precioventa"]},
            }
        },
    {
        $group: {
            _id:"$vendedor",
            dinero: { $sum:"$dinero"}
        }
    },
    {
        $sort: {
            dinero:-1
        }
    }
])

/*Se necesita de una lista de los ingresos netos por mes ordenadors de mayor a menor*/

db.compras.aggregate([
    {
        $unwind:{
            path:"$item"
        }
    },
    {
        $project:{
            month:{
                $month:"$fechaventa"
            },
            ingresosnetos:{
                $subtract: [
                    {
                      $multiply: [
                          "$item.precioventa",
                          "$item.unidadesvendidas"
                      ],
                    },
                    {
                      $multiply: [
                          "$item.preciofabricacion",
                          "$item.unidadesvendidas"
                      ],
                    },
                  ]
            }
        },
    },
    {
        $group:{
            _id:"$month",
            avg:{
                $avg:"$ingresosnetos" 
            }
        }
    },
    {
        $project:{
            mes:"$_id",
            ingresosnetos:{
                $round:[
                    "$avg",
                    2
                ]
            },
            _id:0
        }
    },
    {
        $sort:{
            avgingresosnetos:-1
        }
  
    }
  ])

