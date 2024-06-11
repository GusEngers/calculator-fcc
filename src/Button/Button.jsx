export default function Button(props) {
  const value = props.value === '*' ? 'x' : props.value;

  return (
    <button id={props.id} type='button'>
      {value}
    </button>
  );
}
