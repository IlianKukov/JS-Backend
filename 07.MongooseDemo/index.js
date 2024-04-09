const mongoose = require('mongoose');

mongoose.connect(`mongodb://localhost:21017/test1`)
.then(() => console.log('DB Connected'));

const studentSchema = new mongoose.Schema({
    Name: String,
    Age: Number
});

const Student = mongoose.model('Student', studentSchema);

const student = new Student({
    Name: 'Stancho',
    Age: 25
});

console.log(student);

student.save()
.then(createStudent =>{
    console.log(createStudent);
    console.log('Student saved');
});