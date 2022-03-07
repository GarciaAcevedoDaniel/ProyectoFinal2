db.compras.drop();
db.compras.insertMany([
    {
        id:1,
        item:[
            {
                nombre:"Acer Aspire XC",
                precioventa:609.99,
                unidadesvendidas:207,
                preciofabricacion:809.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:800,
                    peso:9,
                    grafica:"nvidia",
                    tbmemoria:[1.5,2,5,3.5],
                    leds:true
                }
            },
            {
                nombre:"MSI PBB560M",
                precioventa:1399,
                unidadesvendidas:100,
                preciofabricacion:845.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:900,
                    peso:10,
                    grafica:"amd",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
            },
            {
                nombre:"IOX Gaming PB800",
                precioventa:959,
                unidadesvendidas:153,
                preciofabricacion:499.98,
                caracteristicas:{
                    tipo:"gaming",
                     vatios:750,
                    peso:11.5,
                    grafica:"amd",
                    tbmemoria:[1,2,5,3],
                    leds:true
                }
            },
        ],
        fechaventa: new Date("2020-12-16"),
        vendedor:{
            nombre:"amazon",
            CIF: "B34187888"
        },
        cliente:"Federico"
    },
    {
        id:2,
        item:[
            {
                nombre:"Acer Nitro DG.E2DEB.002",
                precioventa:756.99,
                unidadesvendidas:53,
                preciofabricacion:599.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:600,
                    peso:7.5,
                    grafica:"intel",
                    tbmemoria:[1.5,2,5,3.5],
                    leds:true
                }
            },
            {
                nombre:"MSI X570",
                precioventa:3059.99,
                unidadesvendidas:24,
                preciofabricacion:1500.98,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:1000,
                    peso:12,
                    grafica:"nvidia",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
            },
            {
                nombre:"HP Envy TE01-1035ns",
                precioventa:499.99,
                unidadesvendidas:665,
                preciofabricacion:1299.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:500,
                    peso:6,
                    grafica:"intel",
                    tbmemoria:[1,1.5,2,2,5,5.5,3.5],
                    leds:false
                }
            },
        ],
        fechaventa: new Date("2022-01-16"),
        vendedor:{
            nombre:"mediamarkt",
            CIF: "M83892373"
        },
        cliente:"Pedro"
    },
    {
        id:3,
        item:[
            {
                nombre:"Acer Aspire XC",
                precioventa:609.99,
                unidadesvendidas:207,
                preciofabricacion:809.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:800,
                    peso:9,
                    grafica:"nvidia",
                    tbmemoria:[1.5,2,5,3.5],
                    leds:true
                }
            },
            {
                modelo:"MSI PBB560M",
                precioventa:1399,
                unidadesvendidas: 107,
                preciofabricacion:845.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:700,
                    peso:9.5,
                    grafica:"nvidia",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
            },
            {
                modelo:"Apple Mac mini",
                precioventa:799.99,
                unidadesvendidas:877,
                preciofabricacion:699.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:600,
                    peso:3.5,
                    grafica:"macgraphics",
                    tbmemoria:[1,2,2.5,2,3.5],
                    leds:false
                }
            },
        ],
        fechaventa: new Date("2021-09-07"),
        vendedor:{
            nombre:"pccomponentes",
            CIF: "F20677580"
        },
        cliente:"Estela"
    },
    {
        id:4,
        ordenadores:[
            {
                modelo:"ASUS NBM560",
                precioventa:809.99,
                unidadesvendidas:300,
                preciofabricacion:299.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:850,
                    peso:9.5,
                    grafica:"nvidia",
                    leds:false
                }
            },
            {
                modelo:"MSI CBU360M",
                precioventa:400.00,
                unidadesvendidas: 322,
                preciofabricacion:299.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:450,
                    peso:6.5,
                    grafica:"amd",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
            },
            {
                modelo:"HP OMEN 450MY",
                precioventa:565,
                unidadesvendidas:214,
                preciofabricacion:500.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:400,
                    peso:7,
                    grafica:"intel",
                    tbmemoria:[1,1.5,2,2,5,5.5,3.5],
                    leds:true
                }
            },
        ],
        fechaventa: new Date("2015-12-20"),
        vendedor:{
            nombre:"amazon",
            CIF: "B34187888"
        },
        cliente:"Fernando"
    },
    {
        id:5,
        item:[
            {
                modelo:"MSI PBB560M",
                precioventa:1399,
                unidadesvendidas: 107,
                preciofabricacion:845.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:700,
                    peso:9.5,
                    grafica:"nvidia",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
            },
            {
                modelo:"Apple Mac mini",
                precioventa:799.99,
                unidadesvendidas:877,
                preciofabricacion:699.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:600,
                    peso:3.5,
                    grafica:"macgraphics",
                    tbmemoria:[1,2,2.5,2,3.5],
                    leds:false
                }
            },
        ],
        fechaventa: new Date("2017-03-30"),
        vendedor:{
            nombre:"mediamarkt",
            CIF: "M83892373"
        },
        cliente:"Carlos"
    },
    {
        id:6,
        item:[
            {
                nombre:"Thermaltake B560M",
                precioventa:1899.99,
                unidadesvendidas:134,
                preciofabricacion:999.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:600,
                    peso:9.5,
                    grafica:"nvidia",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
        
            },
        ],
        fechaventa: new Date("2021-10-19"),
        vendedor:{
            nombre:"LDLC",
            CIF: "L83717829"
        },
        cliente:"Maria"
    },
    {
        id:7,
        item:[
            {
                nombre:"SCREENON V580108",
                precioventa:469.99,
                unidadesvendidas:689,
                preciofabricacion:300.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:750,
                    peso:10,
                    grafica:"nvidia",
                    tbmemoria:[2.5,2,3.5],
                    leds:true
                }
            },
            {
                nombre:"HP Envy TE01-1035ns",
                precioventa:499.99,
                unidadesvendidas:665,
                preciofabricacion:1299.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:500,
                    peso:6,
                    grafica:"intel",
                    tbmemoria:[1,1.5,2,2,5,5.5,3.5],
                    leds:false
                }
            },
          
        ],
        fechaventa: new Date("2018-11-19"),
        vendedor:{
            nombre:"amazon",
            CIF: "B34187888"
        },
        cliente:"Estela"
    },
    {
        id:8,
        item:[
            {
                nombre:"Acer Aspire XC",
                precioventa:609.99,
                unidadesvendidas:207,
                preciofabricacion:809.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:800,
                    peso:9,
                    grafica:"nvidia",
                    tbmemoria:[1.5,2,5,3.5],
                    leds:true
                }
            },
            {
                nombre:"ASUS 301",
                precioventa:299.99,
                unidadesvendidas:780,
                preciofabricacion:150.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:400,
                    peso:5,
                    grafica:"intel",
                    leds:false
                }
            },
            {
                nombre:"MSI Y739",
                precioventa:1659.99,
                unidadesvendidas:251,
                preciofabricacion:749.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:900,
                    peso:12,
                    grafica:"amd",
                    tbmemoria:[2.5,2,3.5],
                }
            },
        ],
        fechaventa: new Date("2020-01-02"),
        vendedor:{
            nombre:"elcorteingles",
            CIF: "C972904379"
        },
        cliente:"Alberto"
    },
    {
        id:9,
        item:[
            {
                nombre:"Clon 8976",
                precioventa:149.99,
                unidadesvendidas:32,
                preciofabricacion:99.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:400,
                    peso:9,
                    grafica:"amd",
                    tbmemoria:[1,1.5,2,2,5,5.5,3.5],
                    leds:true
                }
            },
            {
                modelo:"HP OMEN 450MY",
                precioventa:565,
                unidadesvendidas:214,
                preciofabricacion:499.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:400,
                    peso:7,
                    grafica:"intel",
                    tbmemoria:[1,1.5,2,2,5,5.5,3.5],
                    leds:true
                }
            },
            {
                nombre:"HP PL256",
                precioventa:250,
                unidadesvendidas:1200,
                preciofabricacion:120.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:400,
                    peso:5,
                    grafica:"intel",
                    tbmemoria:[1,1.5,2,2,5,5.5,3.5],
                    leds:false
                }
            },
        ],
        fechaventa: new Date("2018-02-18"),
        vendedor:{
            nombre:"carrefour",
            CIF: "Y74922228"
        },
        cliente:"Francisco"
    },
    {
        id:10,
        item:[
            {
                nombre:"Acer Aspire XC",
                precioventa:609.99,
                unidadesvendidas:207,
                preciofabricacion:809.99,
                caracteristicas:{
                    tipo:"gaming",
                    vatios:800,
                    peso:9,
                    grafica:"nvidia",
                    tbmemoria:[1.5,2,5,3.5],
                    leds:true
                }
            },
        ],
        fechaventa: new Date("2020-08-16"),
        vendedor:{
            nombre:"Amazon Inc",
            CIF: "B34187888"
        },
        cliente:"Pilar"}

    ])

db.compras.updateOne(
    {
        _id:02
    },

    {
        $push:{
            item:{
                nombre:"ASUS PXL2",
                precioventa:648,
                unidadesvendidas:230,
                preciofabricacion:299.99,
                caracteristicas:{
                    tipo:"ofimatica",
                    vatios:650,
                    peso:7.5,
                    grafica:"amd",
                    tbmemoria:[1.5,2,5],
                    leds:true
                }
            }
        }
    }
)