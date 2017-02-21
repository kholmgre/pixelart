import * as React from 'react';
import PixelContainer from './PixelContainer';
import Pixel from './Pixel';
import SelectColorContainer from './SelectColorContainer';

class App extends React.Component<any, any>{
    selectedColor: string
    constructor() {
        super();
        this.state = { selectedColor: 'pixel' };
    }
    colorSelected(e: any) {
        this.setState({ selectedColor: e.replace('select-pixel', 'pixel') });
    }
    render() {
        let ids = [];

        for (let i = 0; i < 384; i++) {
            ids[i] = i;
        }

        let pixels = ids.map((p) => { return <Pixel key={p} currentSelectedColor={this.state.selectedColor} /> });
        return (
            <div>
            <SelectColorContainer onColorSelected={this.colorSelected.bind(this)} />
            <hr />
            <div className="row-container">
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
                <div>
                    {pixels.slice(0, 48)}
                </div>
            </div>
            </div>
        );
    }
}

export default App;