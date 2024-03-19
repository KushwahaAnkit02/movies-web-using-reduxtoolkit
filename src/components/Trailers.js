import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

const Trailers = () => {
    const [trailers, setTrailers] = useState()
    const data = useSelector((state) => state.app.trailers)

    useEffect(() => {
        setTrailers(data)
    }, [])
    return (
        <div className='d-flex mx-5 justify-content-center my-4' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <div className="row m-auto">
                {trailers && trailers.map((value, i) => {
                    return (
                        <div key={i} className="col my-2" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <div className="card" style={{ width: '18rem', height: "27rem" }}>
                                <img src={value?.image} className="card-img-top" style={{ height: "30vh" }} />
                                <div className="d-flex justify-content-center">
                                    <div className="card-body">
                                        <h5 className="card-title">{value?.title}</h5>
                                        <p className="card-text">Timeline - {value?.trailerLength}</p>
                                        <p className="card-text"> Release date - {value?.releaseDate}</p>
                                        <div className="d-flex justify-content-center">
                                            <a className='btn btn-info' target='blank' href={value.videoLink}>Watch Trailer..</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>

    )
}

export default Trailers
