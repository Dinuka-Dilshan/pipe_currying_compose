//Currying is a transformation of functions that translates a 
//function from callable as f(a, b, c) into callable as f(a)(b)(c).

const add = (a,b,c)=>{
    return a + b +c;
}

const curryEs6 = a=>b=>c=>a+b+c;

const curryEs5 = function(a){
    return function(b){
        return function(c){
            return a+b+c;
        }
    }
}

console.log(
    curryEs5(10)(20)(30)
)

console.log(
    curryEs6(10)(20)(30)
)