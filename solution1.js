
let arr = [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20];
let xd = [];
// sort array 
let sorted = arr.sort((a,b) => a-b);
console.log(sorted);

const funky = (sorted) =>{
    let empty= [[sorted[0]]];
    for(let i= 0 ; i < sorted.length-1; i++ ){
        if(sorted[i] === sorted[i+1]){
            empty[empty.length-1].push(sorted[i+1]);
           
        }else{
             empty.push([sorted[i+1]])
            
        }
        
    }
    return empty;
}
const lastly = funky(sorted); 
console.log(lastly);
const answer = lastly.reduce((accumulator,array) =>{
    if(array.length === 1){
  return  accumulator.concat(array);
    }else{
        accumulator.push(array);
    }
    return accumulator},[]);

console.log(answer);

let arr2 = [1, "2", "3", 2, 4,"12",10];
// first we need to check whether the type is number or string
// and then put them in arrays and merge them together
const typeChecker =() =>{
    let solution= []
    let numbers= []
    let strings= []
    arr2.forEach(num =>{    
    if(Number.isInteger(num)){
        numbers.push(num);
        numbers.sort((a,b)=>a-b);
      }
      else{
          strings.push(num);     
          strings.sort();    
      }
});
solution = [].concat([numbers],[strings])
 return solution;
}
console.log(typeChecker())