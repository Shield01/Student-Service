import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateStudent = () => {
    const navigate = useNavigate();
    const [firstName, setfirstName] = useState("");
    const [lastName, setlastName] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [emailAddress, setemailAddress] = useState("");
    const [gender, setgender] = useState("");
    const [password, setpassword] = useState("");
    const [grade, setgrade] = useState("");
    const createStudent = async () => {
        const response = await axios.post("http://localhost:3000/student_list_service/students/create_student", {
            firstName,
            lastName,
            phoneNumber,
            emailAddress,
            gender,
            password,
            grade
        });
        const data = await response.data;
        if (data) {
            navigate("/")
        }
    }
  return(
    <>
        <input placeholder="firstName of student" value={firstName} onChange={(e) => setfirstName(e.target.value)} />
        <input placeholder="lastName of student" value={lastName} onChange={(e) => setlastName(e.target.value)} />
        <input placeholder="phoneNumber of student" value={phoneNumber} onChange={(e) => setphoneNumber(e.target.value)} />
        <input placeholder="emailAddress of student" value={emailAddress} onChange={(e) => setemailAddress(e.target.value)} />
        <input placeholder="gender of student" value={gender} onChange={(e) => setgender(e.target.value)} />
        <input placeholder="password of student" value={password} onChange={(e) => setpassword(e.target.value)} />
        <input placeholder="grade of student" value={grade} onChange={(e) => setgrade(e.target.value)} />
        <button onClick = {createStudent}>Submit</button>
    </>
  )
}
export default CreateStudent