import React, { lazy, useState, useEffect } from 'react'
import Apt from './Apt';
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


const viewApartments = (props) => {
  const [data, setData] = useState(null);
  // let facilitiesMap = {};
    const getData = () => {
  
      fetch("http://localhost:8080/getAllApartments").then(function (response) {
        console.log(response);
        return response.json();
      }).then(function(myJSON){
        console.log(myJSON);
        setData(myJSON);
        // generateMap(data);
      })
    }
    useEffect(() => {
      getData()
    },[])

    // console.log(data);
  return (
    <div>
        <h2 id="thisEvent">Apartment Details</h2>
        <CTable align="middle" className="mb-0 border" hover responsive bordered>
          <CTableHead >
            <CTableRow>
              <CTableHeaderCell className="text-center">Apartment #</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Block #</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Room Count</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Furniture status</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Occupancy</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data && <Apt Data ={data}/>}
          </CTableBody>
        </CTable>
    </div>
  )
}

export default viewApartments;
