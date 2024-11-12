import React from 'react';
import styles from '../cssss/nest.module.scss'

function SC_nesting(props) {
    return (
        <div>
            <h2>nesting 이지롱</h2>
            <div className={styles.section}>
                나는 session 이야
                <div>
                    난 div 이지롱1
                    <h3>난 h3 이지롱</h3>
                    난 div 이지롱2
                </div>
            </div>
            <div className={styles.aaa}>
                aaa 이지롱
                <div>난 aaa &gt; div</div>
            </div>
            <div className={styles.aaadiv}>
                aaadiv 이지롱
            </div>
            <div className={styles.bbb}>
                bbb 이지롱
                <div>난 bbb &gt; div</div>
            </div>

            <div className={styles.ccc}>
                ccc 이지롱
            </div>
        </div>
    );
}

export default SC_nesting;