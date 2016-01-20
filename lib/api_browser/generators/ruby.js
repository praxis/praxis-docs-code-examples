angular.module('PraxisDocBrowser').config(function(ExamplesProvider) {

  function basicCode(action, info) {
    var code = 'require \'restclient\'\n\n';
    if (!info.endpoint) {
      //throw 'Endpoint not defined in schema';
    }
    if (action.headers) {
      code += 'headers = {\n';
      _.each(_.get(action, 'headers.type.attributes'), function(value, key) {
        code +=  '  ' + JSON.stringify(key) + ' => '+ JSON.stringify(value.example) + ',\n'
      });
      code += '}\n'
    }

    if (action.payload) {
      code += 'payload = {\n'
      _.each(_.get(action, 'payload.type.attributes'), function(value, key) {
        if (value.example) {
          code +=  '  :' + key + ' => '+ JSON.stringify(value.example) + ',\n';
        }
      })
      code += '}\n'
    }

    var params = '';
    _.each(_.get(action, 'params.type.attributes'), function(opts, name) {
      if (opts.source === 'query') {
        params += '  :' + name + ' => ' + JSON.stringify(opts.example) + ',\n';
      }
    });

    var signature = 'response = RestClient.' + action.urls[0].verb.toLowerCase() + ' \'' + info.endpoint + action.urls[0].example + '\'';

    if (action.payload) {
      signature += ', payload';
    }

    if (action.headers && params.length > 0) {
      code += 'headers[:params] = {\n' + params + '}\n';
      signature += ', headers'
    } else if (params.length > 0) {
      'params = {\n' + params + '}\n'
      signature += ', :params => params'
    } else {
      signature += ', headers'
    }

    code += signature;

    code += '\n\nputs response.inspect'

    return code;
  }

  ExamplesProvider.register('ruby', 'Ruby', function($compile, $context, Documentation) {
    "ngInject";
    return Documentation.info($context.version).then(function(info) {
      var template = '<pre highlight="ruby">' + basicCode($context.action, info) + '</pre>\n\n';

      return $compile(template);
    });
  });
});
