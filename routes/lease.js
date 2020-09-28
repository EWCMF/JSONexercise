var express = require('express');
var fs = require('fs');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('lease', { title: 'Leasing' });
});

router.post('/success', function(req, res, next) {
    fs.readFile("./public/data/samlet.json", function(err, data) {
        if (err) {
            console.log(err.message);
            return;
        }
        let json = JSON.parse(data);
        let navn = req.body.navn;
        let farve = req.body.farve;
        let type = req.body.type;
        
        json.biler.push({"navn": navn, "farve": farve, "type": type});

        console.log(JSON.stringify(json.biler));

        fs.writeFile("./public/data/samlet.json", JSON.stringify(json, null, 4), function(err) {
            if (err) {
                console.log(err.message);
                return;
            }
            console.log(JSON.stringify(json));
        })
    });
    

    res.render('success', { title: 'Success'});
  });

module.exports = router;
