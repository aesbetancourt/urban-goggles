const pyscanner = require("../scanner/python_analyzer");
const ktscanner = require("../scanner/kotlin_analizer");
const pythonShell = require('../shell/python');


/* CodeMirror windows */

const myPythonCode = CodeMirror(document.getElementById("python-code"), {
    mode:  "python",
    lineNumbers: true,
    theme: "nord"
});
const myKotlinCode = CodeMirror(document.getElementById("kotlin-code"), {
    mode:  "clike",
    lineNumbers: true,
    theme: "nord"
});


/* Lexical Analyzer */

function callPyScanner() {
    let pycode = myPythonCode.getValue();
    let tokens = pyscanner(pycode);
    console.log(tokens);
}
function callKtScanner() {
    let ktcode = myKotlinCode.getValue();
    let tokens2 = ktscanner(ktcode);
    console.log(tokens2);
}

/* Shells execution */

async function runPython() {
    let code = myPythonCode.getValue();
    pythonShell(code);
}
/* Set editor text */
function setpyvalue(text){
    var pycode = myPythonCode.setValue(text);
}
function setktvalue(text){
    var ktcode = myKotlinCode.setValue(text);
}



/* Select Language Arrow */
var band=0;
function arrow(){
    if(band===0){
        document.getElementById('icon').style.transform = 'rotateZ(-180deg)';
        band=1;
    }else{
        document.getElementById('icon').style.transform = 'rotateZ(0deg)';
        band=0;
    }
}

function select_scanner(){
    // Change 1 to 0 when everything is ready
    if(band===1){
        callPyScanner();
    }else{
        //console.log('kt scanner')
        callKtScanner();
    }
}
function runCode(){
    if(band===1){
        runPython()
    }else{
        runKotlin()
    }
}

/* Import py or kt files */

function importpy(){
    var file=document.getElementById('imp_py').files[0];;
    document.getElementById('imp_py').value="";
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        setpyvalue(content);
    }
}
function importkt(){
    var file=document.getElementById('imp_kt').files[0];
    document.getElementById('imp_kt').value="";
    var reader = new FileReader();
    reader.readAsText(file,'UTF-8');
    reader.onload = readerEvent => {
        var content = readerEvent.target.result;
        setktvalue(content);
    }
}