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


const managePersonnel = (props) => {
  return (
    <div>
        <h2 >Manage Personnel</h2>
       
              <CTable align="middle" responsive>
                <CTableHead>
                  <CTableRow>
                    <CTableHeaderCell scope="col" className="w-25">
                      Personnel Id
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Name
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Hours Worked
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Primary Work
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                {/* {data && <MM tData ={data}/>} */}
                   
                </CTableBody>
              </CTable>
            
    </div>
  )
}

export default managePersonnel;
