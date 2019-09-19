import React, {useState} from 'react'

function Child1 (props) {

  const [state, setState] = useState(0)

  console.log('Chidl1 reder happens', props)
  
  return (
    <div>
     {props.text}

      {state}

     <div>
        <button onClick={() => { setState(new Date().getTime())  }} >
        Update child 1 Internal state
        </button>
      </div>

    </div>
  )
}


export default Child1
