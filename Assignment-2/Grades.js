function grades(marks){
    switch(true){
        case (marks>=90 && marks<=100):
            return 'S grade';
        case (marks>=80 && marks<90):
            return 'A grade';
        case (marks>=70 && marks<80):
                return 'B grade';
        case (marks>=60 && marks<70):
            return 'C grade';
        case (marks>=50 && marks<60):
            return 'D grade';
        case (marks>=40 && marks<50):
            return 'E grade';
        case (marks>=0 && marks<40):
                return 'Failed';
        default:
            return 'Invalid Marks';
        }
}
console.log(`student got ${grades(30)}`);
// console.log(`student got ${grades(70)}`)
// console.log(`student got ${grades(100)}`)
// console.log(`student got ${grades(-90)}`)

