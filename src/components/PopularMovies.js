import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PopularMovies = () => {
    const [popularMovies, setPopularMovies] = useState()
    const data = useSelector((state) => state.app.movies)


    useEffect(() => {
        setPopularMovies(data)
    }, [])

    return (
        data && <div className='d-flex mx-5 justify-content-center my-4' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <div className="row m-auto">
                {popularMovies && popularMovies.map((value, i) => {
                    return (
                        <div key={i} className="col my-2" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
                            <div className="card" style={{ width: '18rem', height: "22rem" }}>
                                <img src={value?.list[i]?.image} className="card-img-top" style={{ height: "30vh" }} />
                                <div className="d-flex justify-content-center">
                                    <div className="card-body">
                                        <h5 className="card-title">{value?.list[i]?.title}</h5>
                                        <p className="card-text"> Release date - {value?.date}</p>
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

export default PopularMovies
