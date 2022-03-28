import React, { lazy, useState } from 'react';
import Facility from './components/Facility';
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


const facilities = (props) => {
  const [visible, setVisible] = useState(false);

  // let condition = "mb-1 list-group-item list-group-item-success rounded";
  return (
    <div>
        <h2 id="thisFac">Facilities</h2>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
            <Facility cardName="Pool" condition="success"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Post Boxes" condition="success"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Gym Equipment" condition="warning"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Club House" condition="warning"/>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <Facility cardName="Barbeque Deck" condition="danger"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Basketball Court" condition="success"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Street Lights" condition="danger"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Garbage" condition="success"/>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <Facility cardName="Internet" condition="warning"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Water" condition="success"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Electricity" condition="success"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Sit-out" condition="warning"/>
          </CCol>
        </CRow>
        
    </div>
  )
}

export default facilities;
