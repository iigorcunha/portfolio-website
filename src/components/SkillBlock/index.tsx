import { Flex, Text } from '@chakra-ui/react';
import ReactCardFlip from 'react-card-flip';
import { useState } from 'react';

interface SkillBlockProps {
  children: React.ReactNode;
  color: string;
  skillName: string;
  isDark?: boolean;
}

export function SkillBlock({
  children,
  color,
  skillName,
  isDark = false,
}: SkillBlockProps): JSX.Element {
  const [isFlipped, setIsFlipped] = useState(false);
  function handleClickedCard() {
    setIsFlipped(!isFlipped);
  }
  return (
    <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">
      <Flex
        height={['140px', '140px', '140px', '160px']}
        width={['140px', '140px', '140px', '160px']}
        boxShadow="6px 6px 30px #00000040"
        borderRadius="15px"
        bgColor="cGrey.600"
        _hover={{ cursor: 'pointer' }}
        alignItems="center"
        justifyContent="center"
        onClick={handleClickedCard}
      >
        {children}
      </Flex>
      <Flex
        height={['140px', '140px', '140px', '160px']}
        width={['140px', '140px', '140px', '160px']}
        boxShadow="6px 6px 30px #00000040"
        alignItems="center"
        justifyContent="center"
        borderRadius="15px"
        _hover={{ cursor: 'pointer' }}
        onClick={handleClickedCard}
        bgColor={color}
      >
        <Text
          fontSize={['lg', 'lg', 'xl', '2xl']}
          fontWeight="bold"
          color={isDark ? 'white' : 'black'}
        >
          {skillName}
        </Text>
      </Flex>
    </ReactCardFlip>
  );
}
