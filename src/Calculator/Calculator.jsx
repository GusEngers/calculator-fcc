import { useState } from 'react';
import Button from '../Button/Button';
import { DATA_BUTTONS } from './data';
import './styles.css';

export default function Calculator() {
  const [display, setDisplay] = useState('');

  const handleClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === '=') {
      setDisplay(eval(display));
    } else {
      setDisplay(display + value);
    }
  };

  return (
    <div id='calculator'>
      <h1 id='title'>GusCalculator</h1>
      <div id='display'>{display}</div>
      <div id='buttons-container'>
        {DATA_BUTTONS.map((btn) => (
          <Button key={btn.name} id={btn.name} value={btn.value} type={btn.type} handleClick={() => handleClick(btn.value)} />
        ))}
      </div>
    </div>
  );
}
