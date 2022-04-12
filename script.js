const cel = document.getElementById("cel");
const fah = document.getElementById("fah");


cel.addEventListener("input",function() {
     let value = this.value;
     let fahvalue = ((value * 9/5) + 32).toFixed(2);
     
     fah.value = fahvalue;

})

fah.addEventListener("input",function() {
     let value = this.value;
     let celvalue = ((value - 32) * 5/9).toFixed(2);
     cel.value = celvalue;

})