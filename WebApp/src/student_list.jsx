import { Link } from "react-router-dom";

export default function Contact({
  firstName = "Steve Jobs",
  lastName = "steve@apple.com",
  studentId = "Stay hungry, stay foolish",
}) {
  return (
    <>
      <Link to="/student_details">
      <div className="contact">
      <h5 className="contact__name">{firstName}</h5>
      <h6 className="contact__email">{lastName}</h6>
      <p className="contact__tagline">{studentId}</p>
    </div>
    </Link>
    </>
  );
}
