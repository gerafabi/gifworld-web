import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <div className='loadingScreen'>
      <CircularProgress disableShrink />
      <p className='text1'>Loading GIF World App...</p>
    </div>
  );
};

export default Loading;
