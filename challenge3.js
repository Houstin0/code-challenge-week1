
function netSalaryCalculator(basicSalary,benefits){
   let grossIncome= basicSalary+benefits;
   return grossIncome;
}

function payeeMonthlyRate(grossIncome) {
    if (grossIncome<=24000){
        payee=grossIncome*0.10;
    }else if (grossIncome>24000&&grossIncome<=32333){
        payee=grossIncome*0.25;
    }else{
        payee=grossIncome*0.30
    }
return payee
}
console.log(payeeMonthlyRate(23000));

