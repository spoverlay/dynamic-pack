import React from 'react';

type DynamicPackLogoProps = {
  className?: string;
};

const DynamicPackLogo: React.FC<DynamicPackLogoProps> = () => {
  return (
    <svg className='size-8 rounded-md'  viewBox="0 0 1000 1000" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect className='size-full' fill="#F2102F"/>
        <path d="M860.9 121.875V362.874L801.062 303.036L502.621 601.477L395.977 494.833L699.285 191.524L629.637 121.875H860.9Z" fill="#3C52F0"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M139.1 152.58V878.125H321.834V610.315H385.192L588.746 878.125H811.772L570.323 567.776C617.504 541.714 710.699 463.588 706.025 359.579C700.184 229.568 632.482 152.58 463.378 152.58H139.1ZM334.818 476.894C420.089 477.211 516.252 477.57 516.252 375.606C516.252 283.654 424.243 284.23 339.67 284.759C333.319 284.798 327.01 284.838 320.786 284.838V476.859C325.418 476.859 330.101 476.876 334.818 476.894Z" fill="white"/>
    </svg>
  );
};

export default DynamicPackLogo;