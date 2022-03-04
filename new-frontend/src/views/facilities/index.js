import React, { lazy } from 'react'

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
  return (
    <div>
        <h2>Facilities</h2>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>Pool</CCardTitle>
              <CCardText>
                <li className="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
              </CCardText>
              <CButton href='#'>Get Details</CButton>
            </CCardBody>
          </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Post Boxes</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Gym Equipment</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-warning rounded">Status: Okay</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Club House</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>Barbeque Deck</CCardTitle>
              <CCardText>
              <li class="mb-1 list-group-item list-group-item-danger rounded">Status: Bad</li>
              </CCardText>
              <CButton href="#">Get Details</CButton>
            </CCardBody>
          </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Basketball Court</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Street Lights</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-warning rounded">Status: Okay</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Garbage</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
          <CCard style={{ width: '18rem' }}>
            <CCardBody>
              <CCardTitle>Internet</CCardTitle>
              <CCardText>
              <li class="mb-1 list-group-item list-group-item-warning rounded">Status: Okay</li>
              </CCardText>
              <CButton href="#">Get Details</CButton>
            </CCardBody>
          </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Water</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
          <CCol xs>
            <CCard style={{ width: '18rem' }}>
              <CCardBody>
                <CCardTitle>Electricity</CCardTitle>
                <CCardText>
                <li class="mb-1 list-group-item list-group-item-success rounded">Status: Excellent</li>
                </CCardText>
                <CButton href="#">Get Details</CButton>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
    </div>
  )
}

export default facilities;
