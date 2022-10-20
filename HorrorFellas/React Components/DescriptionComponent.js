var firstTitle = 'Horror Fellow are arriving';
var secondTitle = '10,000 Ever Minted';
var thirdTitle = 'Join the Soul Train';
var firstParagraph = 'Get in on the ground floor by collecting the exclusive Horror Fellow NFTs. See our roadmap for our future plans, including our DAPP interactive Horror Fellow FUSION feature.';
var secondParagraph = 'Each Horror Fellow is unique & algorithmically generated & minted on the Solana blockchain. We are only ever generating 10k completely unique Sol Souls. There will be no further generations.';
var thirdParagraph = 'Get the latest updates & get exclusive air drops & contests.';
var imageUrlEarthIcon = './img/earth.png';
var imageUrlIconP2 = './img/icon-p2.png';
var imageUrlPeopleIcon = './img/peple.png';
var twithIcon = './img/akar-icons_twitch-fill.png';
var telegramIcon = './img/akar-icons_telegram-fill.png';
var twitterIcon = './img/entypo-social_twitter-with-circle.png';
var containerDescription = document.getElementById('container__description');

var DescriptionComponent = React.createClass({

    displayName: 'DescriptionComponent',

    propTypes: {
        firstTitle: React.PropTypes.string.isRequired,
        secondTitle: React.PropTypes.string.isRequired,
        thirdTitle: React.PropTypes.string.isRequired,
        thirdParagraph: React.PropTypes.string.isRequired,
        firstParagraph: React.PropTypes.string.isRequired,
        secondParagraph: React.PropTypes.string.isRequired,
        imageUrlEarthIcon: React.PropTypes.string.isRequired,
        imageUrlIconP2: React.PropTypes.string.isRequired,
        twithIcon: React.PropTypes.string.isRequired,
        telegramIcon: React.PropTypes.string.isRequired,
        twithIcon: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'WrapperDescriptionContent' },
        React.DOM.div({className: 'FirstBlock'}, React.DOM.img({src: this.props.imageUrlEarthIcon, alt: 'Earth'}), React.DOM.h4({className: 'Title'}, this.props.firstTitle), React.DOM.p({className: 'Paragraph'}, this.props.firstParagraph)),
        React.DOM.div({className: 'SecondBlock'}, React.DOM.img({src: this.props.imageUrlIconP2, alt: 'Icon'}), React.DOM.h4({className: 'Title'}, this.props.secondTitle), React.DOM.p({className: 'Paragraph'}, this.props.secondParagraph)),
        React.DOM.div({className: 'ThirdBlock'}, React.DOM.img({src: this.props.imageUrlPeopleIcon, alt: 'People'}), React.DOM.h4({className: 'Title'}, this.props.thirdTitle), React.DOM.p({className: 'Paragraph'}, this.props.thirdParagraph), React.DOM.div({className: 'WrapperImageSocialNetworks'}, React.DOM.img({src: this.props.twithIcon, alt: 'twitch icon'}), React.DOM.img({src: this.props.telegramIcon, alt: 'telegram icon'}), React.DOM.img({src: this.props.twitterIcon, alt: 'twitter icon'}))),
        )
    }

});

ReactDOM.render(
    React.createElement(DescriptionComponent, {
        firstTitle: firstTitle,
        secondTitle: secondTitle,
        thirdTitle: thirdTitle,
        thirdParagraph: thirdParagraph,
        firstParagraph: firstParagraph,
        secondParagraph: secondParagraph,
        thirdParagraph: thirdParagraph,
        imageUrlEarthIcon: imageUrlEarthIcon,
        imageUrlIconP2: imageUrlIconP2,
        imageUrlPeopleIcon: imageUrlPeopleIcon,
        twithIcon: twithIcon,
        telegramIcon: telegramIcon,
        twitterIcon: twitterIcon,
    }),
    containerDescription,
)