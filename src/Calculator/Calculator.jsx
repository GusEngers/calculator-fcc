import Button from '../Button/Button';
import { DATA_BUTTONS } from './data';

export default function Calculator() {
  return (
    <>
      <div id='display'></div>
      <div>
        {DATA_BUTTONS.map((btn) => (
          <Button key={btn.name} id={btn.name} value={btn.value} />
        ))}
      </div>
    </>
  );
}
