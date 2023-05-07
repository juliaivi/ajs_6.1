export default function orderByProps(obj, arr) {
  const sortElem1 = [];
  const sortElem2 = [];
  for (const key in obj) {
    if (arr.includes(key)) {
      sortElem1.push({ key, value: obj[key] });
    } else {
      sortElem2.push({ key, value: obj[key] });
    }
  }

  sortElem2.sort((a, b) => ((a.key > b.key) ? 1 : -1));

  return [...sortElem1, ...sortElem2];
}
