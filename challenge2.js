function speedDetetor(speed) {
    let speedLimit=70;// speed limit

    if (speed<=70) {
        return 'Ok'
    } else{
        demeritPoints=(speed-speedLimit)/5;
       if (demeritPoints>12){
        return 'License suspended'
       }
        return demeritPoints;
    }
}     
console.log(speedDetetor(90));