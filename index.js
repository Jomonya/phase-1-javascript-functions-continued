function saturdayFun (activity="roller-skate"){
    return `This Saturday, I want to ${activity}!`;
}
console.log(saturdayFun());
console.log(saturdayFun ("roller-skate"));

const mondayWork = function(activity= "go to the office"){
    return `This Monday, I will ${activity}.`;
};
console.log(mondayWork());
console.log(mondayWork("work from home"));

function wrapAdjective(flair="*") {
    return function(adjective="special") {
        return `You are ${flair}${adjective}${flair}!`;
    };
}

//const wrapAdjective = function(inner= "special"){
    //return `You are ${inner}`
//}
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); 
console.log(wrapAdjective()("an amazing developer")); 
console.log(wrapAdjective("%")("a dedicated programmer")); 
