import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteAll, deleteStudent, updateStudent} from "../feature/Slicer/studentSlice";

function Display() {
  const students = useSelector((state) => state.students); // Default to empty array
  const dispatch = useDispatch();

  const [editingId, setEditingId] = useState(null);
  const [editName, setEditName] = useState('');
  const [editMark, setEditMark] = useState(0);

  const deleteHandler = (id) => {
    dispatch(deleteStudent({ id }));
  };

  const deleteAllHandler = () => {
    if (window.confirm("Are you sure?")) {
      dispatch(deleteAll());
    }
  };

  const startEditing = (student) => {
    setEditingId(student.id);
    setEditName(student.name);
    setEditMark(student.mark);
  };

  const saveUpdate = (id) => {
    dispatch(updateStudent({ id, name: editName, mark: editMark }));
    setEditingId(null);
  };

  const cancelEdit = () => {
    setEditingId(null);
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Student List</h2>
        {students.length > 0 ? (
          <>
            <ul>
              {students.map((student) => (
                <li key={student.id} className="mb-2">
                  <div className="border-b border-gray-200 py-2 flex items-center space-x-2">
                    {editingId === student.id ? (
                      <div className="flex w-full space-x-2 items-center">
                        <input
                          type="text"
                          value={editName}
                          onChange={(e) => setEditName(e.target.value)}
                          className="border border-gray-300 px-2 py-1 rounded-lg w-1/3"
                        />
                        <input
                          type="number"
                          value={editMark}
                          onChange={(e) => setEditMark(Number(e.target.value))}
                          className="border border-gray-300 px-2 py-1 rounded-lg w-1/3"
                        />
                        <button
                          onClick={() => saveUpdate(student.id)}
                          className="bg-green-500 text-white px-4 py-2 rounded-lg"
                        >
                          📁
                        </button>
                        <button
                          onClick={cancelEdit}
                          className="bg-gray-500 text-white px-4 py-2 rounded-lg"
                        >
                          ❌
                        </button>
                      </div>
                    ) : (
                      <div className="flex w-full justify-between items-center">
                        <span className="font-bold">{student.name}</span>: {student.mark} marks
                        <div className="flex space-x-2">
                          <button
                            onClick={() => startEditing(student)}
                            className="bg-white text-black px-2 py-1 rounded-lg border border-gray-300"
                          >
                            ✏️
                          </button>
                          <button
                            onClick={() => deleteHandler(student.id)}
                            className="bg-white text-red-600 px-2 py-1 rounded-lg border border-gray-300"
                          >
                            ❌
                          </button>
                        </div>
                      </div>
                    )}
                  </div>
                </li>
              ))}
            </ul>
            <button
              onClick={deleteAllHandler}
              className="mt-4 bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300"
              disabled={students.length === 0}
            >
              Delete All
            </button>
          </>
        ) : (
          <p className="text-center">No students found.</p>
        )}
      </div>
    </div>
  );
}

export default Display;

