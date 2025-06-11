// CONFIGURABLE VALUES
const birthday = new Date('02/10/1982'); // YOUR BIRTHDAY MM/DD/YYYY
const lifeExpectancyYears = 80;
const goalProgressPercent = 42; // You can change this number to test Goal Bar % visually

// LIFE BAR
const currentYear = new Date().getFullYear();
const age = currentYear - birthday.getFullYear();
const yearsLeft = lifeExpectancyYears - age;
const lifePercent = (age / lifeExpectancyYears) * 100;
document.getElementById('lifeBar').style.width = `${lifePercent}%`;
document.getElementById('lifeRemaining').innerText = `${yearsLeft}yr Left`;
document.getElementById('lifeText').innerText = `${age} / ${lifeExpectancyYears}`;

// MONTH BAR
const monthsLived = age * 12 + (new Date().getMonth() - birthday.getMonth());
const totalMonths = lifeExpectancyYears * 12;
const monthsLeft = totalMonths - monthsLived;
const monthPercent = (monthsLived / totalMonths) * 100;
document.getElementById('monthBar').style.width = `${monthPercent}%`;
document.getElementById('monthText').innerText = `${monthsLeft} / ${totalMonths}`;

// WEEK BAR
const weeksLived = Math.floor(monthsLived * 4.345); // avg weeks per month
const totalWeeks = Math.floor(totalMonths * 4.345);
const weeksLeft = totalWeeks - weeksLived;
const weekPercent = (weeksLived / totalWeeks) * 100;
document.getElementById('weekBar').style.width = `${weekPercent}%`;
document.getElementById('weekText').innerText = `${weeksLeft} / ${totalWeeks}`;

// DAY BAR
const daysLived = Math.floor(weeksLived * 7);
const totalDays = Math.floor(totalWeeks * 7);
const daysLeft = totalDays - daysLived;
const dayPercent = (daysLived / totalDays) * 100;
document.getElementById('dayBar').style.width = `${dayPercent}%`;
document.getElementById('dayText').innerText = `${daysLeft} / ${totalDays}`;

// GOAL BAR
document.getElementById('goalBar').style.width = `${goalProgressPercent}%`;
document.getElementById('goalText').innerText = `${goalProgressPercent}% Complete`;
