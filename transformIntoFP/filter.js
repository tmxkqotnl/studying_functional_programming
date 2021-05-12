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

// filter in FP

function _filter(list,predict){
    var new_list = [];
    for(let i=0; i<list.length;i++){
        if(predict(list[i])){
            new_list.push(list[i]);
        }
    }

    return new_list;
}

console.log(_filter(users, user => user.age>=30));
console.log(_filter(users, user => user.age<30));
// reuse
console.log(
    _filter([1,2,3,4],num => num%2)
);
console.log(
    _filter([1,2,3,4],num => !(num%2))
);

