// Declare marks variable to prompt marks from user input 
let marks=prompt("Enter marks:")

  // A function to determine grade from marks
function studentGradeGenerator(marks) {
    //if statement to determine grade from marks
    if (marks>=0&&marks<=100){
        if (marks<=100&&marks>=79) {
        return 'A';
    } else if (marks>=60){
        return 'B';
    }else if (marks>=49){
        return 'C';
    }else if (marks>=40){
        return 'D';
    }else{
        return 'E';
    }
    }
    else{
        return "Please enter valid marks"
    }
}
;// call the studentGradeGenerator function, passing marks as the argument
studentGradeGenerator(marks);