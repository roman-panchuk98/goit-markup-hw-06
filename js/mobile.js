(() => {
    const refs = {
      // Додати атрибут data-modal-open на кнопку відкриття
      openModalBtn: document.querySelector("[data-menu-open]"),
      // Додати атрибут data-modal-close на кнопку закриття
      closeModalBtn: document.querySelector("[data-menu-close]"),
      // Додати атрибут data-modal на бекдроп модалки
      modal: document.querySelector("[data-menu]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleMenu);
    refs.closeModalBtn.addEventListener("click", toggleMenu);
  
    function toggleMenu() {
      // is-open це клас який буде додаватися/забиратися на бекдроп при натисканні на кнопки
      refs.modal.classList.toggle("is-open");
    }
  })();