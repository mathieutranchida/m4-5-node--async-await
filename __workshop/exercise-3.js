// Exercise 3
// ----------

const doublesLater = async (num) => {
  // 1. waits 2 seconds (You could console a message here. It might make the 2 second wait easier ;)
  let doubledNumber = num * 2;
  let myPromise = new Promise((resolve, reject) => {
    if (typeof num === "number") {
    setTimeout(() => {
      resolve(doubledNumber)
    }, 2000);
  } else {
    reject("error")
  }

  })
    // 2. returns the double of the num
  return await myPromise;
};

// 3. handleSum function (async/await)
const handleSum = async (num) => {
  try {
    console.log(num);
    const double1 = await doublesLater(num);
    console.log(double1);
    const double2 = await doublesLater(double1);
    console.log(double2);
    const double3 = await doublesLater(double2);
    console.log(double3);
    return double3
  } catch (err) {
    console.log(err);
  }
};

// 4. verification
handleSum(10).then((ans) => console.log(ans));
