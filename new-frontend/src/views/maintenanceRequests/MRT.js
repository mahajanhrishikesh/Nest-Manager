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
function MRT(props) {
    return <>
    {JSON.parse(props.tData).map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <p>{item.Mr_no}</p>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Created_on}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Issue_description}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Facility}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>{item.Issue_tag}</div>
          </CTableDataCell>
          <CTableDataCell>
            <div>
            <CDropdown variant="btn-group">
                <CButton color="secondary" size="sm">
                  Assign
                </CButton>
                <CDropdownToggle color="secondary" size="sm" split />
                <CDropdownMenu>
                  <CDropdownItem>Action</CDropdownItem>
                  <CDropdownItem>Another action</CDropdownItem>
                  <CDropdownItem>Something else here</CDropdownItem>
                  <CDropdownDivider />
                  <CDropdownItem>Separated link</CDropdownItem>
                </CDropdownMenu>
              </CDropdown>
            </div>
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
}

export default MRT;