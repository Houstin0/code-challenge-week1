
function studentGradeGenerator(grade) {
    if (grade<=100&&grade>=79) {
        return 'A';
    } else if (grade>=60){
        return 'B';
    }else if (grade>=49){
        return 'C';
    }else if (grade>=40){
        return 'D';
    }else{
        return 'E';
    }
}
