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
    const[Apt_No, setAptNo] = useState();
    const[Block_No, setBlockNo] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const info = {Apt_No, Block_No};

    fetch('http://localhost:8080/removeApartment', {
      method:'POST',
      mode: 'no-cors',
      headers: {'Content-Type': 'application/json',
      'cache-control': 'no-cache',
      'Access-Control-Request-Headers':'*',
      'Access-Control-Request-Method':'*' },
      body: JSON.stringify(info)
    }).then(() => {
      console.log(info);
    })
  }

    const [visible, setVisible] = useState(false)
  return (
    <div>
        <h2 id="thisEvent">Remove Apartment</h2>
        <CCard >
            <CCardBody>
                <CCardTitle className="mb-3">Fill details of apartment to be removed</CCardTitle>
                <CForm  onSubmit={handleSubmit}>
                    <CRow xs={{gutter: 2}} className="mb-3">
                        <CCol md>
                            <CFormFloating >
                                <CFormInput type="integer" id="aptNo" onChange={(e) => setAptNo(parseInt(e.target.value))}/>
                                <CFormLabel htmlFor="aptNo">Apartment Number</CFormLabel>
                            </CFormFloating>
                        </CCol>
                        <CCol md>
                            <CFormFloating >
                                <CFormInput type="integer" id="blockNo" onChange={(e) => setBlockNo(parseInt(e.target.value))}/>
                                <CFormLabel htmlFor="blockNo">Block Number</CFormLabel>
                            </CFormFloating>
                        </CCol>
                    </CRow>
                    <CButton type='submit' >Submit</CButton>
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
                            <CButton  color="primary"  onClick={() => setVisible(false)}>Confirm</CButton>
                        </CModalFooter>
                    </CModal>
                </CForm>
            </CCardBody>
        </CCard>
    </div>
  )
}

export default removeApartment;
