import React from "react"
import { useState } from "react"

import {
    CCardImage,
    CCardTitle,
    CCardText,
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CInputGroup,
    CInputGroupText,
    CForm,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CFormInput,
    CFormLabel,
    CFormFloating,
  } from '@coreui/react'
  import { cilLockLocked, cilUser, cilCalendar } from '@coreui/icons'

  import CIcon from '@coreui/icons-react'



const LeaseModal = (props) =>{
    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState(props.email)
    const [building_no, setBNo] = useState()
    const [unit_no, setUNo] = useState()
    const [room, setRoom] = useState()
    const [from_date, setFromDate] = useState()
    const [to_date, setToDate] = useState()
    const [rent, setRent] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const leaseInfo = {email, building_no, unit_no, room, from_date, to_date, rent};
    
        fetch('http://localhost:8080/createLease', {
          method:'POST',
          mode: 'no-cors',
          headers: {'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Access-Control-Request-Headers':'*',
          'Access-Control-Request-Method':'*' },
          body: JSON.stringify(leaseInfo)
        }).then(() => {
            setVisible(false)
          console.log(leaseInfo);
        })
      }
    return(
        <>
            <CButton onClick={() => setVisible(!visible)}>Get Details</CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
                <CModalTitle>{props.cardName} Assign Room To Accepted Applicant</CModalTitle>
            </CModalHeader>
            <CModalBody>
            <CForm onSubmit={handleSubmit}>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => setBNo(parseInt(e.target.value))} placeholder="Building No" id="Building_No" />
                    <CFormLabel htmlFor="Building_No">Building Number</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => setUNo(parseInt(e.target.value))} placeholder="Unit No" id="Unit_No" />
                    <CFormLabel htmlFor="Unit_No">Unit Number</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => setRoom(parseInt(e.target.value))} placeholder="Room" id="Room" />
                    <CFormLabel htmlFor="Room">Room</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => setFromDate(e.target.value)} type="date" placeholder="From Date" id="From_Date" />
                    <CFormLabel htmlFor="From_Date">From Date</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => setToDate(e.target.value)} type="date" placeholder="To Date" id="To_Date" />
                    <CFormLabel htmlFor="To_Date">To Date</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => {setRent(parseInt(e.target.value))
                    setEmail(props.email)}} placeholder="Rent (Monthly)" id="Rent" />
                    <CFormLabel htmlFor="Rent">Rent</CFormLabel>
                </CFormFloating>
                  <div className="d-grid">
                    <CButton type='submit' color="success">Create Lease</CButton>
                  </div>
                </CForm>
            </CModalBody>
            <CModalFooter>
                <CButton color="secondary" onClick={() => setVisible(false)}>
                Close
                </CButton>
            </CModalFooter>
            </CModal>
        </>
    )
}
export default LeaseModal;