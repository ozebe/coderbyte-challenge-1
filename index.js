const fs = require('fs');
const csv = require('csvtojson'); //importa a lib para converter o csv para json

const csvPath = './input.csv';
const outputPath = './output.json';

//carrega o arquivo csv do caminho acima.
csv().fromFile(csvPath)
.then((jsonObj) =>{
    //salva o objeto em um .json.
    fs.writeFile(outputPath, JSON.stringify(jsonObj), 'utf-8', function(err){
        if(err){
            console.log("Não foi possível salvar o objeto para o arquivo output.json!");
            return console.log(err);
        }
        console.log("Arquivo salvo com sucesso em " + outputPath);
    })
});