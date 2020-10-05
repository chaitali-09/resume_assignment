
  function myFunction() {
      var fullName = document.getElementById("fullName").value;
      document.getElementById("sampleName").innerHTML = fullName;
  
    var designation = document.getElementById("designation").value;
    document.getElementById("sampleDesignation").innerText = designation;

    var description = document.getElementById("description").value;
    document.getElementById("shortDescription").innerText = description;

    var phone = document.getElementById("phone").value;
    document.getElementById("samplePhone").innerText = phone;

    var email = document.getElementById("email").value;
    document.getElementById("sampleEmail").innerText = email;

    var address  = document.getElementById("address").value;
    document.getElementById("sampleAddress").innerText = address;
}

  