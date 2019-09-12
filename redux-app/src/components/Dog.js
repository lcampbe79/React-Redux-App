import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import {getDog} from '../store/actions/index.js';

const Dog = ({getDog, message, status, error}) =>{
  useEffect(() => {
    getDog();
  },[getDog])
  
  if (status === 'Loading') {
    return(<div>Loading</div>)
  }
  //console.log(message)
  return(
    <div>
      <img src={message} alt='Doggo'/>
      <div>
        <button onClick={getDog}>Get new dog</button>
      </div>
    
    </div>
  )
}



const mapStateToProps = state => {
  return {
    message: state.message,
    status: state.status,
    error: state.error
  }
}


export default connect(mapStateToProps, {getDog})(Dog);