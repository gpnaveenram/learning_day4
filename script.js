var request=new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload=function(){
var result=JSON.parse(request.response);
var listOfcountries = result;
 for(var i=0;i<listOfcountries.length;i++){ 
    
    console.log("Common name of the country : " ,listOfcountries[i].name.common);
    console.log("Official Name of the country : " ,listOfcountries[i].name.official);
    console.log("Official Flag of the country : " ,listOfcountries[i].flag);
    console.log("Region of the country : " ,listOfcountries[i].region);
    console.log("Sub Region of the country : " ,listOfcountries[i].subregion);
    console.log("Total Population : " ,listOfcountries[i].population);
    console.log("*****************************************************")
}
}


