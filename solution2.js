let arr = [1,2,3,3,5,6,7,0];
const funky = ((array,sum) =>{
    const ans = [];
    for(let i = 0 ; i< array.length-1; i++){
        for(let j= i+1; j< array.length; j++){
            if(array[i]+array[j]===sum){
                ans.push(array[i],array[j]);
                
            }
        }
    }
    return ans;
});
console.log(funky(arr,11));