import { nanoid } from 'nanoid';

import sprite from '../../../assets/sprite.svg'


import {
  StyledInput,
  StyledLabel,
  StyledRadioWrapper,
  StyledSVG,
} from './RadioIcons.styled';
import { useState } from 'react';
import { useEffect } from 'react';

const RadioIcon = ({ onChangeIcon, currentBoardIcon }) => {
  const icons = [
    'project',
    'star',
    'loading',
    'puzzle',
    'container',
    'lightning',
    'colors',
    'hexagon',
  ];

  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    if (!selectedValue) {
      setSelectedValue(currentBoardIcon || 'icon-project');
    }
  }, [currentBoardIcon, selectedValue]);

  const handleRadioChange = icon => {
    setSelectedValue(icon);
    onChangeIcon(icon);
  };

  return (
    <StyledRadioWrapper>
      {icons.map(icon => {
        const id = nanoid();
        return (
          <StyledLabel key={id}>
            <StyledInput
              type="radio"
              value={icon}
              name="icon"
              checked={selectedValue === icon}
              onChange={() => handleRadioChange(icon)}
            />
            <StyledSVG>
              <use href={`${sprite}#${icon}`} />
            </StyledSVG>
          </StyledLabel>
        );
      })}
    </StyledRadioWrapper>
  );
};

export default RadioIcon;