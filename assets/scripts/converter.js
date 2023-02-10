//Text areas
const jsonInput = document.getElementById('json-format-input');
const csvOutput = document.getElementById('csv-format-output');

//Buttons
const convertBtn = document.getElementById('btn-convert-json-to-csv');
const clearBtn = document.getElementById('btn-clear-json-and-csv');
const formatBtn = document.getElementById('btn-format-json-text');

//patterns
//base pattern
const baseJsonPattern = /\"\w*\"\:\s?((\"\w*\")|\d+|false|true|null)/g;
const objectJsonPattern = /\{\s*\"\w*\"\:\s?((\"\w*\")|\d+|false|true|null)\s*\}/g;
const curlyBracePattern = /\{[^}]+\}/gm;
const squareBracketsPattern = /\[[^]+\]/gm;

// function fillCsvBoxWithJsonBoxContents(){
//     const jsonBoxContent = jsonInput.value;
//     csvOutput.value = jsonBoxContent;
// }

function validateJsonFormat(){
    const jsonBoxContent = jsonInput.value;
    let matchesArray = jsonBoxContent.match(squareBracketsPattern);

    if(jsonBoxContent != "" && matchesArray != null){
        alert("VALID!" + " " + matchesArray[0]);
        alert("VALID!" + " " + matchesArray[0]);
    }else{
        alert("NOT VALID");
    }
}

function clearJsonAndCsvBoxContents(){
    jsonInput.value = "";
    csvOutput.value = "";
}

convertBtn.addEventListener('click', validateJsonFormat);
clearBtn.addEventListener('click', clearJsonAndCsvBoxContents);
//formatBtn.addEventListener('click', fillCsvBoxWithJsonBoxContents);

