import {
    CTableDataCell,
    CTableRow,
    CDropdown,
    CDropdownItem,
    CDropdownDivider,
    CDropdownMenu,
    CButton,
    CDropdownToggle
  } from '@coreui/react'
function AT(props) {
    return <>
    {JSON.parse(props.tData).map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <p>{item.Fname}</p>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Lname}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Email}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Dob}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div><CButton color="success">Accept</CButton>
<CButton color="danger">Reject</CButton></div>
          </CTableDataCell>
          
        </CTableRow>
      ))}
    </>
}

export default AT;