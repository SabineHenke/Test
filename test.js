var fs = require('fs');
    
fs.readFile('personen.json', function (err, inhalt){
    if (err) throw err;
    var datei = JSON.parse(inhalt.toString());; //Inhalt in String umwandeln und dann in json parsen
    //console.log(datei.personen[0].name);
    datei.personen.forEach(function (obj) {
        console.log(obj.name);
    }
});

//anonyme funktion