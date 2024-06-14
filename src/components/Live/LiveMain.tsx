import React, {useState} from "react";
import styles from "./LiveMain.module.css";
import HeaderFilter from './HeaderFilter';
import HeaderIcon from "./HeaderIcon"
import {Lives, Live} from "./thumbnail";
import {Link} from "react-router-dom";



const LiveMain: React.FC = () => {
  const [filterLives, setFilterLives] = useState<Live[]>(Lives)

  const handleCategoryChange = (category: string) => {
    if (category === '전체 장르') {
      setFilterLives(Lives);
    } else {
      setFilterLives(Lives.filter(live => live.category === category));
    }
  };

  return (
      <div>
        {/*<Navigation/>*/}
        <HeaderIcon/>
        <HeaderFilter onCategoryChange={handleCategoryChange}/>
        <div className={styles.liveList}>
          {filterLives.map(live => (
              <div key={live.id}>
                <Link to={`/video/${live.id}`}>
                  <img src={live.thumbnail} alt={live.title} className={styles.thumbnail} />
                  <div>
                    <div className={styles.liveTitle}>{live.title}</div>
                    <div className={styles.liveSubTitle}>{live.subtitle}</div>
                  </div>
                </Link>
              </div>
          ))}
        </div>
      </div>
  )
};

export default LiveMain;
