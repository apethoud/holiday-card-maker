import { useState, useEffect } from "react";

export default function useHolidayList(durationType, durationValue) {
  const [holidayList, setHolidayList] = useState([]);

  useEffect(() => {
    async function getHolidays() {
      const durationParam =
        durationType && durationValue
          ? `&${durationType}=${durationValue}`
          : "";
      const url = `https://holidays.abstractapi.com/v1/?api_key=37af845ce479406b8128fad7f640bb0d&country=US&year=2020${durationParam}`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      setHolidayList(data);
    }
    // getHolidays(); // Commenting this out prevents unnecessary api calls while developing.
  }, [durationType, durationValue]);

  return holidayList;
}
