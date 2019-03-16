import React, {Component} from 'react'
import DateRangePicker from 'react-daterange-picker'
import 'react-daterange-picker/dist/css/react-calendar.css' 

class CalendarRange extends Component {
	handleSelect(ranges){
		console.log(ranges);
	}
	render(){
		const selectionRange = {
			startDate: new Date(),
			endDate: new Date(),
			key: 'selection',
		}
		return (
			<DateRangePicker
				ranges={[selectionRange]}
				onChange={this.handleSelect}
			/>
		)
	}
}

export default CalendarRange;