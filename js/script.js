///////////////////////////////////////////////////////////
/* Mobile*/
const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector("#navbar__logo");

//Display Mobile Menu
const mobileMenu = () => {
  menu.classList.toggle("is-active");
  menuLinks.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

///////////////////////////////////////////////////////////
/* Validation formulaire*/
const validateForm = () => {
  const nom = document.getElementById("nom");
  const prenom = document.getElementById("prenom");
  const email = document.getElementById("email");

  const nomValue = nom.value.trim();
  const prenomValue = prenom.value.trim();
  const emailValue = email.value.trim();

  let noError = true;

  //Validation du Nom de famille
  if (nomValue === "") {
    setError(nom, "Le nom ne peut pas être vide");
    noError = false;
  } else {
    setSuccess(nom);
  }

  //Validation du Prenom
  if (prenomValue === "") {
    setError(prenom, "Le prenom ne peut pas être vide");
    noError = false;
  } else {
    setSuccess(prenom);
  }

  //Validation du email
  if (emailValue === "") {
    setError(email, "Email ne peut être vide");
    noError = false;
  } else if (!validateEmail(emailValue)) {
    setError(email, "Entrez une adresse courriel valide");
    noError = false;
  } else {
    setSuccess(email);
  }

  console.log(noError);
  return noError;
};

const validateEmail = (email) => {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return re.test(String(email).toLowerCase());
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".errorMessage");

  errorDisplay.innerText = "";
  inputControl.classList.remove("error");
  inputControl.classList.add("success");
};
