import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

export const GifItem = ({ title, url }) => {
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
        console.error('Error al descargar la imagen:', error);
      });
  };

  return (
    <div className='card'>
      <img src={url} alt={title} />
      <div className='card-icons'>
        <button className='download-button' onClick={handleDownload}>
          <FontAwesomeIcon icon={faDownload} className='icon download-icon' title='Descargar' />
        </button>
      </div>
    </div>
  );
};
export default GifItem