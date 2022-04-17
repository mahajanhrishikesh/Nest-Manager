import React, { lazy, useState, useEffect } from 'react';
import Facility from './components/Facility';
import {
    CCardImage,
    CCardTitle,
    CCardText,
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
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
  } from '@coreui/react'

  import { CChartLine } from '@coreui/react-chartjs'
  import { getStyle, hexToRgba } from '@coreui/utils'
  import CIcon from '@coreui/icons-react'
  import {
    cibCcAmex,
    cibCcApplePay,
    cibCcMastercard,
    cibCcPaypal,
    cibCcStripe,
    cibCcVisa,
    cibGoogle,
    cibFacebook,
    cibLinkedin,
    cifBr,
    cifEs,
    cifFr,
    cifIn,
    cifPl,
    cifUs,
    cibTwitter,
    cilCloudDownload,
    cilPeople,
    cilUser,
    cilUserFemale,
  } from '@coreui/icons'


const facilities = (props) => {
  const [visible, setVisible] = useState(false);
  const [data, setData] = useState(null);
  // let facilitiesMap = {};
    const getData = () => {
  
      fetch("http://localhost:8080/maintenanceRequests").then(function (response) {
        console.log(response);
        return response.json();
      }).then(function(myJSON){
        console.log(myJSON);
        setData(myJSON);
        // generateMap(data);
      })
    }
    useEffect(() => {
      getData()
    },[])

  // let condition = "mb-1 list-group-item list-group-item-success rounded";
  return (
    <div>
        <h2 id="thisFac">Facilities</h2>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
            {data && <Facility cardName="Pool" condition="success" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Post Boxes" condition="success" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Gym Equipment" condition="warning" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Club House" condition="warning" data ={data}/>}
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
            {data && <Facility cardName="Vending Machine" condition="warning" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Basketball Court" condition="success" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Street Lights" condition="danger" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Garbage" condition="success" data ={data}/>}
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
            {data && <Facility cardName="Internet" condition="warning" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Water" condition="success" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Electricity" condition="success" data ={data}/>}
          </CCol>
          <CCol xs>
            {data && <Facility cardName="Sit-out" condition="warning" data ={data}/>}
          </CCol>
        </CRow>
        <CRow xs={{ cols: 1, gutter: 4 }} md={{ cols: 4 }} className="my-auto">
          <CCol xs>
            {data && <Facility cardName="Barbeque Deck" condition="danger" data ={data}/>}
          </CCol>
        </CRow>
        
    </div>
  )
}

export default facilities;
