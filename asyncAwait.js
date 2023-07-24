// Async - Await

function getData(data){
    return new Promise((resolve, reject) => { // return promise
        console.log("Trying to get data...");

        if(data){
            resolve("Given received");
        } else {
            reject("Failed to receive given");
        }
    });
}

function cleanData(receivedData){
    return new Promise((resolve, reject) => {  // return promise
        console.log("Data is being edited...");

        if(receivedData){
            resolve("Data edited");
        } else {
            reject("Data could not edit")
        }
    })
}


async function processData() {
    try {
        const receivedData = await getData(true);
        console.log(receivedData);
        const cleanedData = await cleanData(true);
        console.log(cleanedData);
    } catch(error){
        console.log(error);
    }
}


processData();
