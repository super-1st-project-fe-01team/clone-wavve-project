import React, {useState} from "react";
import styles from './HeaderFilter.module.css'

const categories = [
  '전체 장르',
  '정주행 채널 (무료)',
  '지상파',
  '종편/보도',
  '홈쇼핑 (무료)',
  '드라마/예능',
  '시사/교양',
  '영화/스포츠',
  '키즈/애니',
  '라디오/음악'
]

const HeaderFilter: React.FC = () => {
  const [filterCategory, setFilterCategory] = useState <string>();

  const filterChangeHandle = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setFilterCategory(event.target.value);
  };

  return <div className={styles.filterBox}>
    <div className={styles.filterText}>전체 채널</div>
    <select className={styles.filter} value={filterCategory} onChange={filterChangeHandle}>
      {categories.map((category, index) => (
          <option key={index} value={category}>
            {category}
          </option>
      ))}
    </select>
  </div>;
};

export default HeaderFilter;