import React from 'react'
import CIcon from '@coreui/icons-react'
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
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
    {
        component: CNavItem,
        name: 'Pay Rent',
        to: '/payrent',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Maintenance Request',
        to: '/makemaintenancerequest',
        icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    },
    {
        component: CNavItem,
        name: 'Overview',
        to: '/tenantOverview',
        icon: <CIcon icon={cilBowling} customClassName="nav-icon" />,
    },
]

export default _nav
