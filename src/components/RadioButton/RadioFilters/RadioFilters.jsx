import { Box, FormControlLabel, Radio, RadioGroup } from '@mui/material';
// import css from './RadioFilters.module.css';

const RadioFilters = ({ onFilterChange, onClick }) => {
  const radioButtons = [
    {
      value: 'Without',
      label: 'Without priority',
      labelColor: 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: 'rgba(22, 22, 22, 0.3)',
        onChecked: 'rgba(22, 22, 22, 0.3)',
      },
    },
    {
      value: 'Low',
      label: 'Low',
      labelColor: 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: '#8fa1d0',
        onChecked: '#151512',
      },
    },
    {
      value: 'Medium',
      label: 'Medium',
      labelColor: 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: '#e09cb5;',
        onChecked: '#151512',
      },
    },
    {
      value: 'High',
      label: 'High',
      labelColor: 'rgba(255, 255, 255, 0.5)',
      radioColor: {
        static: '#bedbb0',
        onChecked: ' #161616',
      },
    },
  ];
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
        defaultValue="colorFilter"
        name="radio-buttons-group"
        onChange={evt => {
          onFilterChange(evt.target.value);
        }}
        sx={{ display: 'flex', flexDirection: 'row', gap: '8px' }}
      >
        {/* <FormControlLabel
          value=""
          control={<Radio sx={{ display: 'none' }} />}
          label={<p className={css.text}>Show all</p>}
          onClick={onClick}
        /> */}
        {radioButtons.map(button => {
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
                //   letterSpacing: '-0.24px',
                  color: labelColor,
                },
              }}
              control={
                <Radio
                //   onClick={onClick}
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
