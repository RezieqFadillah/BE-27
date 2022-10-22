document
  .getElementById("submit-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    login();
  });

function login() {
    let dataUser = [];
    let formData = {
      username: document.getElementById("username-login").value,
      password: document.getElementById("pass-login").value,
    };
  
    let url = "https://63515f33dfe45bbd55be6e39.mockapi.io/aseanyouthforum/akun";
    fetch(url) 
      .then((response) => response.json())
      .then((result) => {
        result.forEach((data) => {
          if (
            data.username == formData.username &&
            data.password == formData.password
          ) {
            window.location.href = "utama.html";
          }
          else{
            let gagal = document.getElementById("gagal");
            gagal.innerHTML = "Oops, akun tidak ada";
          }
        });
      })
  
      .catch((error) => console.log(error));
  }
  
  // json