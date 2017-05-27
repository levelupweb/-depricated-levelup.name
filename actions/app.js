import axios from 'axios'
import config from '../app.config.js'

export function setQuery(builder, query) {
    return (dispatch) => {
        dispatch({type: 'SET_QUERY', payload: query});
        dispatch({type: 'SET_BUILDER', payload: builder})
	}
}

export function setPageData(data) {
    return (dispatch) => {
        dispatch({type: 'SET_DATA', payload: data});
	}
}

