var React= require('react');
var Nav = require('Nav');
var Main= React.createClass({
	render: function(){
		return(
			<div>
				<Nav/>
				<div className="row">
					<div className="columns medium-12 large-12 small-centered">
						{this.props.children}
					</div>
				</div>
			</div>
			);
	}
});
module.exports= Main;