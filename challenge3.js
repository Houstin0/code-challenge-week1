
function netSalaryCalculator(basicSalary,benefits){
   let grossIncome= basicSalary+benefits;
   return grossIncome;
}
function payeeMonthlyRate(payee) {
    payee=grossIncome;
    if (payee<=24000){
        payee=payee*0.10;
    }else if (payee>2400&&payee<=32333){
        payee=payee*0.25;
    }

}

