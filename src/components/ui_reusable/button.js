import React from 'react';
import Button from '@material-ui/core/Button'
import TicketIcon from '../../resources/images/icons/ticket.png'
const button = (props) => {
    return (
        <div>
            <Button 
                href={props.link}
                variant='contained'
                size='small'
                style={{
                    background: props.bck,
                    color:props.color
                }}
            >
                <img src={TicketIcon}
                     className='iconImage'
                     alt=''/>
                {props.text}
            </Button>
        </div>
    );
};

export default button;