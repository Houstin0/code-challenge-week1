//Prompt the user to enter speed 
let speed =prompt("Enter speed:")

  //function that checks the speed 
function speedDetector(speed) {
    let speedLimit=70;// speed limit

    if (speed<=speedLimit) {
        return 'Ok' //prints out okay if speed is below speed limit
    } else if (speed>speedLimit){
        let demeritPoints=(speed-speedLimit)/5;
        
       if (demeritPoints>12){
        return 'License suspended'
       }else
       return `Points: ${demeritPoints}`
    }
}     
speedDetector(speed);// call the speedDetector function and pass speed as argument