import React from 'react'
import { useNavigate } from 'react-router-dom';

export default function Update(users) {
    const navigate = useNavigate();

    const handleUpdate = async (id) => {
        const updateUser = users.users.find(obj => {
            return obj.id === id;
        })
        let locnData = {
            ...updateUser,
            isUpdated: false
        }
        navigate("/EmployeeRegis", { state: { locnData } })
    }
    return (
        <div>
            <div onClick={() => { handleUpdate(users.valueid) }}>Update</div>
        </div >
    )
}
