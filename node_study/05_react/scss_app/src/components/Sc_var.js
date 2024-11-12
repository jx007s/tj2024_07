import '../cssss/aaa.css'
import '../cssss/bbb.scss'
import cm from '../cssss/ccc.module.scss'
import dm from '../cssss/ddd.module.scss'

function Sc_var(props) {
    return (
        <div>
            <h2>변수 이지롱</h2>
        <div className="box1">box1 이지</div>
        <div className="box2">box2 이지</div>
        <div className={cm.box2}>cm2 이지</div>
        <div className={cm.box3}>cm3 이지</div>
        <div className={cm.box4}>cm4 이지</div>
        <div className={cm.box5}>cm5 이지</div>
        <div className={cm.box6}>cm6 이지</div>
        <div className={dm.box2}>dm 이지</div>
            
        </div>
    );
}

export default Sc_var;