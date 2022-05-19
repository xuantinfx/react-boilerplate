import React, { SVGProps } from 'react';

const UserActivityIcon = (props: SVGProps<SVGSVGElement>) => {
  const { color = '#ffffff', ...remainingProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...remainingProps}>
      <g fill="none" stroke={color} strokeLinecap="round" strokeWidth={5} strokeMiterlimit={10}>
        <path d="M36.18 75.13h-25a2.79 2.79 0 0 1-2.8-2.79V10.8A2.8 2.8 0 0 1 11.15 8H55.9a2.8 2.8 0 0 1 2.8 2.8v25.73M18.45 53.5h14.1M18.45 39.42H37.8M18.45 25.34h26.78" />
        <circle cx={65.27} cy={65.62} r={22.38} />
        <path d="M75.78 65.62H65.27V51.59M71.82 20.34v23.83" />
      </g>
    </svg>
  );
};

export default UserActivityIcon;
