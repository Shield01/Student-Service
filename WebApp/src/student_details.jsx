export default function Details({
    phonenumber = "N/A",
    emailaddress = "N/A",
    gender = "N/A",
    dateofbirth = "N/A",
    password = "N/A",
    grade = "N/A",
    lastlogindate = "N/A",
    isphonenumberverified = "N/A",
    studentid = "N/A"
}) {
    return (
        <div className="contact">
          <h5 className="contact__name">{phonenumber}</h5>
          <h6 className="contact__email">{emailaddress}</h6>
          <p className="contact__tagline">{gender}</p>
          <p className="contact__tagline">{dateofbirth}</p>
          <p className="contact__tagline">{password}</p>
          <p className="contact__tagline">{grade}</p>
          <p className="contact__tagline">{lastlogindate}</p>
          <p className="contact__tagline">{isphonenumberverified}</p>
          <p className="contact__tagline">{studentid}</p>
        </div>
    );
}