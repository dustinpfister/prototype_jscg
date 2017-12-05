var http = require('http'),
fs = require('fs'),
path = require('path'),

// hard coded options only for now
root = './public',
port = 3000,
host = 'localhost',

log = function (mess) {

    console.log(mess);

},

fileCheck = function (p, method) {

    method = method || 'GET';

    return new Promise(function (done, fail) {

        // get stats of that path
        fs.lstat(p, function (e, stat) {

            if (e) {

                fail(e)

            }

            if (stat) {

                // if it is not a file append index.html to path, and try that
                if (!stat.isFile()) {
                    p = path.join(p, method === 'GET' ? 'index.html' : 'index.json');
                }

                // try to read the path
                fs.readFile(p, 'binary', function (e, file) {

                    if (e) {

                        fail(e);

                    }

                    done(file);

                });

            }

        });

    });

},

// ger request handler
get = function (req, res) {

    fileCheck(path.join('./public', req.url), 'GET').then(function (file) {

        res.writeHead(200);
        res.write(file, 'binary');
        res.end();

    }).catch (function (e) {

        res.writeHead(200);
        res.write('<p>' + JSON.stringify(e) + '<\/p>', 'binary');
        res.end()

    });

},

// post requests
post = function (req, res) {

    fileCheck(path.join('./private', req.url), 'POST')
    .then(function (file) {

        res.end(JSON.stringify({

                pass: true,
                e: null,
                unlocked: file

            }));
    })
    .catch (function (e) {

        res.end(JSON.stringify({

                pass: false,
                e: e

            }));

    });

};

http.createServer(function (req, res) {

    // if get, use get handler
    if (req.method === 'GET') {

        get(req, res);

    }

    // if post call post handler
    if (req.method === 'POST') {

        post(req, res);

    }

    // no other methods supported, just end the request
    if (req.method != 'GET' && req.method != 'POST') {

        res.end();
    }

}).listen(port, host, function () {

    console.log('looks like JSCG is live.');
    console.log('port: ' + port);
    console.log('host: ' + host);

});
