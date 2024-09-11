import React, { useEffect, useState } from 'react'
import { Audio } from 'react-loader-spinner'
import { useSelector } from 'react-redux'


const Spinner = () => {
    const [spinner, setSpinner] = useState()
    const loadingSetup = useSelector(((state) => state.app.loading))

    useEffect(() => {
        setSpinner(loadingSetup)
    },[spinner])

    return (
        spinner && <div className="d-flex justify-content-center ">
            <div className="" >
                <Audio
                    height="80"
                    width="80"
                    radius="9"
                    color="green"
                    ariaLabel="three-dots-loading"
                    wrapperStyle
                    wrapperClass
                />
            </div>
        </div>
    );
}

export default Spinner
