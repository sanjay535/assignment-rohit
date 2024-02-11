import React from 'react'
import DashboardSummary from './DashboardSummary'
import TransactionContainer from './TransactionContainer'

const Dashboard:React.FC = () => {
  return (
    <div>
        <DashboardSummary/>
        <TransactionContainer/>
    </div>
  )
}

export default Dashboard