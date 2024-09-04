var weekDays = "Monday",weekEnds="Saturday", customerAge = 20;
if ((weekDays =="Monday"||weekDays =="Tuesday"||weekDays =="Wednesday"||weekDays =="Thusday"||weekDays =="Friday") && customerAge < 12 && customerAge > 0) {
    console.log("children will receive 50% discount.");
} else if ((weekDays =="Monday"||weekDays =="Tuesday"||weekDays =="Wednesday"||weekDays =="Thusday"||weekDays =="Friday")  && customerAge >= 12 && customerAge <= 65) {
    console.log("Standard Price of 12$");
} else if ((weekEnds =="Saturday"||weekEnds=="Sunday") && customerAge < 12 && customerAge > 0) {
    console.log("children will receive 30% discount")
} else if ((weekEnds =="Saturday"||weekEnds=="Sunday") && customerAge >= 12 && customerAge <= 65) {
    console.log("Standard Price of 15$");
} else {
    console.log("please check values you entered..(enter in format of (weekEnds or weekDays) and values should be positive")
}