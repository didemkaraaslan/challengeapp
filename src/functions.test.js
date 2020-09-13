import {
  saveToLocalStorage,
  getFromLocalStorage,
  sortByMostVoted,
  sortByLessVoted,
  sortByLastUpdatedTime,
} from "./functions";
import moment from "moment";

const inputArray = [
  {
    points: 1,
    lastUpdated: moment("2013-03-24"),
  },
  {
    points: 3,
    lastUpdated: moment("2011-03-24"),
  },
  {
    points: 5,
    lastUpdated: moment("2011-03-24"),
  },
  {
    points: 3,
    lastUpdated: moment("2016-03-24"),
  },
];

test("saveToLocalStorage - saves (key, 1) into localStorage", () => {
  saveToLocalStorage("key", 1);
  expect(localStorage.getItem("key")).toBe("1");
});

test("getFromLocalStorage - gets (key, 1) from localStorage", () => {
  localStorage.setItem("key", 1);
  expect(getFromLocalStorage("key")).toBe(1);
});

test("sortByLessVoted", () => {
  const expectedArray = [
    {
      points: 1,
      lastUpdated: moment("2013-03-24"),
    },
    {
      points: 3,
      lastUpdated: moment("2016-03-24"),
    },
    {
      points: 3,
      lastUpdated: moment("2011-03-24"),
    },
    {
      points: 5,
      lastUpdated: moment("2011-03-24"),
    },
  ];

  expect(sortByLessVoted(inputArray)).toMatchObject(expectedArray);
});

test("sortByMostVoted", () => {
  const expectedArray = [
    {
      points: 5,
      lastUpdated: moment("2011-03-24"),
    },
    {
      points: 3,
      lastUpdated: moment("2016-03-24"),
    },
    {
      points: 3,
      lastUpdated: moment("2011-03-24"),
    },
    {
      points: 1,
      lastUpdated: moment("2013-03-24"),
    },
  ];

  expect(sortByMostVoted(inputArray)).toMatchObject(expectedArray);
});

test("sortByLastUpdatedTime", () => {
  const inputArray = [
    {
      lastUpdated: moment("2013-03-24"),
    },
    {
      lastUpdated: moment("2016-03-24"),
    },
    {
      lastUpdated: moment("2011-03-24"),
    },
  ];

  const expectedArray = [
    {
      lastUpdated: moment("2016-03-24"),
    },
    {
      lastUpdated: moment("2013-03-24"),
    },
    {
      lastUpdated: moment("2011-03-24"),
    },
  ];

  expect(sortByLastUpdatedTime(inputArray)).toMatchObject(expectedArray);
});
