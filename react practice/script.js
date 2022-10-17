// var textTitleCompponent = 'Добро пожаловать на мою страничку!';
// var textParagraph = 'Эта параграф о моей страничке :)))';
// var textButton = 'Нажми на меня'
// var Welcome = React.createClass({

//     displayName: 'Welcome',

//     render: function () {
//         return React.DOM.div(
//             { className: 'wrapper', id: 'wrapper__id' },
//             React.DOM.h2({ className: 'title' }, this.props.titleText ),
//             React.DOM.p({ className: 'paragraph' }, this.props.textParagraph ),
//             React.DOM.button({className: 'button__wrapper'}, this.props.textButton ),
//         )
//     }
// });

// ReactDOM.render(
//     React.createElement(Welcome, {
//         titleText: textTitleCompponent,
//         textParagraph: textParagraph,
//         textButton: textButton,
//     }),
//     document.getElementById('container'),
// )
var questionMain = 'Как вы относитесь к программированию?';
var answersArr=[ 
      {text:'хорошо',code:1,count:222}, 
      {text:'не получается',code:2,count:123}, 
      {text:'избегаю',code:3,count:444} 
];

var MyComponent = React.createClass({

    displayName: 'MyComponent',

    render: function () {
        var answersCode = []
        
        for (var i = 0; i < this.props.answer.length; i++) {
            var answer = this.props.answer[i];
            var answerCode =
            React.DOM.div({ key: answer.code, className: 'Answer' },
            React.DOM.span({className: 'count'}, answer.count),
            React.DOM.span({className: 'text'}, answer.text),
                )
            answersCode.push(answerCode);
        }
        return React.DOM.div({ className: 'VoitesBlock' },
            React.DOM.div({ className: 'question' }, this.props.question),
            React.DOM.div({ className: 'answer' }, answersCode),
        )
    }


})

ReactDOM.render(
    React.createElement(MyComponent, { question: questionMain, answer: answersArr }),
    document.getElementById('container'),
)

