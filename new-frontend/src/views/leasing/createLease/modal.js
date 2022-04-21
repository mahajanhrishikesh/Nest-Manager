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
    CFormSelect,
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

    const [sdd, setSDD] = useState([])

    const [visible, setVisible] = useState(false)
    const [email, setEmail] = useState(props.email)
    const [block_no, setBNo] = useState(-999)
    const [apt_no, setUNo] = useState()
    const [room, setRoom] = useState()
    const [from_date, setFromDate] = useState()
    const [to_date, setToDate] = useState()
    const [rent, setRent] = useState()

    const handleSubmit = (e) => {
        e.preventDefault();
        const leaseInfo = {email, block_no, apt_no, room, from_date, to_date, rent};

        fetch('http://localhost:8080/api/createLease', {
            method:'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(leaseInfo),
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
                    {/* <CFormSelect onChange={(e) => {setBNo(parseInt(e.target.value))}} id="Block_No">
                    <option> Select</option>
                        {JSON.parse(props.data).map((item2, idx) => (
                        <option value={item2.Block_No}>{item2.Block_No}</option>
                        ))}
                    </CFormSelect> */}
                    <CFormLabel htmlFor="Building_No">Building Number</CFormLabel>
                </CFormFloating>
                <CFormFloating className="mb-3">
                    <CFormInput onChange={(e) => setUNo(parseInt(e.target.value))} placeholder="Unit No" id="Unit_No" />
                    {/* <CFormSelect onChange={(e) => setUNo(parseInt(e.target.value))} id="Unit_NO">
                    <option> Select</option>
                        {JSON.parse(props.data).map((item2, idx) => {
                            if(item2.Block_No === block_no)
                            {
                                <option value={item2.Block_No}>{item2.Block_No}</option>
                            }
                        })}
                    </CFormSelect> */}
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