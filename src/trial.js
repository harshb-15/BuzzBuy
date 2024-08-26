const fs = require('fs');
fetch('https://fakestoreapi.com/products')
    .then((res) => res.json())
    .then((json) => {
        console.log(json);
        fs.writeFile(
            './data/data.json',
            JSON.stringify(json),
            (error) => console.log(error)
        );
    });
