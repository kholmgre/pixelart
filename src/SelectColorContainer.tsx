import * as React from 'react';

class SelectColorContainer extends React.Component<any, any> {
    constructor() {
        super();
    }
    colorSelected(e: any) {
        this.props.onColorSelected(e.target.className);
    }
    render() {
        let colors = ["red", "green", "blue", "white", "black", "bronze", "light-buttercup", "deep-boston"];

        let elems = colors.map((c) => {
            let className = 'select-pixel ' + c;
            return (
                <div className={className} key={c} onClick={this.colorSelected.bind(this)}>
                </div>)
        });

        return (<div className="colors-select">
            <h3>Select color</h3>
            {elems}
        </div>)
    }
}

export default SelectColorContainer;