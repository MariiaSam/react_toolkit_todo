const InputField = ({ text, handlerInput, handlerSubmit }) => {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handlerSubmit();
    }
  };

  return (
    <label htmlFor="">
      <input
        value={text}
        onChange={(e) => handlerInput(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button className='addBtn' onClick={handlerSubmit}>
        Add Todo
      </button>
    </label>
  );
};

export default InputField;
