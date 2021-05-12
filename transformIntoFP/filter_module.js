// filter module

function _filter(users,predi){
    var new_list = [];
    for(let i = 0;i<users.length;i++){
        if(predi(users[i])){
            new_list.push(users[i]);
        }
    
    }

    return new_list;
}
exports.f = _filter;