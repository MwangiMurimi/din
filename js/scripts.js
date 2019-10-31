function x() {
  var date = document.getElementById("date").value;
  var d = new Date(date);
  var x = d.getDay();
  const male = document.getElementById("male").checked;
  const female = document.getElementById("female").checked;
  var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"]
  var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"]
  if (x === 0 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[0] + ".")
  }
  else if (x === 1 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[1] + ".")
  }
  else if (x === 2 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[2] + ".")
  }
  else if (x === 3 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[3] + ".")
  }
  else if (x === 4 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[4] + ".")
  }
  else if (x === 5 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[5] + ".")
  }
  else if (x === 6 && male) {
    document.getElementById("name").value = ("Your Akan name is " + maleNames[6] + ".")
  }
  else if (x === 0 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[0] + ".")
  }
  else if (x === 1 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[1] + ".")
  }
  else if (x === 2 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[2] + ".")
  }
  else if (x === 3 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[3] + ".")
  }
  else if (x === 4 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[4] + ".")
  }
  else if (x === 5 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[5] + ".")
  }
  else if (x === 6 && female) {
    document.getElementById("name").value = ("Your Akan name is " + femaleNames[6] + ".")
  }
  else {
    alert("Uh-oh! Check your answers for incorrect values.")
  }
}