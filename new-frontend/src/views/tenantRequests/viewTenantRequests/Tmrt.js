import React from 'react'
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


const Tmrt = (props) => {
  return (
    <>
    {JSON.parse(props.Data).map((item,index) => (
            <CTableRow key={index}>
                <CTableDataCell className="text-center">{item.Mr_no}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Created_on}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Issue_description}</CTableDataCell>
                <CTableDataCell className="text-center">{item.Facility}</CTableDataCell>
            </CTableRow>

        ))}
    </>
  )
}

export default Tmrt