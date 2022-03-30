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
                      Heading 1
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 2
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 3
                    </CTableHeaderCell>
                    <CTableHeaderCell scope="col" className="w-25">
                      Heading 4
                    </CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  <CTableRow>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This here is some placeholder text, intended to take up quite a bit of
                      vertical space, to demonsCTableRowate how the vertical alignment works in the
                      preceding cells.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow align="bottom">
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: bottom;</code> from the table row
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: bottom;</code> from the table row
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: bottom;</code> from the table row
                    </CTableDataCell>
                    <CTableDataCell>
                      This here is some placeholder text, intended to take up quite a bit of
                      vertical space, to demonsCTableRowate how the vertical alignment works in the
                      preceding cells.
                    </CTableDataCell>
                  </CTableRow>
                  <CTableRow>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell>
                      This cell inherits <code>vertical-align: middle;</code> from the table
                    </CTableDataCell>
                    <CTableDataCell align="top">This cell is aligned to the top.</CTableDataCell>
                    <CTableDataCell>
                      This here is some placeholder text, intended to take up quite a bit of
                      vertical space, to demonsCTableRowate how the vertical alignment works in the
                      preceding cells.
                    </CTableDataCell>
                  </CTableRow>
                </CTableBody>
              </CTable>
            
    </div>
  )
}

export default managePersonnel;
