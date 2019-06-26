import React, {useCallback} from 'react';
import {propTypes} from './sorting.props';

const Sorting = (props) => {
  const {
    isOpened,
    options,
    onToggle,
    onClick,
    activeOptionName,
  } = props;
  const handleListToggle = useCallback(()=>{
    onToggle();
  }, [onToggle]);
  return (
    <form className="places__sorting" action="#" method="get">
      <span className="places__sorting-caption">Sort by </span>
      <span className="places__sorting-type" tabIndex="0" onClick={handleListToggle}>
        {activeOptionName}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${isOpened ? `places__options--opened` : ``}`}>
        {options.map((option) => {
          const handleOptionClick = useCallback(()=>{
            onClick(option.name);
          }, [onClick, option]);
          return (
            <li
              key={option.name}
              className={`places__option${(option.name === activeOptionName) ? ` places__option--active` : ``}`}
              tabIndex="0"
              onClick={handleOptionClick}>
              {option.name}
            </li>
          );
        })}
      </ul>
    </form>
  );
};

Sorting.propTypes = propTypes;

export default Sorting;
