var assert = require("assert")
var Player = require("../lib/stores/Player");
var Entity = require("../lib/stores/Entity");
var CardStore = require("../lib/stores/CardStore");

describe('Player', function(){
  describe('#heroClass()', function(){
    it('should return corresponding hero class', function(){
        var id = 2;
        var name = "zardeine"
        var firstPlayer = false;
        var hero = new Entity(36, CardStore.getCardWithId("HERO_05"));
        var power = new Entity(37, CardStore.getCardWithId("DS1h_292"));
        var player = new Player(id, name, firstPlayer, hero, power);
        assert.equal(player.heroClass(), 'Hunter');
    })
  })
})