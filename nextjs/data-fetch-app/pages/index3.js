import React, { useState } from 'react'
import Link from 'next/link'
import Test from '../components/Test'



const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));




class Index3 extends React.Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();
  }

  static getInitialProps() {
    return {}
  }

  componentDidMount() {
    this.textInput.current;

    console.log('bbbbbbbb',this.textInput.current)
  }

  render() {

    return (
      <div>
  
        <div>
          <Link href='/'>
            <a>Index</a>
          </Link>
        </div>
  
        <div>
         {/* <Test ref={this.textInput} /> */}
         <FancyButton ref={this.textInput}>Click me!</FancyButton>
        </div>
       
      </div>
    )
  }
}



export default Index3
