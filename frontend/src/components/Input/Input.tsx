import React, { InputHTMLAttributes } from 'react';
import { ReactComponent as Search } from '../../assets/search.svg';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  showSearchIcon?: boolean
  searchIconClickFn?: (e: React.MouseEvent<SVGSVGElement>) => void;
}

const Input: React.FC<InputProps> = ({ className, showSearchIcon, searchIconClickFn, ...props }) => {
  return (
    <div className={`relative ${className}`}>
      <input className={`bg-primary shadow-search-bar px-6 py-4 w-10vw rounded-full w-full outline-none hover:bg-highlight focus:bg-highlight`} {...props} />
      {showSearchIcon && <Search className={'absolute right-0 top-1/2 -translate-y-1/2 mr-6 scale-[0.6] cursor-pointer'} onClick={searchIconClickFn} />}
    </div>
  )
};

export default Input;