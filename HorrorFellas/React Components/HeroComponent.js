var logo = 'Introducing Horror Fellow';
var paragraph = 'SOLD OUT - 10,000 uniquely generated, cute and collectible pixel art souls with proof of ownership stored on the Solana blockchain.';
var buttonText = 'Buy on DigitalEyes Marketplace';
var secondParagraph = "Our mint is over, & our team is busy working on our roadmap.However, if you're looking to launch your own NFTs & join the Solana community - we can help";
var containerHero = document.getElementById('container__hero');
var imagePlayUrl = './img/playIcon.png';
var imageHero = './img/heroBackground2.png';

var contentHeroComponent = React.createClass({

    displayName: 'contentHeroComponent',

    propTypes: {
        logo: React.PropTypes.string.isRequired,
        paragraph: React.PropTypes.string.isRequired,
        buttonText: React.PropTypes.string.isRequired,
        secondParagraph: React.PropTypes.string.isRequired,
        image: React.PropTypes.string.isRequired,
        background: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'WrapperHeroContent' },
            React.DOM.h1({ className: 'Logo' }, this.props.logo),
            React.DOM.p({ className: 'Paragraph' }, this.props.paragraph),
            React.DOM.button({ className: 'Button' }, this.props.buttonText,
            React.DOM.img({className: 'Image', src: this.props.image})
            ),
            React.DOM.p({ className: 'SecondParagraph' }, this.props.secondParagraph),
            React.DOM.img({src: this.props.background, className: 'Background'})
        )
    }

});

ReactDOM.render(
    React.createElement(contentHeroComponent, { logo: logo, paragraph: paragraph, buttonText: buttonText, secondParagraph: secondParagraph, image: imagePlayUrl, background: imageHero},),
    containerHero,
)