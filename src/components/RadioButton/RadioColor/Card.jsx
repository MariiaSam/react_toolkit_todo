import React, { useState } from 'react';
import RadioColorCard from './RadioColorCard';

const Card = ({ currentPriority = 'Without' }) => {
  // Припустимо, що ви маєте деякі початкові значення для стану

  // Використовуємо useState для створення стану для пріоритету

  const [priority, setPriority] = useState(currentPriority);

  //в тіло return, priority, умова якщо по зміні картки дотриано умови в передачі в body(title, descr,priority, deadline ),  =>  onColorChange={setPriority}
  return (
    <div>
      {/* Передаємо функцію setPriority та поточне значення пріоритету в RadioColorCard */}
      <RadioColorCard
        onColorChange={setPriority}
        currentPriority={currentPriority}
      />
    </div>
  );
};

export default Card;




//Modal - EditCard AddCard