function calculateTotalHoursWorked(attendanceData, employeeName) {
    let totalHoursWorked = 0;
    let filteredPresensi = attendanceData.filter((element) => element.name == employeeName && element.date.getFullYear() == 2024 && element.date.getMonth() == 5);
    filteredPresensi.forEach(element => {
        let splittedStart = element.startTime.split(":");
        let totalMenitStart = splittedStart[0] * 60 + parseFloat(splittedStart[1]);

        let splittedEnd = element.endTime.split(":");
        let totalMenitEnd = splittedEnd[0] * 60 + parseFloat(splittedEnd[1]);

        let durasiMenit = totalMenitEnd - totalMenitStart;
        let durasiJam = durasiMenit / 60;

        totalHoursWorked += durasiJam;
    });

    return totalHoursWorked;
}

function getMissedDays(attendanceData, employeeName) {
    let missedDays = [];
    let filteredPresensi = attendanceData.filter((element) => element.name == employeeName && element.date.getFullYear() == 2024 && element.date.getMonth() == 5).map((element) => element.date.getDate());

    for (let i = 1; i <= 30; i++) {
        if (!filteredPresensi.includes(i)) {
            missedDays.push(new Date("2024-06-" + i).getDate());
        }
    }

    return missedDays;
}

let presensi = [
    {
        name: "Alice",
        date: new Date("2024-06-01"),
        startTime: "08:00",
        endTime: "17:00",
    },
    {
        name: "Bob",
        date: new Date("2024-06-01"),
        startTime: "08:30",
        endTime: "18:00",
    },
    {
        name: "Charlie",
        date: new Date("2024-06-02"),
        startTime: "09:00",
        endTime: "17:30",
    },
    {
        name: "Alice",
        date: new Date("2024-06-02"),
        startTime: "08:15",
        endTime: "16:45",
    },
    {
        name: "Bob",
        date: new Date("2024-06-03"),
        startTime: "08:45",
        endTime: "17:15",
    },
    {
        name: "Charlie",
        date: new Date("2024-06-03"),
        startTime: "09:30",
        endTime: "18:00",
    },
    {
        name: "Alice",
        date: new Date("2024-06-04"),
        startTime: "08:00",
        endTime: "17:00",
    },
    {
        name: "Bob",
        date: new Date("2024-06-04"),
        startTime: "08:30",
        endTime: "18:00",
    },
    {
        name: "Charlie",
        date: new Date("2024-06-05"),
        startTime: "09:00",
        endTime: "17:30",
    },
    {
        name: "Alice",
        date: new Date("2024-06-05"),
        startTime: "08:15",
        endTime: "16:45",
    },
]

console.log(getMissedDays(presensi, "Alice"));