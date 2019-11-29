function addModals(options, state) {

  function enableModalCloseButton() {
    const modal = document.querySelector(".modal");
    const modalCloseButton = document.querySelector(".close-button");
    modalCloseButton.addEventListener("click", e => {
      modal.classList.toggle("show-modal");
    });
  }

  state.sigmaInstance.bind("clickNode", event => {
    const modal = document.querySelector(".modal");
    modal.classList.toggle("show-modal");
    const modalText = document.querySelector(".modal-text");
    modalText.innerHTML = options.makeModalContent(event.data.node, state.sigmaInstance, options.links);
  });

  enableModalCloseButton();
}