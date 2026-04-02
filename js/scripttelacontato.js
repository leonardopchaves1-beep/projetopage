class MobileNavbar {
  constructor(mobileMenu, navList, navLinks) {
    this.mobileMenu = document.querySelector(mobileMenu);
    this.navList = document.querySelector(navList);
    this.navLinks = document.querySelectorAll(navLinks);
    this.activeClass = "active";

    this.handleClick = this.handleClick.bind(this);
  }

  animateLinks() {
    this.navLinks.forEach((link, index) => {
      link.style.animation
        ? (link.style.animation = "")
        : (link.style.animation = `navLinkFade 0.5s ease forwards ${
            index / 7 + 0.3
          }s`);
    });
  }

  handleClick() {
    this.navList.classList.toggle(this.activeClass);
    this.mobileMenu.classList.toggle(this.activeClass);
    this.animateLinks();
  }

  addClickEvent() {
    this.mobileMenu.addEventListener("click", this.handleClick);
  }

  init() {
    if (this.mobileMenu && this.navList) {
      this.addClickEvent();
    }
    return this;
  }
}

/* ===== ESPERA O NAV SER CARREGADO ===== */
document.addEventListener("DOMContentLoaded", () => {
  const target = document.getElementById("nav");

  const observer = new MutationObserver(() => {
    if (document.querySelector(".mobile-menu")) {
      const mobileNavbar = new MobileNavbar(
        ".mobile-menu",
        ".nav-list",
        ".nav-list li"
      );
      mobileNavbar.init();
      observer.disconnect();
    }
  });

  observer.observe(target, {
    childList: true,
    subtree: true,
  });
});

//DOM no Formulário - Validação

const form = document.querySelector("#fale-comigo");
const erro = document.querySelector("#erro");

form.addEventListener("submit", function(event) {
  event.preventDefault();

  const nome = document.querySelector("#nome").value;
  const email = document.querySelector("#email").value;
  const numero = document.querySelector("#number").value.trim();
  const mensagem = document.querySelector("#mensagem").value;

  //validação
  if(nome === "") {
    erro.textContent = "Nome Obrigatório!";
    erro.style.color = "red";
    return;
  }

  if(!email.includes("@")) {
    erro.textContent = "Email Inválido!"
    erro.style.color = "red"
    return;
  }

  if(numero.length !== 11) {
    erro.textContent = "Número deve ter 11 dígitos!"
    erro.style.color = "red";
    return;
  }

  //limpa erro
  erro.textContent = "";

  // exibe no console
  console.log(nome);
  console.log(email);
  console.log(numero);
  console.log(mensagem);

  alert("Formulário enviado!");
});