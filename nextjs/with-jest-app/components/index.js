import React, { useEffect, useState, useLayoutEffect } from 'react'

// const proms = () => {
//   return new Promise((resolve) => {
//     resolve(true)
//   })
// }

const deferSetIt = (setShowFn) => {

  // setTimeout(() => {
  //   setShowFn(true)
  // }, 500)

  setShowFn(true)
}

// const proms = () => {
//   return true
// }

const Test = () => {

  const [show, setShow] = useState(false)

  // useEffect( () => {
  //   console.log('useLayoutEffect')
  //   setShow(true)
  // }, [])

  const setShowFn = (state) => {
    setShow(state)
  }

  useEffect( () => {
    console.log('useLayoutEffect')

    // async function deferSetIt() {
    //   const watingState = await proms()
    //   setShow(watingState)
    // }

    deferSetIt(setShowFn)
    
  }, [])

  console.log("show123", show)

  return <>
    {show && <span>test show</span>}
    <div>
      Testing
  </div></>
}

export default Test