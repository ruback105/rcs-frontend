const form = document.getElementById("signup-form");

const emptyInputMessage = "This field is required";

function setError(errorElement, text) {
  errorElement.textContent = text;
}

form.addEventListener("submit", (evt) => {
  evt.preventDefault();

  const inputFields = form.getElementsByTagName("input");

  if (inputFields.length) {
    Array.from(inputFields).forEach((inputField) => {
      const { value } = inputField;
      const errorParagraph = inputField.parentNode.getElementsByTagName("p")[0];
      let errorText = "";

      if (!value) {
        errorText = emptyInputMessage;
      }

      if (value) {
        switch (inputField.name) {
          case "username":
            if (value.length < 4) {
              errorText = "Username must be at least 4 characters";
            } else if (value.length > 10) {
              errorText = "Username must be less than 10 characters";
            }
            break;
          case "email":
            const regex =
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!regex.test(value)) {
              errorText = "Not matching email format";
            }
            break;
          default:
            return;
        }
      }

      setError(errorParagraph, errorText);
    });

    // no errors
    // form.submit()
  }
});
