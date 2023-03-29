// 1. იუთუბის კომენტარები //

let userIsLoggedIn = true;
let videoIsCommentable = false;
const userCanComment = userIsLoggedIn && videoIsCommentable;
console.log(userCanComment)

// -------------------------------------------------------------------

// 2. სოც ქსელი //

let userIsLoggedIn = true;
let userIsBlocked = false;
const userCanPost = !userIsBlocked && userIsLoggedIn;
console.log(userCanPost)

// -------------------------------------------------------------------

// 3. ონლაინ მაღაზია //

let balance = 200;
let userCartTotal = 200;
const paymentComplete = balance >= userCartTotal ;
console.log(paymentComplete)

// -------------------------------------------------------------------

// 4. კომენტარის წაშლა //

let userIsAdmin = false;
let userIsModerator = false;
let userIsCommentAuthor = true;
const userCanDelete = userIsAdmin || userIsModerator || userIsCommentAuthor;
console.log(userCanDelete)

// -------------------------------------------------------------------

// 5. ატომური ბომბი //

let presidentKey = false;
let primeMinisterKey = false;
let generalOfArmiesKey = false;
let masterKey = true ;
const bombWillLaunch = ( presidentKey && primeMinisterKey && generalOfArmiesKey) || masterKey;
console.log ( bombWillLaunch)

// -------------------------------------------------------------------

// 6. პინ კოდი //

const userPinCode = 1234;
const currentPinCode = userPinCode
const newPinCode = 4321;
const retypeNewPinCode = newPinCode;
const pinChangeComplete = userPinCode && currentPinCode && newPinCode && retypeNewPinCode 
if(pinChangeComplete > 0){
    console.log("Pin Changed Successfully")
}else{
    console.log("error")
}

// -------------------------------------------------------------------

// 7. GAME OVER //

let health = 0;
let lives = 1;
const gameOver = health == 0 && lives == 0;
if(gameOver){
    console.log("gameOver")
}else{
    console.log("game in progress")
}

// -------------------------------------------------------------------

// 8. Meama-ს ყავა //

let capsuleCount = 2;
let capsulePrice = 2;
let userBalance = 5;
let creditCardStatus = userBalance >= (capsuleCount * capsulePrice);
const paymentComplete = creditCardStatus > 0;
if(creditCardStatus){
    console.log (paymentComplete)
}else{
    console.log (paymentComplete)
}

// -------------------------------------------------------------------

// 9. Hotel booking //

let availableRooms = 5;
let roomPrice = 200;
let discount = 20;

let userBalanse = 180;
let userHasDiscount = true;
let userRoomCount = 1;

const paymentComplete = (availableRooms > 0 && roomPrice - discount) && 
(userRoomCount <= availableRooms && userBalanse >= roomPrice - (userHasDiscount > 0 && discount))

console.log(paymentComplete);