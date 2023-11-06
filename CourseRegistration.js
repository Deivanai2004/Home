import React, { useState } from 'react';

function CourseRegistration() {
  const courses = [
    { name: 'Course A', amount: 100 },
    { name: 'Course B', amount: 200 },
    { name: 'Course C', amount: 300 },
  ];

  const [selectedCourse, setSelectedCourse] = useState('');
  const [amount, setAmount] = useState('');

  const handleCourseChange = (e) => {
    const courseName = e.target.value;
    setSelectedCourse(courseName);

    // Find the amount for the selected course
    const selectedCourseObj = courses.find((course) => course.name === courseName);
    if (selectedCourseObj) {
      setAmount(selectedCourseObj.amount);
    }
  };

  return (
    <form>
      <div>
        <label>Course:</label>
        <select value={selectedCourse} onChange={handleCourseChange}>
          <option value="">Select a course</option>
          {courses.map((course) => (
            <option key={course.name} value={course.name}>
              {course.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label>Amount:</label>
        <input type="text" value={amount} readOnly />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}

export default CourseRegistration;
