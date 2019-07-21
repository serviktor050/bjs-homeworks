const setDailyRhythm = (wakeUpTime, bedTime) => {
    const goodMorning = setAlarm(wakeUpTime, () => {alert('Подъем, Вася!')});
    const goodNight = setAlarm(bedTime, () => {alert('Доброй ночи, Вася!')});
    setInterval(goodMorning, 1000);
    setInterval(goodNight, 1000);
}
  
const setAlarm = (time, callback) => {
    return (timeAtTheMomet = new Date()) => {
        timeAtTheMomet.setMilliseconds(0,0);
        if (timeAtTheMomet.getTime() === (new Date()).setHours(time.substring(0,2), time.substring(3),0,0)) {callback()};
    }
}

setDailyRhythm('08:00', '23:30')