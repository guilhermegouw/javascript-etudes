let rain = true;

if (rain) {
    console.log("** Taking my umbrella when I need to go outside **");
} else {
    console.log("** I can leave my umbrella at home **");
}

let age = 15;

if (age < 18) {
    console.log("** We're sorry, but you can't get in under 18 **");
} else {
    console.log("** Welcome! **");
}


let hobby = "Dancing";

if (hobby = "coding") {
    console.log("** I love coding too! **");
} else {
    console.log("** Can you teach me that? **");
}

/**
 * That might surprise you. The problem here is the single equal sign in the if statement.
 * Instead of evaluating the condition, it is assigning coding to hobby. And then it is 
 * converting coding to a Boolean, and since it is not an empty string, it will return
 * true, so the if block will be executed. So, always remember to use the double equal 
 * sign in this case.
 */