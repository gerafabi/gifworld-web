import React from 'react';
import { CircularProgress, Typography } from '@mui/material';

const Loading = () => {
  return (
    <div className='loadingScreen'>
      <CircularProgress disableShrink />
      <Typography className='text1'>Cargando...</Typography>
    </div>
  );
};

export default Loading;
