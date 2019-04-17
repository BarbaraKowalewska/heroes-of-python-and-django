import * as actionTypes from './actionTypes';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = token => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        token: token
    }
};

export const authFail = error => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error
    }
};

export const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    return {
        type: actionTypes.AUTH_LOGOUT
    }
};

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
};

export const authLogin = (email, password, closeModal) => {
    return dispatch => {
        dispatch(authStart());
        (async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_LOGIN, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(
                            {
                                email: email,
                                password: password
                            })
                    }
                );
                if (response.ok) {
                    const content = await response.json();
                    const token = await content.key;
                    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expirationDate', expirationDate);
                    dispatch(authSuccess(token));
                    dispatch(checkAuthTimeout(3600));
                    closeModal();
                } else {
                    const content = await response.json();
                    dispatch(authFail(content.non_field_errors))
                }
            } catch (err) {
                dispatch(authFail(err.message))
            }
        })();
    }
};

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        if (token === undefined) {
            dispatch(logout());
        } else {
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if (expirationDate <= new Date()) {
                dispatch(logout());
            } else {
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout((expirationDate.getTime() - new Date().getTime()) / 1000))
            }
        }
    }
}

export const authRegister = (username, email, password1, password2) => {
    return dispatch => {
        dispatch(authStart());
        (async () => {
            try {
                const response = await fetch(process.env.REACT_APP_API_REGISTER, {
                        method: 'POST',
                        headers: {
                            'Accept': 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(
                            {
                                username: username,
                                email: email,
                                password1: password1,
                                password2: password2
                            })
                    }
                );
                const content = await response.json();
                const token = content.data.key;
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                dispatch(authSuccess(token));
                dispatch(checkAuthTimeout(3600));
            } catch (err) {
                dispatch(authFail(err))
            }
        })();
    }
};