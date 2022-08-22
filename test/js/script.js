//Selectors
const addPairButton = document.querySelector(".form__button"),
  sortNameButton = document.querySelector(".pair-list__name-button"),
  sortValueButton = document.querySelector(".pair-list__value-button"),
  deleteAllButton = document.querySelector(".pair-list__delete-button"),
  showXmlButton = document.querySelector(".pair-list__xml-button"),
  list = document.querySelector(".pair-list__list");

//Event Listeners
addPairButton.addEventListener("click", (e) => {
  //Prevent from submitting
  e.preventDefault();
  //Create LI
  const nameValuePair = document.createElement("li"),
    formInput = document.querySelector(".form__input"),
    regex = new RegExp("^[a-zA-Z\\d]+\\s*=\\s*[a-zA-Z\\d]+$");
  //Check for suitability
  if (formInput.value.match(regex)) {
    nameValuePair.innerText = formInput.value.split(" ").join("");
    nameValuePair.classList.add("pair-list__item");
    //Add pair to the box
    list.appendChild(nameValuePair);
    formInput.value = "";
  } else {
    formInput.value = "";
  }
});

sortValueButton.addEventListener("click", () => {
  let switching = true,
    shouldSwitch,
    listItems,
    i;
  while (switching) {
    // No switching is done
    switching = false;
    listItems = list.querySelectorAll(".pair-list__item");
    // Loop through all list items
    for (i = 0; i < listItems.length - 1; i++) {
      // There should be no switching
      shouldSwitch = false;

      /* Check if the next item should
        switch place with the current item */
      if (
        listItems[i].innerHTML.toLowerCase().split("=")[1] >
        listItems[i + 1].innerHTML.toLowerCase().split("=")[1]
      ) {
        /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark the switch as done */
      listItems[i].parentNode.insertBefore(listItems[i + 1], listItems[i]);
      switching = true;
    }
  }
});

sortNameButton.addEventListener("click", () => {
  let listItems,
    switching = true,
    shouldSwitch,
    i;
  while (switching) {
    // No switching is done
    switching = false;
    listItems = list.querySelectorAll(".pair-list__item");
    // Loop through all list items
    for (i = 0; i < listItems.length - 1; i++) {
      // There should be no switching
      shouldSwitch = false;

      /* Check if the next item should
        switch place with the current item */
      if (
        listItems[i].innerHTML.toLowerCase() >
        listItems[i + 1].innerHTML.toLowerCase()
      ) {
        /* If next item is alphabetically lower than current item,
          mark as a switch and break the loop */
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      /* If a switch has been marked, make the switch
        and mark the switch as done */
      listItems[i].parentNode.insertBefore(listItems[i + 1], listItems[i]);
      switching = true;
    }
  }
});

deleteAllButton.addEventListener("click", () => {
  const listItems = list.querySelectorAll(".pair-list__item");
  //Remove all items from the box
  listItems.forEach((el) => el.remove());
});
