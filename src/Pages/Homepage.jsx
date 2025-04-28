
import React from 'react'
import Table from '../Components/Table'
import List from '../Components/List'
import EcommerceMetrics from '../Components/EcommerceMetrics'
import MonthlySalesChart from '../Components/MonthlySalesChart'
import MonthlyTarget from '../Components/MonthlyTarget'
import StatisticsChart from '../Components/StatisticsChart'

const Homepage = () => {
  return (
    <div className='bg-base-200'>

        <div className='flex lg:flex-row flex-col justify-between'>
            <Table></Table>
            <List></List>
        </div>

        <EcommerceMetrics></EcommerceMetrics>
        <MonthlySalesChart></MonthlySalesChart>
        <MonthlyTarget></MonthlyTarget>
        <StatisticsChart></StatisticsChart>
        
    </div>
  )
}

export default Homepage