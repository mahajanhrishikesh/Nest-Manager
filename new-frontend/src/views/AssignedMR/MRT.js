import {
    CTableDataCell,
    CTableRow,
    CDropdown,
    CDropdownItem,
    CDropdownDivider,
    CDropdownMenu,
    CButton,
    CDropdownToggle,
    CFormSelect,
  } from '@coreui/react'
import { useState } from 'react';
function MRT(props) {


  const handleSubmit = (mr_no) => {
    console.log(mr_no)
    fetch('http://localhost:8080/api/mad-maintenance-request', {
        
        method:'POST',
        headers: {'Content-Type':'application/json'},
        body: JSON.stringify({
          mr_no
        })
    });
  }
    return <>
    {JSON.parse(props.tData).map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <p>{item.Mr_no}</p>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Created_on}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Issue_description}</div>
          </CTableDataCell >
          <CTableDataCell className="text-center">
            <div>{item.Facility}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Issue_tag}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.U_email} </div>
          </CTableDataCell>
          <CTableDataCell>
          <CButton className='m-1' color="success" value={item.Mr_no}
             onClick = {(e) => {handleSubmit(parseInt(e.target.value))}} >Done</CButton>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
}

export default MRT;