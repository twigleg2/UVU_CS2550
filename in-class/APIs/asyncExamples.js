//asynchronous with callbacks
function successCallback(value) {
    //do something with the good value
}

function failCallback(error) {
    //cleanup the mess or handle the error
}

loadFile(fileName, successCallback, failCallback) {
    //attempt to load the file

    if (fileLoaded) {
        successCallback("yay!");
    } else {
        failCallback("boo!");
    }
}


doSomething(function (result) {
    doSomethingElse(result, function (newResult) {
        doThirdThing(newResult, function (finalResult) {
            console.log(`Got the final result: ${finalResult}`);
        }, failureCallback);
    }, failureCallback);
}, failureCallback);


//asynchronous with promises
loadFile.then(successCallback, failCallback);

loadFile.then(successCallback).catch(failCallback);

loadFile.then(successCallback); //Note that a failCallback is not required.



doSomething()
    .then((result) => doSomethingElse(result))
    .then((newResult) => doThirdThing(newResult))
    .then((finalResult) => {
        console.log(`Got the final result: ${finalResult}`);
    })
    .catch(failureCallback);


let loadFile = new Promise((successCallback, failCallback) => {
    //attempt to load the file

    if (fileLoaded) {
        successCallback(fileContents);
    } else {
        failCallback(fileName);
    }
});


//asynchronous using async/await
function makeApiCall(searchEngine, query) {
    //attempt the API call

    return new Promise(resolve => result);
}
function makeApiCall(searchEngine, query) {
    //attempt the API call

    return Promise.resolve(result);
}
async function makeApiCall(searchEngine, query) {
    //attempt the API call

    return result;  //this result will be wrapped in a promise
}

makeApiCall(searchEngine, query).then(successCallback);

async function GetSearchResult(searchEngine, query) {
    const response = await MakeApiCall(searchEngine, query);

    document.getElementById("firstSearchResult").innerHTML = response[0];
}