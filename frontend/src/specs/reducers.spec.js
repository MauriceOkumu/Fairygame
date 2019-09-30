import { SET_CURRENT_USER, GET_ERRORS } from '../constants/action-types';
import Authreducer from '../reducers/authreducer';
import errorReducer from '../reducers/errorreducer';


describe('Auth reducer', () => {
    it('Returns an object', () => {
     const reducer = Authreducer({},{});
     expect(typeof reducer).toBe('object');
    })
    it('Return a new state when given an action type', () => {
      const newReducer = Authreducer({}, {
          type: SET_CURRENT_USER,
          payload: {name: "Maurice"}
      })

      expect(newReducer.isAuthenticated).toBe(true)
    })
})


describe('Auth reducer', () => {
    it('Returns an object', () => {
     const reducer = errorReducer({},{});
     expect(typeof reducer).toBe('object');
    })
    it('Return an empty object when there are no errors', () => {
        const errors = errorReducer({}, {
            type: GET_ERRORS,
            payload: {}
        })
        expect(Object.keys(errors).length).toBe(0)
      })
})