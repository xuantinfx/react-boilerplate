import React, { SVGProps } from 'react';

const CoolDownIcon = (props: SVGProps<SVGSVGElement>) => {
  const { color = '#56F4C3', ...remainingProps } = props;
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" {...remainingProps}>
      <path
        fill={color}
        d="M33.39 38.73C33 32.21 25.06 37.6 24 25.92c-1.72 10.4-9.39 8.78-9.39 12.81a9.28 9.28 0 0 0 .07 1.06h18.65a5.35 5.35 0 0 0 .06-1.06Z"
      />
      <path
        fill={color}
        d="M35.86 40.76h-.55v-1c0-4.53-3.2-7.26-6-9.67-2-1.7-3.72-3.17-4-5a4.8 4.8 0 0 1 0-2.26c.31-1.79 2-3.26 4-5 2.83-2.41 6-5.14 6-9.66 0-.35 0-.7-.05-1h.56a1.62 1.62 0 0 0 0-3.24H12.14a1.62 1.62 0 0 0 0 3.24h.56a9.47 9.47 0 0 0-.06 1c0 4.52 3.21 7.25 6 9.66 2 1.7 3.72 3.17 4 5a4.8 4.8 0 0 1 0 2.26c-.31 1.79-2 3.26-4 5-2.83 2.41-6 5.14-6 9.67v1h-.55a1.62 1.62 0 0 0 0 3.24h23.77a1.62 1.62 0 0 0 0-3.24Zm-22.69-1c0-4.28 3.11-6.93 5.85-9.27 2-1.69 3.86-3.29 4.21-5.27a5.29 5.29 0 0 0 0-2.44c-.35-2-2.23-3.58-4.21-5.27-2.74-2.34-5.85-5-5.85-9.26 0-.32 0-.65.05-1h21.56v1c0 4.27-3.11 6.92-5.85 9.26-2 1.69-3.86 3.3-4.21 5.27a5.29 5.29 0 0 0 0 2.44c.35 2 2.23 3.58 4.21 5.27 2.74 2.34 5.85 5 5.85 9.27v1H13.22c-.03-.34-.05-.66-.05-.97Z"
      />
      <path
        fill={color}
        d="M25.05 20.73c.95-1.8 3.59-3.34 5.62-5.36a18.14 18.14 0 0 0-5.73 2c-1.5.75-2.74-1.27-4.86-1.27a2.68 2.68 0 0 0-1.38.4c.9.81 1.88 1.56 2.78 2.32 1.12 1 1.86 1.7 2.49 5.09a9.24 9.24 0 0 1 1.08-3.18Z"
      />
    </svg>
  );
};

export default CoolDownIcon;
