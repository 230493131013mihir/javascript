function validateForm() {
  //   console.log("ssdd");
  const name = document.contactForm.name.value;
  console.log(name);

  const email = document.contactForm.email.value;
  console.log(email);

  const mobile = document.contactForm.mobile.value;
  console.log(mobile);

  const a = document.contactForm.country.value;
  console.log(a);

 let formerr = false;

  const hoobies = document.querySelectorAll('input[name="hobbies"]:checked');
  console.log(hoobies.length);
  if (hoobies.length < 2) {
    document.getElementById("hobbyErr").innerHTML =
      "please select at least 2 hoobies";
     formerr=true;

  } else {
    document.getElementById("hobbyErr").innerHTML = "";
  }

  if (name == "") {
    document.getElementById("nameErr").innerHTML = "please enter the name";
    formerr=true;
  } else {
    document.getElementById("nameErr").innerHTML = "";
  }
  if (email == "") {
    document.getElementById("emailErr").innerHTML = "please enter the email";
    formerr=true;
  } else {
    document.getElementById("emailErr").innerHTML = "";
  }
  if (mobile == "") {
    document.getElementById("mobileErr").innerHTML =
      "please enter the mobile number";
      formerr=true;
  } else {
    document.getElementById("mobileErr").innerHTML = "";
  }

  if (a == "0") {
    document.getElementById("countryErr").innerHTML =
      "please select the country";
      formerr=true;
  } else {
    document.getElementById("countryErr").innerHTML = "";
  }

  return !formerr;
}
