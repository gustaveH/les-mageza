import React from 'react';
import Helmet from 'react-helmet';
import SaveTheDate from './components/SaveDate';
import Card from '../src/image/card1.png';
import './App.css';

function App() {
  return (
    <>
      <Helmet>
        <meta name='twitter:card' content='summary_large_image' />
        <meta name='twitter:title' content='Les Mageza' />
        <meta
          name='twitter:description'
          content='We,re Getting Married! Save the date!'
        />
        <meta name='twitter:image' content={Card} />
      </Helmet>
      <div>
        <SaveTheDate />
      </div>
    </>
  );
}

export default App;
