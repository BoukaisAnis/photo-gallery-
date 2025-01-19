import React from 'react';

function Gallery({ photos }) {
  return (
    <div className="gallery">
      {photos.length > 0 ? (
        photos.map((photo) => (
          <div key={photo.id}>
            <img src={photo.urls.small} alt={photo.description} />
            <p>{photo.description}</p>
          </div>
        ))
      ) : (
        <p>No photos found. Try a different search.</p>
      )}
    </div>
  );
}

export default Gallery;
