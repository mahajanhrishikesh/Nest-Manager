import { React, useState, useRef } from 'react'
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CImage,
  CToast,
  CToastBody,
  CToastClose,
  CToaster,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilCalendar } from '@coreui/icons'

const Register = () => {

  const[fname, setFName] = useState('');
  const[lname, setLName] = useState('');
  const[dob, setDOB] = useState('');
  const[email, setEmail] = useState('');
  const handleSubmit = async (e) => {
      e.preventDefault();
      await fetch('http://localhost:8080/api/registerApplicant', {
          method:'POST',
          headers: {'Content-Type':'application/json'},
          body: JSON.stringify({
              fname, lname, email, dob
          })
      }); 
    }

    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const confirmationToast = (
        <CToast color="success" className="text-white align-items-center">
            <div className="d-flex">
                <CToastBody>Hey {fname} you will be hearing back from us soon!</CToastBody>
                <CToastClose className="me-2 m-auto" white />
            </div>
        </CToast>
    )

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={9} lg={7} xl={6}>
            <CCard className="mx-4 shadow">
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <CImage src='/cover.png' width={500} height={200}></CImage>
                  <p className="text-medium-emphasis">Create your account</p>
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
                    <CButton type='submit' color="success" onClick={() => addToast(confirmationToast)}>Apply</CButton>
                  </div>
                  <CToaster ref={toaster} push={toast} placement="top-end" />
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Register
