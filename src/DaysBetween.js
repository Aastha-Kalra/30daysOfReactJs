const DaysBetween = (d1,d2) => {
    let date1 = new Date(d1)
    let date2 = new Date(d2)
    let diff = Math.abs(date1-date2)
    return diff / (24*60*60*1000)

};
console.log(DaysBetween("2024-5-1", "2024-5-21"));