import React, { useCallback, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CImage,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'


const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [redirect, setRedirect] = useState(false);


  const submit = async (e) => {
      e.preventDefault();
      await fetch('http://localhost:8080/api/login', {
          method:'POST',
          headers: {'Content-Type':'application/json'},
          credentials: 'include',
          body: JSON.stringify({
              email, password
          })
      });
      setRedirect(true);
  }

  if (redirect)
  {
      return <Redirect to="/"/>
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup className='shadow'>
              <CCard className="p-4">
              <CImage src='/cover.png' width={450} height={200}></CImage>
                <CCardBody>
                  <CForm onSubmit={submit}>
                    <p className="text-medium-emphasis">Sign In to your account</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput id="email" placeholder="Email" autoComplete="email" onChange={(e) => setEmail(e.target.value)}/>
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        id="password"
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" type='submit' className="px-4">
                          Login
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Forgot password?
                        </CButton>
                      </CCol>
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h2>Not a Tenant?</h2>
                    <p>
                      Click the "Apply Now!" button to apply for a unit!
                    </p>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        Apply Now!
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}

export default Login
