/* eslint-env jest */

//import { mount } from 'enzyme'
import React, {useState} from 'react'
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer'

import { act } from 'react-dom/test-utils';


import { configure, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })

let container;

container = document.createElement('div');

// jest.mock('react/hooks/useLayoutEffect', () => {
  
// console.log('react lall')

// });

// jest.mock('react')
// React.useState.mockImplementation(initialState => {
//   let [state, setState] = React.useState(true);
//   return [
//     state,
//     update => {
//       require("react-test-renderer").act(() => {
//         setState(update);
//       });
//     }
//   ];
// })

// jest.mock('react', () => {
//   return {
//     //...React,
//     useState: initialState => {
//       let [state, setState] = [true, () => {}]
//       return [
//         state,
//         update => {
//           require("react-test-renderer").act(() => {
//             setState(update);
//           });
//         }
//       ];
//     },
//   }
// })



import Test from '../components/index'


describe('With Enzyme', () => {
  it('Use Effect testing', () => {

    const app = mount(<Test />)
      //app.update()
    console.log("html", app.debug())
    expect(app.find('div').text()).toEqual('Testing')

    
  })
})



// describe('With Enzyme', () => {
//   it('Use Effect testing', async () => {


//     await act( async () => {
      

//       const app = mount(<Test />).update()
//       app.update()
//     console.log("html", app.debug())
//     expect(app.find('div').text()).toEqual('Testing')


//     // await ReactDOM.render(<Test />, container);
//     // console.log("container", container.innerHTML)  
    
    

//     });

    
//   })
// })



// describe('With Snapshot Testing', () => {
//   it('App shows "Hello world!"', () => {
//     const component = renderer.create(<App />)
//     const tree = component.toJSON()
//     expect(tree).toMatchSnapshot()
//   })
// })
