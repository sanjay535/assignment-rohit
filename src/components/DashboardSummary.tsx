import React from 'react'
import DashboardAnalyticsCard from './DashboardAnalyticsCard'

const DashboardSummary:React.FC<{
  income:number,
  expenses:number,
  transactionCount:number,
  saving:number
}> = ({
  income,
  expenses,
  transactionCount,
  saving
}) => {
  return (
    <div className='max-w-[90%] grid sm:grid-cols-1 mx-auto md:grid-cols-2 lg:grid-cols-4'>
        <DashboardAnalyticsCard color='info' title='Total Income' text={income.toFixed(2)}/>
        <DashboardAnalyticsCard color='primary' title='Total Expenses' text={expenses.toFixed(2)}/>
        <DashboardAnalyticsCard color='secondary' title='Total Transactions' text={transactionCount.toFixed(0)}/>
        <DashboardAnalyticsCard color='red' title='Saving' text={saving.toFixed(2)}/>
    </div>
  )
}

export default DashboardSummary