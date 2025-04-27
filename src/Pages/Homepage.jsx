
import React from 'react'
import Table from '../Components/Table'
import List from '../Components/List'

const Homepage = () => {
  return (
    <div className='bg-base-200'>

        <div className='flex lg:flex-row flex-col justify-between'>
            <Table></Table>
            <List></List>
        </div>
        
    </div>
  )
}

export default Homepage