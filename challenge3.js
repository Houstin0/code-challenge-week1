
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
    let nhifDeductions;
    if (grossIncome<=5999) {
        nhifDeductions=grossIncome-150;
    } else if (grossIncome<=7999) {
        nhifDeductions=grossIncome-300;
    }else if (grossIncome<=11999){
        nhifDeductions=grossIncome-400;
    }else if (grossIncome<=14999){
        nhifDeductions=grossIncome-500;
    }else if (grossIncome<=19999){
        nhifDeductions=grossIncome-600;
    }else if (grossIncome<=24999){
        nhifDeductions=grossIncome-750;
    }
}