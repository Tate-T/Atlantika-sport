(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-login-open]"),
      closeModalBtn: document.querySelector("[data-login-close]"),
      modal: document.querySelector("[data-login]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();