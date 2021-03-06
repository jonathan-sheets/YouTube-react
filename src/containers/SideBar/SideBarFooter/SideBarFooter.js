import React from 'react';
import './SideBarFooter.scss';

export function SideBarFooter() {
  return (
    <React.Fragment>
      <div className='footer-block'>
        <div>About Press Copyright</div>
        <div>Creators Advertise</div>
        <div>Developers +MyTube</div>
        <div>Legal</div>
      </div>
      <div className='footer-block'>
        <div>Privacy Terms</div>
        <div>Policy & Safety</div>
        <div>Test New Features</div>
      </div>
      <div className='footer-block'>
        <div>All prices include VAT</div>
      </div>
      <div className='footer-block'>
        <div>Productioncoder.com - A YouTube clone for educational purposes under fair use.</div>
      </div>
    </React.Fragment>
  );
}