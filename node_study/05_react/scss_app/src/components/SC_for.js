import styles from '../cssss/for.module.scss';

function SC_for(props) {
    return (
        <div>
            <h2>SC_for 이지롱</h2>
            <div>
                <div className={styles.aaa}>aaa 1</div>
                <div className={styles.aaa}>aaa 2</div>
                <div className={styles.aaa}>aaa 3</div>
            </div>

            <div>
                <div className={styles.bbb}>bbb 1</div>
                <div className={styles.bbb}>bbb 2</div>
                <div className={styles.bbb}>bbb 3</div>
            </div>
            <div>
                <div className={styles.ccc}>ccc 1</div>
                <div className={styles.ccc}>ccc 2</div>
                <div className={styles.ccc}>ccc 3</div>
                <div className={styles.ccc}>ccc 4</div>
            </div>
            <div className={styles.eee}>eee</div>
            <div className={styles.fff}>fff</div>
            <div className={styles.ggg}>ggg</div>
            <div className={styles.xxx_10}>xxx_10</div>
            <div className={styles.xxx_40}>xxx_40</div>
            <div className={styles.xxx_80}>xxx_80</div>
        </div>
    );
}

export default SC_for;