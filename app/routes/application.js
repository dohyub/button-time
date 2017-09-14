import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return new Date();
  },
  actions: {
      update: function() {
        this.refresh();
      }
  }
});
