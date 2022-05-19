import React, { PropsWithChildren } from 'react';
import { Flex, Text, Image } from '@chakra-ui/react';
import { Resources } from 'src/shared';

export interface Props extends PropsWithChildren<any> {
  description?: string;
  showImage?: boolean;
}

const EmptyView: React.FC<Props> = (props: Props) => {
  const { showImage = true, description = 'No Data', children, ...remainingProps } = props;
  return (
    <Flex
      justifyContent={'center'}
      alignItems={'center'}
      flexDirection={'column'}
      {...remainingProps}
    >
      {showImage && (
        <Image src={Resources.svgs.listEmpty} alt={description} maxWidth={'300px'}></Image>
      )}
      <Text textAlign={'center'} pt={2}>
        {description}
      </Text>
      {!!Boolean(children) && children}
    </Flex>
  );
};

export default EmptyView;
