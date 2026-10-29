import { useState } from 'react';

function Studentform() {
  const [student, setStudent] = useState({
    name: '',
    rollNo: '',
    email: '',
    course: '',
  });
  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;
    setStudent((currentStudent) => ({
      ...currentStudent,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const validationErrors = {};
    if (!student.name.trim()) {
      validationErrors.name = 'Name is required.';
    }
    if (!student.rollNo.trim()) {
      validationErrors.rollNo = 'Roll No is required.';
    }

    setErrors(validationErrors);
    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    console.log('Student details submitted:', student);
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Student Registration</h2>

      <label htmlFor="student-name">Name</label>
      <input
        id="student-name"
        name="name"
        type="text"
        value={student.name}
        onChange={handleChange}
        required
      />
      {errors.name && <p role="alert">{errors.name}</p>}

      <label htmlFor="student-roll-no">Roll No</label>
      <input
        id="student-roll-no"
        name="rollNo"
        type="text"
        value={student.rollNo}
        onChange={handleChange}
        required
      />
      {errors.rollNo && <p role="alert">{errors.rollNo}</p>}

      <label htmlFor="student-email">Email</label>
      <input
        id="student-email"
        name="email"
        type="email"
        value={student.email}
        onChange={handleChange}
        required
      />

      <label htmlFor="student-course">Course</label>
      <input
        id="student-course"
        name="course"
        type="text"
        value={student.course}
        onChange={handleChange}
        required
      />

      <button type="submit">Register Student</button>
    </form>
  );
}

export default Studentform;
