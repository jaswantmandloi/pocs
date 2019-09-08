import React, { useState } from 'react'

import Link from 'next/link'


function Index(props) {

  const [pageState, setPageState] = useState({})

  

  return (
    <div>


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
