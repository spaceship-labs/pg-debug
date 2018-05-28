var chalk = require('chalk');
var Query = require('pg').Query;

var submit = Query.prototype.submit;
Query.prototype.submit = function() {
  var text = this.text;
  var values = this.values;
  var query = values.reduce(function(q, v, i) {
    return q.replace('$' + (i + 1), chalk.blue(v));
  }, text);
  // eslint-disable-next-line no-console
  console.log(query);
  submit.apply(this, arguments);
};
