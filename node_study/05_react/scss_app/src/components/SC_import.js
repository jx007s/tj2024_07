import styles from '../cssss/total.module.scss'

function SC_import(props) {
    return (
        <div>
            <h2>SC_import 이지롱</h2>
            <div className={styles.ttt}> ttt</div>
            <div className={styles.aaa}> aaa</div>
            <div className={styles.bbb}> bbb</div>
            <div className={styles.ccc}> ccc</div>
        </div>
    );
}

export default SC_import;