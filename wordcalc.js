// let print = function(msg) {
//     document.getElementById("output").innerHTML = "Length is" + msg;
// }

// document.getElementById("btn").onclick = function() {

//     print(document.getElementById('str').value.length);

// }

let button = document.getElementById("btn");
    button.addEventListener('click', function(){
        console.log('output')
    let word = document.getElementById("str").value.length;
    let outputDiv = document.getElementById('output');
    console.log(outputDiv);
    outputDiv.innerHTML = "Length is " + word;

        let button2 = document.getElementById("btn2");
    button2.addEventListener('click', function() {
        let clear = "";
        outputDiv.innerHTML = clear;
    });
});
