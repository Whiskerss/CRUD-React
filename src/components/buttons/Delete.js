import React from 'react'
import axios from 'axios';
import PopupDel from '../PopupDel';
import { toast } from 'react-toastify';
import { useState } from 'react';

export default function Delete(getData) {
    const [popUpDel, setPopUpDel] = useState({
        show: false,
        id: null,
    })

    const deleteUser = (id) => {
        setPopUpDel({
            show: true,
            id,
        })
    };

    const handleDeleteTrue = async () => {
        if (popUpDel.show && popUpDel.id) {
            const id = toast.loading("Deleting...")
            axios({
                method: 'delete',
                url: `https://634d2e67f5d2cc648e9eb0da.mockapi.io/hrdata/${popUpDel.id}`,
            }).then(() => {
                toast.update(id, { render: "Employee details deleted.", type: "success", isLoading: false, autoClose: 3000 });
                getData.getData();
            }).catch((error) => {
                toast.update(id, { render: 'Could not delete employee details!', type: "error", isLoading: false, autoClose: 3000 });
                if (error.response) {
                    console.log(error.response.status,);
                } else if (error.request) {
                    console.log(error.request);
                } else {
                    console.log('Error', error.message,);
                }
                getData.getData();
            })
        }
        setPopUpDel({
            show: false,
            id: null,
        })
    };

    const handleDeleteFalse = () => {
        setPopUpDel({
            show: false,
            id: null,
        })
    }
    return (
        <div><div onClick={() => { deleteUser(getData.valueid) }}>X</div>
            {popUpDel.show && (<PopupDel handleDeleteTrue={handleDeleteTrue} handleDeleteFalse={handleDeleteFalse} />)}
        </div>
    )
}
