import React, { SVGProps } from 'react';

const MarketplaceIcon = (props: SVGProps<SVGSVGElement>) => {
  const { color = '#ffffff', ...remainingProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" {...remainingProps}>
      <g fill="none" stroke={color} strokeLinecap="round" strokeWidth={5} strokeMiterlimit={10}>
        <path d="M80.53 48.26v35.27A4.28 4.28 0 0 1 76.47 88H19.53a4.28 4.28 0 0 1-4.06-4.47V48.26M27.67 36.12c0 6.17-4.56 11.17-10.17 11.17h0c-5.61 0-10.17-5-10.17-11.17V25l10.8-17h59.74l10.8 17v11.12c0 6.17-4.56 11.17-10.17 11.17h0c-5.61 0-10.17-5-10.17-11.17" />
        <path d="M48 36.12c0 6.17-4.55 11.17-10.17 11.17h0c-5.61 0-10.16-5-10.16-11.17M68.33 36.12c0 6.17-4.55 11.17-10.16 11.17h0c-5.62 0-10.17-5-10.17-11.17M7.4 25.65h80.89M64.73 61.78V88M50.51 61.78V88" />
      </g>
    </svg>
  );
};

export default MarketplaceIcon;
