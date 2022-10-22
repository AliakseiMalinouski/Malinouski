var arrayListHeader = [
    { code: 1, text: 'Home' },
    { code: 2, text: 'Fusion Preview' },
    { code: 3, text: 'Roadmap' },
    { code: 4, text: 'Rarity Ranking' },
    { code: 5, text: 'Attributes' },
    { code: 6, text: 'Mint Stats' },
    { code: 7, text: 'FAQ' },
];

var containerHeader = document.getElementById('container__header');

var HeaderListComponent = React.createClass({

    displayName: 'HeaderListComponent',

    propTypes: {
        array: React.PropTypes.array.isRequired,
    },

    render: function () {
        var storageHTML = this.props.array.map(element =>
            React.DOM.li({ key: element.code, className: 'scrollElement' }, element.text),
            )
        return React.DOM.div({ className: 'WrapperListHeader' },
            React.DOM.ul({className: 'ListHeader'}, storageHTML),
            React.DOM.div(null, this.props.text),
        )
    }

});

ReactDOM.render(
    React.createElement(HeaderListComponent, { array: arrayListHeader, text: 'Marketplace' }),
    containerHeader,
)