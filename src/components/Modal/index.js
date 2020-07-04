import React from 'react';
import './styles.css';

export default function Modal(props) {
  return (
    <div className="div-modal-content">
      <div className="div-modal">
        {props.children}
      </div>
    </div>
  );
}