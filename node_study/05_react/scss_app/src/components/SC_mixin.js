import styles from '../cssss/mixin.module.scss';

function SC_mixin(props) {
    return (
        <div>
            <h2>SC_mixin</h2>
            <div className={styles.aaa}>aaa</div>
            <div className={styles.bbb}>bbb</div>
            <div className={styles.ccc}>ccc</div>
            <div className={styles.ddd}>ddd</div>
            <div className={styles.eee}>eee</div>
            <div className={styles.fff}>fff</div>
            <div className={styles.ggg}>ggg</div>
            <div className={styles.hhh}>hhh</div>
            <div className={styles.iii}>iii</div>
            <div className={styles.jjj}>jjj</div>
            <div className={styles.kkk}>kkk</div>
            <div className={styles.mmm}>mmm</div>
            <div className={styles.nnn}>nnn</div>
            <div className={styles.ooo}>ooo</div>
            <div className={styles.ppp}>ppp
                <div>
                    ppp &gt; div
                </div>
            </div>
            <div className={styles.qqq}>qqq</div>
            <div className={styles.rrr}>rrr</div>
        </div>
    );
}

export default SC_mixin;