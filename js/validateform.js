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

  if(name ==''){
    document.getElementById("nameErr").innerHTML="please enter the name";
  }else{
     document.getElementById("nameErr").innerHTML="";
  }
   if(email ==''){
    document.getElementById("emailErr").innerHTML="please enter the email";
  }else{
     document.getElementById("emailErr").innerHTML="";
  }
   if(mobile ==''){
    document.getElementById("mobileErr").innerHTML="please enter the mobile number";
  }else{
     document.getElementById("mobileErr").innerHTML="";
  }

  if(a =='0'){
    document.getElementById("countryErr").innerHTML="please select the country";
  }else{
     document.getElementById("countryErr").innerHTML="";
  }




  return false;
}
