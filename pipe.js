//pipe function will take some functions as arguments and return a curryied version of those  functions

const pipeEs5 = (...fns)=>{

    return initialValue => {
       return fns.reduce((prev,current)=>{
           return current(prev);
       },initialValue)
    }

    
}

const pipeEs6 = (...fns)=>initial=>fns.reduce((prev,fn)=>fn(prev),initial);

//set of normal functions
const trim = str => str.trim();
const capitalizeFirst = str => {

  const charArray =  [...str].map((element,index)=>{
        return index === 0 ? element.toUpperCase():element
    })

  return charArray.join("");

};
const lower = str=>str.toLowerCase();




const piped = pipeEs6(trim,lower,capitalizeFirst);

console.log(piped(" dINukA "))