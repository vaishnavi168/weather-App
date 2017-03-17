var React= require('react');
var WeatherForm= React.createClass({
	onSubmitForm: function(e){
	e.preventDefault();
	var cityName= this.refs.cityName.value;
	if(cityName.length > 0)
	{
		this.refs.cityName.value='';
		this.props.onSearch(cityName);
	}
},

render: function(){
		return(
			<form onSubmit={this.onSubmitForm}>
			<input type="text" ref="cityName" placeholder="Enter City"/>
			<br/>
			<button className="button expanded">Get Weather</button>
			</form>
			);
	}
});
module.exports=WeatherForm;