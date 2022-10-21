var downloadText = 'Upload hint';

var AjaxTextComponent = React.createClass({

    displayName: 'AjaxTextComponent',

    propTypes: {
        text: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'W' },
        React.DOM.button({className: 'ButtonUpload'}, this.props.text),
        React.DOM.p({ className: 'Text' }, null),
        )
    }

});


ReactDOM.render(
    React.createElement(AjaxTextComponent, {text: downloadText}),
    document.getElementById('container__help__text'),
)