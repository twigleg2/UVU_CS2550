//regex practice

const tweets = [
    "Thank you to the Academy and the incredible cast & crew of #TheRevenant. #Oscars",
    "@HardingCompSci department needs student volunteers for #HourOfCode https://hourofcode.com/us",
    "Checkout the most comfortable earbud on #Kickstarter and boost your #productivity https://www.kickstarter.com/",
    "Bootstrap 4 Cheat Sheet https://t.co/MFyKHvd50H",
    "Curious to see how #StephenCurry handles injury. http://mashable.com/2016/04/25/steph-curry-knee-injury-cries-cried/"
];

// Extract hashtags and domain names from URLs
tweets.forEach(function (tweet) {
    let exampleString = "example";
    let hashtagRegex = /#\w+/g;
    let domainRegex = /https?:\/\/(.+?)\//g;

    let allHashtags = hashtagRegex.exec(tweet);
    if (allHashtags != null) {
        for (let hashtag of allHashtags) {
            console.log(hashtag);
        }
    }

    let allLinks = domainRegex.exec(tweet);
    if (allLinks != null) {
        for (let link of allLinks) {
            console.log(link);
        }
    }

});


let exampleRegex = /dog*/;
//dog
//dogggggg
//do
//Dog -> invalid


let exampleRegex2 = /do*g/;
//dg
//dog
//dooooooooooog
//qwertydog
//dogqwerty

let examplePlus = /dog+/;
//dog
//dogggg
//do -> invalid

let exampleQuestion = /dog?/;
//dog
//do
//qwertdo
//qwertydog

let exampleLazy = /dog+?/;

//dog
//do
//dogggg

//dog is doing a tail wag -> matches on do, not dog


let exampleLazyBeginning = /^dog+?/;

//dog is doing a tail wag -> matches on dog


let examplePipe = /a|b/;

//abc
//bc
//ac
//c -> not valid

let exampleBracket = /[aeiou]/;


let exampleParen = /(dog)|(cat)/;
let exampleParenModifier = /(dog)?/;



//~~~~~~~~~~

let regex = /a|b$/m;
let a = "a\ncat";
// let empty = ""; 
let aa = "B";
let aaaaa = "aaaaa";
let baa = "aab";


let text = "The best things in life are free";
let pattern = /re*/g;

let result = pattern.exec(text); //returns true

console.log(result[0]);


let re = /t.+r/;
let result2 = re.exec("Raise the bar high.");

if (result2 === null) {
    console.log("No match.");
}
else {
    console.log(result2[0]);   // the bar
}

//NOTE: how do I get matches after the first? use global modifier 'g', and what else?