import React, { lazy, useState, useRef} from 'react'

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


const addApartment = (props) => {

    const[apt_no, setAptNo] = useState(0);
    const[block_no, setBlockNo] = useState(0);
    const[room_count, setRoomCnt] = useState(0);
    const[furniture_status, setFStatus] = useState("Furnished");

    const handleSubmit = (e) => {
        e.preventDefault();
        const apartmentInfo = {apt_no, block_no, room_count, furniture_status, "occupancy":0};

        fetch('http://localhost:8080/createApartment', {
            method:'POST',
            mode: 'no-cors',
            headers: {'Content-Type': 'application/json',
            'cache-control': 'no-cache',
            'Access-Control-Request-Headers':'*',
            'Access-Control-Request-Method':'*' },
            body: JSON.stringify(apartmentInfo)
        }).then(() => {
            console.log(apartmentInfo);
        })
    }

    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const confirmationToast = (
        <CToast color="success" className="text-white align-items-center">
            <div className="d-flex">
                <CToastBody>Apartment number {apt_no} added successfully!</CToastBody>
                <CToastClose className="me-2 m-auto" white />
            </div>
        </CToast>
    )

  return (
    <div>
        <h2 id="thisEvent">Add Apartment</h2>
        <CCard >
            <CCardBody>
                <CCardTitle>Fill details of the new Apartment </CCardTitle>
                    <CForm onSubmit={handleSubmit}>
                        <CRow xs={{gutter: 2}} className="mb-3">
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput onChange={(e) => setAptNo(parseInt(e.target.value))} type="integer" id="aptNo"/>
                                    <CFormLabel htmlFor="aptNo">Apartment Number</CFormLabel>
                                </CFormFloating>
                            </CCol>
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput onChange={(e) => setBlockNo(parseInt(e.target.value))} type="text" id="blockNo"/>
                                    <CFormLabel htmlFor="blockNo">Block Number</CFormLabel>
                                </CFormFloating>
                            </CCol>
                        </CRow>
                        <CRow xs={{gutter: 2}} className="mb-3">
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput onChange={(e) => setRoomCnt(parseInt(e.target.value))} type="integer" id="roomCount"/>
                                    <CFormLabel htmlFor="roomCount">Room Count</CFormLabel>
                                </CFormFloating>
                            </CCol>
                            <CCol md>
                            <CFormFloating>
                                <CFormSelect onChange={(e) => setFStatus(e.target.value)} id="furniture">
                                    <option>Select</option>
                                    <option value="Furnished">Furnished</option>
                                    <option value="Semi-Furnished">Semi-Furnished</option>
                                    <option value="Un-Furnished">Un-Furnished</option>
                                </CFormSelect>
                                <CFormLabel htmlFor="floatingSelectGrid">Furniture Status</CFormLabel>
                            </CFormFloating>
                            </CCol>
                        </CRow>
                        <CButton type="submit" onClick={() => addToast(confirmationToast)}>Submit</CButton>
                        <CToaster ref={toaster} push={toast} placement="top-end" />
                    </CForm>
            </CCardBody>
        </CCard>
    </div>
  )
}

export default addApartment;
