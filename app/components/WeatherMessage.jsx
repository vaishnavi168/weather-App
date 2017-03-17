var React= require('react');

var WeatherMessage= React.createClass({
	render: function(){
		var {cityName,temp}=this.props;
		return(
			<div>
				<h3 className="text-centerd">It is {temp}°C temparature in {cityName}</h3>
				
			</div>
			);
	}
});
module.exports= WeatherMessage;