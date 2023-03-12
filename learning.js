let obj1 = {name:"person1",age:5};
let obj2 = {age:5,name:"person1"};
var equal = true;

if(obj1.length==obj2.length){
    for(var key in obj1){
        if(obj1[key]===obj2[key]){
            continue;
        }else{
            equal=false;
        }
    }
}else{
    equal=false;
}
if(equal){
    console.log("Both JSON are equal");
}else{
    console.log("Both JSON are not equal");
}




 
