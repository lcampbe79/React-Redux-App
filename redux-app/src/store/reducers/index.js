import {FETCHING_MESSAGE_START, FETCHING_MESSAGE_SUCCESS, FETCHING_MESSAGE_FAILURE} from '../actions/index'
const initialState = {
  message: '',
  status: '',
  error: ''
}

export const reducer = (state = initialState, action) => {
  // console.log('reducer', action)
  switch(action.type) {
    case FETCHING_MESSAGE_START:
      return{
        ...state,
        message: '',
        status: 'Loading',
        error: ''
      }
    case FETCHING_MESSAGE_SUCCESS:
      return{
        ...state,
        message: action.payload,
        status: '',
        error: ''
      }
    case FETCHING_MESSAGE_FAILURE:
      return{
        ...state,
        message: '',
        status: '',
        error: action.payload
        
      }
    default:
      return state;
  }
}