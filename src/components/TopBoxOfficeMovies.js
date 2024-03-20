import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'


const TopBoxOfficeMovies = () => {
    const [data, setdata] = useState()
    const movies = useSelector((state) => state.app.topBoxOffice)
    useEffect(() => {
        setdata(movies)
    }, [])

    return (
        <div className='d-flex mx-5 justify-content-center my-4' style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)' }}>
            <div className="row m-auto">
                {data && data.map((value, i) => {
                    return (
                        <div key={i} className="col my-2" style={{ boxShadow: '0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)', objectFit: "" }}>
                            <div className="card" style={{ width: '18rem', height: "27rem" }}>
                                <img src={value?.posterImage} className="card-img-top" style={{ height: "30vh" }} />
                                <div className="d-flex justify-content-center">
                                    <div className="card-body">
                                        <h5 className="card-title">{value?.title}</h5>
                                        <p className="card-text"> IMDBRating - {value?.imdbRating}</p>
                                        <p className="card-text">Weakend Gross - {value?.weekendGross}</p>
                                        <p className="card-text">Total Gross - {value?.totalGross}</p>
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

export default TopBoxOfficeMovies
