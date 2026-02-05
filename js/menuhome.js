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

/* 🔥 ESPERA O NAV SER INSERIDO PELO include.js */
document.addEventListener("DOMContentLoaded", () => {
  const navContainer = document.getElementById("nav");

  if (!navContainer) return;

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

  observer.observe(navContainer, {
    childList: true,
    subtree: true,
  });
});
