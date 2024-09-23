const Student = require('../models/Student');

async function addStudent(req, res) {
    try {
        console.log(req.body);
        const student = new Student(req.body);
        await student.save();

        res.render('studentinsert')
    } catch (err) {
        console.log(err);
    }
}
async function getStudents(req, res) {
    try {
        const students = await Student.find();
        res.render('studentlist' ,{
            students: students
        } );
        // console.log(req.body);
        // const student = new Student(req.body);
        // await student.save();

    } catch (err) {
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getStudents

}