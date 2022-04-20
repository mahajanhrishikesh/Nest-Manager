import { React, useState, useEffect } from 'react'
import LeaseModal from './modal';


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
    const [data, setData] = useState(null);
  
    const getData = () => {

        fetch("http://localhost:8080/api/apartments").then(function (response) {
        console.log(response);
        return response.json();
        }).then(function(myJSON){
        console.log(myJSON);
        setData(JSON.stringify(myJSON));
        })
    }
    useEffect(() => {
        getData()
    },[])
    
    return <>
    {JSON.parse(props.tData).map((item, index) => (
        <CTableRow v-for="item in tableItems" key={index}>
          <CTableDataCell className="text-center">
            <div>{item.Fname}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Lname}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Email}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            <div>{item.Dob}</div>
          </CTableDataCell>
          <CTableDataCell className="text-center">
            {data && <LeaseModal data={data} email={item.Email}/>}
          </CTableDataCell>
        </CTableRow>
      ))}
    </>
}

export default AT;