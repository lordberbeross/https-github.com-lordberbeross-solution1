
let hex = "#FFFFFF";
let rgb= "555,255,255";
// start with a function that turning strings to array
const splitto = (x =>{
  let aax = x.split(",");
  return aax;
})
const d2h = (d) =>{
    return (+d).toString(16).toUpperCase();
}
// 
const funks = (str =>{
   const myRegexRgb = /\d{3}\,\d{3}\,\d{3}/g;
    const myRegexHex = /^\#[A-F0-9]{6}/g;
    let r = [];
    let g = [];
    let b = [];
    let a = [];
    if(str.match(myRegexHex)){
         r = (str[1]+str[2]); 
         r = parseInt(r,16); 
         g= str[3]+str[4];
         g= parseInt(g,16);
         b= str[5]+str[6];
         b= parseInt(b,16);
         a.push(r,g,b);
         a = a.toString();
         return a;
    }
    else if(str.match(myRegexRgb)){
            a= splitto(str);
               if((a[0] <= 255 && a[0] >= 0) && (a[1] <= 255 && a[1] >= 0) && (a[0] <= 255 && a[0] >= 0)) {
                r= d2h(a[0]);
                g= d2h(a[1]);
                b= d2h(a[2]);
                
               return "#"+r+g+b;

            }else{

                return "please enter a hex or rgb"

            }  
        
        }else{

                return "please enter a hex or rgb"
    }       
  
})

