import React from 'react'

function LoadedOnDemand (props) {

  console.log('Lazy loading component', props)
  
  return (
    <div>
     on demand loading {props.text}
    </div>
  )
}


export default LoadedOnDemand
