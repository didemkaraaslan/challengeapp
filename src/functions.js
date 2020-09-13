const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

const sortInAscendingOrder = (array, property) => {
  return array.sort((a, b) => a[property] - b[property]);
};

const sortInDescendingOrder = (array, property) => {
  return array.sort((a, b) => b[property] - a[property]);
};

module.exports = {
  saveToLocalStorage,
  getFromLocalStorage,
  sortInAscendingOrder,
  sortInDescendingOrder,
};
