import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('camp-fire', 'Integration | Component | camp fire', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{camp-fire}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#camp-fire}}
      template block text
    {{/camp-fire}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
