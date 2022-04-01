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
    // console.log("Ramu",props.data);
    let mrHistory = [];
    let idx = 1;
    for(var i in props.data)
    {
      if (props.data[i].Facility === props.cardName)
      {
        mrHistory.push([idx, props.data[i].Issue_description, props.data[i].Created_on]);
        idx++;
      }
    }
    console.log(mrHistory);
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
                <CTable striped>
                  <CTableHead>
                    <CTableRow>
                      <CTableHeaderCell scope="col">#</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Date</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Description</CTableHeaderCell>
                      <CTableHeaderCell scope="col">Remark</CTableHeaderCell>
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {mrHistory.map(mr=>(
                      <CTableRow key={mr}>
                        <CTableHeaderCell scope="row" className="text-center">
                          {mr[0]}
                        </CTableHeaderCell>
                        <CTableDataCell>
                          {mr[2]}
                        </CTableDataCell>
                        <CTableDataCell>
                          {mr[1]}
                        </CTableDataCell>
                        <CTableDataCell>
                          -
                        </CTableDataCell>
                      </CTableRow>
                    ))}
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