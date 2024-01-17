module.exports = (req, res) => {
    if (req.method === 'GET') {
        res.json([
            {name: 'Ryan', location: 'Sukodono'},
            {name: 'Bagus', location: 'Sidoarjo'}
        ]);
    } else {

    }
}