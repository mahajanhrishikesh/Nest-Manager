import React, { lazy, useState, useEffect } from 'react'
import MRT from './MRT';
import {
    CTable,
    CTableBody,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  

const assignedMR = (props) => {

    const [name, setName] = useState('');
    const [type, setType] = useState('');
    const [email, setEmail] = useState('');
    var content = null;
  
    const getUser = () => {
        (
            async () => {
                const response = await fetch('http://localhost:8080/api/user', {
                    headers: {'Content-Type':'application/json'},
                    credentials:'include'
                });
                content = await response.json();
                setName(content.name);
                setType(content.type);
                setEmail(content.email);
                getData(content.email);
            }
        )();
    };

    const [data, setData] = useState(null);
    const [maintenanceData, setMaintenanceData] = useState(null);

    const getData = (email) => {

    fetch("http://localhost:8080/api/assigned-maintenance-requests", {
        method:"POST",
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          email
        })
    }).then(function (response) {
        console.log(response)
        return response.json();
    }).then(function(myJSON){
        setData(JSON.stringify(myJSON));
    })
    }

  
  useEffect(() => {
    getUser()
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
            <CTableHeaderCell className="text-center">Requested User</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Action</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data && <MRT tData ={data}/>}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default assignedMR;
