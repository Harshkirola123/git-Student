import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent } from '../feature/Slicer/studentSlice'; // Adjust path if necessary
import { Link } from 'react-router-dom';

function AddStudent() {
    const [name, setName] = useState("");
    const [mark, setMark] = useState("");
    const dispatch = useDispatch();

    const addStudentHandler = (e) => {
        e.preventDefault();
        console.log("Dispatching addStudent with:", { name, mark });
        dispatch(addStudent({ name, mark })); // Dispatching action
        setName("");
        setMark("");
    };
    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Student</h2>
                <form onSubmit={addStudentHandler} className="space-y-4">
                    <input 
                        type="text" 
                        placeholder="Name" 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                    <input 
                        type="number" 
                        placeholder="Mark" 
                        value={mark} 
                        onChange={(e) => setMark(e.target.value)} 
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                    />
                    <button 
                        type="submit" 
                        className="w-full bg-indigo-500 text-white py-2 px-4 rounded-lg hover:bg-indigo-600 transition duration-300"
                    >
                        Add
                    </button>
                </form>
                <div className="text-center mt-4">
                    <Link to="/display" className="text-indigo-500 hover:underline">
                        View Student List
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default AddStudent;
