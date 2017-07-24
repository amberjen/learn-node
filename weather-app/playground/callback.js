let getUser = (id, callback) => {
  let user = {
    id: id,
    name: 'Minion'
  };

  setTimeout(() => {
    callback(user);
  }, 3000);
};

getUser(27, (userObject) => {
  console.log(userObject);
});
