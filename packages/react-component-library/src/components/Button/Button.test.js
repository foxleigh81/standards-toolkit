import React from 'react'
import { shallow } from 'enzyme'

import Button from './index'

describe('Button', () => {
  describe('Given a button is created with a listener for onClick', () => {
    let component
    let onClick

    beforeEach(() => {
      onClick = jest.fn()
      component = shallow(<Button onClick={onClick}>Hello World</Button>)
    })

    describe('and a user clicks on the button', () => {
      let event

      beforeEach(() => {
        event = {
          currentTarget: {
            blur: jest.fn(),
          },
        }

        component.simulate('click', event)
      })

      it('should call the handler when the button is clicked', () => {
        expect(onClick).toBeCalled()
      })

      it('should blur the button so it does not remain active', () => {
        expect(event.currentTarget.blur).toBeCalled()
      })
    })
  })
})
