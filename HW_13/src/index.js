/* Умова №1 
Вам необхідно створити конструктор Студента, у якого мають бути властивості:ім'я,прізвище,рік народження,оцінки,відвідуваність,курс. Кількість оцінок і відвіданих занять залежить від курсу, на якому займається студент. 
Так само у Студентає методи:додати оцінку,додати відвідування,отримати середню успішність,отримати середнє відвідування,отримати кількість пройдених занять,змінити курс(мають оновитися дані про курс), а такожотримати всю інформацію про студента.
*/
function Student (name, surname, birthYear, course) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.course = course;
    this.grades = [];
    this.attendance = [];
    this.addGrade = function(grade) {
        this.grades.push(grade);
    };
    this.addAttendance = function(attended) {
        this.attendance.push(attended);
    };
    this.getAverageGrade = function() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    };
    this.getAverageAttendance = function() {
        if (this.attendance.length === 0) {
            return 0;
        }
        const attendedCount = this.attendance.filter(attended => attended).length;
        return (attendedCount / this.attendance.length) * 100;
    };
    this.getLecturesAttended = function() {
        return this.attendance.filter(attended => attended).length;
    };
    this.changeCourse = function (newCourse) {
        this.course = newCourse;
        this.grades = [];
        this.attendance = [];
    };
    this.getStudentInfo = function() {
        return {
            name: this.name,
            surname: this.surname,
            birthYear: this.birthYear,
            course: this.course,
            grades: this.grades,
            attendance: this.attendance,
        };
    };
}

const student1 = new Student("Oleksii", "Haiduk", 1991, 1);
student1.addGrade(90);
student1.addGrade(85);
student1.addAttendance(true);
student1.addAttendance(false);

console.log(student1.getStudentInfo());
console.log("Average Grade:", student1.getAverageGrade());
console.log("Average Attendance:", student1.getAverageAttendance() + "%");
console.log("Lectures Attended:", student1.getLecturesAttended());

student1.changeCourse(2);
console.log(student1.getStudentInfo());

/* Умова №2
Додати Студентуможливість навчатися на кількох курсах з можливістю додавання і видалення курсу.
*/
function Student(name, surname, birthYear) {
    this.name = name;
    this.surname = surname;
    this.birthYear = birthYear;
    this.courses = [];
    this.grades = {};
    this.attendance = {};

    this.addCourse = function (course) {
        if (!this.courses.includes(course)) {
            this.courses.push(course);
            this.grades[course] = [];
            this.attendance[course] = [];
        }
    };

    this.removeCourse = function (course) {
        const index = this.courses.indexOf(course);
        if (index !== -1) {
            this.courses.splice(index, 1);
            delete this.grades[course];
            delete this.attendance[course];
        }
    };

    this.addGrade = function (course, value) {
        if (this.courses.includes(course)) {
            this.grades[course].push(value);
        }
    };

    this.addAttendance = function (course, attended) {
        if (this.courses.includes(course)) {
            this.attendance[course].push(attended);
        }
    };

    this.getAverageGrade = function (course) {
        if (this.courses.includes(course) && this.grades[course].length > 0) {
            const sum = this.grades[course].reduce((total, grade) => total + grade, 0);
            return sum / this.grades[course].length;
        }
        return 0;
    };

    this.getAverageAttendance = function (course) {
        if (this.courses.includes(course) && this.attendance[course].length > 0) {
            const attendedCount = this.attendance[course].filter(attended => attended).length;
            return (attendedCount / this.attendance[course].length) * 100;
        }
        return 0;
    };

    this.getLecturesAttended = function (course) {
        if (this.courses.includes(course)) {
            return this.attendance[course].filter(attended => attended).length;
        }
        return 0;
    };

    this.changeCourse = function (course, newCourse) {
        if (this.courses.includes(course) && !this.courses.includes(newCourse)) {
            this.courses.splice(this.courses.indexOf(course), 1);
            this.courses.push(newCourse);
            this.grades[newCourse] = this.grades[course];
            this.attendance[newCourse] = this.attendance[course];
            delete this.grades[course];
            delete this.attendance[course];
        }
    };

    this.getStudentInfo = function () {
        return {
            name: this.name,
            surname: this.surname,
            birthYear: this.birthYear,
            courses: this.courses,
            grades: this.grades,
            attendance: this.attendance,
        };
    };
}

const student1 = new Student("Oleksii", "Haiduk", 1991);
student1.addCourse("JavaScript");
student1.addCourse("Html");

student1.addGrade("JavaScript", 90);
student1.addGrade("JavaScript", 85);
student1.addAttendance("JavaScript", true);
student1.addAttendance("JavaScript", false);

console.log(student1.getStudentInfo());
console.log("Average Grade (JavaScript):", student1.getAverageGrade("JavaScript"));
console.log("Average Attendance (JavaScript):", student1.getAverageAttendance("JavaScript") + "%");
console.log("Lectures Attended (JavaScript):", student1.getLecturesAttended("JavaScript"));

student1.changeCourse("JavaScript", "Html");
console.log(student1.getStudentInfo());

/* Умова №3
Створити конструктор Група, яка маєсписок студентіві методи для додавання,видалення студентів, а також одержання рейтингу студентів завідвідуваністю і успішністю.
*/
function Group() {
    this.students = [];

    this.addStudent = function (student) {
        if (student instanceof Student && !this.students.includes(student)) {
            this.students.push(student);
        }
    };

    this.removeStudent = function (student) {
        const index = this.students.indexOf(student);
        if (index !== -1) {
            this.students.splice(index, 1);
        }
    };

    this.getAttendanceRating = function (course) {
        return this.students
            .filter(student => student.courses.includes(course))
            .map(student => ({
                name: student.name,
                attendance: student.getAverageAttendance(course),
            }));
    };

    this.getGradeRating = function (course) {
        return this.students
            .filter(student => student.courses.includes(course))
            .map(student => ({
                name: student.name,
                averageGrade: student.getAverageGrade(course),
            }));
    };
}
