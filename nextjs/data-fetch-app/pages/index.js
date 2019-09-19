import React, { useState } from 'react'
import Link from 'next/link'

import Test from '../components/Test'


function Index(props) {

  const [pageState, setPageState] = useState({})

  

  return (
    <div>

      <div>
        <Test />
      </div>


      <div>
        <Link href='/index2'>
          <a>Index2</a>
        </Link>
      </div>

      



    </div>
  )
}

Index.getInitialProps = async () => {
  return {index: 'index'}
}

export default Index
