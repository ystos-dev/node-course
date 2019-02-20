const users = [{
    id: 1,
    name: 'Yuriy',
    schoolId: 101
}, {
    id: 2,
    name: 'Andrew',
    schoolId: 1011
}];

const grades = [{
    id: 1,
    schoolId: 101,
    grade: 86
}, {
    id: 2,
    schoolId: 1011,
    grade: 100
}, {
    id: 3,
    schoolId: 101,
    grade: 80
}];

const getUser = (id) => {
    return new Promise((resolve, reject) => {
        const user = users.find((user) => user.id === id);
        
        if (user) {
            resolve(user);
        } else {
            reject('User not found');
        }
    })
};

const getGrades = (schoolId) => {
    return new Promise((resolve, reject) => {
        resolve(grades.filter((grade) => grade.schoolId === schoolId));
    })
};

const getStatus = (userId) => {
    return getUser(userId).then((user) => {
        return getGrades(user.schoolId);
    }).then((grades) => {

    });
};



getStatus().then((status) => {

}).catch((e) => {

});