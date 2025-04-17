import React from 'react'
import WorkspaceHeader from './_components/WorkspaceHeader'
import Sidebar from './_components/Sidebar'

function WorkspaceLayout({children}) {
  return (
      <div>
            <WorkspaceHeader />
            <div className='flex'>
                <Sidebar/>
                {children}
            </div> 
        </div>
  )
}

export default WorkspaceLayout

