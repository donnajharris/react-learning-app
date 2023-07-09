const ResetButton  = ({onReset})  => {
    return ( 
        <button className="reset" onClick={onReset}>
            Reset
        </button>
    );
};

export default ResetButton;