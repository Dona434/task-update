import React from 'react';
import './HomeRt.css';
import shape from '../../images/shape.png'

const HomeRt = () => {
  return (
  <>
  <div class="homert-card" style={{border:"none"}}>
    <div class="card-body">
    <p className='price'>$93 to $140 a person a day</p>
    <p className='pricingLabel'>Education pricing available</p>
    <p className='service'>Service documents</p>
    <div className='lists3' style={{marginTop:"45px"}}>
    <img src={shape} alt='logo' style={{height:"52.5px",width:"40.833px"}}/>
    <p className='pricedocument'>Pricing document</p>
    <div className='circle' style={{marginBottom:"20px",marginTop:"-3px"}}><p className='pdf'>PDF</p></div>

    <img src={shape} alt='logo' style={{height:"52.5px",width:"40.833px"}}/>
    <p className='pricedocument'>Skills Framework for the <br></br> Information Age rate card</p>
    <div className='circle' style={{marginBottom:"20px",marginTop:"-5px"}}><p className='pdf'>PDF</p></div>

    <img src={shape} alt='logo' style={{height:"52.5px",width:"40.833px"}}/>
    <p className='pricedocument'>Skills Framework for the <br></br> Information Age rate card</p>
    <div className='circle' style={{marginBottom:"20px",marginTop:"-5px"}}><p className='pdf'>PDF</p></div>

    <img src={shape} alt='logo' style={{height:"52.5px",width:"40.833px"}}/>
    <p className='pricedocument'>Terms and conditions</p>
    <div className='circle' style={{marginTop:"-3px"}}><p className='pdf'>PDF</p></div>
    </div>

    </div>
  </div>
  </>
  )
}

export default HomeRt