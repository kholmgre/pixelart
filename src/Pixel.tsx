import * as React from 'react';

class Pixel extends React.Component<any, any>{
    constructor() {
        super();
        this.state = { color: 'pixel'}
    }
    handleClick(e: any){
       if(this.props.currentSelectedColor !== this.state.color){
           this.setState({ color: this.props.currentSelectedColor});
       }
    }
    render(){
        let classes = this.state.color;
        return (
            <div className={classes} onClick={this.handleClick.bind(this)}></div>
        )
    }
}

export default Pixel;