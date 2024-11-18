import React from 'react';

function RadioButton({pname, vv, tt, chGo, chk=false}) {
    return (
        <label>
            <input type="radio" name={pname} 
                    value={vv} checked={chk}
                    onChange={(e)=>chGo(pname, e.target)}
            />{tt}

        </label>
    );
}

export default RadioButton;