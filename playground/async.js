var getUser = (id, callback) => {
    var user = {
        id: 1,
        name: "Yura"
    };
    callback(user);
};

getUser(1, (u) => {
    console.log(u.name);
});