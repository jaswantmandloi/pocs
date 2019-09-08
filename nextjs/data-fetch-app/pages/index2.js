import React, { useState } from 'react'
import Link from 'next/link'



function Index(props) {

  const [pageState, setPageState] = useState({})

  return (
    <div>

      <div>
        <Link href='/'>
          <a>Index</a>
        </Link>
      </div>


     
    </div>
  )
}

Index.getInitialProps = async () => {
  return {index2: 'index2'}
}

export default Index
