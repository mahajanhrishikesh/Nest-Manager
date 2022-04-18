import React, { lazy, useState, useEffect } from 'react'
import MRT from './MRT';
import {
    CTable,
    CTableBody,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  

const maintenanceRequest = (props) => {

  const [data, setData] = useState(null);
  
  const getData = () => {

    fetch("http://localhost:8080/maintenanceRequests").then(function (response) {
      console.log(response);
      return response.json();
    }).then(function(myJSON){
      console.log(myJSON);
      setData(JSON.stringify(myJSON));
    })
  }
  useEffect(() => {
    getData()
  },[])

  return (
    <div>
        <h2>Maintenance Requests</h2>
        
      
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell>MR ID</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Created On</CTableHeaderCell>
            <CTableHeaderCell>Description</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Facility</CTableHeaderCell>
            <CTableHeaderCell>Issue Tag</CTableHeaderCell>
            <CTableHeaderCell>Assign Personnel</CTableHeaderCell>
            <CTableHeaderCell>Assigned Personnel </CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data && <MRT tData ={data}/>}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default maintenanceRequest;
