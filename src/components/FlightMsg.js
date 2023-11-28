// src/FlightMsg.js
import React, { useState } from 'react';

const FlightMsg = () => {
  const [formDataArrived, setFormDataArrived] = useState({
    flt: '411',
    sta: '',
    t_d: '',
    c_o: '',
    d_o: '',
  });
  const getCurrentDateFormatted = () => {
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.toLocaleString('default', { month: 'short' });
    const year = currentDate.getFullYear().toString().slice(-2);

    return `${day} ${month} ${year}`;
  };


  const [formDataDeparted, setFormDataDeparted] = useState({
    flt: '411',
    date: getCurrentDateFormatted(),  // Added Date field
    stat: '',
    reg: '',   // Added REG field
    pic: '',   // Added PIC field
    std: '',
    d_c: '',
    c_o: '',
    a_b: '',
    bag: '',
    mail: '',
    cargo: '',
    rushBag: '',
    ebt: '',
    fireArms: '',
    vip: '',
    cip: '',
    priority: '',
    wchr: '',
    n_s: '',
    g_s: '',
    fuel: '',
    tripFuel: '',
  });

  const [outputText, setOutputText] = useState('');

  const handleChangeArrived = (e) => {
    const { name, value } = e.target;
    setFormDataArrived((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleChangeDeparted = (e) => {
    const { name, value } = e.target;
    setFormDataDeparted((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Your existing handleSubmit logic

    // Generate the block letter format
    const blockLetterFormat = `${formDataDeparted.date}\n2A-${formDataDeparted.flt}(CGP-DAC)\nREG: ${formDataDeparted.reg}\nPIC: ${formDataDeparted.pic}\n${formDataDeparted.stat}

FLT :  ${formDataArrived.flt} 
STA :  ${formDataArrived.sta} LT
T/D :  ${formDataArrived.t_d} LT
C/O :  ${formDataArrived.c_o} LT
D/O :  ${formDataArrived.d_o} LT

*FLT : ${formDataDeparted.flt} 
STD  :  ${formDataDeparted.std} LT
D/C  :  ${formDataDeparted.d_c} LT
C/O  :  ${formDataDeparted.c_o} LT
A/B  :  ${formDataDeparted.a_b} LT

BAG- ${formDataDeparted.bag || 'nill'}
Mail- ${formDataDeparted.mail || 'nill'}
Cargo- ${formDataDeparted.cargo || 'nill'}
Rush Bag- ${formDataDeparted.rushBag || 'nill'}
EBT- ${formDataDeparted.ebt || 'nill'}
Fire Arms- ${formDataDeparted.fireArms || 'nill'}
VIP- ${formDataDeparted.vip || 'nill'}
CIP- ${formDataDeparted.cip || 'nill'}
Priority- ${formDataDeparted.priority || 'nill'}
WCHR- ${formDataDeparted.wchr || 'nill'}
N/S- ${formDataDeparted.n_s || 'nill'}
G/S- ${formDataDeparted.g_s || 'nill'}
FUEL- ${formDataDeparted.fuel} KG
TRIP FUEL- ${formDataDeparted.tripFuel} KG
REGARDS
UTSHO BARUA
EXECUTIVE
CGP APT
`;

    // Set the output text
    setOutputText(blockLetterFormat.toUpperCase());
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
    <div className="max-w-3xl mx-auto p-4 space-y-8">
      <h2 className="text-2xl font-bold">Flight Message Form</h2>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-4">
        {/* Arrived Section */}
        <div className="space-y-4">
          <label>
            FLT:
            <select
              name="flt"
              value={formDataArrived.flt}
              onChange={handleChangeArrived}
              className="border p-2 rounded w-full"
            >
              <option value="411">411</option>
              <option value="412">412</option>
              <option value="415">415</option>
              <option value="416">416</option>
              <option value="419">419</option>
              <option value="420">420</option>

              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            STA:
            <input
              type="text"
              name="sta"
              value={formDataArrived.sta}
              onChange={handleChangeArrived}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            T/D:
            <input
              type="text"
              name="t_d"
              value={formDataArrived.t_d}
              onChange={handleChangeArrived}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            C/O:
            <input
              type="text"
              name="c_o"
              value={formDataArrived.c_o}
              onChange={handleChangeArrived}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            D/O:
            <input
              type="text"
              name="d_o"
              value={formDataArrived.d_o}
              onChange={handleChangeArrived}
              className="border p-2 rounded w-full"
            />
          </label>
        </div>

        {/* Departed Section */}
        <div className="space-y-4">
          <label>
            FLT:
            <select
              name="flt"
              value={formDataDeparted.flt}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            >
              <option value="411">411</option>
              <option value="412">412</option>
              <option value="415">415</option>
              <option value="416">416</option>
              <option value="419">419</option>
              <option value="420">420</option>

              {/* Add more options as needed */}
            </select>
          </label>
          <label>
            Date:
            <input
              type="text"
              name="date"
              value={formDataDeparted.date}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            REG:
            <input
              type="text"
              name="reg"
              value={formDataDeparted.reg}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            PIC:
            <input
              type="text"
              name="pic"
              value={formDataDeparted.pic}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Status
            <input
              type="text"
              name="stat"
              value={formDataDeparted.stat}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>


          <label>
            STD:
            <input
              type="text"
              name="std"
              value={formDataDeparted.std}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            D/C:
            <input
              type="text"
              name="d_c"
              value={formDataDeparted.d_c}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            C/O:
            <input
              type="text"
              name="c_o"
              value={formDataDeparted.c_o}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            A/B:
            <input
              type="text"
              name="a_b"
              value={formDataDeparted.a_b}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            BAG:
            <input
              type="text"
              name="bag"
              value={formDataDeparted.bag}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Mail:
            <input
              type="text"
              name="mail"
              value={formDataDeparted.mail}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Cargo:
            <input
              type="text"
              name="cargo"
              value={formDataDeparted.cargo}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Rush Bag:
            <input
              type="text"
              name="rushBag"
              value={formDataDeparted.rushBag}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            EBT:
            <input
              type="text"
              name="ebt"
              value={formDataDeparted.ebt}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Fire Arms:
            <input
              type="text"
              name="fireArms"
              value={formDataDeparted.fireArms}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            VIP:
            <input
              type="text"
              name="vip"
              value={formDataDeparted.vip}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            CIP:
            <input
              type="text"
              name="cip"
              value={formDataDeparted.cip}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            Priority:
            <input
              type="text"
              name="priority"
              value={formDataDeparted.priority}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            WCHR:
            <input
              type="text"
              name="wchr"
              value={formDataDeparted.wchr}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            N/S:
            <input
              type="text"
              name="n_s"
              value={formDataDeparted.n_s}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            G/S:
            <input
              type="text"
              name="g_s"
              value={formDataDeparted.g_s}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            FUEL:
            <input
              type="text"
              name="fuel"
              value={formDataDeparted.fuel}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
          <label>
            TRIP FUEL:
            <input
              type="text"
              name="tripFuel"
              value={formDataDeparted.tripFuel}
              onChange={handleChangeDeparted}
              className="border p-2 rounded w-full"
            />
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded">
          Submit
        </button>
      </form>

      {/* Output Box */}
      <div>
        <h2 className="text-2xl font-bold">Output</h2>
        <textarea readOnly value={outputText} className="border p-2 w-full h-96"></textarea>
        <button type="button" onClick={handleCopyClick} className="bg-green-500 text-white py-2 px-4 rounded mt-4">
          Copy
        </button>
      </div>
    </div>
  );
};

export default FlightMsg;
