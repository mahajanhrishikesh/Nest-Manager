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
  const [maintenanceData, setMaintenanceData] = useState(null);
  
  const getData = () => {

    fetch("http://localhost:8080/api/maintenance-request").then(function (response) {
      console.log(response);
      return response.json();
    }).then(function(myJSON){
      console.log(myJSON);
      setData(JSON.stringify(myJSON));
    })
  }

  const getMaintenance = () => {
    fetch("http://localhost:8080/api/get-maintenance-personnel").then(function (response) {
      console.log(response);
      return response.json();
    }).then(function(myJSON){
      console.log(myJSON);
      setMaintenanceData(JSON.stringify(myJSON));
    })
  }
  useEffect(() => {
    getData()
    getMaintenance()
  },[])

  return (
    <div>
        <h2>Maintenance Requests</h2>
        
      
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell className="text-center">MR ID</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Created On</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Description</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Facility</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Issue Tag</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Assign Personnel</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Assigned Personnel </CTableHeaderCell>
            <CTableHeaderCell className="text-center">Requested User</CTableHeaderCell>

          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data && maintenanceData && <MRT tData ={data} mData = {maintenanceData}/>}

        </CTableBody>
      </CTable>
    </div>
  )
}

export default maintenanceRequest;
