import { ThreeDots } from "react-loader-spinner";

import css from './Loader.module.css'

const Loader = () => {
  return (
    <div className={css.wrapper}>
      <ThreeDots
        visible={true}
        height="80"
        width="80"
        color="#e09cb5"
        radius="9"
        ariaLabel="three-dots-loading"
      />
    </div>
  );
};

export default Loader;
