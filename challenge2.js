function speedDetetor(speed,demeritPoints) {
    let speedLimit=70;

    if (speed<=70) {
        return 'Ok'
    } else {
        demeritPoints=(speed-speedLimit)/5;
        return demeritPoints
        
    }
}      
console.log(speedDetetor(200));