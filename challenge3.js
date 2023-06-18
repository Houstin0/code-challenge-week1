
function netSalaryCalculator(basicSalary,benefits){
   let grossIncome= basicSalary+benefits;
   return grossIncome;
}

function payeeMonthlyRate(grossIncome) {
    let payee;
    if (grossIncome<24000){
        payee=0;
    }
    else if (grossIncome>=24000){
        payee=grossIncome*0.10;
    }else if (grossIncome>24000&&grossIncome<=32333){
        payee=grossIncome*0.25;
    }else if (grossIncome>32333){
        payee=grossIncome*0.30;
    }else{
        payee
    }
return payee;
}
console.log(payeeMonthlyRate(2300));

function nhifDeductionsRate(grossIncome){
    if (grossIncome<=5999) {
        nhifDeductions=grossIncome-150;
    } else if (grossIncome=6000&&grossIncome<=7999) {
        
    }
}