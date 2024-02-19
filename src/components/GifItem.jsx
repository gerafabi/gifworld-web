import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { Typography } from '@mui/material';

export const GifItem = ({ title, url, height, width }) => {
  const resolution = `${width}x${height} HD`;
  const handleDownload = () => {
    fetch(url)
      .then(response => response.blob())
      .then(blob => {
        const downloadUrl = window.URL.createObjectURL(new Blob([blob]));
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = (title || 'image') + '.gif';
        link.dispatchEvent(new MouseEvent('click'));
        window.URL.revokeObjectURL(downloadUrl);
      })
      .catch(error => {
        console.error('Error with the download:', error);
      });
  };

  return (
    <div className='card'>
      <img src={url} alt={title} />
      <div className='card-icons'>
        <button className='download-button' onClick={handleDownload}>
          <FontAwesomeIcon icon={faDownload} className='icon download-icon' title='Download GIF' />
        </button>
      </div>
      <Typography className='resolution'>{resolution}</Typography>
    </div>
  );
};
export default GifItem