const InputField = ({ text, handlerInput, handlerSubmit}) => {
 return (
    <label htmlFor="">
    <input value={text} onChange={e => handlerInput(e.target.value)} />
    <button onClick={handlerSubmit}>Add Todo</button>
  </label>
    
    )

}

export default InputField

