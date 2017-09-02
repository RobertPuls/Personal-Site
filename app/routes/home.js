import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return ["skill1", "skill2", "skill3", "skill4", "skill1", "skill2", "skill3", "skill4"];
  }
});
