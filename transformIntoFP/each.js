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


// for 중복 제거
function _each(list,iter){
    for(let i =0;i<list.length;i++){
        iter(list[i]);
    }

    return list;
}

function _filter(list,predi){
    var new_list = [];
    _each(list,function(val){
        if(predi(val)){
            new_list.push(val);
        }
    });

    return new_list;
}

function _map(list,mapper){
    var new_list = [];
    _each(list,function(val){
        new_list.push(mapper(val));
    });

    return new_list;
}

console.log(_map(_filter(users,function(user){
    return user.age>=30;
}),function(user){
    return user.name;
}));