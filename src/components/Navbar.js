import React, { useEffect, useState } from 'react'
import './Navbar.css'
import { useDispatch, useSelector } from 'react-redux';
import { getDataFromApi } from '../store/slices/Slices';
import { Link, useNavigate } from 'react-router-dom';
import Spinner from './Loader';

const Navbar = () => {

    const [catagory, setCategory] = useState('top-250-movies')
    const setupLoader = useSelector((state) => state.app.loading)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleCatagory = (data) => {
        setCategory(data)

    };

    useEffect(() => {

        dispatch(getDataFromApi(catagory)).then(() => {

            if (catagory == 'upcoming-movies') {  
                navigate('/upcoming-movies')
            }
            
        }).catch((err) => {

            console.log(err.message);
        })

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
                    <Link className='mx-2 btn btn-secondary' to='/' onClick={() => handleCatagory('top-250-movies')}>Movies</Link>
                    <Link className='mx-2 btn btn-secondary' to='trailers' onClick={() => handleCatagory('get-trending-trailers')}>Trailers</Link>
                    <Link className='mx-2 btn btn-secondary' onClick={() => handleCatagory('upcoming-movies')}>Upcoming Movies</Link>
                    <Link className='mx-2 btn btn-secondary' to='/top-box-office' onClick={() => handleCatagory('top-box-office')}>Top-Box-Office</Link>
                    <Link className='mx-2 btn btn-secondary' onClick={() => handleCatagory('most-popular-movies')}>popular-movies</Link>
                    <Link className='mx-2 btn btn-secondary'>Get-Movie-News</Link>
                </div>
            </div>
            {setupLoader && <Spinner />}
        </div>
    )
}

export default Navbar
