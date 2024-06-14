import React from 'react';
import styles from "./Category.module.css";
import CategoryContentTitle from "./CategoryContentTitle";
import {Link} from "react-router-dom";
import PlayerItem from "../player/PlayerItem";
import BadgeImg from "./BadgeImg";
import {Player} from "../../models/Player";
import {dummyDataList} from "../../data/dummyMovieDatas";

const MainCategory = () => {
    const playerList: Player[] = dummyDataList;

    return (
        <>
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
        </>
    );
};

export default MainCategory;