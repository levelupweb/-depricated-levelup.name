import { 
	VIEW_POPULAR
} from './Tags.consts.js';

export const defaultState = {
	isHydrating: false,
	subscriptions: [],
	isLoaded: false,
  isFull: false,
  perPage: 3,
  view: VIEW_POPULAR,
	tags: [],
  page: 1
}

export const handleReceivedTags = (state, receivedTags) => ({
	...state,
	tags: receivedTags,
  isLoaded: true,
  isHydrating: false
})

export const handleReceivedUserTags = (state, receivedUserTags) => ({
	...state,
	subscriptions: receivedUserTags,
  isLoaded: true,
  isHydrating: false
})

export const handleReceivedTagsBySearch = (state, receivedTagsBySearch) => ({
	...state,
	tags: receivedTagsBySearch,
  isLoaded: true,
  isHydrating: false,
  isFull: true
})

export const handleLoadedState = (state) => ({
	...state,
	isLoaded: true,
	isHydrating: false
})

export const unHandleLoadedState = (state) => ({
	...state,
	isLoaded: false
})

export const handleConcatNewTags = (state, tags) => ({
	...state,
	isLoaded: true,
	page: state.page + 1,
	tags: state.tags.concat(tags),
	isHydrating: false
})

export const handleFulfilled = (state) => ({
	...state,
	isFull: true,
	isHydrating: false
})

export const handleUnFulfilled = (state) => ({
	...state,
	isFull: false,
	isHydrating: false
})

export const handleView = (state, view) => ({
	...state,
	view
})