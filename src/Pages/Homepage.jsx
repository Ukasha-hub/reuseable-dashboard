
import React from 'react'
import Table from '../Components/Table'
import List from '../Components/List'
import EcommerceMetrics from '../Components/EcommerceMetrics'
import MonthlySalesChart from '../Components/MonthlySalesChart'
import MonthlyTarget from '../Components/MonthlyTarget'
import StatisticsChart from '../Components/StatisticsChart'

const Homepage = () => {
  return (
    <div className='flex flex-col gap-5 bg-base-300 p-5'>

        <div className='flex lg:flex-row flex-col justify-between gap-5'>
            <Table className="flex-3"></Table>
            <List className="flex-1"></List>
        </div>
        <div className='flex lg:flex-row flex-col   justify-between'>
          <EcommerceMetrics></EcommerceMetrics>
          <MonthlyTarget className=""></MonthlyTarget>
        </div>
        
        <MonthlySalesChart></MonthlySalesChart>
        
        <StatisticsChart></StatisticsChart>
        
    </div>
  )
}

export default Homepage