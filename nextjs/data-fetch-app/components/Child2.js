import React, {useState} from 'react'

function Child2(props) {

  const [state, setState] = useState(0)

  console.log('Chidl2 reder happens', props)

  return (
    <div>
      {props.text}
      {state}

      <div>
        <button onClick={() => { setState(new Date().getTime()) }} >
          Update child 2 Internal state
        </button>
      </div>

    </div>
  )
}


export default Child2
