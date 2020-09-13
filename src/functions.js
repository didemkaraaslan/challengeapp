const saveToLocalStorage = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const getFromLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

/*
 ** Sorts array based firstly on "points" property
 ** If points are the same then sorts the array based on lastUpdated time
 */
const sortByLessVoted = (array) => {
  return array.sort((a, b) => {
    if (a["points"] === b["points"]) {
      return b["lastUpdated"] - a["lastUpdated"];
    }
    return a["points"] - b["points"];
  });
};

/*
 ** Sorts array based firstly on "points" property
 ** If points are the same then sorts the array based on lastUpdated time
 */
const sortByMostVoted = (array) => {
  return array.sort((a, b) => {
    if (a["points"] === b["points"]) {
      return b["lastUpdated"] - a["lastUpdated"];
    }
    return b["points"] - a["points"];
  });
};

/*
 ** Sorts array based only on "lastUpdated" property in descending order
 */
const sortByLastUpdatedTime = (array) => {
  return array.sort((a, b) => b["lastUpdated"] - a["lastUpdated"]);
};

module.exports = {
  saveToLocalStorage,
  getFromLocalStorage,
  sortByMostVoted,
  sortByLessVoted,
  sortByLastUpdatedTime,
};
