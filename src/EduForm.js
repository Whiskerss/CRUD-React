import React, { useState } from 'react';

export default function EduForm() {
    const [eduCount, setEduCount] = useState([{ row: 'row' }]);

    const addRow = (e) => {
        e.preventDefault();
        if (eduCount.length < 6) {
            const row = { row: 'row' }
            setEduCount([...eduCount, row])
        }
    }

    const deleteRow = (e, index) => {
        e.preventDefault();
        const rows = [...eduCount];
        rows.splice(index, 1);
        setEduCount(rows);
    }

    return (
        <div>
            <div className='d-flex justify-content-between mt-4'>
                <h3>Education Details</h3>
                <div className='btn btn-primary mb-3' onClick={addRow}>Add</div>
            </div>
            <div className='bg-light' style={{ height: '325px' }} >
                <table className="table table-bordered table-light mt-4 text-center">
                    <thead className="thead bg-light">
                        <tr className='table-secondary'>
                            <th>Board</th>
                            <th>Institution</th>
                            <th>Passed Year</th>
                            <th>Percentage</th>
                            <th>Grade</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {eduCount?.map((index) => {
                            return (
                                <tr key={index}>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><input /></td>
                                    <td><div className='btn btn-danger btn-lg' onClick={deleteRow}> </div></td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    )
}