import React, {useState} from 'react';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import {Outlet} from "react-router-dom"
import Category from "../category/Category";
import MainHeader from "../MainHeader";
import Footer from "../footer/Footer"
import Utilmenu from "../navigation/Utilmenu";
import Navigation from "../navigation/Navigation";


const Home = () => {
    let [images, setImages] = useState([
        {
            image: 'https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2024/20240418_banner_134653.webp',
            product_info: '1번'
        }
        , {
            image: 'https://image.wavve.com/v1/thumbnails/1240_508_20_80/banner/pooq/2024/20240604_banner_163458.webp',
            product_info: '2번'
        }]);

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <div>
        {/*<Utilmenu/>*/}
        {/*    <Navigation/>*/}
            {/*<MainHeader/>*/}
            <section className={styles.BodyContainer}>
                    <div className={styles.SliderContainer}>
                        <Slider {...settings}>
                            {images && images.map((value, index) => (
                                <div style={{width: 1260}}>
                                    <div className={styles.SliderContent}
                                         key={index}>
                                        <img src={value.image} alt={value.product_info}/>
                                    </div>
                                </div>
                            ))}
                        </Slider>
                </div>

                {/*임시*/}
                {/*<Category/>*/}

            </section>
            <Footer/>
            {/*<Outlet/>*/}
        </div>
    );
};

export default Home;