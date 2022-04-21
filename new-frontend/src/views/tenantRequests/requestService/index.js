import React, { lazy, useState, useEffect, useRef} from 'react'

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

  } from '@coreui/react'


const requestService = (props) => {

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
  

  const [name, setName] = useState('');
  const [type, setType] = useState('');
  const [email, setEmail] = useState('');
  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8080/api/user', {
                  headers: {'Content-Type':'application/json'},
                  credentials:'include'
              });
              const content = await response.json();
              setName(content.name);
              setType(content.type);
              setEmail(content.email);
          }
      )();
  });

  const[fName, setFName] = useState('');
  const[issueDesc, setIssueDesc] = useState('');

  const handleSubmit = (e) => {
      e.preventDefault();
      var x = new Date();
      var created_on = formatDate(x);
      const info = {email, fName, issueDesc, created_on};

      fetch('http://localhost:8080/api/create-maintenance-request', {
        headers: {'Content-Type': 'application/json'},
          method:'POST',
          body: JSON.stringify(info)
      }).then(() => {
          console.log(info);
      })
  }

    // const [toast, addToast] = useState(0)
    // const toaster = useRef()
    // const confirmationToast = (
    //     <CToast color="success" className="text-white align-items-center">
    //         <div className="d-flex">
    //             <CToastBody>Apartment number {apt_no} added successfully!</CToastBody>
    //             <CToastClose className="me-2 m-auto" white />
    //         </div>
    //     </CToast>
    // )
    const [toast, addToast] = useState(0)
    const toaster = useRef()
    const confirmationToast = (
        <CToast color="success" className="text-white align-items-center">
            <div className="d-flex">
                <CToastBody>Maintenance request generated successfully!</CToastBody>
                <CToastClose className="me-2 m-auto" white />
            </div>
        </CToast>
    )
  return (
    <div>
        <h2>Request Service</h2>
        <CCard >
            <CCardBody>
                <CCardTitle>Fill maintenance request details</CCardTitle>
                    <CForm onSubmit={handleSubmit}>
                        <CRow xs={{gutter: 2}} className="mb-3">
                            <CCol md>
                                <CFormFloating >
                                    <CFormInput onChange={(e) => setIssueDesc(e.target.value)} type="text" id="issueDesc"/>
                                    <CFormLabel htmlFor="issueDesc">Issue Description</CFormLabel>
                                </CFormFloating>
                            </CCol>
                            <CCol md>
                            <CFormFloating>
                                <CFormSelect onChange={(e) => setFName(e.target.value)} id="furniture">
                                    <option>Select</option>
                                    <option value="Unit">Unit</option>
                                    <option value="Pool">Pool</option>
                                    <option value="PostBox">Postbox</option>
                                </CFormSelect>
                                <CFormLabel htmlFor="floatingSelectGrid">Facility Name</CFormLabel>
                            </CFormFloating>
                            </CCol>
                        </CRow>
                        <CButton type="submit" onClick={() => addToast(confirmationToast)}>Submit</CButton>
                        <CToaster ref={toaster} push={toast} placement="top-end" />
                    </CForm>
            </CCardBody>
        </CCard>
    </div>
  )
}

export default requestService;
