import React from 'react'
import { useState } from 'react';
import PopupView from '../PopupView';


export default function View(users) {
    const [viewData, setViewData] = useState();

    const [popUpView, setPopUpView] = useState({
        show: false,
        id: null,
    })

    const handleView = (id) => {
        setPopUpView({
            show: true,
            id,
        })
        setViewData(users.users.find(obj => {
            return obj.id === id;
        }))
    }

    const handleClose = () => {
        setPopUpView({
            show: false
        })
    }
    return (
        <div>
            <div onClick={() => { handleView(users.valueid) }}>View</div>
            {popUpView.show && (<PopupView viewData={viewData} handleClose={handleClose} />)}
        </div>
    )
}