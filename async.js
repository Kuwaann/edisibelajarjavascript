function nyobaAsync(callback) {
    setTimeout(function () {
        const data = "Ini adalah datanya.";
        callback(data);
    }, 2000);
}

function tampilData(data) {
    console.log("Data: " + data);
}

nyobaAsync(tampilData);