db.empresa.deleteMany({})
db.empresa.insertMany([
    { 
        _id:1, 
            empresa:"Acer", 
            pais:"Taiwan",
            fechafundacion:new Date("1981-10-22"),
            departamentos:140,  
            distribuidores:["elcorteingles","pccomponentes","mediamarkt","amazon"],
            productosalmacen:["Acer Aspire XC","Acer Nitro DG.E2DEB.002"]
        },

        {
        _id:2, 
            empresa:"MSI", 
            pais:"Taiwan",
            fechafundacion:new Date("1986-08-16"),
            departamentos:86, 
            distribuidores:["amazon","mediamarkt","pccomponentes","elcorteingles"],
            productosalmacen:["MSI PBB560M","MSI X570","MSI CBU360M","MSI Y739"]
        },

        {
        _id:3, 
            empresa:"IOX", 
            pais:"china",
            fechafundacion:new Date("2001-03-02"),
            departamentos:52, 
            distribuidores:["amazon"],
            productosalmacen:["IOX Gaming PB800"]
        },
        {
        _id:4, 
            empresa:"HP", 
            pais:"Estados Unidos",
            fechafundacion:new Date("1939-09-28"),
            departamentos:589, 
            distribuidores:["mediamarkt","amazon","carrefour"],
            productosalmacen:["HP Envy TE01-1035ns","HP OMEN 450MY","HP PL256"]
        },

        {
        _id:5, 
            empresa:"Clon", 
            pais:"Finlandia",
            fechafundacion:new Date("2000-04-11"),
            departamentos:102, 
            distribuidores:["carrefour"],
            productosalmacen:["Clon 8976"]
        },

        {
        _id:6, 
            empresa:"Apple", 
            pais:"Estados Unidos",
            fechafundacion:new Date("1989-07-05"),
            departamentos:678, 
            distribuidores:["pccomponentes","mediamarkt"],
            productosalmacen:["Apple Mac mini"]
        },

        {
        _id:7, 
            empresa:"ASUS", 
            pais:"Taiwan",
            fechafundacion:new Date("2015-03-02"),
            departamentos:203, 
            distribuidores:["elcorteingles","amazon"],
            productosalmacen:["ASUS 301","ASUS NBM560"]
        },

        {
        _id:8, 
            empresa:"SCREENON", 
            pais:"Noruega",
            fechafundacion:new Date("1992-02-08"),
            departamentos:23, 
            distribuidores:["amazon"],
            productosalmacen:["SCREENON V580108"]
        },

        {
        _id:9, 
        item: { 
            empresa:"Thermaltake", 
            pais:"china",
            fechafundacion:new Date("2002-10-02"),
            departamentos:48, 
            distribuidores:["LDLC"],
            productosalmacen:["Thermaltake B560M"]
        }
    },
])
        
        