import React, {useState} from 'react';
import styles from './Home.module.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from "../footer/Footer"
import MainCategory from "../category/MainCategory";


const Home = () => {
    let [images, setImages] = useState([
        {
            image: 'https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/20240610_banner_110641.jpg',
            img_info: 'https://image.wavve.com/v1/thumbnails/2480_1016_20…/banner/pooq/2024/imgbuild_20240610_110703721.png',
            info: '1번'
        }
        , {
            image: 'https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2022/20220920_banner_134451.jpg',
            img_info: 'https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/imgbuild_20240605_112001777.png',
            info: '2번'
        }
        , {
            image: 'https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/20240509_banner_111002.jpg',
            img_info: 'https://image.wavve.com/v1/thumbnails/2480_1016_20_80/banner/pooq/2024/imgbuild_20240530_160121564.png',
            info: '3번'
        }

    ]);

    const settings = {
        className: "slider variable-width",
        dots: true,
        infinite: true,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        variableWidth: true,
        autoplay: true,
        autoplaySpeed: 1500,
    };

    return (
        <div>
            <section className={styles.BodyContainer}>
                <div className={styles.SliderContainer}>
                    <Slider {...settings}>
                        {images && images.map((value, index) => (
                            <div style={{width: 1260}}>
                                <div className={styles.SliderContent}
                                     key={index}>
                                    <img src={value.image} alt={value.info}/>
                                    <img src={value.img_info} alt={value.info} className={styles.imgPosition}/>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </section>
            <MainCategory/>
        </div>
    );
};

export default Home;