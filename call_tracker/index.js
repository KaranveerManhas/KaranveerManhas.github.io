const totalContainer = document.getElementsByClassName('total')[0];
const normalCalls = document.getElementsByClassName('normal')[0];
const busyCalls = document.getElementsByClassName('busy')[0];
const noAnswerCalls = document.getElementsByClassName('no-answer')[0];
const silentCalls = document.getElementsByClassName('silent')[0];
const silentAnsweringCalls = document.getElementsByClassName('silent-answer')[0];
const olangCalls = document.getElementsByClassName('olang')[0];
const faxCalls = document.getElementsByClassName('fax')[0];
const sitToneCalls = document.getElementsByClassName('sit-tone')[0];
// const callButtons = document.querySelectorAll('.call-add');
// const callDeleteButtons = document.querySelectorAll('.call-delete');
const clearButton = document.querySelector('.clear');


let totalCalls = 0;
let normalCallCount = 0;
let busyCallCount = 0;
let noAnswerCallCount = 0;
let silentCallCount = 0;
let silentAnsweringCallCount = 0;
let olangCallCount = 0;
let faxCallCount = 0;
let sitToneCallCount = 0;
let callsArray = {};


function updateDisplay(){
    normalCalls.innerText = normalCallCount;
    totalContainer.innerHTML = totalCalls;
    busyCalls.innerText = busyCallCount;
    noAnswerCalls.innerText = noAnswerCallCount;
    silentCalls.innerText = silentCallCount;
    silentAnsweringCalls.innerText = silentAnsweringCallCount;
    olangCalls.innerText = olangCallCount;
    faxCalls.innerText = faxCallCount;
    sitToneCalls.innerText = sitToneCallCount;
}

function incrementTotalCount() {
    totalCalls++;
}

function decrementTotalCount() {
    totalCalls--;
    console.log(totalCalls);
    updateDisplay();
}

function updateCallsArray() {
    callsArray = {
        'totalCalls':totalCalls,
        'normalCallCount':normalCallCount,
        'busyCallCount': busyCallCount,
        'noAnswerCallCount': noAnswerCallCount,
        'silentCallCount' : silentCallCount,
        'silentAnsweringCallCount':silentAnsweringCallCount,
        'olangCallCount':olangCallCount,
        'faxCallCount': faxCallCount,
        'sitToneCallCount': sitToneCallCount
        }
}

function clearAll() {
    totalCalls = 0;
    normalCallCount = 0;
    busyCallCount = 0;
    noAnswerCallCount = 0;
    silentCallCount = 0;
    silentAnsweringCallCount = 0;
    olangCallCount = 0;
    faxCallCount = 0;
    sitToneCallCount = 0;
    normalCalls.innerText = 0;
    busyCalls.innerText = 0;
    noAnswerCalls.innerText = 0;
    totalContainer.innerHTML = 0;
    silentCalls.innerText = 0;
    silentAnsweringCalls.innerText = 0;
    olangCalls.innerText = 0;
    faxCalls.innerText = 0;
    sitToneCalls.innerText = 0;
}

function updateVariables() {
    totalCalls = parseInt(callsArray.totalCalls) || 0;
    normalCallCount = parseInt(callsArray.normalCallCount) || 0;
    busyCallCount = parseInt(callsArray.busyCallCount) || 0;
    noAnswerCallCount=parseInt(callsArray.noAnswerCallCount) || 0;
    silentCallCount = parseInt(callsArray.silentCallCount) || 0;
    silentAnsweringCallCount = parseInt(callsArray.silentAnsweringCallCount) || 0;
    olangCallCount = parseInt(callsArray.olangCallCount) || 0;
    faxCallCount = parseInt(callsArray.faxCallCount) || 0;
    sitToneCallCount = parseInt(callsArray.sitToneCallCount) || 0;
}


function updateLocalStorage() {
    localStorage.setItem('callsArray', JSON.stringify(callsArray)); 
}

function getLocalStorage() {
    if (localStorage.getItem('callsArray')) {
        callsArray = JSON.parse(localStorage.getItem('callsArray'));
        updateVariables();
        updateDisplay();
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

function addCallCounts(callType) {
    switch (callType) {
        case 'normal':
            normalCallCount++;
            break;
        case 'busy':
            busyCallCount++;
            break;
        case 'no-answer':
            noAnswerCallCount++;
            break;
        case 'silent':
            silentCallCount++;
            break;
        case 'silent-ans':
            silentAnsweringCallCount++;
            break;
        case 'olang':
            olangCallCount++;
            break;
        case 'fax':
            faxCallCount++;
            break;
        case 'sit-tone':
            sitToneCallCount++;
            break;
    }
    incrementTotalCount();
    updateCallsArray();
    updateLocalStorage();
    updateDisplay();
}


function deleteCallCounts(callType) {
    switch (callType){
        case 'normal':
            if (normalCallCount > 0){
                normalCallCount--;
                decrementTotalCount();
            }
            break;
        case 'busy':
            if (busyCallCount > 0){
                busyCallCount--;
                decrementTotalCount();
            }
            break;
        case 'no-answer':
            if (noAnswerCallCount > 0){
                noAnswerCallCount--;
                decrementTotalCount();
            }
            break;
        case 'silent':
            if (silentCallCount > 0){
                silentCallCount--;
                decrementTotalCount();
            }
            break;
        case 'silent-ans':
            if (silentAnsweringCallCount > 0){
                silentAnsweringCallCount--;
                decrementTotalCount();
            }
            break;
        case 'olang':
            if (olangCallCount > 0){
                olangCallCount--;
                decrementTotalCount();
            }
            break;
        case 'fax':
            if (faxCallCount > 0){
                faxCallCount--;
                decrementTotalCount();
            }
            break;
        case 'sit-tone':
            if (sitToneCallCount > 0){
                sitToneCallCount--;
                decrementTotalCount();
            }
            break;
    }
    // decrementTotalCount();
    updateCallsArray();
    updateLocalStorage();
}


clearButton.addEventListener('click', function() {
    clearAll();
    updateCallsArray();
    updateDisplay();
    clearLocalStorage();
})

document.addEventListener('DOMContentLoaded', getLocalStorage);