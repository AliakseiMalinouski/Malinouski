var title = 'Frequently Asked Questions';
var containerQuestions = document.getElementById('container__questions');

var arrayQuestions = [
    { id: 100, question: 'What are Solana Souls (Horror Fellow)?', className: 'FirstQuestion', image: './img/plus.png', paragraphClassName: 'FirstParagraph', imageClassName: 'FirstPlus'},
    { id: 110, question: 'How do I purchase a Horror Fellow NFT?', className: 'SecondQuestion', image: './img/plus.png', paragraphClassName: 'SecondParagraph', imageClassName: 'SecondPlus'},
    { id: 120, question: 'How many NFTs will you sell?', className: 'ThirdQuestion', image: './img/plus.png', paragraphClassName: 'ThirdParagraph', imageClassName: 'ThirdPlus' },
    { id: 130, question: 'How can you ensure distribution is random?', className: 'FourthQuestion', image: './img/plus.png', paragraphClassName: 'FourthParagraph', imageClassName: 'FourthPlus'},
    { id: 140, question: 'Is each Horror Fellow unique?', className: 'FifthQuestion', image: './img/plus.png', paragraphClassName: 'FifthParagraph', imageClassName: 'FifthPlus'},
    { id: 150, question: 'What wallet should I use?', className: 'SixthQuestion', image: './img/plus.png', paragraphClassName: 'SixthParagraph', imageClassName: 'SixthPlus'},
];

var QuestionsComponent = React.createClass({

    displayName: 'QuestionsComponent',

    propTypes: {
        title: React.PropTypes.string.isRequired,
        array: React.PropTypes.array.isRequired,
    },

    render: function () {
        var storage = this.props.array.map(element => 
            React.DOM.div({ key: element.id, className: element.className }, React.DOM.p({className: element.paragraphClassName}, element.question), React.DOM.img({ src: element.image, alt: 'Plus', className: element.imageClassName})),
        )
        return React.DOM.div({className: 'Wrapper'}, React.DOM.h3(null, this.props.title), storage)
    },

});

ReactDOM.render(
    React.createElement(QuestionsComponent, { title: title, array: arrayQuestions}),
    containerQuestions,
)