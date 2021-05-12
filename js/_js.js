function _curry(fn){
    return function (a,b){
        return arguments.length == 2 ? fn(a,b) : function(b){
            return fn(a,b);
        }
    }
}
function _curryr(fn){
    return function(a,b){
        return arguments.length == 2 ? fn(a,b) : function(b){
            return fn(b,a);
        }
    }
}
const _get = _curryr(function(obj,key){
    return obj === null ? undefined : obj[key];
});
function _filter(list, predi){
    let new_list = [];
    _each(list,val=>{
        if(predi(val)) new_list.push(val);
    })
    return new_list;
}

function _map(list,mapper){
    let new_list = [];
    _each(list,(val,key)=>{
        new_list.push(mapper(val,key));
    });
    return new_list;
}
var _filter = _curryr(_filter);
var _map = _curryr(_map);

function _is_object(obj){
    return typeof obj == 'object' && !!obj;
}
function _get_keys(obj){
    return _is_object(obj) ? Object.keys(obj) : [];
}
function _each(list, iter){
    for(let i=0, keys = _get_keys(list);i<keys.length;i++){
        iter(list[keys[i]],keys[i]);
    }
    return list;
}
function _slice(list){
    return Array.prototype.slice.call(list,1);
}
function _reduce(list, iter, memo){
    if(arguments.length == 2){
        memo = list[0];
        list = _slice(list);
    }
    _each(list,function(val){
        memo = iter(memo,val);
    });

    return memo;
}
function _pipe(){
    let fns = arguments;
    return function(arg){
        return _reduce(fns,function(arg,fn){
            return fn(arg);
        },arg);
    };
}
function _go(arg){
    let fns = _slice(arguments);
    return _pipe.apply(null,fns)(arg);
}
/////////////////////////////////////////////

