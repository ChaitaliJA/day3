var request=new XMLHttpRequest();
request.open('GET','https://restcountries.eu/rest/v2/all',true);
request.send();
request.onload=function(){
    var data=JSON.parse(this.response);

var dollars=data.filter((x)=>{
    for(var i in x.currencies){
        if(x.currencies[i].code==='USD'){
           return true;}
        }
  }).map(x=>console.log(x.name));
  // for(var i in data){
//     console.log(data[i].name+" "+data[i].flag);
// }
}