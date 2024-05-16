import { Box, RadioGroup, FormControlLabel, Radio } from '@mui/material';

// const RadioColorCard = ({ onColorChange, currentPriority }) => {
  const RadioColorCard = () => {

  const radio = [
 
    {
      value: 'Low',
      radioColor: {
        static: 'var(--color-blue)',
        checked: 'var(--datepicker-checked)',
      },
    },
    {
      value: 'Medium',
      radioColor: {
        static: 'var(--color-pink)',
        checked: 'var(--datepicker-checked)',
      },
    },
    {
      value: 'High',
      radioColor: {
        static: 'var(--color-green)',
        checked: 'var(--datepicker-checked)',
        additional: 'var(--datepicker-checked)',
      },
    },
    {
      value: 'Without',
      radioColor: {
        static: 'var(--datepicker-grey-lable)',
        checked: 'var(--datepicker-checked)',
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
        // defaultValue={currentPriority}
        name="radio-buttons-group"
        // onChange={evt => onColorChange(evt.target.value)}
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

//green+

//  --datepicker-checked(#151512)
//  --datepicker-checked(#ffffff;)
//  --datepicker-checked(#ffffff;)



// --datepicker-grey-lable: rgba(255, 255, 255, 0.3);
// --datepicker-grey-lable: rgba(22, 22, 22, 0.3);
// --datepicker-grey-lable: rgba(22, 22, 22, 0.3);