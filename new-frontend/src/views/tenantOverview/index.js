import React, { lazy, useState, useRef, useEffect} from 'react'

import {
    CButton,
    CCard,
    CCardTitle,
    CCardBody,
    CCol,
    CFormFloating,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CRow,
    CForm,
    CToast,
    CToaster,
    CToastBody,
    CToastClose,

  } from '@coreui/react'


const tenantOverview = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');

    useEffect(() => {
        (
            async () => {
                const response = await fetch('http://localhost:8080/api/user', {
                    headers: {'Content-Type':'application/json'},
                    credentials:'include'
                });
                const content = await response.json();
                setName(content.name);
                setType(content.type);
            }
        )();
    });

    // const [toast, addToast] = useState(0)
    // const toaster = useRef()
    // const confirmationToast = (
    //     <CToast color="success" className="text-white align-items-center">
    //         <div className="d-flex">
    //             <CToastBody>Apartment number {apt_no} added successfully!</CToastBody>
    //             <CToastClose className="me-2 m-auto" white />
    //         </div>
    //     </CToast>
    // )

  return (
    <div>
        <h2>Overview</h2>
        <h6>Hey {name} ! Here are your updates</h6>
        
    </div>
  )
}

export default tenantOverview;
