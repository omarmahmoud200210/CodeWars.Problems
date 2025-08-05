function getGrade (grade1, grade2, grade3) {
    let averageGrade = (grade1 + grade2 + grade3) / 3;

    if (averageGrade >= 90 && averageGrade <= 100) {
        return 'A';
    }
    else if (averageGrade >= 80 && averageGrade < 90) {
        return 'B';
    }
    else if (averageGrade >= 70 && averageGrade < 80) {
        return 'C';
    }
    else if (averageGrade >= 60 && averageGrade < 70) {
        return 'D';
    }
    else {
        return 'F';
    }
}

console.log(getGrade(44,55,52));