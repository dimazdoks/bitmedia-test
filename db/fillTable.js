const fillTable = async (db, t_name, data) => {
    if (!data) {
        console.log(`${t_name}.json file is empty...`);
    }

    let placeholders = Object.keys(data[0]).map((d) => '?').join(', ');
    console.log(placeholders);
    let stmt = db.prepare(`INSERT INTO ${t_name} VALUES (${placeholders});`);

    const map_promises = data.map(d => {
        //console.log(d);

        let keys = Object.keys(d);
        let values = keys.map(key => d[key]);
       // console.log(values);

        stmt.run(values);
    });

    await Promise.all(map_promises);
    await stmt.finalize();

    await console.log(`${t_name} table has been filled`);
};

module.exports = fillTable;