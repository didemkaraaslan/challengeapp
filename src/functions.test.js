import {
  saveToLocalStorage,
  getFromLocalStorage,
  sortInAscendingOrder,
  sortInDescendingOrder,
} from "./functions";

const inputArray = [
  {
    id: 0,
    name: "Hacker News",
    url: "(https://news.ycombinator.com/)",
    points: 6,
  },
  {
    id: 1,
    name: "Product Hunt",
    url: "(https://producthunt.com/)",
    points: 3,
  },
  {
    id: 2,
    name: "Reddit",
    url: "(https://www.reddit.com/)",
    points: 8,
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

test("sortInAscendingOrder - sorts given array of objects in ascending order", () => {
  const expectedArray = [
    {
      id: 1,
      name: "Product Hunt",
      url: "(https://producthunt.com/)",
      points: 3,
    },
    {
      id: 0,
      name: "Hacker News",
      url: "(https://news.ycombinator.com/)",
      points: 6,
    },
    {
      id: 2,
      name: "Reddit",
      url: "(https://www.reddit.com/)",
      points: 8,
    },
  ];
  expect(sortInAscendingOrder(inputArray, "points")).toMatchObject(
    expectedArray
  );
});

test("sortInDescendingOrder - sorts given array of objects in descending order", () => {
  const expectedArray = [
    {
      id: 2,
      name: "Reddit",
      url: "(https://www.reddit.com/)",
      points: 8,
    },
    {
      id: 0,
      name: "Hacker News",
      url: "(https://news.ycombinator.com/)",
      points: 6,
    },
    {
      id: 1,
      name: "Product Hunt",
      url: "(https://producthunt.com/)",
      points: 3,
    },
  ];
  expect(sortInDescendingOrder(inputArray, "points")).toMatchObject(
    expectedArray
  );
});
