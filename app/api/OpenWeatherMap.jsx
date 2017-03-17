var axios= require('axios');
const OPEN_WEATHER_MAP_URL='http://api.openweathermap.org/data/2.5/weather?appid=990fd38600610bf5e30158604378d4ba&units=metric'; //call api
//api-990fd38600610bf5e30158604378d4ba
module.exports={
	getTemp: function (cityName) {
    var encodedLocation = encodeURIComponent(cityName);// the cityname to requested json file
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`; //request url with user entered location
		return axios.get(requestUrl).then (function (res){
       //success 
       
	    if(res.data.cod && res.data.message){
			throw new Error(res.data.message);
		}
		else{
				if(res.data.name==cityName){
			     return{
				          cityName: res.data.name,
				          temp:res.data.main.temp
			             }
			    }
			    else{
			            throw new Error('Please Enter Correct City Name');
			        }				
			//return res.data.main.temp;
		    }
		},function (res){
			//error
		throw new Error('Unable to fetch weather for that city');
		});
	}
}