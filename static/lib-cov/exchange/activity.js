// instrument by jscoverage, do not modifly this file
(function () {
  var BASE;
  if (typeof global === 'object') {
    BASE = global;
  } else if (typeof window === 'object') {
    BASE = window;
  } else {
    throw new Error('[jscoverage] unknow ENV!');
  }
  if (!BASE._$jscoverage) {
    BASE._$jscoverage = {};
    BASE._$jscoverage_cond = {};
    BASE._$jscoverage_done = function (file, line, express) {
      if (arguments.length === 2) {
        BASE._$jscoverage[file][line] ++;
      } else {
        BASE._$jscoverage_cond[file][line] ++;
        return express;
      }
    };
    BASE._$jscoverage_init = function (base, file, lines) {
      var tmp = [];
      for (var i = 0; i < lines.length; i ++) {
        tmp[lines[i]] = 0;
      }
      base[file] = tmp;
    };
  }
})();
_$jscoverage_init(_$jscoverage, "lib/exchange/activity.js",[13,14,18,19,23,30,33,38,138]);
_$jscoverage_init(_$jscoverage_cond, "lib/exchange/activity.js",[13,18]);
_$jscoverage["lib/exchange/activity.js"].source = ["/**"," * Create Activity"," *"," * The prototype must be declareed prior to being initalized."," *"," * @param name {String} Unique identifier for Activity, used to configure queue names, correlation keys, etc."," * @returns {Activity}"," * @constructor"," */","function Activity( name ) {","","  // Make sure context is correct otherwise we could screw up the global scope.","  if( !( this instanceof Activity ) ) {","    return Activity.create( name );","  }","","  // No name.","  if( 'string' !== typeof name ) {","    return this.error( new Error( 'The Activity name must be set.' ) );","  }","","  // Lockin Activity Instance Name","  Object.defineProperty( this, 'name', {","    value: name,","    enumerable: true,","    configurable: false,","    writable: false","  });","","  this.debug( 'Initializing Activity [%s] for [%s] exchange.', name, this.exchange.name );","","  // @chainable","  return this;","","}","","// Activity Instance Properties.","Object.defineProperties( Activity.prototype, {","  name: {","    /**","     * Activity Name","     *","     * Prototype is considered undeclareed until set.","     *","     */","    value: undefined,","    enumerable: true,","    configurable: true,","    writable: true","  },","  type: {","    /**","     * Activity Group / Type","     *","     * Prototype is considered undeclareed until set.","     *","     */","    value: 'activity',","    enumerable: true,","    configurable: true,","    writable: true","  },","  connection: {","    /**","     * Activity Connection","     *","     * Prototype is considered undeclareed until set.","     *","     */","    value: undefined,","    enumerable: true,","    configurable: true,","    writable: true","  },","  exchange: {","    /**","     * Activity Exchange","     *","     * Prototype is considered undeclareed until set.","     *","     */","    value: undefined,","    enumerable: true,","    configurable: true,","    writable: true","  },","  create_context: {","    value: require( '../exchange' ).prototype.create_context,","    enumerable: true,","    configurable: true,","    writable: true","  },","  subscribe: {","    value: require( '../exchange' ).prototype.subscribe,","    enumerable: true,","    configurable: true,","    writable: true","  },","  request: {","    value: require( '../exchange' ).prototype.request,","    enumerable: true,","    configurable: true,","    writable: true","  },","  response: {","    value: require( '../exchange' ).prototype.response,","    enumerable: true,","    configurable: true,","    writable: true","  },","  unsubscribe: {","    value: require( '../exchange' ).prototype.unsubscribe,","    enumerable: true,","    configurable: true,","    writable: true","  },","  publish: {","    value: require( '../exchange' ).prototype.publish,","    enumerable: true,","    configurable: true,","    writable: true","  },","  error: {","    value: require( '../utility' ).error,","    enumerable: true,","    configurable: true,","    writable: true","  },","  debug: {","    value: require( '../utility' ).debug,","    enumerable: true,","    configurable: true,","    writable: true","  }","});","","// Activity Constructor Properties.","Object.defineProperties( module.exports = Activity, {","  create: {","    value: require( '../exchange' ).create.bind( Activity ),","    enumerable: true,","    configurable: true,","    writable: true","  },","  utility: {","    value: require( '../utility' ),","    enumerable: false,","    writable: false","  },","  declare: {","    value: require( '../exchange' ).declare,","    enumerable: true,","    configurable: true,","    writable: true","  }","});"];
function Activity(name) {
    _$jscoverage_done("lib/exchange/activity.js", 13);
    if (_$jscoverage_done("lib/exchange/activity.js", 13, !(this instanceof Activity))) {
        _$jscoverage_done("lib/exchange/activity.js", 14);
        return Activity.create(name);
    }
    _$jscoverage_done("lib/exchange/activity.js", 18);
    if (_$jscoverage_done("lib/exchange/activity.js", 18, "string" !== typeof name)) {
        _$jscoverage_done("lib/exchange/activity.js", 19);
        return this.error(new Error("The Activity name must be set."));
    }
    _$jscoverage_done("lib/exchange/activity.js", 23);
    Object.defineProperty(this, "name", {
        value: name,
        enumerable: true,
        configurable: false,
        writable: false
    });
    _$jscoverage_done("lib/exchange/activity.js", 30);
    this.debug("Initializing Activity [%s] for [%s] exchange.", name, this.exchange.name);
    _$jscoverage_done("lib/exchange/activity.js", 33);
    return this;
}

_$jscoverage_done("lib/exchange/activity.js", 38);
Object.defineProperties(Activity.prototype, {
    name: {
        value: undefined,
        enumerable: true,
        configurable: true,
        writable: true
    },
    type: {
        value: "activity",
        enumerable: true,
        configurable: true,
        writable: true
    },
    connection: {
        value: undefined,
        enumerable: true,
        configurable: true,
        writable: true
    },
    exchange: {
        value: undefined,
        enumerable: true,
        configurable: true,
        writable: true
    },
    create_context: {
        value: require("").prototype.create_context,
        enumerable: true,
        configurable: true,
        writable: true
    },
    subscribe: {
        value: require("").prototype.subscribe,
        enumerable: true,
        configurable: true,
        writable: true
    },
    request: {
        value: require("").prototype.request,
        enumerable: true,
        configurable: true,
        writable: true
    },
    response: {
        value: require("").prototype.response,
        enumerable: true,
        configurable: true,
        writable: true
    },
    unsubscribe: {
        value: require("").prototype.unsubscribe,
        enumerable: true,
        configurable: true,
        writable: true
    },
    publish: {
        value: require("").prototype.publish,
        enumerable: true,
        configurable: true,
        writable: true
    },
    error: {
        value: require("../utility").error,
        enumerable: true,
        configurable: true,
        writable: true
    },
    debug: {
        value: require("../utility").debug,
        enumerable: true,
        configurable: true,
        writable: true
    }
});

_$jscoverage_done("lib/exchange/activity.js", 138);
Object.defineProperties(module.exports = Activity, {
    create: {
        value: require("").create.bind(Activity),
        enumerable: true,
        configurable: true,
        writable: true
    },
    utility: {
        value: require("../utility"),
        enumerable: false,
        writable: false
    },
    declare: {
        value: require("").declare,
        enumerable: true,
        configurable: true,
        writable: true
    }
});