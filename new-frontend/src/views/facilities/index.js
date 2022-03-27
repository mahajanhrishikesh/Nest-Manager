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
  return (
    <div>
        <h2 id="thisFac">Facilities</h2>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
            <Facility cardName="Pool"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Post Boxes"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Gym Equipment"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Club House"/>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <Facility cardName="Barbeque Deck"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Basketball Court"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Street Lights"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Garbage"/>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <Facility cardName="Internet"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Water"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Electricity"/>
          </CCol>
          <CCol xs>
          <Facility cardName="Sit-out"/>
          </CCol>
        </CRow>
        
    </div>
  )
}

export default facilities;
