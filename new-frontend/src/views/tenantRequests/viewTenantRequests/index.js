import React, { lazy, useState, useEffect, useRef} from 'react'
import Tmrt from './Tmrt';

import {
    CButton,
    CCard,
    CCardTitle,
    CCardBody,
    CCol,
    CFormFloating,
    CFormInput,
    CFormLabel,
    CFormSelect,
    CRow,
    CForm,
    CToast,
    CToaster,
    CToastBody,
    CToastClose,
    CTable,
    CTableHead,
    CTableBody,
    CTableRow,
    CTableHeaderCell,

  } from '@coreui/react'


const viewTenantRequests = (props) => {

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
                setEmail(content.email);
                getData(content.email);
            }
        )();
    };

    const [data, setData] = useState(null);
    const [maintenanceData, setMaintenanceData] = useState(null);

    const getData = (email) => {
      console.log(email); 

    fetch("http://localhost:8080/api/tenant-maintenance-requests", {
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
        <h2>Maintenance Request History</h2>\
        <CTable align="middle" className="mb-0 border" hover responsive bordered>
          <CTableHead >
            <CTableRow>
              <CTableHeaderCell className="text-center">Maint. Req. #</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Block #</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Room Count</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Furniture status</CTableHeaderCell>
              <CTableHeaderCell className="text-center">Occupancy</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {data && <Tmrt Data ={data}/>}
          </CTableBody>
        </CTable>
        {data}
    </div>
  )
}

export default viewTenantRequests;
