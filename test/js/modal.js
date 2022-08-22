//Selectors
const openModalButton = document.querySelector(".pair-list__xml-button"),
  closeModalButton = document.querySelector(".modal__close-button"),
  overlay = document.getElementById("overlay"),
  listModal = document.querySelector(".modal__list");

//Event Lissteners

//Open modal on button click
openModalButton.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  openModal(modal);
});

//Close modal on overlay click
overlay.addEventListener("click", () => {
  const modal = document.querySelector(".modal.active");
  closeModal(modal);
});

//Close modal on button click
closeModalButton.addEventListener("click", () => {
  const modal = document.querySelector(".modal");
  closeModal(modal);
});

//Functions

//Open modal
function openModal(modal) {
  //Check for modal
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");

  //Show items in xml
  const listItems = document.querySelectorAll(".pair-list__item");

  listItems.forEach((el) => {
    const nameValuePair = document.createElement("li");
    nameValuePair.innerText = `<message>${el.innerText}</message>`;
    nameValuePair.classList.add("modal__item");
    listModal.appendChild(nameValuePair);
  });
}

//Close modal
function closeModal(modal) {
  //Check for modal
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");

  //Remove xml items
  const modalItems = document.querySelectorAll(".modal__item");

  modalItems.forEach((el) => {
    el.remove();
  });
}
