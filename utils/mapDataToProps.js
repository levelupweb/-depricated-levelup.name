export default function mapDataToState(data) {
	if(data != null) {
		for(var name in data) {
			this.setState({
				[name]: data[name]
			})
		}
   }
}