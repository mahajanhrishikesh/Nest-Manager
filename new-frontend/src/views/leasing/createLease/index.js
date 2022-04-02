import React, { lazy, useState, useEffect } from 'react'
import AT from './aat';
import {
    CTable,
    CTableBody,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  

const createLease = (props) => {

  const [data, setData] = useState(null);
  
  const getData = () => {

    fetch("http://localhost:8080/getAcceptedApplicants").then(function (response) {
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
        <h2>Create Lease</h2>
        
      
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell className='text-center'>First Name</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Last Name</CTableHeaderCell>
            <CTableHeaderCell>Email</CTableHeaderCell>
            <CTableHeaderCell className="text-center">DOB</CTableHeaderCell>
            <CTableHeaderCell>Leasing</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data && <AT tData ={data}/>}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default createLease;
