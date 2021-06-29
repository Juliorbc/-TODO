function render(component, container) {
  container.innerHTML = component;
}

function setTrashIcon(className) {
  const $iconButtons = document.querySelectorAll(className)

  $iconButtons.forEach(function (icon) {
    icon.style.display = "block";
  }
}
export {
  render,
  setTrashIcon
}