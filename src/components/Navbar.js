import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useDispatch } from 'react-redux';
import { getDataFromApi } from '../store/slices/Slices';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [catagory, setCategory] = useState('top-250-movies')
    const dispatch = useDispatch()

    const trailers = (data) => {
        setCategory(data)
    };
    useEffect(() => {
        dispatch(getDataFromApi(catagory))
    }, [catagory])
    return (
        <div>
            <div className='main-nav'>
                <h1 className="d-flex justify-content-center ">Movix.com</h1>
                <div className="d-flex justify-content-center">
                    <input type="text" className='searchBar' placeholder='Search movies,series..' />
                    <i className="fa-solid fa-magnifying-glass"></i> <span><button className='mx-2 btn btn-secondary searchButton'>Search</button></span>
                </div>
                <hr />

                <div className="d-flex justify-content-center">
                    <Link className='mx-2 btn btn-secondary'  to='/' onClick={() => trailers('top-250-movies')}>Movies</Link>
                    <Link className='mx-2 btn btn-secondary'  to='trailers' onClick={() => trailers('get-trending-trailers')}>Trailers</Link>
                    <Link className='mx-2 btn btn-secondary' to='upcoming-movies' onClick={() => trailers('upcoming-movies')}>Upcoming Movies</Link>
                    <Link className='mx-2 btn btn-secondary'>Top-Box-Office</Link>
                    <Link className='mx-2 btn btn-secondary'>popular-movies</Link>
                    <Link className='mx-2 btn btn-secondary'>Get-Movie-News</Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar
