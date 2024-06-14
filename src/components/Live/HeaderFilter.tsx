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
];

interface HeaderFilterProps {
    onCategoryChange: (category: string) => void;
}

const HeaderFilter: React.FC<HeaderFilterProps> = ({onCategoryChange}) => {
    const [selectCategory, setSelectCategory] = useState<string>('전체 장르');

    const filterChangeHandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const category = event.target.value;
        setSelectCategory(category);
        onCategoryChange(category);
    };

    return (
        <div className={styles.filterBoxWrap}>
            <div className={styles.filterBox}>
                <div className={styles.filterText}>전체 채널</div>
                <select className={styles.filter} value={selectCategory} onChange={filterChangeHandler}>
                    {categories.map((category, index) => (
                        <option key={index} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
};


export default HeaderFilter;