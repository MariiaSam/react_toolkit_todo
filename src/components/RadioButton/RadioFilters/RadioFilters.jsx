import React, { useState } from 'react';
import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';

const RadioFilters = ({ onFilterChange, priority }) => {
  const [selectedValue, setSelectedValue] = useState(priority || 'Without');

  const radioButtons = [
    {
      value: 'Without',
      label: 'Without priority',
      labelColor: selectedValue === 'Without' ? '#fff' : 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: 'rgba(22, 22, 22, 0.3)',
        onChecked: 'rgba(22, 22, 22, 0.3)',
      },
    },
    {
      value: 'Low',
      label: 'Low',
      labelColor: selectedValue === 'Low' ? '#fff' : 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: '#8fa1d0',
        onChecked: '#151512',
      },
    },
    {
      value: "High",
      label: 'High',
      labelColor: selectedValue === 'High' ? '#FFF' : 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: 'pink',
        onChecked: '#151512',
      },
    },
    {
      value: "Medium",
      label: 'Medium',
      labelColor: selectedValue === 'Medium' ? '#FFF' : 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: 'green',
        onChecked: '#151512',
      },
    },
    
    
  ];

  const handleRadioChange = (event) => {
    const selectedPriority = event.target.value;
    setSelectedValue(selectedPriority);
    onFilterChange(selectedPriority);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flexStart',
        width: '120px',
      }}
    >
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        value={selectedValue}
        name="radio-buttons-group"
        onChange={handleRadioChange}
        sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
      >
        {radioButtons.map((button) => {
          const { value, label, labelColor, radioColor } = button;
          return (
            <FormControlLabel
              key={value}
              value={value}
              sx={{
                display: 'flex',
                gap: '8px',
                margin: '0',
                height: '24px',
                '& .MuiTypography-root': {
                  fontFamily: 'Poppins',
                  fontSize: '12px',
                  color: labelColor,
                },
              }}
              control={
                <Radio
                  sx={{
                    width: '14px',
                    height: '14px',
                    color: 'transparent',
                    backgroundColor: radioColor.static,
                    '&.Mui-checked': {
                      color: radioColor.static,
                      backgroundColor: radioColor.onChecked,
                    },
                  }}
                  disableRipple
                />
              }
              label={label}
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default RadioFilters;
