import { Box } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

interface Props {}

const MobileNavContent: React.FC<Props> = (props) => {
  const { t } = useTranslation();

  return (
    <Box
      fontWeight="bold"
      pos="relative"
      minW={120}
      py={2}
      px={1}
      justifyContent="center"
      alignItems="center"
      display="inline-flex"
    >
      abc
    </Box>
  );
};

export default MobileNavContent;
