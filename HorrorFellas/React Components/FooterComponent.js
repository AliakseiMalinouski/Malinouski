var firstTitle = 'Horror Fellow';
var secondTitle = 'Resources';
var thirdTitle = 'Launching your own NFTs?';
var fourthTitle = 'Community';
var paragraph = '10,000 algorithmically generated, cute and collectible NFTs with proof of ownership stored on the Solana blockchain.';
var email = 'bol@horrorfellowsnft.com';
var li1 = 'Roadmap';
var li2 = 'FAQ';
var li3 = 'Quick Stats';
var li4 = 'Mint a Horror Fellow';
var help = 'We can help. Learn more';
var twithIcon = './img/akar-icons_twitch-fill.png';
var telegramIcon = './img/akar-icons_telegram-fill.png';
var twitterIcon = './img/entypo-social_twitter-with-circle.png';
var containerFooter = document.getElementById('container__footer');

var FooterComponent = React.createClass({

    displayName: 'FooterComponent',

    propTypes: {
        firstTitle: React.PropTypes.string.isRequired,
        secondTitle: React.PropTypes.string.isRequired,
        thirdTitle: React.PropTypes.string.isRequired,
        fourthTitle: React.PropTypes.string.isRequired,
        paragraph: React.PropTypes.string.isRequired,
        email: React.PropTypes.string.isRequired,
        li1: React.PropTypes.string.isRequired,
        li2: React.PropTypes.string.isRequired,
        li3: React.PropTypes.string.isRequired,
        li4: React.PropTypes.string.isRequired,
        help: React.PropTypes.string.isRequired,
        twithIcon: React.PropTypes.string.isRequired,
        telegramIcon: React.PropTypes.string.isRequired,
        twitterIcon: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'WrapperFooter' },
            React.DOM.div({ className: 'FirstBlock' }, React.DOM.h4({ className: 'FirstTitle' }, this.props.firstTitle), React.DOM.p({ className: 'FirstParagraph' }, this.props.paragraph), React.DOM.h5({ className: 'Email' }, this.props.email)),
            React.DOM.ul({ className: 'FooterList' }, React.DOM.li(null, this.props.li1), React.DOM.li(null, this.props.li2), React.DOM.li(null, this.props.li3), React.DOM.li(null, this.props.li4)),
            React.DOM.div({ className: 'SecondBlock' }, React.DOM.h4({ className: 'SecondTitle' }, this.props.secondTitle), React.DOM.p({ className: 'SecondParagraph' }, this.props.help)),
            React.DOM.div({className: 'ThirdBlock'}, React.DOM.h4({className: 'ThirdTitle'}, this.props.fourthTitle), React.DOM.div(null, React.DOM.img({src: this.props.twithIcon}), React.DOM.img({src: this.props.telegramIcon}), React.DOM.img({src: this.props.twitterIcon}))),
        )
    }
});

ReactDOM.render(
    React.createElement(FooterComponent, {
        firstTitle: firstTitle,
        secondTitle: secondTitle,
        thirdTitle: thirdTitle,
        fourthTitle: fourthTitle,
        paragraph: paragraph,
        email: email,
        li1: li1,
        li2: li2,
        li3: li3,
        li4: li4,
        help: help,
        twithIcon: twithIcon,
        telegramIcon: telegramIcon,
        twitterIcon: twitterIcon,
    }),
    containerFooter,
)