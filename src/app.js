const app = {
  createElement(element, content) {
    const newElement = document.createElement(element);
    newElement.innerHTML = content;
    return newElement;
  },
};
