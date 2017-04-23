export const startClock = (sec) => dispatch =>  {
	return setInterval(() => dispatch({ type: 'TICK', light: true, ts: Date.now(), seconds: sec++   }), 800)
}
