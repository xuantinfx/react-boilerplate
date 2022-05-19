import { useTranslation } from 'react-i18next';
import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useColorModeValue,
} from '@chakra-ui/react';
import React from 'react';
import { AppSizes, Colors } from '../shared';

interface IErrorModalProps {
  isOpen: boolean;
  onClose: () => void;
  errorMessage?: string;
}

const ErrorModal = ({ errorMessage, isOpen, onClose }: IErrorModalProps) => {
  const { t } = useTranslation();
  const modalBackgroundColor = useColorModeValue(
    Colors.dark.modalBackground,
    Colors.dark.modalBackground
  );

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent backgroundColor={modalBackgroundColor}>
        <ModalHeader textAlign={'center'}>{t('Error')}</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>{errorMessage}</ModalBody>

        <ModalFooter mx={'auto'}>
          <Button borderRadius={'full'} minWidth={AppSizes.ButtonMinWidth} onClick={onClose}>
            {t('Close')}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ErrorModal;
