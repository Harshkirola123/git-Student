
import AddStudent from './component/AddStudent';
import {BrowserRouter as Router,Routes,Route,Link} from 'react-router-dom'
import Display from './component/Display';

function App() {
  return (
    <div className="App">
      <Router>
            <div className="flex justify-center p-4">
                {/* Navigation Links */}
                <Link to="/" className="px-4 py-2 bg-indigo-500 text-white rounded-lg mr-4">Add Student</Link>
                <Link to="/Display" className="px-4 py-2 bg-indigo-500 text-white rounded-lg">Student List</Link>
            </div>

            <Routes>
                {/* Define Routes for AddStudent and StudentList */}
                <Route path="/" element={<AddStudent />} />
                <Route path="/Display" element={<Display />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
