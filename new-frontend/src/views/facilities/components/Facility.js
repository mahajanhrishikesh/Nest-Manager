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
                  <CModalTitle>Modal title</CModalTitle>
                </CModalHeader>
                <CModalBody>Woohoo, you&#39;re reading this text in a modal!</CModalBody>
                <CModalFooter>
                  <CButton color="secondary" onClick={() => setVisible(false)}>
                    Close
                  </CButton>
                  <CButton color="primary">Save changes</CButton>
                </CModalFooter>
              </CModal>
            </CCardBody>
          </CCard>
    )
}
export default Facility;