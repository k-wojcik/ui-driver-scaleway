/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
define('ui/components/node-driver/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'shared/components/node-driver/driver-%%DRIVERNAME%%/component'], function (exports, _ember, _component) {
  exports['default'] = _component['default'];
});

define('shared/components/node-driver/driver-%%DRIVERNAME%%/component', ['exports', 'ember', 'shared/mixins/node-driver', 'shared/components/node-driver/driver-%%DRIVERNAME%%/template'], function (exports, _ember, _uiMixinsDriver, _template) {
/* ^--- And here */

  // You can put embmer object here
  var computed = Ember.computed;
  var get = Ember.get;
  var set = Ember.set;
  var alias = Ember.computed.alias;
  var observer = Ember.observer;

/* v----- Do not change anything between here
 *       (the DRIVERNAME placeholder will be automatically replaced during build) */
  exports['default'] = _ember['default'].Component.extend(_uiMixinsDriver['default'], {
    layout: _template.default,
    driverName: '%%DRIVERNAME%%',
    config: alias('model.%%DRIVERNAME%%Config'),
/* ^--- And here */

    regions: [{
        id: 'par1',
        location: 'Paris (par1)'
      },
      {
        id: 'ams1',
        location: 'Amsterdam (ams1)'
      }
    ],

    // Write your component here, starting with setting 'model' to a machine with your config populated
    bootstrap: function() {
      let config = get(this, 'globalStore').createRecord({
        type: '%%DRIVERNAME%%Config',
        commercialType: '',
        region: '',
        name: '',
        debug: false,
        image: '',
        ip: '',
        ipv6: false,
        organization: '',
        token: '',
        volumes: '',
        bootscript: ''
      });

      set(this, 'model.%%DRIVERNAME%%Config', config);
    },

    // Add custom validation beyond what can be done from the config API schema
    validate() {
      // Get generic API validation errors
      this._super();
      var errors = get(this, 'errors')||[];
      if ( !get(this, 'model.name') ) {
        errors.push('Name is required!');
      }

      // Add more specific errors
      if (!get(this, 'config.organization') ) {
        errors.push('Organization ID is required!');
      }

      if (!get(this, 'config.token') ) {
        errors.push('API Token is required!');
      }

      if (!get(this, 'config.commercialType') ) {
        errors.push('Instance Type is required!');
      }

      if (!get(this, 'config.image') ) {
        errors.push('Image is required!');
      }

      // Set the array of errors for display,
      // and return true if saving should continue.
      if ( get(errors, 'length') )
      {
        set(this, 'errors', errors);
        return false;
      }
      else
      {
        set(this, 'errors', null);
        return true;
      }
    },
    //Any computed properties or custom logic can go here
  });
});
