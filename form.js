/* import isValidEmail from './utils/validations.js'
 */export const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);

/* //---
    const name = formData.get("name");
    const email = formData.get("email");
  
    if (!name) {
      alert("Por favor, ingresa tu nombre.");
      return;
    }
  
    if (!isValidEmail(email)) {
      alert("Por favor, ingresa un email válido.");
      return;
    } */
    
    myForm.reset();
//---

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
        .then(() => navigate("/success.html")) // custom page insted of console.log
        //.then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
  };
