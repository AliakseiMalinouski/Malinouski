var title = 'First NFT collection with integrated Additional Reality';
var button = 'See Roadmap';
var containerSeeRoadMap = document.getElementById('container__see__roadmap');
var MapComponent = React.createClass({
    
    displayName: 'MapComponent',

    propTypes: {
        title: React.PropTypes.string.isRequired,
        button: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'WrapperSeeRoadMap' },
            React.DOM.div({ className: 'TextAtRedBlock' }, this.props.title),
            React.DOM.div({ className: 'Button' }, React.DOM.a({href: '#scrollToMap'}, this.props.button)),
        )
    }

});

ReactDOM.render(
    React.createElement(MapComponent, { title: title, button: button }),
    containerSeeRoadMap,
)

