var male =  document.getElementById("male").value;
var female = document.getElementById("female").value;
function x(){
  var date = document.getElementById("date").value;
  var d = new Date(date);
  var x = d.getDay();
  document.getElementById("name").value=(x);
};
