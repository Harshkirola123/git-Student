import { createSlice, nanoid } from "@reduxjs/toolkit";
// import { act } from "react";

// Initial state with 'students' as the key

const students = JSON.parse(localStorage.getItem('studentStore')) || [];
const initialState = {
    students: students
};

export const studentSlice = createSlice({
    name: "students",
    initialState,
    reducers: {
        addStudent: (state, action) => {
            // Ensure 'students' is always an array
            if (!Array.isArray(state.students)) {
                state.students = [];
            }
            // Create and add the new student
            const student = { id: nanoid(), name: action.payload.name, mark: action.payload.mark };
            state.students.push(student);

            localStorage.setItem('studentStore',JSON.stringify(state.students));
        },
        deleteStudent: (state, action) => {
            // Filter out the student with the matching ID
            state.students = state.students.filter(student => student.id !== action.payload.id);
        },
        deleteAll:(state,action)=>{
            state.students =[];
        },
        updateStudent: (state, action) => {
            const { id, name, mark } = action.payload;
            const studentIndex = state.students.findIndex(student => student.id === id);
            if (studentIndex !== -1) {
                const existingStudent = state.students[studentIndex];
                state.students[studentIndex] = {
                    ...existingStudent,
                    ...(name !== undefined && name !== "" ? { name } : existingStudent.name),
                    ...(mark !== undefined ? { mark } : existingStudent.mark),
                };
            }
        }
    }
});

export const { addStudent, deleteStudent,deleteAll,updateStudent } = studentSlice.actions;

export default studentSlice.reducer;
