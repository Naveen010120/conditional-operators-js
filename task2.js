var memberShip = "VIP Customer";
var purchasePrice = 500;
var totalPurchase;
if (memberShip == "Regular Customer" && purchasePrice < 100 && purchasePrice > 0) {
    console.log("No discount to User..");
} else if (memberShip == "Regular Customer" && (purchasePrice >= 100 && purchasePrice <= 500)) {
    totalPurchase = purchasePrice - (purchasePrice * 0.05);
    console.log(memberShip + " discount of " + totalPurchase);
} else if (memberShip == "Regular Customer" && purchasePrice > 500) {
    totalPurchase = purchasePrice - (purchasePrice * 0.1);
    console.log(memberShip + "discount of " + totalPurchase);
} else if (memberShip == "VIP Customer" && purchasePrice < 100 && purchasePrice > 0) {
    totalPurchase = purchasePrice - (purchasePrice * 0.1);
    console.log(memberShip + " discount of " + totalPurchase);
} else if (memberShip == "VIP Customer" && (purchasePrice >= 100 && purchasePrice <= 500)) {
    totalPurchase = purchasePrice - (purchasePrice * 0.15);
    console.log(memberShip + " discount of " + totalPurchase);
} else if (memberShip == "VIP Customer" && purchasePrice > 500) {
    totalPurchase = purchasePrice - (purchasePrice * 0.2);
    console.log(memberShip + "discount of " + totalPurchase);
} else {
    console.log("please check your enter details correctly..")
}
