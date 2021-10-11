const request = require("request");

class UserController {
    show(req, res, next) {
        // render page here
        // res.json("hhahah");

        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
            url: 'http://127.0.0.1:3001' + '/customer',
        };
        request(options, function(error, response, body) {
            if (error) console.log(error);
            else {
                const allCustomers = JSON.parse(body);
                console.log(allCustomers);
                // res.json(allCustomers);
                res.render("./customer/list-customer.ejs", { allCustomers: allCustomers});
            }
        });

    }

    edit(req, res, next) {
        
    }
};

module.exports = new UserController;
