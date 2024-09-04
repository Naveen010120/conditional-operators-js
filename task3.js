
var studentGpa=2.6, extraCurricular=1,communityService=100;
if(studentGpa>=3.5){
    console.log("Merit-Based Scholarship");
}else if((studentGpa>=3.0 &&studentGpa<=3.4)&&extraCurricular>=2){
    console.log("LeaderShip Scholarship");
}else if((studentGpa>=2.5&&studentGpa<=2.9)&&communityService>=100){
    console.log("Community scholarship");
}else{
    console.log("please Enter vaild input");
}