import './styles.css';

export default function Button(props) {
  const value = props.value === '*' ? 'x' : props.value;
  const classButtons = `buttons ${props.type}`;

  return (
    <button id={props.id} type='button' className={classButtons}>
      {value}
    </button>
  );
}
