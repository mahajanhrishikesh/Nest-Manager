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
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }}>

          <CCol xs>

          <CCard style={{ width: '18rem' }}>

            {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}

            <CCardBody>

              <CCardTitle>Card title</CCardTitle>

              <CCardText>

                Some quick example text to build on the card title and make up the bulk of the card's content.

              </CCardText>

              <CButton href="#">Go somewhere</CButton>

            </CCardBody>

          </CCard>

          </CCol>

          <CCol xs>

            <CCard style={{ width: '18rem' }}>

              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}

              <CCardBody>

                <CCardTitle>Card title</CCardTitle>

                <CCardText>

                  Some quick example text to build on the card title and make up the bulk of the card's content.

                </CCardText>

                <CButton href="#">Go somewhere</CButton>

              </CCardBody>

            </CCard>

          </CCol>

          <CCol xs>

            <CCard style={{ width: '18rem' }}>

  {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}

              <CCardBody>

                <CCardTitle>Card title</CCardTitle>

                <CCardText>

                  Some quick example text to build on the card title and make up the bulk of the card's content.

                </CCardText>

                <CButton href="#">Go somewhere</CButton>

              </CCardBody>

            </CCard>

          </CCol>

          <CCol xs>

            <CCard style={{ width: '18rem' }}>

              {/* <CCardImage orientation="top" src="/images/react.jpg" /> */}

              <CCardBody>

                <CCardTitle>Card title</CCardTitle>

                <CCardText>

                  Some quick example text to build on the card title and make up the bulk of the card's content.

                </CCardText>

                <CButton href="#">Go somewhere</CButton>

              </CCardBody>

            </CCard>

          </CCol>

        </CRow>
    </div>
  )
}

export default facilities;
