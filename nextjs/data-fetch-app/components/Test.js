import React, {useContext, useState} from 'react'
import {HeaderContext} from '../apis/contexts';
import Child1 from './Child1';
import Child2 from './Child2';


function Index (props) {

  const {onSubmit, message} = useContext(HeaderContext);
  const [child1, setChild1] = useState('child1')
  const [child2, setChild2] = useState('child2')

  

  
  
  return (
    <div>
     {message && <p>{message}</p>}
      
      <form onSubmit={onSubmit}>
      <input type="text" name="" />

      <button>
        Send
      </button>

      </form>


      <Child1  text={child1} />
      <Child2  text={child2} />

      <div>
        <button onClick={() => { setChild1(new Date().getTime())  }} >
        Update child 1
        </button>
      </div>

      <div>
        <button onClick={() => { setChild2(new Date().getTime())  }} >
        Update child 2
        </button>
      </div>

    </div>
  )
}


export default Index
