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
  } from '@coreui/react'
  import { cilLockLocked, cilUser, cilCalendar } from '@coreui/icons'

  import CIcon from '@coreui/icons-react'



const LeaseModal = (props) =>{
    const [visible, setVisible] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        const registrationInfo = {fname, lname, email, dob, "accepted":0};
    
        fetch('http://localhost:8080/register', {
          method:'POST',
          mode: 'no-cors',
          headers: {'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Access-Control-Request-Headers':'*',
          'Access-Control-Request-Method':'*' },
          body: JSON.stringify(registrationInfo)
        }).then(() => {
          console.log(registrationInfo);
        })
      }
    return(
        <>
            <CButton onClick={() => setVisible(!visible)}>Get Details</CButton>
            <CModal visible={visible} onClose={() => setVisible(false)}>
            <CModalHeader>
                <CModalTitle>{props.cardName} Status</CModalTitle>
            </CModalHeader>
            <CModalBody>
            <CForm onSubmit={handleSubmit}>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput onChange={(e) => setFName(e.target.value)} placeholder="First Name" autoComplete="First Name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilUser} />
                    </CInputGroupText>
                    <CFormInput onChange={(e) => setLName(e.target.value)} placeholder="Last Name" autoComplete="Last Name" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>@</CInputGroupText>
                    <CFormInput onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" />
                  </CInputGroup>
                  <CInputGroup className="mb-3">
                    <CInputGroupText>
                      <CIcon icon={cilCalendar} />
                    </CInputGroupText>
                    <CFormInput onChange={(e) => setDOB(e.target.value)} type="date" placeholder='Date of Birth' />
                  </CInputGroup>
                  <div className="d-grid">
                    <CButton type='submit' color="success">Apply</CButton>
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