import React from "react";
import { ToggleButton } from "react-bootstrap";

const TimeToggle = ({ value, selectedTime, setTime }) => {
  return (
    <div className='d-grid gap-2'>
      <ToggleButton
        className='mb-2'
        id={"toggle-check" + value}
        data-test-id={"toggle-check" + value}
        size='lg'
        type='checkbox'
        variant='outline-primary'
        checked={value === selectedTime}
        value={value}
        onChange={(e) => setTime(value)}
      >
        {value}
      </ToggleButton>
    </div>
  );
};

export default TimeToggle;
