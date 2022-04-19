import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDrop,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilBowling,
  cilPaint,
  cilUserPlus,
  cilRoom,
  cilCasino,
  cilPen,
  cilBuilding,
  cilPlus,
  cilMinus,
} from '@coreui/icons'
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler, CImage, CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import CIcon from '@coreui/icons-react'

import { AppSidebarNav } from './AppSidebarNav'

import { logoNegative } from 'src/assets/brand/logo-negative'
import { sygnet } from 'src/assets/brand/sygnet'
import cover from 'src/assets/brand/cover.png';
import defLogo from 'src/assets/brand/default.svg';

import SimpleBar from 'simplebar-react'
import 'simplebar/dist/simplebar.min.css'

// sidebar nav config
import navigation from '../_nav';
//import navigation from '../_nav_tenant';

const AppSidebar = (props) => {
  const dispatch = useDispatch()
  const unfoldable = useSelector((state) => state.sidebarUnfoldable)
  const sidebarShow = useSelector((state) => state.sidebarShow)
  
  console.log(props.type)

  const tenantNav = [
      {
          component: CNavItem,
          name: 'Overview',
          to: '/tenantOverview',
          icon: <CIcon icon={cilBowling} customClassName="nav-icon" />,
      },
      {
        component: CNavGroup,
        name: 'Maintenance Requests',
        icon: <CIcon icon={cilBuilding} customClassName="nav-icon" />,
        items: [
          {
            component: CNavItem,
            name: 'Request Service',
            to: '/tenantRequests/requestService',
          },
          {
            component: CNavItem,
            name: 'View Your Requests',
            to: '/tenantRequests/viewTenantRequests',
          },
        ],
      },
      {
        component: CNavItem,
        name: 'Pay Rent',
        to: '/payRent',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
      },
      
  ]

  const maintenanceNav = [
    {
        component: CNavItem,
        name: 'Assigned MR',
        to: '/assignedMR',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Work Overview',
        to: '/workOverview',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
]

  if(props.type === "admin")
  {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CImage src='/cover.png' width={225} height={100}></CImage>
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={navigation} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebar>
    )
  }
  else if (props.type === "maintenance")
  {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CImage src='/cover.png' width={225} height={100}></CImage>
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={maintenanceNav} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebar>
    )
  }
  else if (props.type === "tenant")
  {
    return (
      <CSidebar
        position="fixed"
        unfoldable={unfoldable}
        visible={sidebarShow}
        onVisibleChange={(visible) => {
          dispatch({ type: 'set', sidebarShow: visible })
        }}
      >
        <CSidebarBrand className="d-none d-md-flex" to="/">
          <CImage src='/cover.png' width={225} height={100}></CImage>
          <CIcon className="sidebar-brand-narrow" icon={sygnet} height={35} />
        </CSidebarBrand>
        <CSidebarNav>
          <SimpleBar>
            <AppSidebarNav items={tenantNav} />
          </SimpleBar>
        </CSidebarNav>
        <CSidebarToggler
          className="d-none d-lg-flex"
          onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
        />
      </CSidebar>
    )
  }
  return (
    <>Invalid Credentials</>
  )
}

export default React.memo(AppSidebar)
