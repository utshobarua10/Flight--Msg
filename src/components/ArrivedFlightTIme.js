// src/FlightTime.js
import React, { useState } from 'react';

const FlightTime = () => {
  const [selectedOption, setSelectedOption] = useState('411');
  const [buttonClicked, setButtonClicked] = useState({
    'T/D': false,
    'C/ON': false,
    'D/O': false,
  });
  const [outputText, setOutputText] = useState('');

  const handleDropdownChange = (e) => {
    setSelectedOption(e.target.value);
  };

  const handleButtonClick = (buttonName) => {
    // Handle the button click
    setButtonClicked((prev) => ({ ...prev, [buttonName]: true }));

    // Get the current time (24-hour format)
    const currentTime = new Date().toLocaleTimeString('en-US', { hour12: false, hour: '2-digit', minute: '2-digit' });

    // Format the time as 'HHmm'
    const formattedTime = currentTime.replace(/:/g, '');

    // Generate the output text
    const output = `${selectedOption}\n${buttonName}: ${formattedTime} LT`;

    // Set the output text
    setOutputText(output);
  };

  const handleCopyClick = () => {
    // Handle copying the result
    const textarea = document.createElement('textarea');
    textarea.value = outputText;
    document.body.appendChild(textarea);
    textarea.select();
    document.execCommand('copy');
    document.body.removeChild(textarea);
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="arrivedFlightCode" className="mr-2 block">
          Arrived Flight Code:
        </label>
        <select
          id="arrivedFlightCode"
          value={selectedOption}
          onChange={handleDropdownChange}
          className="border p-2 rounded"
        >
          <option value="411">411</option>
          <option value="412">412</option>
          <option value="415">415</option>
          <option value="416">416</option>
          <option value="419">419</option>
          <option value="420">420</option>
        </select>
      </div>

      <div className="mb-4">
        <button
          onClick={() => handleButtonClick('T/D')}
          disabled={buttonClicked['T/D']}
          className={`py-2 px-4 rounded mr-2 ${buttonClicked['T/D'] ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          T/D
        </button>

        <button
          onClick={() => handleButtonClick('C/ON')}
          disabled={buttonClicked['C/ON']}
          className={`py-2 px-4 rounded mr-2 ${buttonClicked['C/ON'] ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-orange-500 text-white'}`}
        >
          C/ON
        </button>

        <button
          onClick={() => handleButtonClick('D/O')}
          disabled={buttonClicked['D/O']}
          className={`py-2 px-4 rounded mr-2 ${buttonClicked['D/O'] ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-red-500 text-white'}`}
        >
          D/O
        </button>
      </div>

      <div className="mb-4">
        <label className="block mb-2">Output:</label>
        <div className="flex items-center">
          <textarea
            readOnly
            value={outputText}
            style={{ width: '300px' }} // Set the width to 300px
            className="border p-2 mr-2"
          />
          <button onClick={handleCopyClick} className="bg-green-500 text-white py-2 px-4 rounded">
            Copy
          </button>
        </div>
      </div>
    </div>
  );
};

export default FlightTime;
