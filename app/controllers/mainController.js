const mainController = {
    home: function (req, res) {
        res.render('home');
    },

    post: function (req, res) {
        console.log('POST request received at /postrequest');
        res.render('postrequest');
    }
}

export default mainController;