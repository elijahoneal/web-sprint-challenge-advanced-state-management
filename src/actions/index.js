import axios from 'axios';
export const START_FETCH = 'START_FETCH'
export const FETCH_SUCCESS = 'FETCH_SUCCESS'
export const FETCH_ERROR = 'FETCH_ERROR'
export const ADD_SMURF = 'ADD_SMURF'
export const ERROR_MESSAGE = 'ERROR_MESSAGE'
//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.

export const fetchSmurfs = () => (dispatch) => {
    dispatch({type: START_FETCH})

    axios.get('http://localhost:3333/smurfs')
    .then( res  => {
        console.log(res)
        dispatch({
            type: FETCH_SUCCESS,
            payload: {
                smurfs: res.data
            }
        })
    })
    .catch( err => {
        console.log(err)
        dispatch({
            type: FETCH_ERROR,
            payload: err.message
        })
    })

}

export const addSmurf = (newSmurf) => {
    return (dispatch) => {
        dispatch({
            type: ADD_SMURF,
            payload: {
               smurfs: newSmurf
            }
        })
    }
}

export const setError = (message) => {
    return (dispatch) => {
        dispatch({
            type: ERROR_MESSAGE,
            payload: {
                errorMessage: message
            }
        })
    }
}