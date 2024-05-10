import React, { useState, forwardRef } from 'react';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import ReactDatePicker from 'react-datepicker';

import sprite from '../../assets/sprite.svg';

// import css from './Calendar.module.css'

import './styles.css'

export default function Calendar() {
  const [startDate, setStartDate] = useState(new Date());

  const CustomInput = forwardRef(({ value, onClick, className }, ref) => (
    <button className={className} type="button" onClick={onClick} ref={ref}>
      {value}
    </button>
  ));

  return (
    <>   
      <ReactDatePicker
        locale="en-GB"
        selected={startDate}
        name='name'
        onChange={(date) => setStartDate(date)}
        minDate={new Date()}
        customInput={<CustomInput value={startDate}  />}
        dateFormat="MMMM d"
    
      />

      <svg width={18} height={18}>
        <use href={`${sprite}#icon-chevron_down`} />
      </svg>
     </>
  );
}



// return (
//     <div className={css.calendar_wrap}>

   
//     <div className={css.calendar_div}>
//       <DatePicker
//         locale="en-GB"
//         selected={startDate}
//         name='name'
//         onChange={(date) => setStartDate(date)}
//         minDate={new Date()}
//         customInput={<CustomInput value={startDate} className={css.calendar} />}
//         dateFormat="MMMM d"
//         calendarClassName={css.calendar_color}

//       />

//       <svg width={18} height={18}>
//         <use href={`${sprite}#icon-chevron_down`} />
//       </svg>
//       </div> </div>
//   );
// }