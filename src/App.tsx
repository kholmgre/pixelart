import * as React from 'react';
import PixelContainer from './PixelContainer';
import Pixel from './Pixel';
import SelectColorContainer from './SelectColorContainer';
import * as domtoimage from 'dom-to-image';

class App extends React.Component<any, any>{
    selectedColor: string
    pixels: Array<JSX.Element>
    constructor() {
        super();
        this.state = { selectedColor: 'pixel' };
    }
    colorSelected(e: any) {
        this.setState({ selectedColor: e.replace('select-pixel', 'pixel') });
    }
    saveImage() {
        domtoimage.toJpeg(document.getElementById('row-container'), { quality: 0.95 })
            .then(function (dataUrl) {
                var link = document.createElement('a');
                link.download = 'image.jpeg';
                link.href = dataUrl;
                link.click();
            });
    }
    render() {
        let ids = [];

        for (let i = 0; i < 384; i++) {
            ids[i] = i;
        }

        let pixels = ids.map((p) => { return <Pixel key={p} currentSelectedColor={this.state.selectedColor} color={'pixel black'} /> });

        return (
            <div className="container">
                <div className="menu">
                    <SelectColorContainer onColorSelected={this.colorSelected.bind(this)} saveImage={this.saveImage.bind(this)}/>
                </div>
                <div className="row-container" id="row-container">
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                    <div>
                        {pixels.slice(0, 32)}
                    </div>
                </div>
            </div>
        );
    }
}

export default App;