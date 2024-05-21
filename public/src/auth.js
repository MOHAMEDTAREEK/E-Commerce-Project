//////////   initialization   ///////////
let emails = [];
let passwords = [];
////////////////////////////////////////

const getUsers = () => {
  fetch("http://localhost:3000/api/users/")
    .then((res) => res.json())
    .then((array) => {
      array.forEach((arrayItem) => {
        emails.push(arrayItem.email);
        passwords.push(arrayItem.password);
      });
      console.log("emails", emails);
      console.log("passwords", passwords);
    })
    .catch((err) => {
      console.error(err);
    });
};
getUsers();

///////////////////////////////////////////

let form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let email = document.getElementById("email").value;
  let loginPassword = document.getElementById("loginPassword").value;
  console.log("email", email);
  console.log("loginPassword", loginPassword);
  addUser(email, loginPassword);
});

const addUser = (email, password) => {
  fetch("http://localhost:3000/api/users", {
    method: "POST",
    body: JSON.stringify({
      email: `${email}`,
      password: `${password}`,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((json) => console.log(json))
    .catch((err) => console.error(err));
};
