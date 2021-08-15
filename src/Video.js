import React from 'react'
import './index.css';
import taj from '../src/images/taj.jpg';
import taj2 from '../src/images/taj2.jpg';
import vid1 from '../src/Video/vid1.mp4';

export default function Video() {
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <img style={{ height: 700, width: '100%', float: 'right' }} src={taj} className="img-fluid animated" alt="home img" />


                            <video controls style={{ width: 500, height: 500, marginRight: 90 }}>
                                <source src={vid1} type="video/mp4" />
                            </video>
                            <video controls style={{ width: 500, height: 500 }}>
                                <source src={vid1} type="video/mp4" />

                            </video>
                            <div className="oxx">
                                <img style={{ height: 500, marginTop: 100 }} src={taj2} className="img-fluid animated" alt="home img" />
                            </div>
                            <div className="oxx-content">
                                <h3>Your Welcome</h3>
                                <p>This is my whole portfolio site and all about it mention this site Like Software development Android development iOs Development and so on...</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

