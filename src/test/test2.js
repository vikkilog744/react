import React, { useState } from 'react';
import FileUploaderDND from './@image/FileUploaderDND';
import './@image/style.scss';

export default function Test2() {
  const [image, setImage] = useState('');

  const setImageAction = (img) => {
    // console.log('img', img);
    setImage(img);
  };

  return (
    <>
      <h1>File Uploader Drag and Drop</h1>
      <div className="upload_image container">
        <FileUploaderDND changeInputFile={setImageAction} />
        {image ? (
          // eslint-disable-next-line jsx-a11y/alt-text
          <img className="placeholder" src={image.file} width={250} height={250} />
        ) : (
          <div className="placeholder" />
        )}
      </div>
      <div className="upload_image footer">
        <a href="https://www.milindsoorya.com">milindsoorya.com</a>
      </div>
    </>
  );
}