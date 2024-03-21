import React from 'react'
import { Props } from './PageWrap.interface'

const PageWrap:React.FC<Props> = ({component:Component}) => {
  return (
    <div className='mt-6 shadow-md rounded-md p-4 bg-spaceBlue text-white'>
        <Component/>
    </div>
  )
}

export default PageWrap
