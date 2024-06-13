import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Category.module.css";
import CategoryTitle from "./CategoryTitle"
import CategoryContentTitle from "./CategoryContentTitle";
import CategoryList from "./CategoryList";
import Footer from "../footer/Footer";
import {dummyDataList} from "../../data/dummyMovieDatas";
import {Player} from "../../models/Player";
import PlayerItem from "../player/PlayerItem";
import Navigation from "../navigation/Navigation";



const Category = () => {

    const playerList:Player[] = dummyDataList;


  return (
      <>
        <main>
          <Navigation/>
          <Categorytitle/>
          <section className={`${styles.categoryWrap} ${styles.categoryDrama}`}>
            <div className={styles.contentWrap}>
              <div className={styles.contentTitle}>
                <h2>오직 웨이브에서 #드라마</h2>
                <p>더보기</p>
              </div>
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
                        </div>
                      </Link>
                  );
                })}
            </div>
          </div>
          <div className={`${styles.swiperButton} ${styles.prev}`}></div>
          <div className={`${styles.swiperButton} ${styles.next}`}></div>
        </section>
       <Footer/>
        </main>
        </>
    );
};

export default Category;