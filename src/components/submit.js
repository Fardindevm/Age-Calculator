import { useEffect, useState } from 'react'
import Calculate from './calculate'
const months30 = [4,6,9,11]

export default function Button ({
  dayValue, monthValue, yearValue,
  setDays, setMonths, setYears,
  setError, setShowButton, error,
  setCalculate, calculate, setMax30Days,
  max30days, setLeapYear, leapYear,
  showButton
}) {
  // const months31 = [1,3,5,7,8,10,12]
  const [localShouldCalculate, setLocalShouldCalculate] = useState(false);

  const date = new  Date()
  const year = date.getFullYear()
  useEffect(() => {
    if (showButton) {

  let newError = {}

  if (Number(monthValue) === 2) {
    const isLeapYear = (Number(yearValue) % 4 === 0 && Number(yearValue) % 100 !== 0) || (Number(yearValue) % 400 === 0);
    const maxDaysInFebruary = isLeapYear ? 29 : 28;
    setLeapYear(false);

    if (Number(dayValue) > maxDaysInFebruary) {
      newError.dayValue = "Must be a valid date";
      setLeapYear(false);
    } else if (maxDaysInFebruary === 29) {
      setLeapYear(true);
    } 
  } else if (months30.includes(Number(monthValue))) {

      setMax30Days(true)

    if (Number(dayValue) === 31) {
        newError.dayValue = "Must be a valid date"
    } else if (Number(dayValue) > 30){
        newError.dayValue = "Must be a valid day"
    }
  } else {
    setMax30Days(false)
    if (Number(dayValue) > 31){
        newError.dayValue = "Must be a valid day"
    }
  }
  
  if (Number(yearValue) >= year + 1) {
    newError.yearValue = "Must be in the past"
  } 
   if (Number(monthValue) > 12) {
    newError.monthValue = "Must be a valid month"
  }

  if (!Number(dayValue.trim())) {
    newError.dayValue = "This field is required"
  }
  if (!Number(monthValue.trim())) {
    newError.monthValue = "This field is required"
  }
  if (!Number(yearValue.trim())) {
    newError.yearValue = "This field is required"
  }

  if (Object.keys(newError).length > 0) {
    setError(newError)
    setCalculate(false)
    setLocalShouldCalculate(false);
  } else {
    setError({})
    setCalculate(true)
    setLocalShouldCalculate(true);
  }

  setShowButton(false)
}
}, [dayValue, monthValue, yearValue, year, setError, setShowButton, setCalculate, max30days, setMax30Days, setLeapYear, error, showButton])




return (
  <>

    {(calculate || localShouldCalculate) && 
      <Calculate 
        dayValue={dayValue} 
        monthValue={monthValue} 
        yearValue={yearValue} 
        setDays={setDays}
        setMonths={setMonths}
        setYears={setYears}
        setError={setError}
        error={error}
        max30days={max30days}
        leapYear={leapYear}
        setCalculate={setCalculate}
        setLocalShouldCalculate={setLocalShouldCalculate}
      />
    }
  </>
);
}