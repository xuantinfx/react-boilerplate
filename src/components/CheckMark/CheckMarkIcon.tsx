import React from 'react';
import { motion, useTransform } from 'framer-motion';

interface CheckMarkIconProps {
  progress: any;
  color?: string;
  bgColor?: string;
  width?: string | number;
  height?: string | number;
}

const CheckMarkIcon = (props: CheckMarkIconProps) => {
  // @ts-ignore
  const { progress, color = '#7BB86F', bgColor = '#7BB86F', ...remainingProps } = props;
  const circleLength = useTransform(progress, [0, 100], [0, 1]);
  const checkmarkLength = useTransform(progress, [0, 80, 100], [0, 0, 1]);
  const circleColor = useTransform(progress, [0, 80, 100], ['#FFCC66', '#FFCC66', color]);

  return (
    <motion.svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 258 258" {...remainingProps}>
      <motion.circle
        cx="129"
        cy="129"
        r="129"
        fill={bgColor}
        opacity={0}
        style={{ opacity: checkmarkLength }}
      />
      {/* Check mark  */}
      <motion.path
        transform="translate(60 85)"
        d="M3 50L45 92L134 3"
        fill="transparent"
        stroke={color}
        strokeWidth={16}
        style={{ pathLength: checkmarkLength }}
      />
      {/* Circle */}
      <motion.path
        d="M 130 6 C 198.483 6 254 61.517 254 130 C 254 198.483 198.483 254 130 254 C 61.517 254 6 198.483 6 130 C 6 61.517 61.517 6 130 6 Z"
        fill="transparent"
        strokeWidth={8}
        stroke={circleColor}
        style={{
          pathLength: circleLength,
        }}
      />
    </motion.svg>
  );
};

export default CheckMarkIcon;
