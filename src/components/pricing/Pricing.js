import React, { Component } from 'react';
import Button from '../ui_reusable/button'
import Zoom from 'react-reveal/Zoom'


class Pricing extends Component {

    state= {
        prices:[100,150,250],
        positions:['Balcony', 'Medium','Rohan'],
        Description:[
                'Vivamus maximus nisl at venenatis accumsan',
                'Maecenas pulvinar lorem id nulla varius tincidunt',
                'Sed sagittis molestie urna sit amet sodales'
                    ],
        linkto:['http://localhost:3000','http://localhost:3000','http://localhost:3000'],
        delay:[500,100,800]

    }

    showBoxes=()=>(
    this.state.prices.map((box,i)=>(
    <Zoom delay={this.state.delay[i]} key={i}>
        <div className='pricing_item'>
            <div className='pricing_inner_wrapper'>
                <div className='pricing_title'>
                        <span>${this.state.prices[i]}</span>
                        <span>{this.state.positions[i]}</span>
                </div>
                <div className='pricing_description'>
                        {this.state.Description[i]}
                </div>
                <div className='pricing_button'>
                        <Button
                            text='Purchase'
                            bck='#ffa800'
                            color='white'
                            link={this.state.linkto[i]}
                        />
                </div>

            </div>
        </div>
    </Zoom>
        
        ))
    )




    render() {
        return (
            <div className='bck_black'>
                <div className='center_wrapper pricing_section'>
                    <h2>Pricing</h2>

                    <div className='pricing_wrapper'>
                        {this.showBoxes()}
                    </div>


                </div>
                
            </div>
        );
    }
}

export default Pricing;