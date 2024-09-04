/**Qustion no 1 */
let m=14;
switch(true){
    case  m>75 && m<=100 :console.log('grade is A')
    break;
    case m>60 && m<= 75 : console.log('grade is B')
    break;
    case m>45 && m<=60 : console.log('grade is c')
    break;
    case m>33 && m<=45 : console.log('grade is d')
    break;
    case m>=0 && m<=33 : console.log('grade is e')
    break;
    default : console.log(' Enter a valid marks')
}
/**Qustion no- 2 */
let a = "d";

switch(true){
    case ((a=="p") || (a=="p")):
    console.log('Prepbytes');
    break;
    case (a=="z" )|| (a=="Z"):
        console.log('Zenith');
        break;
    case (a=="e") ||(a=="E"):
            console.log('Expert coder');
            break;
    case (a=="d" )||( a=="D"):
                console.log('Data structur');
                break;
    default:console.log('enter a valid charter')
}

/** Qustion no -3 */
let num1 = 20
let num2 = 14
let num3 = 18

if (num1 > num3 && num1 > num2)
    console.log(`Largest number is:  ${num1}`)
else if (num2 > num3 && num2 > num1)
    console.log(`Largest number is:  ${num2}`)
else if (num3 > num1 && num3 > num2)
    console.log(`Largest number is:  ${num3}`)
else
    console.log("You entered equal numbers!")

// Q4. Second Smallest

let snum1 = 14;
let snum2 = 13;
let snum3 = 12;

if ((snum1 > snum2 && snum1 < snum3) || (snum1 > snum3 && snum1 < snum2))
    console.log(`Second smllest number is: ${snum1}`)
else if ((snum2 > snum1 && snum2 < snum3) || (snum2 > snum3 && snum2 < snum1))
    console.log(`Second smllest number is: ${snum2}`)
else if ((snum3 > snum1 && snum3 < snum2) || (snum3 > snum2 && snum3 < snum1))
    console.log(`Second smllest number is: ${snum3}`)
else
    console.log("You entered equal numbers!")

// Qustion no 5
let angle1 = 140
let angle2 = 20
let angle3 = 20

if (angle1 + angle2 + angle3 !== 180) {
    console.log("The angles do not form a valid triangle.");
}
else {

    if (angle1 < 90 && angle2 < 90 && angle3 < 90) {
        console.log("The triangle is acute.");
    }
    else if (angle1 > 90 || angle2 > 90 || angle3 > 90) {
        console.log("The triangle is Obtuse")
    }
    else {
        console.log("The triangle is right angle triangle")
    }

}

