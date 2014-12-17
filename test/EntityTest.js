var expect = require("expect.js");
var Entity = require("../lib/stores/Entity");
var CardStore = require("../lib/stores/CardStore");

describe('Entity', function(){
  describe('#name()', function(){
    it('should return card name', function(){
        var entity = new Entity(36, CardStore.getCardWithId("HERO_09"));
        expect(entity.name()).equal('Anduin Wrynn');
    })
  })

  describe('#isHidden()', function(){
    it('should be hidden if card is null', function(){
        var entity = new Entity(36, CardStore.getCardWithId(null));
        expect(entity.isHidden()).to.be.ok();

        entity = new Entity(36, CardStore.getCardWithId("HERO_09"));
        expect(entity.isHidden()).to.not.be.ok();
    })
  });
})