"use strict"

function getArrayParams(arr) {
    let min = Infinity, 
    max = -Infinity, 
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        } 
        if (arr[i] > max) {
            max = arr[i];
        } 
        sum += arr[i];
    }
    let avg = (sum / arr.length).toFixed(2);  
    let arrM = {
        min: min,
        max: max,
        avg: avg  
    };
    return arrM;
};

const mas = [-99, 99, 10];
console.log(getArrayParams(mas));


