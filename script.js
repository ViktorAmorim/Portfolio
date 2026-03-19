/* Hamburguer Menu */
let button = document.getElementById("hamburguer");
const menu = document.getElementById("menu");

button.addEventListener("click", function () {
  menu.classList.toggle("ativa");
});

/* Enviar Email */
const emailLink = document.getElementById("email-link");

emailLink.addEventListener("click", function (event) {
  event.preventDefault();
  const email = "joao.victor.amorim.martins@hotmail.com";
  const subject = "Contato do Portfólio";
  const body = `Olá João, 
    Vim pelo seu portfólio e gostaria de conversar sobre um projeto.
    Aguardo seu retorno.`;

  window.location.href = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
});

/* Abrir Whatsapp */
const whatsappLink = document.getElementById("whatsapp-link");

whatsappLink.addEventListener("click", function (event) {
  event.preventDefault();
  const phoneNumber = "5548991682376";
  const message = `Olá João, vim pelo seu portfólio e gostaria de conversar sobre um projeto.`;
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");
});
