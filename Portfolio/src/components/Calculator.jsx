import React, { useState } from 'react';

export default function Calculator() {
    const [screenValue, setScreenValue] = useState('');

    const handleButtonClick = (value) => {
        setScreenValue((prevValue) => prevValue + value);
    };

    const handleClearButtonClick = () => {
        setScreenValue('');
    };

    const handleEqualsButtonClick = () => {
        if (screenValue === '') {
            setScreenValue('');
        } else {
            try {
                const result = eval(screenValue);
                setScreenValue(result.toString());
            } catch (error) {
                console.error('Invalid expression');
            }
        }
    };

    return (
        <div id='calRoot'>
            <div className='calBody'>
                <section className="calculator">
                    <div className="buttons-wrapper"> 
                        <form>
                            <input type="text" className="screen" value={screenValue} readOnly />
                        </form>
                        <button id='calButton' type="button" className="btns cal-btns" onClick={() => handleButtonClick('*')}>*</button>
                        <button id='calButton' type="button" className="btns cal-btns" onClick={() => handleButtonClick('/')}>/</button>
                        <button id='calButton' type="button" className="btns cal-btns" onClick={() => handleButtonClick('-')}>-</button> 
                        <button id='calButton' type="button" className="btns cal-btns" onClick={() => handleButtonClick('+')}>+</button> 
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('9')}>9</button> 
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('8')}>8</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('7')}>7</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('6')}>6</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('5')}>5</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('4')}>4</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('3')}>3</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('2')}>2</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('1')}>1</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('0')}>0</button>
                        <button id='calButton' type="button" className="btns num-btns" onClick={() => handleButtonClick('.')}>.</button>
                        <button id='calButton' type="button" className="equals-btns" onClick={handleEqualsButtonClick}>=</button>
                        <button type="button" className="clear-btns" onClick={handleClearButtonClick}>C</button>
                    </div>
                </section>
            </div>
        </div>
    );
}
