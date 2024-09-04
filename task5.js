var userAge=9,numberOfParticipants=100,email="navensingh@gmail.com";
var mailId=email;
if((userAge<=100&&userAge>=18)&&numberOfParticipants<=100&&mailId===email){
    console.log("tickets are avaliable please confirm your seats");
}else if(numberOfParticipants>100){
    console.log(" theater is full..")
}else if(mailId!=email){
console.log("enter vaild email address");
}else if(userAge<18){
    console.log("childrens are not allowed");
}
else{
    console.log("please enter correct values");
}