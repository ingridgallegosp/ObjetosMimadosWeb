
/* export const handleSubmit = (event) => {
    event.preventDefault();
  
    const myForm = event.target;
    const formData = new FormData(myForm);
    
    myForm.reset();

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(formData).toString(),
    })
        //.then(() => window.location.href = "/success.html")
        .then(() => console.log("Form successfully submitted"))
        .catch((error) => alert(error));
  };  */