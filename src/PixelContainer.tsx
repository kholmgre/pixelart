import * as React from 'react';
import Pixel from './Pixel';

class PixelContainer extends React.Component<any, any>{
    constructor() {
        super();
    }
    render(){
        return (
            <Pixel onClick={this.props.onClick}/>
        );
    }
}

export default PixelContainer;