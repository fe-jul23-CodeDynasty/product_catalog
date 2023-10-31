/* eslint-disable import/no-extraneous-dependencies */
import { RotatingLines } from 'react-loader-spinner';
import './Loader.scss';

const Loader = () => {
  return (
    <div className="loader">
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="50"
        visible
      />
    </div>
  );
};

export default Loader;
