
import {createStore} from 'redux'

let reducer = function(state, action){
    if(state == null){
		state = {
			addr: '深圳',	
		};
    }
    if(action.type === 'changeaddr'){
		state.addr = action.val;
	} 
    
    return state;
}

export default createStore(reducer);