import React, { lazy } from 'react'

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
    CCardGroup,
    CContainer,
    CForm,
    CFormInput,
    CInputGroup,
    CInputGroupText,
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
    cilLockLocked,
  } from '@coreui/icons'
import { Link } from 'react-router-dom'


const apartments = (props) => {
  return (
    <div>
        <h2>Apartments</h2>
        <div className="bg-light d-flex flex-row align-items-center">
      <CContainer>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm>
                    <h1>Add Apartment</h1>
                    <p className="text-medium-emphasis">Add Apartment to Complex</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput placeholder="Username" autoComplete="username" />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"
                        placeholder="Password"
                        autoComplete="current-password"
                      />
                    </CInputGroup>
                        <CButton color="primary" className="px-4">
                          Add Apartment
                        </CButton>
                  </CForm>
                </CCardBody>
              </CCard>
            </CCardGroup>
      </CContainer>
    </div>
    </div>
  )
}

export default apartments;
