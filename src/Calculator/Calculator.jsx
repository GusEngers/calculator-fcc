import Button from '../Button/Button';
import { DATA_BUTTONS } from './data';
import './styles.css';

export default function Calculator() {
  return (
    <div id='calculator'>
      <div id='display'></div>
      <div id='buttons'>
        {DATA_BUTTONS.map((btn) => (
          <Button key={btn.name} id={btn.name} value={btn.value} />
        ))}
      </div>
    </div>
  );
}
