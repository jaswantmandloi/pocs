import React, {useState, useMemo} from 'react'

function Child1 (props) {

  const [state, setState] = useState(0)
  const {useMemoDeps} = props

  console.log('Chidl1 reder happens', props)

  const test123 = useMemo(() => {
    console.log('running useMemo child1')
    return `child1 from useMemo in child1`
  }, [ useMemoDeps])
  
  return (
    <div>
     {props.text}

      {state}

      {`useMemoDemo child1: ${test123}`}

     <div>
        <button onClick={() => { setState(new Date().getTime())  }} >
        Update child 1 Internal state
        </button>
      </div>

    </div>
  )
}


export default Child1
