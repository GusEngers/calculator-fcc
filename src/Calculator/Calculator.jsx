import Button from '../Button/Button';
import { DATA_BUTTONS } from './data';
import './styles.css';

export default function Calculator() {
  return (
    <div id='calculator'>
      <h1 id='title'>GusCalculator</h1>
      <div id='display'></div>
      <div id='buttons-container'>
        {DATA_BUTTONS.map((btn) => (
          <Button key={btn.name} id={btn.name} value={btn.value} type={btn.type} />
        ))}
      </div>
    </div>
  );
}