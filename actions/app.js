import axios from 'axios'
import config from '../app.config.js'

export function setQuery(builder, query) {
    return (dispatch) => {
        dispatch({type: 'SET_PAGE_QUERY', payload: query});
        dispatch({type: 'SET_PAGE_BUILDER', payload: builder})
	}
}

export function setPageData(data) {
    return (dispatch) => {
        dispatch({type: 'SET_PAGE_DATA', payload: data});
	}
}

export function setPageSettings(data) {
    return (dispatch) => {
        dispatch({type: 'SET_PAGE_SETTINGS', payload: data});
	}
}

export function setAccessError() {
    return (dispatch) => {
        dispatch({type: 'SET_APP_ACCESSABILITY', payload: false});
	}
}

export function getPageBySlug(slug) {
	return axios.get(config.API + 'page/entries/' + slug)	
}

export function makeSearch(query) {
    return axios.get(config.API + 'search/entries/' + query)   
}
