import { SIGN_IN, SIGN_OUT, FETCH_TILE_ACTIVITY, ADD_TILE_NOTE, ADD_POSITION_NOTE, DELETE_NOTE, FETCH_STATE, NEW_ACTIVITY } from './types';

const BASE_URL = '../api/v1/';


export const fetchTileActivity = () => {
    console.log("hello from fetchTileActivity")
    return {
        type: FETCH_TILE_ACTIVITY
    };
};

export const addTileNote = (id, type, value) => {
    return {
        type: ADD_TILE_NOTE,
        payload: {id, type, value}
    }
}

export const addPositionNote = (position, note) => {
    return {
        type: ADD_POSITION_NOTE,
        payload: {position, note}
    }
}

export const deleteNote = (id, type, text) => {
    return {
        type: DELETE_NOTE,
        payload: {id, type, text}
    }
}

export const fetchState = () => {
    return {
        type: FETCH_STATE
    }
}

export const signIn = (userId) => {
    return {
      type: SIGN_IN,
      payload: userId
    };
  };
  
  export const signOut = () => {
    return {
      type: SIGN_OUT
    };
  };

  export const newActivity = (question, highlabel, lowlabel, id_user) => {
    const url = `${BASE_URL}groups`;
    const body = { question, highlabel, lowlabel, id_user }; // ES6 destructuring
    const csrfToken = document.querySelector('meta[name="csrf-token"]').attributes.content.value;
    const promise1 = fetch(url, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'X-CSRF-Token': csrfToken
      },
      credentials: 'same-origin',
      body: JSON.stringify(body)
    }).then(r => r.json());
  
    return {
      type: NEW_ACTIVITY,
      payload: promise1 // Will be resolved by redux-promise
    };
  }