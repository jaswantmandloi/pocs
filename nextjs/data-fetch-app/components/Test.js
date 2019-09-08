import React, {useContext} from 'react'
import {HeaderContext} from '../apis/contexts';

function Index (props) {

  const {onSubmit, message} = useContext(HeaderContext)
  
  return (
    <div>
     {message && <p>{message}</p>}
      
      <form onSubmit={onSubmit}>
      <input type="text" name="" />

      <button>
        Send
      </button>

      </form>
    </div>
  )
}


export default Index
