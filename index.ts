import inquirer from "inquirer";
const result = await inquirer.prompt([
    {message:"Enter your first number", type: "number", name:'FirstNumber'},
    {message:"Enter your Second number", type: "number", name:'SecondNumber'},
    {message: "Select one of the operator to perform your operation",
type:"list",
name:"operator",
choices:["Addition","Subtraction","Multiply","Division"],
},
]);

///Solving code///

if(result.operator === "Addition"){
    console.log(result.FirstNumber + result.SecondNumber);
}
else if(result.operator === "Subtraction"){
    console.log(result.FirstNumber - result.SecondNumber);
}
else if(result.operator === "Multiply"){
    console.log(result.FirstNumber * result.SecondNumber);
}
else if(result.operator === "Division"){
    console.log(result.FirstNumber / result.SecondNumber);
}
else{
    console.log("OPPS!!! Seem's You enter a wrong operator ! Please Enter a valid operator and Try Again")
}