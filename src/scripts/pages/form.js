/**
 * @type {HTMLInputElement | null}
 */
const email = document.getElementById("form_email");
/**
 * @type {HTMLTextAreaElement | null}
 */
const message = document.getElementById("form_message");
/**
 * @type {HTMLInputElement | null}
 */
const checkbox = document.getElementById("form_checkbox");

if (!email || !message || !checkbox) {
  throw new Error("Form elements not found");
}

const isValid = {
  email: false,
  message: false,
  checkbox: false,
};

function updateSubmitButton() {
  const element = document.getElementById("form_submit");

  if (isValid.email && isValid.message && isValid.checkbox) {
    element?.removeAttribute("disabled");
    element?.classList.add("main__form__submit__button--checkbox-checked");
  } else {
    element?.setAttribute("disabled", "true");
    element?.classList.remove("main__form__submit__button--checkbox-checked");
  }
}

email.addEventListener("input", () => {
  if (
    email.value === "" ||
    email.validity.valueMissing ||
    email.validity.typeMismatch
  ) {
    email.setCustomValidity("Please enter your email");
  } else {
    email.setCustomValidity("");
  }

  isValid.email = email.checkValidity();
  updateSubmitButton();
});

message.addEventListener("input", () => {
  if (message.value === "" || message.validity.valueMissing) {
    message.setCustomValidity("Please enter a message");
  } else {
    message.setCustomValidity("");
  }

  isValid.message = message.checkValidity();
  updateSubmitButton();
});

checkbox.addEventListener("change", () => {
  if (!checkbox.checked) {
    checkbox.setCustomValidity("Please accept the terms and conditions");
  } else {
    checkbox.setCustomValidity("");
  }

  isValid.checkbox = checkbox.checkValidity();
  updateSubmitButton();
});

function submitForm(event) {
  event.preventDefault();
  alert("Thank you for your message!");

  if (!email || !message || !checkbox) {
    throw new Error("Form elements not found");
  }

  email.value = "";
  message.value = "";
  checkbox.checked = false;
}
