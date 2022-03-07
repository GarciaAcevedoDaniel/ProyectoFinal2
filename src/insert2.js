db.ordenadores.deleteMany({})
db.ordenadores.insertMany([
    { 
        _id:1, 
            modelo:"Acer Aspire XC", 
            marca:"Acer", 
            unidadesvendidas:207,
            fechadelanzamiento:new Date("2015-03-02"),
            componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
            stockdisponibles:15, 
            leds:true
        },
        {
            _id:2, 
                modelo:"MSI PBB560M", 
                marca:"MSI", 
                unidadesvendidas:907,
                fechadelanzamiento:new Date("2012-07-21"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:203, 
                leds:true
         },
        {
            _id:3, 
                modelo:"IOX Gaming PB800", 
                marca:"IOX", 
                unidadesvendidas:309,
                fechadelanzamiento:new Date("2014-08-22"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:190, 
                leds:true
            }, 
            {
            _id:4, 
                modelo:"Acer Nitro DG.E2DEB.002", 
                marca:"Acer", 
                unidadesvendidas:187,
                fechadelanzamiento:new Date("2010-03-11"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:230, 
                leds:true
            }, 
            {
            _id:5, 
                modelo:"MSI X570", 
                marca:"MSI", 
                unidadesvendidas:807,
                fechadelanzamiento:new Date("2011-11-01"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:12, 
                leds:true
            }, 
            {
            _id:6, 
                modelo:"HP Envy TE01-1035ns", 
                marca:"HP", 
                unidadesvendidas:239,
                fechadelanzamiento:new Date("2010-01-12"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:1430, 
                leds:false
            }, 
            {
            _id:7,  
                modelo:"Apple Mac mini", 
                marca:"Apple", 
                unidadesvendidas:1598,
                fechadelanzamiento:new Date("2013-03-02"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:1289, 
                leds:false
            }, 
            {
            _id:8, 
                modelo:"ASUS NBM560", 
                marca:"ASUS", 
                unidadesvendidas:435,
                fechadelanzamiento:new Date("2012-10-19"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:1069, 
                leds:false
            },
            { 
            _id:9, 
                modelo:"ASUS 301", 
                marca:"ASUS", 
                unidadesvendidas:849,
                fechadelanzamiento:new Date("2009-12-05"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:62, 
                leds:true
            }, 
            {
            _id:10, 
                modelo:"MSI CBU360M", 
                marca:"MSI", 
                unidadesvendidas:402 ,
                fechadelanzamiento: new Date("2011-07-22"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:83, 
                leds:true
            }, 
            {
            _id:11, 
                modelo:"HP OMEN 450MY", 
                marca:"HP", 
                unidadesvendidas:291,
                fechadelanzamiento: new Date("2009-10-08"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:12, 
                leds:true
            }, 
            {
            _id:12,  
                modelo:"Thermaltake B560M", 
                marca:"Thermaltake", 
                unidadesvendidas:2345,
                fechadelanzamiento: new Date("2011-03-02"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:198, 
                leds:true
            }, 
            {
            _id:13, 
                modelo:"SCREENON V580108", 
                marca:"SCREENON", 
                unidadesvendidas:238,
                fechadelanzamiento:new Date("2010-01-01"),
                componentes:["procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"],
                stockdisponibles:299, 
                leds:true
            }, 
            {
            _id:14, 
                modelo:"MSI Y739", 
                marca:"MSI", 
                unidadesvendidas:732,
                fechadelanzamiento:new Date("2014-09-28"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:344, 
                leds:true
            }, 
            {
            _id:15, 
                modelo:"Clon 8976", 
                marca:"Clon", 
                unidadesvendidas:199,
                fechadelanzamiento:new Date("2011-02-10"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:519, 
                leds:false
            }, 
            {
            _id:16,
                modelo:"HP PL256", 
                marca:"HP", 
                unidadesvendidas:674,
                fechadelanzamiento:new Date("2009-06-06"),
                componentes:("procesador","fuente de alimentacion","placa base","RAM","tarjeta grafica"),
                stockdisponibles:610, 
                leds:false
            }, 
])