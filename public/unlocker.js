
// build list of ids of locked content
var locked = document.getElementsByClassName('jscg-locked'),
ids = [];
[].forEach.call(locked, function (el) {

    ids.push(el.id);

});

// post it
postIt({

    data: JSON.stringify(ids),
    done: function (res) {

        var obj = JSON.parse(res.response),
        unlocked;

        if (obj.pass) {

            unlocked = JSON.parse(obj.unlocked);

            unlocked.forEach(function (asset) {

                var el = document.getElementById(asset.id);

                if (el) {

                    el.innerHTML = asset.content;

                }

            })

        }

    }

});
