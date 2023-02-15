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
const baseJsonPattern =
  /\"\w*\"\:\s?((\"(\w|\s|-|,|\:)*\")|\d+|false|true|null)/g;
const objectJsonPattern =
  /\{\s*\"\w*\"\:\s?((\"\w*\")|\d+|false|true|null)\s*\}/g;
const curlyBracePattern = /\{[^}]+\}/gm;
const squareBracketsPattern = /\[[^]+\]/gm;

// function fillCsvBoxWithJsonBoxContents(){
//     const jsonBoxContent = jsonInput.value;
//     csvOutput.value = jsonBoxContent;
// }

function removeBrackets(singleArrayElement) {
  const result = singleArrayElement.slice(1, -1);
  return result;
}

function doesMatchBaseJsonPattern(stringToBeMatched) {
  const booleanResult = stringToBeMatched.match(baseJsonPattern) != null;
  return booleanResult;
}

function createProperObject(elem){
    //elem е САМО един JSON обект, без {}

    const localObj = {};

    let separatedJSONSingleStringsInOneObject = elem.split(',\n');
    for (let el of separatedJSONSingleStringsInOneObject) { //el е един JSON стринг, т.е. една двойка ключ-стойност
      if (baseJsonPattern.test(el)) {

        const newObjAttrAndVal = el.split(':');
        localObj[newObjAttrAndVal[0]] = newObjAttrAndVal[1];
      }
    }
    console.log('NEWLY CREATED JS OBJECT: ', localObj);
    console.log('-------END-OF-THIS-ENTRY--------');
}

function validateJsonFormat() {
  const jsonBoxContent = jsonInput.value;
  let outerSquaresMatch = jsonBoxContent.match(squareBracketsPattern);
  let objectPatternMatches = []; //масив от елементи със синтаксис на JSON обекти
  let separatedJSNObjectsAsStrings = []; //същото като objectPatternMatches, но без наличието на {}
  let javascriptObjects = [];

  if (jsonBoxContent != '' && outerSquaresMatch != null) {
    alert('VALID SQ INPUT!' + ' ' + outerSquaresMatch[0]); //outerSquaresMatch[0] e всичкото в квадратните скоби т.е. имаме само един елемент

    for (let elem of outerSquaresMatch) {
      //първо на елементът трябва да му се премахнат квадратните скоби
      const elemWithoutSquareBrackets = elem.slice(1, -1);

      //съдържанието на квадратните скоби; много елементи, заобиколени от къдрави скоби
      objectPatternMatches = elemWithoutSquareBrackets.match(curlyBracePattern);
    }

    if (objectPatternMatches != null) {
      alert('PUSHED CB ELEM IS: ' + objectPatternMatches[1]);

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
    alert('PUSHED NO {} ELEM IS: ' + separatedJSNObjectsAsStrings[0]);

    if (separatedJSNObjectsAsStrings != null) {
      for (let elem of separatedJSNObjectsAsStrings) {
        const javaScriptObject = createProperObject(elem);
        javascriptObjects.push(javaScriptObject);
      }
    }
    //return javascriptObjects;
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
