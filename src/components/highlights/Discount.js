import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import Button from '../ui_reusable/button'
class Discount extends Component {

    state = {
        discountStart:0,
        discountEnd:30,
    }

    percentage=()=>{
        if(this.state.discountStart <this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })

        }
    }
    //when set state cause its asynchronous , we want to recursively update using a function we can use component did mount
    componentDidUpdate(){
        setTimeout(()=>{
            this.percentage()
        },40)
    }

    render() {
        return (
            <div className='center_wrapper'>
                <div className='discount_wrapper'>
                    <Fade
                        onReveal={()=>this.percentage()}>
                    <div className='discount_percentage'>
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>

                    </div>
                    </Fade>
                    <Slide up>
                        <div className='discount_description'>
                            <h3>Purchase tickets before Saouron</h3>
                            <p> Sed gravida purus in volutpat dapibus. Vestibulum porta rhoncus tincidunt. 
                                Cras accumsan magna fringilla nibh vehicula, sit amet sagittis massa hendrerit. Aliquam erat volutpat. 
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras nec elementum erat. 
                                Duis dignissim tortor vitae purus tempus, rutrum porta dolor suscipit. Proin quis nibh a mauris luctus luctus. 
                                Nam non luctus nibh. In laoreet libero convallis felis vulputate, ac dignissim lacus molestie.
                            </p>
                        
                            <Button
                                text='Purchase Tickets'
                                bck='#ffa800'
                                color='ffffff'
                                link=''
                            />
                        
                        </div>
                    </Slide>

                </div>
                
            </div>
        );
    }
}

export default Discount;