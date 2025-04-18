//CASE PROJECT #2: ADDING IF STATEMENT TO CONTACT PAGE
//Author: Eulyssia casias
//Date: 3/29/25
//Write an if statement to input text into h4 element on my Contact page.
    let heading1 = document.getElementById("insta");
    let heading2 = document.getElementById("face");
    let heading3 = document.getElementById("twit");

    if (heading1) {
        heading1.textContent = "Instagram: @ColorsOFelines";  
    }
    if (heading2) {
        heading2.textContent = "Facebook: ColorsOFelines";
    }
    if (heading3) {
        heading3.textContent = "Twitter: ColorsOFelines";
    }


//CASE PROJECT #3: ADDING EXCEPTION HANDLING TO INDEX PAGE FORM
//Author: Eulyssia casias
//Date: 4/5/25
//When the submit button is pushed without an option clicked, an error message will pop up

//creating a function named selectOption
function selectOption(event) {
    //creating exception handling using try catch method
    try {
        
        const form= document.getElementById("favCat"); //declare form to equal to html form by its ID
        
        const selectedOption= form.querySelector('input[name="fav_coat"]:checked'); //declare selectedOption to equal to whatever option is checked using querySelector

        if(!selectedOption) {   //create if statement that if no option is selected then an error message occurs
            throw new error('no option selected');
            }
    }catch (error) {
        alert("SELECT AN OPTION to see results"); //Message in alert window
    }
    event.preventDefault();
}


//CASE PROJECT #4: CREATE JAVASCRIPT TO RETRIEVE EMAIL & USE REGX TO VERIFY EMAIL DOESN'T BELONG TO @GMAIL.COM
//Author: Eulyssia Casias
//Date: 4/13/25

function examineEmail(event) {

    let excludedDomain = "gmail.com"; //declare excluded domain
    let regex = new RegExp('^[a-zA-Z0-9].*@${excludedDomain}$'); //declare the regular Expression for the email
    let emailInput= document.getElementById("email"); //set emailInput equal to the email section on form
    let email = emailInput; //set email equal to the emailInput value
    let errMessage = document.getElementById("emailError") //declare the error message for excluded domain
    //crfeate if statement to examine and validate correct email domain
    if (regex.test(email)) { //use test() method to validate Regular expression
        errMessage.textContent = "@gmail domain is not allowed, try a different one" //set up error message
        event.preventDefault(); //prevent form submission using preventDeafault() method
        return false; //Let user know that email is not qualified
    }
        return true; //submit form if email is qualified
}


