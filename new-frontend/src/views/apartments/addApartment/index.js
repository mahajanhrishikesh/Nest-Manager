import React, { lazy } from 'react'

import {
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardTitle,
    CCardSubtitle,
    CCardText,
    CCardLink,
    CCardBody,
    CCardFooter,
    CCardHeader,
    CCol,
    CFormFloating,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CForm,
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
  } from '@coreui/icons'


const addApartment = (props) => {
  return (
    <div>
        <h2 id="thisEvent">Add Apartment</h2>
        <CCard >
            <CCardBody>
                <CCardTitle>Fill Apartment Details</CCardTitle>
                    <CForm>
                        <CRow xs={{gutter: 2}} className="mb-3">
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput type="integer" id="aptNo"/>
                                    <CFormLabel htmlFor="aptNo">Apartment Number</CFormLabel>
                                </CFormFloating>
                            </CCol>
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput type="text" id="blockNo"/>
                                    <CFormLabel htmlFor="blockNo">Block Number</CFormLabel>
                                </CFormFloating>
                            </CCol>
                        </CRow>
                        <CRow xs={{gutter: 2}} className="mb-3">
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput type="integer" id="roomCount"/>
                                    <CFormLabel htmlFor="roomCount">Room Count</CFormLabel>
                                </CFormFloating>
                            </CCol>
                            <CCol md>
                            <CFormFloating>
                                <CFormSelect id="furniture">
                                    <option>Select</option>
                                    <option value="1">Furnished</option>
                                    <option value="2">Semi-Furnished</option>
                                    <option value="3">Unfurnished</option>
                                </CFormSelect>
                                <CFormLabel htmlFor="floatingSelectGrid">Furniture Status</CFormLabel>
                            </CFormFloating>
                            </CCol>
                        </CRow>
                        <CButton type="submit">Submit</CButton>
                    </CForm>
            </CCardBody>
        </CCard>
    </div>
  )
}

export default addApartment;
