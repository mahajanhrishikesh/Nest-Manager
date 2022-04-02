import React from 'react'

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

const Apt = (props) => {
  return <>
        {props.Data.map((item,index) => (
            <CTableRow key={index}>
                <CTableDataCell className="text-center">{item.Apt_No}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Block_No}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Room_Count}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Furniture_Status}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Occupancy}</CTableDataCell>
            </CTableRow>

        ))}
    </>

}

export default Apt