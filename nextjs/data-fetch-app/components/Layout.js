import React from 'react'
import Test from './Test'

function Layout (props) {
  return (
    <div>
     <header>
      Header Content
     </header>

      <main>
        {props.children}
      </main>

      <footer>Footer content</footer>

    </div>
  )
}


export default Layout
