import './App.css';
import arrow_icon from './images/icon-arrow.svg'
import { useState } from 'react';
import Button from './components/submit'
// import { useEffect } from 'react';

function App() {

  const [errors, setError] = useState({}); 
  const [showButton, setShowButton] = useState(false);
  const [days, setDays] = useState("--")
  const [months, setMonths] = useState("--")
  const [years, setYears] = useState("--")
  const [dayValue, setDayValue] = useState('');
  const [monthValue, setMonthValue] = useState('');
  const [yearValue, setYearValue] = useState('');
  const [calculate, setCalculate] = useState(false);
  const [max30days, setMax30Days] = useState(null)
  const [leapYear, setLeapYear] = useState(null)

  const handleSubmit = (e) => {
    e.preventDefault()
    setShowButton(true)
  }

  const handleChange = (condition) => {
    setShowButton(condition)
  }

    // useEffect(() => {
    //   console.log("Errors in App.js:", errors);
    // }, [errors]);

  return (
    <div className='App'>
      <main className="main">
        <div className='date'>
          <label className={`date-label ${Object.keys(errors).length > 0 ? "label-error": ""}`}>DAY
            <input className={`date-input ${Object.keys(errors).length > 0 ? "error": ""}`}  
              type="text" 
              name='label'
              maxLength="2" 
              placeholder='DD' 
              value={dayValue}
              onChange={(e) => setDayValue(e.target.value)}
              />
            {errors.dayValue && <span className="span-error">{errors.dayValue}</span>}
          </label>
          <label className={`date-label ${Object.keys(errors).length > 0 ? "label-error": ""}`}>MONTH
            <input className={`date-input ${Object.keys(errors).length > 0  ? "error": ""}`}
               type="text"
               name='label'
               maxLength="2" 
               placeholder='MM'
               value={monthValue}
               onChange={(e) => setMonthValue(e.target.value)}
               />
            {errors.monthValue && <span className="span-error">{errors.monthValue}</span>}
          </label>
          <label className={`date-label ${Object.keys(errors).length > 0 ? "label-error": ""}`}>YEAR
            <input className={`date-input ${Object.keys(errors).length > 0 ? "error": ""}`}
              type="text"
              name='label' 
              maxLength="4" 
              placeholder='YYYY'
              value={yearValue}
              onChange={(e) => setYearValue(e.target.value)}
              />
            {errors.yearValue && <span className="span-error">{errors.yearValue}</span>}
          </label>
        </div>
        <div className='arrow-hr'>
          <hr className='hr'/>
          <button 
            className='calculate'
            type='submit' 
            onClick={(e) => handleSubmit(e)}>
              <img src={arrow_icon} alt='arrow_icon' className='arrow_icon'/>
          </button>
        </div>
        {<Button 
          dayValue={dayValue} 
          monthValue={monthValue} 
          yearValue={yearValue} 
          setDays={setDays}
          setMonths={setMonths}
          setYears={setYears}
          setError={setError}
          error={errors}
          setShowButton={handleChange}
          setCalculate={setCalculate}
          calculate={calculate}
          setMax30Days={setMax30Days}
          max30days={max30days}
          setLeapYear={setLeapYear}
          leapYear={leapYear}
          showButton={showButton}  // Pass showButton as a prop

          />}
        <div className='calculated'>
          <h1 className='dates'><span className='date-span'>{years}</span> years</h1>
          <h1 className='dates'><span className='date-span'>{months}</span> months</h1>
          <h1 className='dates'><span className='date-span'>{days}</span> days</h1>
        </div>
      </main>
    </div>
  );
}

export default App;
