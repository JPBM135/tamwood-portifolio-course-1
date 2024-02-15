const OPEN_CLASS = "main__accordion__body-wrapper--open";

function toggle(index) {
  const elementsToClose = document.querySelectorAll(
    `.main__accordion__body-wrapper:not(#accordion-toggle-${index})`
  );

  for (const element of elementsToClose) {
    element.classList.remove(OPEN_CLASS);
  }

  const toggleElement = document.getElementById(`accordion-toggle-${index}`);
  toggleElement?.classList.toggle(OPEN_CLASS);
}
