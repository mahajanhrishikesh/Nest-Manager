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
function ALT(props) {
    return <>
    {JSON.parse(props.Data).map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <p>{item.Email}</p>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Building_No}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Unit_No}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Room}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.From_Date}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.To_Date}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Rent}</div>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
}

export default ALT;