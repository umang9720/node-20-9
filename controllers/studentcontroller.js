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

    } catch (err) {
        console.log(err);
    }
}

async function getStudentForEdit(req, res) {
    try {
        let id=req.params.id;
        console.log(id);
        const student = await Student.findOne({_id:id});
        console.log(student);
        res.render('studentforupdate',{
            student:student
        })

    } 

     catch (err) {
        console.log(err);
    }
}
module.exports = {
    addStudent,
    getStudents,
    getStudentForEdit

}