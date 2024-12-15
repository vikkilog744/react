import * as React from 'react';
import './style.scss';
// import {Button} from '@mui/material';

const MyCard = (props) => {
    const { data } = props;
    return (<div className='card-section'>
        {data && data.map((item, index) => (
            <div key={index} className='card'>
                <div className='card-header'> Image Cap
                    <img src="" className='card-image' alt='' title='' />
                </div>
                <div className='card-body'>
                    <h4 className='card-title'>{item?.title}</h4>
                    <p className='card-text'>{item?.subTitle}</p>
                    <div className='card-description'>{item?.description}</div>
                </div>
                {/* <Button variant="contained">Hello World</Button> */}
            </div>
        ))}
    </div>);
}

export default MyCard;