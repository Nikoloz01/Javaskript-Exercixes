// 1. ახალი მესი //

let newMessages = true;
    console.log("სალამი შემოგევლე");
    if(newMessages){
        console.log("შენ გაქვს რამდენიმე წაუკითხავი მესიჯი")
    }


// 2. ონლაინ მაღაზია //

let usserBalance = 201;
let carrtTotal = 200;

if (usserBalance >= carrtTotal) {
    console.log("გადახდა წარმატებით შესრულდა");
}else{
    console.log("თქვენ არ გაქვთ სამკარისი თანხა");
}


// 3. სტუდენტი გამოცდაზე //

let testScore = 49;
let novatori = 95;
let cambridge = 70;
let technicaluniversity = 50;

if (testScore >= novatori) {
    console.log("გილოცავთ თქვენ ოფიციალურად ნოვატორი ხართ");
}else if(testScore >= cambridge) {
    console.log("გილოცავთ თქვენ მოხვდით კემბრიჯში");
}else if(testScore >= technicaluniversity) {
    console.log("გილოცავთ თქვენ მოვდით საქართველოს ტექნიკურ უნივერსიტეტში");
}else {
    console.log("სამწუხაროდ თქვენ ვერ გადალახეთ მინიმალური ზღვარი");
}


// 4. ფასდაკლებების სისტემა //


let userBalance = 400;
let cartTotal = 800;
let userIsAdmin = true;
let userIsFrequentClient = false;
let userIsStudent = false;
let paymentComplete;

if(userIsAdmin){
    let adminSale= 0.5;
    paymentComplete = cartTotal - (cartTotal * adminSale) <= userBalance;
    
} else if(userIsFrequentClient){
    let frequentClientSale = 0.3;
    paymentComplete = cartTotal - (cartTotal * frequentClientSale) <=userBalance;
    
}else if(userIsStudent){
    let studentSale = 0.2;
    paymentComplete = cartTotal - (cartTotal * studentSale) <=userBalance;

} else if (!(userIsAdmin&&userIsFrequentClient&&userIsStudent)){
    paymentComplete = userBalance >= cartTotal
}

let result = paymentComplete ? "გადახდა წარმატებით შესრულდა" :  "თქვენ არ გაქვთ საკმარისი თანხა";
    console.log(result);


// 5. თბილისი - ბათუმი //

let fuel = 80;
let igoeti = 10;
let gori = 20;
let khashuri = 30;
let kutaisi = 50;
let batumi = 80;

if (fuel <= igoeti ) {
    console.log("ამ წვეთებით იგოეთამდე თუ მოახერხებ ჩაგორებას ჩემო ძმაო");
}else if(fuel <= gori){
    console.log("ამ წვეთებით გორამდე თუ მოახერხებ ჩაგორებას ჩემო ძმაო");
}else if(fuel <= khashuri){
    console.log("ამ წვეთებით ხაშურამდე თუ მოახერხებ ჩაგორებას ჩემო ძმაო");
}else if(fuel <= (kutaisi + 20)){
    console.log("ამ წვეთებით ქუთაისამდე თუ მოახერხებ ჩაგორებას ჩემო ძმაო");
}else if(fuel >= batumi){
    console.log("ბათუმში ჩახვალ უპრობლემოდ");
    let goback = fuel - batumi;
    if (goback == ( batumi - kutaisi )){
        console.log("და უკანაც გეყოფა ქუთაისამდე");
    }else if(goback == ( batumi - khashuri )){
        console.log("და უკანაც გეყოფა ხაშურამდე");
    }else if(goback == ( batumi - gori )){
        console.log("და უკანაც გეყოფა გორამდე");
    }else if(goback == ( batumi - igoeti )){
        console.log("და უკანაც გეყოფა იგოეთამდე");
    }
}

