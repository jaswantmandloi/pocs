import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'


const countSelector = state => state.count

function Test1 () {
  
  const count = useSelector(countSelector)

  console.log('Rendering : Test1')
  //alert('sddfsd')

  return (
    <div>
     Component test1
    </div>
  )
}

export default Test1
