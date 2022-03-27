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
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
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


const Facility = (props) =>{
    const [visible, setVisible] = useState(false)

    return(
        <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>{props.cardName}</CCardTitle>
              <CCardText>
                <li className="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
              </CCardText>
              <CButton onClick={() => setVisible(!visible)}>Get Details</CButton>
              <CModal visible={visible} onClose={() => setVisible(false)}>
                <CModalHeader>
                  <CModalTitle>{props.cardName} Status</CModalTitle>
                </CModalHeader>
                <CModalBody>
                <CTable small>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Remark</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    <CTableRow color="success">
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>03/24/2022</CTableDataCell>
                      <CTableDataCell>{props.cardName} Unclean</CTableDataCell>
                      <CTableDataCell>MR resolved</CTableDataCell>
                    </CTableRow>
                    <CTableRow color="danger">
                      <CTableHeaderCell scope="row">1</CTableHeaderCell>
                      <CTableDataCell>03/25/2022</CTableDataCell>
                      <CTableDataCell>{props.cardName} Unclean</CTableDataCell>
                      <CTableDataCell>MR generated</CTableDataCell>
                    </CTableRow>
                  </CTableBody>
                  </CTable>
                </CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  {/* <CButton color="primary">Save changes</CButton> */}
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
    )
}
export default Facility;