/*
function answer() {
  var r7 = document.getElementById("Radio7");
  if (r7.checked) {
    document.getElementById("answer").innerHTML}
}
*/



function change(){
  var strana = document.getElementById("div1");
  var strana1 = document.getElementById("div2");
strana.style.display = "none";
strana1.style.display = "block";
}

function change1(){
  var x = document.getElementById("name1");
  var strana2 = document.getElementById("div2");
  var strana3 = document.getElementById("div3");
if (x.value){
  strana2.style.display = "none";
  strana3.style.display = "block";
}
else{
  alert("Name must be filled out!")
}
}

function change2(){
  var strana4 = document.getElementById("div3");
  var strana5 = document.getElementById("div4");
strana4.style.display = "none";
strana5.style.display = "block";
}

function change3(){
  var strana6 = document.getElementById("div4");
  var strana7 = document.getElementById("div5");
strana6.style.display = "none";
strana7.style.display = "block";
}

function change4(){
  var strana8 = document.getElementById("div5");
  var strana9 = document.getElementById("div6");
strana8.style.display = "none";
strana9.style.display = "block";
}

function change5(){
  var y = document.getElementById("ocena");
  var strana10 = document.getElementById("div6");
  var strana11 = document.getElementById("div7");
  if (y=1){
    strana10.style.display = "none";
    strana11.style.display = "block";
  }
  var y = document.getElementById("ocena");
  var strana12 = document.getElementById("div7");
  var strana13 = document.getElementById("div8");
  if (y=2){
    strana12.style.display = "none";
    strana13.style.display = "block";
  }
  var y = document.getElementById("ocena");
  var strana14 = document.getElementById("div8");
  var strana15 = document.getElementById("div9");
  if (y=3){
    strana14.style.display = "none";
    strana15.style.display = "block";
  }
  var i1 = document.getElementById("ocena");
  var strana16 = document.getElementById("div9");
  var strana17 = document.getElementById("div10");
if (i1.value) {
    strana16.style.display = "none";
    strana17.style.display = "block";
}
var i1 = document.getElementById("ocena");
var strana18 = document.getElementById("div10");
var strana19 = document.getElementById("div11");
if (i1.value) {
  strana18.style.display = "none";
  strana19.style.display = "block";
  }
}

/*var i1 = document.getElementById("ime2");
  var strana16 = document.getElementById("div9");
  var strana17 = document.getElementById("div10");
if (i1.value) {
    strana16.style.display = "none";
    strana17.style.display = "block";
}
*/

/*document.getElementById("ime").innerHTML = "x" <br> + "thank you for your time!";*/


