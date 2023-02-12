//Text areas
const jsonInput = document.getElementById('json-format-input');
const csvOutput = document.getElementById('csv-format-output');

//Buttons
const convertBtn = document.getElementById('btn-convert-json-to-csv');
const clearBtn = document.getElementById('btn-clear-json-and-csv');
const formatBtn = document.getElementById('btn-format-json-text');

//patterns
//base pattern
//const baseJsonPattern = /\"\w*\"\:\s?((\"\w*\")|\d+|false|true|null)/g;
const baseJsonPattern = /\"\w*\"\:\s?((\"(\w|\s|-|,|\:)*\")|\d+|false|true|null)/g;
const objectJsonPattern =
  /\{\s*\"\w*\"\:\s?((\"\w*\")|\d+|false|true|null)\s*\}/g;
const curlyBracePattern = /\{[^}]+\}/gm;
const squareBracketsPattern = /\[[^]+\]/gm;

// function fillCsvBoxWithJsonBoxContents(){
//     const jsonBoxContent = jsonInput.value;
//     csvOutput.value = jsonBoxContent;
// }

function removeBrackets(singleElement) {
  const result = singleElement.slice(1, -1);
  return result;
}

function doesMatchBaseJsonPattern(stringToBeMatched) {
  const booleanResult = stringToBeMatched.match(baseJsonPattern) != null;
  return booleanResult;
}

function validateJsonFormat() {
  const jsonBoxContent = jsonInput.value;
  let outerSquaresMatch = jsonBoxContent.match(squareBracketsPattern);
  let objectPatternMatches = []; //масив от елементи със синтаксис на JSON обекти
  let separatedJSNObjectsAsStrings = [];
  let javascriptObjects = [];

  if (jsonBoxContent != '' && outerSquaresMatch != null) {
    alert('VALID INPUT!' + ' ' + outerSquaresMatch[0]);

    for (let elem of outerSquaresMatch) {
      //първо на елементът трябва да му се премахнат квадратните скоби
      const elemWithoutSquareBrackets = elem.slice(1, -1);

      //съдържанието на квадратните скоби; много елементи, заобиколени от къдрави скоби
      objectPatternMatches = elemWithoutSquareBrackets.match(curlyBracePattern);
    }

    if (objectPatternMatches != null) {
     // alert('PUSHED ELEM IS: ' + objectPatternMatches[1]);

      for (let elem of objectPatternMatches) {
        const separatedJSNObject = removeBrackets(elem); //elem е един JSON обект с {}

       // array от стрингове с всеки елемент стринг, съдържащ двойки ключ стойност на един JSON обект
        separatedJSNObjectsAsStrings.push(separatedJSNObject);
        console.log(separatedJSNObject);

        // const singleObject = {
        //     [] = ;
        // }
        // javascriptObjects.push(singleObject);
      }
    }

    for(let elem of separatedJSNObjectsAsStrings){
        if(elem != null){
            let separatedJSONSingleStringsInOneObject = elem.split(',\n');
            for(let elem of separatedJSONSingleStringsInOneObject){
                console.log(elem);
                if(baseJsonPattern.test(elem)){

                }
            }
            console.log('-------END-OF-THIS-ENTRY--------');
        }
    }
  } else {
    alert('INVALID INPUT');
  }
}

function clearJsonAndCsvBoxContents() {
  jsonInput.value = '';
  csvOutput.value = '';
}

convertBtn.addEventListener('click', validateJsonFormat);
clearBtn.addEventListener('click', clearJsonAndCsvBoxContents);
//formatBtn.addEventListener('click', fillCsvBoxWithJsonBoxContents);
