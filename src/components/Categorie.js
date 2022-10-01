import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { checkStatus } from '../redux/categories/categories';

const Categories = () => {
  const dispatch = useDispatch();
  const displayStatus = useSelector((state) => state.categories);

  const checkBookStatus = () => {
    dispatch(checkStatus());
  };
  return (
    <div>
      <button type="submit" className=" checkStatus btn btn-primary mx-5 w-25" onClick={checkBookStatus}>
        Check Status
      </button>
      <h5 className="TextStatus">{displayStatus}</h5>
    </div>
  );
};

export default Categories;
