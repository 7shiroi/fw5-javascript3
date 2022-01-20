const getMonth = (callback) => {
  setTimeout(() => {
    let error = false;
    let month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    if (!error) {
      callback(null, month);
    } else {
      callback(new Error("Sorry Data Not Found", []));
    }
  }, 4000);
};

function mapMonths(error, month) {
  if (error == null) {
    let mapped = [];
    if (month.length > 0) {
      mapped = month.map((x) => x);
    }
    console.log(mapped);
  } else {
    console.log(error);
  }
}

getMonth(mapMonths);
