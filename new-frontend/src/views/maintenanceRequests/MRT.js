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
  const [personnel, setPersonnel] = useState(null)
  const assignPersonnel = () =>{
      console.log(personnel)
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
            <div>{item.Assigned_personnel} </div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.U_email} </div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>
            <CFormSelect onChange={(e) => setPersonnel(e.target.value)}>
            <option> Select</option>
              {JSON.parse(props.mData).map((item2, idx) => (
              <option value={item2.email}>{item2.name}</option>
              ))}
            </CFormSelect>
            </div>
          </CTableDataCell>
          <CTableDataCell>
            <div><CButton> Assign</CButton> </div>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
}

export default MRT;