var React= require('react');
var {Link}= require('react-router');
var Example= React.createClass({
	render: function(){
		return(
			<div>
			<h1 className="text-centerd page-title">Examples</h1>
			<p>This is example page</p>
			<ol>
				<li>
					<Link to='/?cityName=nashik'>Nashik</Link>

				</li>
				<li>
					<Link to='/?cityName=pune'>Pune</Link>
				</li>
			</ol>
			</div>
			);
	}
});
module.exports= Example;