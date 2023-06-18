
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
    }else if (grossIncome<=29999){
        nhifDeductions=grossIncome-850;
    }else if (grossIncome<=34999){
        nhifDeductions=grossIncome-900;
    }else if (grossIncome<=39999){
        nhifDeductions=grossIncome-950;
    }else if (grossIncome<=44999){
        nhifDeductions=grossIncome-1000;
    }else if (grossIncome<=49999){
        nhifDeductions=grossIncome-1100;
    }else if (grossIncome<=59999){
        nhifDeductions=grossIncome-1200;
    }else if (grossIncome<=69999){
        nhifDeductions=grossIncome-1300;
    }else if (grossIncome<=79999){
        nhifDeductions=grossIncome-1400;
    }else if (grossIncome<=89999){
        nhifDeductions=grossIncome-1500;
    }else if (grossIncome<=99999){
        nhifDeductions=grossIncome-1600;
    }else{
        nhifDeductions=grossIncome-1700;
    }

}