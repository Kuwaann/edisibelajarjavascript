function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const data = "Ini adalah datanya";
            if (data) {
                resolve(data);
            }
            else {
                reject("Gagal mengambil data");
            }
        }, 2000);
    })
}

function printData(data) {
    console.log(data);
}

fetchData()
    .then((data) => {
        printData(data);
    })
    .catch((error) => console.log(error));