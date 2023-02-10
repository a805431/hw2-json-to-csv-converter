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
    let outerSquaresMatch = jsonBoxContent.match(squareBracketsPattern);
    let objectPatternMatches = []; //масив от елементи със синтаксис на JSON обекти

    if(jsonBoxContent != "" && outerSquaresMatch != null){
        alert("VALID INPUT!" + " " + outerSquaresMatch[0]);

        for(let elem of outerSquaresMatch){
            //първо на елементът трябва да му се премахнат квадратните скоби
            const elemWithoutSquareBrackets = elem.slice(1, -1);

            objectPatternMatches = elemWithoutSquareBrackets.match(curlyBracePattern);

            if(objectPatternMatches != null){
                alert("PUSHED ELEM IS: "+objectPatternMatches[0]);
            }
        }
    }else{
        alert("INVALID INPUT");
    }
}

function clearJsonAndCsvBoxContents(){
    jsonInput.value = "";
    csvOutput.value = "";
}

convertBtn.addEventListener('click', validateJsonFormat);
clearBtn.addEventListener('click', clearJsonAndCsvBoxContents);
//formatBtn.addEventListener('click', fillCsvBoxWithJsonBoxContents);

