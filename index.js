
async function loadFile() {
    let fileLoaded = false;

    if (fileLoaded) {
        return "file was loaded";
    } else {
        throw "file was not loaded"; 
    }
}
    
async function startProcess() {
    try {
        let msg = await loadFile();
        console.log(msg);    
    } catch (error) {
        console.log(error);
    }
}

startProcess();