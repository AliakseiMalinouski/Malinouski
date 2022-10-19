var title = 'Mint a Horror Fellow';
var image = './img/cardImage.png';
var paragraph = 'Mint a Soul Sol by connecting your Solana Sollet or Phantom wallet.';
var type = 'Single';
var circleText = '1 Horror';
var choose = 'You will recieve';
var firstChoose = '1x Sol Soul Unique NFT';
var secondChoose = '3 SOL per NFT';
var buttonText = 'Mint';
var containerCard = document.getElementById('container__card');
var knifeIconUrl = './img/knifeIcon.png';

var CardComponent = React.createClass({

    displayName: 'CardComponent',

    propTypes: {
        title: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        paragraph: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
        circleText: React.PropTypes.string.isRequired,
        choose: React.PropTypes.string.isRequired,
        firstChoose: React.PropTypes.string.isRequired,
        secondChoose: React.PropTypes.string.isRequired,
        buttonText: React.PropTypes.string.isRequired,
        knife: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'WrapperCardContent' },
            React.DOM.img({ src: this.props.image }),
            React.DOM.div({ className: 'SecondPart' },
            React.DOM.h3({className: 'Title'}, this.props.title),
            React.DOM.p({className: 'Paragraph'}, this.props.paragraph),
                React.DOM.div({ className: 'FlexBlock' },
                    React.DOM.div({ className: 'FirstBlock' },
                    React.DOM.p({className: 'Single'}, this.props.type),
                    React.DOM.p({className: 'YouWillReceive'}, this.props.choose),
                    React.DOM.p({className: 'FirstChoose'}, React.DOM.img({src: this.props.knife}), this.props.firstChoose,),
                    React.DOM.p({className: 'SecondChoose'}, React.DOM.img({src: this.props.knife}), this.props.secondChoose, ),
                    ),
                    React.DOM.div({ className: 'SecondBlock' },
                        React.DOM.div(null, this.props.circleText),
                        React.DOM.button({className: 'Button'}, this.props.buttonText),
                    )
                )
            )
        )
    }

});


ReactDOM.render(
    React.createElement(CardComponent, { title: title, image: image, paragraph: paragraph, type: type, circleText: circleText, choose: choose, firstChoose: firstChoose, secondChoose: secondChoose, buttonText: buttonText, knife: knifeIconUrl}),
    containerCard,
)