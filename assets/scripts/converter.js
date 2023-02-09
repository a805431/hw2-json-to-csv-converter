//Text areas
const jsonInput = document.getElementById('json-format-input');
const csvOutput = document.getElementById('csv-format-output');

//Buttons
const convertBtn = document.getElementById('btn-convert-json-to-csv');
const clearBtn = document.getElementById('btn-clear-json-and-csv');
const formatBtn = document.getElementById('btn-format-json-text');

function validateJsonFormat(jsonContent){
    if(jsonContent){

    }
}

//това е пробно засега
//пробвай нещо с map()
function fillCsvBoxWithJsonBoxContents(){
    const jsonBoxContent = jsonInput.value;
    csvOutput.value = jsonBoxContent;
}

function clearJsonAndCsvBoxContents(){
    jsonInput.value = "";
    csvOutput.value = "";
}

convertBtn.addEventListener('click', fillCsvBoxWithJsonBoxContents);
clearBtn.addEventListener('click', clearJsonAndCsvBoxContents);

