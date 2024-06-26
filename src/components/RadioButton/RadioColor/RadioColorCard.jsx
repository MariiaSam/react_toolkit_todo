import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';

const RadioColorCard = ({ onColorChange, currentPriority }) => {
  const radio = [
    {
      value: 'Without',
      radioColor: {
        static: 'rgba(255, 255, 255, 0.5)',
        checked: 'rgba(22, 22, 22, 0.3)',
      },
    },
    {
      value: 'Low',
      radioColor: {
        static: '#8fa1d0',
        checked: 'rgba(22, 22, 22, 0.3)',
      },
    },
    {
      value: 'Medium',
      radioColor: {
        static: '#e09cb5',
        checked: 'rgba(22, 22, 22, 0.3)',
      },
    },
    {
      value: 'High',
      radioColor: {
        static: '#bedbb0',
        checked: 'rgba(22, 22, 22, 0.3)',
        additional: 'rgba(22, 22, 22, 0.3)',
      },
    },
  ];
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        width: '100px',
      }}
    >
      <RadioGroup
        aria-labelledby="radio-buttons-group-label"
        defaultValue={currentPriority}
        name="radio-buttons-group"
        onChange={evt => onColorChange(evt.target.value)}
        sx={{ display: 'flex', gap: '8px' }}
        row
      >
        {radio.map(button => {
          const { value, radioColor } = button;
          return (
            <FormControlLabel
              key={value}
              value={value}
              sx={{ margin: '0' }}
              control={
                <Radio
                  sx={{
                    width: '14px',
                    height: '14px',
                    color: 'transparent',
                    backgroundColor: radioColor.static,
                    '&.Mui-checked': {
                      color: radioColor.static,
                      backgroundColor: radioColor.checked,
                    },
                  }}
                  disableRipple
                />
              }
            />
          );
        })}
      </RadioGroup>
    </Box>
  );
};

export default RadioColorCard;
