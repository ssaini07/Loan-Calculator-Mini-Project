function Person(name, dob) {
    this.name = name;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }
}

const shubham = new Person('Shubham', '03-25-1995');
console.log(shubham.calculateAge());