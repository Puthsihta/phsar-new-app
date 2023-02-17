import {Alert, HStack, VStack} from 'native-base';
import React from 'react';
import {Text} from 'react-native';
import colors from '../theme/colors';
import {metrics} from '../theme/layout';

export const MessageType = {
  success: 'success',
  info: 'info',
  warning: 'warning',
  error: 'error',
};

export const VariantType = {
  solid: 'solid',
  subtle: 'subtle',
  left_accent: 'left-accent',
  top_accent: 'top-accent',
  outline: 'outline',
};

const ToastAlert = ({
  toast,
  id,
  status,
  variant,
  title,
  desc,
  isClosable,
  mb,
  ...rest
}: any) => (
  <Alert
    maxWidth="90%"
    alignSelf="center"
    flexDirection="row"
    status={status ?? 'info'}
    variant={variant}
    {...rest}
    mb={mb}>
    <VStack space={1} flexShrink={1} w="100%">
      <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
        <HStack space={2} flexShrink={1} alignItems="center">
          <Alert.Icon />
          <Text
            style={{
              color: colors.titleColor,
              textAlign: 'center',
              width: metrics.screenWidth / 3,
            }}>
            {title}
          </Text>
        </HStack>
      </HStack>
    </VStack>
  </Alert>
);

export function showToast(
  toast: any,
  title: string,
  status: string = MessageType.success,
  desc: string | null = null,
  duration: number = 1000,
  mb: number = 0,
  variant: string = VariantType.left_accent,
) {
  const item = {
    toast,
    title,
    status,
    variant,
    desc,
    mb,
  };
  toast.show({
    render: ({id}: any) => {
      return <ToastAlert id={id} {...item} isClosable />;
    },
    duration,
  });
}
