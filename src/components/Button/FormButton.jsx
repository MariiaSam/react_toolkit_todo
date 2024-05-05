import css from './FormButton.module.css';

const FormButton = ({ children, type="submit" }) => {
    return <button type={type} className={css.buttonForm}>Register Now</button>
}

export default FormButton;
