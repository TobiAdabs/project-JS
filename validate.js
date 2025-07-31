const users = [
    {username: "Tobiloba", password: "adabs123"},
    {username: "Damilare", password: "tolu2352"},
    {username: "Mummy", password: "tope234"}
];

const username = document.querySelector("#userName");
const password = document.querySelector("#passWord");
const btn = document.querySelector("#btn");
const error = document.querySelector("#error");

// function validate() {
    const userName = username.value;
    const passWord = password.value;
    const errorMsg = "Invalid Username Or Password 🤣";
    let valid = users.find((user) => user.username === userName && user.password === passWord);
    console.log(valid)
    // if (valid) {
    //     window.location.href=`signin.html`;
    // }
    // else {
    //     error.innerHTML=`${errorMsg}`;
    // }
// }

// btn.addEventListener('click', validate)

// Clear the form after submitting