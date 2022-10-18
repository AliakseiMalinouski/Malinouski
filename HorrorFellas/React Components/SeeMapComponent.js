var title = 'First NFT collection with integrated Additional Reality';
var button = 'See Roadmap';
var containerSeeRoadMap = document.getElementById('see__roadmap');
var SeeMapComponent = React.createClass({
    
    displayName: 'SeeMapComponent',

    render: function () {
        return React.DOM.div({ className: 'WrapperSeeRoadMap' },
        )
    }

});

ReactDOM.render(
    React.createElement(SeeMapComponent, { title: title, button: button }),
    containerSeeRoadMap,
)