import StudentDetails from "./student_details";
import { useState, useEffect } from "react";
import axios from "axios";

function Details() {
  const [error, setError] = useState(null);

  const [details, setDetails] = useState([]);

  useEffect(() => {
    axios("http://localhost:3000/student_details_service/students")
      .then((response) => {
        setDetails(response.data);
        setError(null);
      })
      .catch(setError);
  }, []);

  if (error) {
    return <p>An error occurred</p>
  }
  
  return (
    <div className="App">
      {details.map(({ id, phonenumber, emailaddress, gender, dateofbirth, password, grade, lastlogindate, isphonenumberverified, studentid}) => (
        <StudentDetails
          key={id}
          phonenumber={phonenumber}
          emailaddress={emailaddress}
          gender={gender}
          dateofbirth={dateofbirth}
          password={password}
          grade={grade}
          lastlogindate={lastlogindate}
          isphonenumberverified={isphonenumberverified}
          studentid={studentid}
        />
      ))}
    </div>
  );
}

export default Details;