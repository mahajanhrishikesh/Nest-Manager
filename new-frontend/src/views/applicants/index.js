import React, { lazy, useState, useEffect } from 'react'
import AT from './at';
import {
    CTable,
    CTableBody,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
  } from '@coreui/react'
  

const applicants = (props) => {

  const [data, setData] = useState(null);
  
  const getData = () => {

    fetch("http://localhost:8080/api/applicants").then(function (response) {
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
        <h2>Applicants</h2>
        
      
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead color="light">
          <CTableRow>
            <CTableHeaderCell className='text-center'>First Name</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Last Name</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Email</CTableHeaderCell>
            <CTableHeaderCell className="text-center">DOB</CTableHeaderCell>
            <CTableHeaderCell className="text-center">Accept/Reject</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {data && <AT tData ={data}/>}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default applicants;
