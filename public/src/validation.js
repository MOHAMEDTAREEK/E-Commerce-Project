let name, email, password;

function validateName() {
  //name
  let name = document.getElementById("name").value;
  if (name.length < 3) {
    alert("Name should be at least 3 characters long.");
    return false;
  }
}

function validateEmail() {
  //email
  let email = document.getElementById("email").value;
  let atpos = email.indexOf("@");
  let dotpos = email.lastIndexOf(".");
  if (atpos < 1 || dotpos - atpos < 2) {
    alert("Please enter a valid email address.");
    return false;
  }
}

function validatePassword() {
  //password
  var decimal =
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$";
  let password = document.getElementById("password").value;
  if (password.match(decimal)) {
    alert(
      "Password should contain at least one capital letter and one number, and be at least 8 characters long."
    );
    return false;
  }
}
function preventSubmit() {
  return false;
}

// async function sendData() {
//   //send data
//   let name = document.getElementById("name").value;
//   let email = document.getElementById("email").value;
//   let password = document.getElementById("password").value;

//   const apiUrl = "http://localhost:3000/api/customerInfo/";

//   // Use Fetch API for sending the POST request
//   try {
//     const response = await fetch(apiUrl, {
//       method: "POST", // HTTP method for sending data
//       headers: {
//         "Content-Type": "application/json", // Specify JSON data format
//       },
//       body: JSON.stringify({ name, email, password }), // Correct
//     });

//     if (response.ok) {
//       console.log("Data sent successfully!");
//       // Handle successful response (e.g., display a message)
//     } else {
//       console.error("Error sending data:", response.statusText);
//       // Handle errors (e.g., display an error message)
//     }
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }
