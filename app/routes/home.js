import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["Ember.js", "Express", "PostgreSQL", "Node.js", "Javascript / JQuery", "HTML / CSS"];
  }
});
