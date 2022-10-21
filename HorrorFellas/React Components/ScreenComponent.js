var screenUrl = './img/screen.png';
var containerScreen = document.getElementById('container__screen');

var ScreenComponent = React.createClass({

    displayName: 'ScreenComponent',

    propTypes: {
        screenUrl: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.img({src: this.props.screenUrl, alt: 'Screen', className: 'ImageTwitch'})
    }

});

ReactDOM.render(
    React.createElement(ScreenComponent, { screenUrl: screenUrl }),
    containerScreen,
)