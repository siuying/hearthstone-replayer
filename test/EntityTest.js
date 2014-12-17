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
})