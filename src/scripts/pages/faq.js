function toggle(index) {
  const elementsToClose = document.querySelectorAll(
    `.main__accordion__body-wrapper:not(#accordion-toggle-${index})`
  );

  for (const element of elementsToClose) {
    element.classList.remove('main__accordion__body-wrapper--open');
  }

  const toggleElement = document.getElementById(`accordion-toggle-${index}`);

  toggleElement?.classList.toggle('main__accordion__body-wrapper--open');
}