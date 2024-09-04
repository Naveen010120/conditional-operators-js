var memberShip="Premium";
switch(memberShip){
    case "Basic":
        console.log("Acess to Only free Book.");
        break;
    case "Standard":
        console.log("Acess to all books  and discounted paid books.");
        break;
    case "Premium":
        console.log("Acess to all books, including exclusive content.");
        break;
    default:
        console.log("invaild membership .. take your member ship");
}