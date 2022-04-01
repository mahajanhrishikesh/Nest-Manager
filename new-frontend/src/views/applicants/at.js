import { React, useState } from 'react'


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
    // const [decision, setDecision] = useState();
    
    function handleSubmit(decision) {
        let info = null
        
        let accepted = parseInt(decision.charAt(decision.length - 1));
        let email = decision.substring(0, decision.length - 1);
        info = {accepted, email};
        
        fetch('http://localhost:8080/setDecision', {
          method:'POST',
          mode: 'no-cors',
          headers: {'Content-Type': 'application/json',
          'cache-control': 'no-cache',
          'Access-Control-Request-Headers':'*',
          'Access-Control-Request-Method':'*' },
          body: JSON.stringify(info)
        }).then(() => {
          console.log(info);
        })
      }
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
            <div><CButton color="success" value={item.Email + '1'}
             onClick = {(e) => {
                        handleSubmit(e.target.value)
                    }
                        
                        } >Accept</CButton>
<CButton color="danger" value={item.Email + '0'}   
             onClick = {(e) => {
                        handleSubmit(e.target.value)
                    }
                        
                        }> Reject</CButton></div>
          </CTableDataCell>
         
        </CTableRow>
      ))}
    </>
}

export default AT;