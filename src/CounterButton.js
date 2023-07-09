const CounterButton = ({count, setCount}) => {

    const handleClick = () => {
      setCount(prevCount => prevCount + 1);
    };
  
  return (
    <button onClick={handleClick}>
      {count}
    </button>
  );
};

export default CounterButton;