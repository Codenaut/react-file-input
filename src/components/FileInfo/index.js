import React from 'react';
import PropTypes from 'prop-types';

import Metadata from './Metadata';
import Thumbnail from './Thumbnail';

import '../../styles/FileInfo.scss';

const FileInfo = ({ className, file, image, metadataComponent, thumbnailComponent }) => {
  const baseClassName = (className && `brainhub-file-info ${className}`) || 'brainhub-file-info';

  const MetadataClass = metadataComponent || Metadata;
  const ThumbnailClass = thumbnailComponent || Thumbnail;

  return (
    <div className={baseClassName}>
      <MetadataClass name={file.filename} size={file.size} extension={file.extension} type={file.mimeType}/>
      { (image && (
        <ThumbnailClass>
          <img className="brainhub-file-info__image" src={image}/>
        </ThumbnailClass>
      ))
      || null }
    </div>
  );
};

FileInfo.default = {
  className: '',
  image: '',
  metadataComponent: null,
  thumbnailComponent: null,
};

FileInfo.propTypes = {
  className: PropTypes.string,
  file: PropTypes.instanceOf(File).isRequired,
  image: PropTypes.string,
  metadataComponent: PropTypes.func,
  thumbnailComponent: PropTypes.func,
};

export default FileInfo;
