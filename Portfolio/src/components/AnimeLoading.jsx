import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function AnimeLoading() {
    const [isLoading, setIsLoading] = useState(false);
    console.log(isLoading);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(true);
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <div className="loadingRoot">
      <div className="loadingBody">
        <div className="bubbles">
          <span style={{ '--i': '11' }}></span>
          <span style={{ '--i': '12' }}></span>
          <span style={{ '--i': '24' }}></span>
          <span style={{ '--i': '10' }}></span>
          <span style={{ '--i': '14' }}></span>
          <span style={{ '--i': '23' }}></span>
          <span style={{ '--i': '18' }}></span>
          <span style={{ '--i': '16' }}></span>
          <span style={{ '--i': '19' }}></span>
          <span style={{ '--i': '20' }}></span>
          <span style={{ '--i': '22' }}></span>
          <span style={{ '--i': '25' }}></span>
          <span style={{ '--i': '18' }}></span>
          <span style={{ '--i': '21' }}></span>
          <span style={{ '--i': '15' }}></span>
          <span style={{ '--i': '13' }}></span>
          <span style={{ '--i': '26' }}></span>
          <span style={{ '--i': '17' }}></span>
          <span style={{ '--i': '13' }}></span>
          <span style={{ '--i': '28' }}></span>
          <span style={{ '--i': '11' }}></span>
          <span style={{ '--i': '12' }}></span>
          <span style={{ '--i': '24' }}></span>
          <span style={{ '--i': '10' }}></span>
          <span style={{ '--i': '14' }}></span>
          <span style={{ '--i': '23' }}></span>
          <span style={{ '--i': '18' }}></span>
          <span style={{ '--i': '16' }}></span>
          <span style={{ '--i': '19' }}></span>
          <span style={{ '--i': '20' }}></span>
          <span style={{ '--i': '22' }}></span>
          <span style={{ '--i': '25' }}></span>
          <span style={{ '--i': '18' }}></span>
          <span style={{ '--i': '21' }}></span>
          <span style={{ '--i': '15' }}></span>
          <span style={{ '--i': '13' }}></span>
          <span style={{ '--i': '26' }}></span>
          <span style={{ '--i': '17' }}></span>

      </div>
      {isLoading ? (
          <div className="popUpBox">
            <div className="contentwrapper">
              <h1 className="head">Welcome!</h1>
              <p className="text">You are being transported. Are you ready?</p>
              <div className="btnContainer">
                <Link
                  className="btn-yes"
                  to="/animearrived"
                  onClick={() => {
                    setIsLoading(false);
                    console.log('User clicked YES');
                  }}
                >
                  YES
                </Link>
                <a
                  className="btn-no"
                  onClick={() => {
                    console.log('User clicked NO');
                    document.querySelector('.head').innerHTML = 'Opps!';
                    document.querySelector('.text').innerHTML =
                      'Sorry you cannot turn back';
                  }}
                >
                  NO
                </a>
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
}
