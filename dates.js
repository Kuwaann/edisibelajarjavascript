let date = new Date("2024-06-28T14:30:00");

function getCurrentDateTime(date) {
    let year = date.getFullYear();
    let month = String(date.getMonth() + 1).padStart(2, 0);
    let tanggal = String(date.getDate()).padStart(2, 0);
    let hours = String(date.getHours()).padStart(2, 0);
    let minutes = String(date.getMinutes()).padStart(2, 0);

    return year + "-" + month + "-" + tanggal + " " + hours + ":" + minutes;
};

console.log(getCurrentDateTime(date));