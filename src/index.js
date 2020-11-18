const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
});

function fetchData() {
  return fetch("https://randomuser.me/api/")
    .then(function (response) {
      return response.json();
    })
    .then(function (responseJson) {
      // debugger;
      // let email = document.getElementById("email");
      // email.innerText = responseJson.results[0].email;
      document.getElementsById("email").innerText =
      responseJson.results[0].email;
  }
      // let h1 = document.createElement("h1");
      // console.log(responseJson.results);
      // const foo = document.querySelector(".container");
      // foo.appendChild(h1);
    });
}

const input = document.getElementByClassName("col");
input.addEventListener("click", function () {
  alert("I was clicked!");
});










// document.addEventListener("click", btnPrimary);

// function btnPrimary() {
//   const input = document.getElementById("input");
//   input.addEventListener("click", function (event) {
//     alert("I was clicked!");
//   });

// fetchData();
// }