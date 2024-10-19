
import { useEffect } from "react";

export default function Calculate ({dayValue, monthValue, yearValue, setDays, setMonths, setYears, setError, error, max30days, leapYear, setLocalShouldCalculate, setCalculate}) {
 

  useEffect(() => {
    const date = new Date()
    const day = date.getDate()
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    let calculated_year = parseFloat(Number(year - yearValue))
    let calculated_month = parseFloat(Number(month - monthValue))
    let calculated_day= parseFloat(Number(day - dayValue))

  if (calculated_day < 0) {
    // hesab kardan roz 27m tavalodam bashe 25 bashim
    if (max30days) {
      calculated_day = parseFloat(Number(30 - dayValue + day))
    } else if (Number(monthValue) === 2) {
        if (leapYear) {
          calculated_day = parseFloat(Number(29 - dayValue + day))
        } else {
          calculated_day = parseFloat(Number(28 - dayValue + day))
        }
    } else {
      calculated_day = parseFloat(Number(31 - dayValue + day))
    }
      calculated_month --

      if (calculated_month <= 0) {
        calculated_month = parseFloat(Number(12 + calculated_month))
        calculated_year --
      }
  } 

  // borj 4 basham alan borj 5 1403 bashim
  if (calculated_month < 0) {
    calculated_month = parseFloat(Number(12 - monthValue + month))
    calculated_year--
  }

  if (calculated_year < 0) {
    const newError = {}
    newError.yearValue = "Must be a valid date"
    setError(newError)
  } else {
    setDays(calculated_day)
    setMonths(calculated_month)
    setYears(calculated_year)
  }
  
  setLocalShouldCalculate(false)
  setCalculate(false)
}, [dayValue, monthValue, yearValue, setDays, setMonths, setYears, max30days, leapYear, setCalculate, setError, setLocalShouldCalculate]);
}