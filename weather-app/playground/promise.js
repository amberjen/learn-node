let asyncAdd = (a, b) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {

      if(typeof a === 'number' && typeof b ==='number') {
        resolve(a + b);
      } else {
        reject('Arguments must be numbers');
      }

    }, 1500);
  });

};

asyncAdd(3, 7).then((res)=> {
  console.log('Result:', res);
  return asyncAdd(res, 31);
}).then((res)=>{
  console.log('Result should be 41:', res);
}).catch((errorMessage) => {
  console.log('Error', errorMessage);
});


// let somePromise = new Promise((resolve, reject) => {
//
//   setTimeout(() => {
//     resolve('Hey. It worked!');
//     resolve();
//     reject('Unable to fullfill promise');
//   }, 2500);
//
// });
//
//
// somePromise.then((message) => {
//   console.log('Success:', message);
// }, (errorMessage) => {
//   console.log('Error:', errorMessage);
// });
