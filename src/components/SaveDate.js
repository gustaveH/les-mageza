import React from 'react';
import { Animated } from 'react-animated-css';
import '../App.css';
import SaveDateForm from './SaveDateForm';

const BackgroundVideo = () => {
  const videoSource =
    'https://les-pageza-media.s3.amazonaws.com/TheProposalShort.mp4';
  return (
    <div>
      <div className='vedio-area'>
        <div>
          <video className='short-video' autoPlay loop>
            <source src={videoSource} type='video/mp4' />
          </video>

          <div className='slide-b'>
            <div className='slide-content'>
              <div className='slide-subtitle'>
                <h4>WERE GETTING MARRIED</h4>
              </div>
              <div className='slide-title'>
                <h2>Save The Date</h2>
              </div>
              <div className='slide-text'>
                <p>13 November 2021</p>
              </div>
              <Animated>
                <div className='animated-circle'></div>
              </Animated>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SaveDateForm />
      </div>
    </div>
  );
};

export default BackgroundVideo;
