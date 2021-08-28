import { Flex } from '@chakra-ui/react';

interface SkillBlockProps {
  children: React.ReactNode;
}

export function SkillBlock({ children }: SkillBlockProps): JSX.Element {
  return (
    <Flex
      height={['140px', '140px', '140px', '160px']}
      width={['140px', '140px', '140px', '160px']}
      borderRadius="15px"
      align="center"
      justify="center"
      bgColor="cGrey.600"
      boxShadow="6px 6px 30px #00000040"
    >
      {children}
    </Flex>
  );
}
