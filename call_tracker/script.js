const totalContainer = document.getElementsByClassName('total')[0];
const normalCalls = document.getElementsByClassName('normal')[0];
const busyCalls = document.getElementsByClassName('busy')[0];
const noAnswerCalls = document.getElementsByClassName('no-answer')[0];
const silentCalls = document.getElementsByClassName('silent')[0];
const silentAnsweringCalls = document.getElementsByClassName('silent-answer')[0];
const olangCalls = document.getElementsByClassName('olang')[0];
const faxCalls = document.getElementsByClassName('fax')[0];
const sitToneCalls = document.getElementsByClassName('sit-tone')[0];
const callButtons = document.querySelectorAll('.call-add');

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

function updateTotalCount() {
    totalCalls = normalCallCount + silentCallCount + olangCallCount + silentAnsweringCallCount + busyCallCount + noAnswerCallCount + faxCallCount +sitToneCallCount;
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
    totalContainer.innerHTML = "";
    silentCalls.innerText = 0;
    silentAnsweringCalls.innerText = 0;
    olangCalls.innerText = 0;
    faxCalls.innerText = 0;
    sitToneCalls.innerText = 0;
}

function updateVariables() {
    totalCalls = parseInt(callsArray.totalCalls);
    normalCallCount = parseInt(callsArray.normalCallCount);
    busyCallCount = parseInt(callsArray.busyCallCount);
    noAnswerCallCount=parseInt(callsArray.noAnswerCallCount);
    silentCallCount = parseInt(callsArray.silentCallCount);
    silentAnsweringCallCount = parseInt(callsArray.silentAnsweringCallCount);
    olangCallCount = parseInt(callsArray.olangCallCount);
    faxCallCount = parseInt(callsArray.faxCallCount);
    sitToneCallCount = parseInt(callsArray.sitToneCallCount);
}


function updateLocalStorage() {
    if (!localStorage.getItem('callsArray')) {
        localStorage.setItem('callsArray', JSON.stringify(callsArray));
    }
    else {
        let tempCallCounts = JSON.parse(localStorage.getItem('callsArray'));
        if (totalCalls == 0) {
            callsArray = tempCallCounts;
            updateVariables();
            updateDisplay();
        }
        else {
        localStorage.setItem('callsArray', JSON.stringify(callsArray));
        }
    }
}

function clearLocalStorage() {
    localStorage.clear();
}

for (const callButton of callButtons) {
    callButton.addEventListener('click', function() {
        if (callButton.classList.contains('normal')) {
            normalCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();
        }
        else if (callButton.classList.contains('busy')) {
            busyCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();
        }
        else if (callButton.classList.contains('no-answer')) {
            noAnswerCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();

        }
        else if (callButton.classList.contains('silent')) {
            silentCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();

        }
        else if (callButton.classList.contains('silent-answer')) {
            silentAnsweringCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();

        }
        else if (callButton.classList.contains('olang')) {
            olangCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();

        }
        else if (callButton.classList.contains('fax')) {
            faxCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();

        }
        else if (callButton.classList.contains('sit-tone')) {
            sitToneCallCount++;
            updateDisplay();
            updateTotalCount();
            updateCallsArray();
            updateLocalStorage();

        }
        else if (callButton.classList.contains('clear')) {
            clearAll();
            updateCallsArray();
            updateDisplay();
            clearLocalStorage();
        }
    });
}



document.addEventListener('DOMContentLoaded', updateLocalStorage);