import React, { SVGProps } from 'react';

const DashboardIcon = (props: SVGProps<SVGSVGElement>) => {
  const { color = '#ffffff', ...remainingProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...remainingProps}>
      <g fill="none" stroke={color} strokeLinecap="round" strokeWidth={5} strokeMiterlimit={10}>
        <rect x={12.68} y={68.43} width={28.09} height={19.57} rx={4} />
        <rect x={12.26} y={8} width={28.09} height={45.11} rx={4} />
        <rect
          x={55.23}
          y={8}
          width={28.09}
          height={19.57}
          rx={4}
          transform="rotate(180 69.275 17.785)"
        />
        <rect
          x={55.66}
          y={42.89}
          width={28.09}
          height={45.11}
          rx={4}
          transform="rotate(180 69.7 65.445)"
        />
      </g>
    </svg>
  );
};

export default DashboardIcon;
