import React from 'react';
import PropTypes from 'prop-types';

import '../styles/DropArea.scss';

const Droparea = ({ className, dragging, onDragEnter, onDragLeave, onDrop, openFileDialog, localization }) => {
  const baseClassName = (className && `brainhub-drop-area ${className}`) || 'brainhub-drop-area';
  const classNames = dragging
    ? `${baseClassName} brainhub-drop-area--dragging`
    : baseClassName;
  const loc = localization || {}
  return (
    <div
      className={classNames}
      onDragEnter={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      {dragging
        ? (<div className="brainhub-drop-area__info">{loc["dropHereToSelectFile"] || "Drop here to select file."}</div>)
        : (
          <div>
            <div className="brainhub-drop-area__button" role="button" tabIndex={-1} onClick={openFileDialog}>
                {loc["addFile"] || "+ Add File"}
            </div>
          </div>
        )
      }
    </div>
  );
};

Droparea.defaultProps = {
  className: '',
  dragging: false,
};

Droparea.propTypes = {
  className: PropTypes.string,
  dragging: PropTypes.bool,
  onDragEnter: PropTypes.func.isRequired,
  onDragLeave: PropTypes.func.isRequired,
  onDrop: PropTypes.func.isRequired,
  openFileDialog: PropTypes.func.isRequired,
  localization: PropTypes.array,
};

export default Droparea;
