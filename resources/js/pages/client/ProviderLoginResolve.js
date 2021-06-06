import axios from 'axios'
import React, {useEffect,useState} from 'react'
import Logo from "../../images/as21logo.png";


import {loginClient} from "../../actions/AuthUserActions";
import {useDispatch} from "react-redux";


const ProviderLoginResolve = ({location}) => {


    const dispatch =  useDispatch();

     const loginCallback = () =>{
         const searchParams =  new URLSearchParams(location.search);

         dispatch(loginClient({ code : searchParams.get('code') }))


     }

    useEffect(() => {
        window.scrollTo(0,0)

        document.querySelector('title').text = 'AcademiaSteph21 | OAUTH Login'

        loginCallback();

    }, [])


    return (
        <div className='loader-overlay bg-white vh-100'>

            <div className="wait-loader">
                <div className="center">
                    <img src={Logo} alt="AcademiaSteph21 Loader"/>
                </div>
                <div className="item item-1"></div>
                <div className="item item-2"></div>
                <div className="item item-3"></div>
                <div className="item item-4"></div>
                <div className="item item-5"></div>
                <div className="item item-6"></div>
                <div className="item item-7"></div>
                <div className="item item-8"></div>
            </div>

        </div>
    )
}

export default ProviderLoginResolve
