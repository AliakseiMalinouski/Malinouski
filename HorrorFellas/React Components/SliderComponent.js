var title = 'Discover Horror Fellow';
var firstImageSlider = './img/firstImageSlider.png';
var secondImageSlider = './img/secondImageSlider.png';
var thirdImageSlider = './img/thirdImageSlider.png';
var underTitleFirstSlide = 'Sweepin Floats';
var underTitleSecondSlide = 'Sweepin Floats';
var underTitleThirdSlide = 'Sweepin Floats';
var paragraphFirstSlide = '1x Horror FellowNFT';
var paragraphSecondSlide = '1x Horror Fellow Unique NFT';
var paragraphThirdSlide = '1x Sol Horror Fellow NFT';
var knifeIconUrl = './img/knifeIcon.png';
var containerSlider = document.getElementById('container__slider');
var next = './img/hand-right.png';
var prev = './img/hand-left.png';
var SliderComponent = React.createClass({

    displayName: 'SliderComponent',

    propsTypes: {
        title: React.PropTypes.string.isRequired,
        firstImageSlider: React.PropTypes.string.isRequired,
        secondImageSlider: React.PropTypes.string.isRequired,
        thirdImageSlider: React.PropTypes.string.isRequired,
        underTitleFirstSlide: React.PropTypes.string.isRequired,
        underTitleSecondSlide: React.PropTypes.string.isRequired,
        underTitleThirdSlide: React.PropTypes.string.isRequired,
        knifeIconUrl: React.PropTypes.string.isRequired,
    },

    render: function () {
        return React.DOM.div({ className: 'WrapperSliderContent' },
            React.DOM.h2({ className: 'Title' }, this.props.title),
            React.DOM.div({ className: 'WrapperSliderSlide' },
                React.DOM.div({ className: 'WrapperSlides' },
                React.DOM.div({ className: 'FirstSlide' }, React.DOM.img({ src: this.props.firstImageSlider, alt: 'Image', className: 'Image'}), React.DOM.h4({ className: 'UnderTitle' }, this.props.underTitleFirstSlider),React.DOM.h6({ className: 'Paragraph' }, React.DOM.img({ src: this.props.knifeIconUrl, alt: 'Knife', className: 'Knife' }), this.props.paragraphFirstSlide)),
                React.DOM.div({ className: 'SecondSlide' }, React.DOM.img({ src: this.props.secondImageSlider, alt: 'Image', className: 'Image' }), React.DOM.h4({ className: 'UnderTitle' }, this.props.underTitleSecondSlide),React.DOM.h6({ className: 'Paragraph' }, React.DOM.img({ src: this.props.knifeIconUrl, alt: 'Knife', className: 'Knife' }), this.props.paragraphSecondSlide)),
                React.DOM.div({ className: 'ThirdSlide' }, React.DOM.img({ src: this.props.thirdImageSlider, alt: 'Image', className: 'Image' }), React.DOM.h4({ className: 'UnderTitle' }, this.props.underTitleThirdSlide), React.DOM.h6({ className: 'Paragraph' }, React.DOM.img({ src: this.props.knifeIconUrl, alt: 'Knife', className: 'Knife' }), this.props.paragraphThirdSlide)),
                React.DOM.div({ className: 'FirstSlide' }, React.DOM.img({ src: this.props.firstImageSlider, alt: 'Image', className: 'Image'}), React.DOM.h4({ className: 'UnderTitle' }, this.props.underTitleFirstSlider),React.DOM.h6({ className: 'Paragraph' }, React.DOM.img({ src: this.props.knifeIconUrl, alt: 'Knife', className: 'Knife' }), this.props.paragraphFirstSlide)),
                React.DOM.div({ className: 'SecondSlide' }, React.DOM.img({ src: this.props.secondImageSlider, alt: 'Image', className: 'Image' }), React.DOM.h4({ className: 'UnderTitle' }, this.props.underTitleSecondSlide),React.DOM.h6({ className: 'Paragraph' }, React.DOM.img({ src: this.props.knifeIconUrl, alt: 'Knife', className: 'Knife' }), this.props.paragraphSecondSlide)),
                React.DOM.div({ className: 'ThirdSlide' }, React.DOM.img({ src: this.props.thirdImageSlider, alt: 'Image', className: 'Image'}), React.DOM.h4({ className: 'UnderTitle' }, this.props.underTitleThirdSlide), React.DOM.h6({ className: 'Paragraph' }, React.DOM.img({ src: this.props.knifeIconUrl, alt: 'Knife', className: 'Knife' }), this.props.paragraphThirdSlide)),
            ),
            ),
            React.DOM.div({ className: 'WrapperButtons' },
                React.DOM.button({className: 'Previous'}, React.DOM.img({src: this.props.prev})),
                React.DOM.button({className: 'Next'}, React.DOM.img({src: this.props.next})),   
            )
        )
    },

});

ReactDOM.render(
    React.createElement(SliderComponent, {
        title: title,
        firstImageSlider: firstImageSlider,
        secondImageSlider: secondImageSlider,
        thirdImageSlider: thirdImageSlider,
        underTitleFirstSlider: underTitleFirstSlide,
        underTitleSecondSlide: underTitleSecondSlide,
        underTitleThirdSlide: underTitleThirdSlide,
        paragraphFirstSlide: paragraphFirstSlide,
        paragraphSecondSlide: paragraphSecondSlide,
        paragraphThirdSlide: paragraphThirdSlide,
        knifeIconUrl: knifeIconUrl,
        next: next,
        prev: prev,
    }),
    containerSlider,
)