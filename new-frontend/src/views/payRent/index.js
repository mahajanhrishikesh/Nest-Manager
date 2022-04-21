import React, { lazy, useState, useRef, useEffect} from 'react'

import {
    CContainer ,
    CCallout,
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
    CBadge,

  } from '@coreui/react'


const payRent = (props) => {

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
    const [curr_dues, setCurrDues] = useState([]);
    const getData = (email) => {
      console.log(email); 

    fetch("http://localhost:8080/api/getDues", {
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
        setCurrDues(getTotalDues(JSON.stringify(myJSON)));
    })
    }
    
    useEffect(() => {
      getUser()
    },[])

    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const confirmationToast = (
        <CToast color="success" className="text-white align-items-center">
            <div className="d-flex">
                <CToastBody>Rent Payment Successful!</CToastBody>
                <CToastClose className="me-2 m-auto" white />
            </div>
        </CToast>
    )

    function getTotalDues(data)
    {
      var curr_dues = [];
      var data = JSON.parse(data)
      for (var i in data)
      {
        curr_dues.push(data[i].Amount)
      }
      // console.log(curr_dues);
      curr_dues = curr_dues.sort();
      return curr_dues
    }

    function padTo2Digits(num) {
      return num.toString().padStart(2, '0');
    }
    
    function formatDate(date) {
      return [
        padTo2Digits(date.getDate()),
        padTo2Digits(date.getMonth() + 1),
        date.getFullYear(),
      ].join('-');
    }

    const clearDues = () =>
    {
      var x = new Date();
      var paid_on = formatDate(x);
      const info = {email, paid_on}

      fetch('http://localhost:8080/api/updateRent', {
        headers: {'Content-Type': 'application/json'},
          method:'POST',
          body: JSON.stringify(info)
      }).then(() => {
          console.log(info);
      })

      //Raising toast
      addToast(confirmationToast)

    }
  return (
    <div>
      
      <CCard className='col-md-4 align-items-center text-center shadow'>
        <CCardTitle><h5 className='display-6'>Balance Due</h5></CCardTitle>
        <CCardBody>
          <CContainer>
            <CRow>
              <CCol sm="auto">
              <CCallout color="primary">
                  <h5>Rent 
                    <CBadge className='mx-1' color='primary'>
                    {curr_dues.length > 0 ? curr_dues[1] : '0.00'}
                    </CBadge></h5>
                </CCallout>
            </CCol>
              <CCol sm="auto">
                <CCallout color="secondary">
                  <h5>Utility 
                    <CBadge className='mx-1' color='secondary'>
                      {curr_dues.length > 0 ? curr_dues[0] : '0.00'}
                    </CBadge></h5>
                </CCallout>
              </CCol>
            </CRow>
            <CRow>
            <CCallout color="dark">
                  <h5>Total 
                    <CBadge className='mx-1' color='dark'>
                      {curr_dues.length > 0 ? curr_dues[0]+curr_dues[1] : '0.00'}
                    </CBadge></h5>
                </CCallout>
            </CRow>
            <CRow>
              <CButton color='dark' onClick={clearDues}>Pay Rent</CButton>
              <CToaster ref={toaster} push={toast} placement="top-end" />
            </CRow>
          </CContainer>
        </CCardBody>
      </CCard>
        
    </div>
  )
}

export default payRent;
