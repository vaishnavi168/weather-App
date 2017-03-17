var React= require('react');
var WeatherForm=require('WeatherForm');
var WeatherMessage=require('WeatherMessage');
var OpenWeatherMap= require('OpenWeatherMap');
var ErrorModal = require('ErrorModal');
var About = require('About');
var Weather = React.createClass({
  getInitialState: function () {
    return {
        isLoading: false
    }
  },
  handleSearch: function (cityName) {
  	var that= this;
  	this.setState({
  		isLoading: true,
  		errorMessage:undefined,
  		cityName:undefined,
  		temp:undefined
  	});
  	OpenWeatherMap.getTemp(cityName).then(function (objData) {
  		that.setState({
  			cityName:objData.cityName,
  			temp:objData.temp,
  			isLoading: false
  		})

  	},function (e) {
  		that.setState({
  		isLoading: false,
  		errorMessage: e.message 
  		//it will recieve javascript message
  		});
  		//alert(errorMessage);
  	});
    // this.setState({
      // cityName: cityName,
      // temp: 23
    // });
  },
  componentDidMount: function(){
  	var cityName= this.props.location.query.cityName;
  	if(cityName && cityName.length > 0){
  		this.handleSearch(cityName);
  		window.location.hash='#/';
  	}
  },
  componentWillReceiveProps:function(newProps){
  	var cityName= newProps.location.query.cityName;
  	if(cityName && cityName.length > 0){
  		this.handleSearch(cityName);
  		window.location.hash='#/';
  	}
  },
  render: function () {
    var {isLoading,temp, cityName,errorMessage} = this.state;
    //to print cityname and temp
        function renderMsg(){			
    	if(isLoading){
    		return <h3 className="text-centerd">Fetching Weather</h3>;
    	}else if(temp && cityName){
    		return <WeatherMessage temp={temp} cityName={cityName}/>; //passs the value to weathermessage compon
    	}
    }
    function renderError(){
    	if (typeof errorMessage === 'string'){
    		return(
    			<ErrorModal message={errorMessage}/>
    			)
    	}
    }
    return (
      <div>
      	<div className="row">
      		<div className="columns medium-6">
      		<About/>
      		</div>
      		<div className="columns medium-6">
		        <h1 className="text-center page-title">Get Weather</h1>
		        <WeatherForm onSearch={this.handleSearch}/>
		        {renderMsg()}    //to print cityname and temp
		        {renderError()}
	        </div>
        </div>
      </div>
    )
  }
});

module.exports = Weather;