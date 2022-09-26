let now = new Date().toLocaleString("en-us", {
  month: "long",
  // day: "numeric",
  // year: "numeric",
  timeZone: "Asia/Kolkata",
  weekday: "long",
  hour: "numeric",
  minute: "numeric",
  second: "numeric",
  hour12: true,
  dayPeriod: "short",
  day:"2-digit",
  year:"2-digit"
 


});
console.log(now);

