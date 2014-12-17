var expect = require("expect.js")
var CardStore = require("../lib/stores/CardStore");

describe('CardStore', function(){
  describe('#getCardWithId()', function(){
    it('should return an card object', function(){
        var card = CardStore.getCardWithId('EX1_116');
        expect(card.name).to.equal('Leeroy Jenkins');
    })
  })
})