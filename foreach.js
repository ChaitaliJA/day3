var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);
    var a=data.forEach((element) => {
        console.log(element.name+" "+element.population);
        });
    console.log(a);
}