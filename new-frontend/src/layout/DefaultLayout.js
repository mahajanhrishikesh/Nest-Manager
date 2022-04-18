import React, {useState, useEffect} from 'react'
import { AppContent, AppSidebar, AppFooter, AppHeader } from '../components/index'

const DefaultLayout = () => {

  const [type, setType] = useState('');

  useEffect(() => {
      (
          async () => {
              const response = await fetch('http://localhost:8080/api/user', {
                  headers: {'Content-Type':'application/json'},
                  credentials:'include'
              });
              const content = await response.json();
              setType(content.type);
          }
      )();
  });

  return (
    <div>
      <AppSidebar type={type}/>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
          <AppContent />
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
