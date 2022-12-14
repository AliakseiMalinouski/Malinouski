import React from 'react';


// class Title extends React.PureComponent{
//     static propTypes = {
//         title: PropTypes.string.isRequired,
//     }

//     state = {
//         title: this.props.title,
//     }

//     render() {
//         return <h1 className='Title'>
//             {this.state.title}
//         </h1>
//     }
// }
// export default Title;

export const Title = ({title}) => {
    return (
        <h1 className='Title'>
            {title}
       </h1>
    )
}