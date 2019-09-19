import React, { useState } from 'react'
import Link from 'next/link'
import dynamic from 'next/dynamic'


const LoadedOnDemand  = dynamic(() => import('../components/LoadedOnDemand'))



function Index(props) {

  const [pageState, setPageState] = useState({})
  const [loadIt, setLoadIt] = useState(false)

  return (
    <div>

      <div>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>

      {loadIt &&  <LoadedOnDemand text={'passed props'} /> }

      <div>
        <button onClick={() => { setLoadIt(true)  }} >
        Load on demand
        </button>
      </div>
     
    </div>
  )
}

Index.getInitialProps = async () => {
  return {index2: 'index2'}
}

export default Index
