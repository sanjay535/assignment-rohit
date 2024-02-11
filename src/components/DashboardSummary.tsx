import React from 'react'
import DashboardAnalyticsCard from './DashboardAnalyticsCard'

const DashboardSummary = () => {
  return (
    <div className='max-w-[90%] grid grid-cols-4 mx-auto'>
        <DashboardAnalyticsCard title='Total Income' text={45678}/>
        <DashboardAnalyticsCard title='Total Expenses' text={4537}/>
        <DashboardAnalyticsCard title='Total Transactions' text={783}/>
        <DashboardAnalyticsCard title='Difference' text={244}/>
    </div>
  )
}

export default DashboardSummary