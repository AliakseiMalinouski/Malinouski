import React from 'react';

let withBGHoc = color => Comp => props => 
    <div style={{ backgroundColor: color, border: '1px solid black' }}>
        <Comp {...props} />
    </div>


export { withBGHoc };


