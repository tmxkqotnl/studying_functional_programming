var filter = require('./filter_module');

var users = [
    { id: 1, name: 'ID', age: 36 },
    { id: 2, name: 'BJ', age: 32 },
    { id: 3, name: 'JM', age: 32 },
    { id: 4, name: 'PJ', age: 27 },
    { id: 5, name: 'HA', age: 25 },
    { id: 6, name: 'JE', age: 26 },
    { id: 7, name: 'JI', age: 31 },
    { id: 8, name: 'MP', age: 23 }
];

// map in FP
function _map(list,mapper){
    var new_list = [];
    for(let i = 0;i<list.length;i++){
        new_list.push(mapper(list[i]));
    }

    return new_list;
}

var age30 = filter.f(users,user=> user.age>=30);
console.log(age30);

console.log(_map(age30,function(ele){
    return ele.name;
}));

console.log(
    _map(
        filter.f(users,function(user){
            return user.age>=30;
        }),function(user){
            return user.name;
        }
    )
);