// src/DepartedFlightTime.js
import React, { useState } from 'react';

const DepartedFlightTime = () => {
  const [selectedOption, setSelectedOption] = useState('411');
  const [buttonClicked, setButtonClicked] = useState({
    'D/C': false,
    'C/OFF': false,
    'A/B': false,
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

  const handleCopyClick = async () => {
    try {
      await navigator.clipboard.writeText(outputText);
      alert('Copied to clipboard!');
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
      alert('Failed to copy to clipboard');
    }
  };
  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="departedFlightCode" className="mr-2 block">
          Departed Flight Code:
        </label>
        <select
          id="departedFlightCode"
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
          onClick={() => handleButtonClick('D/C')}
          disabled={buttonClicked['D/C']}
          className={`py-2 px-4 rounded mr-2 ${buttonClicked['D/C'] ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white'}`}
        >
          D/C
        </button>

        <button
          onClick={() => handleButtonClick('C/OFF')}
          disabled={buttonClicked['C/OFF']}
          className={`py-2 px-4 rounded mr-2 ${buttonClicked['C/OFF'] ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-orange-500 text-white'}`}
        >
          C/OFF
        </button>

        <button
          onClick={() => handleButtonClick('A/B')}
          disabled={buttonClicked['A/B']}
          className={`py-2 px-4 rounded mr-2 ${buttonClicked['A/B'] ? 'bg-gray-500 text-white cursor-not-allowed' : 'bg-red-500 text-white'}`}
        >
          A/B
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

export default DepartedFlightTime;
