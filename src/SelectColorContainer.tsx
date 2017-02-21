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
                <div className={className} key={c} onClick={this.colorSelected.bind(this)} >
                </div>)
        });

        return (
            <div className="select-color-container">
                <div className="colors-select" style={{ flex: 1, order: 1, display: 'flex' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {elems.splice(0, elems.length / 2)}
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {elems.splice(0, elems.length)}
                    </div>
                </div>
                <input type="button" onClick={this.props.saveImage} value="save" style={{ order: 2 }} />
            </div>
        )
    }
}

export default SelectColorContainer;