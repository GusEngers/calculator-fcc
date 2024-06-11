import { useState } from 'react';
import Button from '../Button/Button';
import { DATA_BUTTONS, TYPE_BUTTONS } from './data';
import './styles.css';

export default function Calculator() {
  const [result, setResult] = useState([]);
  const [display, setDisplay] = useState('0');
  const [isTotal, setIsTotal] = useState(false);

  const handleClick = (type) => {
    if (type === TYPE_BUTTONS[0]) {
      // Manejo de botones numéricos
      return (e) => {
        if (isNaN(display)) {
          if (display.includes('(-')) {
            setDisplay(display + e.target.value);
          } else {
            setResult([...result, display]);
            setDisplay(e.target.value);
          }
        } else {
          if (isTotal) {
            setDisplay(e.target.value);
            setIsTotal(false);
          } else if (display === '0') {
            setDisplay(e.target.value);
          } else {
            setDisplay(display + e.target.value);
          }
        }
      };
    }
    if (type === TYPE_BUTTONS[1]) {
      // Manejo de botones de operaciónes matemáticas
      return (e) => {
        if (isTotal) {
          setIsTotal(false);
        }
        // Verificar si el valor actual es un número
        if (!isNaN(display)) {
          setResult([...result, display]);
          setDisplay(e.target.value);
        } else {
          if (display.includes('(-')) {
            // Número negativo generado
            setResult([...result, display + ')']);
            setDisplay(e.target.value);
          } else if (e.target.value === '-') {
            // Generando un número negativo
            setResult([...result, display]);
            setDisplay('(' + e.target.value);
          } else {
            const current = [...result];
            result[result.at(-1)] = e.target.value;
            setResult(current);
            setDisplay(e.target.value);
          }
        }
      };
    }
    if (type === TYPE_BUTTONS[2]) {
      // Manejo de botón decimal
      return (e) => {
        if (!isNaN(display.at(-1)) && !display.includes('.')) {
          setDisplay(display + e.target.value);
        }
      };
    }
    if (type === TYPE_BUTTONS[3]) {
      // Manejo de botón igual
      return () => {
        if (!isNaN(display)) {
          const values = [...result, display];
          const total = eval(values.join(''));
          setDisplay(total);
          setResult([]);
        } else if (display.includes('(-')) {
          const values = [...result, display + ')'];
          const total = eval(values.join(''));
          setDisplay(total);
          setResult([]);
        }
        setIsTotal(true);
      };
    }
    // Manejo de botón de borrado
    return () => {
      setDisplay('0');
      setResult([]);
      setIsTotal(false);
    };
  };

  return (
    <div id='calculator'>
      <h1 id='title'>GusCalculator</h1>
      <div id='display'>{display}</div>
      <div id='buttons-container'>
        {DATA_BUTTONS.map((btn) => (
          <Button key={btn.name} id={btn.name} value={btn.value} type={btn.type} handleClick={handleClick(btn.type)} />
        ))}
      </div>
    </div>
  );
}
