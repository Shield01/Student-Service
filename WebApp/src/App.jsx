import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import List from "./list";
import Details from "./details";
import CreateStudent from "./create_student"

const App = () =>{
    return(
      <Router>
        <Routes>
          <Route index element={<List />} />
          <Route path="/student_details" element={<Details />} />
          <Route path="/create_student" element={<CreateStudent />} />
        </Routes>
      </Router>
    )
}

export default App