const contactForm = document.getElementById("contactForm");

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");

const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();

  formMessage.innerHTML = "";

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // EMAIL REGEX

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // RESET BORDER

  resetBorder();

  // VALIDATION

  if (name === "") {
    showError(nameInput, "Please enter your name");
    return;
  }

  if (email === "") {
    showError(emailInput, "Please enter your email");
    return;
  }

  if (!emailPattern.test(email)) {
    showError(emailInput, "Please enter valid email");
    return;
  }

  if (subject === "") {
    showError(subjectInput, "Please enter subject");
    return;
  }

  if (message === "") {
    showError(messageInput, "Please enter message");
    return;
  }

  if (message.length < 10) {
    showError(messageInput, "Message must be at least 10 characters");

    return;
  }

  // SUCCESS

  formMessage.innerHTML = "Message sent successfully!";

  formMessage.classList.remove("text-red-500");

  formMessage.classList.add("text-green-700");

  contactForm.reset();
});

// SHOW ERROR

function showError(input, message) {
  input.classList.add("border-red-500", "focus:ring-red-200");

  formMessage.innerHTML = message;

  formMessage.classList.remove("text-green-700");

  formMessage.classList.add("text-red-500");
}

// RESET BORDER

function resetBorder() {
  const allInputs = [nameInput, emailInput, subjectInput, messageInput];

  allInputs.forEach((input) => {
    input.classList.remove("border-red-500", "focus:ring-red-200");
  });
}
