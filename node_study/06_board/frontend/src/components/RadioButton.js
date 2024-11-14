import React from 'react';

function RadioButton({pname, vv, tt, chk=false}) {
    return (
        <label>
            <input type="radio" name={pname} 
            value={vv} checked={chk}/>{tt}
        </label>
    );
}

export default RadioButton;