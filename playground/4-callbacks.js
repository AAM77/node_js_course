// A callback function is just a function that we
// provide as an argument to another function, with
// the intention of calling it later on.



// setTimeout(() => {
//     console.log('Two seconds are up');
//   }, 2000);

// const names = ['Abe', 'Jen', 'Jess', 'James'];
// const shortNames = names.filter((name) => name.length <= 4)
//
// const geocode = (address, callback) => {
//   setTimeout(() => {
//     const data = {
//       latitude: 0,
//       longitude: 0
//     }
//
//     callback(data);
//   }, 2000)
// }
//
// geocode('Philadelphia', (data) => {
//   console.log(data)
// });

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    callback(sum);
  }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

const add = (num1, num2, callback) => {
  setTimeout(() => {
    const sum = num1 + num2;

    callback(sum);
  }, 2000)
}


add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})
