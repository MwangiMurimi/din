function x() {
  var date = document.getElementById("date").value;
  var d = new Date(date);
  var x = d.getDay();
  var gender = document.getElementById("gender").value.toLowerCase();
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"] 
  if (x===0 && gender==="male") {
  document.getElementById("name").value=("Your Akan name is " + maleNames[0] + ".")
  }
  else if (x===1 && gender==="male") {
    document.getElementById("name").value=("Your Akan name is " + maleNames[1] + ".")
  }
  else if (x===2 && gender==="male") {
    document.getElementById("name").value=("Your Akan name is " + maleNames[2] + ".")
  }
  else if (x===3 && gender==="male") {
    document.getElementById("name").value=("Your Akan name is " + maleNames[3] + ".")
  }
  else if (x===4 && gender==="male") {
    document.getElementById("name").value=("Your Akan name is " + maleNames[4] + ".")
  }
  else if (x===5 && gender==="male") {
    document.getElementById("name").value=("Your Akan name is " + maleNames[5] + ".")
  }
  else if (x===6 && gender==="male") {
    document.getElementById("name").value=("Your Akan name is " + maleNames[6] + ".")
  }
  else if (x===0  && gender==="female") {
    document.getElementById("name").value=("Your Akan name is " + femaleNames[0] + ".")
  }
  else if (x===1 && gender==="female") {
    document.getElementById("name").value=("Your Akan name is " + femaleNames[1] + ".")
  }
  else if (x===2 && gender==="female") {
    document.getElementById("name").value=("Your Akan name is " + femaleNames[2] + ".")
  }
  else if (x===3 && gender==="female") {
    document.getElementById("name").value=("Your Akan name is " + femaleNames[3] + ".")
  }
  else if (x===4 && gender==="female") {
    document.getElementById("name").value=("Your Akan name is " + femaleNames[4] + ".")
  }
  else if (x===5 && gender==="female") {
    document.getElementById("name").value=("Your Akan name is " + femaleNames[5] + ".")
  }
  else if (x===6 && gender==="female") {
        document.getElementById("name").value=("Your Akan name is " + femaleNames[6] + ".")
      }
  else {
    alert("Uh-oh! Check your answers for incorrect values.")
  }
}