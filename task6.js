var teaType = "GingerTea", addOn = "both",result,masalaTea=20,regularTea=15,gingerTea=20;
if (teaType == "RegularTea") {
    if (addOn == "Sugar") {
        result=regularTea+2.50;
        console.log(teaType+" with additional sugar price: "+result+"$");
    }
    else if(addOn=="Milk"){
        result=regularTea+5;
        console.log(teaType+"  with additional Milk price: "+result+"$");
    }else if(addOn=="no"){
        console.log(teaType+"  with no addOn price: "+regularTea+"$");
    }else if(addOn=="both"){
        result=regularTea+7.50;
        console.log(teaType+"  with both addOn price: "+result+"$");
    }
}else if (teaType == "MasalaTea") {
    if (addOn == "Sugar") {
        result=masalaTea+2.50;
        console.log(teaType+" with additional sugar price: "+result+"$");
    }
    else if(addOn==="Milk"){
        result=masalaTea+5;
        console.log(teaType+"  with additional Milk price: "+result+"$");
    }else if(addOn=="no"){
        console.log(teaType+"  with no addOn price: "+masalaTea+"$");
    }else if(addOn=="both"){
        result=masalaTea+7.50;
        console.log(teaType+"  with both addOn price: "+result+"$");
    }
}else if (teaType == "GingerTea") {
    if (addOn == "Sugar") {
        result=gingerTea+2.50;
        console.log(teaType+" with additional sugar price: "+result+"$");
    }
    else if(addOn=="Milk"){
        result=gingerTea+5;
        console.log(teaType+"  with additional Milk price: "+result+"$");
    }else if(addOn=="no"){
        console.log(teaType+"  with no addOn price: "+gingerTea+"$");
    }else if(addOn=="both"){
        result=gingerTea+7.50;
        console.log(teaType+"  with both addOn price: "+result+"$");
    }
}else if(teaType!="RegularTea"||teaType!="MasalaTea"||teaType!="GingerTea"){
    console.log("This Tea is Not Available select one from these RegularTea,MasalaTea or GingerTea");
}else{
    console.log("invaild input!!");
}