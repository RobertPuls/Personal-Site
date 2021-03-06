import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('parallax-sun', 'Integration | Component | parallax sun', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{parallax-sun}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#parallax-sun}}
      template block text
    {{/parallax-sun}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});
