function addModals(options, state) {
  state.sigmaInstance.bind("clickNode", event => {
    const modal = document.querySelector(".modal");
    state.isModalOpen = true;
    modal.classList.toggle("show-modal");
    const modalText = document.querySelector(".modal-text");
    modalText.innerHTML = options.makeModalContent(event.data.node, state.sigmaInstance, options.links);
  });

  // Enable close button for modal
  const modal = document.querySelector(".modal");
  const modalCloseButton = document.querySelector(".close-button");
  modalCloseButton.addEventListener("click", e => {
    modal.classList.toggle("show-modal");
    state.isModalOpen = false;
  });

  document.addEventListener('keydown', function (event) {
    if (state.isModalOpen && event.keyCode == 27) { // ESC key
      modal.classList.toggle("show-modal");
    }
  });
}