import React, { SVGProps } from 'react';

const InventoryIcon = (props: SVGProps<SVGSVGElement>) => {
  const { color = '#ffffff', ...remainingProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...remainingProps}>
      <g fill="none" stroke={color} strokeLinecap="round" strokeWidth={5} strokeMiterlimit={10}>
        <path d="M6.43 54v24l20.78 12L48 78V54L27.21 42 6.43 54zM48 54v24l20.78 12 20.79-12V54L68.78 42 48 54z" />
        <path d="M27.21 18v24L48 54l20.78-12V18L48 6 27.21 18zM27.22 65.97l-.07 12.12M48 29.97v12.07" />
        <path d="m6.43 53.97 20.78 12 20.79-12M48 53.95l20.78 12L80.51 59M27.21 17.95l20.79 12 20.78-12" />
      </g>
    </svg>
  );
};

export default InventoryIcon;
