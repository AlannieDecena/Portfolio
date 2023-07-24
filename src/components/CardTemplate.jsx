import React, { useEffect } from 'react';

export default function CardTemplate({ title, text }) {
    return (
      <div className="card">
        <div className="card-body">
          <div className="card-title">{title}</div>
          <div className="card-text">{text}</div>
          {/* <img width="350" className="card-img" alt="Anime" /> */}
        </div>
      </div>
    );
  }