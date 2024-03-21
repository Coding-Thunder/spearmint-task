import React from 'react'
import { Props } from './PageWrap.interface'

const PageWrap:React.FC<Props> = ({component:Component}) => {
  return (
    <div className='desktop:laptop:w-2/3 mt-6 shadow-xl rounded-md p-4 bg-spaceBlue text-white'>
        <Component/>
    </div>
  )
}

export default PageWrap
