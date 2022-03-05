import { React, useState } from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser, cilCalendar } from '@coreui/icons'

const Register = () => {

  const[fname, setFName] = useState();
  const[lname, setLName] = useState();
  const[email, setEmail] = useState();
  const[dob, setDOB] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registrationInfo = {fname, lname, email, dob};

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
                    <CButton type='submit' color="success">Apply</CButton>
                  </div>
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
