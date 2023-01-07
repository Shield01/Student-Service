import StudentList from "./student_list";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function List() {
  const [contacts, setContacts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios("http://localhost:3000/student_list_service/students/student_list")
      .then((response) => {
        setContacts(response.data);
        setError(null);
      })
      .catch(setError);
  }, []);

  if (error) {
    return <p>An error occurred</p>
  }
  
  return (
    <div className="App">
      <Link to="/create_student">
        <p>Create a Student</p>
      </Link>
      {contacts.map(({ _id, firstName, lastName, studentId }) => (
        <StudentList
          key={_id}
          firstName={firstName}
          lastName={lastName}
          studentId={studentId}
        />
      ))}
    </div>
  );
}

export default List;
