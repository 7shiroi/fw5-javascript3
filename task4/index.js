const fetch = require("cross-fetch");

const url = "https://jsonplaceholder.typicode.com/users";

// // promises
// fetch(url)
//   .then((res) => {
//     if (res.status >= 400) {
//       throw new Error("Bad response from server");
//     }
//     return res.json();
//   })
//   .then((res) => {
//     res.forEach((item) => {
//       console.log(item.name);
//     });
//   })
//   .catch((err) => {
//     console.error(err);
//   });

//   async/await
(async () => {
  try {
    const res = await fetch(url);

    if (res.status >= 400) {
      throw new Error("Bad response from server");
    }

    const items = await res.json();

    items.forEach((item) => {
      console.log(item.name);
    });
  } catch (err) {
    console.error(err);
  }
})();
