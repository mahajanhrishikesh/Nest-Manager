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

        fetch("http://localhost:8080/getAllApartments").then(function (response) {
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
            {data && <LeaseModal data={data} email={item.Email}/>}
          </CTableDataCell>
         
        </CTableRow>
      ))}
    </>
}

export default AT;