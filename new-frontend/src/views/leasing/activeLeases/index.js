import { React, useState, useEffect } from 'react'
import ALT from './alt';
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

const activeLeases = (props) => {
  const [data, setData] = useState(null);
    const getData = () => {
  
      fetch("http://localhost:8080/api/leases").then(function (response) {
        console.log(response);
        return response.json();
      }).then(function(myJSON){
        console.log(myJSON);
        setData(JSON.stringify(myJSON));
        // generateMap(data);
      })
    }
    useEffect(() => {
      getData()
    },[])

    // console.log(data);
  return (
    <div>
        <h2 id="thisEvent">Active Leases</h2>
        <CTable align="middle" className="mb-0 border" hover responsive bordered>
          <CTableHead >
            <CTableRow>
              <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Building No</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Unit No</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Room</CTableHeaderCell>
              <CTableHeaderCell className="text-center">From Date</CTableHeaderCell>
              <CTableHeaderCell className="text-center">To Date</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Rent</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data && <ALT Data ={data}/>}
          </CTableBody>
        </CTable>
    </div>
  )
}

export default activeLeases;
