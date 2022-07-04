var global=5;
console.log(global);
function a(){
    var local=6;
    console.log(global);
    console.log(local);
}
console.log(local);
a();