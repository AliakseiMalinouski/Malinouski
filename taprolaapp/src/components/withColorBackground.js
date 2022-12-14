import React from 'react';

let withBGHoc = color => Comp => props => 
    <div style={{ backgroundColor: color, width: 'auto', height: '52px', marginBottom: '90px', borderRadius: '20px'}}>
        <Comp {...props} />
    </div>


export { withBGHoc };


