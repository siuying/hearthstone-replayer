var assert = require("assert")
var Entity = require("../lib/stores/Entity");
var CardStore = require("../lib/stores/CardStore");

describe('Entity', function(){
  describe('#name()', function(){
    it('should return card name', function(){
        var entity = new Entity(36, CardStore.getCardWithId("HERO_09"));
        assert.equal(entity.name(), 'Anduin Wrynn');
    })
  })

  describe('#isHidden()', function(){
    it('should be hidden if card is null', function(){
        var entity = new Entity(36, CardStore.getCardWithId(null));
        assert.equal(entity.isHidden(), true);

        entity = new Entity(36, CardStore.getCardWithId("HERO_09"));
        assert.equal(entity.isHidden(), false);
    })
  });
})