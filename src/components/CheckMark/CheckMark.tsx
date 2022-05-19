import React from 'react';
import { motion, useMotionValue } from 'framer-motion';
import { useColorModeValue } from '@chakra-ui/react';
import { Colors } from '../../shared';
import CheckMarkIcon from './CheckMarkIcon';

interface CheckMarkProps {
  color?: string;
  bgColor?: string;
  width?: string | number;
  height?: string | number;
}

const CheckMark = (props: CheckMarkProps) => {
  const { color, bgColor, width = 100, height = 100 } = props;
  let progress = useMotionValue(90);
  const checkMarkColor = useColorModeValue(Colors.dark.success, Colors.dark.success);
  const checkMarkBGColor = useColorModeValue(Colors.dark.bg, Colors.dark.bg);

  return (
    <>
      <motion.div
        initial={{ x: 0 }}
        animate={{ x: 100 }}
        style={{ x: progress }}
        transition={{ duration: 1 }}
      />
      <CheckMarkIcon
        progress={progress}
        color={color || checkMarkColor}
        bgColor={bgColor || checkMarkBGColor}
        height={height}
        width={width}
      />
    </>
  );
};

export default CheckMark;
