console.log("App started");
const current_date = new Date();
const n_y = new Date(`${current_date.getFullYear()+1}-01-01`);
var diff = Math.abs(n_y-current_date);
console.log("Days left before The New Year: ",diff / 1000/3600/24)
