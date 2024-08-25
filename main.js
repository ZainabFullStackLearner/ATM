#! /usr/bin/env node
import inquirer from "inquirer";
let MyBalance = 10000;
let Mypin = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Enter your pin",
    type: "number"
});
if (pinAnswer.pin === Mypin) {
    console.log("!!Correct pin code!!");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "Please select an option",
        type: "list",
        choices: ["withdraw", "check balance"]
    });
    console.log(operationAns);
    if (operationAns.operation === "withdraw") {
        let amountAns = await inquirer.prompt({
            name: "amount",
            message: "Enter the amount to withdraw",
            type: "number"
        });
        if (amountAns.amount > MyBalance) {
            console.log("Insufficient Balance. Your current balance is: " + MyBalance);
        }
        else {
            MyBalance -= amountAns.amount;
            console.log("Your remaining balance is: " + MyBalance);
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log("Your Balance is: " + MyBalance);
    }
}
else {
    console.log("Incorrect pin code!");
}
