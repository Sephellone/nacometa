const toggleElement = (container, containerClassClosed, containerClassOpened) => {
  if (container.classList.contains(containerClassClosed)) {
    container.classList.remove(containerClassClosed);
    container.classList.add(containerClassOpened);
  } else {
    container.classList.add(containerClassClosed);
    container.classList.remove(containerClassOpened);
  }
};

export {toggleElement};
