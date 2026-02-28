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

  const gender = document.contactForm.gender.value;
  console.log(gender);

  if (name == "") {
    document.getElementById("nameErr").innerHTML = "please enter the name";
  } else {
    const regexname = /^[a-zA-Z ]{2,30}$/;

    if (regexname.test(name)) {
      document.getElementById("nameErr").innerHTML = "";
    } else {
      document.getElementById("nameErr").innerHTML = "please enter valid name";
    }
  }

  if (email == "") {
    document.getElementById("emailErr").innerHTML = "please enter the email";
  } else {
    const regexemail = /^[a-z0-9][\w\.]+\@\w+?(\.\w+){1,}$/;

    if (regexemail.test(email)) {
      document.getElementById("emailErr").innerHTML = "";
    } else {
      document.getElementById("emailErr").innerHTML =
        "please enter valid email";
    }
  }

  if (mobile == "") {
    document.getElementById("mobileErr").innerHTML =
      "please enter the mobile number";
  } else {
    const regexmobile = /^[789]\d{9}$/;
    if (regexmobile.test(mobile)) {
      document.getElementById("mobileErr").innerHTML = "";
    } else {
      document.getElementById("mobileErr").innerHTML =
        "please enter valid phone";
    }
  }

  if (a == "0") {
    document.getElementById("countryErr").innerHTML =
      "please select the country";
  } else {
    document.getElementById("countryErr").innerHTML = "";
  }

  if (gender == "") {
    document.getElementById("genderErr").innerHTML = "please select gender";
  } else {
    document.getElementById("genderErr").innerHTML = "";
  }

  return false;
}
