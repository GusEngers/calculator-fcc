export default function Button(props) {
  return (
    <button id={props.id} type='button'>
      {props.value}
    </button>
  );
}
