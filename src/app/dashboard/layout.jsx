import React from 'react'
import DashboardWrapper from "@/app/dashboard/dashboardWrapper"

const Layout = ({ children }) => {
  return (
    <div>
        <DashboardWrapper>
            {children}
        </DashboardWrapper>
    </div>
  )
}

export default Layout
