import React, { lazy } from 'react'
import { useState } from "react"
import {
    CAlert,
    CAvatar,
    CButton,
    CButtonGroup,
    CCard,
    CCardBody,
    CForm,
    CCardFooter,
    CCardHeader,
    CCardTitle,
    CCol,
    CFormFloating,
    CFormInput,
    CFormLabel,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CProgress,
    CRow,
    CTable,
    CTableBody,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
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


const removeApartment = (props) => {

    const [visible, setVisible] = useState(false)
  return (
    <div>
        <h2 id="thisEvent">Remove Apartment</h2>
        <CCard >
            <CCardBody>
                <CCardTitle className="mb-3">Fill details of apartment to be removed</CCardTitle>
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
                    <CButton type="submit" onClick={() => setVisible(!visible)}>Submit</CButton>
                    <CModal visible={visible} onClose={() => setVisible(false)}>
                        <CModalHeader onClose={() => setVisible(false)}>
                            <CModalTitle>Apartment Removal Confirmation</CModalTitle>
                        </CModalHeader>
                        <CModalBody>
                            <CAlert color="danger">
                                Please confirm that you want to delete the apartment
                            </CAlert>
                        </CModalBody>
                        <CModalFooter>
                            <CButton color="secondary" onClick={() => setVisible(false)}>
                            Cancel
                            </CButton>
                            <CButton color="primary">Confirm</CButton>
                        </CModalFooter>
                    </CModal>
                </CForm>
            </CCardBody>
        </CCard>
    </div>
  )
}

export default removeApartment;
