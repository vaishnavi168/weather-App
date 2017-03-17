//Error Message component
var React= require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');
var ErrorModal = React.createClass({
	getDefaultProps: function() {
		return{
			title:'Error'
		};
	},
	PropTypes:{
		title:React.PropTypes.string,
		message:React.PropTypes.string.isRequired
	},
	componentDidMount: function() {
		var{title,message}=this.props;
		var modalMarkup=(
			<div id="error-modal" className="reveal tiny text-center" data-reveal="">
				<h4>{title}</h4>
				<p>{message}</p>
				<button className="button hallow" data-close="">Ok</button>
			</div>
		);
		var $modal=$(ReactDOMServer.renderToString(modalMarkup));//converts jsx into html ,returns the html string
		$(ReactDOM.findDOMNode(this)).html($modal);//attach dom node
		var modal= new Foundation.Reveal($('#error-modal'));//get the id of modal
		modal.open(); //open the modal
				
	},
	render: function(){
		return(
			<div>
				
			</div>
			);
		
	}
});
module.exports= ErrorModal;