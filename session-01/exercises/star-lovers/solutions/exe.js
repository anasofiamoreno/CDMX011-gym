
export const printstars = (value,option) => {

let i=0;
let str=""; 


if(option=="string")
{
    console.log("ast");
 
  for(i=0;i<value;i++){
    str= str + "*";
  }
return str
}

if(option=="array")
{
    console.log("arr");
  let array = [];
  let ii=0;
  for(ii=0; ii<value ; ii++){ 

    
    str = str + "*";

    array[ii] = str;
  }
return array;
}


if(option=="pares"){

    console.log("yes");

    
    let array = value.split("");
    console.log(array);
    console.log(value.length);

    for(i=0;i<=value.length-1; i+=2){
        let uno = array[i];
        console.log(typeof array[i]);
        array[i] = uno.toLowerCase();
    }

    for(i=1;i<=value.length-1; i+=2){
        array[i] = array[i].toUpperCase();
    }


    return array.join("");


}


}