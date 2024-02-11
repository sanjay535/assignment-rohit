'use client'
import React, { useState } from 'react'
import DashboardSummary from './DashboardSummary'
import TransactionTable from './TransactionTable';

const Dashboard:React.FC = () => {
  const [totalIncome, setTotalIncome]=useState<number>(0);
  const [totalExpenses, setTotalExpenses]=useState<number>(0);
  const [totalSaving, setTotalSaving]=useState<number>(0);
  const [totalTransaction, setTotalTransaction]=useState<number>(0);

  return (
    <div>
        <DashboardSummary
        income={totalIncome}
        expenses={totalExpenses}
        saving={totalSaving}
        transactionCount={totalTransaction}
        />
        <TransactionTable 
        setTotalIncome={setTotalIncome}
        setTotalExpenses={setTotalExpenses}
        setTotalSaving={setTotalSaving}
        setTotalTransaction={setTotalTransaction}
        />
    </div>
  )
}

export default Dashboard