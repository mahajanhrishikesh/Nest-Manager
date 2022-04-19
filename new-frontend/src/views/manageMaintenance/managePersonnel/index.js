import React, { lazy } from 'react'
import { useState } from 'react'
import {
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
    CContainer,
    CForm,
    CImage,
    CInputGroup,
    CInputGroupText,
    CFormInput,
  } from '@coreui/react'

  import { CChartLine } from '@coreui/react-chartjs'
  import { getStyle, hexToRgba } from '@coreui/utils'
  import CIcon from '@coreui/icons-react'
  import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
    cilCalendar,
  } from '@coreui/icons'



  const addPersonnel = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const type = "maintenance";
    const submit = async (e) => {
        e.preventDefault();
        await fetch('http://localhost:8080/api/register', {
            method:'POST',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                name, email, type, password
            })
        });
        
    }
  
    return (
      <div>
        <h2>Add Personnel</h2>
                  <CForm onSubmit={submit}>
                    <p className="text-medium-emphasis">Add New Maintenance Personnel</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput onChange={(e) => setName(e.target.value)} placeholder="Name" autoComplete="Name" />
                    </CInputGroup>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>@</CInputGroupText>
                      <CFormInput onChange={(e) => setEmail(e.target.value)} placeholder="Email" autoComplete="email" />
                    </CInputGroup>

                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilCalendar} />
                      </CInputGroupText>
                      <CFormInput onChange={(e) => setPassword(e.target.value)}  placeholder='Password' autoComplete="password" />
                    </CInputGroup>


                    <div className="d-grid">
                      <CButton type='submit' color="success">Add Personnel</CButton>
                    </div>
                  </CForm>
                
      </div>
    )
  }

export default addPersonnel;
