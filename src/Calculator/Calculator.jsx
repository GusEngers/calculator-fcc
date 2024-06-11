import { DATA_BUTTONS } from './data';

export default function Calculator() {
  return (
    <>
      <div id='display'></div>
      <div>
        {DATA_BUTTONS.map((btn) => (
          <button id={btn.name} key={btn.name}>
            {btn.value}
          </button>
        ))}
      </div>
    </>
  );
}
