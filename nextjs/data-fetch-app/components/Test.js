import React, { useContext, useState, useMemo } from 'react'
import { HeaderContext } from '../apis/contexts';
import Child1 from './Child1';
import Child2 from './Child2';

let useMemoDeps = { test: new Date().getTime() }

function Index(props) {

  //x === y && (x !== 0 || 1 / x === 1 / y) || x !== x && y !== y

  console.log('sddffsd')

  const { onSubmit, message } = useContext(HeaderContext);
  const [child1, setChild1] = useState('child1')
  const [child2, setChild2] = useState('child2')
  const [child1UseMemo, setChild1UseMemo] = useState({
    test1: {
      test2: {
        test3: "setChild1UseMemo"
      }
    }
  })

  const test123 = useMemo(() => {
    console.log('running useMemo', child2)
    return `${child2} from useMemo`
  }, [child2, useMemoDeps])



  return (
    <div>

      {`useMemoDemo: ${test123}`}

      {message && <p>{message}</p>}

      <form onSubmit={onSubmit}>
        <input type="text" name="" />

        <button>
          Send
      </button>

      </form>

      <div>
        <button onClick={() => {

          // useMemoDeps.test = new Date().getTime()

          setChild1UseMemo({
            test1: {
              test2: {
                test3: new Date().getTime()
              }
            }
          })

        }} >
          Update useMemo Deps for child1
      </button>
      </div>


      <hr />


      <Child1 text={child1} useMemoDeps={child1UseMemo} />
      <hr />
      <Child2 text={child2} />
      <hr />
      <div>
        <button onClick={() => {

          // useMemoDeps.test = new Date().getTime()

          useMemoDeps = { test: new Date().getTime() }

        }} >
          Update useMemo Deps
        </button>
      </div>

      <div>
        <button onClick={() => { setChild1(new Date().getTime()) }} >
          Update child 1
        </button>
      </div>

      <div>
        <button onClick={() => { setChild2(new Date().getTime()) }} >
          Update child 2
        </button>
      </div>

    </div>
  )
}


export default Index
