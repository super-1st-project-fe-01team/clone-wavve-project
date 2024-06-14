import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Category.module.css";
import CategoryTitle from "./CategoryTitle"
import Footer from "../footer/Footer";
import {dummyDataList} from "../../data/dummyMovieDatas";
import {Player} from "../../models/Player";
import PlayerItem from "../player/PlayerItem";
import CategoryContentTitle from "./CategoryContentTitle";
import BadgeImg from "./BadgeImg";
import CategoryList from "./CategoryList";


const Category = () => {

    const playerList: Player[] = dummyDataList;


    return (
        <>
            <main>
                <CategoryTitle/>
                <section className={`${styles.categoryWrap} ${styles.categoryDrama}`}>
                    <div className={styles.contentWrap}>
                        <CategoryContentTitle/>
                        <div className={styles.categoryList}>
                            {playerList.map((player) => {
                                console.log(`아이디값:  ${player.movieId}`);
                                return (
                                    <Link to={`/player/${player.movieId}`}>
                                        <div className={styles.list}>
                                            <PlayerItem
                                                movieId={player.movieId}
                                                brandLogoList={player.brandLogoList}
                                                backdropImage={player.backdropImage}
                                                videoDetail={player.videoDetail}
                                                bottomContents={player.bottomContents}
                                            />
                                            <BadgeImg/>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                    <div className={`${styles.swiperButton} ${styles.prev}`}></div>
                    <div className={`${styles.swiperButton} ${styles.next}`}></div>
                </section>
                <CategoryList/>
                <Footer/>
            </main>
        </>
    );
};

export default Category;