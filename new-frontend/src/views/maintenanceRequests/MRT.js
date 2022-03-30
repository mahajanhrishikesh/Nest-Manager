import {
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
        </CTableRow>
      ))}
  </>
}

export default MRT;