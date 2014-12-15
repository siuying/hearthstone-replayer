var assert = require("assert")
var CardStore = require("../lib/models/CardStore");

describe('CardStore', function(){
  describe('#getCardWithId()', function(){
    it('should return an card object', function(){
        var card = CardStore.getCardWithId('EX1_116');
        assert.equal(card.name, 'Leeroy Jenkins');
    })
  })
})