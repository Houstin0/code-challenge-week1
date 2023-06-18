//function calculating payee rate
function payeeMonthlyRate(grossIncome) {
    
    if (grossIncome<24000){
        payeeDeductions=0;
    }
    else if (grossIncome>=24000){
        payeeDeductions=0.10;
    }else if (grossIncome>24000&&grossIncome<=32333){
        payeeDeductions=0.25;
    }else if (grossIncome>32333){
        payeeDeductions=0.30;
    }
return payeeDeductions;
}

//function calculating nhif deductions rate
function nhifDeductionsRate(grossIncome){
    let nhifDeductions;
    if (grossIncome<=5999) {
        nhifDeductions=150;
    } else if (grossIncome<=7999) {
        nhifDeductions=300;
    }else if (grossIncome<=11999){
        nhifDeductions=400;
    }else if (grossIncome<=14999){
        nhifDeductions=500;
    }else if (grossIncome<=19999){
        nhifDeductions=600;
    }else if (grossIncome<=24999){
        nhifDeductions=750;
    }else if (grossIncome<=29999){
        nhifDeductions=850;
    }else if (grossIncome<=34999){
        nhifDeductions=900;
    }else if (grossIncome<=39999){
        nhifDeductions=950;
    }else if (grossIncome<=44999){
        nhifDeductions=1000;
    }else if (grossIncome<=49999){
        nhifDeductions=1100;
    }else if (grossIncome<=59999){
        nhifDeductions=1200;
    }else if (grossIncome<=69999){
        nhifDeductions=1300;
    }else if (grossIncome<=79999){
        nhifDeductions=1400;
    }else if (grossIncome<=89999){
        nhifDeductions=1500;
    }else if (grossIncome<=99999){
        nhifDeductions=1600;
    }else{
        nhifDeductions=1700;
    }
return nhifDeductions;
}

//function calculationg nssf deductions
function nssfDeductions(grossIncome) {
   let  nssfPensionable=grossIncome*0.06*2;
   let deductions
 if (nssfPensionable<=6000){
    deductions=360;
 }else if(nssfPensionable<=18000){
    deductions=720;
 }
return deductions;
}


function netSalaryCalculator(grossIncome) {
    let payee=payeeMonthlyRate(grossIncome)
    let nhif=nhifDeductionsRate(grossIncome)
    let nssf=nssfDeductions(grossIncome)
    let netSalary=grossIncome-payee-nhif-nssf;
}
console.log(netSalaryCalculator(25000));//displaying net salary
