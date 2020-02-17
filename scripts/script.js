let form = $("form");

function onSubmit(event) {
  event.preventDefault();

  let ids = ["#first-name", "#last-name", "#e-mail"];
  ids.forEach(checkField);
}

function checkField(id) {

  let inputElement = $(id);
  let inputElementValue = inputElement.val();
  let hasError = inputElementValue === "";
  let errorElement = inputElement.next();

  errorElement.toggleClass("has-error", hasError);
}

form.submit(onSubmit);