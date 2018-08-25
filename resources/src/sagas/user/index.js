import { delay } from 'redux-saga';
import {
	put,
	all,
    select,
} from 'redux-saga/effects';

import * as action from '../../redux/actions';

function* setUsernameToLocalStorage({payload}) {
    localStorage.setItem('username', payload.username)
}
function* checkUserBeLogged({payload}) {
    const username = localStorage.getItem('username')
    if (username) {
        yield put(action.user.login({ username }))
    }
    
}

export {
    setUsernameToLocalStorage,
    checkUserBeLogged
}
