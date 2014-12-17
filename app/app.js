(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
var React = require('react');
var ReplayerApp = require('./components/ReplayerApp');

React.render(React.createElement(ReplayerApp, null), document.getElementById('content'));

},{"./components/ReplayerApp":3,"react":159}],2:[function(require,module,exports){
var React = require('react');

var Player = React.createClass({displayName: 'Player',
    render:function() {
        return (
            React.createElement("section", {className: "player"}, 
                React.createElement("p", {className: "name"}, this.props.player.name), 
                React.createElement("p", {className: "class"}, this.props.player.heroClass())
            )
        )
    }
});

module.exports = Player;
},{"react":159}],3:[function(require,module,exports){
var React = require('react');
var PlayerView = require('./PlayerView');
var GameStore = require('../stores/GameStore');

var ReplayerApp = React.createClass({displayName: 'ReplayerApp',
    render:function() {
        var player1 = GameStore.getPlayers()[0];
        var player2 = GameStore.getPlayers()[1];

        return (
            React.createElement("div", null, 
                React.createElement(PlayerView, {player: player1}), 
                React.createElement(PlayerView, {player: player2})
            )
        )
    }
});

module.exports = ReplayerApp;
},{"../stores/GameStore":8,"./PlayerView":2,"react":159}],4:[function(require,module,exports){
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var AppDispatcher = assign(new Dispatcher(), {
     handleViewAction:function(action) { 
        this.dispatch({
            source: 'VIEW_ACTION',
            action: action
        }); 
    }
});

module.exports = AppDispatcher;

},{"flux":10,"object-assign":13}],5:[function(require,module,exports){
// imported from hearthstonejson.com
var _HearthstoneAllCardsSets = {"Basic":[{"id":"GAME_004","name":"AFK","type":"Enchantment","text":"Your turns are shorter."},{"id":"EX1_066","name":"Acidic Swamp Ooze","type":"Minion","faction":"Alliance","rarity":"Common","cost":2,"attack":3,"health":2,"text":"<b>Battlecry:</b> Destroy your opponent's weapon.","flavor":"Oozes love Flamenco.  Don't ask.","artist":"Chris Rahn","collectible":true,"howToGetGold":"Unlocked at Rogue Level 57.","mechanics":["Battlecry"]},{"id":"CS2_041","name":"Ancestral Healing","type":"Spell","faction":"Neutral","rarity":"Free","cost":0,"text":"Restore a minion to full Health and give it <b>Taunt</b>.","flavor":"I personally prefer some non-ancestral right-the-heck-now healing, but maybe that is just me.","artist":"Dan Scott","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"CS2_041e","name":"Ancestral Infusion","type":"Enchantment","text":"Taunt.","playerClass":"Shaman","mechanics":["Taunt"]},{"id":"HERO_09","name":"Anduin Wrynn","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Priest"},{"id":"NEW1_031","name":"Animal Companion","type":"Spell","rarity":"Common","cost":3,"text":"Summon a random Beast Companion.","flavor":"You could summon Misha, Leokk, or Huffer!  Huffer is more trouble than he's worth.","artist":"Wei Wang","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 45."},{"id":"CS2_025","name":"Arcane Explosion","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Deal $1 damage to all enemy minions.","flavor":"This spell is much better than Arcane Implosion.","artist":"Howard Lyon","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 28."},{"id":"CS2_023","name":"Arcane Intellect","type":"Spell","faction":"Neutral","rarity":"Free","cost":3,"text":"Draw 2 cards.","flavor":"Playing this card makes you SMARTER.  And let's face it: we could all stand to be a little smarter.","artist":"Dave Berggren","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"EX1_277","name":"Arcane Missiles","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Deal $3 damage randomly split among enemy characters.","flavor":"You'd think you'd be able to control your missiles a little better since you're a powerful mage and all.","artist":"Warren Mahy","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 32.","mechanics":["ImmuneToSpellpower"]},{"id":"DS1_185","name":"Arcane Shot","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Deal $2 damage.","flavor":"Magi conjured arcane arrows to sell to hunters, until hunters learned just enough magic to do it themselves.  The resulting loss of jobs sent Stormwind into a minor recession.","artist":"Luca Zontini","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 32."},{"id":"CS2_112","name":"Arcanite Reaper","type":"Weapon","faction":"Neutral","rarity":"Common","cost":5,"attack":5,"durability":2,"flavor":"No… actually you should fear the Reaper.","artist":"Stefan Kopinski","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 51."},{"id":"CS2_155","name":"Archmage","type":"Minion","faction":"Alliance","rarity":"Common","cost":6,"attack":4,"health":7,"text":"<b>Spell Damage +1</b>","flavor":"You earn the title of Archmage when you can destroy anyone who calls you on it.","artist":"Steve Ellis","collectible":true,"howToGetGold":"Unlocked at Mage Level 57.","mechanics":["Spellpower"]},{"id":"CS2_102","name":"Armor Up!","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nGain 2 Armor.","playerClass":"Warrior"},{"id":"CS2_080","name":"Assassin's Blade","type":"Weapon","faction":"Neutral","rarity":"Common","cost":5,"attack":3,"durability":4,"flavor":"Guaranteed to have been owned by a real assassin.   Certificate of authenticity included.","artist":"Brian Huang","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 32."},{"id":"CS2_076","name":"Assassinate","type":"Spell","faction":"Neutral","rarity":"Free","cost":5,"text":"Destroy an enemy minion.","flavor":"If you don't want to be assassinated, move to the Barrens and change your name. Good luck!","artist":"Glenn Rane","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 47."},{"id":"GAME_002","name":"Avatar of the Coin","type":"Minion","rarity":"Free","cost":0,"attack":1,"health":1,"text":"<i>You lost the coin flip, but gained a friend.</i>"},{"id":"CS2_072","name":"Backstab","type":"Spell","faction":"Neutral","rarity":"Free","cost":0,"text":"Deal $2 damage to an undamaged minion.","flavor":"It's funny how often yelling \"Look over there!\" gets your opponent to turn around.","artist":"Michael Sutfin","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"EX1_399e","name":"Berserking","type":"Enchantment","text":"This minion has increased Attack."},{"id":"CS2_092","name":"Blessing of Kings","type":"Spell","faction":"Neutral","rarity":"Common","cost":4,"text":"Give a minion +4/+4. <i>(+4 Attack/+4 Health)</i>","flavor":"Given the number of kings who have been assassinated, are you sure you want their blessing?","artist":"Lucas Graciano","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 49."},{"id":"CS2_092e","name":"Blessing of Kings","type":"Enchantment","text":"+4/+4.","playerClass":"Paladin"},{"id":"CS2_087","name":"Blessing of Might","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Give a minion +3 Attack.","flavor":"\"As in, you MIGHT want to get out of my way.\" - Toad Mackle, recently buffed.","artist":"Zoltan Boros","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 45."},{"id":"CS2_087e","name":"Blessing of Might","type":"Enchantment","faction":"Neutral","text":"+3 Attack.","playerClass":"Paladin"},{"id":"CS2_172","name":"Bloodfen Raptor","type":"Minion","faction":"Horde","rarity":"Free","cost":2,"attack":3,"health":2,"flavor":"\"Kill 30 raptors.\" - Hemet Nesingwary","artist":"Dan Brereton","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Hunter Level 57."},{"id":"CS2_046e","name":"Bloodlust","type":"Enchantment","text":"+3 Attack this turn.","playerClass":"Shaman","mechanics":["OneTurnEffect"]},{"id":"CS2_046","name":"Bloodlust","type":"Spell","faction":"Neutral","rarity":"Common","cost":5,"text":"Give your minions +3 Attack this turn.","flavor":"blaarghghLLGHRHARAAHAHHH!!","artist":"Luca Zontini","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 40."},{"id":"CS2_173","name":"Bluegill Warrior","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":1,"text":"<b>Charge</b>","flavor":"He just wants a hug.   A sloppy... slimy... hug.","artist":"Jakub Kasper","collectible":true,"race":"Murloc","howToGetGold":"Unlocked at Paladin Level 53.","mechanics":["Charge"]},{"id":"CS2_boar","name":"Boar","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":1,"health":1,"race":"Beast"},{"id":"CS2_187","name":"Booty Bay Bodyguard","type":"Minion","faction":"Horde","rarity":"Common","cost":5,"attack":5,"health":4,"text":"<b>Taunt</b>","flavor":"You can hire him... until someone offers him enough gold to turn on you.","artist":"Matt Cavotta","collectible":true,"howToGetGold":"Unlocked at Shaman Level 55.","mechanics":["Taunt"]},{"id":"CS2_200","name":"Boulderfist Ogre","type":"Minion","rarity":"Free","cost":6,"attack":6,"health":7,"flavor":"\"ME HAVE GOOD STATS FOR THE COST\"","artist":"Brian Despain","collectible":true,"howToGetGold":"Unlocked at Warlock Level 51."},{"id":"CS2_103","name":"Charge","type":"Spell","faction":"Neutral","rarity":"Free","cost":3,"text":"Give a friendly minion +2 Attack and <b>Charge</b>.","flavor":"\"Guys! Guys! Slow down!\" - some kind of non-warrior minion","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 23."},{"id":"EX1_084e","name":"Charge","type":"Enchantment","text":"This minion has <b>Charge</b>.","playerClass":"Warrior"},{"id":"DS1_178e","name":"Charge","type":"Enchantment","text":"Tundra Rhino grants <b>Charge</b>.","playerClass":"Hunter"},{"id":"CS2_103e2","name":"Charge","type":"Enchantment","text":"+2 Attack and <b>Charge</b>.","playerClass":"Warrior"},{"id":"CS2_182","name":"Chillwind Yeti","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":4,"health":5,"flavor":"He always dreamed of coming down from the mountains and opening a noodle shop, but he never got the nerve.","artist":"Mauro Cascioli","collectible":true,"howToGetGold":"Unlocked at Warrior Level 55."},{"id":"CS2_005o","name":"Claw","type":"Enchantment","text":"+2 Attack this turn.","playerClass":"Druid","mechanics":["OneTurnEffect"]},{"id":"CS2_005","name":"Claw","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Give your hero +2 Attack this turn and 2 Armor.","flavor":"The claw decides who will stay and who will go.","artist":"Dany Orizio","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 32."},{"id":"CS2_017o","name":"Claws","type":"Enchantment","text":"Your hero has +1 Attack this turn.","playerClass":"Druid","mechanics":["OneTurnEffect"]},{"id":"CS2_114","name":"Cleave","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal $2 damage to two random enemy minions.","flavor":"Hey you two…could you stand next to each other for a second…","artist":"Phroilan Gardner","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 40."},{"id":"EX1_019e","name":"Cleric's Blessing","type":"Enchantment","text":"+1/+1.","playerClass":"Priest"},{"id":"GAME_003","name":"Coin's Vengeance","type":"Enchantment","text":"Going second makes your first minion stronger."},{"id":"GAME_003e","name":"Coin's Vengence","type":"Enchantment","text":"Going second makes your first minion stronger."},{"id":"CS2_093","name":"Consecration","type":"Spell","faction":"Neutral","rarity":"Common","cost":4,"text":"Deal $2 damage to all enemies.","flavor":"Consecrated ground glows with Holy energy.  But it smells a little, too.","artist":"Vance Kovacs","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 43."},{"id":"CS2_201","name":"Core Hound","type":"Minion","rarity":"Common","cost":7,"attack":9,"health":5,"flavor":"You don’t tame a Core Hound. You just train it to eat someone else before it eats you.","artist":"E.M. Gist","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Hunter Level 51."},{"id":"CS2_063","name":"Corruption","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Choose an enemy minion. At the start of your turn, destroy it.","flavor":"It starts with stealing a pen from work, and before you know it, BOOM!  Corrupted!","artist":"Wayne Reynolds","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 32."},{"id":"CS2_063e","name":"Corruption","type":"Enchantment","text":"At the start of the corrupting player's turn, destroy this minion.","playerClass":"Warlock"},{"id":"CS2_083b","name":"Dagger Mastery","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nEquip a 1/2 Dagger.","playerClass":"Rogue"},{"id":"EX1_582","name":"Dalaran Mage","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":1,"health":4,"text":"<b>Spell Damage +1</b>","flavor":"You don't see a lot of Dalaran warriors.","artist":"Jim Nelson","collectible":true,"howToGetGold":"Unlocked at Mage Level 59.","mechanics":["Spellpower"]},{"id":"DS1_055","name":"Darkscale Healer","type":"Minion","faction":"Neutral","rarity":"Common","cost":5,"attack":4,"health":5,"text":"<b>Battlecry:</b> Restore 2 Health to all friendly characters.","flavor":"Healing is just something she does in her free time.  It's more of a hobby really.","artist":"Jesper Ejsing","collectible":true,"howToGetGold":"Unlocked at Priest Level 55.","mechanics":["Battlecry"]},{"id":"CS2_074e","name":"Deadly Poison","type":"Enchantment","text":"+2 Attack."},{"id":"CS2_074","name":"Deadly Poison","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Give your weapon +2 Attack.","flavor":"Rogues guard the secrets to poison-making carefully, lest magi start incorporating poison into their spells.  Poisonbolt? Rain of Poison?  Poison Elemental?  Nobody wants that.","artist":"Trevor Jacobs","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 43."},{"id":"CS2_236e","name":"Divine Spirit","type":"Enchantment","text":"This minion has double Health.","playerClass":"Priest"},{"id":"CS2_236","name":"Divine Spirit","type":"Spell","rarity":"Common","cost":2,"text":"Double a minion's Health.","flavor":"Double the trouble. Double the fun!","artist":"Jim Pavelec","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 28."},{"id":"EX1_025","name":"Dragonling Mechanic","type":"Minion","faction":"Alliance","rarity":"Common","cost":4,"attack":2,"health":4,"text":"<b>Battlecry:</b> Summon a 2/1 Mechanical Dragonling.","flavor":"She is still working on installing the rocket launcher add-on for Mr. Bitey.","artist":"Warren Mahy","collectible":true,"howToGetGold":"Unlocked at Mage Level 53.","mechanics":["Battlecry"]},{"id":"CS2_061","name":"Drain Life","type":"Spell","faction":"Neutral","rarity":"Free","cost":3,"text":"Deal $2 damage. Restore #2 Health to your hero.","flavor":"\"I've just sucked one year of your life away.\"","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 45."},{"id":"CS2_064","name":"Dread Infernal","type":"Minion","faction":"Neutral","rarity":"Common","cost":6,"attack":6,"health":6,"text":"<b>Battlecry:</b> Deal 1 damage to ALL other characters.","flavor":"\"INFERNOOOOOOOOOO!\" - Jaraxxus, Eredar Lord of the Burning Legion","artist":"Zoltan & Gabor","collectible":true,"race":"Demon","playerClass":"Warlock","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 23.","mechanics":["Battlecry"]},{"id":"CS2_189","name":"Elven Archer","type":"Minion","faction":"Horde","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<b>Battlecry:</b> Deal 1 damage.","flavor":"Don't bother asking her out on a date.  She'll shoot you down.","artist":"Steve Prescott","collectible":true,"howToGetGold":"Unlocked at Druid Level 57.","mechanics":["Battlecry"]},{"id":"CS2_122e","name":"Enhanced","type":"Enchantment","text":"Raid Leader is granting this minion +1 Attack."},{"id":"CS2_013t","name":"Excess Mana","type":"Spell","cost":0,"text":"Draw a card. <i>(You can only have 10 Mana in your tray.)</i>","playerClass":"Druid"},{"id":"CS2_108","name":"Execute","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Destroy a damaged enemy minion.","flavor":"It's okay, he deserved it.","artist":"Dany Orizio","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 47."},{"id":"NEW1_033o","name":"Eye In The Sky","type":"Enchantment","text":"Leokk is granting this minion +1 Attack.","playerClass":"Hunter"},{"id":"EX1_129","name":"Fan of Knives","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Deal $1 damage to all enemy minions. Draw a card.","flavor":"I wouldn't say I LOVE knives, but I'm definitely a fan.","artist":"Andrew Robinson","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 29."},{"id":"CS2_106","name":"Fiery War Axe","type":"Weapon","faction":"Neutral","rarity":"Free","cost":2,"attack":3,"durability":2,"flavor":"During times of tranquility and harmony, this weapon was called by its less popular name, Chilly Peace Axe.","artist":"Lucas Graciano","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 49."},{"id":"CS2_042","name":"Fire Elemental","type":"Minion","faction":"Neutral","rarity":"Common","cost":6,"attack":6,"health":5,"text":"<b>Battlecry:</b> Deal 3 damage.","flavor":"He can never take a bath. Ewww.","artist":"Ralph Horsley","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 49.","mechanics":["Battlecry"]},{"id":"CS2_029","name":"Fireball","type":"Spell","faction":"Neutral","rarity":"Free","cost":4,"text":"Deal $6 damage.","flavor":"This spell is useful for burning things.  If you're looking for spells that toast things, or just warm them a little, you're in the wrong place.","artist":"Ralph Horsley","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 44."},{"id":"CS2_034","name":"Fireblast","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nDeal 1 damage.","playerClass":"Mage"},{"id":"CS2_032","name":"Flamestrike","type":"Spell","faction":"Neutral","rarity":"Common","cost":7,"text":"Deal $4 damage to all enemy minions.","flavor":"When the ground is on fire, you should <i>not</i> stop, drop, and roll.","artist":"Romain De Santi","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 51."},{"id":"EX1_565o","name":"Flametongue","type":"Enchantment","text":"+2 Attack from Flametongue Totem.","playerClass":"Shaman"},{"id":"EX1_565","name":"Flametongue Totem","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":0,"health":3,"text":"Adjacent minions have +2 Attack.","inPlayText":"Flametongue","flavor":"Totemsmiths like to use the rarest woods for their totems.  There are even rumors of totems made of Ironbark Protectors.","artist":"Jonathan Ryder","collectible":true,"race":"Totem","playerClass":"Shaman","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 43.","mechanics":["AdjacentBuff","Aura"]},{"id":"hexfrog","name":"Frog","type":"Minion","faction":"Neutral","rarity":"Common","attack":0,"health":1,"text":"<b>Taunt</b>","race":"Beast","mechanics":["Taunt"],"cost":0},{"id":"CS2_026","name":"Frost Nova","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"<b>Freeze</b> all enemy minions.","flavor":"Hey man, that's cold.  Literally and metaphorically.","artist":"Josh Tallman","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 23.","mechanics":["Freeze"]},{"id":"CS2_037","name":"Frost Shock","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Deal $1 damage to an enemy character and <b>Freeze</b> it.","flavor":"FROST SHOCK!","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 32.","mechanics":["Freeze"]},{"id":"CS2_024","name":"Frostbolt","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal $3 damage to a character and <b>Freeze</b> it.","flavor":"It is customary to yell \"Chill out!\" or \"Freeze!\" or \"Ice ice, baby!\" when you play this card.","artist":"Steve Ellis","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 40.","mechanics":["Freeze"]},{"id":"CS2_226e","name":"Frostwolf Banner","type":"Enchantment","text":"Increased stats."},{"id":"CS2_121","name":"Frostwolf Grunt","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Taunt</b>","flavor":"Grunting is what his father did and his father before that.   It's more than just a job.","artist":"Richie Marella","collectible":true,"howToGetGold":"Unlocked at Shaman Level 57.","mechanics":["Taunt"]},{"id":"CS2_226","name":"Frostwolf Warlord","type":"Minion","faction":"Horde","rarity":"Common","cost":5,"attack":4,"health":4,"text":"<b>Battlecry:</b> Gain +1/+1 for each other friendly minion on the battlefield.","inPlayText":"Warlord","flavor":"The Frostwolves are locked in combat with the Stormpike Expedition over control of Alterac Valley.  Every attempt at peace-talks has ended with Captain Galvangar killing the mediator.","artist":"James Ryman","collectible":true,"howToGetGold":"Unlocked at Shaman Level 53.","mechanics":["Battlecry"]},{"id":"DS1_175o","name":"Furious Howl","type":"Enchantment","text":"This Beast has +1 Attack from Timber Wolf.","playerClass":"Hunter"},{"id":"HERO_01","name":"Garrosh Hellscream","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Warrior"},{"id":"CS2_147","name":"Gnomish Inventor","type":"Minion","faction":"Alliance","rarity":"Common","cost":4,"attack":2,"health":4,"text":"<b>Battlecry:</b> Draw a card.","flavor":"She's never quite sure what she's making, she just knows it's AWESOME!","artist":"Court Jones","collectible":true,"howToGetGold":"Unlocked at Priest Level 57.","mechanics":["Battlecry"]},{"id":"CS1_042","name":"Goldshire Footman","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":1,"health":2,"text":"<b>Taunt</b>","flavor":"If 1/2 minions are all that is defending Goldshire, you would think it would have been overrun years ago.","artist":"Donato Giancola","collectible":true,"howToGetGold":"Unlocked at Paladin Level 57.","mechanics":["Taunt"]},{"id":"EX1_508","name":"Grimscale Oracle","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":1,"health":1,"text":"ALL other Murlocs have +1 Attack.","inPlayText":"Argalagblbl","flavor":"These are the brainy murlocs.  It turns out that doesn’t mean much.","artist":"Phil Saunders","collectible":true,"race":"Murloc","howToGetGold":"Unlocked at Warlock Level 53.","mechanics":["Aura"]},{"id":"CS2_088","name":"Guardian of Kings","type":"Minion","faction":"Neutral","rarity":"Common","cost":7,"attack":5,"health":6,"text":"<b>Battlecry:</b> Restore 6 Health to your hero.","flavor":"Holy beings from the beyond are so cliché!","artist":"E.M. Gist","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 47.","mechanics":["Battlecry"]},{"id":"HERO_07","name":"Gul'dan","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Warlock"},{"id":"EX1_399","name":"Gurubashi Berserker","type":"Minion","faction":"Neutral","rarity":"Common","cost":5,"attack":2,"health":7,"text":"Whenever this minion takes damage, gain +3 Attack.","flavor":"No Pain, No Gain.","artist":"Alex Horley Orlandelli","collectible":true,"howToGetGold":"Unlocked at Warlock Level 57."},{"id":"CS2_094","name":"Hammer of Wrath","type":"Spell","faction":"Neutral","rarity":"Free","cost":4,"text":"Deal $3 damage.\nDraw a card.","flavor":"A good paladin has many tools.  Hammer of Wrath, Pliers of Vengeance, Hacksaw of Justice, etc.","artist":"Efrem Palacios","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 32."},{"id":"EX1_371","name":"Hand of Protection","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Give a minion <b>Divine Shield</b>.","flavor":"This spell has been renamed so many times, even paladins don’t know what it should be called anymore.","artist":"Clint Langley","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 23."},{"id":"NEW1_009","name":"Healing Totem","type":"Minion","rarity":"Free","cost":1,"attack":0,"health":2,"text":"At the end of your turn, restore 1 Health to all friendly minions.","race":"Totem","playerClass":"Shaman"},{"id":"CS2_007","name":"Healing Touch","type":"Spell","faction":"Neutral","rarity":"Free","cost":3,"text":"Restore #8 Health.","flavor":"8 Health, no waiting.","artist":"Cyril Van Der Haegen","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"CS2_062","name":"Hellfire","type":"Spell","faction":"Neutral","rarity":"Free","cost":4,"text":"Deal $3 damage to ALL characters.","flavor":"It's spells like these that make it hard for Warlocks to get decent help.","artist":"Chippy","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 49."},{"id":"CS2_105e","name":"Heroic Strike","type":"Enchantment","text":"+4 Attack this turn.","playerClass":"Warrior","mechanics":["OneTurnEffect"]},{"id":"CS2_105","name":"Heroic Strike","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Give your hero +4 Attack this turn.","flavor":"Really, if you're a hero, this is <i>every</i> strike.","artist":"Jonboy Meyers","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"EX1_246","name":"Hex","type":"Spell","faction":"Neutral","rarity":"Free","cost":3,"text":"Transform a minion into a 0/1 Frog with <b>Taunt</b>.","flavor":"If you Hex a Murloc... it really isn't much of a change, is it?","artist":"Steve Hui","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 47."},{"id":"EX1_246e","name":"Hexxed","type":"Enchantment","text":"This minion has been transformed!","playerClass":"Shaman","mechanics":["Morph"]},{"id":"CS2_089","name":"Holy Light","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Restore #6 Health.","flavor":"If you are often bathed in Holy Light, you should consider wearing sunscreen.","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"CS1_112","name":"Holy Nova","type":"Spell","faction":"Neutral","rarity":"Common","cost":5,"text":"Deal $2 damage to all enemies. Restore #2 Health to all friendly characters.","flavor":"If the Holy Light forsakes you, good luck casting this spell.  Also, you're probably a jerk.","artist":"Luca Zontini","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 45."},{"id":"CS1_130","name":"Holy Smite","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Deal $2 damage.","flavor":"It doesn't matter how pious you are.  Everyone needs a good smiting now and again.","artist":"Steve Ellis","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 23."},{"id":"DS1_070","name":"Houndmaster","type":"Minion","faction":"Neutral","rarity":"Free","cost":4,"attack":4,"health":3,"text":"<b>Battlecry:</b> Give a friendly Beast +2/+2 and <b>Taunt</b>.","inPlayText":"Beastmaster","flavor":"\"Who let the dogs out?\" he asks.  It's rhetorical.","artist":"Dan Brereton","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 28.","mechanics":["Battlecry"]},{"id":"NEW1_034","name":"Huffer","type":"Minion","rarity":"Common","cost":3,"attack":4,"health":2,"text":"<b>Charge</b>","race":"Beast","playerClass":"Hunter","mechanics":["Charge"]},{"id":"EX1_360e","name":"Humility","type":"Enchantment","faction":"Neutral","text":"Attack has been changed to 1.","playerClass":"Paladin"},{"id":"EX1_360","name":"Humility","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Change a minion's Attack to 1.","flavor":"This card makes something really damp.  Oh wait.  That's \"Humidity.\"","artist":"Daren Bader","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 28."},{"id":"CS2_084e","name":"Hunter's Mark","type":"Enchantment","text":"This minion has 1 Health.","playerClass":"Hunter"},{"id":"CS2_084","name":"Hunter's Mark","type":"Spell","faction":"Neutral","rarity":"Common","cost":0,"text":"Change a minion's Health to 1.","flavor":"Never play 'Hide and Go Seek' with a Hunter.","artist":"Jimmy Lo","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 40."},{"id":"EX1_169","name":"Innervate","type":"Spell","faction":"Neutral","rarity":"Free","cost":0,"text":"Gain 2 Mana Crystals this turn only.","flavor":"Some druids still have flashbacks from strangers yelling \"Innervate me!!\" at them.","artist":"Doug Alexander","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"CS2_232","name":"Ironbark Protector","type":"Minion","faction":"Neutral","rarity":"Common","cost":8,"attack":8,"health":8,"text":"<b>Taunt</b>","flavor":"I <i>dare</i> you to attack Darnassus.","artist":"Dave Allsop","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 49.","mechanics":["Taunt"]},{"id":"CS2_141","name":"Ironforge Rifleman","type":"Minion","faction":"Alliance","rarity":"Common","cost":3,"attack":2,"health":2,"text":"<b>Battlecry:</b> Deal 1 damage.","flavor":"\"Ready! Aim! Drink!\"","artist":"Tooth","collectible":true,"howToGetGold":"Unlocked at Mage Level 55.","mechanics":["Battlecry"]},{"id":"CS2_125","name":"Ironfur Grizzly","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":3,"health":3,"text":"<b>Taunt</b>","flavor":"\"Bear Carcass 1/10\"","artist":"Lars Grant-West","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Hunter Level 59.","mechanics":["Taunt"]},{"id":"HERO_08","name":"Jaina Proudmoore","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Mage"},{"id":"EX1_539","name":"Kill Command","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Deal $3 damage. If you have a Beast, deal $5 damage instead.","flavor":"\"Kill!\", he commanded.","artist":"Gabe from Penny Arcade","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 49."},{"id":"CS2_142","name":"Kobold Geomancer","type":"Minion","faction":"Horde","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Spell Damage +1</b>","flavor":"In the old days, Kobolds were the finest candle merchants in the land. Then they got pushed too far...","artist":"Gabor Szikszai","collectible":true,"howToGetGold":"Unlocked at Warlock Level 59.","mechanics":["Spellpower"]},{"id":"NEW1_011","name":"Kor'kron Elite","type":"Minion","rarity":"Common","cost":4,"attack":4,"health":3,"text":"<b>Charge</b>","flavor":"The Kor'kron are the elite forces of Garrosh Hellscream. Let's just say you don't want to run into these guys while wearing a blue tabard.","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 44.","mechanics":["Charge"]},{"id":"NEW1_033","name":"Leokk","type":"Minion","rarity":"Common","cost":3,"attack":2,"health":4,"text":"Other friendly minions have +1 Attack.","race":"Beast","playerClass":"Hunter"},{"id":"CS1h_001","name":"Lesser Heal","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nRestore 2 Health.","playerClass":"Priest"},{"id":"CS2_056","name":"Life Tap","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nDraw a card and take 2 damage.","playerClass":"Warlock"},{"id":"CS2_091","name":"Light's Justice","type":"Weapon","faction":"Neutral","rarity":"Free","cost":1,"attack":1,"durability":4,"flavor":"Prince Malchezaar was a collector of rare weapons. He'd animate them and have them dance for him.","artist":"Glenn Rane","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"CS2_162","name":"Lord of the Arena","type":"Minion","faction":"Alliance","rarity":"Common","cost":6,"attack":6,"health":5,"text":"<b>Taunt</b>","flavor":"He used to be a 2100+ rated arena player, but that was years ago and nobody can get him to shut up about it.","artist":"E.M. Gist","collectible":true,"howToGetGold":"Unlocked at Priest Level 59.","mechanics":["Taunt"]},{"id":"GAME_001","name":"Luck of the Coin","type":"Enchantment","text":"Going second grants you increased Health."},{"id":"CS2_118","name":"Magma Rager","type":"Minion","rarity":"Free","cost":3,"attack":5,"health":1,"flavor":"He likes to think he is powerful, but pretty much anyone can solo Molten Core now.","artist":"Matt Gaser","collectible":true,"howToGetGold":"Unlocked at Shaman Level 51."},{"id":"HERO_06","name":"Malfurion Stormrage","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Druid"},{"id":"CS2_009","name":"Mark of the Wild","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Give a minion <b>Taunt</b> and +2/+2.<i> (+2 Attack/+2 Health)</i>","flavor":"Not to be confused with Jim of the Wild.","artist":"Brad Vancata","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 28."},{"id":"CS2_009e","name":"Mark of the Wild","type":"Enchantment","text":"This minion has +2/+2 and <b>Taunt</b>.","playerClass":"Druid"},{"id":"DS1_070o","name":"Master's Presence","type":"Enchantment","text":"+2/+2 and <b>Taunt</b>.","playerClass":"Hunter"},{"id":"EX1_025t","name":"Mechanical Dragonling","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":2,"health":1,"race":"Mech"},{"id":"CS2_222o","name":"Might of Stormwind","type":"Enchantment","text":"Has +1/+1."},{"id":"DS1_233","name":"Mind Blast","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Deal $5 damage to the enemy hero.","flavor":"This spell blasts you directly in the MIND.","artist":"Dave Allsop","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"CS1_113","name":"Mind Control","type":"Spell","faction":"Neutral","rarity":"Common","cost":10,"text":"Take control of an enemy minion.","flavor":"Nominated as \"Spell Most Likely to Make Your Opponent Punch the Wall.\"","artist":"Sean O’Daniels","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 49."},{"id":"CS1_113e","name":"Mind Control","type":"Enchantment","faction":"Neutral","rarity":"Common","text":"This minion has switched controllers.","playerClass":"Priest"},{"id":"CS2_003","name":"Mind Vision","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Put a copy of a random card in your opponent's hand into your hand.","flavor":"I see what you did there.","artist":"Michael Komarck","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 32."},{"id":"CS2_mirror","name":"Mirror Image","type":"Minion","faction":"Neutral","rarity":"Common","cost":0,"attack":0,"health":2,"text":"<b>Taunt</b>","playerClass":"Mage","mechanics":["Taunt"]},{"id":"CS2_027","name":"Mirror Image","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Summon two 0/2 minions with <b>Taunt</b>.","flavor":"Oh hey it's Mirror Image! !egamI rorriM s'ti yeh hO","artist":"Jim Nelson","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 36."},{"id":"NEW1_032","name":"Misha","type":"Minion","rarity":"Common","cost":3,"attack":4,"health":4,"text":"<b>Taunt</b>","race":"Beast","playerClass":"Hunter","mechanics":["Taunt"]},{"id":"EX1_508o","name":"Mlarggragllabl!","type":"Enchantment","text":"This Murloc has +1 Attack."},{"id":"CS2_008","name":"Moonfire","type":"Spell","faction":"Neutral","rarity":"Common","cost":0,"text":"Deal $1 damage.","flavor":"\"Cast Moonfire, and never stop.\" - How to Be a Druid, Chapter 5, Section 3","artist":"Richard Wright","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 40."},{"id":"EX1_302","name":"Mortal Coil","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Deal $1 damage to a minion. If that kills it, draw a card.","flavor":"If your spells look like horrifying skulls, let's be honest, you should get to draw some cards.","artist":"Matt Gaser","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 43."},{"id":"DS1_183","name":"Multi-Shot","type":"Spell","faction":"Neutral","rarity":"Free","cost":4,"text":"Deal $3 damage to two random enemy minions.","flavor":"You see, it's all about <i>throughput</i>.","artist":"Benjamin Zhang","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"CS2_168","name":"Murloc Raider","type":"Minion","faction":"Alliance","rarity":"Free","cost":1,"attack":2,"health":1,"flavor":"Mrrraggglhlhghghlgh, mrgaaag blarrghlgaahahl mrgggg glhalhah a bghhll graggmgmg Garrosh mglhlhlh mrghlhlhl!!","artist":"Dan Scott","collectible":true,"race":"Murloc","howToGetGold":"Unlocked at Priest Level 51."},{"id":"EX1_506a","name":"Murloc Scout","type":"Minion","faction":"Neutral","rarity":"Common","cost":0,"attack":1,"health":1,"race":"Murloc"},{"id":"EX1_506","name":"Murloc Tidehunter","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":1,"text":"<b>Battlecry:</b> Summon a 1/1 Murloc Scout.","flavor":"\"Death will rise, from the tides!\"","artist":"Dan Scott","collectible":true,"race":"Murloc","howToGetGold":"Unlocked at Rogue Level 53.","mechanics":["Battlecry"]},{"id":"GAME_006","name":"NOOOOOOOOOOOO","type":"Spell","cost":2,"text":"Somehow, the card you USED to have has been deleted.  Here, have this one instead!","flavor":"Even your flavor text has been deleted. Dang."},{"id":"EX1_593","name":"Nightblade","type":"Minion","faction":"Neutral","rarity":"Free","cost":5,"attack":4,"health":4,"text":"<b>Battlecry: </b>Deal 3 damage to the enemy hero.","flavor":"Your face is the place you'd probably least like a dagger, and where rogues are most likely to deliver them.","artist":"Raymond Swanland","collectible":true,"howToGetGold":"Unlocked at Druid Level 53.","mechanics":["Battlecry"]},{"id":"CS2_235","name":"Northshire Cleric","type":"Minion","rarity":"Free","cost":1,"attack":1,"health":3,"text":"Whenever a minion is healed, draw a card.","flavor":"They help the downtrodden and distressed.  Also they sell cookies.","artist":"Terese Nielsen","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 40.","mechanics":["HealTarget"]},{"id":"EX1_015","name":"Novice Engineer","type":"Minion","faction":"Alliance","rarity":"Free","cost":2,"attack":1,"health":1,"text":"<b>Battlecry:</b> Draw a card.","flavor":"\"Half of this class will not graduate… since they'll have been turned to chickens.\" - Tinkmaster Overspark, teaching Gizmos 101.","artist":"Karl Richardson","collectible":true,"howToGetGold":"Unlocked at Druid Level 59.","mechanics":["Battlecry"]},{"id":"CS2_119","name":"Oasis Snapjaw","type":"Minion","rarity":"Free","cost":4,"attack":2,"health":7,"flavor":"His dreams of flying and breathing fire like his idol will never be realized.","artist":"Ittoku","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Druid Level 51."},{"id":"CS2_197","name":"Ogre Magi","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":4,"health":4,"text":"<b>Spell Damage +1</b>","flavor":"Training Ogres in the art of spellcasting is a questionable decision.","artist":"James Ryman","collectible":true,"howToGetGold":"Unlocked at Warlock Level 55.","mechanics":["Spellpower"]},{"id":"CS2_022e","name":"Polymorph","type":"Enchantment","faction":"Neutral","rarity":"Common","text":"This minion has been transformed into a 1/1 Sheep.","playerClass":"Mage","mechanics":["Morph"]},{"id":"CS2_022","name":"Polymorph","type":"Spell","faction":"Neutral","rarity":"Free","cost":4,"text":"Transform a minion into a 1/1 Sheep.","flavor":"There was going to be a pun in this flavor text, but it just came out baa-d.","artist":"Vance Kovacs","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 47."},{"id":"CS2_004","name":"Power Word: Shield","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Give a minion +2 Health.\nDraw a card.","flavor":"Sure the extra protection is nice, but the shield really reduces visibility.","artist":"Jessica Jung","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 47."},{"id":"CS2_004e","name":"Power Word: Shield","type":"Enchantment","text":"+2 Health.","playerClass":"Priest"},{"id":"CS2_122","name":"Raid Leader","type":"Minion","rarity":"Free","cost":3,"attack":2,"health":2,"text":"Your other minions have +1 Attack.","inPlayText":"Lead","flavor":"\"That's a 50 DKP minus!\"","artist":"Phill Gonzales","collectible":true,"howToGetGold":"Unlocked at Warrior Level 57.","mechanics":["Aura"]},{"id":"CS2_196","name":"Razorfen Hunter","type":"Minion","faction":"Horde","rarity":"Common","cost":3,"attack":2,"health":3,"text":"<b>Battlecry:</b> Summon a 1/1 Boar.","flavor":"Someone did mess with Tuskerr once.  ONCE.","artist":"Clint Langley","collectible":true,"howToGetGold":"Unlocked at Hunter Level 55.","mechanics":["Battlecry"]},{"id":"CS2_213","name":"Reckless Rocketeer","type":"Minion","faction":"Horde","rarity":"Free","cost":6,"attack":5,"health":2,"text":"<b>Charge</b>","flavor":"One Insane Rocketeer.   One Rocket full of Explosives.   Infinite Fun.","artist":"John Polidora","collectible":true,"howToGetGold":"Unlocked at Shaman Level 59.","mechanics":["Charge"]},{"id":"CS2_101","name":"Reinforce","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nSummon a 1/1 Silver Hand Recruit.","playerClass":"Paladin"},{"id":"HERO_05","name":"Rexxar","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Hunter"},{"id":"CS2_120","name":"River Crocolisk","type":"Minion","rarity":"Free","cost":2,"attack":2,"health":3,"flavor":"Edward \"Lefty\" Smith tried to make luggage out of a river crocolisk once.","artist":"Daren Bader","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Druid Level 55."},{"id":"CS2_045e","name":"Rockbiter Weapon","type":"Enchantment","text":"This character has +3 Attack this turn.","playerClass":"Shaman","mechanics":["OneTurnEffect"]},{"id":"CS2_045","name":"Rockbiter Weapon","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Give a friendly character +3 Attack this turn.","flavor":"This would be real handy if your enemy is made of rock.","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"NEW1_003","name":"Sacrificial Pact","type":"Spell","rarity":"Common","cost":0,"text":"Destroy a Demon. Restore #5 Health to your hero.","flavor":"This is the reason that Demons never really become friends with Warlocks.","artist":"Jim Nelson","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 15."},{"id":"EX1_581","name":"Sap","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Return an enemy minion to your opponent's hand.","flavor":"Rogues love sappy movies.","artist":"Scott Altmann","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 40."},{"id":"CS2_011","name":"Savage Roar","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Give your characters +2 Attack this turn.","flavor":"What do they roar? Nobody can quite tell, but it sounds like \"Elephant Macho Breeze\".  It's probably not that, though.","artist":"Grace Liu","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 43."},{"id":"CS2_011o","name":"Savage Roar","type":"Enchantment","text":"+2 Attack this turn.","playerClass":"Druid","mechanics":["OneTurnEffect"]},{"id":"CS2_050","name":"Searing Totem","type":"Minion","faction":"Neutral","rarity":"Free","cost":1,"attack":1,"health":1,"race":"Totem","playerClass":"Shaman"},{"id":"CS2_179","name":"Sen'jin Shieldmasta","type":"Minion","faction":"Horde","rarity":"Free","cost":4,"attack":3,"health":5,"text":"<b>Taunt</b>","flavor":"Sen'jin Villiage is nice, if you like trolls and dust.","artist":"Brian Despain","collectible":true,"howToGetGold":"Unlocked at Rogue Level 59.","mechanics":["Taunt"]},{"id":"CS2_057","name":"Shadow Bolt","type":"Spell","faction":"Neutral","rarity":"Free","cost":3,"text":"Deal $4 damage to a minion.","flavor":"It’s a Bolt.   Its made out of Shadow.   What more do you need to know!","artist":"Dave Allsop","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 47."},{"id":"EX1_622","name":"Shadow Word: Death","type":"Spell","rarity":"Common","cost":3,"text":"Destroy a minion with an Attack of 5 or more.","flavor":"If you miss, it leaves a lightning-bolt-shaped scar on your target.","artist":"Raymond Swanland","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 43."},{"id":"CS2_234","name":"Shadow Word: Pain","type":"Spell","rarity":"Free","cost":2,"text":"Destroy a minion with 3 or less Attack.","flavor":"A step up from a spell cast by many beginning acolytes: \"Shadow Word: Annoy\".","artist":"Raymond Swanland","collectible":true,"playerClass":"Priest","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"CS2_017","name":"Shapeshift","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\n+1 Attack this turn.\n+1 Armor.","playerClass":"Druid"},{"id":"CS2_083e","name":"Sharpened","type":"Enchantment","text":"+1 Attack this turn.","playerClass":"Rogue","mechanics":["OneTurnEffect"]},{"id":"EX1_019","name":"Shattered Sun Cleric","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":3,"health":2,"text":"<b>Battlecry:</b> Give a friendly minion +1/+1.","flavor":"They always have a spare flask of Sunwell Energy Drink™!","artist":"Doug Alexander","collectible":true,"howToGetGold":"Unlocked at Priest Level 53.","mechanics":["Battlecry"]},{"id":"CS2_tk1","name":"Sheep","type":"Minion","faction":"Neutral","rarity":"Common","attack":1,"health":1,"race":"Beast","cost":0},{"id":"EX1_606","name":"Shield Block","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Gain 5 Armor.\nDraw a card.","flavor":"Shields were invented because Face Block is USELESS.","artist":"Michael Komarck","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 28."},{"id":"EX1_278","name":"Shiv","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal $1 damage. Draw a card.","flavor":"Rogues are experts at SHIV-al-ry.","artist":"Alex Garner","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 45."},{"id":"CS2_101t","name":"Silver Hand Recruit","type":"Minion","rarity":"Free","cost":1,"attack":1,"health":1,"playerClass":"Paladin"},{"id":"CS2_127","name":"Silverback Patriarch","type":"Minion","faction":"Horde","rarity":"Common","cost":3,"attack":1,"health":4,"text":"<b>Taunt</b>","flavor":"He likes to act like he's in charge, but the silverback matriarch actually runs things.","artist":"Daren Bader","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Warrior Level 53.","mechanics":["Taunt"]},{"id":"CS2_075","name":"Sinister Strike","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Deal $3 damage to the enemy hero.","flavor":"There's something about this strike that just feels off.  Sinister, even.","artist":"Frank Cho","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"skele11","name":"Skeleton","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<b></b>"},{"id":"EX1_308","name":"Soulfire","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Deal $4 damage. Discard a random card.","flavor":"Are you lighting a soul on fire? Or burning someone with your OWN soul? This seems like an important distinction.","artist":"Raymond Swanland","collectible":true,"playerClass":"Warlock","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 28."},{"id":"CS2_077","name":"Sprint","type":"Spell","faction":"Neutral","rarity":"Common","cost":7,"text":"Draw 4 cards.","flavor":"Rogues are not good joggers.","artist":"James Zhang","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 10.","howToGetGold":"Unlocked at Level 49."},{"id":"EX1_173","name":"Starfire","type":"Spell","faction":"Neutral","rarity":"Common","cost":6,"text":"Deal $5 damage.\nDraw a card.","flavor":"Balance is important to druids.  This card is perfectly balanced.","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 45."},{"id":"CS2_237","name":"Starving Buzzard","type":"Minion","rarity":"Common","cost":5,"attack":3,"health":2,"text":"Whenever you summon a Beast, draw a card.","inPlayText":"Soaring","flavor":"If you feed him, he loses his whole <i>identity</i>.","artist":"Bernie Kang","collectible":true,"race":"Beast","playerClass":"Hunter","howToGet":"Unlocked at Level 4.","howToGetGold":"Unlocked at Level 47."},{"id":"DS1h_292","name":"Steady Shot","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nDeal 2 damage to the enemy hero.","playerClass":"Hunter"},{"id":"CS2_051","name":"Stoneclaw Totem","type":"Minion","faction":"Neutral","rarity":"Free","cost":1,"attack":0,"health":2,"text":"<b>Taunt</b>","race":"Totem","playerClass":"Shaman","mechanics":["Taunt"]},{"id":"CS2_171","name":"Stonetusk Boar","type":"Minion","faction":"Neutral","rarity":"Free","cost":1,"attack":1,"health":1,"text":"<b>Charge</b>","flavor":"This card is boaring.","artist":"Howard Lyon","collectible":true,"race":"Beast","howToGetGold":"Unlocked at Hunter Level 53.","mechanics":["Charge"]},{"id":"CS2_150","name":"Stormpike Commando","type":"Minion","faction":"Alliance","rarity":"Common","cost":5,"attack":4,"health":2,"text":"<b>Battlecry:</b> Deal 2 damage.","flavor":"The Stormpike Commandos are demolition experts.  They also bake a mean cupcake.","artist":"Kev Walker","collectible":true,"howToGetGold":"Unlocked at Paladin Level 51.","mechanics":["Battlecry"]},{"id":"CS2_222","name":"Stormwind Champion","type":"Minion","faction":"Alliance","rarity":"Common","cost":7,"attack":6,"health":6,"text":"Your other minions have +1/+1.","inPlayText":"For the Alliance!","flavor":"When Deathwing assaulted the capital, this soldier was the only member of his squad to survive. Now he's all bitter and stuff.","artist":"Doug Alexander","collectible":true,"howToGetGold":"Unlocked at Paladin Level 59.","mechanics":["Aura"]},{"id":"CS2_131","name":"Stormwind Knight","type":"Minion","faction":"Alliance","rarity":"Common","cost":4,"attack":2,"health":5,"text":"<b>Charge</b>","flavor":"They're still embarassed about \"The Deathwing Incident\".","artist":"Ladronn","collectible":true,"howToGetGold":"Unlocked at Paladin Level 55.","mechanics":["Charge"]},{"id":"EX1_306","name":"Succubus","type":"Minion","faction":"Neutral","rarity":"Free","cost":2,"attack":4,"health":3,"text":"<b>Battlecry:</b> Discard a random card.","flavor":"Warlocks have it pretty good.","artist":"Matt Dixon","collectible":true,"race":"Demon","playerClass":"Warlock","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 40.","mechanics":["Battlecry"]},{"id":"CS2_012","name":"Swipe","type":"Spell","faction":"Neutral","rarity":"Common","cost":4,"text":"Deal $4 damage to an enemy and $1 damage to all other enemies.","flavor":"When a bear rears back and extends his arms, he's about to Swipe!  ... or hug.","artist":"Sean O’Daniels","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 47."},{"id":"GAME_005","name":"The Coin","type":"Spell","text":"Gain 1 Mana Crystal this turn only."},{"id":"GAME_005e","name":"The Coin","type":"Enchantment"},{"id":"HERO_02","name":"Thrall","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Shaman"},{"id":"DS1_175","name":"Timber Wolf","type":"Minion","faction":"Neutral","rarity":"Free","cost":1,"attack":1,"health":1,"text":"Your other Beasts have +1 Attack.","flavor":"Other beasts totally dig hanging out with timber wolves.","artist":"Malcolm Davis","collectible":true,"race":"Beast","playerClass":"Hunter","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 23.","mechanics":["Aura"]},{"id":"CS2_049","name":"Totemic Call","type":"Hero Power","faction":"Neutral","rarity":"Free","cost":2,"text":"<b>Hero Power</b>\nSummon a random Totem.","playerClass":"Shaman"},{"id":"EX1_244e","name":"Totemic Might","type":"Enchantment","text":"+2 Health.","playerClass":"Shaman"},{"id":"EX1_244","name":"Totemic Might","type":"Spell","faction":"Neutral","rarity":"Common","cost":0,"text":"Give your Totems +2 Health.","flavor":"Totem-stomping is no longer recommended.","artist":"Trent Kaniuga","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 28."},{"id":"DS1_184","name":"Tracking","type":"Spell","faction":"Neutral","rarity":"Free","cost":1,"text":"Look at the top three cards of your deck. Draw one and discard the others.","flavor":"For the person who just cannot decide what card to put into a deck!","artist":"Mauro Cascioli","collectible":true,"playerClass":"Hunter","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 15."},{"id":"CS2_097","name":"Truesilver Champion","type":"Weapon","faction":"Neutral","rarity":"Common","cost":4,"attack":4,"durability":2,"text":"Whenever your hero attacks, restore 2 Health to it.","flavor":"It Slices, it Dices. You can cut a tin can with it. (But you wouldn't want to.)","artist":"Ryan Sook","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked at Level 2.","howToGetGold":"Unlocked at Level 40."},{"id":"DS1_178","name":"Tundra Rhino","type":"Minion","faction":"Neutral","rarity":"Common","cost":5,"attack":2,"health":5,"text":"Your Beasts have <b>Charge</b>.","flavor":"Tundra rhinos are often mistaken for kodos.  Or am I mistaken?","artist":"Lars Grant-West","collectible":true,"race":"Beast","playerClass":"Hunter","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 43."},{"id":"HERO_04","name":"Uther Lightbringer","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Paladin"},{"id":"HERO_03","name":"Valeera Sanguinar","type":"Hero","faction":"Neutral","rarity":"Free","health":30,"collectible":true,"playerClass":"Rogue"},{"id":"NEW1_004","name":"Vanish","type":"Spell","rarity":"Common","cost":6,"text":"Return all minions to their owner's hand.","artist":"Sean O’Daniels","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 23."},{"id":"CS2_065","name":"Voidwalker","type":"Minion","faction":"Neutral","rarity":"Free","cost":1,"attack":1,"health":3,"text":"<b>Taunt</b>","flavor":"No relation to \"The Voidsteppers\", the popular Void-based dance troupe.","artist":"Alex Horley Orlandelli","collectible":true,"race":"Demon","playerClass":"Warlock","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36.","mechanics":["Taunt"]},{"id":"EX1_011","name":"Voodoo Doctor","type":"Minion","faction":"Horde","rarity":"Free","cost":1,"attack":2,"health":1,"text":"<b>Battlecry:</b> Restore 2 Health.","flavor":"Voodoo is an oft-misunderstood art. But it <i>is</i> art.","artist":"Karl Richardson","collectible":true,"howToGetGold":"Unlocked at Rogue Level 55.","mechanics":["Battlecry"]},{"id":"CS2_186","name":"War Golem","type":"Minion","faction":"Neutral","rarity":"Common","cost":7,"attack":7,"health":7,"flavor":"Golems are not afraid, but for some reason they still run when you cast Fear on them.  Instinct, maybe?  A desire to blend in?","artist":"Dave Kendall","collectible":true,"howToGetGold":"Unlocked at Rogue Level 51."},{"id":"EX1_084","name":"Warsong Commander","type":"Minion","faction":"Neutral","rarity":"Free","cost":3,"attack":2,"health":3,"text":"Whenever you summon a minion with 3 or less Attack, give it <b>Charge</b>.","flavor":"The Warsong clan is <i>such drama</i>. It's really not worth it to become a commander.","artist":"Wei Wang","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 36."},{"id":"CS2_033","name":"Water Elemental","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":3,"health":6,"text":"<b>Freeze</b> any character damaged by this minion.","inPlayText":"Frostbolt","flavor":"Don't summon a water elemental at a party.  It'll dampen the mood.","artist":"John Avon","collectible":true,"playerClass":"Mage","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 49.","mechanics":["Freeze"]},{"id":"EX1_400","name":"Whirlwind","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Deal $1 damage to ALL minions.","flavor":"The way to tell seasoned warriors from novice ones: the novices yell \"wheeeee\" while whirlwinding.","artist":"Jonboy Meyers","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked at Level 6.","howToGetGold":"Unlocked at Level 32."},{"id":"CS2_082","name":"Wicked Knife","type":"Weapon","faction":"Neutral","rarity":"Free","cost":1,"attack":1,"durability":2,"playerClass":"Rogue"},{"id":"CS2_013","name":"Wild Growth","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Gain an empty Mana Crystal.","flavor":"Grow your own mana crystals with this Mana Crystal Growth Kit, only 39.99!","artist":"James Ryman","collectible":true,"playerClass":"Druid","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 23."},{"id":"CS2_039","name":"Windfury","type":"Spell","faction":"Neutral","rarity":"Free","cost":2,"text":"Give a minion <b>Windfury</b>.","flavor":"Windfury is like Earthfury and Firefury, but more light and airy.","artist":"Justin Sweet","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 1.","howToGetGold":"Unlocked at Level 23."},{"id":"EX1_587","name":"Windspeaker","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":3,"health":3,"text":"<b>Battlecry:</b> Give a friendly minion <b>Windfury</b>.","flavor":"Is there anything worse than a Windspeaker with halitosis?","artist":"Vance Kovacs","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked at Level 8.","howToGetGold":"Unlocked at Level 45.","mechanics":["Battlecry"]},{"id":"CS2_124","name":"Wolfrider","type":"Minion","faction":"Horde","rarity":"Free","cost":3,"attack":3,"health":1,"text":"<b>Charge</b>","flavor":"Orcish raiders ride wolves because they are well adapted to harsh environments, and because they are soft and cuddly.","artist":"Dany Orizio","collectible":true,"howToGetGold":"Unlocked at Warrior Level 59.","mechanics":["Charge"]},{"id":"CS2_052","name":"Wrath of Air Totem","type":"Minion","faction":"Neutral","rarity":"Free","cost":1,"attack":0,"health":2,"text":"<b>Spell Damage +1</b>","race":"Totem","playerClass":"Shaman","mechanics":["Spellpower"]}],"Classic":[{"id":"CS2_188o","name":"'Inspired'","type":"Enchantment","text":"This minion has +2 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"EX1_097","name":"Abomination","type":"Minion","faction":"Neutral","rarity":"Rare","cost":5,"attack":4,"health":4,"text":"<b>Taunt</b>. <b>Deathrattle:</b> Deal 2 damage to ALL characters.","flavor":"Abominations enjoy Fresh Meat and long walks on the beach.","artist":"Alex Horley Orlandelli","collectible":true,"mechanics":["Deathrattle","Taunt"]},{"id":"CS2_188","name":"Abusive Sergeant","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":2,"health":1,"text":"<b>Battlecry:</b> Give a minion +2 Attack this turn.","flavor":"ADD ME TO YOUR DECK, MAGGOT!","artist":"Luca Zontini","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_007","name":"Acolyte of Pain","type":"Minion","rarity":"Common","cost":3,"attack":1,"health":3,"text":"Whenever this minion takes damage, draw a card.","flavor":"He trained when he was younger to be an acolyte of joy, but things didn’t work out like he thought they would.","artist":"Dave Kendall","collectible":true},{"id":"NEW1_010","name":"Al'Akir the Windlord","type":"Minion","rarity":"Legendary","cost":8,"attack":3,"health":5,"text":"<b>Windfury, Charge, Divine Shield, Taunt</b>","flavor":"He is the weakest of the four Elemental Lords.  And the other three don't let him forget it.","artist":"Raymond Swanland","collectible":true,"elite":true,"playerClass":"Shaman","mechanics":["Charge","Divine Shield","Taunt","Windfury"]},{"id":"EX1_006","name":"Alarm-o-Bot","type":"Minion","rarity":"Rare","cost":3,"attack":0,"health":3,"text":"At the start of your turn, swap this minion with a random one in your hand.","flavor":"WARNING.  WARNING.  WARNING.","artist":"Sean O’Daniels","collectible":true,"race":"Mech"},{"id":"EX1_382","name":"Aldor Peacekeeper","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> Change an enemy minion's Attack to 1.","flavor":"The Aldor hate two things: the Scryers and smooth jazz.","artist":"Dany Orizio","collectible":true,"playerClass":"Paladin","mechanics":["Battlecry"]},{"id":"EX1_561","name":"Alexstrasza","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":8,"health":8,"text":"<b>Battlecry:</b> Set a hero's remaining Health to 15.","flavor":"Alexstrasza the Life-Binder brings life and hope to everyone.  Except Deathwing.  And Malygos.  And Nekros.","artist":"Raymond Swanland","collectible":true,"elite":true,"race":"Dragon","mechanics":["Battlecry"]},{"id":"EX1_561e","name":"Alexstrasza's Fire","type":"Enchantment","text":"Health set to 15."},{"id":"EX1_393","name":"Amani Berserker","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":3,"text":"<b>Enrage:</b> +3 Attack","flavor":"If an Amani berserker asks \"Joo lookin' at me?!\", the correct response is \"Nah, mon\".","artist":"Chippy","collectible":true,"mechanics":["Enrage"]},{"id":"CS2_038e","name":"Ancestral Spirit","type":"Enchantment","text":"<b>Deathrattle:</b> Resummon this minion.","playerClass":"Shaman"},{"id":"CS2_038","name":"Ancestral Spirit","type":"Spell","faction":"Neutral","rarity":"Rare","cost":2,"text":"Give a minion \"<b>Deathrattle:</b> Resummon this minion.\"","flavor":"It was just a flesh wound.","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Shaman"},{"id":"EX1_057","name":"Ancient Brewmaster","type":"Minion","faction":"Alliance","rarity":"Common","cost":4,"attack":5,"health":4,"text":"<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.","flavor":"Most pandaren say his brew tastes like yak.  But apparently that's a compliment.","artist":"Bernie Kang","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_584","name":"Ancient Mage","type":"Minion","faction":"Neutral","rarity":"Rare","cost":4,"attack":2,"health":5,"text":"<b>Battlecry:</b> Give adjacent minions <b>Spell Damage +1</b>.","flavor":"Sometimes he forgets and just wanders into someone else's game.","artist":"Howard Lyon","collectible":true,"mechanics":["Battlecry"]},{"id":"NEW1_008b","name":"Ancient Secrets","type":"Spell","text":"Restore 5 Health.","playerClass":"Druid"},{"id":"NEW1_008a","name":"Ancient Teachings","type":"Spell","text":"Draw 2 cards.","playerClass":"Druid"},{"id":"EX1_045","name":"Ancient Watcher","type":"Minion","faction":"Alliance","rarity":"Rare","cost":2,"attack":4,"health":5,"text":"Can't Attack.","flavor":"Why do its eyes seem to follow you as you walk by?","artist":"Richard Wright","collectible":true},{"id":"NEW1_008","name":"Ancient of Lore","type":"Minion","rarity":"Epic","cost":7,"attack":5,"health":5,"text":"<b>Choose One -</b> Draw 2 cards; or Restore 5 Health.","flavor":"Go ahead, carve your initials in him.","artist":"Patrik Hjelm","collectible":true,"playerClass":"Druid"},{"id":"EX1_178","name":"Ancient of War","type":"Minion","faction":"Neutral","rarity":"Epic","cost":7,"attack":5,"health":5,"text":"<b>Choose One</b> -\n+5 Attack; or +5 Health and <b>Taunt</b>.","flavor":"Young Night Elves love to play \"Who can get the Ancient of War to Uproot?\"  You lose if you get crushed to death.","artist":"Sean O’Daniels","collectible":true,"playerClass":"Druid"},{"id":"EX1_009","name":"Angry Chicken","type":"Minion","rarity":"Rare","cost":1,"attack":1,"health":1,"text":"<b>Enrage:</b> +5 Attack.","flavor":"There is no beast more frightening (or ridiculous) than a fully enraged chicken.","artist":"Mike Sass","collectible":true,"race":"Beast","mechanics":["Enrage"]},{"id":"EX1_398","name":"Arathi Weaponsmith","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":3,"health":3,"text":"<b>Battlecry:</b> Equip a 2/2 weapon.","flavor":"50% off fist weapons, limited time only!","artist":"Samwise","collectible":true,"playerClass":"Warrior","mechanics":["Battlecry"]},{"id":"EX1_089","name":"Arcane Golem","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":4,"health":2,"text":"<b>Charge</b>. <b>Battlecry:</b> Give your opponent a Mana Crystal.","flavor":"Having Arcane golems at home really classes up the place, and as a bonus they are great conversation pieces.","artist":"Sedhayu Ardian","collectible":true,"mechanics":["Battlecry","Charge"]},{"id":"EX1_559","name":"Archmage Antonidas","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":7,"attack":5,"health":7,"text":"Whenever you cast a spell, add a 'Fireball' spell to your hand.","inPlayText":"Grand Magus","flavor":"Antonidas was the Grand Magus of the Kirin Tor, and Jaina's mentor.  This was a big step up from being Grand Magus of Jelly Donuts.","artist":"Wayne Reynolds","collectible":true,"elite":true,"playerClass":"Mage"},{"id":"EX1_067","name":"Argent Commander","type":"Minion","faction":"Neutral","rarity":"Rare","cost":6,"attack":4,"health":2,"text":"<b>Charge</b>, <b>Divine Shield</b>","flavor":"The Argent Dawn stands vigilant against the Scourge, as well as people who cut in line at coffee shops.","artist":"James Ryman","collectible":true,"mechanics":["Charge","Divine Shield"]},{"id":"EX1_362","name":"Argent Protector","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Battlecry:</b> Give a friendly minion <b>Divine Shield</b>.","flavor":"\"I'm not saying you can dodge fireballs.  I'm saying with this shield, you won't have to.\"","artist":"Doug Alexander","collectible":true,"playerClass":"Paladin","mechanics":["Battlecry"]},{"id":"EX1_008","name":"Argent Squire","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<b>Divine Shield</b>","flavor":"\"I solemnly swear to uphold the Light, purge the world of darkness, and to eat only burritos.\" - The Argent Dawn Oath","artist":"Zoltan & Gabor","collectible":true,"mechanics":["Divine Shield"]},{"id":"EX1_402","name":"Armorsmith","type":"Minion","faction":"Neutral","rarity":"Rare","cost":2,"attack":1,"health":4,"text":"Whenever a friendly minion takes damage, gain 1 Armor.","inPlayText":"Smithing","flavor":"She accepts guild funds for repairs!","artist":"Greg Hildebrandt","collectible":true,"playerClass":"Warrior"},{"id":"EX1_383t","name":"Ashbringer","type":"Weapon","rarity":"Legendary","cost":5,"attack":5,"durability":3,"playerClass":"Paladin"},{"id":"EX1_591","name":"Auchenai Soulpriest","type":"Minion","faction":"Neutral","rarity":"Rare","cost":4,"attack":3,"health":5,"text":"Your cards and powers that restore Health now deal damage instead.","flavor":"The Auchenai know the end is coming, but they're not sure when.","artist":"Doug Alexander","collectible":true,"playerClass":"Priest","mechanics":["Aura"]},{"id":"EX1_384","name":"Avenging Wrath","type":"Spell","faction":"Neutral","rarity":"Epic","cost":6,"text":"Deal $8 damage randomly split among enemy characters.","flavor":"Wham! Wham! Wham! Wham! Wham! Wham! Wham! Wham!","artist":"Alex Garner","collectible":true,"playerClass":"Paladin","mechanics":["ImmuneToSpellpower"]},{"id":"EX1_284","name":"Azure Drake","type":"Minion","faction":"Neutral","rarity":"Rare","cost":5,"attack":4,"health":4,"text":"<b>Spell Damage +1</b>. <b>Battlecry:</b> Draw a card.","flavor":"They initially planned to be the Beryl or Cerulean drakes, but those felt a tad too pretentious.","artist":"Ben Zhang","collectible":true,"race":"Dragon","mechanics":["Battlecry","Spellpower"]},{"id":"EX1_110t","name":"Baine Bloodhoof","type":"Minion","rarity":"Legendary","cost":4,"attack":4,"health":5,"elite":true},{"id":"EX1_014te","name":"Bananas","type":"Enchantment","text":"Has +1/+1."},{"id":"EX1_014t","name":"Bananas","type":"Spell","cost":1,"text":"Give a minion +1/+1."},{"id":"EX1_320","name":"Bane of Doom","type":"Spell","faction":"Neutral","rarity":"Epic","cost":5,"text":"Deal $2 damage to a character. If that kills it, summon a random Demon.","flavor":"My advice to you is to avoid Doom, if possible.","artist":"Raymond Swanland","collectible":true,"playerClass":"Warlock"},{"id":"EX1_249","name":"Baron Geddon","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":7,"attack":7,"health":5,"text":"At the end of your turn, deal 2 damage to ALL other characters.","flavor":"Baron Geddon was Ragnaros's foremost lieutenant, until he got FIRED.","artist":"Ian Ameling","collectible":true,"elite":true},{"id":"EX1_398t","name":"Battle Axe","type":"Weapon","cost":1,"attack":2,"durability":2,"playerClass":"Warrior"},{"id":"EX1_392","name":"Battle Rage","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Draw a card for each damaged friendly character.","flavor":"\"You won't like me when I'm angry.\"","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Warrior"},{"id":"EX1_165b","name":"Bear Form","type":"Spell","faction":"Neutral","rarity":"Common","text":"+2 Health and <b>Taunt</b>.","playerClass":"Druid"},{"id":"EX1_604o","name":"Berserk","type":"Enchantment","text":"Increased Attack.","playerClass":"Warrior"},{"id":"EX1_549","name":"Bestial Wrath","type":"Spell","faction":"Neutral","rarity":"Epic","cost":1,"text":"Give a friendly Beast +2 Attack and <b>Immune</b> this turn.","flavor":"The seething wrath is just beneath the surface.  Beneath that is wild abandon, followed by slight annoyance.","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Hunter"},{"id":"EX1_549o","name":"Bestial Wrath","type":"Enchantment","text":"+2 Attack and <b>Immune</b> this turn.","playerClass":"Hunter","mechanics":["OneTurnEffect"]},{"id":"EX1_126","name":"Betrayal","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Force an enemy minion to deal its damage to the minions next to it.","flavor":"Everyone has a price. Gnomes, for example, can be persuaded by stuffed animals and small amounts of chocolate.","artist":"Lucas Graciano","collectible":true,"playerClass":"Rogue"},{"id":"EX1_005","name":"Big Game Hunter","type":"Minion","rarity":"Epic","cost":3,"attack":4,"health":2,"text":"<b>Battlecry:</b> Destroy a minion with an Attack of 7 or more.","flavor":"Mere devilsaurs no longer excite him.  Soon he'll be trying to catch Onyxia with only a dull Krol Blade.","artist":"Chris Seaman","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_570","name":"Bite","type":"Spell","faction":"Neutral","rarity":"Rare","cost":4,"text":"Give your hero +4 Attack this turn and 4 Armor.","flavor":"Chew your food!","artist":"Tom Baxa","collectible":true,"playerClass":"Druid"},{"id":"EX1_570e","name":"Bite","type":"Enchantment","text":"+4 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"CS2_233","name":"Blade Flurry","type":"Spell","faction":"Neutral","rarity":"Rare","cost":2,"text":"Destroy your weapon and deal its damage to all enemies.","flavor":"\"Look, it's not just about waving daggers around really fast.  It's a lot more complicated than that.\" - Shan, Rogue Trainer","artist":"Hideaki Takamura","collectible":true,"playerClass":"Rogue","mechanics":["AffectedBySpellPower"]},{"id":"EX1_509e","name":"Blarghghl","type":"Enchantment","text":"Increased Attack."},{"id":"EX1_355e","name":"Blessed Champion","type":"Enchantment","text":"This minion's Attack has been doubled.","playerClass":"Paladin"},{"id":"EX1_355","name":"Blessed Champion","type":"Spell","rarity":"Rare","cost":5,"text":"Double a minion's Attack.","flavor":"This card causes double the trouble AND double the fun.","artist":"Tyler Walpole","collectible":true,"playerClass":"Paladin"},{"id":"EX1_363","name":"Blessing of Wisdom","type":"Spell","rarity":"Common","cost":1,"text":"Choose a minion. Whenever it attacks, draw a card.","flavor":"Apparently with wisdom comes the knowledge that you should probably be attacking every turn.","artist":"Chippy","collectible":true,"playerClass":"Paladin"},{"id":"EX1_363e","name":"Blessing of Wisdom","type":"Enchantment","text":"When this minion attacks, the player who blessed it draws a card.","playerClass":"Paladin"},{"id":"EX1_363e2","name":"Blessing of Wisdom","type":"Enchantment","text":"When this minion attacks, the enemy player draws a card.","playerClass":"Paladin"},{"id":"CS2_028","name":"Blizzard","type":"Spell","faction":"Neutral","rarity":"Rare","cost":6,"text":"Deal $2 damage to all enemy minions and <b>Freeze</b> them.","flavor":"This spell can be very Entertaining.","artist":"Chris Seaman","collectible":true,"playerClass":"Mage","mechanics":["Freeze"]},{"id":"EX1_323w","name":"Blood Fury","type":"Weapon","cost":3,"attack":3,"durability":8,"playerClass":"Warlock"},{"id":"CS2_059","name":"Blood Imp","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":0,"health":1,"text":"<b>Stealth</b>. At the end of your turn, give another random friendly minion +1 Health.","inPlayText":"Blood Pact","flavor":"Imps are content to hide and viciously taunt everyone nearby.","artist":"Bernie Kang","collectible":true,"race":"Demon","playerClass":"Warlock","mechanics":["Stealth"]},{"id":"EX1_590","name":"Blood Knight","type":"Minion","faction":"Neutral","rarity":"Epic","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> All minions lose <b>Divine Shield</b>. Gain +3/+3 for each Shield lost.","flavor":"The Blood Knights get their holy powers from the Sunwell, which you should NOT bathe in.","artist":"Trent Kaniuga","collectible":true,"mechanics":["Battlecry"]},{"id":"CS2_059o","name":"Blood Pact","type":"Enchantment","text":"Increased Health.","playerClass":"Warlock"},{"id":"EX1_012","name":"Bloodmage Thalnos","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":2,"attack":1,"health":1,"text":"<b>Spell Damage +1</b>. <b>Deathrattle:</b> Draw a card.","flavor":"He's in charge of the Annual Scarlet Monastery Blood Drive!","artist":"Alex Horley Orlandelli","collectible":true,"elite":true,"mechanics":["Deathrattle","Spellpower"]},{"id":"EX1_411e","name":"Bloodrage","type":"Enchantment","text":"No durability loss.","playerClass":"Warrior"},{"id":"NEW1_025","name":"Bloodsail Corsair","type":"Minion","rarity":"Rare","cost":1,"attack":1,"health":2,"text":"<b>Battlecry:</b> Remove 1 Durability from your opponent's weapon.","flavor":"Every pirate uses the same four digits to access Automated Gold Dispensers.  It's called the \"Pirate's Code\".","artist":"Randy Gallegos","collectible":true,"race":"Pirate","mechanics":["Battlecry"]},{"id":"NEW1_018","name":"Bloodsail Raider","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":3,"text":"<b>Battlecry:</b> Gain Attack equal to the Attack of your weapon.","flavor":"\"I only plunder on days that end in 'y'.\"","artist":"Jim Nelson","collectible":true,"race":"Pirate","mechanics":["Battlecry"]},{"id":"NEW1_025e","name":"Bolstered","type":"Enchantment","text":"Increased Health."},{"id":"EX1_407","name":"Brawl","type":"Spell","faction":"Neutral","rarity":"Epic","cost":5,"text":"Destroy all minions except one. <i>(chosen randomly)</i>","flavor":"Do you know the first rule of Brawl Club?","artist":"Wayne Reynolds","collectible":true,"playerClass":"Warrior"},{"id":"EX1_091","name":"Cabal Shadow Priest","type":"Minion","faction":"Neutral","rarity":"Epic","cost":6,"attack":4,"health":5,"text":"<b>Battlecry:</b> Take control of an enemy minion that has 2 or less Attack.","flavor":"You never know who may be secretly working for the Cabal....","artist":"Chippy","collectible":true,"playerClass":"Priest","mechanics":["Battlecry"]},{"id":"EX1_110","name":"Cairne Bloodhoof","type":"Minion","faction":"Alliance","rarity":"Legendary","cost":6,"attack":4,"health":5,"text":"<b>Deathrattle:</b> Summon a 4/5 Baine Bloodhoof.","flavor":"Cairne was killed by Garrosh, so... don't put this guy in a Warrior deck.  It's pretty insensitive.","artist":"Wayne Reynolds","collectible":true,"elite":true,"mechanics":["Deathrattle"]},{"id":"tt_004o","name":"Cannibalize","type":"Enchantment","text":"Increased Attack."},{"id":"NEW1_024","name":"Captain Greenskin","type":"Minion","rarity":"Legendary","cost":5,"attack":5,"health":4,"text":"<b>Battlecry:</b> Give your weapon +1/+1.","flavor":"He was <i>this close</i> to piloting a massive juggernaut into Stormwind Harbor. If it weren't for those pesky kids!","artist":"Dan Scott","collectible":true,"elite":true,"race":"Pirate","mechanics":["Battlecry"]},{"id":"EX1_165a","name":"Cat Form","type":"Spell","faction":"Neutral","rarity":"Common","text":"<b>Charge</b>","playerClass":"Druid"},{"id":"EX1_573","name":"Cenarius","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":5,"health":8,"text":"<b>Choose One</b> - Give your other minions +2/+2; or Summon two 2/2 Treants with <b>Taunt</b>.","inPlayText":"Demigod","flavor":"Yes, he's a demigod. No, he doesn't need to wear a shirt.","artist":"Alex Horley Orlandelli","collectible":true,"elite":true,"playerClass":"Druid"},{"id":"EX1_621","name":"Circle of Healing","type":"Spell","rarity":"Common","cost":0,"text":"Restore #4 Health to ALL minions.","flavor":"It isn't really a circle.","artist":"Daarken","collectible":true,"playerClass":"Priest"},{"id":"CS2_073e","name":"Cold Blood","type":"Enchantment","text":"+2 Attack.","playerClass":"Rogue"},{"id":"CS2_073","name":"Cold Blood","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Give a minion +2 Attack. <b>Combo:</b> +4 Attack instead.","flavor":"\"I'm cold blooded, check it and see!\"","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"CS2_073e2","name":"Cold Blood","type":"Enchantment","text":"+4 Attack.","playerClass":"Rogue"},{"id":"EX1_050","name":"Coldlight Oracle","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":2,"health":2,"text":"<b>Battlecry:</b> Each player draws 2 cards.","flavor":"They can see the future.   In that future both players draw more cards.   Spoooky.","artist":"Steve Prescott","collectible":true,"race":"Murloc","mechanics":["Battlecry"]},{"id":"EX1_103","name":"Coldlight Seer","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":2,"health":3,"text":"<b>Battlecry:</b> Give ALL other Murlocs +2 Health.","flavor":"The Coldlight murlocs reside in the darkest pits of the Abyssal Depths.  So no, there's no getting away from murlocs.","artist":"Arthur Gimaldinov","collectible":true,"race":"Murloc","mechanics":["Battlecry"]},{"id":"NEW1_036e2","name":"Commanding Shout","type":"Enchantment","text":"Your minions can't be reduced below 1 Health this turn.","playerClass":"Warrior","mechanics":["OneTurnEffect"]},{"id":"NEW1_036","name":"Commanding Shout","type":"Spell","rarity":"Rare","cost":2,"text":"Your minions can't be reduced below 1 Health this turn. Draw a card.","flavor":"\"Shout! Shout! Let it all out!\" - Advice to warriors-in-training","artist":"Wayne Reynolds","collectible":true,"playerClass":"Warrior"},{"id":"NEW1_036e","name":"Commanding Shout","type":"Enchantment","text":"Can't be reduced below 1 Health this turn.","playerClass":"Warrior","mechanics":["OneTurnEffect"]},{"id":"EX1_128","name":"Conceal","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Give your minions <b>Stealth</b> until your next turn.","flavor":"Rogues conceal everything but their emotions.  You can't get 'em to shut up about feelings.","artist":"Steve Hui","collectible":true,"playerClass":"Rogue"},{"id":"EX1_128e","name":"Concealed","type":"Enchantment","text":"Stealthed until your next turn.","playerClass":"Rogue"},{"id":"EX1_275","name":"Cone of Cold","type":"Spell","faction":"Neutral","rarity":"Common","cost":4,"text":"<b>Freeze</b> a minion and the minions next to it, and deal $1 damage to them.","flavor":"Magi of the Kirin Tor were casting Cubes of Cold for many years before Cones came into fashion some 90 years ago.","artist":"Leo Che","collectible":true,"playerClass":"Mage","mechanics":["Freeze"]},{"id":"EX1_304e","name":"Consume","type":"Enchantment","text":"Increased stats.","playerClass":"Warlock"},{"id":"EX1_287","name":"Counterspell","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"<b>Secret:</b> When your opponent casts a spell, <b>Counter</b> it.","flavor":"What's the difference between a mage playing with Counterspell and a mage who isn't?  The mage who isn't is getting Pyroblasted in the face.","artist":"Jason Chan","collectible":true,"playerClass":"Mage","mechanics":["Secret"]},{"id":"EX1_059","name":"Crazed Alchemist","type":"Minion","faction":"Neutral","rarity":"Rare","cost":2,"attack":2,"health":2,"text":"<b>Battlecry:</b> Swap the Attack and Health of a minion.","flavor":"\"You'll <i>love</i> my new recipe!\" he says... especially if you're not happy with your current number of limbs.","artist":"Tom Fleming","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_603","name":"Cruel Taskmaster","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Battlecry:</b> Deal 1 damage to a minion and give it +2 Attack.","flavor":"\"I'm going to need you to come in on Sunday.\" - Cruel Taskmaster","artist":"Phroilan Gardner","collectible":true,"playerClass":"Warrior","mechanics":["Battlecry"]},{"id":"EX1_595","name":"Cult Master","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":4,"health":2,"text":"Whenever one of your other minions dies, draw a card.","inPlayText":"Cultist","flavor":"She may be an evil cult master, but she still calls her parents once a week.","artist":"Raymond Swanland","collectible":true},{"id":"skele21","name":"Damaged Golem","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":2,"health":1,"race":"Mech"},{"id":"EX1_334e","name":"Dark Command","type":"Enchantment","text":"This minion has switched controllers this turn.","playerClass":"Priest"},{"id":"EX1_046","name":"Dark Iron Dwarf","type":"Minion","faction":"Alliance","rarity":"Common","cost":4,"attack":4,"health":4,"text":"<b>Battlecry:</b> Give a minion +2 Attack this turn.","flavor":"Guardians of Dark Iron Ore.  Perhaps the most annoying ore, given where you have to forge it.","artist":"Scott Hampton","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_617","name":"Deadly Shot","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Destroy a random enemy minion.","flavor":"Accuracy is not a highly valued trait among the mok'nathal.  Deadliness is near the top, though.","artist":"Steve Prescott","collectible":true,"playerClass":"Hunter"},{"id":"NEW1_030","name":"Deathwing","type":"Minion","rarity":"Legendary","cost":10,"attack":12,"health":12,"text":"<b>Battlecry:</b> Destroy all other minions and discard your hand.","flavor":"Once a noble dragon known as Neltharion, Deathwing lost his mind and shattered Azeroth before finally being defeated.  Daddy issues?","artist":"Bernie Kang","collectible":true,"elite":true,"race":"Dragon","mechanics":["Battlecry"]},{"id":"EX1_130a","name":"Defender","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":2,"health":1,"playerClass":"Paladin"},{"id":"EX1_093","name":"Defender of Argus","type":"Minion","faction":"Alliance","rarity":"Rare","cost":4,"attack":2,"health":3,"text":"<b>Battlecry:</b> Give adjacent minions +1/+1 and <b>Taunt</b>.","flavor":"You wouldn’t think that Argus would need this much defending.  But it does.","artist":"Alex Horley Orlandelli","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_131t","name":"Defias Bandit","type":"Minion","faction":"Neutral","cost":1,"attack":2,"health":1,"playerClass":"Rogue"},{"id":"EX1_131","name":"Defias Ringleader","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Combo:</b> Summon a 2/1 Defias Bandit.","flavor":"He stole the deed to town years ago, so technically the town <i>is</i> his. He just calls people Scrub to be mean.","artist":"Dany Orizio","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"EX1_573ae","name":"Demigod's Favor","type":"Enchantment","faction":"Neutral","text":"+2/+2.","playerClass":"Druid"},{"id":"EX1_573a","name":"Demigod's Favor","type":"Spell","faction":"Neutral","text":"Give your other minions +2/+2.","playerClass":"Druid"},{"id":"EX1_102","name":"Demolisher","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":1,"health":4,"text":"At the start of your turn, deal 2 damage to a random enemy.","inPlayText":"Catapult","flavor":"Laying siege isn't fun for anyone.  It's not even all that effective, now that everyone has a flying mount.","artist":"Raymond Swanland","collectible":true,"race":"Mech"},{"id":"EX1_596","name":"Demonfire","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal $2 damage to a minion. If it’s a friendly Demon, give it +2/+2 instead.","flavor":"Demonfire is like regular fire except for IT NEVER STOPS BURNING HELLLPPP","artist":"Ben Wootten","collectible":true,"playerClass":"Warlock"},{"id":"EX1_596e","name":"Demonfire","type":"Enchantment","faction":"Neutral","rarity":"Common","cost":0,"text":"This Demon has +2/+2.","playerClass":"Warlock"},{"id":"EX1_161o","name":"Demoralizing Roar","type":"Enchantment","text":"This minion has -3 Attack this turn.","playerClass":"Druid","mechanics":["OneTurnEffect"]},{"id":"EX1_tk29","name":"Devilsaur","type":"Minion","faction":"Neutral","rarity":"Common","cost":5,"attack":5,"health":5,"race":"Beast"},{"id":"EX1_162","name":"Dire Wolf Alpha","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":2,"text":"Adjacent minions have +1 Attack.","inPlayText":"Alpha Dog","flavor":"We are pretty excited about the upcoming release of Dire Wolf Beta, just repost this sign for a chance at a key.","artist":"John Dickenson","collectible":true,"race":"Beast","mechanics":["AdjacentBuff","Aura"]},{"id":"EX1_166b","name":"Dispel","type":"Spell","faction":"Neutral","text":"<b>Silence</b> a minion.","playerClass":"Druid","mechanics":["Silence"]},{"id":"EX1_349","name":"Divine Favor","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"Draw cards until you have as many in hand as your opponent.","flavor":"This is not just a favor, but a divine one, like helping someone move a couch with a fold out bed!","artist":"Lucas Graciano","collectible":true,"playerClass":"Paladin"},{"id":"EX1_310","name":"Doomguard","type":"Minion","faction":"Neutral","rarity":"Rare","cost":5,"attack":5,"health":7,"text":"<b>Charge</b>. <b>Battlecry:</b> Discard two random cards.","flavor":"Summoning a doomguard is risky. <i>Someone</i> is going to die.","artist":"Lucas Graciano","collectible":true,"race":"Demon","playerClass":"Warlock","mechanics":["Battlecry","Charge"]},{"id":"EX1_567","name":"Doomhammer","type":"Weapon","faction":"Neutral","rarity":"Epic","cost":5,"attack":2,"durability":8,"text":"<b>Windfury, Overload:</b> (2)","flavor":"Orgrim Doomhammer gave this legendary weapon to Thrall.  His name is a total coincidence.","artist":"John Polidora","collectible":true,"playerClass":"Shaman","mechanics":["Windfury"]},{"id":"NEW1_021","name":"Doomsayer","type":"Minion","rarity":"Epic","cost":2,"attack":0,"health":7,"text":"At the start of your turn, destroy ALL minions.","flavor":"He's almost been right so many times. He was <i>sure</i> it was coming during the Cataclysm.","artist":"Alex Horley Orlandelli","collectible":true},{"id":"NEW1_022","name":"Dread Corsair","type":"Minion","rarity":"Common","cost":4,"attack":3,"health":3,"text":"<b>Taunt.</b> Costs (1) less per Attack of your weapon.","flavor":"\"Yarrrr\" is a pirate word that means \"Greetings, milord.\"","artist":"Trent Kaniuga","collectible":true,"race":"Pirate","mechanics":["Taunt"]},{"id":"DREAM_04","name":"Dream","type":"Spell","cost":0,"text":"Return a minion to its owner's hand.","playerClass":"Dream"},{"id":"EX1_165t2","name":"Druid of the Claw","type":"Minion","rarity":"Common","cost":5,"attack":4,"health":6,"text":"<b>Taunt</b>","race":"Beast","playerClass":"Druid","mechanics":["Taunt"]},{"id":"EX1_165","name":"Druid of the Claw","type":"Minion","faction":"Neutral","rarity":"Common","cost":5,"attack":4,"health":4,"text":"<b>Choose One -</b> <b>Charge</b>; or +2 Health and <b>Taunt</b>.","flavor":"Cat or Bear?  Cat or Bear?!  I just cannot CHOOSE!","artist":"Luca Zontini","collectible":true,"playerClass":"Druid"},{"id":"EX1_165t1","name":"Druid of the Claw","type":"Minion","rarity":"Common","cost":5,"attack":4,"health":4,"text":"<b>Charge</b>","race":"Beast","playerClass":"Druid","mechanics":["Charge"]},{"id":"EX1_243","name":"Dust Devil","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":3,"health":1,"text":"<b>Windfury</b>. <b>Overload:</b> (2)","flavor":"Westfall is full of dust devils. And buzzards. And crazed golems. And pirates. Why does anyone live here?","artist":"Raymond Swanland","collectible":true,"playerClass":"Shaman","mechanics":["Windfury"]},{"id":"EX1_536","name":"Eaglehorn Bow","type":"Weapon","rarity":"Rare","cost":3,"attack":3,"durability":2,"text":"Whenever a friendly <b>Secret</b> is revealed, gain +1 Durability.","flavor":"First Lesson: Put the pointy end in the other guy.","artist":"Cyril Van Der Haegen","collectible":true,"playerClass":"Hunter"},{"id":"EX1_250","name":"Earth Elemental","type":"Minion","faction":"Neutral","rarity":"Epic","cost":5,"attack":7,"health":8,"text":"<b>Taunt</b>. <b>Overload:</b> (3)","flavor":"Nothing beats rock.","artist":"Dan Scott","collectible":true,"playerClass":"Shaman","mechanics":["Taunt"]},{"id":"EX1_245","name":"Earth Shock","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"<b>Silence</b> a minion, then deal $1 damage to it.","flavor":"Earth Shock? Shouldn't it be \"Azeroth Shock\"?","artist":"Kevin Chin","collectible":true,"playerClass":"Shaman","mechanics":["Silence"]},{"id":"CS2_117","name":"Earthen Ring Farseer","type":"Minion","rarity":"Common","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> Restore 3 Health.","flavor":"He can see really far, and he doesn't use a telescope like those filthy pirates.","artist":"Alex Horley Orlandelli","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_613","name":"Edwin VanCleef","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":3,"attack":2,"health":2,"text":"<b>Combo:</b> Gain +2/+2 for each card played earlier this turn.","flavor":"He led the Stonemasons in the reconstruction of Stormwind, and when the nobles refused to pay, he founded the Defias Brotherhood to, well, <i>deconstruct</i> Stormwind.","artist":"Efrem Palacios","collectible":true,"elite":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"EX1_004e","name":"Elune's Grace","type":"Enchantment","text":"Increased Health."},{"id":"DREAM_03","name":"Emerald Drake","type":"Minion","cost":4,"attack":7,"health":6,"race":"Dragon","playerClass":"Dream"},{"id":"EX1_170","name":"Emperor Cobra","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":2,"health":3,"text":"Destroy any minion damaged by this minion.","inPlayText":"Fanged","flavor":"The Sholazar Basin is home to a lot of really horrible things. If you're going to visit, wear bug spray.  And plate armor.","artist":"Lars Grant-West","collectible":true,"race":"Beast","mechanics":["Poisonous"]},{"id":"EX1_055o","name":"Empowered","type":"Enchantment","text":"Mana Addict has increased Attack.","mechanics":["OneTurnEffect"]},{"id":"EX1_619e","name":"Equality","type":"Enchantment","text":"Health changed to 1.","playerClass":"Paladin"},{"id":"EX1_619","name":"Equality","type":"Spell","faction":"Neutral","rarity":"Rare","cost":2,"text":"Change the Health of ALL minions to 1.","flavor":"We are all special unique snowflakes... with 1 Health.","artist":"Michal Ivan","collectible":true,"playerClass":"Paladin"},{"id":"NEW1_037e","name":"Equipped","type":"Enchantment","text":"Increased Attack.","collectible":false},{"id":"EX1_274","name":"Ethereal Arcanist","type":"Minion","rarity":"Rare","cost":4,"attack":3,"health":3,"text":"If you control a <b>Secret</b> at the end of your turn, gain +2/+2.","flavor":"The ethereals are wrapped in cloth to give form to their non-corporeal bodies. Also because it's nice and soft.","artist":"Michael Komarck","collectible":true,"elite":false,"playerClass":"Mage"},{"id":"EX1_124","name":"Eviscerate","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal $2 damage. <b>Combo:</b> Deal $4 damage instead.","flavor":"There is a high cost to Eviscerating your opponent:  It takes a long time to get blood stains out of leather armor.","artist":"Ariel Olivetti","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"EX1_059e","name":"Experiments!","type":"Enchantment","text":"Attack and Health have been swapped by Crazed Alchemist."},{"id":"EX1_537","name":"Explosive Shot","type":"Spell","faction":"Neutral","rarity":"Rare","cost":5,"text":"Deal $5 damage to a minion and $2 damage to adjacent ones.","flavor":"Pull the pin, count to 5, then shoot.  Then duck.","artist":"Tom Baxa","collectible":true,"playerClass":"Hunter"},{"id":"EX1_610","name":"Explosive Trap","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"<b>Secret:</b> When your hero is attacked, deal $2 damage to all enemies.","flavor":"It traps your food AND cooks it for you!","artist":"Brandon Kitkouski","collectible":true,"playerClass":"Hunter","mechanics":["Secret"]},{"id":"EX1_132","name":"Eye for an Eye","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"<b>Secret:</b> When your hero takes damage, deal that much damage to the enemy hero.","flavor":"Justice sometimes takes the form of a closed fist into a soft cheek.","artist":"James Ryman","collectible":true,"playerClass":"Paladin","mechanics":["Secret"]},{"id":"EX1_564","name":"Faceless Manipulator","type":"Minion","faction":"Neutral","rarity":"Epic","cost":5,"attack":3,"health":3,"text":"<b>Battlecry:</b> Choose a minion and become a copy of it.","flavor":"The Faceless Ones are servants of Yogg-Saron, and they feed on fear. Right now they are feeding on your fear of accidentally disenchanting all your good cards.","artist":"Raymond Swanland","collectible":true,"mechanics":["Battlecry"]},{"id":"NEW1_023","name":"Faerie Dragon","type":"Minion","rarity":"Common","cost":2,"attack":3,"health":2,"text":"Can't be targeted by spells or Hero Powers.","flavor":"Adorable.  Immune to Magic.  Doesn't pee on the rug.  The perfect pet!","artist":"Samwise","collectible":true,"race":"Dragon"},{"id":"CS2_053e","name":"Far Sight","type":"Enchantment","text":"One of your cards costs (3) less.","artist":"Lars Grant-West","playerClass":"Shaman"},{"id":"CS2_053","name":"Far Sight","type":"Spell","faction":"Neutral","rarity":"Epic","cost":3,"text":"Draw a card. That card costs (3) less.","flavor":"Drek'thar can't see, but he can <i>see</i>. You know what I mean? It's ok if you don't.","artist":"Lars Grant-West","collectible":true,"playerClass":"Shaman"},{"id":"EX1_301","name":"Felguard","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":3,"health":5,"text":"<b>Taunt</b>. <b>Battlecry:</b> Destroy one of your Mana Crystals.","flavor":"Yes, he'll fight for you.  BUT HE'S NOT GOING TO LIKE IT.","artist":"John Polidora","collectible":true,"race":"Demon","playerClass":"Warlock","mechanics":["Battlecry","Taunt"]},{"id":"CS1_069","name":"Fen Creeper","type":"Minion","faction":"Alliance","rarity":"Common","cost":5,"attack":3,"health":6,"text":"<b>Taunt</b>","flavor":"He used to be called Bog Beast, but it confused people because he wasn't an actual beast.   Boom, New Name!","artist":"Monica Langlois","collectible":true,"mechanics":["Taunt"]},{"id":"EX1_248","name":"Feral Spirit","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"Summon two 2/3 Spirit Wolves with <b>Taunt</b>. <b>Overload:</b> (2)","flavor":"Spirit wolves are like regular wolves with pom-poms.","artist":"Clint Langley","collectible":true,"playerClass":"Shaman"},{"id":"EX1_finkle","name":"Finkle Einhorn","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":2,"attack":3,"health":3,"elite":true},{"id":"EX1_319","name":"Flame Imp","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":3,"health":2,"text":"<b>Battlecry:</b> Deal 3 damage to your hero.","flavor":"Imps like being on fire.  They just do.","artist":"Alex Horley Orlandelli","collectible":true,"race":"Demon","playerClass":"Warlock","mechanics":["Battlecry"]},{"id":"EX1_614t","name":"Flame of Azzinoth","type":"Minion","cost":1,"attack":2,"health":1},{"id":"EX1_544","name":"Flare","type":"Spell","faction":"Neutral","rarity":"Rare","cost":2,"text":"All minions lose <b>Stealth</b>. Destroy all enemy <b>Secrets</b>. Draw a card.","flavor":"Not only does it reveal your enemies, but it's also great for parties!","artist":"Tyler Walpole","collectible":true,"playerClass":"Hunter"},{"id":"tt_004","name":"Flesheating Ghoul","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":2,"health":3,"text":"Whenever a minion dies, gain +1 Attack.","inPlayText":"Cannibalism","flavor":"'Flesheating' is an unfair name.  It's just that there's not really much else for him to eat.","artist":"Alex Horley Orlandelli","collectible":true},{"id":"EX1_571","name":"Force of Nature","type":"Spell","faction":"Neutral","rarity":"Epic","cost":6,"text":"Summon three 2/2 Treants with <b>Charge</b> that die at the end of the turn.","flavor":"\"I think I'll just nap under these trees. Wait... AAAAAHHH!\" - Blinkfizz, the Unfortunate Gnome","artist":"Trevor Jacobs","collectible":true,"playerClass":"Druid"},{"id":"EX1_251","name":"Forked Lightning","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Deal $2 damage to 2 random enemy minions. <b>Overload:</b> (2)","flavor":"If you combine it with Spooned Lightning and Knived Lightning, you have the full dining set.","artist":"Ralph Horsley","collectible":true,"playerClass":"Shaman"},{"id":"EX1_611","name":"Freezing Trap","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"<b>Secret:</b> When an enemy minion attacks, return it to its owner's hand and it costs (2) more.","flavor":"\"Dang, that's cold.\" - appropriate response to Freezing Trap, or a mean joke.","artist":"Matt Gaser","collectible":true,"playerClass":"Hunter","mechanics":["Secret"]},{"id":"EX1_283","name":"Frost Elemental","type":"Minion","faction":"Neutral","rarity":"Common","cost":6,"attack":5,"health":5,"text":"<b>Battlecry:</b> <b>Freeze</b> a character.","flavor":"When a Water elemental and an Ice elemental love each other VERY much...","artist":"Dan Scott","collectible":true,"mechanics":["Battlecry","Freeze"]},{"id":"EX1_604","name":"Frothing Berserker","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":2,"health":4,"text":"Whenever a minion takes damage, gain +1 Attack.","inPlayText":"Berserk","flavor":"He used to work as an accountant before he tried his hand at Berserkering.","artist":"Simon Bisley","collectible":true,"playerClass":"Warrior"},{"id":"NEW1_017e","name":"Full Belly","type":"Enchantment","text":"+2/+2.  Full of Murloc."},{"id":"CS2_181e","name":"Full Strength","type":"Enchantment","text":"This minion has +2 Attack."},{"id":"EX1_095","name":"Gadgetzan Auctioneer","type":"Minion","faction":"Neutral","rarity":"Rare","cost":6,"attack":4,"health":4,"text":"Whenever you cast a spell, draw a card.","inPlayText":"Auctioning","flavor":"He used to run the black market auction house, but there was just too much violence and he had to move.","artist":"Matt Dixon","collectible":true},{"id":"DS1_188","name":"Gladiator's Longbow","type":"Weapon","faction":"Neutral","rarity":"Epic","cost":7,"attack":5,"durability":2,"text":"Your hero is <b>Immune</b> while attacking.","flavor":"The longbow allows shots to be fired from farther away and is useful for firing on particularly odorous targets.","artist":"Peter C. Lee","collectible":true,"playerClass":"Hunter"},{"id":"NEW1_040t","name":"Gnoll","type":"Minion","cost":2,"attack":2,"health":2,"text":"<b>Taunt</b>","mechanics":["Taunt"]},{"id":"EX1_411","name":"Gorehowl","type":"Weapon","faction":"Neutral","rarity":"Epic","cost":7,"attack":7,"durability":1,"text":"Attacking a minion costs 1 Attack instead of 1 Durability.","flavor":"Grommash Hellscream's famous axe.  Somehow this ended up in Prince Malchezaar's possession.  Quite the mystery!","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Warrior"},{"id":"NEW1_024o","name":"Greenskin's Command","type":"Enchantment","text":"+1/+1."},{"id":"EX1_414","name":"Grommash Hellscream","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":8,"attack":4,"health":9,"text":"<b>Charge</b>\n<b>Enrage:</b> +6 Attack","flavor":"Grommash drank the tainted blood of Mannoroth, dooming the orcs to green skin and red eyes!  Maybe not his best decision.","artist":"Glenn Rane","collectible":true,"elite":true,"playerClass":"Warrior","mechanics":["Charge","Enrage"]},{"id":"NEW1_038o","name":"Growth","type":"Enchantment","text":"Gruul is growing..."},{"id":"NEW1_038","name":"Gruul","type":"Minion","rarity":"Legendary","cost":8,"attack":7,"health":7,"text":"At the end of each turn, gain +1/+1 .","inPlayText":"Growth","flavor":"He's Gruul \"the Dragonkiller\".  He just wanted to cuddle them… he never meant to…","artist":"Kev Walker","collectible":true,"elite":true},{"id":"EX1_093e","name":"Hand of Argus","type":"Enchantment","text":"+1/+1 and <b>Taunt</b>."},{"id":"EX1_558","name":"Harrison Jones","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":5,"attack":5,"health":4,"text":"<b>Battlecry:</b> Destroy your opponent's weapon and draw cards equal to its Durability.","flavor":"“That belongs in the Hall of Explorers!”","artist":"Matt Dixon","collectible":true,"elite":true,"mechanics":["Battlecry"]},{"id":"EX1_556","name":"Harvest Golem","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":2,"health":3,"text":"<b>Deathrattle:</b> Summon a 2/1 Damaged Golem.","flavor":"\"Overheat threshold exceeded. System failure. Wheat clog in port two. Shutting down.\"","artist":"Brian Despain","collectible":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"EX1_137","name":"Headcrack","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"Deal $2 damage to the enemy hero. <b>Combo:</b> Return this to your hand next turn.","flavor":"When all else fails, nothing beats a swift whack upside the head.","artist":"James Zhang","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"EX1_409t","name":"Heavy Axe","type":"Weapon","cost":1,"attack":1,"durability":3,"playerClass":"Warrior"},{"id":"NEW1_040","name":"Hogger","type":"Minion","rarity":"Legendary","cost":6,"attack":4,"health":4,"text":"At the end of your turn, summon a 2/2 Gnoll with <b>Taunt</b>.","flavor":"Hogger is super powerful. If you kill him, it's because he <i>let</i> you.","artist":"Laurel D. Austin","collectible":true,"elite":true},{"id":"EX1_624","name":"Holy Fire","type":"Spell","rarity":"Rare","cost":6,"text":"Deal $5 damage. Restore #5 Health to your hero.","flavor":"Often followed by Holy Smokes!","artist":"Miguel Coimbra","collectible":true,"playerClass":"Priest"},{"id":"EX1_365","name":"Holy Wrath","type":"Spell","faction":"Neutral","rarity":"Rare","cost":5,"text":"Draw a card and deal damage equal to its cost.","flavor":"C'mon Molten Giant!!","artist":"Justin Sweet","collectible":true,"playerClass":"Paladin"},{"id":"EX1_538t","name":"Hound","type":"Minion","cost":1,"attack":1,"health":1,"text":"<b>Charge</b>","race":"Beast","playerClass":"Hunter","mechanics":["Charge"]},{"id":"EX1_043e","name":"Hour of Twilight","type":"Enchantment","text":"Increased Health."},{"id":"NEW1_017","name":"Hungry Crab","type":"Minion","rarity":"Epic","cost":1,"attack":1,"health":2,"text":"<b>Battlecry:</b> Destroy a Murloc and gain +2/+2.","flavor":"Murloc.  It's what's for dinner.","artist":"Jaemin Kim","collectible":true,"race":"Beast","mechanics":["Battlecry"]},{"id":"EX1_534t","name":"Hyena","type":"Minion","rarity":"Rare","cost":2,"attack":2,"health":2,"artist":"Andrew Robinson","race":"Beast","playerClass":"Hunter"},{"id":"EX1_tk33","name":"INFERNO!","type":"Hero Power","faction":"Neutral","cost":2,"text":"<b>Hero Power</b>\nSummon a 6/6 Infernal.","playerClass":"Warlock"},{"id":"EX1_289","name":"Ice Barrier","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"<b>Secret:</b> When your hero is attacked, gain 8 Armor.","flavor":"This is Rank 1.  Rank 2 is Chocolate Milk Barrier.","artist":"Alex Garner","collectible":true,"playerClass":"Mage","mechanics":["Secret"]},{"id":"EX1_295","name":"Ice Block","type":"Spell","faction":"Neutral","rarity":"Epic","cost":3,"text":"<b>Secret:</b> When your hero takes fatal damage, prevent it and become <b>Immune</b> this turn.","flavor":"Ice is nice, and will suffice!","artist":"Carl Frank","collectible":true,"playerClass":"Mage","mechanics":["Secret"]},{"id":"EX1_295o","name":"Ice Block","type":"Enchantment","text":"Your hero is <b>Immune</b> this turn.","playerClass":"Mage","mechanics":["OneTurnEffect"]},{"id":"CS2_031","name":"Ice Lance","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"<b>Freeze</b> a character. If it was already <b>Frozen</b>, deal $4 damage instead.","flavor":"The trick is not to break the lance.  Otherwise, you have \"Ice Pieces.\"  Ice Pieces aren't as effective.","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Mage","mechanics":["Freeze"]},{"id":"EX1_614","name":"Illidan Stormrage","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":6,"attack":7,"health":5,"text":"Whenever you play a card, summon a 2/1 Flame of Azzinoth.","flavor":"Illidan's brother, Malfurion, imprisoned him beneath Hyjal for 10,000 years.  Stormrages are not good at letting go of grudges.","artist":"Alex Horley Orlandelli","collectible":true,"elite":true,"race":"Demon"},{"id":"EX1_598","name":"Imp","type":"Minion","faction":"Neutral","rarity":"Rare","cost":1,"attack":1,"health":1,"race":"Demon"},{"id":"EX1_597","name":"Imp Master","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":1,"health":5,"text":"At the end of your turn, deal 1 damage to this minion and summon a 1/1 Imp.","inPlayText":"Imp Master","flavor":"She would enjoy the job a lot more if she just could get the imps to QUIT BITING HER.","artist":"Mark Gibbons","collectible":true},{"id":"EX1_tk34","name":"Infernal","type":"Minion","faction":"Neutral","rarity":"Common","cost":6,"attack":6,"health":6,"race":"Demon","playerClass":"Warlock"},{"id":"EX1_623e","name":"Infusion","type":"Enchantment","text":"+3 Health.","playerClass":"Priest"},{"id":"CS2_181","name":"Injured Blademaster","type":"Minion","faction":"Horde","rarity":"Rare","cost":3,"attack":4,"health":7,"text":"<b>Battlecry:</b> Deal 4 damage to HIMSELF.","inPlayText":"Weakened","flavor":"He claims it is an old war wound, but we think he just cut himself shaving.","artist":"Samwise","collectible":true,"mechanics":["Battlecry"]},{"id":"CS1_129e","name":"Inner Fire","type":"Enchantment","text":"This minion's Attack is equal to its Health.","playerClass":"Priest"},{"id":"CS1_129","name":"Inner Fire","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Change a minion's Attack to be equal to its Health.","flavor":"Good idea: Buffing your minions.  Bad idea: Starting a conversation in the Barrens.","artist":"Steve Prescott","collectible":true,"playerClass":"Priest"},{"id":"EX1_607e","name":"Inner Rage","type":"Enchantment","text":"+2 Attack.","playerClass":"Warrior"},{"id":"EX1_607","name":"Inner Rage","type":"Spell","faction":"Neutral","rarity":"Common","cost":0,"text":"Deal $1 damage to a minion and give it +2 Attack.","flavor":"They're only smiling on the outside.","artist":"Slawomir Maniak","collectible":true,"playerClass":"Warrior"},{"id":"CS2_203","name":"Ironbeak Owl","type":"Minion","faction":"Horde","rarity":"Common","cost":2,"attack":2,"health":1,"text":"<b>Battlecry:</b> <b>Silence</b> a minion.","flavor":"Their wings are silent but their screech is... whatever the opposite of silent is.","artist":"Trevor Jacobs","collectible":true,"race":"Beast","mechanics":["Battlecry"]},{"id":"EX1_017","name":"Jungle Panther","type":"Minion","faction":"Horde","rarity":"Common","cost":3,"attack":4,"health":2,"text":"<b>Stealth</b>","flavor":"Stranglethorn is a beautiful place to visit, but you wouldn't want to live there.","artist":"Jaemin Kim","collectible":true,"race":"Beast","mechanics":["Stealth"]},{"id":"EX1_366e","name":"Justice Served","type":"Enchantment","text":"Has +1/+1.","playerClass":"Paladin"},{"id":"EX1_166","name":"Keeper of the Grove","type":"Minion","faction":"Neutral","rarity":"Rare","cost":4,"attack":2,"health":4,"text":"<b>Choose One</b> - Deal 2 damage; or <b>Silence</b> a minion.","flavor":"These guys just show up and start Keeping your Groves without even asking.","artist":"Gabor Szikszai","collectible":true,"playerClass":"Druid"},{"id":"EX1_080o","name":"Keeping Secrets","type":"Enchantment","text":"Increased stats."},{"id":"NEW1_005","name":"Kidnapper","type":"Minion","rarity":"Epic","cost":6,"attack":5,"health":3,"text":"<b>Combo:</b> Return a minion to its owner's hand.","flavor":"He just wants people to see his vacation photos.","artist":"Dave Allsop","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"NEW1_029t","name":"Kill Millhouse!","type":"Enchantment","rarity":"Legendary","text":"Spells cost (0) this turn!"},{"id":"EX1_543","name":"King Krush","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":8,"health":8,"text":"<b>Charge</b>","flavor":"The best defense against King Krush is to have someone you don’t like standing in front of you.","artist":"Alex Horley Orlandelli","collectible":true,"elite":true,"race":"Beast","playerClass":"Hunter","mechanics":["Charge"]},{"id":"EX1_014","name":"King Mukla","type":"Minion","rarity":"Legendary","cost":3,"attack":5,"health":5,"text":"<b>Battlecry:</b> Give your opponent 2 Bananas.","flavor":"King Mukla wanders Jaguero Isle, searching for love.","artist":"Sunny Gho","collectible":true,"elite":true,"race":"Beast","mechanics":["Battlecry"]},{"id":"EX1_612","name":"Kirin Tor Mage","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":4,"health":3,"text":"<b>Battlecry:</b> The next <b>Secret</b> you play this turn costs (0).","flavor":"The Kirin Tor reside in the floating city of Dalaran.  How do you make a Dalaran float?  Two scoops of ice cream, one scoop of Dalaran.","artist":"Popo Wei","collectible":true,"playerClass":"Mage","mechanics":["Battlecry"]},{"id":"NEW1_019","name":"Knife Juggler","type":"Minion","rarity":"Rare","cost":2,"attack":3,"health":2,"text":"After you summon a minion, deal 1 damage to a random enemy.","inPlayText":"Juggler","flavor":"Ambitious Knife Jugglers sometimes graduate to Bomb Jugglers.    They never last long enough to make it onto a card though.","artist":"Matt Cavotta","collectible":true},{"id":"DREAM_01","name":"Laughing Sister","type":"Minion","cost":3,"attack":3,"health":5,"text":"Can't be targeted by spells or Hero Powers.","inPlayText":"Quick","playerClass":"Dream"},{"id":"EX1_241","name":"Lava Burst","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"Deal $5 damage. <b>Overload:</b> (2)","flavor":"It's like an ocean of liquid magma in your mouth!","artist":"Dan Scott","collectible":true,"playerClass":"Shaman"},{"id":"EX1_354","name":"Lay on Hands","type":"Spell","faction":"Neutral","rarity":"Epic","cost":8,"text":"Restore #8 Health. Draw 3 cards.","flavor":"A grammatically awkward life saver.","artist":"Raymond Swanland","collectible":true,"playerClass":"Paladin"},{"id":"EX1_160b","name":"Leader of the Pack","type":"Spell","faction":"Neutral","text":"Give your minions +1/+1.","playerClass":"Druid"},{"id":"EX1_160be","name":"Leader of the Pack","type":"Enchantment","text":"+1/+1","playerClass":"Druid"},{"id":"EX1_116","name":"Leeroy Jenkins","type":"Minion","faction":"Alliance","rarity":"Legendary","cost":5,"attack":6,"health":2,"text":"<b>Charge</b>. <b>Battlecry:</b> Summon two 1/1 Whelps for your opponent.","flavor":"At least he has Angry Chicken.","artist":"Gabe from Penny Arcade","collectible":true,"elite":true,"mechanics":["Battlecry","Charge"]},{"id":"EX1_029","name":"Leper Gnome","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":2,"health":1,"text":"<b>Deathrattle:</b> Deal 2 damage to the enemy hero.","flavor":"He really just wants to be your friend, but the constant rejection is starting to really get to him.","artist":"Glenn Rane","collectible":true,"mechanics":["Deathrattle"]},{"id":"EX1_044e","name":"Level Up!","type":"Enchantment","text":"Increased Attack and Health."},{"id":"EX1_238","name":"Lightning Bolt","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Deal $3 damage. <b>Overload:</b> (1)","flavor":"Lightning Bolt! Lightning Bolt! Lightning Bolt!","artist":"Daarken","collectible":true,"playerClass":"Shaman"},{"id":"EX1_259","name":"Lightning Storm","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"Deal $2-$3 damage to all enemy minions. <b>Overload:</b> (2)","flavor":"An umbrella won't be effective, I'm afraid.","artist":"Christopher Moeller","collectible":true,"playerClass":"Shaman"},{"id":"EX1_335","name":"Lightspawn","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":0,"health":5,"text":"This minion's Attack is always equal to its Health.","flavor":"Spawn of the Light? Or Pawn of the Lights?","artist":"Daarken","collectible":true,"playerClass":"Priest"},{"id":"EX1_001","name":"Lightwarden","type":"Minion","rarity":"Rare","cost":1,"attack":1,"health":2,"text":"Whenever a character is healed, gain +2 Attack.","flavor":"She’s smaller than her sisters Mediumwarden and Heavywarden.","artist":"Erik Ko","collectible":true},{"id":"EX1_341","name":"Lightwell","type":"Minion","faction":"Neutral","rarity":"Rare","cost":2,"attack":0,"health":5,"text":"At the start of your turn, restore 3 Health to a damaged friendly character.","inPlayText":"Healing","flavor":"It isn't clear if people ignore the Lightwell, or if it is just invisible.","artist":"Blizzard Entertainment","collectible":true,"playerClass":"Priest"},{"id":"EX1_096","name":"Loot Hoarder","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"health":1,"text":"<b>Deathrattle:</b> Draw a card.","flavor":"Always roll need.","artist":"Jim Nelson","collectible":true,"mechanics":["Deathrattle"]},{"id":"EX1_323","name":"Lord Jaraxxus","type":"Minion","rarity":"Legendary","cost":9,"attack":3,"health":15,"text":"<b>Battlecry:</b> Destroy your hero and replace it with Lord Jaraxxus.","flavor":"\"TRIFLING GNOME! YOUR ARROGANCE WILL BE YOUR UNDOING!!!!\"","artist":"Alex Horley Orlandelli","collectible":true,"elite":true,"race":"Demon","playerClass":"Warlock","mechanics":["Battlecry"]},{"id":"EX1_323h","name":"Lord Jaraxxus","type":"Hero","faction":"Neutral","rarity":"Legendary","cost":0,"attack":0,"health":15,"race":"Demon","playerClass":"Warlock"},{"id":"EX1_100","name":"Lorewalker Cho","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":2,"attack":0,"health":4,"text":"Whenever a player casts a spell, put a copy into the other player’s hand.","inPlayText":"Meditate","flavor":"Lorewalker Cho archives and shares tales from the land of Pandaria, but his favorite story is the one where Joey and Phoebe go on a road trip.","artist":"Mark Zug","collectible":true,"elite":true},{"id":"EX1_082","name":"Mad Bomber","type":"Minion","faction":"Alliance","rarity":"Common","cost":2,"attack":3,"health":2,"text":"<b>Battlecry:</b> Deal 3 damage randomly split between all other characters.","flavor":"He's not really all that crazy, he is just not as careful with explosives as he should be.","artist":"Mike Sass","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_563","name":"Malygos","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":4,"health":12,"text":"<b>Spell Damage +5</b>","flavor":"Malygos hates it when mortals use magic.  He gets so mad!","artist":"Michael Komarck","collectible":true,"elite":true,"race":"Dragon","mechanics":["Spellpower"]},{"id":"EX1_055","name":"Mana Addict","type":"Minion","faction":"Alliance","rarity":"Rare","cost":2,"attack":1,"health":3,"text":"Whenever you cast a spell, gain +2 Attack this turn.","inPlayText":"Addicted","flavor":"She’s trying to kick the habit, but still takes some mana whenever she has a stressful day.","artist":"Hideaki Takamura","collectible":true},{"id":"NEW1_012o","name":"Mana Gorged","type":"Enchantment","text":"Increased attack.","playerClass":"Mage"},{"id":"EX1_575","name":"Mana Tide Totem","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":0,"health":3,"text":"At the end of your turn, draw a card.","flavor":"It is said that some shaman can say \"Floatin' totem\" 10 times, fast.","artist":"Scott Altmann","collectible":true,"race":"Totem","playerClass":"Shaman"},{"id":"EX1_616","name":"Mana Wraith","type":"Minion","faction":"Neutral","rarity":"Rare","cost":2,"attack":2,"health":2,"text":"ALL minions cost (1) more.","flavor":"They come out at night to eat leftover mana crystals. \"Mmmmmm,\" they say.","artist":"Luca Zontini","collectible":true,"mechanics":["Aura"]},{"id":"NEW1_012","name":"Mana Wyrm","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":3,"text":"Whenever you cast a spell, gain +1 Attack.","inPlayText":"Gorging","flavor":"These wyrms feed on arcane energies, and while they are generally considered a nuisance rather than a real threat, you really shouldn't leave them alone with a bucket of mana.","artist":"Blizzard Cinematics","collectible":true,"playerClass":"Mage"},{"id":"EX1_155be","name":"Mark of Nature","type":"Enchantment","text":"This minion has +4 Health and <b>Taunt</b>.","playerClass":"Druid"},{"id":"EX1_155","name":"Mark of Nature","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"<b>Choose One</b> - Give a minion +4 Attack; or +4 Health and <b>Taunt</b>.","flavor":"Druids call it the \"Mark of Nature.\"  Everyone else calls it \"needing a bath.\"","artist":"Clint Langley","collectible":true,"playerClass":"Druid"},{"id":"EX1_155b","name":"Mark of Nature","type":"Spell","faction":"Neutral","text":"+4 Health and <b>Taunt</b>.","playerClass":"Druid"},{"id":"EX1_155a","name":"Mark of Nature","type":"Spell","faction":"Neutral","text":"+4 Attack.","playerClass":"Druid"},{"id":"EX1_155ae","name":"Mark of Nature","type":"Enchantment","text":"This minion has +4 Attack.","playerClass":"Druid"},{"id":"EX1_626","name":"Mass Dispel","type":"Spell","rarity":"Rare","cost":4,"text":"<b>Silence</b> all enemy minions. Draw a card.","flavor":"It dispels buffs, powers, hopes, and dreams.","artist":"Sean O'Daniels","collectible":true,"playerClass":"Priest","mechanics":["Silence"]},{"id":"NEW1_037","name":"Master Swordsmith","type":"Minion","rarity":"Rare","cost":2,"attack":1,"health":3,"text":"At the end of your turn, give another random friendly minion +1 Attack.","inPlayText":"Smithing","flavor":"He's currently trying to craft a \"flail-axe\", but all the other swordsmiths say it can't be done.","artist":"E.M. Gist","collectible":true},{"id":"NEW1_014","name":"Master of Disguise","type":"Minion","rarity":"Rare","cost":4,"attack":4,"health":4,"text":"<b>Battlecry:</b> Give a friendly minion <b>Stealth</b>.","flavor":"She's actually a male tauren.  People don't call him \"Master of Disguise\" for nothing.","artist":"Ron Spencer","collectible":true,"playerClass":"Rogue","mechanics":["Battlecry"]},{"id":"NEW1_029","name":"Millhouse Manastorm","type":"Minion","rarity":"Legendary","cost":2,"attack":4,"health":4,"text":"<b>Battlecry:</b> Enemy spells cost (0) next turn.","flavor":"\"I'm gonna light you up, sweetcheeks!\"","artist":"Jim Nelson","collectible":true,"elite":true,"mechanics":["Battlecry"]},{"id":"EX1_085","name":"Mind Control Tech","type":"Minion","faction":"Alliance","rarity":"Rare","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> If your opponent has 4 or more minions, take control of one at random.","flavor":"Mind Control technology is getting better, but that's not saying much.","artist":"Leo Che","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_tk31","name":"Mind Controlling","type":"Enchantment","faction":"Neutral","rarity":"Common","playerClass":"Priest","mechanics":["Summoned"]},{"id":"EX1_625t2","name":"Mind Shatter","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nDeal 3 damage.","playerClass":"Priest"},{"id":"EX1_625t","name":"Mind Spike","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nDeal 2 damage.","playerClass":"Priest"},{"id":"EX1_345","name":"Mindgames","type":"Spell","faction":"Neutral","rarity":"Epic","cost":4,"text":"Put a copy of a random minion from your opponent's deck into the battlefield.","flavor":"Sometimes it feels like this is all a game.","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Priest"},{"id":"EX1_294","name":"Mirror Entity","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"<b>Secret:</b> When your opponent plays a minion, summon a copy of it.","flavor":"\"You go first.\" - Krush'gor the Behemoth, to his pet boar.","artist":"Raven Mimura","collectible":true,"playerClass":"Mage","mechanics":["Secret"]},{"id":"EX1_533","name":"Misdirection","type":"Spell","faction":"Neutral","rarity":"Rare","cost":2,"text":"<b>Secret:</b> When a character attacks your hero, instead he attacks another random character.","flavor":"Sometimes it's as simple as putting on a fake mustache and pointing at someone else.","artist":"Daren Bader","collectible":true,"playerClass":"Hunter","mechanics":["Secret"]},{"id":"EX1_396","name":"Mogu'shan Warden","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":1,"health":7,"text":"<b>Taunt</b>","flavor":"All these guys ever do is talk about the Thunder King.   BOOOORRRINNG!","artist":"Cole Eastburn","collectible":true,"mechanics":["Taunt"]},{"id":"EX1_620","name":"Molten Giant","type":"Minion","rarity":"Epic","cost":20,"attack":8,"health":8,"text":"Costs (1) less for each damage your hero has taken.","flavor":"He gets terrible heartburn.  BECAUSE HE IS FULL OF LAVA.","artist":"Glenn Rane","collectible":true},{"id":"EX1_166a","name":"Moonfire","type":"Spell","faction":"Neutral","text":"Deal 2 damage.","playerClass":"Druid"},{"id":"EX1_408","name":"Mortal Strike","type":"Spell","faction":"Neutral","rarity":"Rare","cost":4,"text":"Deal $4 damage. If you have 12 or less Health, deal $6 instead.","flavor":"\"If you only use one ability, use Mortal Strike.\" - The Warrior Code, Line 6","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Warrior"},{"id":"EX1_105","name":"Mountain Giant","type":"Minion","faction":"Neutral","rarity":"Epic","cost":12,"attack":8,"health":8,"text":"Costs (1) less for each other card in your hand.","flavor":"His mother said that he was just big boned.","artist":"Samwise","collectible":true},{"id":"EX1_507e","name":"Mrgglaargl!","type":"Enchantment","text":"Murloc Warleader is granting +2/+1."},{"id":"EX1_103e","name":"Mrghlglhal","type":"Enchantment","text":"+2 Health."},{"id":"EX1_509","name":"Murloc Tidecaller","type":"Minion","faction":"Neutral","rarity":"Rare","cost":1,"attack":1,"health":2,"text":"Whenever a Murloc is summoned, gain +1 Attack.","flavor":"This guy gets crazy strong at family reunions.","artist":"Jaemin Kim","collectible":true,"race":"Murloc"},{"id":"EX1_507","name":"Murloc Warleader","type":"Minion","faction":"Neutral","rarity":"Epic","cost":3,"attack":3,"health":3,"text":"ALL other Murlocs have +2/+1.","flavor":"Do Murlocs ever get tired of making the same old sound?  Nope!  Mrglglrglglglglglglgl!","artist":"Tim McBurnie","collectible":true,"race":"Murloc","mechanics":["Aura"]},{"id":"EX1_557","name":"Nat Pagle","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":2,"attack":0,"health":4,"text":"At the start of your turn, you have a 50% chance to draw an extra card.","inPlayText":"Fishing","flavor":"Nat Pagle, Azeroth's premier fisherman!  He invented the Auto-Angler 3000, the Extendo-Pole 3000, and the Lure-o-matic 2099 (still in testing).","artist":"Steve Prescott","collectible":true,"elite":true},{"id":"EX1_161","name":"Naturalize","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Destroy a minion. Your opponent draws 2 cards.","flavor":"Another one bites the dust.","artist":"Leo Che","collectible":true,"playerClass":"Druid"},{"id":"EX1_411e2","name":"Needs Sharpening","type":"Enchantment","text":"Decreased Attack.","playerClass":"Warrior"},{"id":"DREAM_05","name":"Nightmare","type":"Spell","cost":0,"text":"Give a minion +5/+5. At the start of your next turn, destroy it.","playerClass":"Dream"},{"id":"DREAM_05e","name":"Nightmare","type":"Enchantment","text":"This minion has +5/+5, but will be destroyed soon."},{"id":"EX1_130","name":"Noble Sacrifice","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"<b>Secret:</b> When an enemy attacks, summon a 2/1 Defender as the new target.","flavor":"We will always remember you, \"Defender!\"","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Paladin","mechanics":["Secret"]},{"id":"EX1_164b","name":"Nourish","type":"Spell","faction":"Neutral","text":"Draw 3 cards.","playerClass":"Druid"},{"id":"EX1_164a","name":"Nourish","type":"Spell","faction":"Neutral","text":"Gain 2 Mana Crystals.","playerClass":"Druid"},{"id":"EX1_164","name":"Nourish","type":"Spell","faction":"Neutral","rarity":"Rare","cost":5,"text":"<b>Choose One</b> - Gain 2 Mana Crystals; or Draw 3 cards.","flavor":"Druids take nourishment from many things: the power of nature, the songbird's chirp, a chocolate cake.","artist":"Terese Nielsen","collectible":true,"playerClass":"Druid"},{"id":"EX1_560","name":"Nozdormu","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":8,"health":8,"text":"Players only have 15 seconds to take their turns.","inPlayText":"Aspect of Time","flavor":"Time to write some flavor text.","artist":"James Ryman","collectible":true,"elite":true,"race":"Dragon"},{"id":"EX1_562","name":"Onyxia","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":8,"health":8,"text":"<b>Battlecry:</b> Summon 1/1 Whelps until your side of the battlefield is full.","flavor":"Onyxia long manipulated the Stormwind Court by disguising herself as Lady Katrana Prestor.   You would have thought that the giant wings and scales would have been a giveaway.","artist":"Dany Orizio","collectible":true,"elite":true,"race":"Dragon","mechanics":["Battlecry"]},{"id":"EX1_258e","name":"Overloading","type":"Enchantment","text":"Increased stats.","playerClass":"Shaman"},{"id":"EX1_160t","name":"Panther","type":"Minion","rarity":"Common","cost":2,"attack":3,"health":2,"race":"Beast","playerClass":"Druid"},{"id":"EX1_522","name":"Patient Assassin","type":"Minion","faction":"Neutral","rarity":"Epic","cost":2,"attack":1,"health":1,"text":"<b>Stealth</b>. Destroy any minion damaged by this minion.","inPlayText":"Sharpening","flavor":"He’s not really that patient. It just takes a while for someone to walk by that he can actually reach.","artist":"Ben Olson","collectible":true,"playerClass":"Rogue","mechanics":["Poisonous","Stealth"]},{"id":"EX1_133","name":"Perdition's Blade","type":"Weapon","faction":"Neutral","rarity":"Rare","cost":3,"attack":2,"durability":2,"text":"<b>Battlecry:</b> Deal 1 damage. <b>Combo:</b> Deal 2 instead.","flavor":"Perdition's Blade is Ragnaros's back-up weapon while Sulfuras is in the shop.","artist":"Daren Bader","collectible":true,"playerClass":"Rogue","mechanics":["Battlecry","Combo"]},{"id":"EX1_076","name":"Pint-Sized Summoner","type":"Minion","faction":"Alliance","rarity":"Rare","cost":2,"attack":2,"health":2,"text":"The first minion you play each turn costs (1) less.","inPlayText":"Ritual","flavor":"She's quite jealous of the Gallon-Sized Summoner.","artist":"Ron Spears","collectible":true,"mechanics":["Aura"]},{"id":"EX1_313","name":"Pit Lord","type":"Minion","faction":"Neutral","rarity":"Epic","cost":4,"attack":5,"health":6,"text":"<b>Battlecry:</b> Deal 5 damage to your hero.","flavor":"Mannoroth, Magtheridon, and Brutallus may be dead, but it turns out there are a LOT of pit lords.","artist":"Glenn Rane","collectible":true,"race":"Demon","playerClass":"Warlock","mechanics":["Battlecry"]},{"id":"EX1_316","name":"Power Overwhelming","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Give a friendly minion +4/+4 until end of turn. Then, it dies. Horribly.","flavor":"We cannot even describe how horrible the death is.  It's CRAZY bad!  Maybe worse than that.  Just don't do it.","artist":"Tom Baxa","collectible":true,"playerClass":"Warlock"},{"id":"EX1_316e","name":"Power Overwhelming","type":"Enchantment","faction":"Neutral","text":"This minion has +4/+4, but will die a horrible death at the end of the turn.","playerClass":"Warlock"},{"id":"EX1_612o","name":"Power of the Kirin Tor","type":"Enchantment","text":"Your next Secret costs (0).","playerClass":"Mage","mechanics":["OneTurnEffect"]},{"id":"EX1_160","name":"Power of the Wild","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"<b>Choose One</b> - Give your minions +1/+1; or Summon a 3/2 Panther.","flavor":"Never look a panther in the eye.  Or is it 'Always look a panther in the eye'?  Well, it's one of those.","artist":"Steve Tappin","collectible":true,"playerClass":"Druid"},{"id":"EX1_145o","name":"Preparation","type":"Enchantment","text":"The next spell you cast this turn costs (3) less.","playerClass":"Rogue","mechanics":["OneTurnEffect"]},{"id":"EX1_145","name":"Preparation","type":"Spell","faction":"Neutral","rarity":"Epic","cost":0,"text":"The next spell you cast this turn costs (3) less.","flavor":"\"Be Prepared\" - Rogue Motto","artist":"Clint Langley","collectible":true,"playerClass":"Rogue"},{"id":"EX1_583","name":"Priestess of Elune","type":"Minion","faction":"Neutral","rarity":"Common","cost":6,"attack":5,"health":4,"text":"<b>Battlecry:</b> Restore 4 Health to your hero.","flavor":"If she threatens to \"moon\" you, it's not what you think.","artist":"Dan Scott","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_350","name":"Prophet Velen","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":7,"attack":7,"health":7,"text":"Double the damage and healing of your spells and Hero Power.","flavor":"He's been exiled from his home, and all his brothers turned evil, but otherwise he doesn't have a lot to complain about.","artist":"Wei Wang","collectible":true,"elite":true,"playerClass":"Priest"},{"id":"EX1_279","name":"Pyroblast","type":"Spell","faction":"Neutral","rarity":"Epic","cost":10,"text":"Deal $10 damage.","flavor":"Take the time for an evil laugh after you draw this card.","artist":"Luca Zontini","collectible":true,"playerClass":"Mage"},{"id":"EX1_044","name":"Questing Adventurer","type":"Minion","faction":"Alliance","rarity":"Rare","cost":3,"attack":2,"health":2,"text":"Whenever you play a card, gain +1/+1.","inPlayText":"Questing","flavor":"\"Does anyone have some extra Boar Pelts?\"","artist":"Attila Adorjany","collectible":true},{"id":"EX1_412","name":"Raging Worgen","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":3,"health":3,"text":"<b>Enrage:</b> <b>Windfury</b> and +1 Attack","flavor":"If he's raging now, just wait until he gets nerfed.","artist":"Alex Horley Orlandelli","collectible":true,"mechanics":["Enrage"]},{"id":"EX1_298","name":"Ragnaros the Firelord","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":8,"attack":8,"health":8,"text":"Can't Attack. At the end of your turn, deal 8 damage to a random enemy.","flavor":"Ragnaros was summoned by the Dark Iron dwarves, who were eventually enslaved by the Firelord.  Summoning Ragnaros often doesn’t work out the way you want it to.","artist":"Greg Staples","collectible":true,"elite":true},{"id":"CS2_104e","name":"Rampage","type":"Enchantment","text":"+3/+3.","playerClass":"Warrior"},{"id":"CS2_104","name":"Rampage","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Give a damaged minion +3/+3.","flavor":"Minion get ANGRY.   Minion SMASH!","artist":"Jonboy Meyers","collectible":true,"playerClass":"Warrior"},{"id":"CS2_161","name":"Ravenholdt Assassin","type":"Minion","faction":"Alliance","rarity":"Rare","cost":7,"attack":7,"health":5,"text":"<b>Stealth</b>","flavor":"Just mail him a package with a name and 10,000 gold.  He'll take care of the rest.","artist":"Ralph Horsley","collectible":true,"mechanics":["Stealth"]},{"id":"EX1_274e","name":"Raw Power!","type":"Enchantment","text":"Increased stats.","playerClass":"Mage"},{"id":"EX1_136","name":"Redemption","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"<b>Secret:</b> When one of your minions dies, return it to life with 1 Health.","flavor":"I am not sure how you get demptioned the first time.  It’s a mystery!","artist":"Ittoku","collectible":true,"playerClass":"Paladin","mechanics":["Secret"]},{"id":"EX1_379e","name":"Repentance","type":"Enchantment","text":"Health reduced to 1.","playerClass":"Paladin"},{"id":"EX1_379","name":"Repentance","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"<b>Secret:</b> When your opponent plays a minion, reduce its Health to 1.","flavor":"Repentance often comes in the moment before obliteration. Curious.","artist":"Gonzalo Ordonez","collectible":true,"playerClass":"Paladin","mechanics":["Secret"]},{"id":"EX1_178ae","name":"Rooted","type":"Enchantment","text":"+5 Health and <b>Taunt</b>.","playerClass":"Druid"},{"id":"EX1_178a","name":"Rooted","type":"Spell","faction":"Neutral","text":"+5 Health and <b>Taunt</b>.","playerClass":"Druid"},{"id":"EX1_134","name":"SI:7 Agent","type":"Minion","faction":"Neutral","rarity":"Rare","cost":3,"attack":3,"health":3,"text":"<b>Combo:</b> Deal 2 damage.","flavor":"The agents of SI:7 are responsible for Stormwind's covert activities.  Their duties include espionage, assassination, and throwing surprise birthday parties for the royal family.","artist":"Chris Moeller","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"EX1_578","name":"Savagery","type":"Spell","faction":"Neutral","rarity":"Rare","cost":1,"text":"Deal damage equal to your hero's Attack to a minion.","flavor":"It is true that some druids are savage, but others still enjoy a quiet moment and a spot of tea.","artist":"Dave Rapoza","collectible":true,"playerClass":"Druid","mechanics":["AffectedBySpellPower"]},{"id":"EX1_534","name":"Savannah Highmane","type":"Minion","rarity":"Rare","cost":6,"attack":6,"health":5,"text":"<b>Deathrattle:</b> Summon two 2/2 Hyenas.","inPlayText":"Master","flavor":"In the jungle, the mighty jungle, the lion gets slowly consumed by hyenas.","artist":"Milivoj Ceran","collectible":true,"race":"Beast","playerClass":"Hunter","mechanics":["Deathrattle"]},{"id":"EX1_020","name":"Scarlet Crusader","type":"Minion","faction":"Alliance","rarity":"Common","cost":3,"attack":3,"health":1,"text":"<b>Divine Shield</b>","flavor":"Never wash your whites with a Scarlet Crusader.","artist":"Gonzalo Ordonez","collectible":true,"mechanics":["Divine Shield"]},{"id":"EX1_531","name":"Scavenging Hyena","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":2,"text":"Whenever a friendly Beast dies, gain +2/+1.","inPlayText":"Scavenging","flavor":"Hyenas prefer the bones of kodos or windserpents, but they'll eat pretty much anything.  Even Brussels sprouts.","artist":"Jim Nelson","collectible":true,"race":"Beast","playerClass":"Hunter"},{"id":"EX1_586","name":"Sea Giant","type":"Minion","faction":"Neutral","rarity":"Epic","cost":10,"attack":8,"health":8,"text":"Costs (1) less for each other minion on the battlefield.","flavor":"See?  Giant.","artist":"Svetlin Velinov","collectible":true},{"id":"EX1_080","name":"Secretkeeper","type":"Minion","faction":"Alliance","rarity":"Rare","cost":1,"attack":1,"health":2,"text":"Whenever a <b>Secret</b> is played, gain +1/+1.","inPlayText":"Firey","flavor":"She promises not to tell anyone about that thing you did last night with that one person.","artist":"Gonzalo Ordonez","collectible":true},{"id":"EX1_317","name":"Sense Demons","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Put 2 random Demons from your deck into your hand.","flavor":"Generally demons are pretty obvious and you don’t need a spell to sense them.","artist":"Raven Mimura","collectible":true,"playerClass":"Warlock"},{"id":"EX1_334","name":"Shadow Madness","type":"Spell","faction":"Neutral","rarity":"Rare","cost":4,"text":"Gain control of an enemy minion with 3 or less Attack until end of turn.","flavor":"You can rationalize it all you want, it's still a mean thing to do.","artist":"Mark Gibbons","collectible":true,"playerClass":"Priest"},{"id":"EX1_345t","name":"Shadow of Nothing","type":"Minion","rarity":"Epic","cost":0,"attack":0,"health":1,"text":"Mindgames whiffed! Your opponent had no minions!","playerClass":"Priest"},{"id":"EX1_303","name":"Shadowflame","type":"Spell","faction":"Neutral","rarity":"Rare","cost":4,"text":"Destroy a friendly minion and deal its Attack damage to all enemy minions.","flavor":"Start with a powerful minion and stir in Shadowflame and you have a good time!","artist":"Dave Kendall","collectible":true,"playerClass":"Warlock","mechanics":["AffectedBySpellPower"]},{"id":"EX1_625","name":"Shadowform","type":"Spell","rarity":"Epic","cost":3,"text":"Your Hero Power becomes 'Deal 2 damage'. If already in Shadowform: 3 damage.","flavor":"If a bright light shines on a priest in Shadowform… do they cast a shadow?","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Priest"},{"id":"EX1_590e","name":"Shadows of M'uru","type":"Enchantment","rarity":"Common","text":"This minion has consumed Divine Shields and has increased Attack and Health."},{"id":"EX1_144","name":"Shadowstep","type":"Spell","faction":"Neutral","rarity":"Common","cost":0,"text":"Return a friendly minion to your hand. It costs (2) less.","flavor":"Rogue dance troops will sometimes Shadowstep away at the end of a performance.  Crowds love it.","artist":"Graven Tung","collectible":true,"playerClass":"Rogue"},{"id":"EX1_573b","name":"Shan'do's Lesson","type":"Spell","faction":"Neutral","text":"Summon two 2/2 Treants with <b>Taunt</b>.","playerClass":"Druid"},{"id":"CS2_221e","name":"Sharp!","type":"Enchantment","text":"+2 Attack from Spiteful Smith."},{"id":"CS2_146o","name":"Sharpened","type":"Enchantment","text":"+1 Durability."},{"id":"EX1_410","name":"Shield Slam","type":"Spell","faction":"Neutral","rarity":"Epic","cost":1,"text":"Deal 1 damage to a minion for each Armor you have.","flavor":"\"What is a better weapon? The sharp one your enemies expect, or the blunt one they ignore?\" - The Art of Warrior, Chapter 9","artist":"Raymond Swanland","collectible":true,"playerClass":"Warrior","mechanics":["AffectedBySpellPower"]},{"id":"EX1_405","name":"Shieldbearer","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":0,"health":4,"text":"<b>Taunt</b>","flavor":"Have you seen the size of the shields in this game??  This is no easy job.","artist":"Carl Critchlow","collectible":true,"mechanics":["Taunt"]},{"id":"EX1_332","name":"Silence","type":"Spell","faction":"Neutral","rarity":"Common","cost":0,"text":"<b>Silence</b> a minion.","flavor":"Reserved for enemy spellcasters, evil liches from beyond the grave, and karaoke nights at the Grim Guzzler.","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Priest","mechanics":["Silence"]},{"id":"CS2_151","name":"Silver Hand Knight","type":"Minion","faction":"Alliance","rarity":"Common","cost":5,"attack":4,"health":4,"text":"<b>Battlecry:</b> Summon a 2/2 Squire.","flavor":"It's good to be a knight.   Less so to be one's squire.","artist":"Matt Starbuck","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_023","name":"Silvermoon Guardian","type":"Minion","faction":"Horde","rarity":"Common","cost":4,"attack":3,"health":3,"text":"<b>Divine Shield</b>","flavor":"The first time they tried to guard Silvermoon against the scourge, it didn’t go so well…","artist":"Phroilan Gardner","collectible":true,"mechanics":["Divine Shield"]},{"id":"EX1_309","name":"Siphon Soul","type":"Spell","faction":"Neutral","rarity":"Rare","cost":6,"text":"Destroy a minion. Restore #3 Health to your hero.","flavor":"You probably should avoid siphoning your own soul.  You might create some kind of weird infinite loop.","artist":"Tyler Walpole","collectible":true,"playerClass":"Warlock"},{"id":"EX1_391","name":"Slam","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal $2 damage to a minion. If it survives, draw a card.","flavor":"\"Dun da dun, dun da dun\": if you've heard an ogre sing this, it's too late.","artist":"E.M. Gist","collectible":true,"playerClass":"Warrior"},{"id":"EX1_554t","name":"Snake","type":"Minion","faction":"Neutral","rarity":"Common","cost":0,"attack":1,"health":1,"race":"Beast","playerClass":"Hunter"},{"id":"EX1_554","name":"Snake Trap","type":"Spell","faction":"Neutral","rarity":"Epic","cost":2,"text":"<b>Secret:</b> When one of your minions is attacked, summon three 1/1 Snakes.","flavor":"Why did it have to be snakes?","artist":"Bernie Kang","collectible":true,"playerClass":"Hunter","mechanics":["Secret"]},{"id":"EX1_609","name":"Snipe","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"<b>Secret:</b> When your opponent plays a minion, deal $4 damage to it.","flavor":"A great sniper hits the spot.  Just like a delicious flank of boar. Mmmmm.","artist":"Lorenzo Minaca","collectible":true,"playerClass":"Hunter","mechanics":["Secret"]},{"id":"EX1_608","name":"Sorcerer's Apprentice","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":3,"health":2,"text":"Your spells cost (1) less.","flavor":"Apprentices are great for bossing around.  \"Conjure me some mana buns! And a coffee!  Make that a mana coffee!\"","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Mage","mechanics":["Aura"]},{"id":"EX1_158","name":"Soul of the Forest","type":"Spell","faction":"Neutral","rarity":"Common","cost":4,"text":"Give your minions \"<b>Deathrattle:</b> Summon a 2/2 Treant.\"","flavor":"\"Reforestation\" is suddenly a terrifying word.","artist":"Markus Erdt","collectible":true,"playerClass":"Druid"},{"id":"EX1_158e","name":"Soul of the Forest","type":"Enchantment","text":"Deathrattle: Summon a 2/2 Treant.","playerClass":"Druid"},{"id":"NEW1_027","name":"Southsea Captain","type":"Minion","rarity":"Epic","cost":3,"attack":3,"health":3,"text":"Your other Pirates have +1/+1.","flavor":"When he saves enough plunder, he's going to commission an enormous captain's hat.  He has hat envy.","artist":"Ken Steacy","collectible":true,"race":"Pirate","mechanics":["Aura"]},{"id":"CS2_146","name":"Southsea Deckhand","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":2,"health":1,"text":"Has <b>Charge</b> while you have a weapon equipped.","flavor":"Pirates are into this new fad called \"Planking\".","artist":"Dan Brereton","collectible":true,"race":"Pirate"},{"id":"tt_010a","name":"Spellbender","type":"Minion","rarity":"Epic","attack":1,"health":3,"playerClass":"Mage","cost":0},{"id":"tt_010","name":"Spellbender","type":"Spell","faction":"Neutral","rarity":"Epic","cost":3,"text":"<b>Secret:</b> When an enemy casts a spell on a minion, summon a 1/3 as the new target.","flavor":"While it's fun to intercept enemy lightning bolts, a spellbender much prefers to intercept opposing Marks of the Wild.  It just feels meaner.  And blood elves... well, they're a little mean.","artist":"Gonzalo Ordonez","collectible":true,"playerClass":"Mage","mechanics":["Secret"]},{"id":"EX1_048","name":"Spellbreaker","type":"Minion","faction":"Horde","rarity":"Common","cost":4,"attack":4,"health":3,"text":"<b>Battlecry:</b> <b>Silence</b> a minion.","flavor":"Spellbreakers can rip enchantments from magic-wielders.  The process is painless and can be performed on an outpatient basis.","artist":"Matt Cavotta","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_tk11","name":"Spirit Wolf","type":"Minion","faction":"Neutral","rarity":"Rare","cost":2,"attack":2,"health":3,"text":"<b>Taunt</b>","playerClass":"Shaman","mechanics":["Taunt"]},{"id":"CS2_221","name":"Spiteful Smith","type":"Minion","faction":"Horde","rarity":"Common","cost":5,"attack":4,"health":6,"text":"<b>Enrage:</b> Your weapon has +2 Attack.","inPlayText":"Summoning","flavor":"She'll craft you a sword, but you'll need to bring her 5 Steel Ingots, 3 Motes of Earth, and the scalp of her last customer.","artist":"Justin Sweet","collectible":true,"mechanics":["Enrage"]},{"id":"CS2_152","name":"Squire","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":2,"health":2},{"id":"EX1_tk28","name":"Squirrel","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":1,"health":1,"race":"Beast"},{"id":"NEW1_041","name":"Stampeding Kodo","type":"Minion","rarity":"Rare","cost":5,"attack":3,"health":5,"text":"<b>Battlecry:</b> Destroy a random enemy minion with 2 or less Attack.","flavor":"This Kodo is so big that he can stampede by <i>himself</i>.","artist":"Daren Bader","collectible":true,"race":"Beast","mechanics":["Battlecry"]},{"id":"EX1_382e","name":"Stand Down!","type":"Enchantment","text":"Attack changed to 1.","playerClass":"Paladin"},{"id":"NEW1_007a","name":"Starfall","type":"Spell","text":"Deal $2 damage to all enemy minions.","playerClass":"Druid"},{"id":"NEW1_007b","name":"Starfall","type":"Spell","text":"Deal $5 damage to a minion.","playerClass":"Druid"},{"id":"NEW1_007","name":"Starfall","type":"Spell","rarity":"Rare","cost":5,"text":"<b>Choose One -</b> Deal $5 damage to a minion; or $2 damage to all enemy minions.","flavor":"Is the sky falling?  Yes.  Yes it is.","artist":"Richard Wright","collectible":true,"playerClass":"Druid"},{"id":"EX1_247","name":"Stormforged Axe","type":"Weapon","faction":"Neutral","rarity":"Common","cost":2,"attack":2,"durability":3,"text":"<b>Overload:</b> (1)","flavor":"Yo, that's a nice axe.","artist":"Nate Bowden","collectible":true,"playerClass":"Shaman"},{"id":"EX1_028","name":"Stranglethorn Tiger","type":"Minion","faction":"Alliance","rarity":"Common","cost":5,"attack":5,"health":5,"text":"<b>Stealth</b>","flavor":"The wonderful thing about tigers is tigers are wonderful things!","artist":"Alex Horley Orlandelli","collectible":true,"race":"Beast","mechanics":["Stealth"]},{"id":"EX1_162o","name":"Strength of the Pack","type":"Enchantment","text":"Dire Wolf Alpha is granting +1 Attack to this minion."},{"id":"EX1_160a","name":"Summon a Panther","type":"Spell","faction":"Neutral","text":"Summon a 3/2 Panther.","playerClass":"Druid"},{"id":"EX1_315","name":"Summoning Portal","type":"Minion","faction":"Neutral","rarity":"Common","cost":4,"attack":0,"health":4,"text":"Your minions cost (2) less, but not less than (1).","inPlayText":"Summoning","flavor":"NOT LESS THAN 1!  Don't get any ideas!","artist":"Tyler Walpole","collectible":true,"playerClass":"Warlock","mechanics":["Aura"]},{"id":"EX1_058","name":"Sunfury Protector","type":"Minion","faction":"Alliance","rarity":"Rare","cost":2,"attack":2,"health":3,"text":"<b>Battlecry:</b> Give adjacent minions <b>Taunt</b>.","flavor":"She carries a shield, but only so she can give it to someone she can stand behind.","artist":"James Ryman","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_032","name":"Sunwalker","type":"Minion","faction":"Alliance","rarity":"Rare","cost":6,"attack":4,"health":5,"text":"<b>Taunt</b>. <b>Divine Shield</b>","flavor":"She doesn’t ACTUALLY walk on the Sun.  It's just a name.  Don’t worry!","artist":"Andrea Uderzo","collectible":true,"mechanics":["Divine Shield","Taunt"]},{"id":"EX1_366","name":"Sword of Justice","type":"Weapon","faction":"Neutral","rarity":"Epic","cost":3,"attack":1,"durability":5,"text":"Whenever you summon a minion, give it +1/+1 and this loses 1 Durability.","flavor":"I dub you Sir Loin of Beef!","artist":"Efrem Palacios","collectible":true,"playerClass":"Paladin"},{"id":"EX1_016","name":"Sylvanas Windrunner","type":"Minion","rarity":"Legendary","cost":6,"attack":5,"health":5,"text":"<b>Deathrattle:</b> Take control of a random enemy minion.","flavor":"Sylvanas was turned into the Banshee Queen by Arthas, but he probably should have just killed her because it just pissed her off.","artist":"Glenn Rane","collectible":true,"elite":true,"mechanics":["Deathrattle"]},{"id":"EX1_390","name":"Tauren Warrior","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":2,"health":3,"text":"<b>Taunt</b>. <b>Enrage:</b> +3 Attack","flavor":"Tauren Warrior: Champion of Mulgore, Slayer of Quilboar, Rider of Thunderbluff Elevators.","artist":"Paul Warzecha","collectible":true,"mechanics":["Enrage","Taunt"]},{"id":"EX1_584e","name":"Teachings of the Kirin Tor","type":"Enchantment","text":"<b>Spell Damage +1</b>."},{"id":"EX1_046e","name":"Tempered","type":"Enchantment","text":"+2 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"EX1_623","name":"Temple Enforcer","type":"Minion","rarity":"Common","cost":6,"attack":6,"health":6,"text":"<b>Battlecry:</b> Give a friendly minion +3 Health.","flavor":"He also moonlights Thursday nights as a bouncer at the Pig and Whistle Tavern.","artist":"Daren Bader","collectible":true,"playerClass":"Priest","mechanics":["Battlecry"]},{"id":"EX1_577","name":"The Beast","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":6,"attack":9,"health":7,"text":"<b>Deathrattle:</b> Summon a 3/3 Finkle Einhorn for your opponent.","flavor":"He lives in Blackrock Mountain.  He eats Gnomes.  That's pretty much it.","artist":"Glenn Rane","collectible":true,"elite":true,"race":"Beast","mechanics":["Deathrattle"]},{"id":"EX1_002","name":"The Black Knight","type":"Minion","rarity":"Legendary","cost":6,"attack":4,"health":5,"text":"<b>Battlecry:</b> Destroy an enemy minion with <b>Taunt</b>.","flavor":"He was sent by the Lich King to disrupt the Argent Tournament.   We can pretty much mark that a failure.","artist":"Alex Horley Orlandelli","collectible":true,"elite":true,"mechanics":["Battlecry"]},{"id":"EX1_339","name":"Thoughtsteal","type":"Spell","faction":"Neutral","rarity":"Common","cost":3,"text":"Copy 2 cards from your opponent's deck and put them into your hand.","flavor":"\"What do you get when you cast Thoughtsteal on an Orc?  Nothing!\" - Tauren joke","artist":"Alex Garner","collectible":true,"playerClass":"Priest"},{"id":"EX1_021","name":"Thrallmar Farseer","type":"Minion","faction":"Horde","rarity":"Common","cost":3,"attack":2,"health":3,"text":"<b>Windfury</b>","flavor":"He's stationed in the Hellfire Peninsula, but he's hoping for a reassignment closer to Orgrimmar, or really anywhere the ground is less on fire.","artist":"Efrem Palacios","collectible":true,"mechanics":["Windfury"]},{"id":"EX1_083","name":"Tinkmaster Overspark","type":"Minion","faction":"Alliance","rarity":"Legendary","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> Transform another random minion into a 5/5 Devilsaur or a 1/1 Squirrel.","flavor":"Tinkmaster Overspark nearly lost his Tinker's license after the Great Ironforge Squirrel Stampede of '09.","artist":"Tom Baxa","collectible":true,"elite":true,"mechanics":["Battlecry"]},{"id":"EX1_383","name":"Tirion Fordring","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":8,"attack":6,"health":6,"text":"<b>Divine Shield</b>. <b>Taunt</b>. <b>Deathrattle:</b> Equip a 5/3 Ashbringer.","flavor":"If you haven't heard the Tirion Fordring theme song, it's because it doesn't exist.","artist":"Brom","collectible":true,"elite":true,"playerClass":"Paladin","mechanics":["Deathrattle","Divine Shield","Taunt"]},{"id":"EX1_611e","name":"Trapped","type":"Enchantment","text":"Will be <b>Frozen</b> again at the start of the next turn.","playerClass":"Hunter"},{"id":"EX1_tk9","name":"Treant","type":"Minion","faction":"Neutral","rarity":"Common","cost":1,"attack":2,"health":2,"text":"<b>Charge</b>.  At the end of the turn, destroy this minion.","playerClass":"Druid","mechanics":["Charge"]},{"id":"EX1_573t","name":"Treant","type":"Minion","cost":1,"attack":2,"health":2,"text":"<b>Taunt</b>","playerClass":"Druid","mechanics":["Taunt"]},{"id":"EX1_158t","name":"Treant","type":"Minion","faction":"Neutral","cost":1,"attack":2,"health":2,"playerClass":"Druid"},{"id":"NEW1_018e","name":"Treasure Crazed","type":"Enchantment","text":"Increased Attack."},{"id":"EX1_043","name":"Twilight Drake","type":"Minion","faction":"Neutral","rarity":"Rare","cost":4,"attack":4,"health":1,"text":"<b>Battlecry:</b> Gain +1 Health for each card in your hand.","flavor":"Twilight drakes feed on Mystical Energy.  And Tacos.","artist":"Jaemin Kim","collectible":true,"race":"Dragon","mechanics":["Battlecry"]},{"id":"EX1_312","name":"Twisting Nether","type":"Spell","faction":"Neutral","rarity":"Epic","cost":8,"text":"Destroy all minions.","flavor":"The Twisting Nether is a formless place of magic and illusion and destroyed minions.","artist":"Dave Allsop","collectible":true,"playerClass":"Warlock"},{"id":"EX1_258","name":"Unbound Elemental","type":"Minion","faction":"Neutral","rarity":"Common","cost":3,"attack":2,"health":4,"text":"Whenever you play a card with <b>Overload</b>, gain +1/+1.","flavor":"Unlike bound elementals, Unbound ones really enjoy a night on the town.","artist":"Matt Gaser","collectible":true,"playerClass":"Shaman"},{"id":"EX1_538","name":"Unleash the Hounds","type":"Spell","rarity":"Common","cost":3,"text":"For each enemy minion, summon a 1/1 Hound with <b>Charge</b>.","flavor":"You must read the name of this card out loud each time you play it.","artist":"Linggar Bramanty","collectible":true,"playerClass":"Hunter"},{"id":"EX1_409","name":"Upgrade!","type":"Spell","faction":"Neutral","rarity":"Rare","cost":1,"text":"If you have a weapon, give it +1/+1. Otherwise equip a 1/3 weapon.","flavor":"Easily worth 50 DKP.","artist":"Matt Cavotta","collectible":true,"playerClass":"Warrior"},{"id":"EX1_536e","name":"Upgraded","type":"Enchantment","text":"Increased Durability.","playerClass":"Hunter"},{"id":"EX1_409e","name":"Upgraded","type":"Enchantment","text":"+1 Attack and +1 Durability.","playerClass":"Warrior"},{"id":"EX1_178b","name":"Uproot","type":"Spell","faction":"Neutral","text":"+5 Attack.","playerClass":"Druid"},{"id":"EX1_178be","name":"Uprooted","type":"Enchantment","text":"+5 Attack.","playerClass":"Druid"},{"id":"EX1_613e","name":"VanCleef's Vengeance","type":"Enchantment","text":"This minion has increased Attack and Health.","playerClass":"Rogue"},{"id":"EX1_594","name":"Vaporize","type":"Spell","faction":"Neutral","rarity":"Rare","cost":3,"text":"<b>Secret:</b> When a minion attacks your hero, destroy it.","flavor":"Rumor has it that Deathwing brought about the Cataclysm after losing a game to this card.  We may never know the truth.","artist":"Raymond Swanland","collectible":true,"playerClass":"Mage","mechanics":["Secret"]},{"id":"CS2_227","name":"Venture Co. Mercenary","type":"Minion","faction":"Horde","rarity":"Common","cost":5,"attack":7,"health":6,"text":"Your minions cost (3) more.","inPlayText":"Power","flavor":"No Job is too big.  No fee is too big.","artist":"John Polidora","collectible":true,"mechanics":["Aura"]},{"id":"NEW1_026t","name":"Violet Apprentice","type":"Minion","cost":0,"attack":1,"health":1},{"id":"NEW1_026","name":"Violet Teacher","type":"Minion","rarity":"Rare","cost":4,"attack":3,"health":5,"text":"Whenever you cast a spell, summon a 1/1 Violet Apprentice.","flavor":"If you don't pay attention, you may be turned into a pig.  And then you get your name on the board.","artist":"James Ryman","collectible":true},{"id":"EX1_304","name":"Void Terror","type":"Minion","rarity":"Rare","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> Destroy the minions on either side of this minion and gain their Attack and Health.","flavor":"If you put this into your deck, you WILL lose the trust of your other minions.","artist":"Alexander Alexandrov","collectible":true,"race":"Demon","playerClass":"Warlock","mechanics":["Battlecry"]},{"id":"EX1_001e","name":"Warded","type":"Enchantment","text":"Increased Attack."},{"id":"EX1_531e","name":"Well Fed","type":"Enchantment","text":"Increased Attack and Health.","playerClass":"Hunter"},{"id":"ds1_whelptoken","name":"Whelp","type":"Minion","faction":"Neutral","cost":1,"attack":1,"health":1,"race":"Dragon"},{"id":"EX1_116t","name":"Whelp","type":"Minion","cost":1,"attack":1,"health":1,"race":"Dragon"},{"id":"EX1_603e","name":"Whipped Into Shape","type":"Enchantment","text":"+2 Attack.","playerClass":"Warrior"},{"id":"NEW1_020","name":"Wild Pyromancer","type":"Minion","rarity":"Rare","cost":2,"attack":3,"health":2,"text":"After you cast a spell, deal 1 damage to ALL minions.","flavor":"BOOM BABY BOOM!  BAD IS GOOD!  DOWN WITH GOVERNMENT!","artist":"Alex Horley Orlandelli","collectible":true},{"id":"EX1_033","name":"Windfury Harpy","type":"Minion","faction":"Alliance","rarity":"Common","cost":6,"attack":4,"health":5,"text":"<b>Windfury</b>","flavor":"Harpies are not pleasant sounding.  That's the nicest I can put it.","artist":"Luke Mancini","collectible":true,"mechanics":["Windfury"]},{"id":"CS2_231","name":"Wisp","type":"Minion","faction":"Neutral","rarity":"Common","cost":0,"attack":1,"health":1,"flavor":"If you hit an Eredar Lord with enough Wisps, it will explode.   But why?","artist":"Malcolm Davis","collectible":true},{"id":"EX1_010","name":"Worgen Infiltrator","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":2,"health":1,"text":"<b>Stealth</b>","flavor":"If you want to stop a worgen from infiltrating, just yell, \"No! Bad boy!\"","artist":"Raymond Swanland","collectible":true,"mechanics":["Stealth"]},{"id":"EX1_317t","name":"Worthless Imp","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<i>You are out of demons! At least there are always imps...</i>","race":"Demon","playerClass":"Warlock"},{"id":"EX1_154b","name":"Wrath","type":"Spell","faction":"Neutral","text":"Deal $1 damage to a minion. Draw a card.","playerClass":"Druid"},{"id":"EX1_154a","name":"Wrath","type":"Spell","faction":"Neutral","text":"Deal $3 damage to a minion.","playerClass":"Druid"},{"id":"EX1_154","name":"Wrath","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"<b>Choose One</b> - Deal $3 damage to a minion; or $1 damage and draw a card.","flavor":"The talk around the Ratchet Inn is that this card is too good and should be a Legendary.","artist":"Raymond Swanland","collectible":true,"playerClass":"Druid"},{"id":"NEW1_027e","name":"Yarrr!","type":"Enchantment","text":"Southsea Captain is granting +1/+1."},{"id":"CS2_169","name":"Young Dragonhawk","type":"Minion","faction":"Horde","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<b>Windfury</b>","flavor":"They were the inspiration for the championship Taurenball team: The Dragonhawks.","artist":"Greg Hildebrandt","collectible":true,"race":"Beast","mechanics":["Windfury"]},{"id":"EX1_004","name":"Young Priestess","type":"Minion","rarity":"Rare","cost":1,"attack":2,"health":1,"text":"At the end of your turn, give another random friendly minion +1 Health.","flavor":"She can't wait to learn Power Word: Fortitude Rank 2.","artist":"Vance Kovacs","collectible":true},{"id":"EX1_049","name":"Youthful Brewmaster","type":"Minion","faction":"Alliance","rarity":"Common","cost":2,"attack":3,"health":2,"text":"<b>Battlecry:</b> Return a friendly minion from the battlefield to your hand.","flavor":"His youthful enthusiasm doesn’t always equal excellence in his brews.   Don’t drink the Mogu Stout!","artist":"Wei Wang","collectible":true,"mechanics":["Battlecry"]},{"id":"EX1_572","name":"Ysera","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":9,"attack":4,"health":12,"text":"At the end of your turn, draw a Dream Card.","flavor":"Ysera rules the Emerald Dream.  Which is some kind of green-mirror-version of the real world, or something?","artist":"Gabor Szikszai","collectible":true,"elite":true,"race":"Dragon"},{"id":"DREAM_02","name":"Ysera Awakens","type":"Spell","cost":2,"text":"Deal $5 damage to all characters except Ysera.","playerClass":"Dream"}],"Credits":[{"id":"CRED_15","name":"Andy Brock","type":"Minion","rarity":"Legendary","cost":1,"attack":1,"health":3,"text":"Can't be <b>Silenced. Divine Shield, Stealth.</b>","elite":true},{"id":"CRED_08","name":"Ben Brode","type":"Minion","rarity":"Legendary","cost":3,"attack":4,"health":1,"text":"Your volume can't be reduced below maximum.","elite":true},{"id":"CRED_09","name":"Ben Thompson","type":"Minion","rarity":"Legendary","cost":6,"attack":4,"health":7,"text":"<b>Battlecry:</b> Draw some cards. With a pen.","elite":true},{"id":"CRED_03","name":"Bob Fitch","type":"Minion","rarity":"Legendary","cost":3,"attack":2,"health":4,"text":"<b>Super Taunt</b> <i>(EVERY character must attack this minion.)</i>","elite":true},{"id":"CRED_13","name":"Brian Schwab","type":"Minion","rarity":"Legendary","cost":10,"attack":10,"health":10,"text":"At the end of your turn, give a random minion +1 Attack.","elite":true},{"id":"CRED_06","name":"Derek Sakamoto","type":"Minion","rarity":"Legendary","cost":1,"attack":3,"health":1,"text":"<i>The notorious Footclapper.</i>","elite":true},{"id":"CRED_02","name":"Eric Dodds","type":"Minion","rarity":"Legendary","cost":6,"attack":5,"health":5,"text":"<b>Battlecry:</b> Summon a 2/2 Pirate and destroy all Ninjas.","elite":true},{"id":"CRED_16","name":"Hamilton Chu","type":"Minion","rarity":"Legendary","cost":7,"attack":9,"health":5,"text":"<i>Was successfully NOT part of the problem! ...most of the time.</i>","elite":true},{"id":"CRED_01","name":"Jason Chayes","type":"Minion","rarity":"Legendary","cost":6,"attack":7,"health":6,"text":"<b>Enrage:</b> Just kidding! He never Enrages.","elite":true},{"id":"CRED_11","name":"Jay Baxter","type":"Minion","rarity":"Legendary","cost":4,"attack":1,"health":4,"text":"<b>Battlecry:</b> Summon FIVE random Inventions.","elite":true},{"id":"CRED_05","name":"Kyle Harrison","type":"Minion","rarity":"Legendary","cost":3,"attack":5,"health":4,"text":"<i>3 for a 5/4? That's a good deal!</i>","elite":true},{"id":"CRED_10","name":"Michael Schweitzer","type":"Minion","rarity":"Legendary","cost":2,"attack":2,"health":2,"text":"<b>C-C-C-COMBO:</b> Destroy a minion.","elite":true},{"id":"CRED_12","name":"Rachelle Davis","type":"Minion","rarity":"Legendary","cost":2,"attack":1,"health":2,"text":"<b>Battlecry:</b> Draw TWO cards. <i>She's not a novice engineer.</i>","elite":true},{"id":"CRED_17","name":"Rob Pardo","type":"Minion","rarity":"Legendary","cost":9,"attack":9,"health":9,"text":"You can't start a game without this minion in your deck.","elite":true},{"id":"CRED_04","name":"Steven Gabriel","type":"Minion","rarity":"Legendary","cost":1,"attack":3,"health":3,"text":"<b>Battlecry:</b> Summon a frothy beverage.","elite":true},{"id":"CRED_14","name":"Yong Woo","type":"Minion","rarity":"Legendary","cost":5,"attack":3,"health":2,"text":"Your other minions have +3 Attack and <b>Charge</b>.","elite":true},{"id":"CRED_07","name":"Zwick","type":"Minion","rarity":"Legendary","cost":2,"attack":2,"health":2,"text":"<b>Battlecry:</b> Complain about bacon prices.","elite":true}],"Curse of Naxxramas":[{"id":"NAX1h_01","name":"Anub'Rekhan","type":"Hero","health":45},{"id":"NAX1_01","name":"Anub'Rekhan","type":"Hero","health":30},{"id":"FP1_026","name":"Anub'ar Ambusher","type":"Minion","rarity":"Common","cost":4,"attack":5,"health":5,"text":"<b>Deathrattle:</b> Return a random friendly minion to your hand.","flavor":"Originally he was called \"Anub'ar Guy who bounces a guy back to your hand\", but it lacked a certain zing.","artist":"Nate Bowden","collectible":true,"playerClass":"Rogue","howToGet":"Unlocked by completing the Rogue Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Rogue Class Challenge in Naxxramas.","mechanics":["Deathrattle"]},{"id":"FP1_020","name":"Avenge","type":"Spell","rarity":"Common","cost":1,"text":"<b>Secret:</b> When one of your minions dies, give a random friendly minion +3/+2.","flavor":"Several paladins have joined together to deliver justice under the name \"Justice Force.\"  Their lawyer talked them out of calling themselves the Justice League.","artist":"Zoltan & Gabor","collectible":true,"playerClass":"Paladin","howToGet":"Unlocked by completing the Paladin Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Paladin Class Challenge in Naxxramas.","mechanics":["Secret"]},{"id":"NAX9_01","name":"Baron Rivendare","type":"Hero","health":7},{"id":"NAX9_01H","name":"Baron Rivendare","type":"Hero","health":14},{"id":"FP1_031","name":"Baron Rivendare","type":"Minion","rarity":"Legendary","cost":4,"attack":1,"health":7,"text":"Your minions trigger their <b>Deathrattles</b> twice.","flavor":"There used to be five Horsemen but one of them left because a job opened up in the deadmines and the benefits were better.","artist":"Ralph Horsley","collectible":true,"elite":true,"howToGet":"Unlocked by completing the Military Quarter.","howToGetGold":"Can be crafted after completing the Military Quarter.","mechanics":["Aura"]},{"id":"NAX15_04H","name":"Chains","type":"Hero Power","cost":8,"text":"<b>Hero Power</b>\nTake control of a random enemy minion."},{"id":"NAX15_04","name":"Chains","type":"Hero Power","cost":8,"text":"<b>Hero Power</b>\nTake control of a random enemy minion until end of turn."},{"id":"FP1_005e","name":"Consume","type":"Enchantment","text":"Increased stats."},{"id":"FP1_029","name":"Dancing Swords","type":"Minion","rarity":"Common","cost":3,"attack":4,"health":4,"text":"<b>Deathrattle:</b> Your opponent draws a card.","flavor":"They like to dance to reggae.","artist":"Jon McConnell","collectible":true,"howToGet":"Unlocked by defeating Instructor Razuvious in the Military Quarter.","howToGetGold":"Can be crafted after defeating Instructor Razuvious in the Military Quarter.","mechanics":["Deathrattle"]},{"id":"FP1_023","name":"Dark Cultist","type":"Minion","rarity":"Common","cost":3,"attack":3,"health":4,"text":"<b>Deathrattle:</b> Give a random friendly minion +3 Health.","flavor":"The Cult of the Damned has found it's best not to mention their name when recruiting new cultists.","artist":"Phroilan Gardner","collectible":true,"playerClass":"Priest","howToGet":"Unlocked by completing the Priest Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Priest Class Challenge in Naxxramas.","mechanics":["Deathrattle"]},{"id":"FP1_028e","name":"Darkness Calls","type":"Enchantment","text":"Increased stats."},{"id":"FP1_021","name":"Death's Bite","type":"Weapon","rarity":"Common","cost":4,"attack":4,"durability":2,"text":"<b>Deathrattle:</b> Deal 1 damage to all minions.","flavor":"\"Take a bite outta Death.\" - McScruff the Deathlord","artist":"Jim Nelson","collectible":true,"playerClass":"Warrior","howToGet":"Unlocked by completing the Warrior Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Warrior Class Challenge in Naxxramas.","mechanics":["Deathrattle"]},{"id":"NAX6_03","name":"Deathbloom","type":"Spell","cost":4,"text":"Deal $5 damage to a minion. Summon a Spore."},{"id":"FP1_006","name":"Deathcharger","type":"Minion","cost":1,"attack":2,"health":3,"text":"<b>Charge. Deathrattle:</b> Deal 3 damage to your hero.","mechanics":["Charge","Deathrattle"]},{"id":"FP1_009","name":"Deathlord","type":"Minion","rarity":"Rare","cost":3,"attack":2,"health":8,"text":"<b>Taunt. Deathrattle:</b> Your opponent puts a minion from their deck into the battlefield.","flavor":"\"Rise from your grave!\" - Kel'Thuzad","artist":"Ben Olson","collectible":true,"howToGet":"Unlocked by defeating The Four Horsemen in the Military Quarter.","howToGetGold":"Can be crafted after defeating The Four Horsemen in the Military Quarter.","mechanics":["Deathrattle","Taunt"]},{"id":"NAX12_02e","name":"Decimate","type":"Enchantment","text":"Health changed to 1."},{"id":"NAX12_02","name":"Decimate","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nChange the Health of all minions to 1."},{"id":"NAX12_02H","name":"Decimate","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nChange the Health of enemy minions to 1."},{"id":"FP1_018","name":"Duplicate","type":"Spell","rarity":"Common","cost":3,"text":"<b>Secret:</b> When a friendly minion dies, put 2 copies of it into your hand.","flavor":"The one time when duping cards won't get your account banned!","artist":"Alex Garner","collectible":true,"playerClass":"Mage","howToGet":"Unlocked by completing the Mage Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Mage Class Challenge in Naxxramas.","mechanics":["Secret"]},{"id":"FP1_003","name":"Echoing Ooze","type":"Minion","rarity":"Epic","cost":2,"attack":1,"health":2,"text":"<b>Battlecry:</b> Summon an exact copy of this minion at the end of the turn.","flavor":"OOZE... Ooze... Ooze... (ooze...)","artist":"Eric Browning","collectible":true,"howToGet":"Unlocked by defeating Sapphiron in the Frostwyrm Lair.","howToGetGold":"Can be crafted after defeating Sapphiron in the Frostwyrm Lair.","mechanics":["Battlecry"]},{"id":"NAX12_04e","name":"Enrage","type":"Enchantment","text":"+6 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"NAX12_04","name":"Enrage","type":"Spell","cost":3,"text":"Give your hero +6 Attack this turn."},{"id":"NAX5_02H","name":"Eruption","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nDeal 3 damage to the left-most enemy minion."},{"id":"NAX5_02","name":"Eruption","type":"Hero Power","cost":1,"text":"<b>Hero Power</b>\nDeal 2 damage to the left-most enemy minion."},{"id":"NAX12_03e","name":"Extra Teeth","type":"Enchantment","text":"Increased Attack."},{"id":"NAX11_03","name":"Fallout Slime","type":"Minion","cost":1,"attack":2,"health":2},{"id":"NAX13_04H","name":"Feugen","type":"Minion","rarity":"Legendary","cost":5,"attack":4,"health":7,"elite":true},{"id":"FP1_015","name":"Feugen","type":"Minion","rarity":"Legendary","cost":5,"attack":4,"health":7,"text":"<b>Deathrattle:</b> If Stalagg also died this game, summon Thaddius.","flavor":"Feugen is sad because everyone likes Stalagg better.","artist":"Dany Orizio","collectible":true,"elite":true,"howToGet":"Unlocked by completing the Construct Quarter.","howToGetGold":"Can be crafted after completing the Construct Quarter.","mechanics":["Deathrattle"]},{"id":"NAX15_02","name":"Frost Blast","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nDeal 2 damage to the enemy hero and <b>Freeze</b> it.","mechanics":["Freeze"]},{"id":"NAX15_02H","name":"Frost Blast","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nDeal 3 damage to the enemy hero and <b>Freeze</b> it.","mechanics":["Freeze"]},{"id":"NAX14_02","name":"Frost Breath","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nDestroy all enemy minions that aren't <b>Frozen</b>."},{"id":"NAX14_03","name":"Frozen Champion","type":"Minion","cost":5,"attack":2,"health":10,"text":"Permanently Frozen.  Adjacent minions are Immune to Frost Breath.","mechanics":["Aura"]},{"id":"NAX6_03te","name":"Fungal Growth","type":"Enchantment","text":"Increased Attack."},{"id":"NAX12_01H","name":"Gluth","type":"Hero","health":45},{"id":"NAX12_01","name":"Gluth","type":"Hero","health":30},{"id":"NAX8_01","name":"Gothik the Harvester","type":"Hero","health":30},{"id":"NAX8_01H","name":"Gothik the Harvester","type":"Hero","health":45},{"id":"NAX2_01H","name":"Grand Widow Faerlina","type":"Hero","health":45},{"id":"NAX2_01","name":"Grand Widow Faerlina","type":"Hero","health":30},{"id":"NAX11_01H","name":"Grobbulus","type":"Hero","health":45},{"id":"NAX11_01","name":"Grobbulus","type":"Hero","health":30},{"id":"NAX15_03t","name":"Guardian of Icecrown","type":"Minion","cost":4,"attack":5,"health":5,"text":"<b>Taunt</b>","mechanics":["Taunt"]},{"id":"NAX15_03n","name":"Guardian of Icecrown","type":"Minion","cost":4,"attack":3,"health":3,"text":"<b>Taunt</b>","mechanics":["Taunt"]},{"id":"NAX8_02","name":"Harvest","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nDraw a card."},{"id":"NAX8_02H","name":"Harvest","type":"Hero Power","cost":1,"text":"<b>Hero Power</b>\nDraw a card. Gain a Mana Crystal."},{"id":"NAX10_03H","name":"Hateful Strike","type":"Hero Power","cost":4,"text":"<b>Hero Power</b>\nDestroy a minion."},{"id":"NAX10_03","name":"Hateful Strike","type":"Hero Power","cost":4,"text":"<b>Hero Power</b>\nDestroy a minion."},{"id":"FP1_002","name":"Haunted Creeper","type":"Minion","rarity":"Common","cost":2,"attack":1,"health":2,"text":"<b>Deathrattle:</b> Summon two 1/1 Spectral Spiders.","flavor":"Arachnofauxbia: Fear of fake spiders.","artist":"Jeremy Cranford","collectible":true,"race":"Beast","howToGet":"Unlocked by defeating Anub'Rekhan in the Arachnid Quarter.","howToGetGold":"Can be crafted after defeating Anub'Rekhan in the Arachnid Quarter.","mechanics":["Deathrattle"]},{"id":"NAX5_01","name":"Heigan the Unclean","type":"Hero","health":30,"playerClass":"Warlock"},{"id":"NAX5_01H","name":"Heigan the Unclean","type":"Hero","health":45,"playerClass":"Warlock"},{"id":"NAX10_02","name":"Hook","type":"Weapon","cost":3,"attack":5,"durability":8,"text":"<b>Deathrattle:</b> Put this weapon into your hand.","mechanics":["Deathrattle"]},{"id":"NAX10_02H","name":"Hook","type":"Weapon","cost":3,"attack":4,"durability":8,"text":"<b>Windfury</b>\n<b>Deathrattle:</b> Put this weapon into your hand.","mechanics":["Deathrattle","Windfury"]},{"id":"NAX7_01H","name":"Instructor Razuvious","type":"Hero","health":55},{"id":"NAX7_01","name":"Instructor Razuvious","type":"Hero","health":40},{"id":"NAX15_01He","name":"Interloper!","type":"Enchantment"},{"id":"NAX15_01e","name":"Interloper!","type":"Enchantment"},{"id":"NAX12_03","name":"Jaws","type":"Weapon","cost":1,"attack":1,"durability":5,"text":"Whenever a minion with <b>Deathrattle</b> dies, gain +2 Attack."},{"id":"NAX12_03H","name":"Jaws","type":"Weapon","cost":1,"attack":3,"durability":5,"text":"Whenever a minion with <b>Deathrattle</b> dies, gain +2 Attack."},{"id":"NAX15_01H","name":"Kel'Thuzad","type":"Hero","health":45},{"id":"NAX15_01","name":"Kel'Thuzad","type":"Hero","health":30},{"id":"FP1_013","name":"Kel'Thuzad","type":"Minion","rarity":"Legendary","cost":8,"attack":6,"health":8,"text":"At the end of each turn, summon all friendly minions that died this turn.","flavor":"Kel'Thuzad could not resist the call of the Lich King.   Even when it's just a robo-call extolling the Lich King's virtues.","artist":"Chris Robinson","collectible":true,"elite":true,"howToGet":"Unlocked by defeating every boss in Naxxramas!","howToGetGold":"Can be crafted after defeating every boss in Naxxramas!"},{"id":"NAX9_02H","name":"Lady Blaumeux","type":"Minion","cost":3,"attack":2,"health":7,"text":"Your hero is <b>Immune</b>.","elite":true},{"id":"NAX9_02","name":"Lady Blaumeux","type":"Minion","cost":3,"attack":1,"health":7,"text":"Your hero is <b>Immune</b>.","elite":true},{"id":"NAX6_01H","name":"Loatheb","type":"Hero","health":99},{"id":"NAX6_01","name":"Loatheb","type":"Hero","health":75},{"id":"FP1_030","name":"Loatheb","type":"Minion","rarity":"Legendary","cost":5,"attack":5,"health":5,"text":"<b>Battlecry:</b> Enemy spells cost (5) more next turn.","flavor":"Loatheb used to be a simple Bog Beast.  This is why we need stricter regulations on mining and agriculture.","artist":"Samwise","collectible":true,"elite":true,"howToGet":"Unlocked by completing the Plague Quarter.","howToGetGold":"Can be crafted after completing the Plague Quarter.","mechanics":["Battlecry"]},{"id":"NAX1_05","name":"Locust Swarm","type":"Spell","cost":7,"text":"Deal $3 damage to all enemy minions. Restore #3 Health to your hero."},{"id":"FP1_004","name":"Mad Scientist","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Deathrattle:</b> Put a <b>Secret</b> from your deck into the battlefield.","flavor":"His mother wanted him to be a mage or a warlock, but noooooooo, he had to go and be a scientist like his father.","artist":"James Ryman","collectible":true,"howToGet":"Unlocked by defeating Grobbulus in the Construct Quarter.","howToGetGold":"Can be crafted after defeating Grobbulus in the Construct Quarter.","mechanics":["Deathrattle"]},{"id":"NAX3_01H","name":"Maexxna","type":"Hero","health":45},{"id":"FP1_010","name":"Maexxna","type":"Minion","rarity":"Legendary","cost":6,"attack":2,"health":8,"text":"Destroy any minion damaged by this minion.","flavor":"Maexxna gets super mad when people introduce her as \"Maxina\" or \"Maxxy\".","artist":"Howard Lyon","collectible":true,"elite":true,"race":"Beast","howToGet":"Unlocked by completing the Arachnid Quarter.","howToGetGold":"Can be crafted after completing the Arachnid Quarter.","mechanics":["Poisonous"]},{"id":"NAX3_01","name":"Maexxna","type":"Hero","health":30},{"id":"NAX9_07e","name":"Mark of the Horsemen","type":"Enchantment","text":"+1/+1."},{"id":"NAX9_07","name":"Mark of the Horsemen","type":"Spell","cost":5,"text":"Give your minions and your weapon +1/+1."},{"id":"NAX7_04H","name":"Massive Runeblade","type":"Weapon","cost":3,"attack":10,"durability":2,"text":"Deals double damage to heroes."},{"id":"NAX7_04","name":"Massive Runeblade","type":"Weapon","cost":3,"attack":5,"durability":2,"text":"Deals double damage to heroes."},{"id":"NAX7_05","name":"Mind Control Crystal","type":"Spell","cost":1,"text":"Activate the Crystal to control the Understudies!"},{"id":"NAX5_03","name":"Mindpocalypse","type":"Spell","cost":2,"text":"Both players draw 2 cards and gain a Mana Crystal."},{"id":"NAX15_05","name":"Mr. Bigglesworth","type":"Minion","rarity":"Legendary","cost":0,"attack":1,"health":1,"text":"<i>This is Kel'Thuzad's kitty.</i>","elite":true,"race":"Beast"},{"id":"NAX11_04","name":"Mutating Injection","type":"Spell","cost":3,"text":"Give a minion +4/+4 and <b>Taunt</b>."},{"id":"NAX11_04e","name":"Mutating Injection","type":"Enchantment","text":"+4/+4 and <b>Taunt</b>."},{"id":"NAXM_001","name":"Necroknight","type":"Minion","cost":4,"attack":5,"health":6,"text":"<b>Deathrattle:</b> Destroy the minions next to this one as well.","mechanics":["Deathrattle"]},{"id":"NAX6_02","name":"Necrotic Aura","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nDeal 3 damage to the enemy hero."},{"id":"NAX6_02H","name":"Necrotic Aura","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nDeal 3 damage to the enemy hero."},{"id":"FP1_030e","name":"Necrotic Aura","type":"Enchantment","text":"Your spells cost (5) more this turn."},{"id":"NAX3_03","name":"Necrotic Poison","type":"Spell","cost":2,"text":"Destroy a minion."},{"id":"FP1_017","name":"Nerub'ar Weblord","type":"Minion","rarity":"Common","cost":2,"attack":1,"health":4,"text":"Minions with <b>Battlecry</b> cost (2) more.","flavor":"Weblords spend all day making giant trampoline parks.","artist":"Alex Horley Orlandelli","collectible":true,"howToGet":"Unlocked by defeating Grand Widow Faerlina in the Arachnid Quarter.","howToGetGold":"Can be crafted after defeating Grand Widow Faerlina in the Arachnid Quarter.","mechanics":["Aura"]},{"id":"NAX1h_03","name":"Nerubian","type":"Minion","cost":2,"attack":4,"health":4},{"id":"NAX1_03","name":"Nerubian","type":"Minion","cost":2,"attack":3,"health":1},{"id":"FP1_007t","name":"Nerubian","type":"Minion","rarity":"Rare","cost":3,"attack":4,"health":4},{"id":"FP1_007","name":"Nerubian Egg","type":"Minion","rarity":"Rare","cost":2,"attack":0,"health":2,"text":"<b>Deathrattle:</b> Summon a 4/4 Nerubian.","flavor":"Eggs are a good source of protein and Nerubians.","artist":"Justin Thavirat","collectible":true,"howToGet":"Unlocked by defeating Maexxna in the Arachnid Quarter.","howToGetGold":"Can be crafted after defeating Maexxna in the Arachnid Quarter.","mechanics":["Deathrattle"]},{"id":"NAX4_01","name":"Noth the Plaguebringer","type":"Hero","health":30,"playerClass":"Mage"},{"id":"NAX4_01H","name":"Noth the Plaguebringer","type":"Hero","health":45,"playerClass":"Mage"},{"id":"NAX10_01","name":"Patchwerk","type":"Hero","health":30},{"id":"NAX10_01H","name":"Patchwerk","type":"Hero","health":45},{"id":"NAX4_05","name":"Plague","type":"Spell","cost":6,"text":"Destroy all non-Skeleton minions."},{"id":"NAX11_02","name":"Poison Cloud","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nDeal 1 damage to all minions. If any die, summon a slime."},{"id":"NAX11_02H","name":"Poison Cloud","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nDeal 2 damage to all enemies. If any die, summon a slime."},{"id":"FP1_019","name":"Poison Seeds","type":"Spell","rarity":"Common","cost":4,"text":"Destroy all minions and summon 2/2 Treants to replace them.","flavor":"\"Poisonseed Bagel\" is the least popular bagel at McTiggin's Druidic Bagel Emporium.","artist":"Brian Despain","collectible":true,"playerClass":"Druid","howToGet":"Unlocked by completing the Druid Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Druid Class Challenge in Naxxramas."},{"id":"NAX13_02e","name":"Polarity","type":"Enchantment","text":"Attack and Health swapped."},{"id":"NAX13_02","name":"Polarity Shift","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nSwap the Attack and Health of all minions."},{"id":"FP1_023e","name":"Power of the Ziggurat","type":"Enchantment","text":"+3 Health.","playerClass":"Priest"},{"id":"NAX14_04","name":"Pure Cold","type":"Spell","cost":5,"text":"Deal $8 damage to the enemy hero, and <b>Freeze</b> it.","mechanics":["Freeze"]},{"id":"NAX2_03","name":"Rain of Fire","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nFire a missile for each card in your opponent's hand.","mechanics":["ImmuneToSpellpower"]},{"id":"NAX2_03H","name":"Rain of Fire","type":"Hero Power","cost":1,"text":"<b>Hero Power</b>\nFire a missile for each card in your opponent's hand.","mechanics":["ImmuneToSpellpower"]},{"id":"NAX4_04","name":"Raise Dead","type":"Hero Power","cost":0,"text":"<b>Passive Hero Power</b>\nWhenever an enemy dies, raise a 1/1 Skeleton."},{"id":"NAX4_04H","name":"Raise Dead","type":"Hero Power","cost":0,"text":"<b>Passive Hero Power</b>\nWhenever an enemy dies, raise a 5/5 Skeleton."},{"id":"FP1_025","name":"Reincarnate","type":"Spell","rarity":"Common","cost":2,"text":"Destroy a minion, then return it to life with full Health.","flavor":"It's like birth, except you're an adult and you were just dead a second ago.","artist":"Dan Scott","collectible":true,"playerClass":"Shaman","howToGet":"Unlocked by completing the Shaman Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Shaman Class Challenge in Naxxramas."},{"id":"NAX9_05H","name":"Runeblade","type":"Weapon","cost":3,"attack":2,"durability":3,"text":"Has +6 Attack if the other Horsemen are dead."},{"id":"NAX9_05","name":"Runeblade","type":"Weapon","cost":3,"attack":1,"durability":3,"text":"Has +3 Attack if the other Horsemen are dead."},{"id":"NAX14_01H","name":"Sapphiron","type":"Hero","health":45},{"id":"NAX14_01","name":"Sapphiron","type":"Hero","health":30},{"id":"FP1_005","name":"Shade of Naxxramas","type":"Minion","rarity":"Epic","cost":3,"attack":2,"health":2,"text":"<b>Stealth.</b> At the start of your turn, gain +1/+1.","flavor":"The Shades of Naxxramas <i>hate</i> the living. They even have a slur they use to refer them: <i>Livers</i>.","artist":"Ittoku Seta","collectible":true,"howToGet":"Unlocked by defeating Kel'Thuzad in the Frostwyrm Lair.","howToGetGold":"Can be crafted after defeating Kel'Thuzad in the Frostwyrm Lair.","mechanics":["Stealth"]},{"id":"NAX9_04","name":"Sir Zeliek","type":"Minion","cost":3,"attack":1,"health":7,"text":"Your hero is <b>Immune</b>.","elite":true},{"id":"NAX9_04H","name":"Sir Zeliek","type":"Minion","cost":3,"attack":2,"health":7,"text":"Your hero is <b>Immune</b>.","elite":true},{"id":"NAXM_002","name":"Skeletal Smith","type":"Minion","cost":3,"attack":4,"health":3,"text":"<b>Deathrattle:</b> Destroy your opponent's weapon.","mechanics":["Deathrattle"]},{"id":"NAX4_03H","name":"Skeleton","type":"Minion","cost":5,"attack":5,"health":5},{"id":"NAX4_03","name":"Skeleton","type":"Minion","cost":1,"attack":1,"health":1},{"id":"NAX1_04","name":"Skitter","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nSummon a 3/1 Nerubian."},{"id":"NAX1h_04","name":"Skitter","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nSummon a 4/4 Nerubian."},{"id":"NAX15_04a","name":"Slave of Kel'Thuzad","type":"Enchantment","text":"MINE!"},{"id":"FP1_012t","name":"Slime","type":"Minion","cost":1,"attack":1,"health":2,"text":"<b>Taunt</b>","mechanics":["Taunt"]},{"id":"FP1_012","name":"Sludge Belcher","type":"Minion","rarity":"Rare","cost":5,"attack":3,"health":5,"text":"<b>Taunt.\nDeathrattle:</b> Summon a 1/2 Slime with <b>Taunt</b>.","flavor":"DO NOT GIVE HIM A ROOT BEER.","artist":"Nate Bowden","collectible":true,"howToGet":"Unlocked by defeating Loatheb in the Plague Quarter.","howToGetGold":"Can be crafted after defeating Loatheb in the Plague Quarter.","mechanics":["Deathrattle","Taunt"]},{"id":"FP1_008","name":"Spectral Knight","type":"Minion","rarity":"Common","cost":5,"attack":4,"health":6,"text":"Can't be targeted by spells or Hero Powers.","flavor":"What do Faerie Dragons and Spectral Knights have in common?  They both love pasta!","artist":"Chris Rahn","collectible":true,"howToGet":"Unlocked by defeating Gothik the Harvester in the Military Quarter.","howToGetGold":"Can be crafted after defeating Gothik the Harvester in the Military Quarter."},{"id":"NAX8_05t","name":"Spectral Rider","type":"Minion","cost":5,"attack":0,"health":6,"text":"At the start of your turn, deal 1 damage to your hero."},{"id":"FP1_002t","name":"Spectral Spider","type":"Minion","cost":1,"attack":1,"health":1},{"id":"NAX8_03t","name":"Spectral Trainee","type":"Minion","cost":1,"attack":0,"health":2,"text":"At the start of your turn, deal 1 damage to your hero."},{"id":"NAX8_04t","name":"Spectral Warrior","type":"Minion","cost":3,"attack":0,"health":4,"text":"At the start of your turn, deal 1 damage to your hero."},{"id":"NAX6_03t","name":"Spore","type":"Minion","cost":0,"attack":0,"health":1,"text":"<b>Deathrattle:</b> Give all enemy minions +8 Attack.","mechanics":["Deathrattle"]},{"id":"NAX6_04","name":"Sporeburst","type":"Spell","cost":1,"text":"Deal $1 damage to all enemy minions. Summon a Spore."},{"id":"NAX13_05H","name":"Stalagg","type":"Minion","rarity":"Legendary","cost":5,"attack":7,"health":4,"elite":true},{"id":"FP1_014","name":"Stalagg","type":"Minion","rarity":"Legendary","cost":5,"attack":7,"health":4,"text":"<b>Deathrattle:</b> If Feugen also died this game, summon Thaddius.","flavor":"Stalagg want to write own flavor text.  \"STALAGG AWESOME!\"","artist":"Dany Orizio","collectible":true,"elite":true,"howToGet":"Unlocked by completing the Construct Quarter.","howToGetGold":"Can be crafted after completing the Construct Quarter.","mechanics":["Deathrattle"]},{"id":"FP1_027","name":"Stoneskin Gargoyle","type":"Minion","rarity":"Common","cost":3,"attack":1,"health":4,"text":"At the start of your turn, restore this minion to full Health.","flavor":"Stoneskin Gargoyles love freeze tag.","artist":"Matt Smith","collectible":true,"howToGet":"Unlocked by defeating Noth the Plaguebringer in the Plague Quarter.","howToGetGold":"Can be crafted after defeating Noth the Plaguebringer in the Plague Quarter."},{"id":"NAX13_03","name":"Supercharge","type":"Spell","cost":2,"text":"Give your minions +2 Health."},{"id":"NAX13_03e","name":"Supercharged","type":"Enchantment","text":"+2 Health."},{"id":"NAX13_01H","name":"Thaddius","type":"Hero","health":45},{"id":"NAX13_01","name":"Thaddius","type":"Hero","health":30},{"id":"FP1_014t","name":"Thaddius","type":"Minion","rarity":"Legendary","cost":10,"attack":11,"health":11,"elite":true},{"id":"NAX9_03H","name":"Thane Korth'azz","type":"Minion","cost":3,"attack":2,"health":7,"text":"Your hero is <b>Immune</b>.","elite":true},{"id":"NAX9_03","name":"Thane Korth'azz","type":"Minion","cost":3,"attack":1,"health":7,"text":"Your hero is <b>Immune</b>.","elite":true},{"id":"FP1_019t","name":"Treant","type":"Minion","cost":1,"attack":2,"health":2,"playerClass":"Druid"},{"id":"NAX7_03","name":"Unbalancing Strike","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nDeal 3 damage."},{"id":"NAX7_03H","name":"Unbalancing Strike","type":"Hero Power","cost":1,"text":"<b>Hero Power</b>\nDeal 4 damage."},{"id":"NAX7_02","name":"Understudy","type":"Minion","cost":2,"attack":0,"health":7,"text":"<b>Taunt</b>","mechanics":["Taunt"]},{"id":"FP1_028","name":"Undertaker","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":2,"text":"Whenever you summon a minion with <b>Deathrattle</b>, gain +1/+1.","flavor":"In a world where you can run to a spirit healer and resurrect yourself, Undertakers do pretty light business.","artist":"Jonboy Meyers","collectible":true,"howToGet":"Unlocked by defeating Patchwerk in the Construct Quarter.","howToGetGold":"Can be crafted after defeating Patchwerk in the Construct Quarter."},{"id":"NAX9_06","name":"Unholy Shadow","type":"Hero Power","cost":5,"text":"<b>Hero Power</b>\nDraw 2 cards."},{"id":"NAX8_05","name":"Unrelenting Rider","type":"Minion","cost":6,"attack":5,"health":6,"text":"<b>Deathrattle:</b> Summon a Spectral Rider for your opponent.","mechanics":["Deathrattle"]},{"id":"NAX8_03","name":"Unrelenting Trainee","type":"Minion","cost":1,"attack":2,"health":2,"text":"<b>Deathrattle:</b> Summon a Spectral Trainee for your opponent.","mechanics":["Deathrattle"]},{"id":"NAX8_04","name":"Unrelenting Warrior","type":"Minion","cost":3,"attack":3,"health":4,"text":"<b>Deathrattle:</b> Summon a Spectral Warrior for your opponent.","mechanics":["Deathrattle"]},{"id":"FP1_024","name":"Unstable Ghoul","type":"Minion","rarity":"Common","cost":2,"attack":1,"health":3,"text":"<b>Taunt</b>. <b>Deathrattle:</b> Deal 1 damage to all minions.","flavor":"Filling your Ghouls with Rocket Fuel is all the rage at Necromancer school.","artist":"Mike Nicholson","collectible":true,"howToGet":"Unlocked by defeating Heigan the Unclean in the Plague Quarter.","howToGetGold":"Can be crafted after defeating Heigan the Unclean in the Plague Quarter.","mechanics":["Deathrattle","Taunt"]},{"id":"FP1_020e","name":"Vengeance","type":"Enchantment","text":"+3/+2.","playerClass":"Paladin"},{"id":"FP1_022","name":"Voidcaller","type":"Minion","rarity":"Common","cost":4,"attack":3,"health":4,"text":"<b>Deathrattle:</b> Put a random Demon from your hand into the battlefield.","flavor":"\"Void!  Here, void!  Here, buddy!\"","artist":"Robb Shoberg","collectible":true,"race":"Demon","playerClass":"Warlock","howToGet":"Unlocked by completing the Warlock Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Warlock Class Challenge in Naxxramas.","mechanics":["Deathrattle"]},{"id":"FP1_016","name":"Wailing Soul","type":"Minion","rarity":"Rare","cost":4,"attack":3,"health":5,"text":"<b>Battlecry: Silence</b> your other minions.","flavor":"This soul just <i>wails</i> on you. Dang, soul, let up already.","artist":"Glenn Rane","collectible":true,"howToGet":"Unlocked by defeating Thaddius in the Construct Quarter.","howToGetGold":"Can be crafted after defeating Thaddius in the Construct Quarter.","mechanics":["Battlecry"]},{"id":"NAX3_02","name":"Web Wrap","type":"Hero Power","cost":3,"text":"<b>Hero Power</b>\nReturn a random enemy minion to your opponent's hand."},{"id":"NAX3_02H","name":"Web Wrap","type":"Hero Power","cost":0,"text":"<b>Hero Power</b>\nReturn 2 random enemy minions to your opponent's hand."},{"id":"FP1_011","name":"Webspinner","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<b>Deathrattle:</b> Add a random Beast card to your hand.","flavor":"Spider cocoons are like little piñatas!","artist":"Dan Brereton","collectible":true,"race":"Beast","playerClass":"Hunter","howToGet":"Unlocked by completing the Hunter Class Challenge in Naxxramas.","howToGetGold":"Can be crafted after completing the Hunter Class Challenge in Naxxramas.","mechanics":["Deathrattle"]},{"id":"NAX2_05","name":"Worshipper","type":"Minion","cost":3,"attack":1,"health":4,"text":"Your hero has +1 Attack on your turn.","mechanics":["Aura"]},{"id":"NAX2_05H","name":"Worshipper","type":"Minion","cost":3,"attack":2,"health":4,"text":"Your hero has +3 Attack on your turn.","mechanics":["Aura"]},{"id":"FP1_001","name":"Zombie Chow","type":"Minion","rarity":"Common","cost":1,"attack":2,"health":3,"text":"<b>Deathrattle:</b> Restore 5 Health to the enemy hero.","flavor":"Zombie.  It's what's for dinner.","artist":"E. M. Gist","collectible":true,"howToGet":"Unlocked by defeating Gluth in the Construct Quarter.","howToGetGold":"Can be crafted after defeating Gluth in the Construct Quarter.","mechanics":["Deathrattle"]}],"Debug":[{"id":"XXX_048","name":"-1 Durability","type":"Spell","rarity":"Common","cost":0,"text":"Give a player's weapon -1 Durability."},{"id":"XXX_055","name":"1000 Stats","type":"Spell","cost":0,"text":"Give a Minion +1000/+1000"},{"id":"XXX_055e","name":"1000 Stats Enchant","type":"Enchantment"},{"id":"XXX_095","name":"AI Buddy - All Charge!","type":"Minion","cost":0,"attack":1,"health":1,"text":"Spawn into play to give all minions <b>Charge</b>."},{"id":"XXX_096","name":"AI Buddy - Damage Own Hero 5","type":"Minion","cost":0,"attack":1,"health":1,"text":"Spawn into play to smack your own hero for 5."},{"id":"XXX_097","name":"AI Buddy - Destroy Minions","type":"Minion","cost":0,"attack":1,"health":1,"durability":0,"text":"Spawn into play to destroy all minions."},{"id":"XXX_098","name":"AI Buddy - No Deck/Hand","type":"Minion","cost":0,"attack":1,"health":1,"durability":0,"text":"Spawn into play to destroy the AI's Hand and Deck."},{"id":"XXX_099","name":"AI Helper Buddy","type":"Minion","cost":0,"attack":1,"health":1,"durability":0,"text":"Get the AI ready for testing.","elite":false},{"id":"XXX_053","name":"Armor","type":"Spell","cost":0,"text":"Give your Hero +100 Armor"},{"id":"XXX_039","name":"Become Hogger","type":"Spell","cost":0,"text":"Become Hogger for Video Recording."},{"id":"XXX_012","name":"Bounce","type":"Spell","rarity":"Common","cost":0,"text":"Return a minion to its owner's hand."},{"id":"XXX_006","name":"Break Weapon","type":"Spell","rarity":"Common","cost":0,"text":"Destroy a hero's weapon."},{"id":"XXX_015","name":"Crash","type":"Spell","rarity":"Common","cost":0,"text":"Crash the game."},{"id":"XXX_001","name":"Damage 1","type":"Spell","rarity":"Common","cost":0,"text":"Deal 1 damage.","mechanics":["ImmuneToSpellpower"]},{"id":"XXX_002","name":"Damage 5","type":"Spell","rarity":"Common","cost":0,"text":"Deal 5 damage.","mechanics":["ImmuneToSpellpower"]},{"id":"XXX_024","name":"Damage Reflector","type":"Minion","rarity":"Common","cost":0,"attack":3,"health":10,"text":"Whenever this minion takes damage, deal 1 damage to ALL other characters."},{"id":"XXX_020","name":"Damage all but 1","type":"Spell","rarity":"Common","cost":0,"text":"Set the Health of a character to 1.","mechanics":["ImmuneToSpellpower"]},{"id":"XXX_005","name":"Destroy","type":"Spell","rarity":"Common","cost":0,"text":"Destroy a minion or hero."},{"id":"XXX_023","name":"Destroy All Heroes","type":"Spell","rarity":"Common","cost":0,"text":"Destroy all heroes."},{"id":"XXX_018","name":"Destroy All Minions","type":"Spell","rarity":"Common","cost":0,"text":"Destroy all minions."},{"id":"XXX_047","name":"Destroy Deck","type":"Spell","rarity":"Common","cost":0,"text":"Delete an opponent's deck"},{"id":"XXX_041","name":"Destroy Hero Power","type":"Spell","rarity":"Common","cost":0,"text":"Destroy a player's Hero Power."},{"id":"XXX_057","name":"Destroy Secrets","type":"Spell","cost":0,"text":"Choose a hero. Destroy all <b>Secrets</b> controlled by that hero."},{"id":"XXX_050","name":"Destroy a Mana Crystal","type":"Spell","rarity":"Common","cost":0,"text":"Pick a player and destroy one of his Mana Crystals."},{"id":"XXX_049","name":"Destroy all Mana","type":"Spell","rarity":"Common","cost":0,"text":"Destroy all of a player's Mana Crystals."},{"id":"XXX_013","name":"Discard","type":"Spell","rarity":"Common","cost":0,"text":"Choose a hero.  That hero's controller discards his hand."},{"id":"XXX_025","name":"Do Nothing","type":"Spell","rarity":"Common","cost":0,"text":"This does nothing."},{"id":"XXX_017","name":"Draw 3 Cards","type":"Spell","rarity":"Common","cost":0,"text":"Draw 3 cards."},{"id":"XXX_009e","name":"Empty Enchant","type":"Enchantment","rarity":"Common","text":"This enchantment does nothing."},{"id":"XXX_026","name":"Enable Emotes","type":"Spell","rarity":"Common","cost":0,"text":"Enable emotes for your VS.AI game. (not in tutorials, though)"},{"id":"XXX_007","name":"Enable for Attack","type":"Spell","rarity":"Common","cost":0,"text":"Give a character Charge and make him able to attack!"},{"id":"XXX_009","name":"Enchant","type":"Spell","rarity":"Common","cost":0,"text":"Enchant a minion with an empty enchant."},{"id":"XXX_046","name":"Force AI to Use Hero Power","type":"Spell","rarity":"Common","cost":0,"text":"Force the AI to use their Hero Power every turn from now on."},{"id":"XXX_022","name":"Free Cards","type":"Spell","rarity":"Common","cost":0,"text":"Your cards cost (0) for the rest of the game."},{"id":"XXX_022e","name":"Free Cards","type":"Enchantment","text":"Your cards cost (0) for the rest of the game."},{"id":"XXX_008","name":"Freeze","type":"Spell","rarity":"Common","cost":0,"text":"<b>Freeze</b> a character.","mechanics":["Freeze"]},{"id":"XXX_052","name":"Grant Mega-Windfury","type":"Spell","rarity":"Common","cost":0,"text":"Give a minion <b>Mega-Windfury</b>."},{"id":"XXX_044","name":"Hand Swapper Minion","type":"Minion","rarity":"Common","cost":0,"attack":5,"health":5,"text":"<b>Battlecry:</b> Discard 3 cards, then draw 3 cards."},{"id":"XXX_042","name":"Hand to Deck","type":"Spell","rarity":"Common","cost":0,"text":"Shuffle a player's hand into his deck."},{"id":"XXX_040","name":"Hogger","type":"Hero","health":10,"playerClass":"Warrior"},{"id":"XXX_051","name":"Make Immune","type":"Spell","rarity":"Common","cost":0,"text":"Permanently make a character <b>Immune</b>."},{"id":"XXX_014","name":"Mill 10","type":"Spell","rarity":"Common","cost":0,"text":"Put 10 cards from a hero's deck into his graveyard."},{"id":"XXX_043","name":"Mill 30","type":"Spell","rarity":"Common","cost":0,"text":"Put 30 cards from a hero's deck into his graveyard."},{"id":"XXX_019","name":"Molasses","type":"Spell","rarity":"Common","text":"You can take as long as you want on your turn."},{"id":"XXX_029","name":"Opponent Concede","type":"Spell","cost":0,"text":"Force your opponent to concede."},{"id":"XXX_030","name":"Opponent Disconnect","type":"Spell","rarity":"Common","cost":0,"text":"Force your opponnet to disconnect."},{"id":"XXX_003","name":"Restore 1","type":"Spell","rarity":"Common","cost":0,"text":"Restore 1 Health to a character."},{"id":"XXX_004","name":"Restore 5","type":"Spell","rarity":"Common","cost":0,"text":"Restore 5 Health to a character."},{"id":"XXX_021","name":"Restore All Health","type":"Spell","rarity":"Common","cost":0,"text":"Restore all Health to a character."},{"id":"XXX_028","name":"Reveal Hand","type":"Spell","rarity":"Common"},{"id":"XXX_027","name":"Server Crash","type":"Spell","text":"Crash the Server.  DON'T BE A FOOL."},{"id":"XXX_010","name":"Silence - debug","type":"Spell","rarity":"Common","cost":0,"text":"Remove all enchantments and powers from a minion."},{"id":"XXX_056","name":"Silence Destroy","type":"Spell","cost":0,"text":"Silence and Destroy ALL Minions."},{"id":"XXX_016","name":"Snake Ball","type":"Spell","cost":0,"text":"Summon five 1/1 snakes."},{"id":"XXX_045","name":"Steal Card","type":"Spell","rarity":"Common","cost":0,"text":"Steal a random card from your opponent."},{"id":"XXX_011","name":"Summon a random Secret","type":"Spell","rarity":"Common","cost":0,"text":"Summon a secret from your deck."},{"id":"XXX_054","name":"Weapon Buff","type":"Spell","cost":0,"text":"Give your Weapon +100/+100"},{"id":"XXX_054e","name":"Weapon Buff Enchant","type":"Enchantment"}],"Goblins vs Gnomes":[{"id":"GVG_029","name":"Ancestor's Call","type":"Spell","rarity":"Epic","cost":4,"text":"Put a random minion from each player's hand into the battlefield.","flavor":"\"Hey! Ancestors!\" - Ancestor's call","artist":"Dan Scott","collectible":true,"playerClass":"Shaman"},{"id":"GVG_077","name":"Anima Golem","type":"Minion","rarity":"Epic","cost":6,"attack":9,"health":9,"text":"At the end of each turn, destroy this minion if it's your only one.","flavor":"The Dark Animus is evil and mysterious and huge and unable to write sentences that utilize proper grammar.","artist":"Josh Harris","collectible":true,"race":"Mech","playerClass":"Warlock"},{"id":"GVG_085","name":"Annoy-o-Tron","type":"Minion","rarity":"Common","cost":2,"attack":1,"health":2,"text":"<b>Taunt</b>\n<b>Divine Shield</b>","flavor":"The inventor of the Annoy-o-Tron was immediately expelled from Tinkerschool, Tinkertown, and was eventually exiled from the Eastern Kingdoms altogether.","artist":"Matt Dixon","collectible":true,"race":"Mech","mechanics":["Divine Shield","Taunt"]},{"id":"GVG_030","name":"Anodized Robo Cub","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Taunt</b>. <b>Choose One -</b>\n+1 Attack; or +1 Health.","flavor":"It's adorable! AND OH MY GOODNESS WHY IS IT EATING MY FACE","artist":"Eva Widermann","collectible":true,"elite":false,"race":"Mech","playerClass":"Druid","mechanics":["Taunt"]},{"id":"GVG_069","name":"Antique Healbot","type":"Minion","rarity":"Common","cost":5,"attack":3,"health":3,"text":"<b>Battlecry:</b> Restore 8 Health to your hero.","flavor":"They don't make 'em like they used to! (Because of explosions, mostly.)","artist":"Jesper Esjing","collectible":true,"race":"Mech","mechanics":["Battlecry"]},{"id":"GVG_091","name":"Arcane Nullifier X-21","type":"Minion","rarity":"Rare","cost":4,"attack":2,"health":5,"text":"<b>Taunt</b>\nCan't be targeted by spells or Hero Powers.","flavor":"There was some hard talk between gnome magi and engineers about inventing this mech.","artist":"Zero Yue","collectible":true,"race":"Mech","mechanics":["Taunt"]},{"id":"GVG_086e","name":"Armor Plated","type":"Enchantment","text":"Increased Attack.","playerClass":"Warrior"},{"id":"PART_001e","name":"Armor Plating","type":"Enchantment","text":"+1 Health."},{"id":"PART_001","name":"Armor Plating","type":"Spell","cost":1,"text":"Give a minion +1 Health.","artist":"Nutchapol Thitinunthakorn"},{"id":"GVG_030a","name":"Attack Mode","type":"Spell","text":"+1 Attack.","playerClass":"Druid"},{"id":"GVG_030ae","name":"Attack Mode","type":"Enchantment","text":"+1 Attack.","playerClass":"Druid"},{"id":"GVG_119","name":"Blingtron 3000","type":"Minion","rarity":"Legendary","cost":5,"attack":3,"health":4,"text":"<b>Battlecry:</b> Equip a random weapon for each player.","flavor":"PREPARE PARTY SERVOS FOR IMMEDIATE DEPLOYMENT.","artist":"Jomaro Kindred","collectible":true,"elite":true,"race":"Mech","mechanics":["Battlecry"]},{"id":"GVG_063","name":"Bolvar Fordragon","type":"Minion","rarity":"Legendary","cost":5,"attack":1,"health":7,"text":"Whenever a friendly minion dies while this is in your hand, gain +1 Attack.","flavor":"Spoiler alert: Bolvar gets melted and then sits on an ice throne and everyone forgets about him.","artist":"Tooth","collectible":true,"elite":true,"playerClass":"Paladin"},{"id":"GVG_099","name":"Bomb Lobber","type":"Minion","rarity":"Rare","cost":5,"attack":3,"health":3,"text":"<b>Battlecry:</b> Deal 4 damage to a random enemy minion.","flavor":"He lobbies Orgrimmar daily on behalf of bombs.","artist":"Luca Zontini","collectible":true,"mechanics":["Battlecry"]},{"id":"GVG_110t","name":"Boom Bot","type":"Minion","cost":1,"attack":1,"health":1,"text":"<b>Deathrattle</b>: Deal 1-4 damage to a random enemy.","race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_050","name":"Bouncing Blade","type":"Spell","rarity":"Epic","cost":3,"text":"Deal $1 damage to a random minion. Repeat until a minion dies.","flavor":"Only goblins would think this was a good idea. Even they are starting to have their doubts.","artist":"Andrew Hou","collectible":true,"playerClass":"Warrior"},{"id":"GVG_100e","name":"Brow Furrow","type":"Enchantment","text":"Increased stats.","playerClass":"Warlock"},{"id":"GVG_068","name":"Burly Rockjaw Trogg","type":"Minion","rarity":"Common","cost":4,"attack":3,"health":5,"text":"Whenever your opponent casts a spell, gain +2 Attack.","flavor":"He's burly because he does CrossFit.","artist":"Chris Rahn","collectible":true},{"id":"GVG_056t","name":"Burrowing Mine","type":"Spell","cost":0,"text":"When you draw this, it explodes. You take 10 damage and draw a card.","artist":"Chris Seaman","playerClass":"Warrior","mechanics":["ImmuneToSpellpower"]},{"id":"GVG_017","name":"Call Pet","type":"Spell","rarity":"Rare","cost":2,"text":"Draw a card.\nIf it's a Beast, it costs (4) less.","flavor":"Real hunters tame hungry crabs.","artist":"E.M. Gist","collectible":true,"playerClass":"Hunter"},{"id":"GVG_092t","name":"Chicken","type":"Minion","cost":1,"attack":1,"health":1,"race":"Beast"},{"id":"PART_004e","name":"Cloaked","type":"Enchantment","text":"Stealthed until your next turn."},{"id":"GVG_121","name":"Clockwork Giant","type":"Minion","rarity":"Epic","cost":12,"attack":8,"health":8,"text":"Costs (1) less for each card in your opponent's hand.","flavor":"He and Mountain Giant don't get along.","artist":"Dan Scott","collectible":true,"race":"Mech"},{"id":"GVG_082","name":"Clockwork Gnome","type":"Minion","rarity":"Common","cost":1,"attack":2,"health":1,"text":"<b>Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.","flavor":"Clockwork gnomes are always asking what time it is.","artist":"Matt Dixon","collectible":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_062","name":"Cobalt Guardian","type":"Minion","rarity":"Rare","cost":5,"attack":6,"health":3,"text":"Whenever you summon a Mech, gain <b>Divine Shield</b>.","flavor":"Guardians used to be built out of Adamantium, but production got moved to Gadgetzan and Cobalt was cheap.","artist":"Jim Nelson","collectible":true,"race":"Mech","playerClass":"Paladin"},{"id":"GVG_073","name":"Cobra Shot","type":"Spell","rarity":"Common","cost":5,"text":"Deal $3 damage to a minion and the enemy hero.","flavor":"\"Cobra Shot\" hurts way, way, way more than \"Cobra Cuddle.\"","artist":"Howard Lyon","collectible":true,"playerClass":"Hunter"},{"id":"GVG_059","name":"Coghammer","type":"Weapon","rarity":"Epic","cost":3,"attack":2,"durability":3,"text":"<b>Battlecry:</b> Give a random friendly minion <b>Divine Shield</b> and <b>Taunt</b>.","flavor":"So you ripped this out of a machine, carved some runes on it, stuck it on a handle, and now it's a weapon of great divine power? Seems legit.","artist":"Danny Orizio","collectible":true,"playerClass":"Paladin","mechanics":["Battlecry"]},{"id":"GVG_013","name":"Cogmaster","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":2,"text":"Has +2 Attack while you have a Mech.","flavor":"After a while, you don't see the cogs and sprockets. All you see is a robot, a spider tank, a deathray...","artist":"Trent Kaniuga","collectible":true,"mechanics":["Aura"]},{"id":"GVG_024","name":"Cogmaster's Wrench","type":"Weapon","rarity":"Epic","cost":3,"attack":1,"durability":3,"text":"Has +2 Attack while you have a Mech.","flavor":"For tightening cogs and smashin' troggs!","artist":"Richard Wright","collectible":true,"playerClass":"Rogue","mechanics":["Aura"]},{"id":"GVG_038","name":"Crackle","type":"Spell","rarity":"Common","cost":2,"text":"Deal $3-$6 damage. <b>Overload: (1)</b>","flavor":"Snap! This card! Pop!","artist":"Warren Mahy","collectible":true,"playerClass":"Shaman"},{"id":"GVG_052","name":"Crush","type":"Spell","rarity":"Epic","cost":7,"text":"Destroy a minion. If you have a damaged minion, this costs (4) less.","flavor":"Using this card on your enemies is one of the best things in life, according to some barbarians.","artist":"Michael Sutfin","collectible":true,"playerClass":"Warrior"},{"id":"GVG_041","name":"Dark Wispers","type":"Spell","rarity":"Epic","cost":6,"text":"<b>Choose One -</b> Summon 5 Wisps; or Give a minion +5/+5 and <b>Taunt</b>.","flavor":"Don't worry; we fired the person who named this card.","artist":"Trent Kaniuga","collectible":true,"playerClass":"Druid"},{"id":"GVG_041b","name":"Dark Wispers","type":"Spell","text":"Summon 5 Wisps.","playerClass":"Druid"},{"id":"GVG_041a","name":"Dark Wispers","type":"Spell","text":"+5/+5 and <b>Taunt</b>.","playerClass":"Druid"},{"id":"GVG_041c","name":"Dark Wispers","type":"Enchantment","text":"+5/+5 and <b>Taunt</b>.","playerClass":"Druid"},{"id":"GVG_015","name":"Darkbomb","type":"Spell","rarity":"Common","cost":2,"text":"Deal $3 damage.","flavor":"If you're looking to make an \"Emo\" deck, this card is perfect!","artist":"Jeff Haynie","collectible":true,"playerClass":"Warlock"},{"id":"GVG_019","name":"Demonheart","type":"Spell","rarity":"Epic","cost":5,"text":"Deal $5 damage to a minion.  If it's a friendly Demon, give it +5/+5 instead.","flavor":"Virtually every member of the pro demon lobby is a warlock. Weird.","artist":"Kerem Beyit","collectible":true,"playerClass":"Warlock"},{"id":"GVG_019e","name":"Demonheart","type":"Enchantment","text":"+5/+5.","playerClass":"Warlock"},{"id":"GVG_110","name":"Dr. Boom","type":"Minion","rarity":"Legendary","cost":7,"attack":7,"health":7,"text":"<b>Battlecry</b>: Summon two 1/1 Boom Bots. <i>WARNING: Bots may explode.</i>","flavor":"MARVEL AT HIS MIGHT!","artist":"Alex Garner","collectible":true,"elite":true,"mechanics":["Battlecry"]},{"id":"GVG_080t","name":"Druid of the Fang","type":"Minion","cost":5,"attack":7,"health":7,"artist":"Massive Black","race":"Beast","playerClass":"Druid"},{"id":"GVG_080","name":"Druid of the Fang","type":"Minion","rarity":"Common","cost":5,"attack":4,"health":4,"text":"<b>Battlecry:</b> If you have a Beast, transform this minion into a 7/7.","flavor":"The Druids of the Fang live in the Wailing Caverns. They wear cool snake shirts and tell snake jokes and say \"bro\" a lot.","artist":"Brandon Kitkouski","collectible":true,"playerClass":"Druid","mechanics":["Battlecry"]},{"id":"GVG_066","name":"Dunemaul Shaman","type":"Minion","rarity":"Rare","cost":4,"attack":5,"health":4,"text":"<b>Windfury, Overload: (1)</b>\n50% chance to attack the wrong enemy.","flavor":"He just closes his eyes and goes for it. Raarararrrarar!","artist":"José Ladrönn","collectible":true,"playerClass":"Shaman","mechanics":["Windfury"]},{"id":"GVG_005","name":"Echo of Medivh","type":"Spell","rarity":"Epic","cost":4,"text":"Put a copy of each friendly minion into your hand.","flavor":"Medivh's echo haunts Karazhan, eternally cheating at chess and <i>Hearthstone</i>.","artist":"Alex Garner","collectible":true,"playerClass":"Mage"},{"id":"PART_005","name":"Emergency Coolant","type":"Spell","cost":1,"text":"<b>Freeze</b> a minion.","artist":"Peerasak Senalai","mechanics":["Freeze"]},{"id":"GVG_107","name":"Enhance-o Mechano","type":"Minion","rarity":"Epic","cost":4,"attack":3,"health":2,"text":"<b>Battlecry:</b> Give your other minions <b>Windfury</b>, <b>Taunt</b>, or <b>Divine Shield</b>.\n<i>(at random)</i>","flavor":"His enhancements are gluten free!","artist":"Zoltan Boros","collectible":true,"race":"Mech","mechanics":["Battlecry"]},{"id":"GVG_076","name":"Explosive Sheep","type":"Minion","rarity":"Common","cost":2,"attack":1,"health":1,"text":"<b>Deathrattle:</b> Deal 2 damage to all minions.","flavor":"How is this supposed to work?  Your enemies think, \"<i>Hey!</i> Cute sheep!\" and run over to cuddle it?","artist":"Ralph Horsley","collectible":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_023a","name":"Extra Sharp","type":"Enchantment","text":"+1 Attack."},{"id":"GVG_026","name":"Feign Death","type":"Spell","rarity":"Epic","cost":2,"text":"Trigger all <b>Deathrattles</b> on your minions.","flavor":"The hardest part about doing a \"Feign Death\" convincingly is learning how to make the right smell. It takes a lot of commitment.","artist":"Luca Zontini","collectible":true,"playerClass":"Hunter"},{"id":"GVG_020","name":"Fel Cannon","type":"Minion","rarity":"Rare","cost":4,"attack":3,"health":5,"text":"At the end of your turn, deal 2 damage to a non-Mech minion.","flavor":"The box says, \"New and improved, with 200% more fel!\"","artist":"Matt Gaser","collectible":true,"race":"Mech","playerClass":"Warlock"},{"id":"GVG_016","name":"Fel Reaver","type":"Minion","rarity":"Epic","cost":5,"attack":8,"health":8,"text":"Whenever your opponent plays a card, discard the top 3 cards of your deck.","flavor":"So reaver. Much fel. Wow.","artist":"Zoltan & Gabor","collectible":true,"race":"Mech"},{"id":"PART_004","name":"Finicky Cloakfield","type":"Spell","cost":1,"text":"Give a friendly minion <b>Stealth</b> until your next turn.","artist":"Nutchapol Thitinunthakorn"},{"id":"GVG_007","name":"Flame Leviathan","type":"Minion","rarity":"Legendary","cost":7,"attack":7,"health":7,"text":"When you draw this, deal 2 damage to all characters.","flavor":"Mimiron likes to take the Flame Leviathan out on some sweet joyrides.","artist":"Aleksi Briclot","collectible":true,"elite":true,"race":"Mech","playerClass":"Mage"},{"id":"GVG_001","name":"Flamecannon","type":"Spell","rarity":"Common","cost":2,"text":"Deal $4 damage to a random enemy minion.","flavor":"Calling something a flamecannon really doesn't do much to distinguish it from other goblin devices.","artist":"Mauricio Herrera","collectible":true,"playerClass":"Mage"},{"id":"GVG_100","name":"Floating Watcher","type":"Minion","rarity":"Common","cost":5,"attack":4,"health":4,"text":"Whenever your hero takes damage on your turn, gain +2/+2.","flavor":"\"Evil Eye Watcher of Doom\" was the original name, but marketing felt it was a bit too aggressive.","artist":"Todd Lockwood","collectible":true,"race":"Demon","playerClass":"Warlock"},{"id":"GVG_084","name":"Flying Machine","type":"Minion","rarity":"Common","cost":3,"attack":1,"health":4,"text":"<b>Windfury</b>","flavor":"To operate, this contraption needs a hula doll on the dashboard. Otherwise it's just a “falling machine.”","artist":"Matt Dixon","collectible":true,"race":"Mech","mechanics":["Windfury"]},{"id":"GVG_113","name":"Foe Reaper 4000","type":"Minion","rarity":"Legendary","cost":8,"attack":6,"health":9,"text":"Also damages the minions next to whomever he attacks.","flavor":"Foe reaping is really not so different from harvest reaping, at the end of the day.","artist":"James Ryman","collectible":true,"elite":true,"race":"Mech"},{"id":"GVG_079","name":"Force-Tank MAX","type":"Minion","rarity":"Common","cost":8,"attack":7,"health":7,"text":"<b>Divine Shield</b>","flavor":"There is a factory in Tanaris for crafting force-tanks, but it only ever made two, because of cost overruns.","artist":"Nutchapol Thitinunthakorn","collectible":true,"race":"Mech","mechanics":["Divine Shield"]},{"id":"GVG_049","name":"Gahz'rilla","type":"Minion","rarity":"Legendary","cost":7,"attack":6,"health":9,"text":"Whenever this minion takes damage, double its Attack.","flavor":"The Sen'jin High football team is The Gahz'rillas.","artist":"Raymond Swanland","collectible":true,"elite":true,"race":"Beast","playerClass":"Hunter"},{"id":"GVG_028t","name":"Gallywix's Coin","type":"Spell","cost":0,"text":"Gain 1 Mana Crystal this turn only.\n<i>(Won't trigger Gallywix.)</i>"},{"id":"GVG_117","name":"Gazlowe","type":"Minion","rarity":"Legendary","cost":6,"attack":3,"health":6,"text":"Whenever you cast a 1-mana spell, add a random Mech to your hand.","flavor":"Gazlowe was voted \"Most Likely to Explode\" in high school.","artist":"Luke Mancini","collectible":true,"elite":true},{"id":"GVG_032b","name":"Gift of Cards","type":"Spell","text":"Each player draws a card.","playerClass":"Druid"},{"id":"GVG_032a","name":"Gift of Mana","type":"Spell","text":"Give each player a Mana Crystal.","playerClass":"Druid"},{"id":"GVG_081","name":"Gilblin Stalker","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":3,"text":"<b>Stealth</b>","flavor":"\"Shhh, I think I hear something.\"\n\n\"Ah, it's probably nothing.\" - Every Henchman","artist":"Seamus Gallagher","collectible":true,"mechanics":["Stealth"]},{"id":"GVG_043e","name":"Glaivezooka","type":"Enchantment","text":"+1 Attack.","playerClass":"Hunter"},{"id":"GVG_043","name":"Glaivezooka","type":"Weapon","rarity":"Common","cost":2,"attack":2,"durability":2,"text":"<b>Battlecry:</b> Give a random friendly minion +1 Attack.","flavor":"For the times when a regular bazooka just isn't enough.","artist":"Gino Whitehall","collectible":true,"playerClass":"Hunter","mechanics":["Battlecry"]},{"id":"GVG_098","name":"Gnomeregan Infantry","type":"Minion","rarity":"Common","cost":3,"attack":1,"health":4,"text":"<b>Charge</b>\n<b>Taunt</b>","flavor":"The gnomes are valiant and ready to return to their irradiated, poorly ventilated homeland!","artist":"Zoltan & Gabor","collectible":true,"mechanics":["Charge","Taunt"]},{"id":"GVG_092","name":"Gnomish Experimenter","type":"Minion","rarity":"Rare","cost":3,"attack":3,"health":2,"text":"<b>Battlecry:</b> Draw a card. If it's a minion, transform it into a Chicken.","flavor":"He's legitimately surprised every time he turns himself into a chicken.","artist":"Jesper Esjing","collectible":true,"mechanics":["Battlecry"]},{"id":"GVG_023","name":"Goblin Auto-Barber","type":"Minion","rarity":"Common","cost":2,"attack":3,"health":2,"text":"<b>Battlecry</b>: Give your weapon +1 Attack.","flavor":"This guy is excellent at adjusting your haircut and/or height.","artist":"Zolton Boros","collectible":true,"race":"Mech","playerClass":"Rogue","mechanics":["Battlecry"]},{"id":"GVG_004","name":"Goblin Blastmage","type":"Minion","rarity":"Rare","cost":4,"attack":5,"health":4,"text":"<b>Battlecry:</b> If you have a Mech, deal 4 damage randomly split among all enemies.","flavor":"If you can't find a bomb to throw, just pick up any goblin invention and throw that.","artist":"Glenn Rane","collectible":true,"playerClass":"Mage","mechanics":["Battlecry"]},{"id":"GVG_095","name":"Goblin Sapper","type":"Minion","rarity":"Rare","cost":3,"attack":2,"health":4,"text":"Has +4 Attack while your opponent has 6 or more cards in hand.","flavor":"He’s not such a binge exploder anymore. These days, he only explodes socially.","artist":"Jesper Esjing","collectible":true,"mechanics":["Aura"]},{"id":"GVG_021e","name":"Grasp of Mal'Ganis","type":"Enchantment","text":"Mal'Ganis is granting +2/+2.","playerClass":"Warlock"},{"id":"GVG_032","name":"Grove Tender","type":"Minion","rarity":"Rare","cost":3,"attack":2,"health":4,"text":"<b>Choose One -</b> Give each player a Mana Crystal; or Each player draws a card.","flavor":"Likes: Hiking and the great outdoors. Dislikes: Goblin shredders and sandals. (Can’t find any that fit!).","artist":"Chris Rahn","collectible":true,"playerClass":"Druid"},{"id":"GVG_104a","name":"HERE, TAKE BUFF.","type":"Enchantment","text":"+2/+2."},{"id":"GVG_120","name":"Hemet Nesingwary","type":"Minion","rarity":"Legendary","cost":5,"attack":6,"health":3,"text":"<b>Battlecry:</b> Destroy a Beast.","flavor":"It's hard to make a living as a hunter in a world where beasts instantly reappear minutes after you kill them.","artist":"Ralph Horsley","collectible":true,"elite":true,"mechanics":["Battlecry"]},{"id":"GVG_104","name":"Hobgoblin","type":"Minion","rarity":"Epic","cost":3,"attack":2,"health":3,"text":"Whenever you play a 1-Attack minion, give it +2/+2.","flavor":"Hobgoblins are meeting next week to discuss union benefits.  First on the list: dental plan.","artist":"Laurel D. Austin","collectible":true},{"id":"GVG_089","name":"Illuminator","type":"Minion","rarity":"Rare","cost":3,"attack":2,"health":4,"text":"If you control a <b>Secret</b> at the end of your turn, restore 4 health to your hero.","flavor":"\"LUMOS!\" is not what they yell. What do you think this is, Hogwarts?","artist":"Jim Nelson","collectible":true},{"id":"GVG_045t","name":"Imp","type":"Minion","cost":1,"attack":1,"health":1,"race":"Demon","playerClass":"Warlock"},{"id":"GVG_045","name":"Imp-losion","type":"Spell","rarity":"Rare","cost":4,"text":"Deal $2-$4 damage to a minion. Summon a 1/1 Imp for each damage dealt.","flavor":"The shrapnel is waaaaay worse than the explosion.","artist":"Jaemin Kim","collectible":true,"playerClass":"Warlock"},{"id":"GVG_056","name":"Iron Juggernaut","type":"Minion","rarity":"Legendary","cost":6,"attack":6,"health":5,"text":"<b>Battlecry:</b> Shuffle a Mine into your opponent's deck. When drawn, it explodes for 10 damage.","flavor":"The Iron Juggernaut guards Orgrimmar and has just earned the \"Employee of the Month\" award!","artist":"Raymond Swanland","collectible":true,"elite":true,"race":"Mech","playerClass":"Warrior","mechanics":["Battlecry"]},{"id":"GVG_027","name":"Iron Sensei","type":"Minion","rarity":"Rare","cost":3,"attack":2,"health":2,"text":"At the end of your turn, give another friendly Mech +2/+2.","flavor":"Mechs like learning from him because he really speaks their language.\n\n0110100001101001","artist":"Brian Despain","collectible":true,"race":"Mech","playerClass":"Rogue"},{"id":"GVG_027e","name":"Ironed Out","type":"Enchantment","text":"Increased stats.","playerClass":"Rogue"},{"id":"GVG_094","name":"Jeeves","type":"Minion","rarity":"Rare","cost":4,"attack":1,"health":4,"text":"At the end of each player's turn, that player draws until they have 3 cards.","flavor":"This robot is a lean, mean, butlerin' machine.","artist":"Matt Dixon","collectible":true,"race":"Mech"},{"id":"GVG_106","name":"Junkbot","type":"Minion","rarity":"Epic","cost":5,"attack":1,"health":5,"text":"Whenever a friendly Mech dies, gain +2/+2.","flavor":"One bot's junk is another bot's AWESOME UPGRADE!","artist":"Zoltan Boros","collectible":true,"race":"Mech"},{"id":"GVG_106e","name":"Junked Up","type":"Enchantment","text":"Increased stats."},{"id":"GVG_074","name":"Kezan Mystic","type":"Minion","rarity":"Rare","cost":4,"attack":4,"health":3,"text":"<b>Battlecry:</b> Take control of a random enemy <b>Secret</b>.","flavor":"They pretend to be wise and enlightened, but they mostly just hate to be left out of a secret.","artist":"Jakub Kasper","collectible":true,"mechanics":["Battlecry"]},{"id":"GVG_046","name":"King of Beasts","type":"Minion","rarity":"Rare","cost":5,"attack":2,"health":6,"text":"<b>Taunt</b>. <b>Battlecry:</b> Gain +1 Attack for each other Beast you have.","flavor":"He never sleeps.  Not even in the mighty jungle.","artist":"Seamus Gallagher","collectible":true,"race":"Beast","playerClass":"Hunter","mechanics":["Battlecry","Taunt"]},{"id":"GVG_012","name":"Light of the Naaru","type":"Spell","rarity":"Rare","cost":1,"text":"Restore #3 Health. If the target is still damaged, summon a Lightwarden.","flavor":"\"Light it up!\" - Command given to both Lightwardens and Goblins holding Flamecannons.","artist":"Jesper Ejsing","collectible":true,"playerClass":"Priest"},{"id":"GVG_008","name":"Lightbomb","type":"Spell","rarity":"Epic","cost":6,"text":"Deal damage to each minion equal to its Attack.","flavor":"This is what happens when you allow goblins to be priests.","artist":"Luca Zontini","collectible":true,"playerClass":"Priest","mechanics":["AffectedBySpellPower"]},{"id":"GVG_097","name":"Lil' Exorcist","type":"Minion","rarity":"Rare","cost":3,"attack":2,"health":3,"text":"<b>Taunt</b>\n<b>Battlecry:</b> Gain +1/+1 for each enemy <b>Deathrattle</b> minion.","flavor":"Warlocks have the town exorcist on speed dial in case they unleash the wrong demon.","artist":"Jim Nelson","collectible":true,"mechanics":["Battlecry","Taunt"]},{"id":"GVG_071","name":"Lost Tallstrider","type":"Minion","rarity":"Common","cost":4,"attack":5,"health":4,"flavor":"The message, \"If found, please return to Mulgore,\" is tattooed on his rear.","artist":"Benjamin Zhang","collectible":true,"race":"Beast"},{"id":"GVG_090","name":"Madder Bomber","type":"Minion","rarity":"Rare","cost":5,"attack":5,"health":4,"text":"<b>Battlecry:</b> Deal 6 damage randomly split between all other characters.","flavor":"Dang, Bomber, calm down.","artist":"Alex Horley Orlandelli","collectible":true,"mechanics":["Battlecry"]},{"id":"GVG_021","name":"Mal'Ganis","type":"Minion","rarity":"Legendary","cost":9,"attack":9,"health":7,"text":"Your other Demons have +2/+2.\nYour hero is <b>Immune</b>.","flavor":"Mal'Ganis doesn't like being betrayed, so if you discard him, watch out.","artist":"Wayne Reynolds","collectible":true,"elite":true,"race":"Demon","playerClass":"Warlock","mechanics":["Aura"]},{"id":"GVG_035","name":"Malorne","type":"Minion","rarity":"Legendary","cost":7,"attack":9,"health":7,"text":"<b>Deathrattle:</b> Shuffle this minion into your deck.","flavor":"When Malorne isn't mauling hordes of demons, he enjoys attending parties, though he prefers to go stag.","artist":"Oliver Chipping","collectible":true,"elite":true,"race":"Beast","playerClass":"Druid","mechanics":["Deathrattle"]},{"id":"GVG_034","name":"Mech-Bear-Cat","type":"Minion","rarity":"Rare","cost":6,"attack":7,"health":6,"text":"Whenever this minion takes damage, add a <b>Spare Part</b> card to your hand.","flavor":"Crushes buildings with his BEAR hands.","artist":"Trent Kaniuga","collectible":true,"race":"Mech","playerClass":"Druid"},{"id":"GVG_078","name":"Mechanical Yeti","type":"Minion","rarity":"Common","cost":4,"attack":4,"health":5,"text":"<b>Deathrattle:</b> Give each player a <b>Spare Part.</b>","flavor":"The yetis of Chillwind Point are a source of both inspiration and savage beatings.","artist":"Chris Seaman","collectible":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_006","name":"Mechwarper","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":3,"text":"Your Mechs cost (1) less.","flavor":"Mechs that summon mechs? What's next? Donuts that summon donuts? Mmmmm.","artist":"Phil Saunders","collectible":true,"race":"Mech","mechanics":["Aura"]},{"id":"GVG_116","name":"Mekgineer Thermaplugg","type":"Minion","rarity":"Legendary","cost":9,"attack":9,"health":7,"text":"Whenever an enemy minion dies, summon a Leper Gnome.","flavor":"He was obsessed with explosives until he discovered knitting. Now he yells, “SWEATERS! MORE SWEATERS!”","artist":"Trent Kaniuga","collectible":true,"elite":true,"race":"Mech"},{"id":"GVG_067a","name":"Metabolized Magic","type":"Enchantment","text":"Increased Attack.","mechanics":["Aura"]},{"id":"GVG_068a","name":"Metabolized Magic","type":"Enchantment","text":"Increased Attack.","mechanics":["Aura"]},{"id":"GVG_048e","name":"Metal Teeth","type":"Enchantment","text":"+2 Attack.","playerClass":"Hunter"},{"id":"GVG_048","name":"Metaltooth Leaper","type":"Minion","rarity":"Rare","cost":3,"attack":3,"health":3,"text":"<b>Battlecry</b>: Give your other Mechs +2 Attack.","flavor":"Don't leave them out in the rain. In Un'Goro Crater there is a whole colony of rust-tooth leapers.","artist":"Hideaki Takamura","collectible":true,"race":"Mech","playerClass":"Hunter","mechanics":["Battlecry"]},{"id":"GVG_103","name":"Micro Machine","type":"Minion","rarity":"Common","cost":2,"attack":1,"health":2,"text":"At the start of each turn, gain +1 Attack.","flavor":"This card is the real thing.","artist":"Skan Srisuwan","collectible":true,"race":"Mech"},{"id":"GVG_102e","name":"Might of Tinkertown","type":"Enchantment","text":"+1/+1."},{"id":"GVG_049e","name":"Might of Zul'Farrak","type":"Enchantment","text":"Multiplying Attack.","playerClass":"Hunter"},{"id":"GVG_111","name":"Mimiron's Head","type":"Minion","rarity":"Legendary","cost":5,"attack":4,"health":5,"text":"At the start of your turn, if you have at least 3 Mechs, destroy them all and form V-07-TR-0N.","flavor":"Do not push the big red button!","artist":"Trent Kaniuga","collectible":true,"elite":true,"race":"Mech"},{"id":"GVG_109","name":"Mini-Mage","type":"Minion","rarity":"Epic","cost":4,"attack":4,"health":1,"text":"<b>Stealth</b>\n<b>Spell Damage +1</b>","flavor":"He is sometimes found hiding in the treasure chest in the Gurubashi Arena.","artist":"Ben Olson","collectible":true,"mechanics":["Spellpower","Stealth"]},{"id":"GVG_018","name":"Mistress of Pain","type":"Minion","rarity":"Rare","cost":2,"attack":1,"health":4,"text":"Whenever this minion deals damage, restore that much Health to your hero.","flavor":"Her sister is the Mistress of Pane who sells windows and shower doors.","artist":"Carl Critchlow","collectible":true,"race":"Demon","playerClass":"Warlock"},{"id":"GVG_112","name":"Mogor the Ogre","type":"Minion","rarity":"Legendary","cost":6,"attack":7,"health":6,"text":"All minions have a 50% chance to attack the wrong enemy.","flavor":"Mogor helped reopen the Dark Portal once. You know you're in trouble when you have to rely on an ogre.","artist":"Michal Ivan","collectible":true,"elite":true},{"id":"GVG_061","name":"Muster for Battle","type":"Spell","rarity":"Rare","cost":3,"text":"Summon three 1/1 Silver Hand Recruits. Equip a 1/4 Weapon.","flavor":"\"I'm bringing the guacamole!\" – One of the most successful (yet rare) Silver Hand rallying cries","artist":"Mike Hayes","collectible":true,"playerClass":"Paladin"},{"id":"GVG_042","name":"Neptulon","type":"Minion","rarity":"Legendary","cost":7,"attack":7,"health":7,"text":"<b>Battlecry:</b> Add 4 random Murlocs to your hand. <b>Overload: (3)</b>","flavor":"Neptulon is \"The Tidehunter\". He’s one of the four elemental lords. And he and Ragnaros get together and make really amazing saunas.","artist":"Ruan Jia","collectible":true,"elite":true,"playerClass":"Shaman","mechanics":["Battlecry"]},{"id":"GVG_065","name":"Ogre Brute","type":"Minion","rarity":"Common","cost":3,"attack":4,"health":4,"text":"50% chance to attack the wrong enemy.","flavor":"Ogres have really terrible short-term chocolate.","artist":"Vinod Rams","collectible":true},{"id":"GVG_088","name":"Ogre Ninja","type":"Minion","rarity":"Rare","cost":5,"attack":6,"health":6,"text":"<b>Stealth</b>\n50% chance to attack the wrong enemy.","flavor":"He didn't have the grades to get into ninja school, but his dad pulled some strings.","artist":"Samwise","collectible":true,"playerClass":"Rogue","mechanics":["Stealth"]},{"id":"GVG_054","name":"Ogre Warmaul","type":"Weapon","rarity":"Common","cost":3,"attack":4,"durability":2,"text":"50% chance to attack the wrong enemy.","flavor":"Simple, misguided, and incredibly dangerous. You know, like most things ogre.","artist":"Richard Wright","collectible":true,"playerClass":"Warrior"},{"id":"GVG_025","name":"One-eyed Cheat","type":"Minion","rarity":"Rare","cost":2,"attack":4,"health":1,"text":"Whenever you summon a Pirate, gain <b>Stealth</b>.","flavor":"When pirates say there is no \"Eye\" in \"team,\" they are very literal about it.","artist":"Danny Beck","collectible":true,"race":"Pirate","playerClass":"Rogue"},{"id":"GVG_123e","name":"Overclocked","type":"Enchantment","text":"Spell Damage +2.","playerClass":"Mage","mechanics":["Spellpower"]},{"id":"GVG_096","name":"Piloted Shredder","type":"Minion","rarity":"Common","cost":4,"attack":4,"health":3,"text":"<b>Deathrattle:</b> Summon a random 2-Cost minion.","flavor":"Once upon a time, only goblins piloted shredders. These days, everyone from Doomsayer to Lorewalker Cho seems to ride one.","artist":"Dan Scott","collectible":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_105","name":"Piloted Sky Golem","type":"Minion","rarity":"Epic","cost":6,"attack":6,"health":4,"text":"<b>Deathrattle:</b> Summon a random 4-Cost minion.","flavor":"The pinnacle of goblin engineering. Includes an espresso machine and foot massager.","artist":"Michael Phillippi","collectible":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_076a","name":"Pistons","type":"Enchantment","text":"Increased Attack."},{"id":"GVG_036e","name":"Powered","type":"Enchantment","text":"+2/+2.","playerClass":"Shaman"},{"id":"GVG_036","name":"Powermace","type":"Weapon","rarity":"Rare","cost":3,"attack":3,"durability":2,"text":"<b>Deathrattle</b>: Give a random friendly Mech +2/+2.","flavor":"People assume that shamans control the elements, but really, they have to ask them stuff and the elements are like, \"Yeah ok, sure.\"","artist":"Zoltan and Gabor","collectible":true,"playerClass":"Shaman","mechanics":["Deathrattle"]},{"id":"GVG_064","name":"Puddlestomper","type":"Minion","rarity":"Common","cost":2,"attack":3,"health":2,"flavor":"He pays homage to Morgl, the great murloc oracle! (Who doesn't??)","artist":"Jaemin Kim","collectible":true,"race":"Murloc"},{"id":"GVG_101e","name":"Pure","type":"Enchantment","text":"Increased Stats.","playerClass":"Paladin"},{"id":"GVG_060","name":"Quartermaster","type":"Minion","rarity":"Epic","cost":5,"attack":2,"health":5,"text":"<b>Battlecry:</b> Give your Silver Hand Recruits +2/+2.","flavor":"His specialty? Dividing things into four pieces.","artist":"Phroilan Gardner","collectible":true,"playerClass":"Paladin","mechanics":["Battlecry"]},{"id":"GVG_108","name":"Recombobulator","type":"Minion","rarity":"Epic","cost":2,"attack":3,"health":2,"text":"<b>Battlecry:</b> Transform a friendly minion into a random minion with the same Cost.","flavor":"For when you didn’t combobulate quite right the first time around.","artist":"Ben Olson","collectible":true,"mechanics":["Battlecry"]},{"id":"GVG_031","name":"Recycle","type":"Spell","rarity":"Rare","cost":6,"text":"Shuffle an enemy minion into your opponent's deck.","flavor":"Druidic recycling involves putting plastics in one bin and enemy minions in another bin.","artist":"Brandon Kitkouski","collectible":true,"playerClass":"Druid"},{"id":"GVG_069a","name":"Repairs!","type":"Enchantment","text":"+4 Health.","playerClass":"Priest"},{"id":"GVG_063a","name":"Retribution","type":"Enchantment","text":"Increased Attack"},{"id":"PART_006","name":"Reversing Switch","type":"Spell","cost":1,"text":"Swap a minion's Attack and Health.","artist":"Nutthapon Petthai"},{"id":"PART_003","name":"Rusty Horn","type":"Spell","cost":1,"text":"Give a minion <b>Taunt</b>.","artist":"Peerasak Senalai"},{"id":"GVG_047","name":"Sabotage","type":"Spell","rarity":"Epic","cost":4,"text":"Destroy a random enemy minion. <b>Combo</b>: And your opponent's weapon.","flavor":"Rogues can't stand it. They know you planned it! They are going to set you straight!","artist":"Dave Allsop","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"GVG_070","name":"Salty Dog","type":"Minion","rarity":"Common","cost":5,"attack":7,"health":4,"flavor":"He's recently recovered from being a \"scurvy dog.\"","artist":"Alex Horley Orlandelli","collectible":true,"race":"Pirate"},{"id":"GVG_101","name":"Scarlet Purifier","type":"Minion","rarity":"Rare","cost":3,"attack":4,"health":3,"text":"<b>Battlecry</b>: Deal 2 damage to all minions with <b>Deathrattle</b>.","flavor":"The Scarlet Crusade is doing market research to find out if the \"Mauve Crusade\" would be better received.","artist":"Anton Zemskov","collectible":true,"playerClass":"Paladin","mechanics":["Battlecry"]},{"id":"GVG_055","name":"Screwjank Clunker","type":"Minion","rarity":"Rare","cost":4,"attack":2,"health":5,"text":"<b>Battlecry</b>: Give a friendly Mech +2/+2.","flavor":"If it breaks, just kick it a couple of times while yelling \"Durn thing!\"","artist":"Jesper Esjing","collectible":true,"race":"Mech","playerClass":"Warrior","mechanics":["Battlecry"]},{"id":"GVG_055e","name":"Screwy Jank","type":"Enchantment","text":"+2/+2.","playerClass":"Warrior"},{"id":"GVG_057","name":"Seal of Light","type":"Spell","rarity":"Common","cost":2,"text":"Restore #4 Health to your hero and gain +2 Attack this turn.","flavor":"The walrus of Light restores EIGHT Health.","artist":"Jason Chan","collectible":true,"playerClass":"Paladin","mechanics":["ImmuneToSpellpower"]},{"id":"GVG_057a","name":"Seal of Light","type":"Enchantment","text":"+2 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"GVG_009","name":"Shadowbomber","type":"Minion","rarity":"Epic","cost":1,"attack":2,"health":1,"text":"<b>Battlecry:</b> Deal 3 damage to each hero.","flavor":"Shadowbomber does her job, but she's kind of phoning it in at this point.","artist":"Matt Dixon","collectible":true,"playerClass":"Priest","mechanics":["Battlecry"]},{"id":"GVG_072","name":"Shadowboxer","type":"Minion","rarity":"Rare","cost":2,"attack":2,"health":3,"text":"Whenever a character is healed, deal 1 damage to a random enemy.","flavor":"Punching is its primary function. Also, its secondary function.","artist":"Dan Scott","collectible":true,"race":"Mech","playerClass":"Priest"},{"id":"GVG_014a","name":"Shadowed","type":"Enchantment","text":"Health was swapped.","playerClass":"Priest"},{"id":"GVG_058","name":"Shielded Minibot","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":2,"text":"<b>Divine Shield</b>","flavor":"He chooses to believe what he is programmed to believe!","artist":"Raymond Swanland","collectible":true,"race":"Mech","playerClass":"Paladin","mechanics":["Divine Shield"]},{"id":"GVG_053","name":"Shieldmaiden","type":"Minion","rarity":"Rare","cost":6,"attack":5,"health":5,"text":"<b>Battlecry:</b> Gain 5 Armor.","flavor":"She has three shieldbearers in her party to supply her with back ups when she gets low on durability.","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Warrior","mechanics":["Battlecry"]},{"id":"GVG_075","name":"Ship's Cannon","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":3,"text":"Whenever you summon a Pirate, deal 2 damage to a random enemy.","flavor":"If you hear someone yell, \"Cannonball!\" you're about to get wet. Or crushed.","artist":"Warren Mahy","collectible":true},{"id":"GVG_011a","name":"Shrink Ray","type":"Enchantment","text":"-2 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"GVG_011","name":"Shrinkmeister","type":"Minion","rarity":"Common","cost":2,"attack":3,"health":2,"text":"<b>Battlecry:</b> Give a minion -2 Attack this turn.","flavor":"After the debacle of the Gnomish World Enlarger, gnomes are wary of size-changing inventions.","artist":"Jim Nelson","collectible":true,"playerClass":"Priest","mechanics":["Battlecry"]},{"id":"GVG_086","name":"Siege Engine","type":"Minion","rarity":"Rare","cost":5,"attack":5,"health":5,"text":"Whenever you gain Armor, give this minion +1 Attack.","flavor":"Wintergrasp Keep's only weakness!","artist":"Zero Yue","collectible":true,"race":"Mech","playerClass":"Warrior"},{"id":"GVG_040","name":"Siltfin Spiritwalker","type":"Minion","rarity":"Epic","cost":4,"attack":2,"health":5,"text":"Whenever another friendly Murloc dies, draw a card. <b>Overload</b>: (1)","flavor":"The elements respond to anyone who calls them for a worthy cause, even if you call them by yelling, \"MRGHRGLGLGL!\"","artist":"Clint Langley","collectible":true,"race":"Murloc","playerClass":"Shaman"},{"id":"GVG_114","name":"Sneed's Old Shredder","type":"Minion","rarity":"Legendary","cost":8,"attack":5,"health":7,"text":"<b>Deathrattle:</b> Summon a random legendary minion.","flavor":"When Sneed was defeated in the Deadmines, his shredder was sold at auction to an anonymous buyer. (Probably Hogger.)","artist":"Christopher Moeller","collectible":true,"elite":true,"race":"Mech","mechanics":["Deathrattle"]},{"id":"GVG_002","name":"Snowchugger","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":3,"text":"<b>Freeze</b> any character damaged by this minion.","flavor":"Do the slow chant when he waddles by: \"Chug! Chug! Chug!\"","artist":"Gabor Szikszai","collectible":true,"race":"Mech","playerClass":"Mage","mechanics":["Freeze"]},{"id":"GVG_123","name":"Soot Spewer","type":"Minion","rarity":"Rare","cost":3,"attack":3,"health":3,"text":"<b>Spell Damage +1</b>","flavor":"The inventor of the goblin shredder is involved in several patent disputes with the inventor of the soot spewer.","artist":"Phil Saunders","collectible":true,"race":"Mech","playerClass":"Mage","mechanics":["Spellpower"]},{"id":"GVG_044","name":"Spider Tank","type":"Minion","rarity":"Common","cost":3,"attack":3,"health":4,"flavor":"\"What if we put guns on it?\" -Fizzblitz, staring at the spider-transportation-machine","artist":"Dany Orizio","collectible":true,"race":"Mech"},{"id":"GVG_087","name":"Steamwheedle Sniper","type":"Minion","rarity":"Epic","cost":2,"attack":2,"health":3,"text":"Your Hero Power can target minions.","flavor":"Goblins seldom have the patience for sniping. Most prefer lobbing explosives.","artist":"Jun Kang","collectible":true,"playerClass":"Hunter"},{"id":"GVG_067","name":"Stonesplinter Trogg","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":3,"text":"Whenever your opponent casts a spell, gain +1 Attack.","flavor":"The only thing worse than smelling troggs is listening to their poetry.","artist":"Peet Cooper","collectible":true},{"id":"PART_006a","name":"Switched","type":"Enchantment","text":"Attack and Health have been swapped by Reversing Switch."},{"id":"GVG_030be","name":"Tank Mode","type":"Enchantment","text":"+1 Health.","playerClass":"Druid"},{"id":"GVG_030b","name":"Tank Mode","type":"Spell","text":"+1 Health.","playerClass":"Druid"},{"id":"GVG_093","name":"Target Dummy","type":"Minion","rarity":"Rare","cost":0,"attack":0,"health":2,"text":"<b>Taunt</b>","flavor":"The engineering equivalent of a \"Kick Me\" sticker.","artist":"Matt Dixon","collectible":true,"race":"Mech","mechanics":["Taunt"]},{"id":"GVG_046e","name":"The King","type":"Enchantment","text":"Increased Attack.","playerClass":"Hunter"},{"id":"PART_002","name":"Time Rewinder","type":"Spell","cost":1,"text":"Return a friendly minion to your hand.","artist":"Nutthapon Petthai"},{"id":"GVG_022","name":"Tinker's Sharpsword Oil","type":"Spell","rarity":"Common","cost":4,"text":"Give your weapon +3 Attack. <b>Combo:</b> Give a random friendly minion +3 Attack.","flavor":"\"Get ready to strike oil!\" - Super-cheesy battle cry","artist":"Den","collectible":true,"playerClass":"Rogue","mechanics":["Combo"]},{"id":"GVG_022a","name":"Tinker's Sharpsword Oil","type":"Enchantment","text":"+3 Attack."},{"id":"GVG_022b","name":"Tinker's Sharpsword Oil","type":"Enchantment","text":"+3 Attack."},{"id":"GVG_102","name":"Tinkertown Technician","type":"Minion","rarity":"Common","cost":3,"attack":3,"health":3,"text":"<b>Battlecry:</b> If you have a Mech, gain +1/+1 and add a <b>Spare Part</b> to your hand.","flavor":"Won't you take me to... Tinkertown?","artist":"Gabor Szikszai","collectible":true,"mechanics":["Battlecry"]},{"id":"GVG_115","name":"Toshley","type":"Minion","rarity":"Legendary","cost":6,"attack":5,"health":7,"text":"<b>Battlecry and Deathrattle:</b> Add a <b>Spare Part</b> card to your hand.","flavor":"Something about power converters.","artist":"Zoltan & Gabor","collectible":true,"elite":true,"mechanics":["Battlecry","Deathrattle"]},{"id":"GVG_028","name":"Trade Prince Gallywix","type":"Minion","rarity":"Legendary","cost":6,"attack":5,"health":8,"text":"Whenever your opponent casts a spell, gain a copy of it and give them a Coin.","flavor":"Gallywix believes in supply and demand. He supplies the beatings and demands you pay up!","artist":"Wei Wang","collectible":true,"elite":true,"playerClass":"Rogue"},{"id":"GVG_033","name":"Tree of Life","type":"Spell","rarity":"Epic","cost":9,"text":"Restore all characters to full Health.","flavor":"Healing: It grows on trees!","artist":"Steve Prescott","collectible":true,"playerClass":"Druid"},{"id":"GVG_118","name":"Troggzor the Earthinator","type":"Minion","rarity":"Legendary","cost":7,"attack":6,"health":6,"text":"Whenever your opponent casts a spell, summon a Burly Rockjaw Trogg.","flavor":"He keeps earthinating the countryside despite attempts to stop him.","artist":"Mike Sass","collectible":true,"elite":true},{"id":"GVG_003","name":"Unstable Portal","type":"Spell","rarity":"Rare","cost":2,"text":"Add a random minion to your hand. It costs (3) less.","flavor":"The denizens of Azeroth have no idea how much work goes into stabilizing portals.  We spend like 30% of GDP on portal upkeep.","artist":"Sean O'Daniels","collectible":true,"playerClass":"Mage"},{"id":"GVG_083","name":"Upgraded Repair Bot","type":"Minion","rarity":"Rare","cost":5,"attack":5,"health":5,"text":"<b>Battlecry:</b> Give a friendly Mech +4 Health.","flavor":"It's the same as the previous generation but they slapped the word \"upgraded\" on it to sell it for double.","artist":"Nutchapol Thitinunthakorn","collectible":true,"race":"Mech","playerClass":"Priest","mechanics":["Battlecry"]},{"id":"GVG_111t","name":"V-07-TR-0N","type":"Minion","rarity":"Legendary","cost":8,"attack":4,"health":8,"text":"<b>Charge</b>\n<b>Mega-Windfury</b> <i>(Can attack four times a turn.)</i>","artist":"Chris Seaman","elite":true,"race":"Mech","mechanics":["Charge"]},{"id":"GVG_010b","name":"Velen's Chosen","type":"Enchantment","text":"+2/+4 and <b>Spell Damage +1</b>."},{"id":"GVG_010","name":"Velen's Chosen","type":"Spell","rarity":"Common","cost":3,"text":"Give a minion +2/+4 and <b>Spell Damage +1</b>.","flavor":"Velen wrote a \"Lovely Card\" for Tyrande with a picture of the Deeprun Tram that said \"I Choo-Choo-Choose you!\"","artist":"Alex Horley Orlandelli","collectible":true,"playerClass":"Priest"},{"id":"GVG_039","name":"Vitality Totem","type":"Minion","rarity":"Rare","cost":2,"attack":0,"health":3,"text":"At the end of your turn, restore 4 Health to your hero.","flavor":"You can usually find these at the totemist's market on Saturdays.","artist":"Guangjian Huang","collectible":true,"race":"Totem","playerClass":"Shaman"},{"id":"GVG_014","name":"Vol'jin","type":"Minion","rarity":"Legendary","cost":5,"attack":6,"health":2,"text":"<b>Battlecry:</b> Swap Health with another minion.","flavor":"Vol'jin is a shadow hunter, which is like a shadow priest except more voodoo.","artist":"Raymond Swanland","collectible":true,"elite":true,"playerClass":"Priest","mechanics":["Battlecry"]},{"id":"GVG_051","name":"Warbot","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":3,"text":"<b>Enrage:</b> +1 Attack.","flavor":"Mass production of warbots was halted when it was discovered that they were accidentally being produced at \"sample size.\"","artist":"Tyler Walpole","collectible":true,"race":"Mech","playerClass":"Warrior","mechanics":["Enrage"]},{"id":"GVG_122","name":"Wee Spellstopper","type":"Minion","rarity":"Epic","cost":4,"attack":2,"health":5,"text":"Adjacent minions can't be targeted by spells or Hero Powers.","flavor":"Bane of spellcasters and spelling bees everywhere.","artist":"Jonboy Meyers","collectible":true,"playerClass":"Mage","mechanics":["Aura"]},{"id":"GVG_060e","name":"Well Equipped","type":"Enchantment","text":"+2/+2.","playerClass":"Paladin"},{"id":"PART_007e","name":"Whirling Blades","type":"Enchantment","text":"+1 Attack."},{"id":"PART_007","name":"Whirling Blades","type":"Spell","cost":1,"text":"Give a minion +1 Attack.","artist":"Nutchapol Thitinunthakorn"},{"id":"GVG_037","name":"Whirling Zap-o-matic","type":"Minion","rarity":"Common","cost":2,"attack":3,"health":2,"text":"<b>Windfury</b>","flavor":"If you pay a little extra, you can get it in \"candy-apple red.\"","artist":"Jim Nelson","collectible":true,"race":"Mech","playerClass":"Shaman","mechanics":["Windfury"]}],"Missions":[{"id":"TU4c_006e","name":"Bananas","type":"Enchantment","text":"This minion has +1/+1. <i>(+1 Attack/+1 Health)</i>"},{"id":"TU4c_006","name":"Bananas","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Give a friendly minion +1/+1. <i>(+1 Attack/+1 Health)</i>"},{"id":"TU4c_003","name":"Barrel","type":"Minion","faction":"Neutral","rarity":"Common","cost":0,"health":2,"text":"Is something in this barrel?","inPlayText":"Breakable","mechanics":["Deathrattle"]},{"id":"TU4c_002","name":"Barrel Toss","type":"Spell","faction":"Neutral","rarity":"Common","cost":1,"text":"Deal 2 damage."},{"id":"TU4f_005","name":"Brewmaster","type":"Minion","rarity":"Common","cost":4,"attack":4,"health":4},{"id":"TU4d_002","name":"Crazed Hunter","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":1},{"id":"TU4f_007","name":"Crazy Monkey","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":2,"text":"<b>Battlecry:</b> Throw Bananas.","mechanics":["Battlecry"]},{"id":"TU4e_007","name":"Dual Warglaives","type":"Weapon","rarity":"Common","cost":6,"attack":4,"durability":2},{"id":"TU4e_005","name":"Flame Burst","type":"Spell","rarity":"Common","cost":3,"text":"Shoot 5 missiles at random enemies for $1 damage each."},{"id":"TU4e_002t","name":"Flame of Azzinoth","type":"Minion","rarity":"Common","cost":1,"attack":2,"health":1},{"id":"TU4e_002","name":"Flames of Azzinoth","type":"Hero Power","cost":2,"text":"<b>Hero Power</b>\nSummon two 2/1 minions."},{"id":"TU4a_003","name":"Gnoll","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":1},{"id":"TU4d_001","name":"Hemet Nesingwary","type":"Hero","rarity":"Common","health":20,"playerClass":"Hunter"},{"id":"TU4c_005","name":"Hidden Gnome","type":"Minion","faction":"Neutral","rarity":"Common","cost":2,"attack":1,"health":3,"text":"Was hiding in a barrel!"},{"id":"TU4a_001","name":"Hogger","type":"Hero","rarity":"Common","health":10},{"id":"TU4a_004","name":"Hogger SMASH!","type":"Spell","rarity":"Common","cost":3,"text":"Deal 4 damage."},{"id":"TU4e_001","name":"Illidan Stormrage","type":"Hero","health":30,"playerClass":"Hunter"},{"id":"TU4a_006","name":"Jaina Proudmoore","type":"Hero","rarity":"Common","health":27,"playerClass":"Mage"},{"id":"TU4c_001","name":"King Mukla","type":"Hero","rarity":"Common","health":26},{"id":"TU4f_004o","name":"Legacy of the Emperor","type":"Enchantment","text":"Has +2/+2. <i>(+2 Attack/+2 Health)</i>"},{"id":"TU4f_004","name":"Legacy of the Emperor","type":"Spell","rarity":"Common","cost":3,"text":"Give your minions +2/+2. <i>(+2 Attack/+2 Health)</i>"},{"id":"TU4f_001","name":"Lorewalker Cho","type":"Hero","health":25},{"id":"TU4a_005","name":"Massive Gnoll","type":"Minion","rarity":"Common","cost":4,"attack":5,"health":2},{"id":"TU4c_008e","name":"Might of Mukla","type":"Enchantment","text":"King Mukla has +8 Attack this turn.","mechanics":["OneTurnEffect"]},{"id":"TU4b_001","name":"Millhouse Manastorm","type":"Hero","rarity":"Common","health":20,"playerClass":"Mage"},{"id":"TU4c_007","name":"Mukla's Big Brother","type":"Minion","rarity":"Common","cost":6,"attack":10,"health":10,"text":"So strong! And only 6 Mana?!"},{"id":"TU4e_003","name":"Naga Myrmidon","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":1,"text":"<b></b>"},{"id":"TU4f_002","name":"Pandaren Scout","type":"Minion","rarity":"Common","cost":1,"attack":1,"health":1},{"id":"TU4a_002","name":"Riverpaw Gnoll","type":"Minion","rarity":"Common","cost":1,"attack":2,"health":1},{"id":"TU4f_003","name":"Shado-Pan Monk","type":"Minion","rarity":"Common","cost":2,"attack":2,"health":2},{"id":"TU4d_003","name":"Shotgun Blast","type":"Hero Power","rarity":"Common","cost":2,"text":"<b>Hero Power</b>\nDeal 1 damage.","playerClass":"Hunter"},{"id":"TU4c_004","name":"Stomp","type":"Spell","faction":"Neutral","rarity":"Common","cost":2,"text":"Deal 2 damage to all enemies."},{"id":"TU4f_006","name":"Transcendence","type":"Spell","rarity":"Common","cost":1,"text":"Until you kill Cho's minions, he can't be attacked."},{"id":"TU4f_006o","name":"Transcendence","type":"Enchantment","text":"Until you kill Cho's minions, he can't be attacked."},{"id":"TU4e_004","name":"Warglaive of Azzinoth","type":"Weapon","rarity":"Common","cost":2,"attack":2,"durability":2},{"id":"TU4c_008","name":"Will of Mukla","type":"Spell","rarity":"Common","cost":3,"text":"Restore 8 Health."}],"Promotion":[{"id":"Mekka4t","name":"Chicken","type":"Minion","cost":0,"attack":1,"health":1,"text":"<i>Hey Chicken!</i>","race":"Beast"},{"id":"PRO_001","name":"Elite Tauren Chieftain","type":"Minion","rarity":"Legendary","cost":5,"attack":5,"health":5,"text":"<b>Battlecry:</b> Give both players the power to ROCK! (with a Power Chord card)","flavor":"He's looking for a drummer.  The current candidates are: Novice Engineer, Sen'jin Shieldmasta', and Ragnaros the Firelord.","artist":"Samwise Didier","collectible":true,"elite":true,"howToGetGold":"Awarded at BlizzCon 2013.","mechanics":["Battlecry"]},{"id":"Mekka3e","name":"Emboldened!","type":"Enchantment","text":"Increased Stats."},{"id":"Mekka3","name":"Emboldener 3000","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":0,"health":4,"text":"At the end of your turn, give a random minion +1/+1.","inPlayText":"Emboldening","race":"Mech"},{"id":"EX1_112","name":"Gelbin Mekkatorque","type":"Minion","faction":"Alliance","rarity":"Legendary","cost":6,"attack":6,"health":6,"text":"<b>Battlecry:</b> Summon an AWESOME invention.","flavor":"He's the leader of the gnomes, and an incredible inventor.  He's getting better, too; He turns things into chickens WAY less than he used to.","artist":"Ludo Lullabi","collectible":true,"elite":true,"howToGetGold":"This was rewarded to players who helped test the Store during the Beta.","mechanics":["Battlecry"]},{"id":"Mekka1","name":"Homing Chicken","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":0,"health":1,"text":"At the start of your turn, destroy this minion and draw 3 cards.","inPlayText":"Pecking","race":"Mech"},{"id":"PRO_001a","name":"I Am Murloc","type":"Spell","cost":4,"text":"Summon three, four, or five 1/1 Murlocs."},{"id":"PRO_001at","name":"Murloc","type":"Minion","cost":1,"attack":1,"health":1,"race":"Murloc"},{"id":"Mekka4","name":"Poultryizer","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":0,"health":3,"text":"At the start of your turn, transform a random minion into a 1/1 Chicken.","inPlayText":"Poultryizing","race":"Mech"},{"id":"PRO_001c","name":"Power of the Horde","type":"Spell","cost":4,"text":"Summon a random Horde Warrior."},{"id":"Mekka2","name":"Repair Bot","type":"Minion","faction":"Alliance","rarity":"Common","cost":1,"attack":0,"health":3,"text":"At the end of your turn, restore 6 Health to a damaged character.","inPlayText":"Repairin'","race":"Mech"},{"id":"PRO_001b","name":"Rogues Do It...","type":"Spell","cost":4,"text":"Deal $4 damage. Draw a card."},{"id":"Mekka4e","name":"Transformed","type":"Enchantment","text":"Has been transformed into a chicken!","mechanics":["Morph"]}],"Reward":[{"id":"NEW1_016","name":"Captain's Parrot","type":"Minion","rarity":"Epic","cost":2,"attack":1,"health":1,"text":"<b>Battlecry:</b> Put a random Pirate from your deck into your hand.","flavor":"Pirates and Parrots go together like Virmen and Carrots.","artist":"Daren Bader","collectible":true,"race":"Beast","howToGet":"Unlocked when you have all the Pirates from the Expert Set.","howToGetGold":"Unlocked when you have all the Golden Pirates from the Expert Set.","mechanics":["Battlecry"]},{"id":"EX1_062","name":"Old Murk-Eye","type":"Minion","faction":"Neutral","rarity":"Legendary","cost":4,"attack":2,"health":4,"text":"<b>Charge</b>. Has +1 Attack for each other Murloc on the battlefield.","inPlayText":"Marglahg","flavor":"He's a legend among murlocs.  \"Mrghllghghllghg!\", they say.","artist":"Dan Scott","collectible":true,"elite":true,"race":"Murloc","howToGet":"Unlocked when you have all the Murlocs from the Expert Set.","howToGetGold":"Unlocked when you have all the Golden Murlocs from the Expert and Basic Sets.","mechanics":["Charge"]}],"System":[{"id":"PlaceholderCard","name":"Placeholder Card","type":"Minion","faction":"Neutral","rarity":"Epic","cost":9,"attack":6,"health":8,"text":"Battlecry: Someone remembers to publish this card.","playerClass":"Mage"}]};

var _allCards = {};
for (var cardSetName in _HearthstoneAllCardsSets) {
    var cardSet = _HearthstoneAllCardsSets[cardSetName]
    for (var i = 0; i < cardSet.length; i++) {
        var card = cardSet[i];
        _allCards[card.id] = card;
    }
}

var CardStore = {
    getCardWithId:function(id) {
        return _allCards[id];
    }
}

module.exports = CardStore;
},{}],6:[function(require,module,exports){

    function Entity(id, card) {"use strict";
        this.id = id;
        this.card = card;
        this.damaged = 0;
        this.attachments = [];
    }

    Entity.prototype.name=function() {"use strict";
        return this.card.name;
    };


module.exports = Entity;
},{}],7:[function(require,module,exports){
var Entity = require('./Entity');
var Player = require('./Player');
var CardStore = require('./CardStore');


    function Game(replay) {"use strict";
        this.currentTurnIndex = 0;
        this.replay = replay;
        this.players = replay.players.map(function(player){
            var hero = new Entity(player.hero.id, CardStore.getCardWithId(player.hero.card_id));
            var power = new Entity(player.hero_power.id, CardStore.getCardWithId(player.hero_power.card_id));
            return new Player(player.id, player.name, player.first_player, hero, power);
        });
        this.nextTurn();
    }

    Game.prototype.nextTurn=function() {"use strict";
        var turn = this.replay.turns[this.currentTurnIndex];
        turn.events.forEach(function(event){
            console.log(event);
        });
        this.currentTurnIndex = this.currentTurnIndex + 1;
    };
;

module.exports = Game;
},{"./CardStore":5,"./Entity":6,"./Player":9}],8:[function(require,module,exports){
var fs = require('fs');
var path = require('path');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var AppDispatcher = require('../dispatcher/AppDispatcher');
var Game = require('./Game');
var CHANGE_EVENT = 'change'; 

// todo: load game dynamically
var _data = JSON.parse(fs.readFileSync('/Users/siuying/workspace/tool/hearthstone-replayer/gamelog1.json', 'utf8'));
var _game = new Game(_data);
var _currentTurn = 0;

function _configureGame() {
};

_configureGame();

// Game Store
var GameStore = assign({}, EventEmitter.prototype, {
    getPlayers:function() {
        return _game.players;
    },

    emitChange:function() {
        this.emit(CHANGE_EVENT);
    },

    addChangeListener:function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener:function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

AppDispatcher.register(function(payload) {
    var action = payload.action;
    switch(action.type) {
        case ActionTypes.NEXT_TURN_ACTION:
            _nextTurn();
            GameStore.emitChange();
            break;
        default:
            // do nothing
    }

    // No errors. Needed by promise in Dispatcher.
    return true;
});

module.exports = GameStore;
},{"../dispatcher/AppDispatcher":4,"./Game":7,"events":undefined,"fs":undefined,"object-assign":13,"path":undefined}],9:[function(require,module,exports){
var _heroClass = {
    "HERO_01": "Warrior",
    "HERO_02": "Shaman",
    "HERO_03": "Rogue",
    "HERO_04": "Paladin",
    "HERO_05": "Hunter",
    "HERO_06": "Druid",
    "HERO_07": "Warlock",
    "HERO_08": "Mage",
    "HERO_09": "Priest"
};


    function Player(id, name, firstPlayer, hero, power) {"use strict";
        this.id = id;
        this.name = name;
        this.firstPlayer = firstPlayer;
        this.hero = hero;
        this.power = power;

        this.deck = [];
        this.hand = [];
        this.play = [];
        this.deck = [];
        this.setaside = [];
    }

    Player.prototype.heroClass=function() {"use strict";
        var cardId = this.hero.card.id;
        console.log("this.hero: ", this.hero)
        return _heroClass[cardId];
    };


module.exports = Player;
},{}],10:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

module.exports.Dispatcher = require('./lib/Dispatcher')

},{"./lib/Dispatcher":11}],11:[function(require,module,exports){
/*
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Dispatcher
 * @typechecks
 */

"use strict";

var invariant = require('./invariant');

var _lastID = 1;
var _prefix = 'ID_';

/**
 * Dispatcher is used to broadcast payloads to registered callbacks. This is
 * different from generic pub-sub systems in two ways:
 *
 *   1) Callbacks are not subscribed to particular events. Every payload is
 *      dispatched to every registered callback.
 *   2) Callbacks can be deferred in whole or part until other callbacks have
 *      been executed.
 *
 * For example, consider this hypothetical flight destination form, which
 * selects a default city when a country is selected:
 *
 *   var flightDispatcher = new Dispatcher();
 *
 *   // Keeps track of which country is selected
 *   var CountryStore = {country: null};
 *
 *   // Keeps track of which city is selected
 *   var CityStore = {city: null};
 *
 *   // Keeps track of the base flight price of the selected city
 *   var FlightPriceStore = {price: null}
 *
 * When a user changes the selected city, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'city-update',
 *     selectedCity: 'paris'
 *   });
 *
 * This payload is digested by `CityStore`:
 *
 *   flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'city-update') {
 *       CityStore.city = payload.selectedCity;
 *     }
 *   });
 *
 * When the user selects a country, we dispatch the payload:
 *
 *   flightDispatcher.dispatch({
 *     actionType: 'country-update',
 *     selectedCountry: 'australia'
 *   });
 *
 * This payload is digested by both stores:
 *
 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       CountryStore.country = payload.selectedCountry;
 *     }
 *   });
 *
 * When the callback to update `CountryStore` is registered, we save a reference
 * to the returned token. Using this token with `waitFor()`, we can guarantee
 * that `CountryStore` is updated before the callback that updates `CityStore`
 * needs to query its data.
 *
 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
 *     if (payload.actionType === 'country-update') {
 *       // `CountryStore.country` may not be updated.
 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
 *       // `CountryStore.country` is now guaranteed to be updated.
 *
 *       // Select the default city for the new country
 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
 *     }
 *   });
 *
 * The usage of `waitFor()` can be chained, for example:
 *
 *   FlightPriceStore.dispatchToken =
 *     flightDispatcher.register(function(payload) {
 *       switch (payload.actionType) {
 *         case 'country-update':
 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
 *           FlightPriceStore.price =
 *             getFlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *
 *         case 'city-update':
 *           FlightPriceStore.price =
 *             FlightPriceStore(CountryStore.country, CityStore.city);
 *           break;
 *     }
 *   });
 *
 * The `country-update` payload will be guaranteed to invoke the stores'
 * registered callbacks in order: `CountryStore`, `CityStore`, then
 * `FlightPriceStore`.
 */

  function Dispatcher() {
    this.$Dispatcher_callbacks = {};
    this.$Dispatcher_isPending = {};
    this.$Dispatcher_isHandled = {};
    this.$Dispatcher_isDispatching = false;
    this.$Dispatcher_pendingPayload = null;
  }

  /**
   * Registers a callback to be invoked with every dispatched payload. Returns
   * a token that can be used with `waitFor()`.
   *
   * @param {function} callback
   * @return {string}
   */
  Dispatcher.prototype.register=function(callback) {
    var id = _prefix + _lastID++;
    this.$Dispatcher_callbacks[id] = callback;
    return id;
  };

  /**
   * Removes a callback based on its token.
   *
   * @param {string} id
   */
  Dispatcher.prototype.unregister=function(id) {
    invariant(
      this.$Dispatcher_callbacks[id],
      'Dispatcher.unregister(...): `%s` does not map to a registered callback.',
      id
    );
    delete this.$Dispatcher_callbacks[id];
  };

  /**
   * Waits for the callbacks specified to be invoked before continuing execution
   * of the current callback. This method should only be used by a callback in
   * response to a dispatched payload.
   *
   * @param {array<string>} ids
   */
  Dispatcher.prototype.waitFor=function(ids) {
    invariant(
      this.$Dispatcher_isDispatching,
      'Dispatcher.waitFor(...): Must be invoked while dispatching.'
    );
    for (var ii = 0; ii < ids.length; ii++) {
      var id = ids[ii];
      if (this.$Dispatcher_isPending[id]) {
        invariant(
          this.$Dispatcher_isHandled[id],
          'Dispatcher.waitFor(...): Circular dependency detected while ' +
          'waiting for `%s`.',
          id
        );
        continue;
      }
      invariant(
        this.$Dispatcher_callbacks[id],
        'Dispatcher.waitFor(...): `%s` does not map to a registered callback.',
        id
      );
      this.$Dispatcher_invokeCallback(id);
    }
  };

  /**
   * Dispatches a payload to all registered callbacks.
   *
   * @param {object} payload
   */
  Dispatcher.prototype.dispatch=function(payload) {
    invariant(
      !this.$Dispatcher_isDispatching,
      'Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.'
    );
    this.$Dispatcher_startDispatching(payload);
    try {
      for (var id in this.$Dispatcher_callbacks) {
        if (this.$Dispatcher_isPending[id]) {
          continue;
        }
        this.$Dispatcher_invokeCallback(id);
      }
    } finally {
      this.$Dispatcher_stopDispatching();
    }
  };

  /**
   * Is this Dispatcher currently dispatching.
   *
   * @return {boolean}
   */
  Dispatcher.prototype.isDispatching=function() {
    return this.$Dispatcher_isDispatching;
  };

  /**
   * Call the callback stored with the given id. Also do some internal
   * bookkeeping.
   *
   * @param {string} id
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_invokeCallback=function(id) {
    this.$Dispatcher_isPending[id] = true;
    this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
    this.$Dispatcher_isHandled[id] = true;
  };

  /**
   * Set up bookkeeping needed when dispatching.
   *
   * @param {object} payload
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_startDispatching=function(payload) {
    for (var id in this.$Dispatcher_callbacks) {
      this.$Dispatcher_isPending[id] = false;
      this.$Dispatcher_isHandled[id] = false;
    }
    this.$Dispatcher_pendingPayload = payload;
    this.$Dispatcher_isDispatching = true;
  };

  /**
   * Clear bookkeeping used for dispatching.
   *
   * @internal
   */
  Dispatcher.prototype.$Dispatcher_stopDispatching=function() {
    this.$Dispatcher_pendingPayload = null;
    this.$Dispatcher_isDispatching = false;
  };


module.exports = Dispatcher;

},{"./invariant":12}],12:[function(require,module,exports){
/**
 * Copyright (c) 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],13:[function(require,module,exports){
'use strict';

function ToObject(val) {
	if (val == null) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

module.exports = Object.assign || function (target, source) {
	var from;
	var keys;
	var to = ToObject(target);

	for (var s = 1; s < arguments.length; s++) {
		from = arguments[s];
		keys = Object.keys(Object(from));

		for (var i = 0; i < keys.length; i++) {
			to[keys[i]] = from[keys[i]];
		}
	}

	return to;
};

},{}],14:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule AutoFocusMixin
 * @typechecks static-only
 */

"use strict";

var focusNode = require("./focusNode");

var AutoFocusMixin = {
  componentDidMount: function() {
    if (this.props.autoFocus) {
      focusNode(this.getDOMNode());
    }
  }
};

module.exports = AutoFocusMixin;

},{"./focusNode":124}],15:[function(require,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule BeforeInputEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var SyntheticInputEvent = require("./SyntheticInputEvent");

var keyOf = require("./keyOf");

var canUseTextInputEvent = (
  ExecutionEnvironment.canUseDOM &&
  'TextEvent' in window &&
  !('documentMode' in document || isPresto())
);

/**
 * Opera <= 12 includes TextEvent in window, but does not fire
 * text input events. Rely on keypress instead.
 */
function isPresto() {
  var opera = window.opera;
  return (
    typeof opera === 'object' &&
    typeof opera.version === 'function' &&
    parseInt(opera.version(), 10) <= 12
  );
}

var SPACEBAR_CODE = 32;
var SPACEBAR_CHAR = String.fromCharCode(SPACEBAR_CODE);

var topLevelTypes = EventConstants.topLevelTypes;

// Events and their corresponding property names.
var eventTypes = {
  beforeInput: {
    phasedRegistrationNames: {
      bubbled: keyOf({onBeforeInput: null}),
      captured: keyOf({onBeforeInputCapture: null})
    },
    dependencies: [
      topLevelTypes.topCompositionEnd,
      topLevelTypes.topKeyPress,
      topLevelTypes.topTextInput,
      topLevelTypes.topPaste
    ]
  }
};

// Track characters inserted via keypress and composition events.
var fallbackChars = null;

// Track whether we've ever handled a keypress on the space key.
var hasSpaceKeypress = false;

/**
 * Return whether a native keypress event is assumed to be a command.
 * This is required because Firefox fires `keypress` events for key commands
 * (cut, copy, select-all, etc.) even though no character is inserted.
 */
function isKeypressCommand(nativeEvent) {
  return (
    (nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) &&
    // ctrlKey && altKey is equivalent to AltGr, and is not a command.
    !(nativeEvent.ctrlKey && nativeEvent.altKey)
  );
}

/**
 * Create an `onBeforeInput` event to match
 * http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105/#events-inputevents.
 *
 * This event plugin is based on the native `textInput` event
 * available in Chrome, Safari, Opera, and IE. This event fires after
 * `onKeyPress` and `onCompositionEnd`, but before `onInput`.
 *
 * `beforeInput` is spec'd but not implemented in any browsers, and
 * the `input` event does not provide any useful information about what has
 * actually been added, contrary to the spec. Thus, `textInput` is the best
 * available event to identify the characters that have actually been inserted
 * into the target node.
 */
var BeforeInputEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    var chars;

    if (canUseTextInputEvent) {
      switch (topLevelType) {
        case topLevelTypes.topKeyPress:
          /**
           * If native `textInput` events are available, our goal is to make
           * use of them. However, there is a special case: the spacebar key.
           * In Webkit, preventing default on a spacebar `textInput` event
           * cancels character insertion, but it *also* causes the browser
           * to fall back to its default spacebar behavior of scrolling the
           * page.
           *
           * Tracking at:
           * https://code.google.com/p/chromium/issues/detail?id=355103
           *
           * To avoid this issue, use the keypress event as if no `textInput`
           * event is available.
           */
          var which = nativeEvent.which;
          if (which !== SPACEBAR_CODE) {
            return;
          }

          hasSpaceKeypress = true;
          chars = SPACEBAR_CHAR;
          break;

        case topLevelTypes.topTextInput:
          // Record the characters to be added to the DOM.
          chars = nativeEvent.data;

          // If it's a spacebar character, assume that we have already handled
          // it at the keypress level and bail immediately. Android Chrome
          // doesn't give us keycodes, so we need to blacklist it.
          if (chars === SPACEBAR_CHAR && hasSpaceKeypress) {
            return;
          }

          // Otherwise, carry on.
          break;

        default:
          // For other native event types, do nothing.
          return;
      }
    } else {
      switch (topLevelType) {
        case topLevelTypes.topPaste:
          // If a paste event occurs after a keypress, throw out the input
          // chars. Paste events should not lead to BeforeInput events.
          fallbackChars = null;
          break;
        case topLevelTypes.topKeyPress:
          /**
           * As of v27, Firefox may fire keypress events even when no character
           * will be inserted. A few possibilities:
           *
           * - `which` is `0`. Arrow keys, Esc key, etc.
           *
           * - `which` is the pressed key code, but no char is available.
           *   Ex: 'AltGr + d` in Polish. There is no modified character for
           *   this key combination and no character is inserted into the
           *   document, but FF fires the keypress for char code `100` anyway.
           *   No `input` event will occur.
           *
           * - `which` is the pressed key code, but a command combination is
           *   being used. Ex: `Cmd+C`. No character is inserted, and no
           *   `input` event will occur.
           */
          if (nativeEvent.which && !isKeypressCommand(nativeEvent)) {
            fallbackChars = String.fromCharCode(nativeEvent.which);
          }
          break;
        case topLevelTypes.topCompositionEnd:
          fallbackChars = nativeEvent.data;
          break;
      }

      // If no changes have occurred to the fallback string, no relevant
      // event has fired and we're done.
      if (fallbackChars === null) {
        return;
      }

      chars = fallbackChars;
    }

    // If no characters are being inserted, no BeforeInput event should
    // be fired.
    if (!chars) {
      return;
    }

    var event = SyntheticInputEvent.getPooled(
      eventTypes.beforeInput,
      topLevelTargetID,
      nativeEvent
    );

    event.data = chars;
    fallbackChars = null;
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }
};

module.exports = BeforeInputEventPlugin;

},{"./EventConstants":28,"./EventPropagators":33,"./ExecutionEnvironment":34,"./SyntheticInputEvent":102,"./keyOf":146}],16:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSProperty
 */

"use strict";

/**
 * CSS properties which accept numbers but are not in units of "px".
 */
var isUnitlessNumber = {
  columnCount: true,
  fillOpacity: true,
  flex: true,
  flexGrow: true,
  flexShrink: true,
  fontWeight: true,
  lineClamp: true,
  lineHeight: true,
  opacity: true,
  order: true,
  orphans: true,
  widows: true,
  zIndex: true,
  zoom: true
};

/**
 * @param {string} prefix vendor-specific prefix, eg: Webkit
 * @param {string} key style name, eg: transitionDuration
 * @return {string} style name prefixed with `prefix`, properly camelCased, eg:
 * WebkitTransitionDuration
 */
function prefixKey(prefix, key) {
  return prefix + key.charAt(0).toUpperCase() + key.substring(1);
}

/**
 * Support style names that may come passed in prefixed by adding permutations
 * of vendor prefixes.
 */
var prefixes = ['Webkit', 'ms', 'Moz', 'O'];

// Using Object.keys here, or else the vanilla for-in loop makes IE8 go into an
// infinite loop, because it iterates over the newly added props too.
Object.keys(isUnitlessNumber).forEach(function(prop) {
  prefixes.forEach(function(prefix) {
    isUnitlessNumber[prefixKey(prefix, prop)] = isUnitlessNumber[prop];
  });
});

/**
 * Most style properties can be unset by doing .style[prop] = '' but IE8
 * doesn't like doing that with shorthand properties so for the properties that
 * IE8 breaks on, which are listed here, we instead unset each of the
 * individual properties. See http://bugs.jquery.com/ticket/12385.
 * The 4-value 'clock' properties like margin, padding, border-width seem to
 * behave without any problems. Curiously, list-style works too without any
 * special prodding.
 */
var shorthandPropertyExpansions = {
  background: {
    backgroundImage: true,
    backgroundPosition: true,
    backgroundRepeat: true,
    backgroundColor: true
  },
  border: {
    borderWidth: true,
    borderStyle: true,
    borderColor: true
  },
  borderBottom: {
    borderBottomWidth: true,
    borderBottomStyle: true,
    borderBottomColor: true
  },
  borderLeft: {
    borderLeftWidth: true,
    borderLeftStyle: true,
    borderLeftColor: true
  },
  borderRight: {
    borderRightWidth: true,
    borderRightStyle: true,
    borderRightColor: true
  },
  borderTop: {
    borderTopWidth: true,
    borderTopStyle: true,
    borderTopColor: true
  },
  font: {
    fontStyle: true,
    fontVariant: true,
    fontWeight: true,
    fontSize: true,
    lineHeight: true,
    fontFamily: true
  }
};

var CSSProperty = {
  isUnitlessNumber: isUnitlessNumber,
  shorthandPropertyExpansions: shorthandPropertyExpansions
};

module.exports = CSSProperty;

},{}],17:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CSSPropertyOperations
 * @typechecks static-only
 */

"use strict";

var CSSProperty = require("./CSSProperty");
var ExecutionEnvironment = require("./ExecutionEnvironment");

var camelizeStyleName = require("./camelizeStyleName");
var dangerousStyleValue = require("./dangerousStyleValue");
var hyphenateStyleName = require("./hyphenateStyleName");
var memoizeStringOnly = require("./memoizeStringOnly");
var warning = require("./warning");

var processStyleName = memoizeStringOnly(function(styleName) {
  return hyphenateStyleName(styleName);
});

var styleFloatAccessor = 'cssFloat';
if (ExecutionEnvironment.canUseDOM) {
  // IE8 only supports accessing cssFloat (standard) as styleFloat
  if (document.documentElement.style.cssFloat === undefined) {
    styleFloatAccessor = 'styleFloat';
  }
}

if ("production" !== process.env.NODE_ENV) {
  var warnedStyleNames = {};

  var warnHyphenatedStyleName = function(name) {
    if (warnedStyleNames.hasOwnProperty(name) && warnedStyleNames[name]) {
      return;
    }

    warnedStyleNames[name] = true;
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'Unsupported style property ' + name + '. Did you mean ' +
      camelizeStyleName(name) + '?'
    ) : null);
  };
}

/**
 * Operations for dealing with CSS properties.
 */
var CSSPropertyOperations = {

  /**
   * Serializes a mapping of style properties for use as inline styles:
   *
   *   > createMarkupForStyles({width: '200px', height: 0})
   *   "width:200px;height:0;"
   *
   * Undefined values are ignored so that declarative programming is easier.
   * The result should be HTML-escaped before insertion into the DOM.
   *
   * @param {object} styles
   * @return {?string}
   */
  createMarkupForStyles: function(styles) {
    var serialized = '';
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if ("production" !== process.env.NODE_ENV) {
        if (styleName.indexOf('-') > -1) {
          warnHyphenatedStyleName(styleName);
        }
      }
      var styleValue = styles[styleName];
      if (styleValue != null) {
        serialized += processStyleName(styleName) + ':';
        serialized += dangerousStyleValue(styleName, styleValue) + ';';
      }
    }
    return serialized || null;
  },

  /**
   * Sets the value for multiple styles on a node.  If a value is specified as
   * '' (empty string), the corresponding style property will be unset.
   *
   * @param {DOMElement} node
   * @param {object} styles
   */
  setValueForStyles: function(node, styles) {
    var style = node.style;
    for (var styleName in styles) {
      if (!styles.hasOwnProperty(styleName)) {
        continue;
      }
      if ("production" !== process.env.NODE_ENV) {
        if (styleName.indexOf('-') > -1) {
          warnHyphenatedStyleName(styleName);
        }
      }
      var styleValue = dangerousStyleValue(styleName, styles[styleName]);
      if (styleName === 'float') {
        styleName = styleFloatAccessor;
      }
      if (styleValue) {
        style[styleName] = styleValue;
      } else {
        var expansion = CSSProperty.shorthandPropertyExpansions[styleName];
        if (expansion) {
          // Shorthand property that IE8 won't like unsetting, so unset each
          // component to placate it
          for (var individualStyleName in expansion) {
            style[individualStyleName] = '';
          }
        } else {
          style[styleName] = '';
        }
      }
    }
  }

};

module.exports = CSSPropertyOperations;

},{"./CSSProperty":16,"./ExecutionEnvironment":34,"./camelizeStyleName":113,"./dangerousStyleValue":118,"./hyphenateStyleName":137,"./memoizeStringOnly":148,"./warning":158}],18:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CallbackQueue
 */

"use strict";

var PooledClass = require("./PooledClass");

var assign = require("./Object.assign");
var invariant = require("./invariant");

/**
 * A specialized pseudo-event module to help keep track of components waiting to
 * be notified when their DOM representations are available for use.
 *
 * This implements `PooledClass`, so you should never need to instantiate this.
 * Instead, use `CallbackQueue.getPooled()`.
 *
 * @class ReactMountReady
 * @implements PooledClass
 * @internal
 */
function CallbackQueue() {
  this._callbacks = null;
  this._contexts = null;
}

assign(CallbackQueue.prototype, {

  /**
   * Enqueues a callback to be invoked when `notifyAll` is invoked.
   *
   * @param {function} callback Invoked when `notifyAll` is invoked.
   * @param {?object} context Context to call `callback` with.
   * @internal
   */
  enqueue: function(callback, context) {
    this._callbacks = this._callbacks || [];
    this._contexts = this._contexts || [];
    this._callbacks.push(callback);
    this._contexts.push(context);
  },

  /**
   * Invokes all enqueued callbacks and clears the queue. This is invoked after
   * the DOM representation of a component has been created or updated.
   *
   * @internal
   */
  notifyAll: function() {
    var callbacks = this._callbacks;
    var contexts = this._contexts;
    if (callbacks) {
      ("production" !== process.env.NODE_ENV ? invariant(
        callbacks.length === contexts.length,
        "Mismatched list of contexts in callback queue"
      ) : invariant(callbacks.length === contexts.length));
      this._callbacks = null;
      this._contexts = null;
      for (var i = 0, l = callbacks.length; i < l; i++) {
        callbacks[i].call(contexts[i]);
      }
      callbacks.length = 0;
      contexts.length = 0;
    }
  },

  /**
   * Resets the internal queue.
   *
   * @internal
   */
  reset: function() {
    this._callbacks = null;
    this._contexts = null;
  },

  /**
   * `PooledClass` looks for this.
   */
  destructor: function() {
    this.reset();
  }

});

PooledClass.addPoolingTo(CallbackQueue);

module.exports = CallbackQueue;

},{"./Object.assign":39,"./PooledClass":40,"./invariant":139}],19:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ChangeEventPlugin
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");
var EventPropagators = require("./EventPropagators");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var ReactUpdates = require("./ReactUpdates");
var SyntheticEvent = require("./SyntheticEvent");

var isEventSupported = require("./isEventSupported");
var isTextInputElement = require("./isTextInputElement");
var keyOf = require("./keyOf");

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  change: {
    phasedRegistrationNames: {
      bubbled: keyOf({onChange: null}),
      captured: keyOf({onChangeCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topChange,
      topLevelTypes.topClick,
      topLevelTypes.topFocus,
      topLevelTypes.topInput,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyUp,
      topLevelTypes.topSelectionChange
    ]
  }
};

/**
 * For IE shims
 */
var activeElement = null;
var activeElementID = null;
var activeElementValue = null;
var activeElementValueProp = null;

/**
 * SECTION: handle `change` event
 */
function shouldUseChangeEvent(elem) {
  return (
    elem.nodeName === 'SELECT' ||
    (elem.nodeName === 'INPUT' && elem.type === 'file')
  );
}

var doesChangeEventBubble = false;
if (ExecutionEnvironment.canUseDOM) {
  // See `handleChange` comment below
  doesChangeEventBubble = isEventSupported('change') && (
    !('documentMode' in document) || document.documentMode > 8
  );
}

function manualDispatchChangeEvent(nativeEvent) {
  var event = SyntheticEvent.getPooled(
    eventTypes.change,
    activeElementID,
    nativeEvent
  );
  EventPropagators.accumulateTwoPhaseDispatches(event);

  // If change and propertychange bubbled, we'd just bind to it like all the
  // other events and have it go through ReactBrowserEventEmitter. Since it
  // doesn't, we manually listen for the events and so we have to enqueue and
  // process the abstract event manually.
  //
  // Batching is necessary here in order to ensure that all event handlers run
  // before the next rerender (including event handlers attached to ancestor
  // elements instead of directly on the input). Without this, controlled
  // components don't work properly in conjunction with event bubbling because
  // the component is rerendered and the value reverted before all the event
  // handlers can run. See https://github.com/facebook/react/issues/708.
  ReactUpdates.batchedUpdates(runEventInBatch, event);
}

function runEventInBatch(event) {
  EventPluginHub.enqueueEvents(event);
  EventPluginHub.processEventQueue();
}

function startWatchingForChangeEventIE8(target, targetID) {
  activeElement = target;
  activeElementID = targetID;
  activeElement.attachEvent('onchange', manualDispatchChangeEvent);
}

function stopWatchingForChangeEventIE8() {
  if (!activeElement) {
    return;
  }
  activeElement.detachEvent('onchange', manualDispatchChangeEvent);
  activeElement = null;
  activeElementID = null;
}

function getTargetIDForChangeEvent(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topChange) {
    return topLevelTargetID;
  }
}
function handleEventsForChangeEventIE8(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topFocus) {
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForChangeEventIE8();
    startWatchingForChangeEventIE8(topLevelTarget, topLevelTargetID);
  } else if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForChangeEventIE8();
  }
}


/**
 * SECTION: handle `input` event
 */
var isInputEventSupported = false;
if (ExecutionEnvironment.canUseDOM) {
  // IE9 claims to support the input event but fails to trigger it when
  // deleting text, so we ignore its input events
  isInputEventSupported = isEventSupported('input') && (
    !('documentMode' in document) || document.documentMode > 9
  );
}

/**
 * (For old IE.) Replacement getter/setter for the `value` property that gets
 * set on the active element.
 */
var newValueProp =  {
  get: function() {
    return activeElementValueProp.get.call(this);
  },
  set: function(val) {
    // Cast to a string so we can do equality checks.
    activeElementValue = '' + val;
    activeElementValueProp.set.call(this, val);
  }
};

/**
 * (For old IE.) Starts tracking propertychange events on the passed-in element
 * and override the value property so that we can distinguish user events from
 * value changes in JS.
 */
function startWatchingForValueChange(target, targetID) {
  activeElement = target;
  activeElementID = targetID;
  activeElementValue = target.value;
  activeElementValueProp = Object.getOwnPropertyDescriptor(
    target.constructor.prototype,
    'value'
  );

  Object.defineProperty(activeElement, 'value', newValueProp);
  activeElement.attachEvent('onpropertychange', handlePropertyChange);
}

/**
 * (For old IE.) Removes the event listeners from the currently-tracked element,
 * if any exists.
 */
function stopWatchingForValueChange() {
  if (!activeElement) {
    return;
  }

  // delete restores the original property definition
  delete activeElement.value;
  activeElement.detachEvent('onpropertychange', handlePropertyChange);

  activeElement = null;
  activeElementID = null;
  activeElementValue = null;
  activeElementValueProp = null;
}

/**
 * (For old IE.) Handles a propertychange event, sending a `change` event if
 * the value of the active element has changed.
 */
function handlePropertyChange(nativeEvent) {
  if (nativeEvent.propertyName !== 'value') {
    return;
  }
  var value = nativeEvent.srcElement.value;
  if (value === activeElementValue) {
    return;
  }
  activeElementValue = value;

  manualDispatchChangeEvent(nativeEvent);
}

/**
 * If a `change` event should be fired, returns the target's ID.
 */
function getTargetIDForInputEvent(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topInput) {
    // In modern browsers (i.e., not IE8 or IE9), the input event is exactly
    // what we want so fall through here and trigger an abstract event
    return topLevelTargetID;
  }
}

// For IE8 and IE9.
function handleEventsForInputEventIE(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topFocus) {
    // In IE8, we can capture almost all .value changes by adding a
    // propertychange handler and looking for events with propertyName
    // equal to 'value'
    // In IE9, propertychange fires for most input events but is buggy and
    // doesn't fire when text is deleted, but conveniently, selectionchange
    // appears to fire in all of the remaining cases so we catch those and
    // forward the event if the value has changed
    // In either case, we don't want to call the event handler if the value
    // is changed from JS so we redefine a setter for `.value` that updates
    // our activeElementValue variable, allowing us to ignore those changes
    //
    // stopWatching() should be a noop here but we call it just in case we
    // missed a blur event somehow.
    stopWatchingForValueChange();
    startWatchingForValueChange(topLevelTarget, topLevelTargetID);
  } else if (topLevelType === topLevelTypes.topBlur) {
    stopWatchingForValueChange();
  }
}

// For IE8 and IE9.
function getTargetIDForInputEventIE(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topSelectionChange ||
      topLevelType === topLevelTypes.topKeyUp ||
      topLevelType === topLevelTypes.topKeyDown) {
    // On the selectionchange event, the target is just document which isn't
    // helpful for us so just check activeElement instead.
    //
    // 99% of the time, keydown and keyup aren't necessary. IE8 fails to fire
    // propertychange on the first input event after setting `value` from a
    // script and fires only keydown, keypress, keyup. Catching keyup usually
    // gets it and catching keydown lets us fire an event for the first
    // keystroke if user does a key repeat (it'll be a little delayed: right
    // before the second keystroke). Other input methods (e.g., paste) seem to
    // fire selectionchange normally.
    if (activeElement && activeElement.value !== activeElementValue) {
      activeElementValue = activeElement.value;
      return activeElementID;
    }
  }
}


/**
 * SECTION: handle `click` event
 */
function shouldUseClickEvent(elem) {
  // Use the `click` event to detect changes to checkbox and radio inputs.
  // This approach works across all browsers, whereas `change` does not fire
  // until `blur` in IE8.
  return (
    elem.nodeName === 'INPUT' &&
    (elem.type === 'checkbox' || elem.type === 'radio')
  );
}

function getTargetIDForClickEvent(
    topLevelType,
    topLevelTarget,
    topLevelTargetID) {
  if (topLevelType === topLevelTypes.topClick) {
    return topLevelTargetID;
  }
}

/**
 * This plugin creates an `onChange` event that normalizes change events
 * across form elements. This event fires at a time when it's possible to
 * change the element's value without seeing a flicker.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - select
 */
var ChangeEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    var getTargetIDFunc, handleEventFunc;
    if (shouldUseChangeEvent(topLevelTarget)) {
      if (doesChangeEventBubble) {
        getTargetIDFunc = getTargetIDForChangeEvent;
      } else {
        handleEventFunc = handleEventsForChangeEventIE8;
      }
    } else if (isTextInputElement(topLevelTarget)) {
      if (isInputEventSupported) {
        getTargetIDFunc = getTargetIDForInputEvent;
      } else {
        getTargetIDFunc = getTargetIDForInputEventIE;
        handleEventFunc = handleEventsForInputEventIE;
      }
    } else if (shouldUseClickEvent(topLevelTarget)) {
      getTargetIDFunc = getTargetIDForClickEvent;
    }

    if (getTargetIDFunc) {
      var targetID = getTargetIDFunc(
        topLevelType,
        topLevelTarget,
        topLevelTargetID
      );
      if (targetID) {
        var event = SyntheticEvent.getPooled(
          eventTypes.change,
          targetID,
          nativeEvent
        );
        EventPropagators.accumulateTwoPhaseDispatches(event);
        return event;
      }
    }

    if (handleEventFunc) {
      handleEventFunc(
        topLevelType,
        topLevelTarget,
        topLevelTargetID
      );
    }
  }

};

module.exports = ChangeEventPlugin;

},{"./EventConstants":28,"./EventPluginHub":30,"./EventPropagators":33,"./ExecutionEnvironment":34,"./ReactUpdates":92,"./SyntheticEvent":100,"./isEventSupported":140,"./isTextInputElement":142,"./keyOf":146}],20:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ClientReactRootIndex
 * @typechecks
 */

"use strict";

var nextReactRootIndex = 0;

var ClientReactRootIndex = {
  createReactRootIndex: function() {
    return nextReactRootIndex++;
  }
};

module.exports = ClientReactRootIndex;

},{}],21:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule CompositionEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var ReactInputSelection = require("./ReactInputSelection");
var SyntheticCompositionEvent = require("./SyntheticCompositionEvent");

var getTextContentAccessor = require("./getTextContentAccessor");
var keyOf = require("./keyOf");

var END_KEYCODES = [9, 13, 27, 32]; // Tab, Return, Esc, Space
var START_KEYCODE = 229;

var useCompositionEvent = (
  ExecutionEnvironment.canUseDOM &&
  'CompositionEvent' in window
);

// In IE9+, we have access to composition events, but the data supplied
// by the native compositionend event may be incorrect. In Korean, for example,
// the compositionend event contains only one character regardless of
// how many characters have been composed since compositionstart.
// We therefore use the fallback data while still using the native
// events as triggers.
var useFallbackData = (
  !useCompositionEvent ||
  (
    'documentMode' in document &&
    document.documentMode > 8 &&
    document.documentMode <= 11
  )
);

var topLevelTypes = EventConstants.topLevelTypes;
var currentComposition = null;

// Events and their corresponding property names.
var eventTypes = {
  compositionEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCompositionEnd: null}),
      captured: keyOf({onCompositionEndCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topCompositionEnd,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyPress,
      topLevelTypes.topKeyUp,
      topLevelTypes.topMouseDown
    ]
  },
  compositionStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCompositionStart: null}),
      captured: keyOf({onCompositionStartCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topCompositionStart,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyPress,
      topLevelTypes.topKeyUp,
      topLevelTypes.topMouseDown
    ]
  },
  compositionUpdate: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCompositionUpdate: null}),
      captured: keyOf({onCompositionUpdateCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topCompositionUpdate,
      topLevelTypes.topKeyDown,
      topLevelTypes.topKeyPress,
      topLevelTypes.topKeyUp,
      topLevelTypes.topMouseDown
    ]
  }
};

/**
 * Translate native top level events into event types.
 *
 * @param {string} topLevelType
 * @return {object}
 */
function getCompositionEventType(topLevelType) {
  switch (topLevelType) {
    case topLevelTypes.topCompositionStart:
      return eventTypes.compositionStart;
    case topLevelTypes.topCompositionEnd:
      return eventTypes.compositionEnd;
    case topLevelTypes.topCompositionUpdate:
      return eventTypes.compositionUpdate;
  }
}

/**
 * Does our fallback best-guess model think this event signifies that
 * composition has begun?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackStart(topLevelType, nativeEvent) {
  return (
    topLevelType === topLevelTypes.topKeyDown &&
    nativeEvent.keyCode === START_KEYCODE
  );
}

/**
 * Does our fallback mode think that this event is the end of composition?
 *
 * @param {string} topLevelType
 * @param {object} nativeEvent
 * @return {boolean}
 */
function isFallbackEnd(topLevelType, nativeEvent) {
  switch (topLevelType) {
    case topLevelTypes.topKeyUp:
      // Command keys insert or clear IME input.
      return (END_KEYCODES.indexOf(nativeEvent.keyCode) !== -1);
    case topLevelTypes.topKeyDown:
      // Expect IME keyCode on each keydown. If we get any other
      // code we must have exited earlier.
      return (nativeEvent.keyCode !== START_KEYCODE);
    case topLevelTypes.topKeyPress:
    case topLevelTypes.topMouseDown:
    case topLevelTypes.topBlur:
      // Events are not possible without cancelling IME.
      return true;
    default:
      return false;
  }
}

/**
 * Helper class stores information about selection and document state
 * so we can figure out what changed at a later date.
 *
 * @param {DOMEventTarget} root
 */
function FallbackCompositionState(root) {
  this.root = root;
  this.startSelection = ReactInputSelection.getSelection(root);
  this.startValue = this.getText();
}

/**
 * Get current text of input.
 *
 * @return {string}
 */
FallbackCompositionState.prototype.getText = function() {
  return this.root.value || this.root[getTextContentAccessor()];
};

/**
 * Text that has changed since the start of composition.
 *
 * @return {string}
 */
FallbackCompositionState.prototype.getData = function() {
  var endValue = this.getText();
  var prefixLength = this.startSelection.start;
  var suffixLength = this.startValue.length - this.startSelection.end;

  return endValue.substr(
    prefixLength,
    endValue.length - suffixLength - prefixLength
  );
};

/**
 * This plugin creates `onCompositionStart`, `onCompositionUpdate` and
 * `onCompositionEnd` events on inputs, textareas and contentEditable
 * nodes.
 */
var CompositionEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    var eventType;
    var data;

    if (useCompositionEvent) {
      eventType = getCompositionEventType(topLevelType);
    } else if (!currentComposition) {
      if (isFallbackStart(topLevelType, nativeEvent)) {
        eventType = eventTypes.compositionStart;
      }
    } else if (isFallbackEnd(topLevelType, nativeEvent)) {
      eventType = eventTypes.compositionEnd;
    }

    if (useFallbackData) {
      // The current composition is stored statically and must not be
      // overwritten while composition continues.
      if (!currentComposition && eventType === eventTypes.compositionStart) {
        currentComposition = new FallbackCompositionState(topLevelTarget);
      } else if (eventType === eventTypes.compositionEnd) {
        if (currentComposition) {
          data = currentComposition.getData();
          currentComposition = null;
        }
      }
    }

    if (eventType) {
      var event = SyntheticCompositionEvent.getPooled(
        eventType,
        topLevelTargetID,
        nativeEvent
      );
      if (data) {
        // Inject data generated from fallback path into the synthetic event.
        // This matches the property of native CompositionEventInterface.
        event.data = data;
      }
      EventPropagators.accumulateTwoPhaseDispatches(event);
      return event;
    }
  }
};

module.exports = CompositionEventPlugin;

},{"./EventConstants":28,"./EventPropagators":33,"./ExecutionEnvironment":34,"./ReactInputSelection":72,"./SyntheticCompositionEvent":98,"./getTextContentAccessor":134,"./keyOf":146}],22:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMChildrenOperations
 * @typechecks static-only
 */

"use strict";

var Danger = require("./Danger");
var ReactMultiChildUpdateTypes = require("./ReactMultiChildUpdateTypes");

var getTextContentAccessor = require("./getTextContentAccessor");
var invariant = require("./invariant");

/**
 * The DOM property to use when setting text content.
 *
 * @type {string}
 * @private
 */
var textContentAccessor = getTextContentAccessor();

/**
 * Inserts `childNode` as a child of `parentNode` at the `index`.
 *
 * @param {DOMElement} parentNode Parent node in which to insert.
 * @param {DOMElement} childNode Child node to insert.
 * @param {number} index Index at which to insert the child.
 * @internal
 */
function insertChildAt(parentNode, childNode, index) {
  // By exploiting arrays returning `undefined` for an undefined index, we can
  // rely exclusively on `insertBefore(node, null)` instead of also using
  // `appendChild(node)`. However, using `undefined` is not allowed by all
  // browsers so we must replace it with `null`.
  parentNode.insertBefore(
    childNode,
    parentNode.childNodes[index] || null
  );
}

var updateTextContent;
if (textContentAccessor === 'textContent') {
  /**
   * Sets the text content of `node` to `text`.
   *
   * @param {DOMElement} node Node to change
   * @param {string} text New text content
   */
  updateTextContent = function(node, text) {
    node.textContent = text;
  };
} else {
  /**
   * Sets the text content of `node` to `text`.
   *
   * @param {DOMElement} node Node to change
   * @param {string} text New text content
   */
  updateTextContent = function(node, text) {
    // In order to preserve newlines correctly, we can't use .innerText to set
    // the contents (see #1080), so we empty the element then append a text node
    while (node.firstChild) {
      node.removeChild(node.firstChild);
    }
    if (text) {
      var doc = node.ownerDocument || document;
      node.appendChild(doc.createTextNode(text));
    }
  };
}

/**
 * Operations for updating with DOM children.
 */
var DOMChildrenOperations = {

  dangerouslyReplaceNodeWithMarkup: Danger.dangerouslyReplaceNodeWithMarkup,

  updateTextContent: updateTextContent,

  /**
   * Updates a component's children by processing a series of updates. The
   * update configurations are each expected to have a `parentNode` property.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markupList List of markup strings.
   * @internal
   */
  processUpdates: function(updates, markupList) {
    var update;
    // Mapping from parent IDs to initial child orderings.
    var initialChildren = null;
    // List of children that will be moved or removed.
    var updatedChildren = null;

    for (var i = 0; update = updates[i]; i++) {
      if (update.type === ReactMultiChildUpdateTypes.MOVE_EXISTING ||
          update.type === ReactMultiChildUpdateTypes.REMOVE_NODE) {
        var updatedIndex = update.fromIndex;
        var updatedChild = update.parentNode.childNodes[updatedIndex];
        var parentID = update.parentID;

        ("production" !== process.env.NODE_ENV ? invariant(
          updatedChild,
          'processUpdates(): Unable to find child %s of element. This ' +
          'probably means the DOM was unexpectedly mutated (e.g., by the ' +
          'browser), usually due to forgetting a <tbody> when using tables, ' +
          'nesting tags like <form>, <p>, or <a>, or using non-SVG elements '+
          'in an <svg> parent. Try inspecting the child nodes of the element ' +
          'with React ID `%s`.',
          updatedIndex,
          parentID
        ) : invariant(updatedChild));

        initialChildren = initialChildren || {};
        initialChildren[parentID] = initialChildren[parentID] || [];
        initialChildren[parentID][updatedIndex] = updatedChild;

        updatedChildren = updatedChildren || [];
        updatedChildren.push(updatedChild);
      }
    }

    var renderedMarkup = Danger.dangerouslyRenderMarkup(markupList);

    // Remove updated children first so that `toIndex` is consistent.
    if (updatedChildren) {
      for (var j = 0; j < updatedChildren.length; j++) {
        updatedChildren[j].parentNode.removeChild(updatedChildren[j]);
      }
    }

    for (var k = 0; update = updates[k]; k++) {
      switch (update.type) {
        case ReactMultiChildUpdateTypes.INSERT_MARKUP:
          insertChildAt(
            update.parentNode,
            renderedMarkup[update.markupIndex],
            update.toIndex
          );
          break;
        case ReactMultiChildUpdateTypes.MOVE_EXISTING:
          insertChildAt(
            update.parentNode,
            initialChildren[update.parentID][update.fromIndex],
            update.toIndex
          );
          break;
        case ReactMultiChildUpdateTypes.TEXT_CONTENT:
          updateTextContent(
            update.parentNode,
            update.textContent
          );
          break;
        case ReactMultiChildUpdateTypes.REMOVE_NODE:
          // Already removed by the for-loop above.
          break;
      }
    }
  }

};

module.exports = DOMChildrenOperations;

},{"./Danger":25,"./ReactMultiChildUpdateTypes":78,"./getTextContentAccessor":134,"./invariant":139}],23:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMProperty
 * @typechecks static-only
 */

/*jslint bitwise: true */

"use strict";

var invariant = require("./invariant");

function checkMask(value, bitmask) {
  return (value & bitmask) === bitmask;
}

var DOMPropertyInjection = {
  /**
   * Mapping from normalized, camelcased property names to a configuration that
   * specifies how the associated DOM property should be accessed or rendered.
   */
  MUST_USE_ATTRIBUTE: 0x1,
  MUST_USE_PROPERTY: 0x2,
  HAS_SIDE_EFFECTS: 0x4,
  HAS_BOOLEAN_VALUE: 0x8,
  HAS_NUMERIC_VALUE: 0x10,
  HAS_POSITIVE_NUMERIC_VALUE: 0x20 | 0x10,
  HAS_OVERLOADED_BOOLEAN_VALUE: 0x40,

  /**
   * Inject some specialized knowledge about the DOM. This takes a config object
   * with the following properties:
   *
   * isCustomAttribute: function that given an attribute name will return true
   * if it can be inserted into the DOM verbatim. Useful for data-* or aria-*
   * attributes where it's impossible to enumerate all of the possible
   * attribute names,
   *
   * Properties: object mapping DOM property name to one of the
   * DOMPropertyInjection constants or null. If your attribute isn't in here,
   * it won't get written to the DOM.
   *
   * DOMAttributeNames: object mapping React attribute name to the DOM
   * attribute name. Attribute names not specified use the **lowercase**
   * normalized name.
   *
   * DOMPropertyNames: similar to DOMAttributeNames but for DOM properties.
   * Property names not specified use the normalized name.
   *
   * DOMMutationMethods: Properties that require special mutation methods. If
   * `value` is undefined, the mutation method should unset the property.
   *
   * @param {object} domPropertyConfig the config as described above.
   */
  injectDOMPropertyConfig: function(domPropertyConfig) {
    var Properties = domPropertyConfig.Properties || {};
    var DOMAttributeNames = domPropertyConfig.DOMAttributeNames || {};
    var DOMPropertyNames = domPropertyConfig.DOMPropertyNames || {};
    var DOMMutationMethods = domPropertyConfig.DOMMutationMethods || {};

    if (domPropertyConfig.isCustomAttribute) {
      DOMProperty._isCustomAttributeFunctions.push(
        domPropertyConfig.isCustomAttribute
      );
    }

    for (var propName in Properties) {
      ("production" !== process.env.NODE_ENV ? invariant(
        !DOMProperty.isStandardName.hasOwnProperty(propName),
        'injectDOMPropertyConfig(...): You\'re trying to inject DOM property ' +
        '\'%s\' which has already been injected. You may be accidentally ' +
        'injecting the same DOM property config twice, or you may be ' +
        'injecting two configs that have conflicting property names.',
        propName
      ) : invariant(!DOMProperty.isStandardName.hasOwnProperty(propName)));

      DOMProperty.isStandardName[propName] = true;

      var lowerCased = propName.toLowerCase();
      DOMProperty.getPossibleStandardName[lowerCased] = propName;

      if (DOMAttributeNames.hasOwnProperty(propName)) {
        var attributeName = DOMAttributeNames[propName];
        DOMProperty.getPossibleStandardName[attributeName] = propName;
        DOMProperty.getAttributeName[propName] = attributeName;
      } else {
        DOMProperty.getAttributeName[propName] = lowerCased;
      }

      DOMProperty.getPropertyName[propName] =
        DOMPropertyNames.hasOwnProperty(propName) ?
          DOMPropertyNames[propName] :
          propName;

      if (DOMMutationMethods.hasOwnProperty(propName)) {
        DOMProperty.getMutationMethod[propName] = DOMMutationMethods[propName];
      } else {
        DOMProperty.getMutationMethod[propName] = null;
      }

      var propConfig = Properties[propName];
      DOMProperty.mustUseAttribute[propName] =
        checkMask(propConfig, DOMPropertyInjection.MUST_USE_ATTRIBUTE);
      DOMProperty.mustUseProperty[propName] =
        checkMask(propConfig, DOMPropertyInjection.MUST_USE_PROPERTY);
      DOMProperty.hasSideEffects[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_SIDE_EFFECTS);
      DOMProperty.hasBooleanValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_BOOLEAN_VALUE);
      DOMProperty.hasNumericValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_NUMERIC_VALUE);
      DOMProperty.hasPositiveNumericValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_POSITIVE_NUMERIC_VALUE);
      DOMProperty.hasOverloadedBooleanValue[propName] =
        checkMask(propConfig, DOMPropertyInjection.HAS_OVERLOADED_BOOLEAN_VALUE);

      ("production" !== process.env.NODE_ENV ? invariant(
        !DOMProperty.mustUseAttribute[propName] ||
          !DOMProperty.mustUseProperty[propName],
        'DOMProperty: Cannot require using both attribute and property: %s',
        propName
      ) : invariant(!DOMProperty.mustUseAttribute[propName] ||
        !DOMProperty.mustUseProperty[propName]));
      ("production" !== process.env.NODE_ENV ? invariant(
        DOMProperty.mustUseProperty[propName] ||
          !DOMProperty.hasSideEffects[propName],
        'DOMProperty: Properties that have side effects must use property: %s',
        propName
      ) : invariant(DOMProperty.mustUseProperty[propName] ||
        !DOMProperty.hasSideEffects[propName]));
      ("production" !== process.env.NODE_ENV ? invariant(
        !!DOMProperty.hasBooleanValue[propName] +
          !!DOMProperty.hasNumericValue[propName] +
          !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1,
        'DOMProperty: Value can be one of boolean, overloaded boolean, or ' +
        'numeric value, but not a combination: %s',
        propName
      ) : invariant(!!DOMProperty.hasBooleanValue[propName] +
        !!DOMProperty.hasNumericValue[propName] +
        !!DOMProperty.hasOverloadedBooleanValue[propName] <= 1));
    }
  }
};
var defaultValueCache = {};

/**
 * DOMProperty exports lookup objects that can be used like functions:
 *
 *   > DOMProperty.isValid['id']
 *   true
 *   > DOMProperty.isValid['foobar']
 *   undefined
 *
 * Although this may be confusing, it performs better in general.
 *
 * @see http://jsperf.com/key-exists
 * @see http://jsperf.com/key-missing
 */
var DOMProperty = {

  ID_ATTRIBUTE_NAME: 'data-reactid',

  /**
   * Checks whether a property name is a standard property.
   * @type {Object}
   */
  isStandardName: {},

  /**
   * Mapping from lowercase property names to the properly cased version, used
   * to warn in the case of missing properties.
   * @type {Object}
   */
  getPossibleStandardName: {},

  /**
   * Mapping from normalized names to attribute names that differ. Attribute
   * names are used when rendering markup or with `*Attribute()`.
   * @type {Object}
   */
  getAttributeName: {},

  /**
   * Mapping from normalized names to properties on DOM node instances.
   * (This includes properties that mutate due to external factors.)
   * @type {Object}
   */
  getPropertyName: {},

  /**
   * Mapping from normalized names to mutation methods. This will only exist if
   * mutation cannot be set simply by the property or `setAttribute()`.
   * @type {Object}
   */
  getMutationMethod: {},

  /**
   * Whether the property must be accessed and mutated as an object property.
   * @type {Object}
   */
  mustUseAttribute: {},

  /**
   * Whether the property must be accessed and mutated using `*Attribute()`.
   * (This includes anything that fails `<propName> in <element>`.)
   * @type {Object}
   */
  mustUseProperty: {},

  /**
   * Whether or not setting a value causes side effects such as triggering
   * resources to be loaded or text selection changes. We must ensure that
   * the value is only set if it has changed.
   * @type {Object}
   */
  hasSideEffects: {},

  /**
   * Whether the property should be removed when set to a falsey value.
   * @type {Object}
   */
  hasBooleanValue: {},

  /**
   * Whether the property must be numeric or parse as a
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */
  hasNumericValue: {},

  /**
   * Whether the property must be positive numeric or parse as a positive
   * numeric and should be removed when set to a falsey value.
   * @type {Object}
   */
  hasPositiveNumericValue: {},

  /**
   * Whether the property can be used as a flag as well as with a value. Removed
   * when strictly equal to false; present without a value when strictly equal
   * to true; present with a value otherwise.
   * @type {Object}
   */
  hasOverloadedBooleanValue: {},

  /**
   * All of the isCustomAttribute() functions that have been injected.
   */
  _isCustomAttributeFunctions: [],

  /**
   * Checks whether a property name is a custom attribute.
   * @method
   */
  isCustomAttribute: function(attributeName) {
    for (var i = 0; i < DOMProperty._isCustomAttributeFunctions.length; i++) {
      var isCustomAttributeFn = DOMProperty._isCustomAttributeFunctions[i];
      if (isCustomAttributeFn(attributeName)) {
        return true;
      }
    }
    return false;
  },

  /**
   * Returns the default property value for a DOM property (i.e., not an
   * attribute). Most default values are '' or false, but not all. Worse yet,
   * some (in particular, `type`) vary depending on the type of element.
   *
   * TODO: Is it better to grab all the possible properties when creating an
   * element to avoid having to create the same element twice?
   */
  getDefaultValueForProperty: function(nodeName, prop) {
    var nodeDefaults = defaultValueCache[nodeName];
    var testElement;
    if (!nodeDefaults) {
      defaultValueCache[nodeName] = nodeDefaults = {};
    }
    if (!(prop in nodeDefaults)) {
      testElement = document.createElement(nodeName);
      nodeDefaults[prop] = testElement[prop];
    }
    return nodeDefaults[prop];
  },

  injection: DOMPropertyInjection
};

module.exports = DOMProperty;

},{"./invariant":139}],24:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DOMPropertyOperations
 * @typechecks static-only
 */

"use strict";

var DOMProperty = require("./DOMProperty");

var escapeTextForBrowser = require("./escapeTextForBrowser");
var memoizeStringOnly = require("./memoizeStringOnly");
var warning = require("./warning");

function shouldIgnoreValue(name, value) {
  return value == null ||
    (DOMProperty.hasBooleanValue[name] && !value) ||
    (DOMProperty.hasNumericValue[name] && isNaN(value)) ||
    (DOMProperty.hasPositiveNumericValue[name] && (value < 1)) ||
    (DOMProperty.hasOverloadedBooleanValue[name] && value === false);
}

var processAttributeNameAndPrefix = memoizeStringOnly(function(name) {
  return escapeTextForBrowser(name) + '="';
});

if ("production" !== process.env.NODE_ENV) {
  var reactProps = {
    children: true,
    dangerouslySetInnerHTML: true,
    key: true,
    ref: true
  };
  var warnedProperties = {};

  var warnUnknownProperty = function(name) {
    if (reactProps.hasOwnProperty(name) && reactProps[name] ||
        warnedProperties.hasOwnProperty(name) && warnedProperties[name]) {
      return;
    }

    warnedProperties[name] = true;
    var lowerCasedName = name.toLowerCase();

    // data-* attributes should be lowercase; suggest the lowercase version
    var standardName = (
      DOMProperty.isCustomAttribute(lowerCasedName) ?
        lowerCasedName :
      DOMProperty.getPossibleStandardName.hasOwnProperty(lowerCasedName) ?
        DOMProperty.getPossibleStandardName[lowerCasedName] :
        null
    );

    // For now, only warn when we have a suggested correction. This prevents
    // logging too much when using transferPropsTo.
    ("production" !== process.env.NODE_ENV ? warning(
      standardName == null,
      'Unknown DOM property ' + name + '. Did you mean ' + standardName + '?'
    ) : null);

  };
}

/**
 * Operations for dealing with DOM properties.
 */
var DOMPropertyOperations = {

  /**
   * Creates markup for the ID property.
   *
   * @param {string} id Unescaped ID.
   * @return {string} Markup string.
   */
  createMarkupForID: function(id) {
    return processAttributeNameAndPrefix(DOMProperty.ID_ATTRIBUTE_NAME) +
      escapeTextForBrowser(id) + '"';
  },

  /**
   * Creates markup for a property.
   *
   * @param {string} name
   * @param {*} value
   * @return {?string} Markup string, or null if the property was invalid.
   */
  createMarkupForProperty: function(name, value) {
    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
        DOMProperty.isStandardName[name]) {
      if (shouldIgnoreValue(name, value)) {
        return '';
      }
      var attributeName = DOMProperty.getAttributeName[name];
      if (DOMProperty.hasBooleanValue[name] ||
          (DOMProperty.hasOverloadedBooleanValue[name] && value === true)) {
        return escapeTextForBrowser(attributeName);
      }
      return processAttributeNameAndPrefix(attributeName) +
        escapeTextForBrowser(value) + '"';
    } else if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        return '';
      }
      return processAttributeNameAndPrefix(name) +
        escapeTextForBrowser(value) + '"';
    } else if ("production" !== process.env.NODE_ENV) {
      warnUnknownProperty(name);
    }
    return null;
  },

  /**
   * Sets the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   * @param {*} value
   */
  setValueForProperty: function(node, name, value) {
    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
        DOMProperty.isStandardName[name]) {
      var mutationMethod = DOMProperty.getMutationMethod[name];
      if (mutationMethod) {
        mutationMethod(node, value);
      } else if (shouldIgnoreValue(name, value)) {
        this.deleteValueForProperty(node, name);
      } else if (DOMProperty.mustUseAttribute[name]) {
        // `setAttribute` with objects becomes only `[object]` in IE8/9,
        // ('' + value) makes it output the correct toString()-value.
        node.setAttribute(DOMProperty.getAttributeName[name], '' + value);
      } else {
        var propName = DOMProperty.getPropertyName[name];
        // Must explicitly cast values for HAS_SIDE_EFFECTS-properties to the
        // property type before comparing; only `value` does and is string.
        if (!DOMProperty.hasSideEffects[name] ||
            ('' + node[propName]) !== ('' + value)) {
          // Contrary to `setAttribute`, object properties are properly
          // `toString`ed by IE8/9.
          node[propName] = value;
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      if (value == null) {
        node.removeAttribute(name);
      } else {
        node.setAttribute(name, '' + value);
      }
    } else if ("production" !== process.env.NODE_ENV) {
      warnUnknownProperty(name);
    }
  },

  /**
   * Deletes the value for a property on a node.
   *
   * @param {DOMElement} node
   * @param {string} name
   */
  deleteValueForProperty: function(node, name) {
    if (DOMProperty.isStandardName.hasOwnProperty(name) &&
        DOMProperty.isStandardName[name]) {
      var mutationMethod = DOMProperty.getMutationMethod[name];
      if (mutationMethod) {
        mutationMethod(node, undefined);
      } else if (DOMProperty.mustUseAttribute[name]) {
        node.removeAttribute(DOMProperty.getAttributeName[name]);
      } else {
        var propName = DOMProperty.getPropertyName[name];
        var defaultValue = DOMProperty.getDefaultValueForProperty(
          node.nodeName,
          propName
        );
        if (!DOMProperty.hasSideEffects[name] ||
            ('' + node[propName]) !== defaultValue) {
          node[propName] = defaultValue;
        }
      }
    } else if (DOMProperty.isCustomAttribute(name)) {
      node.removeAttribute(name);
    } else if ("production" !== process.env.NODE_ENV) {
      warnUnknownProperty(name);
    }
  }

};

module.exports = DOMPropertyOperations;

},{"./DOMProperty":23,"./escapeTextForBrowser":122,"./memoizeStringOnly":148,"./warning":158}],25:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Danger
 * @typechecks static-only
 */

/*jslint evil: true, sub: true */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var createNodesFromMarkup = require("./createNodesFromMarkup");
var emptyFunction = require("./emptyFunction");
var getMarkupWrap = require("./getMarkupWrap");
var invariant = require("./invariant");

var OPEN_TAG_NAME_EXP = /^(<[^ \/>]+)/;
var RESULT_INDEX_ATTR = 'data-danger-index';

/**
 * Extracts the `nodeName` from a string of markup.
 *
 * NOTE: Extracting the `nodeName` does not require a regular expression match
 * because we make assumptions about React-generated markup (i.e. there are no
 * spaces surrounding the opening tag and there is at least one attribute).
 *
 * @param {string} markup String of markup.
 * @return {string} Node name of the supplied markup.
 * @see http://jsperf.com/extract-nodename
 */
function getNodeName(markup) {
  return markup.substring(1, markup.indexOf(' '));
}

var Danger = {

  /**
   * Renders markup into an array of nodes. The markup is expected to render
   * into a list of root nodes. Also, the length of `resultList` and
   * `markupList` should be the same.
   *
   * @param {array<string>} markupList List of markup strings to render.
   * @return {array<DOMElement>} List of rendered nodes.
   * @internal
   */
  dangerouslyRenderMarkup: function(markupList) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ExecutionEnvironment.canUseDOM,
      'dangerouslyRenderMarkup(...): Cannot render markup in a worker ' +
      'thread. Make sure `window` and `document` are available globally ' +
      'before requiring React when unit testing or use ' +
      'React.renderToString for server rendering.'
    ) : invariant(ExecutionEnvironment.canUseDOM));
    var nodeName;
    var markupByNodeName = {};
    // Group markup by `nodeName` if a wrap is necessary, else by '*'.
    for (var i = 0; i < markupList.length; i++) {
      ("production" !== process.env.NODE_ENV ? invariant(
        markupList[i],
        'dangerouslyRenderMarkup(...): Missing markup.'
      ) : invariant(markupList[i]));
      nodeName = getNodeName(markupList[i]);
      nodeName = getMarkupWrap(nodeName) ? nodeName : '*';
      markupByNodeName[nodeName] = markupByNodeName[nodeName] || [];
      markupByNodeName[nodeName][i] = markupList[i];
    }
    var resultList = [];
    var resultListAssignmentCount = 0;
    for (nodeName in markupByNodeName) {
      if (!markupByNodeName.hasOwnProperty(nodeName)) {
        continue;
      }
      var markupListByNodeName = markupByNodeName[nodeName];

      // This for-in loop skips the holes of the sparse array. The order of
      // iteration should follow the order of assignment, which happens to match
      // numerical index order, but we don't rely on that.
      for (var resultIndex in markupListByNodeName) {
        if (markupListByNodeName.hasOwnProperty(resultIndex)) {
          var markup = markupListByNodeName[resultIndex];

          // Push the requested markup with an additional RESULT_INDEX_ATTR
          // attribute.  If the markup does not start with a < character, it
          // will be discarded below (with an appropriate console.error).
          markupListByNodeName[resultIndex] = markup.replace(
            OPEN_TAG_NAME_EXP,
            // This index will be parsed back out below.
            '$1 ' + RESULT_INDEX_ATTR + '="' + resultIndex + '" '
          );
        }
      }

      // Render each group of markup with similar wrapping `nodeName`.
      var renderNodes = createNodesFromMarkup(
        markupListByNodeName.join(''),
        emptyFunction // Do nothing special with <script> tags.
      );

      for (i = 0; i < renderNodes.length; ++i) {
        var renderNode = renderNodes[i];
        if (renderNode.hasAttribute &&
            renderNode.hasAttribute(RESULT_INDEX_ATTR)) {

          resultIndex = +renderNode.getAttribute(RESULT_INDEX_ATTR);
          renderNode.removeAttribute(RESULT_INDEX_ATTR);

          ("production" !== process.env.NODE_ENV ? invariant(
            !resultList.hasOwnProperty(resultIndex),
            'Danger: Assigning to an already-occupied result index.'
          ) : invariant(!resultList.hasOwnProperty(resultIndex)));

          resultList[resultIndex] = renderNode;

          // This should match resultList.length and markupList.length when
          // we're done.
          resultListAssignmentCount += 1;

        } else if ("production" !== process.env.NODE_ENV) {
          console.error(
            "Danger: Discarding unexpected node:",
            renderNode
          );
        }
      }
    }

    // Although resultList was populated out of order, it should now be a dense
    // array.
    ("production" !== process.env.NODE_ENV ? invariant(
      resultListAssignmentCount === resultList.length,
      'Danger: Did not assign to every index of resultList.'
    ) : invariant(resultListAssignmentCount === resultList.length));

    ("production" !== process.env.NODE_ENV ? invariant(
      resultList.length === markupList.length,
      'Danger: Expected markup to render %s nodes, but rendered %s.',
      markupList.length,
      resultList.length
    ) : invariant(resultList.length === markupList.length));

    return resultList;
  },

  /**
   * Replaces a node with a string of markup at its current position within its
   * parent. The markup must render into a single root node.
   *
   * @param {DOMElement} oldChild Child node to replace.
   * @param {string} markup Markup to render in place of the child node.
   * @internal
   */
  dangerouslyReplaceNodeWithMarkup: function(oldChild, markup) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ExecutionEnvironment.canUseDOM,
      'dangerouslyReplaceNodeWithMarkup(...): Cannot render markup in a ' +
      'worker thread. Make sure `window` and `document` are available ' +
      'globally before requiring React when unit testing or use ' +
      'React.renderToString for server rendering.'
    ) : invariant(ExecutionEnvironment.canUseDOM));
    ("production" !== process.env.NODE_ENV ? invariant(markup, 'dangerouslyReplaceNodeWithMarkup(...): Missing markup.') : invariant(markup));
    ("production" !== process.env.NODE_ENV ? invariant(
      oldChild.tagName.toLowerCase() !== 'html',
      'dangerouslyReplaceNodeWithMarkup(...): Cannot replace markup of the ' +
      '<html> node. This is because browser quirks make this unreliable ' +
      'and/or slow. If you want to render to the root you must use ' +
      'server rendering. See renderComponentToString().'
    ) : invariant(oldChild.tagName.toLowerCase() !== 'html'));

    var newChild = createNodesFromMarkup(markup, emptyFunction)[0];
    oldChild.parentNode.replaceChild(newChild, oldChild);
  }

};

module.exports = Danger;

},{"./ExecutionEnvironment":34,"./createNodesFromMarkup":117,"./emptyFunction":120,"./getMarkupWrap":131,"./invariant":139}],26:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule DefaultEventPluginOrder
 */

"use strict";

 var keyOf = require("./keyOf");

/**
 * Module that is injectable into `EventPluginHub`, that specifies a
 * deterministic ordering of `EventPlugin`s. A convenient way to reason about
 * plugins, without having to package every one of them. This is better than
 * having plugins be ordered in the same order that they are injected because
 * that ordering would be influenced by the packaging order.
 * `ResponderEventPlugin` must occur before `SimpleEventPlugin` so that
 * preventing default on events is convenient in `SimpleEventPlugin` handlers.
 */
var DefaultEventPluginOrder = [
  keyOf({ResponderEventPlugin: null}),
  keyOf({SimpleEventPlugin: null}),
  keyOf({TapEventPlugin: null}),
  keyOf({EnterLeaveEventPlugin: null}),
  keyOf({ChangeEventPlugin: null}),
  keyOf({SelectEventPlugin: null}),
  keyOf({CompositionEventPlugin: null}),
  keyOf({BeforeInputEventPlugin: null}),
  keyOf({AnalyticsEventPlugin: null}),
  keyOf({MobileSafariClickEventPlugin: null})
];

module.exports = DefaultEventPluginOrder;

},{"./keyOf":146}],27:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EnterLeaveEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var SyntheticMouseEvent = require("./SyntheticMouseEvent");

var ReactMount = require("./ReactMount");
var keyOf = require("./keyOf");

var topLevelTypes = EventConstants.topLevelTypes;
var getFirstReactDOM = ReactMount.getFirstReactDOM;

var eventTypes = {
  mouseEnter: {
    registrationName: keyOf({onMouseEnter: null}),
    dependencies: [
      topLevelTypes.topMouseOut,
      topLevelTypes.topMouseOver
    ]
  },
  mouseLeave: {
    registrationName: keyOf({onMouseLeave: null}),
    dependencies: [
      topLevelTypes.topMouseOut,
      topLevelTypes.topMouseOver
    ]
  }
};

var extractedEvents = [null, null];

var EnterLeaveEventPlugin = {

  eventTypes: eventTypes,

  /**
   * For almost every interaction we care about, there will be both a top-level
   * `mouseover` and `mouseout` event that occurs. Only use `mouseout` so that
   * we do not extract duplicate events. However, moving the mouse into the
   * browser from outside will not fire a `mouseout` event. In this case, we use
   * the `mouseover` top-level event.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    if (topLevelType === topLevelTypes.topMouseOver &&
        (nativeEvent.relatedTarget || nativeEvent.fromElement)) {
      return null;
    }
    if (topLevelType !== topLevelTypes.topMouseOut &&
        topLevelType !== topLevelTypes.topMouseOver) {
      // Must not be a mouse in or mouse out - ignoring.
      return null;
    }

    var win;
    if (topLevelTarget.window === topLevelTarget) {
      // `topLevelTarget` is probably a window object.
      win = topLevelTarget;
    } else {
      // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
      var doc = topLevelTarget.ownerDocument;
      if (doc) {
        win = doc.defaultView || doc.parentWindow;
      } else {
        win = window;
      }
    }

    var from, to;
    if (topLevelType === topLevelTypes.topMouseOut) {
      from = topLevelTarget;
      to =
        getFirstReactDOM(nativeEvent.relatedTarget || nativeEvent.toElement) ||
        win;
    } else {
      from = win;
      to = topLevelTarget;
    }

    if (from === to) {
      // Nothing pertains to our managed components.
      return null;
    }

    var fromID = from ? ReactMount.getID(from) : '';
    var toID = to ? ReactMount.getID(to) : '';

    var leave = SyntheticMouseEvent.getPooled(
      eventTypes.mouseLeave,
      fromID,
      nativeEvent
    );
    leave.type = 'mouseleave';
    leave.target = from;
    leave.relatedTarget = to;

    var enter = SyntheticMouseEvent.getPooled(
      eventTypes.mouseEnter,
      toID,
      nativeEvent
    );
    enter.type = 'mouseenter';
    enter.target = to;
    enter.relatedTarget = from;

    EventPropagators.accumulateEnterLeaveDispatches(leave, enter, fromID, toID);

    extractedEvents[0] = leave;
    extractedEvents[1] = enter;

    return extractedEvents;
  }

};

module.exports = EnterLeaveEventPlugin;

},{"./EventConstants":28,"./EventPropagators":33,"./ReactMount":76,"./SyntheticMouseEvent":104,"./keyOf":146}],28:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventConstants
 */

"use strict";

var keyMirror = require("./keyMirror");

var PropagationPhases = keyMirror({bubbled: null, captured: null});

/**
 * Types of raw signals from the browser caught at the top level.
 */
var topLevelTypes = keyMirror({
  topBlur: null,
  topChange: null,
  topClick: null,
  topCompositionEnd: null,
  topCompositionStart: null,
  topCompositionUpdate: null,
  topContextMenu: null,
  topCopy: null,
  topCut: null,
  topDoubleClick: null,
  topDrag: null,
  topDragEnd: null,
  topDragEnter: null,
  topDragExit: null,
  topDragLeave: null,
  topDragOver: null,
  topDragStart: null,
  topDrop: null,
  topError: null,
  topFocus: null,
  topInput: null,
  topKeyDown: null,
  topKeyPress: null,
  topKeyUp: null,
  topLoad: null,
  topMouseDown: null,
  topMouseMove: null,
  topMouseOut: null,
  topMouseOver: null,
  topMouseUp: null,
  topPaste: null,
  topReset: null,
  topScroll: null,
  topSelectionChange: null,
  topSubmit: null,
  topTextInput: null,
  topTouchCancel: null,
  topTouchEnd: null,
  topTouchMove: null,
  topTouchStart: null,
  topWheel: null
});

var EventConstants = {
  topLevelTypes: topLevelTypes,
  PropagationPhases: PropagationPhases
};

module.exports = EventConstants;

},{"./keyMirror":145}],29:[function(require,module,exports){
/**
 * Copyright 2013-2014 Facebook, Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *
 * @providesModule EventListener
 * @typechecks
 */

var emptyFunction = require("./emptyFunction");

/**
 * Upstream version of event listener. Does not take into account specific
 * nature of platform.
 */
var EventListener = {
  /**
   * Listen to DOM events during the bubble phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  listen: function(target, eventType, callback) {
    if (target.addEventListener) {
      target.addEventListener(eventType, callback, false);
      return {
        remove: function() {
          target.removeEventListener(eventType, callback, false);
        }
      };
    } else if (target.attachEvent) {
      target.attachEvent('on' + eventType, callback);
      return {
        remove: function() {
          target.detachEvent('on' + eventType, callback);
        }
      };
    }
  },

  /**
   * Listen to DOM events during the capture phase.
   *
   * @param {DOMEventTarget} target DOM element to register listener on.
   * @param {string} eventType Event type, e.g. 'click' or 'mouseover'.
   * @param {function} callback Callback function.
   * @return {object} Object with a `remove` method.
   */
  capture: function(target, eventType, callback) {
    if (!target.addEventListener) {
      if ("production" !== process.env.NODE_ENV) {
        console.error(
          'Attempted to listen to events during the capture phase on a ' +
          'browser that does not support the capture phase. Your application ' +
          'will not receive some events.'
        );
      }
      return {
        remove: emptyFunction
      };
    } else {
      target.addEventListener(eventType, callback, true);
      return {
        remove: function() {
          target.removeEventListener(eventType, callback, true);
        }
      };
    }
  },

  registerDefault: function() {}
};

module.exports = EventListener;

},{"./emptyFunction":120}],30:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginHub
 */

"use strict";

var EventPluginRegistry = require("./EventPluginRegistry");
var EventPluginUtils = require("./EventPluginUtils");

var accumulateInto = require("./accumulateInto");
var forEachAccumulated = require("./forEachAccumulated");
var invariant = require("./invariant");

/**
 * Internal store for event listeners
 */
var listenerBank = {};

/**
 * Internal queue of events that have accumulated their dispatches and are
 * waiting to have their dispatches executed.
 */
var eventQueue = null;

/**
 * Dispatches an event and releases it back into the pool, unless persistent.
 *
 * @param {?object} event Synthetic event to be dispatched.
 * @private
 */
var executeDispatchesAndRelease = function(event) {
  if (event) {
    var executeDispatch = EventPluginUtils.executeDispatch;
    // Plugins can provide custom behavior when dispatching events.
    var PluginModule = EventPluginRegistry.getPluginModuleForEvent(event);
    if (PluginModule && PluginModule.executeDispatch) {
      executeDispatch = PluginModule.executeDispatch;
    }
    EventPluginUtils.executeDispatchesInOrder(event, executeDispatch);

    if (!event.isPersistent()) {
      event.constructor.release(event);
    }
  }
};

/**
 * - `InstanceHandle`: [required] Module that performs logical traversals of DOM
 *   hierarchy given ids of the logical DOM elements involved.
 */
var InstanceHandle = null;

function validateInstanceHandle() {
  var invalid = !InstanceHandle||
    !InstanceHandle.traverseTwoPhase ||
    !InstanceHandle.traverseEnterLeave;
  if (invalid) {
    throw new Error('InstanceHandle not injected before use!');
  }
}

/**
 * This is a unified interface for event plugins to be installed and configured.
 *
 * Event plugins can implement the following properties:
 *
 *   `extractEvents` {function(string, DOMEventTarget, string, object): *}
 *     Required. When a top-level event is fired, this method is expected to
 *     extract synthetic events that will in turn be queued and dispatched.
 *
 *   `eventTypes` {object}
 *     Optional, plugins that fire events must publish a mapping of registration
 *     names that are used to register listeners. Values of this mapping must
 *     be objects that contain `registrationName` or `phasedRegistrationNames`.
 *
 *   `executeDispatch` {function(object, function, string)}
 *     Optional, allows plugins to override how an event gets dispatched. By
 *     default, the listener is simply invoked.
 *
 * Each plugin that is injected into `EventsPluginHub` is immediately operable.
 *
 * @public
 */
var EventPluginHub = {

  /**
   * Methods for injecting dependencies.
   */
  injection: {

    /**
     * @param {object} InjectedMount
     * @public
     */
    injectMount: EventPluginUtils.injection.injectMount,

    /**
     * @param {object} InjectedInstanceHandle
     * @public
     */
    injectInstanceHandle: function(InjectedInstanceHandle) {
      InstanceHandle = InjectedInstanceHandle;
      if ("production" !== process.env.NODE_ENV) {
        validateInstanceHandle();
      }
    },

    getInstanceHandle: function() {
      if ("production" !== process.env.NODE_ENV) {
        validateInstanceHandle();
      }
      return InstanceHandle;
    },

    /**
     * @param {array} InjectedEventPluginOrder
     * @public
     */
    injectEventPluginOrder: EventPluginRegistry.injectEventPluginOrder,

    /**
     * @param {object} injectedNamesToPlugins Map from names to plugin modules.
     */
    injectEventPluginsByName: EventPluginRegistry.injectEventPluginsByName

  },

  eventNameDispatchConfigs: EventPluginRegistry.eventNameDispatchConfigs,

  registrationNameModules: EventPluginRegistry.registrationNameModules,

  /**
   * Stores `listener` at `listenerBank[registrationName][id]`. Is idempotent.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {?function} listener The callback to store.
   */
  putListener: function(id, registrationName, listener) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !listener || typeof listener === 'function',
      'Expected %s listener to be a function, instead got type %s',
      registrationName, typeof listener
    ) : invariant(!listener || typeof listener === 'function'));

    var bankForRegistrationName =
      listenerBank[registrationName] || (listenerBank[registrationName] = {});
    bankForRegistrationName[id] = listener;
  },

  /**
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @return {?function} The stored callback.
   */
  getListener: function(id, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    return bankForRegistrationName && bankForRegistrationName[id];
  },

  /**
   * Deletes a listener from the registration bank.
   *
   * @param {string} id ID of the DOM element.
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   */
  deleteListener: function(id, registrationName) {
    var bankForRegistrationName = listenerBank[registrationName];
    if (bankForRegistrationName) {
      delete bankForRegistrationName[id];
    }
  },

  /**
   * Deletes all listeners for the DOM element with the supplied ID.
   *
   * @param {string} id ID of the DOM element.
   */
  deleteAllListeners: function(id) {
    for (var registrationName in listenerBank) {
      delete listenerBank[registrationName][id];
    }
  },

  /**
   * Allows registered plugins an opportunity to extract events from top-level
   * native browser events.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @internal
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    var events;
    var plugins = EventPluginRegistry.plugins;
    for (var i = 0, l = plugins.length; i < l; i++) {
      // Not every plugin in the ordering may be loaded at runtime.
      var possiblePlugin = plugins[i];
      if (possiblePlugin) {
        var extractedEvents = possiblePlugin.extractEvents(
          topLevelType,
          topLevelTarget,
          topLevelTargetID,
          nativeEvent
        );
        if (extractedEvents) {
          events = accumulateInto(events, extractedEvents);
        }
      }
    }
    return events;
  },

  /**
   * Enqueues a synthetic event that should be dispatched when
   * `processEventQueue` is invoked.
   *
   * @param {*} events An accumulation of synthetic events.
   * @internal
   */
  enqueueEvents: function(events) {
    if (events) {
      eventQueue = accumulateInto(eventQueue, events);
    }
  },

  /**
   * Dispatches all synthetic events on the event queue.
   *
   * @internal
   */
  processEventQueue: function() {
    // Set `eventQueue` to null before processing it so that we can tell if more
    // events get enqueued while processing.
    var processingEventQueue = eventQueue;
    eventQueue = null;
    forEachAccumulated(processingEventQueue, executeDispatchesAndRelease);
    ("production" !== process.env.NODE_ENV ? invariant(
      !eventQueue,
      'processEventQueue(): Additional events were enqueued while processing ' +
      'an event queue. Support for this has not yet been implemented.'
    ) : invariant(!eventQueue));
  },

  /**
   * These are needed for tests only. Do not use!
   */
  __purge: function() {
    listenerBank = {};
  },

  __getListenerBank: function() {
    return listenerBank;
  }

};

module.exports = EventPluginHub;

},{"./EventPluginRegistry":31,"./EventPluginUtils":32,"./accumulateInto":110,"./forEachAccumulated":125,"./invariant":139}],31:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginRegistry
 * @typechecks static-only
 */

"use strict";

var invariant = require("./invariant");

/**
 * Injectable ordering of event plugins.
 */
var EventPluginOrder = null;

/**
 * Injectable mapping from names to event plugin modules.
 */
var namesToPlugins = {};

/**
 * Recomputes the plugin list using the injected plugins and plugin ordering.
 *
 * @private
 */
function recomputePluginOrdering() {
  if (!EventPluginOrder) {
    // Wait until an `EventPluginOrder` is injected.
    return;
  }
  for (var pluginName in namesToPlugins) {
    var PluginModule = namesToPlugins[pluginName];
    var pluginIndex = EventPluginOrder.indexOf(pluginName);
    ("production" !== process.env.NODE_ENV ? invariant(
      pluginIndex > -1,
      'EventPluginRegistry: Cannot inject event plugins that do not exist in ' +
      'the plugin ordering, `%s`.',
      pluginName
    ) : invariant(pluginIndex > -1));
    if (EventPluginRegistry.plugins[pluginIndex]) {
      continue;
    }
    ("production" !== process.env.NODE_ENV ? invariant(
      PluginModule.extractEvents,
      'EventPluginRegistry: Event plugins must implement an `extractEvents` ' +
      'method, but `%s` does not.',
      pluginName
    ) : invariant(PluginModule.extractEvents));
    EventPluginRegistry.plugins[pluginIndex] = PluginModule;
    var publishedEvents = PluginModule.eventTypes;
    for (var eventName in publishedEvents) {
      ("production" !== process.env.NODE_ENV ? invariant(
        publishEventForPlugin(
          publishedEvents[eventName],
          PluginModule,
          eventName
        ),
        'EventPluginRegistry: Failed to publish event `%s` for plugin `%s`.',
        eventName,
        pluginName
      ) : invariant(publishEventForPlugin(
        publishedEvents[eventName],
        PluginModule,
        eventName
      )));
    }
  }
}

/**
 * Publishes an event so that it can be dispatched by the supplied plugin.
 *
 * @param {object} dispatchConfig Dispatch configuration for the event.
 * @param {object} PluginModule Plugin publishing the event.
 * @return {boolean} True if the event was successfully published.
 * @private
 */
function publishEventForPlugin(dispatchConfig, PluginModule, eventName) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName),
    'EventPluginHub: More than one plugin attempted to publish the same ' +
    'event name, `%s`.',
    eventName
  ) : invariant(!EventPluginRegistry.eventNameDispatchConfigs.hasOwnProperty(eventName)));
  EventPluginRegistry.eventNameDispatchConfigs[eventName] = dispatchConfig;

  var phasedRegistrationNames = dispatchConfig.phasedRegistrationNames;
  if (phasedRegistrationNames) {
    for (var phaseName in phasedRegistrationNames) {
      if (phasedRegistrationNames.hasOwnProperty(phaseName)) {
        var phasedRegistrationName = phasedRegistrationNames[phaseName];
        publishRegistrationName(
          phasedRegistrationName,
          PluginModule,
          eventName
        );
      }
    }
    return true;
  } else if (dispatchConfig.registrationName) {
    publishRegistrationName(
      dispatchConfig.registrationName,
      PluginModule,
      eventName
    );
    return true;
  }
  return false;
}

/**
 * Publishes a registration name that is used to identify dispatched events and
 * can be used with `EventPluginHub.putListener` to register listeners.
 *
 * @param {string} registrationName Registration name to add.
 * @param {object} PluginModule Plugin publishing the event.
 * @private
 */
function publishRegistrationName(registrationName, PluginModule, eventName) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !EventPluginRegistry.registrationNameModules[registrationName],
    'EventPluginHub: More than one plugin attempted to publish the same ' +
    'registration name, `%s`.',
    registrationName
  ) : invariant(!EventPluginRegistry.registrationNameModules[registrationName]));
  EventPluginRegistry.registrationNameModules[registrationName] = PluginModule;
  EventPluginRegistry.registrationNameDependencies[registrationName] =
    PluginModule.eventTypes[eventName].dependencies;
}

/**
 * Registers plugins so that they can extract and dispatch events.
 *
 * @see {EventPluginHub}
 */
var EventPluginRegistry = {

  /**
   * Ordered list of injected plugins.
   */
  plugins: [],

  /**
   * Mapping from event name to dispatch config
   */
  eventNameDispatchConfigs: {},

  /**
   * Mapping from registration name to plugin module
   */
  registrationNameModules: {},

  /**
   * Mapping from registration name to event name
   */
  registrationNameDependencies: {},

  /**
   * Injects an ordering of plugins (by plugin name). This allows the ordering
   * to be decoupled from injection of the actual plugins so that ordering is
   * always deterministic regardless of packaging, on-the-fly injection, etc.
   *
   * @param {array} InjectedEventPluginOrder
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginOrder}
   */
  injectEventPluginOrder: function(InjectedEventPluginOrder) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !EventPluginOrder,
      'EventPluginRegistry: Cannot inject event plugin ordering more than ' +
      'once. You are likely trying to load more than one copy of React.'
    ) : invariant(!EventPluginOrder));
    // Clone the ordering so it cannot be dynamically mutated.
    EventPluginOrder = Array.prototype.slice.call(InjectedEventPluginOrder);
    recomputePluginOrdering();
  },

  /**
   * Injects plugins to be used by `EventPluginHub`. The plugin names must be
   * in the ordering injected by `injectEventPluginOrder`.
   *
   * Plugins can be injected as part of page initialization or on-the-fly.
   *
   * @param {object} injectedNamesToPlugins Map from names to plugin modules.
   * @internal
   * @see {EventPluginHub.injection.injectEventPluginsByName}
   */
  injectEventPluginsByName: function(injectedNamesToPlugins) {
    var isOrderingDirty = false;
    for (var pluginName in injectedNamesToPlugins) {
      if (!injectedNamesToPlugins.hasOwnProperty(pluginName)) {
        continue;
      }
      var PluginModule = injectedNamesToPlugins[pluginName];
      if (!namesToPlugins.hasOwnProperty(pluginName) ||
          namesToPlugins[pluginName] !== PluginModule) {
        ("production" !== process.env.NODE_ENV ? invariant(
          !namesToPlugins[pluginName],
          'EventPluginRegistry: Cannot inject two different event plugins ' +
          'using the same name, `%s`.',
          pluginName
        ) : invariant(!namesToPlugins[pluginName]));
        namesToPlugins[pluginName] = PluginModule;
        isOrderingDirty = true;
      }
    }
    if (isOrderingDirty) {
      recomputePluginOrdering();
    }
  },

  /**
   * Looks up the plugin for the supplied event.
   *
   * @param {object} event A synthetic event.
   * @return {?object} The plugin that created the supplied event.
   * @internal
   */
  getPluginModuleForEvent: function(event) {
    var dispatchConfig = event.dispatchConfig;
    if (dispatchConfig.registrationName) {
      return EventPluginRegistry.registrationNameModules[
        dispatchConfig.registrationName
      ] || null;
    }
    for (var phase in dispatchConfig.phasedRegistrationNames) {
      if (!dispatchConfig.phasedRegistrationNames.hasOwnProperty(phase)) {
        continue;
      }
      var PluginModule = EventPluginRegistry.registrationNameModules[
        dispatchConfig.phasedRegistrationNames[phase]
      ];
      if (PluginModule) {
        return PluginModule;
      }
    }
    return null;
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _resetEventPlugins: function() {
    EventPluginOrder = null;
    for (var pluginName in namesToPlugins) {
      if (namesToPlugins.hasOwnProperty(pluginName)) {
        delete namesToPlugins[pluginName];
      }
    }
    EventPluginRegistry.plugins.length = 0;

    var eventNameDispatchConfigs = EventPluginRegistry.eventNameDispatchConfigs;
    for (var eventName in eventNameDispatchConfigs) {
      if (eventNameDispatchConfigs.hasOwnProperty(eventName)) {
        delete eventNameDispatchConfigs[eventName];
      }
    }

    var registrationNameModules = EventPluginRegistry.registrationNameModules;
    for (var registrationName in registrationNameModules) {
      if (registrationNameModules.hasOwnProperty(registrationName)) {
        delete registrationNameModules[registrationName];
      }
    }
  }

};

module.exports = EventPluginRegistry;

},{"./invariant":139}],32:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPluginUtils
 */

"use strict";

var EventConstants = require("./EventConstants");

var invariant = require("./invariant");

/**
 * Injected dependencies:
 */

/**
 * - `Mount`: [required] Module that can convert between React dom IDs and
 *   actual node references.
 */
var injection = {
  Mount: null,
  injectMount: function(InjectedMount) {
    injection.Mount = InjectedMount;
    if ("production" !== process.env.NODE_ENV) {
      ("production" !== process.env.NODE_ENV ? invariant(
        InjectedMount && InjectedMount.getNode,
        'EventPluginUtils.injection.injectMount(...): Injected Mount module ' +
        'is missing getNode.'
      ) : invariant(InjectedMount && InjectedMount.getNode));
    }
  }
};

var topLevelTypes = EventConstants.topLevelTypes;

function isEndish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseUp ||
         topLevelType === topLevelTypes.topTouchEnd ||
         topLevelType === topLevelTypes.topTouchCancel;
}

function isMoveish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseMove ||
         topLevelType === topLevelTypes.topTouchMove;
}
function isStartish(topLevelType) {
  return topLevelType === topLevelTypes.topMouseDown ||
         topLevelType === topLevelTypes.topTouchStart;
}


var validateEventDispatches;
if ("production" !== process.env.NODE_ENV) {
  validateEventDispatches = function(event) {
    var dispatchListeners = event._dispatchListeners;
    var dispatchIDs = event._dispatchIDs;

    var listenersIsArr = Array.isArray(dispatchListeners);
    var idsIsArr = Array.isArray(dispatchIDs);
    var IDsLen = idsIsArr ? dispatchIDs.length : dispatchIDs ? 1 : 0;
    var listenersLen = listenersIsArr ?
      dispatchListeners.length :
      dispatchListeners ? 1 : 0;

    ("production" !== process.env.NODE_ENV ? invariant(
      idsIsArr === listenersIsArr && IDsLen === listenersLen,
      'EventPluginUtils: Invalid `event`.'
    ) : invariant(idsIsArr === listenersIsArr && IDsLen === listenersLen));
  };
}

/**
 * Invokes `cb(event, listener, id)`. Avoids using call if no scope is
 * provided. The `(listener,id)` pair effectively forms the "dispatch" but are
 * kept separate to conserve memory.
 */
function forEachEventDispatch(event, cb) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      cb(event, dispatchListeners[i], dispatchIDs[i]);
    }
  } else if (dispatchListeners) {
    cb(event, dispatchListeners, dispatchIDs);
  }
}

/**
 * Default implementation of PluginModule.executeDispatch().
 * @param {SyntheticEvent} SyntheticEvent to handle
 * @param {function} Application-level callback
 * @param {string} domID DOM id to pass to the callback.
 */
function executeDispatch(event, listener, domID) {
  event.currentTarget = injection.Mount.getNode(domID);
  var returnValue = listener(event, domID);
  event.currentTarget = null;
  return returnValue;
}

/**
 * Standard/simple iteration through an event's collected dispatches.
 */
function executeDispatchesInOrder(event, executeDispatch) {
  forEachEventDispatch(event, executeDispatch);
  event._dispatchListeners = null;
  event._dispatchIDs = null;
}

/**
 * Standard/simple iteration through an event's collected dispatches, but stops
 * at the first dispatch execution returning true, and returns that id.
 *
 * @return id of the first dispatch execution who's listener returns true, or
 * null if no listener returned true.
 */
function executeDispatchesInOrderStopAtTrueImpl(event) {
  var dispatchListeners = event._dispatchListeners;
  var dispatchIDs = event._dispatchIDs;
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches(event);
  }
  if (Array.isArray(dispatchListeners)) {
    for (var i = 0; i < dispatchListeners.length; i++) {
      if (event.isPropagationStopped()) {
        break;
      }
      // Listeners and IDs are two parallel arrays that are always in sync.
      if (dispatchListeners[i](event, dispatchIDs[i])) {
        return dispatchIDs[i];
      }
    }
  } else if (dispatchListeners) {
    if (dispatchListeners(event, dispatchIDs)) {
      return dispatchIDs;
    }
  }
  return null;
}

/**
 * @see executeDispatchesInOrderStopAtTrueImpl
 */
function executeDispatchesInOrderStopAtTrue(event) {
  var ret = executeDispatchesInOrderStopAtTrueImpl(event);
  event._dispatchIDs = null;
  event._dispatchListeners = null;
  return ret;
}

/**
 * Execution of a "direct" dispatch - there must be at most one dispatch
 * accumulated on the event or it is considered an error. It doesn't really make
 * sense for an event with multiple dispatches (bubbled) to keep track of the
 * return values at each dispatch execution, but it does tend to make sense when
 * dealing with "direct" dispatches.
 *
 * @return The return value of executing the single dispatch.
 */
function executeDirectDispatch(event) {
  if ("production" !== process.env.NODE_ENV) {
    validateEventDispatches(event);
  }
  var dispatchListener = event._dispatchListeners;
  var dispatchID = event._dispatchIDs;
  ("production" !== process.env.NODE_ENV ? invariant(
    !Array.isArray(dispatchListener),
    'executeDirectDispatch(...): Invalid `event`.'
  ) : invariant(!Array.isArray(dispatchListener)));
  var res = dispatchListener ?
    dispatchListener(event, dispatchID) :
    null;
  event._dispatchListeners = null;
  event._dispatchIDs = null;
  return res;
}

/**
 * @param {SyntheticEvent} event
 * @return {bool} True iff number of dispatches accumulated is greater than 0.
 */
function hasDispatches(event) {
  return !!event._dispatchListeners;
}

/**
 * General utilities that are useful in creating custom Event Plugins.
 */
var EventPluginUtils = {
  isEndish: isEndish,
  isMoveish: isMoveish,
  isStartish: isStartish,

  executeDirectDispatch: executeDirectDispatch,
  executeDispatch: executeDispatch,
  executeDispatchesInOrder: executeDispatchesInOrder,
  executeDispatchesInOrderStopAtTrue: executeDispatchesInOrderStopAtTrue,
  hasDispatches: hasDispatches,
  injection: injection,
  useTouchEvents: false
};

module.exports = EventPluginUtils;

},{"./EventConstants":28,"./invariant":139}],33:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule EventPropagators
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");

var accumulateInto = require("./accumulateInto");
var forEachAccumulated = require("./forEachAccumulated");

var PropagationPhases = EventConstants.PropagationPhases;
var getListener = EventPluginHub.getListener;

/**
 * Some event types have a notion of different registration names for different
 * "phases" of propagation. This finds listeners by a given phase.
 */
function listenerAtPhase(id, event, propagationPhase) {
  var registrationName =
    event.dispatchConfig.phasedRegistrationNames[propagationPhase];
  return getListener(id, registrationName);
}

/**
 * Tags a `SyntheticEvent` with dispatched listeners. Creating this function
 * here, allows us to not have to bind or create functions for each event.
 * Mutating the event's members allows us to not have to create a wrapping
 * "dispatch" object that pairs the event with the listener.
 */
function accumulateDirectionalDispatches(domID, upwards, event) {
  if ("production" !== process.env.NODE_ENV) {
    if (!domID) {
      throw new Error('Dispatching id must not be null');
    }
  }
  var phase = upwards ? PropagationPhases.bubbled : PropagationPhases.captured;
  var listener = listenerAtPhase(domID, event, phase);
  if (listener) {
    event._dispatchListeners =
      accumulateInto(event._dispatchListeners, listener);
    event._dispatchIDs = accumulateInto(event._dispatchIDs, domID);
  }
}

/**
 * Collect dispatches (must be entirely collected before dispatching - see unit
 * tests). Lazily allocate the array to conserve memory.  We must loop through
 * each event and perform the traversal for each one. We can not perform a
 * single traversal for the entire collection of events because each event may
 * have a different target.
 */
function accumulateTwoPhaseDispatchesSingle(event) {
  if (event && event.dispatchConfig.phasedRegistrationNames) {
    EventPluginHub.injection.getInstanceHandle().traverseTwoPhase(
      event.dispatchMarker,
      accumulateDirectionalDispatches,
      event
    );
  }
}


/**
 * Accumulates without regard to direction, does not look for phased
 * registration names. Same as `accumulateDirectDispatchesSingle` but without
 * requiring that the `dispatchMarker` be the same as the dispatched ID.
 */
function accumulateDispatches(id, ignoredDirection, event) {
  if (event && event.dispatchConfig.registrationName) {
    var registrationName = event.dispatchConfig.registrationName;
    var listener = getListener(id, registrationName);
    if (listener) {
      event._dispatchListeners =
        accumulateInto(event._dispatchListeners, listener);
      event._dispatchIDs = accumulateInto(event._dispatchIDs, id);
    }
  }
}

/**
 * Accumulates dispatches on an `SyntheticEvent`, but only for the
 * `dispatchMarker`.
 * @param {SyntheticEvent} event
 */
function accumulateDirectDispatchesSingle(event) {
  if (event && event.dispatchConfig.registrationName) {
    accumulateDispatches(event.dispatchMarker, null, event);
  }
}

function accumulateTwoPhaseDispatches(events) {
  forEachAccumulated(events, accumulateTwoPhaseDispatchesSingle);
}

function accumulateEnterLeaveDispatches(leave, enter, fromID, toID) {
  EventPluginHub.injection.getInstanceHandle().traverseEnterLeave(
    fromID,
    toID,
    accumulateDispatches,
    leave,
    enter
  );
}


function accumulateDirectDispatches(events) {
  forEachAccumulated(events, accumulateDirectDispatchesSingle);
}



/**
 * A small set of propagation patterns, each of which will accept a small amount
 * of information, and generate a set of "dispatch ready event objects" - which
 * are sets of events that have already been annotated with a set of dispatched
 * listener functions/ids. The API is designed this way to discourage these
 * propagation strategies from actually executing the dispatches, since we
 * always want to collect the entire set of dispatches before executing event a
 * single one.
 *
 * @constructor EventPropagators
 */
var EventPropagators = {
  accumulateTwoPhaseDispatches: accumulateTwoPhaseDispatches,
  accumulateDirectDispatches: accumulateDirectDispatches,
  accumulateEnterLeaveDispatches: accumulateEnterLeaveDispatches
};

module.exports = EventPropagators;

},{"./EventConstants":28,"./EventPluginHub":30,"./accumulateInto":110,"./forEachAccumulated":125}],34:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ExecutionEnvironment
 */

/*jslint evil: true */

"use strict";

var canUseDOM = !!(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

/**
 * Simple, lightweight module assisting with the detection and context of
 * Worker. Helps avoid circular dependencies and allows code to reason about
 * whether or not they are in a Worker, even if they never include the main
 * `ReactWorker` dependency.
 */
var ExecutionEnvironment = {

  canUseDOM: canUseDOM,

  canUseWorkers: typeof Worker !== 'undefined',

  canUseEventListeners:
    canUseDOM && !!(window.addEventListener || window.attachEvent),

  canUseViewport: canUseDOM && !!window.screen,

  isInWorker: !canUseDOM // For now, this is true - might change in the future.

};

module.exports = ExecutionEnvironment;

},{}],35:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule HTMLDOMPropertyConfig
 */

/*jslint bitwise: true*/

"use strict";

var DOMProperty = require("./DOMProperty");
var ExecutionEnvironment = require("./ExecutionEnvironment");

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;
var MUST_USE_PROPERTY = DOMProperty.injection.MUST_USE_PROPERTY;
var HAS_BOOLEAN_VALUE = DOMProperty.injection.HAS_BOOLEAN_VALUE;
var HAS_SIDE_EFFECTS = DOMProperty.injection.HAS_SIDE_EFFECTS;
var HAS_NUMERIC_VALUE = DOMProperty.injection.HAS_NUMERIC_VALUE;
var HAS_POSITIVE_NUMERIC_VALUE =
  DOMProperty.injection.HAS_POSITIVE_NUMERIC_VALUE;
var HAS_OVERLOADED_BOOLEAN_VALUE =
  DOMProperty.injection.HAS_OVERLOADED_BOOLEAN_VALUE;

var hasSVG;
if (ExecutionEnvironment.canUseDOM) {
  var implementation = document.implementation;
  hasSVG = (
    implementation &&
    implementation.hasFeature &&
    implementation.hasFeature(
      'http://www.w3.org/TR/SVG11/feature#BasicStructure',
      '1.1'
    )
  );
}


var HTMLDOMPropertyConfig = {
  isCustomAttribute: RegExp.prototype.test.bind(
    /^(data|aria)-[a-z_][a-z\d_.\-]*$/
  ),
  Properties: {
    /**
     * Standard Properties
     */
    accept: null,
    acceptCharset: null,
    accessKey: null,
    action: null,
    allowFullScreen: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    allowTransparency: MUST_USE_ATTRIBUTE,
    alt: null,
    async: HAS_BOOLEAN_VALUE,
    autoComplete: null,
    // autoFocus is polyfilled/normalized by AutoFocusMixin
    // autoFocus: HAS_BOOLEAN_VALUE,
    autoPlay: HAS_BOOLEAN_VALUE,
    cellPadding: null,
    cellSpacing: null,
    charSet: MUST_USE_ATTRIBUTE,
    checked: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    classID: MUST_USE_ATTRIBUTE,
    // To set className on SVG elements, it's necessary to use .setAttribute;
    // this works on HTML elements too in all browsers except IE8. Conveniently,
    // IE8 doesn't support SVG and so we can simply use the attribute in
    // browsers that support SVG and the property in browsers that don't,
    // regardless of whether the element is HTML or SVG.
    className: hasSVG ? MUST_USE_ATTRIBUTE : MUST_USE_PROPERTY,
    cols: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    colSpan: null,
    content: null,
    contentEditable: null,
    contextMenu: MUST_USE_ATTRIBUTE,
    controls: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    coords: null,
    crossOrigin: null,
    data: null, // For `<object />` acts as `src`.
    dateTime: MUST_USE_ATTRIBUTE,
    defer: HAS_BOOLEAN_VALUE,
    dir: null,
    disabled: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    download: HAS_OVERLOADED_BOOLEAN_VALUE,
    draggable: null,
    encType: null,
    form: MUST_USE_ATTRIBUTE,
    formNoValidate: HAS_BOOLEAN_VALUE,
    frameBorder: MUST_USE_ATTRIBUTE,
    height: MUST_USE_ATTRIBUTE,
    hidden: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    href: null,
    hrefLang: null,
    htmlFor: null,
    httpEquiv: null,
    icon: null,
    id: MUST_USE_PROPERTY,
    label: null,
    lang: null,
    list: MUST_USE_ATTRIBUTE,
    loop: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    manifest: MUST_USE_ATTRIBUTE,
    max: null,
    maxLength: MUST_USE_ATTRIBUTE,
    media: MUST_USE_ATTRIBUTE,
    mediaGroup: null,
    method: null,
    min: null,
    multiple: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    muted: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    name: null,
    noValidate: HAS_BOOLEAN_VALUE,
    open: null,
    pattern: null,
    placeholder: null,
    poster: null,
    preload: null,
    radioGroup: null,
    readOnly: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    rel: null,
    required: HAS_BOOLEAN_VALUE,
    role: MUST_USE_ATTRIBUTE,
    rows: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    rowSpan: null,
    sandbox: null,
    scope: null,
    scrolling: null,
    seamless: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE,
    selected: MUST_USE_PROPERTY | HAS_BOOLEAN_VALUE,
    shape: null,
    size: MUST_USE_ATTRIBUTE | HAS_POSITIVE_NUMERIC_VALUE,
    sizes: MUST_USE_ATTRIBUTE,
    span: HAS_POSITIVE_NUMERIC_VALUE,
    spellCheck: null,
    src: null,
    srcDoc: MUST_USE_PROPERTY,
    srcSet: MUST_USE_ATTRIBUTE,
    start: HAS_NUMERIC_VALUE,
    step: null,
    style: null,
    tabIndex: null,
    target: null,
    title: null,
    type: null,
    useMap: null,
    value: MUST_USE_PROPERTY | HAS_SIDE_EFFECTS,
    width: MUST_USE_ATTRIBUTE,
    wmode: MUST_USE_ATTRIBUTE,

    /**
     * Non-standard Properties
     */
    autoCapitalize: null, // Supported in Mobile Safari for keyboard hints
    autoCorrect: null, // Supported in Mobile Safari for keyboard hints
    itemProp: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
    itemScope: MUST_USE_ATTRIBUTE | HAS_BOOLEAN_VALUE, // Microdata: http://schema.org/docs/gs.html
    itemType: MUST_USE_ATTRIBUTE, // Microdata: http://schema.org/docs/gs.html
    property: null // Supports OG in meta tags
  },
  DOMAttributeNames: {
    acceptCharset: 'accept-charset',
    className: 'class',
    htmlFor: 'for',
    httpEquiv: 'http-equiv'
  },
  DOMPropertyNames: {
    autoCapitalize: 'autocapitalize',
    autoComplete: 'autocomplete',
    autoCorrect: 'autocorrect',
    autoFocus: 'autofocus',
    autoPlay: 'autoplay',
    encType: 'enctype',
    hrefLang: 'hreflang',
    radioGroup: 'radiogroup',
    spellCheck: 'spellcheck',
    srcDoc: 'srcdoc',
    srcSet: 'srcset'
  }
};

module.exports = HTMLDOMPropertyConfig;

},{"./DOMProperty":23,"./ExecutionEnvironment":34}],36:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LinkedValueUtils
 * @typechecks static-only
 */

"use strict";

var ReactPropTypes = require("./ReactPropTypes");

var invariant = require("./invariant");

var hasReadOnlyValue = {
  'button': true,
  'checkbox': true,
  'image': true,
  'hidden': true,
  'radio': true,
  'reset': true,
  'submit': true
};

function _assertSingleLink(input) {
  ("production" !== process.env.NODE_ENV ? invariant(
    input.props.checkedLink == null || input.props.valueLink == null,
    'Cannot provide a checkedLink and a valueLink. If you want to use ' +
    'checkedLink, you probably don\'t want to use valueLink and vice versa.'
  ) : invariant(input.props.checkedLink == null || input.props.valueLink == null));
}
function _assertValueLink(input) {
  _assertSingleLink(input);
  ("production" !== process.env.NODE_ENV ? invariant(
    input.props.value == null && input.props.onChange == null,
    'Cannot provide a valueLink and a value or onChange event. If you want ' +
    'to use value or onChange, you probably don\'t want to use valueLink.'
  ) : invariant(input.props.value == null && input.props.onChange == null));
}

function _assertCheckedLink(input) {
  _assertSingleLink(input);
  ("production" !== process.env.NODE_ENV ? invariant(
    input.props.checked == null && input.props.onChange == null,
    'Cannot provide a checkedLink and a checked property or onChange event. ' +
    'If you want to use checked or onChange, you probably don\'t want to ' +
    'use checkedLink'
  ) : invariant(input.props.checked == null && input.props.onChange == null));
}

/**
 * @param {SyntheticEvent} e change event to handle
 */
function _handleLinkedValueChange(e) {
  /*jshint validthis:true */
  this.props.valueLink.requestChange(e.target.value);
}

/**
  * @param {SyntheticEvent} e change event to handle
  */
function _handleLinkedCheckChange(e) {
  /*jshint validthis:true */
  this.props.checkedLink.requestChange(e.target.checked);
}

/**
 * Provide a linked `value` attribute for controlled forms. You should not use
 * this outside of the ReactDOM controlled form components.
 */
var LinkedValueUtils = {
  Mixin: {
    propTypes: {
      value: function(props, propName, componentName) {
        if (!props[propName] ||
            hasReadOnlyValue[props.type] ||
            props.onChange ||
            props.readOnly ||
            props.disabled) {
          return;
        }
        return new Error(
          'You provided a `value` prop to a form field without an ' +
          '`onChange` handler. This will render a read-only field. If ' +
          'the field should be mutable use `defaultValue`. Otherwise, ' +
          'set either `onChange` or `readOnly`.'
        );
      },
      checked: function(props, propName, componentName) {
        if (!props[propName] ||
            props.onChange ||
            props.readOnly ||
            props.disabled) {
          return;
        }
        return new Error(
          'You provided a `checked` prop to a form field without an ' +
          '`onChange` handler. This will render a read-only field. If ' +
          'the field should be mutable use `defaultChecked`. Otherwise, ' +
          'set either `onChange` or `readOnly`.'
        );
      },
      onChange: ReactPropTypes.func
    }
  },

  /**
   * @param {ReactComponent} input Form component
   * @return {*} current value of the input either from value prop or link.
   */
  getValue: function(input) {
    if (input.props.valueLink) {
      _assertValueLink(input);
      return input.props.valueLink.value;
    }
    return input.props.value;
  },

  /**
   * @param {ReactComponent} input Form component
   * @return {*} current checked status of the input either from checked prop
   *             or link.
   */
  getChecked: function(input) {
    if (input.props.checkedLink) {
      _assertCheckedLink(input);
      return input.props.checkedLink.value;
    }
    return input.props.checked;
  },

  /**
   * @param {ReactComponent} input Form component
   * @return {function} change callback either from onChange prop or link.
   */
  getOnChange: function(input) {
    if (input.props.valueLink) {
      _assertValueLink(input);
      return _handleLinkedValueChange;
    } else if (input.props.checkedLink) {
      _assertCheckedLink(input);
      return _handleLinkedCheckChange;
    }
    return input.props.onChange;
  }
};

module.exports = LinkedValueUtils;

},{"./ReactPropTypes":85,"./invariant":139}],37:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule LocalEventTrapMixin
 */

"use strict";

var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");

var accumulateInto = require("./accumulateInto");
var forEachAccumulated = require("./forEachAccumulated");
var invariant = require("./invariant");

function remove(event) {
  event.remove();
}

var LocalEventTrapMixin = {
  trapBubbledEvent:function(topLevelType, handlerBaseName) {
    ("production" !== process.env.NODE_ENV ? invariant(this.isMounted(), 'Must be mounted to trap events') : invariant(this.isMounted()));
    var listener = ReactBrowserEventEmitter.trapBubbledEvent(
      topLevelType,
      handlerBaseName,
      this.getDOMNode()
    );
    this._localEventListeners =
      accumulateInto(this._localEventListeners, listener);
  },

  // trapCapturedEvent would look nearly identical. We don't implement that
  // method because it isn't currently needed.

  componentWillUnmount:function() {
    if (this._localEventListeners) {
      forEachAccumulated(this._localEventListeners, remove);
    }
  }
};

module.exports = LocalEventTrapMixin;

},{"./ReactBrowserEventEmitter":43,"./accumulateInto":110,"./forEachAccumulated":125,"./invariant":139}],38:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule MobileSafariClickEventPlugin
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");

var emptyFunction = require("./emptyFunction");

var topLevelTypes = EventConstants.topLevelTypes;

/**
 * Mobile Safari does not fire properly bubble click events on non-interactive
 * elements, which means delegated click listeners do not fire. The workaround
 * for this bug involves attaching an empty click listener on the target node.
 *
 * This particular plugin works around the bug by attaching an empty click
 * listener on `touchstart` (which does fire on every element).
 */
var MobileSafariClickEventPlugin = {

  eventTypes: null,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    if (topLevelType === topLevelTypes.topTouchStart) {
      var target = nativeEvent.target;
      if (target && !target.onclick) {
        target.onclick = emptyFunction;
      }
    }
  }

};

module.exports = MobileSafariClickEventPlugin;

},{"./EventConstants":28,"./emptyFunction":120}],39:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Object.assign
 */

// https://people.mozilla.org/~jorendorff/es6-draft.html#sec-object.assign

function assign(target, sources) {
  if (target == null) {
    throw new TypeError('Object.assign target cannot be null or undefined');
  }

  var to = Object(target);
  var hasOwnProperty = Object.prototype.hasOwnProperty;

  for (var nextIndex = 1; nextIndex < arguments.length; nextIndex++) {
    var nextSource = arguments[nextIndex];
    if (nextSource == null) {
      continue;
    }

    var from = Object(nextSource);

    // We don't currently support accessors nor proxies. Therefore this
    // copy cannot throw. If we ever supported this then we must handle
    // exceptions and side-effects. We don't support symbols so they won't
    // be transferred.

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }
  }

  return to;
};

module.exports = assign;

},{}],40:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule PooledClass
 */

"use strict";

var invariant = require("./invariant");

/**
 * Static poolers. Several custom versions for each potential number of
 * arguments. A completely generic pooler is easy to implement, but would
 * require accessing the `arguments` object. In each of these, `this` refers to
 * the Class itself, not an instance. If any others are needed, simply add them
 * here, or in their own files.
 */
var oneArgumentPooler = function(copyFieldsFrom) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, copyFieldsFrom);
    return instance;
  } else {
    return new Klass(copyFieldsFrom);
  }
};

var twoArgumentPooler = function(a1, a2) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2);
    return instance;
  } else {
    return new Klass(a1, a2);
  }
};

var threeArgumentPooler = function(a1, a2, a3) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3);
    return instance;
  } else {
    return new Klass(a1, a2, a3);
  }
};

var fiveArgumentPooler = function(a1, a2, a3, a4, a5) {
  var Klass = this;
  if (Klass.instancePool.length) {
    var instance = Klass.instancePool.pop();
    Klass.call(instance, a1, a2, a3, a4, a5);
    return instance;
  } else {
    return new Klass(a1, a2, a3, a4, a5);
  }
};

var standardReleaser = function(instance) {
  var Klass = this;
  ("production" !== process.env.NODE_ENV ? invariant(
    instance instanceof Klass,
    'Trying to release an instance into a pool of a different type.'
  ) : invariant(instance instanceof Klass));
  if (instance.destructor) {
    instance.destructor();
  }
  if (Klass.instancePool.length < Klass.poolSize) {
    Klass.instancePool.push(instance);
  }
};

var DEFAULT_POOL_SIZE = 10;
var DEFAULT_POOLER = oneArgumentPooler;

/**
 * Augments `CopyConstructor` to be a poolable class, augmenting only the class
 * itself (statically) not adding any prototypical fields. Any CopyConstructor
 * you give this may have a `poolSize` property, and will look for a
 * prototypical `destructor` on instances (optional).
 *
 * @param {Function} CopyConstructor Constructor that can be used to reset.
 * @param {Function} pooler Customizable pooler.
 */
var addPoolingTo = function(CopyConstructor, pooler) {
  var NewKlass = CopyConstructor;
  NewKlass.instancePool = [];
  NewKlass.getPooled = pooler || DEFAULT_POOLER;
  if (!NewKlass.poolSize) {
    NewKlass.poolSize = DEFAULT_POOL_SIZE;
  }
  NewKlass.release = standardReleaser;
  return NewKlass;
};

var PooledClass = {
  addPoolingTo: addPoolingTo,
  oneArgumentPooler: oneArgumentPooler,
  twoArgumentPooler: twoArgumentPooler,
  threeArgumentPooler: threeArgumentPooler,
  fiveArgumentPooler: fiveArgumentPooler
};

module.exports = PooledClass;

},{"./invariant":139}],41:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule React
 */

"use strict";

var DOMPropertyOperations = require("./DOMPropertyOperations");
var EventPluginUtils = require("./EventPluginUtils");
var ReactChildren = require("./ReactChildren");
var ReactComponent = require("./ReactComponent");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactContext = require("./ReactContext");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactElement = require("./ReactElement");
var ReactElementValidator = require("./ReactElementValidator");
var ReactDOM = require("./ReactDOM");
var ReactDOMComponent = require("./ReactDOMComponent");
var ReactDefaultInjection = require("./ReactDefaultInjection");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactMount = require("./ReactMount");
var ReactMultiChild = require("./ReactMultiChild");
var ReactPerf = require("./ReactPerf");
var ReactPropTypes = require("./ReactPropTypes");
var ReactServerRendering = require("./ReactServerRendering");
var ReactTextComponent = require("./ReactTextComponent");

var assign = require("./Object.assign");
var deprecated = require("./deprecated");
var onlyChild = require("./onlyChild");

ReactDefaultInjection.inject();

var createElement = ReactElement.createElement;
var createFactory = ReactElement.createFactory;

if ("production" !== process.env.NODE_ENV) {
  createElement = ReactElementValidator.createElement;
  createFactory = ReactElementValidator.createFactory;
}

// TODO: Drop legacy elements once classes no longer export these factories
createElement = ReactLegacyElement.wrapCreateElement(
  createElement
);
createFactory = ReactLegacyElement.wrapCreateFactory(
  createFactory
);

var render = ReactPerf.measure('React', 'render', ReactMount.render);

var React = {
  Children: {
    map: ReactChildren.map,
    forEach: ReactChildren.forEach,
    count: ReactChildren.count,
    only: onlyChild
  },
  DOM: ReactDOM,
  PropTypes: ReactPropTypes,
  initializeTouchEvents: function(shouldUseTouch) {
    EventPluginUtils.useTouchEvents = shouldUseTouch;
  },
  createClass: ReactCompositeComponent.createClass,
  createElement: createElement,
  createFactory: createFactory,
  constructAndRenderComponent: ReactMount.constructAndRenderComponent,
  constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,
  render: render,
  renderToString: ReactServerRendering.renderToString,
  renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,
  unmountComponentAtNode: ReactMount.unmountComponentAtNode,
  isValidClass: ReactLegacyElement.isValidClass,
  isValidElement: ReactElement.isValidElement,
  withContext: ReactContext.withContext,

  // Hook for JSX spread, don't use this for anything else.
  __spread: assign,

  // Deprecations (remove for 0.13)
  renderComponent: deprecated(
    'React',
    'renderComponent',
    'render',
    this,
    render
  ),
  renderComponentToString: deprecated(
    'React',
    'renderComponentToString',
    'renderToString',
    this,
    ReactServerRendering.renderToString
  ),
  renderComponentToStaticMarkup: deprecated(
    'React',
    'renderComponentToStaticMarkup',
    'renderToStaticMarkup',
    this,
    ReactServerRendering.renderToStaticMarkup
  ),
  isValidComponent: deprecated(
    'React',
    'isValidComponent',
    'isValidElement',
    this,
    ReactElement.isValidElement
  )
};

// Inject the runtime into a devtools global hook regardless of browser.
// Allows for debugging when the hook is injected on the page.
if (
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ !== 'undefined' &&
  typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.inject === 'function') {
  __REACT_DEVTOOLS_GLOBAL_HOOK__.inject({
    Component: ReactComponent,
    CurrentOwner: ReactCurrentOwner,
    DOMComponent: ReactDOMComponent,
    DOMPropertyOperations: DOMPropertyOperations,
    InstanceHandles: ReactInstanceHandles,
    Mount: ReactMount,
    MultiChild: ReactMultiChild,
    TextComponent: ReactTextComponent
  });
}

if ("production" !== process.env.NODE_ENV) {
  var ExecutionEnvironment = require("./ExecutionEnvironment");
  if (ExecutionEnvironment.canUseDOM && window.top === window.self) {

    // If we're in Chrome, look for the devtools marker and provide a download
    // link if not installed.
    if (navigator.userAgent.indexOf('Chrome') > -1) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === 'undefined') {
        console.debug(
          'Download the React DevTools for a better development experience: ' +
          'http://fb.me/react-devtools'
        );
      }
    }

    var expectedFeatures = [
      // shims
      Array.isArray,
      Array.prototype.every,
      Array.prototype.forEach,
      Array.prototype.indexOf,
      Array.prototype.map,
      Date.now,
      Function.prototype.bind,
      Object.keys,
      String.prototype.split,
      String.prototype.trim,

      // shams
      Object.create,
      Object.freeze
    ];

    for (var i = 0; i < expectedFeatures.length; i++) {
      if (!expectedFeatures[i]) {
        console.error(
          'One or more ES5 shim/shams expected by React are not available: ' +
          'http://fb.me/react-warning-polyfills'
        );
        break;
      }
    }
  }
}

// Version exists only in the open-source version of React, not in Facebook's
// internal version.
React.version = '0.12.1';

module.exports = React;

},{"./DOMPropertyOperations":24,"./EventPluginUtils":32,"./ExecutionEnvironment":34,"./Object.assign":39,"./ReactChildren":44,"./ReactComponent":45,"./ReactCompositeComponent":47,"./ReactContext":48,"./ReactCurrentOwner":49,"./ReactDOM":50,"./ReactDOMComponent":52,"./ReactDefaultInjection":62,"./ReactElement":65,"./ReactElementValidator":66,"./ReactInstanceHandles":73,"./ReactLegacyElement":74,"./ReactMount":76,"./ReactMultiChild":77,"./ReactPerf":81,"./ReactPropTypes":85,"./ReactServerRendering":89,"./ReactTextComponent":91,"./deprecated":119,"./onlyChild":150}],42:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserComponentMixin
 */

"use strict";

var ReactEmptyComponent = require("./ReactEmptyComponent");
var ReactMount = require("./ReactMount");

var invariant = require("./invariant");

var ReactBrowserComponentMixin = {
  /**
   * Returns the DOM node rendered by this component.
   *
   * @return {DOMElement} The root node of this component.
   * @final
   * @protected
   */
  getDOMNode: function() {
    ("production" !== process.env.NODE_ENV ? invariant(
      this.isMounted(),
      'getDOMNode(): A component must be mounted to have a DOM node.'
    ) : invariant(this.isMounted()));
    if (ReactEmptyComponent.isNullComponentID(this._rootNodeID)) {
      return null;
    }
    return ReactMount.getNode(this._rootNodeID);
  }
};

module.exports = ReactBrowserComponentMixin;

},{"./ReactEmptyComponent":67,"./ReactMount":76,"./invariant":139}],43:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactBrowserEventEmitter
 * @typechecks static-only
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginHub = require("./EventPluginHub");
var EventPluginRegistry = require("./EventPluginRegistry");
var ReactEventEmitterMixin = require("./ReactEventEmitterMixin");
var ViewportMetrics = require("./ViewportMetrics");

var assign = require("./Object.assign");
var isEventSupported = require("./isEventSupported");

/**
 * Summary of `ReactBrowserEventEmitter` event handling:
 *
 *  - Top-level delegation is used to trap most native browser events. This
 *    may only occur in the main thread and is the responsibility of
 *    ReactEventListener, which is injected and can therefore support pluggable
 *    event sources. This is the only work that occurs in the main thread.
 *
 *  - We normalize and de-duplicate events to account for browser quirks. This
 *    may be done in the worker thread.
 *
 *  - Forward these native events (with the associated top-level type used to
 *    trap it) to `EventPluginHub`, which in turn will ask plugins if they want
 *    to extract any synthetic events.
 *
 *  - The `EventPluginHub` will then process each event by annotating them with
 *    "dispatches", a sequence of listeners and IDs that care about that event.
 *
 *  - The `EventPluginHub` then dispatches the events.
 *
 * Overview of React and the event system:
 *
 * +------------+    .
 * |    DOM     |    .
 * +------------+    .
 *       |           .
 *       v           .
 * +------------+    .
 * | ReactEvent |    .
 * |  Listener  |    .
 * +------------+    .                         +-----------+
 *       |           .               +--------+|SimpleEvent|
 *       |           .               |         |Plugin     |
 * +-----|------+    .               v         +-----------+
 * |     |      |    .    +--------------+                    +------------+
 * |     +-----------.--->|EventPluginHub|                    |    Event   |
 * |            |    .    |              |     +-----------+  | Propagators|
 * | ReactEvent |    .    |              |     |TapEvent   |  |------------|
 * |  Emitter   |    .    |              |<---+|Plugin     |  |other plugin|
 * |            |    .    |              |     +-----------+  |  utilities |
 * |     +-----------.--->|              |                    +------------+
 * |     |      |    .    +--------------+
 * +-----|------+    .                ^        +-----------+
 *       |           .                |        |Enter/Leave|
 *       +           .                +-------+|Plugin     |
 * +-------------+   .                         +-----------+
 * | application |   .
 * |-------------|   .
 * |             |   .
 * |             |   .
 * +-------------+   .
 *                   .
 *    React Core     .  General Purpose Event Plugin System
 */

var alreadyListeningTo = {};
var isMonitoringScrollValue = false;
var reactTopListenersCounter = 0;

// For events like 'submit' which don't consistently bubble (which we trap at a
// lower node than `document`), binding at `document` would cause duplicate
// events so we don't include them here
var topEventMapping = {
  topBlur: 'blur',
  topChange: 'change',
  topClick: 'click',
  topCompositionEnd: 'compositionend',
  topCompositionStart: 'compositionstart',
  topCompositionUpdate: 'compositionupdate',
  topContextMenu: 'contextmenu',
  topCopy: 'copy',
  topCut: 'cut',
  topDoubleClick: 'dblclick',
  topDrag: 'drag',
  topDragEnd: 'dragend',
  topDragEnter: 'dragenter',
  topDragExit: 'dragexit',
  topDragLeave: 'dragleave',
  topDragOver: 'dragover',
  topDragStart: 'dragstart',
  topDrop: 'drop',
  topFocus: 'focus',
  topInput: 'input',
  topKeyDown: 'keydown',
  topKeyPress: 'keypress',
  topKeyUp: 'keyup',
  topMouseDown: 'mousedown',
  topMouseMove: 'mousemove',
  topMouseOut: 'mouseout',
  topMouseOver: 'mouseover',
  topMouseUp: 'mouseup',
  topPaste: 'paste',
  topScroll: 'scroll',
  topSelectionChange: 'selectionchange',
  topTextInput: 'textInput',
  topTouchCancel: 'touchcancel',
  topTouchEnd: 'touchend',
  topTouchMove: 'touchmove',
  topTouchStart: 'touchstart',
  topWheel: 'wheel'
};

/**
 * To ensure no conflicts with other potential React instances on the page
 */
var topListenersIDKey = "_reactListenersID" + String(Math.random()).slice(2);

function getListeningForDocument(mountAt) {
  // In IE8, `mountAt` is a host object and doesn't have `hasOwnProperty`
  // directly.
  if (!Object.prototype.hasOwnProperty.call(mountAt, topListenersIDKey)) {
    mountAt[topListenersIDKey] = reactTopListenersCounter++;
    alreadyListeningTo[mountAt[topListenersIDKey]] = {};
  }
  return alreadyListeningTo[mountAt[topListenersIDKey]];
}

/**
 * `ReactBrowserEventEmitter` is used to attach top-level event listeners. For
 * example:
 *
 *   ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);
 *
 * This would allocate a "registration" of `('onClick', myFunction)` on 'myID'.
 *
 * @internal
 */
var ReactBrowserEventEmitter = assign({}, ReactEventEmitterMixin, {

  /**
   * Injectable event backend
   */
  ReactEventListener: null,

  injection: {
    /**
     * @param {object} ReactEventListener
     */
    injectReactEventListener: function(ReactEventListener) {
      ReactEventListener.setHandleTopLevel(
        ReactBrowserEventEmitter.handleTopLevel
      );
      ReactBrowserEventEmitter.ReactEventListener = ReactEventListener;
    }
  },

  /**
   * Sets whether or not any created callbacks should be enabled.
   *
   * @param {boolean} enabled True if callbacks should be enabled.
   */
  setEnabled: function(enabled) {
    if (ReactBrowserEventEmitter.ReactEventListener) {
      ReactBrowserEventEmitter.ReactEventListener.setEnabled(enabled);
    }
  },

  /**
   * @return {boolean} True if callbacks are enabled.
   */
  isEnabled: function() {
    return !!(
      ReactBrowserEventEmitter.ReactEventListener &&
      ReactBrowserEventEmitter.ReactEventListener.isEnabled()
    );
  },

  /**
   * We listen for bubbled touch events on the document object.
   *
   * Firefox v8.01 (and possibly others) exhibited strange behavior when
   * mounting `onmousemove` events at some node that was not the document
   * element. The symptoms were that if your mouse is not moving over something
   * contained within that mount point (for example on the background) the
   * top-level listeners for `onmousemove` won't be called. However, if you
   * register the `mousemove` on the document object, then it will of course
   * catch all `mousemove`s. This along with iOS quirks, justifies restricting
   * top-level listeners to the document object only, at least for these
   * movement types of events and possibly all events.
   *
   * @see http://www.quirksmode.org/blog/archives/2010/09/click_event_del.html
   *
   * Also, `keyup`/`keypress`/`keydown` do not bubble to the window on IE, but
   * they bubble to document.
   *
   * @param {string} registrationName Name of listener (e.g. `onClick`).
   * @param {object} contentDocumentHandle Document which owns the container
   */
  listenTo: function(registrationName, contentDocumentHandle) {
    var mountAt = contentDocumentHandle;
    var isListening = getListeningForDocument(mountAt);
    var dependencies = EventPluginRegistry.
      registrationNameDependencies[registrationName];

    var topLevelTypes = EventConstants.topLevelTypes;
    for (var i = 0, l = dependencies.length; i < l; i++) {
      var dependency = dependencies[i];
      if (!(
            isListening.hasOwnProperty(dependency) &&
            isListening[dependency]
          )) {
        if (dependency === topLevelTypes.topWheel) {
          if (isEventSupported('wheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topWheel,
              'wheel',
              mountAt
            );
          } else if (isEventSupported('mousewheel')) {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topWheel,
              'mousewheel',
              mountAt
            );
          } else {
            // Firefox needs to capture a different mouse scroll event.
            // @see http://www.quirksmode.org/dom/events/tests/scroll.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topWheel,
              'DOMMouseScroll',
              mountAt
            );
          }
        } else if (dependency === topLevelTypes.topScroll) {

          if (isEventSupported('scroll', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
              topLevelTypes.topScroll,
              'scroll',
              mountAt
            );
          } else {
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topScroll,
              'scroll',
              ReactBrowserEventEmitter.ReactEventListener.WINDOW_HANDLE
            );
          }
        } else if (dependency === topLevelTypes.topFocus ||
            dependency === topLevelTypes.topBlur) {

          if (isEventSupported('focus', true)) {
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
              topLevelTypes.topFocus,
              'focus',
              mountAt
            );
            ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
              topLevelTypes.topBlur,
              'blur',
              mountAt
            );
          } else if (isEventSupported('focusin')) {
            // IE has `focusin` and `focusout` events which bubble.
            // @see http://www.quirksmode.org/blog/archives/2008/04/delegating_the.html
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topFocus,
              'focusin',
              mountAt
            );
            ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
              topLevelTypes.topBlur,
              'focusout',
              mountAt
            );
          }

          // to make sure blur and focus event listeners are only attached once
          isListening[topLevelTypes.topBlur] = true;
          isListening[topLevelTypes.topFocus] = true;
        } else if (topEventMapping.hasOwnProperty(dependency)) {
          ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
            dependency,
            topEventMapping[dependency],
            mountAt
          );
        }

        isListening[dependency] = true;
      }
    }
  },

  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapBubbledEvent(
      topLevelType,
      handlerBaseName,
      handle
    );
  },

  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
    return ReactBrowserEventEmitter.ReactEventListener.trapCapturedEvent(
      topLevelType,
      handlerBaseName,
      handle
    );
  },

  /**
   * Listens to window scroll and resize events. We cache scroll values so that
   * application code can access them without triggering reflows.
   *
   * NOTE: Scroll events do not bubble.
   *
   * @see http://www.quirksmode.org/dom/events/scroll.html
   */
  ensureScrollValueMonitoring: function(){
    if (!isMonitoringScrollValue) {
      var refresh = ViewportMetrics.refreshScrollValues;
      ReactBrowserEventEmitter.ReactEventListener.monitorScrollValue(refresh);
      isMonitoringScrollValue = true;
    }
  },

  eventNameDispatchConfigs: EventPluginHub.eventNameDispatchConfigs,

  registrationNameModules: EventPluginHub.registrationNameModules,

  putListener: EventPluginHub.putListener,

  getListener: EventPluginHub.getListener,

  deleteListener: EventPluginHub.deleteListener,

  deleteAllListeners: EventPluginHub.deleteAllListeners

});

module.exports = ReactBrowserEventEmitter;

},{"./EventConstants":28,"./EventPluginHub":30,"./EventPluginRegistry":31,"./Object.assign":39,"./ReactEventEmitterMixin":69,"./ViewportMetrics":109,"./isEventSupported":140}],44:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactChildren
 */

"use strict";

var PooledClass = require("./PooledClass");

var traverseAllChildren = require("./traverseAllChildren");
var warning = require("./warning");

var twoArgumentPooler = PooledClass.twoArgumentPooler;
var threeArgumentPooler = PooledClass.threeArgumentPooler;

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * traversal. Allows avoiding binding callbacks.
 *
 * @constructor ForEachBookKeeping
 * @param {!function} forEachFunction Function to perform traversal with.
 * @param {?*} forEachContext Context to perform context with.
 */
function ForEachBookKeeping(forEachFunction, forEachContext) {
  this.forEachFunction = forEachFunction;
  this.forEachContext = forEachContext;
}
PooledClass.addPoolingTo(ForEachBookKeeping, twoArgumentPooler);

function forEachSingleChild(traverseContext, child, name, i) {
  var forEachBookKeeping = traverseContext;
  forEachBookKeeping.forEachFunction.call(
    forEachBookKeeping.forEachContext, child, i);
}

/**
 * Iterates through children that are typically specified as `props.children`.
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} forEachFunc.
 * @param {*} forEachContext Context for forEachContext.
 */
function forEachChildren(children, forEachFunc, forEachContext) {
  if (children == null) {
    return children;
  }

  var traverseContext =
    ForEachBookKeeping.getPooled(forEachFunc, forEachContext);
  traverseAllChildren(children, forEachSingleChild, traverseContext);
  ForEachBookKeeping.release(traverseContext);
}

/**
 * PooledClass representing the bookkeeping associated with performing a child
 * mapping. Allows avoiding binding callbacks.
 *
 * @constructor MapBookKeeping
 * @param {!*} mapResult Object containing the ordered map of results.
 * @param {!function} mapFunction Function to perform mapping with.
 * @param {?*} mapContext Context to perform mapping with.
 */
function MapBookKeeping(mapResult, mapFunction, mapContext) {
  this.mapResult = mapResult;
  this.mapFunction = mapFunction;
  this.mapContext = mapContext;
}
PooledClass.addPoolingTo(MapBookKeeping, threeArgumentPooler);

function mapSingleChildIntoContext(traverseContext, child, name, i) {
  var mapBookKeeping = traverseContext;
  var mapResult = mapBookKeeping.mapResult;

  var keyUnique = !mapResult.hasOwnProperty(name);
  ("production" !== process.env.NODE_ENV ? warning(
    keyUnique,
    'ReactChildren.map(...): Encountered two children with the same key, ' +
    '`%s`. Child keys must be unique; when two children share a key, only ' +
    'the first child will be used.',
    name
  ) : null);

  if (keyUnique) {
    var mappedChild =
      mapBookKeeping.mapFunction.call(mapBookKeeping.mapContext, child, i);
    mapResult[name] = mappedChild;
  }
}

/**
 * Maps children that are typically specified as `props.children`.
 *
 * The provided mapFunction(child, key, index) will be called for each
 * leaf child.
 *
 * TODO: This may likely break any calls to `ReactChildren.map` that were
 * previously relying on the fact that we guarded against null children.
 *
 * @param {?*} children Children tree container.
 * @param {function(*, int)} mapFunction.
 * @param {*} mapContext Context for mapFunction.
 * @return {object} Object containing the ordered map of results.
 */
function mapChildren(children, func, context) {
  if (children == null) {
    return children;
  }

  var mapResult = {};
  var traverseContext = MapBookKeeping.getPooled(mapResult, func, context);
  traverseAllChildren(children, mapSingleChildIntoContext, traverseContext);
  MapBookKeeping.release(traverseContext);
  return mapResult;
}

function forEachSingleChildDummy(traverseContext, child, name, i) {
  return null;
}

/**
 * Count the number of children that are typically specified as
 * `props.children`.
 *
 * @param {?*} children Children tree container.
 * @return {number} The number of children.
 */
function countChildren(children, context) {
  return traverseAllChildren(children, forEachSingleChildDummy, null);
}

var ReactChildren = {
  forEach: forEachChildren,
  map: mapChildren,
  count: countChildren
};

module.exports = ReactChildren;

},{"./PooledClass":40,"./traverseAllChildren":157,"./warning":158}],45:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponent
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactOwner = require("./ReactOwner");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var invariant = require("./invariant");
var keyMirror = require("./keyMirror");

/**
 * Every React component is in one of these life cycles.
 */
var ComponentLifeCycle = keyMirror({
  /**
   * Mounted components have a DOM node representation and are capable of
   * receiving new props.
   */
  MOUNTED: null,
  /**
   * Unmounted components are inactive and cannot receive new props.
   */
  UNMOUNTED: null
});

var injected = false;

/**
 * Optionally injectable environment dependent cleanup hook. (server vs.
 * browser etc). Example: A browser system caches DOM nodes based on component
 * ID and must remove that cache entry when this instance is unmounted.
 *
 * @private
 */
var unmountIDFromEnvironment = null;

/**
 * The "image" of a component tree, is the platform specific (typically
 * serialized) data that represents a tree of lower level UI building blocks.
 * On the web, this "image" is HTML markup which describes a construction of
 * low level `div` and `span` nodes. Other platforms may have different
 * encoding of this "image". This must be injected.
 *
 * @private
 */
var mountImageIntoNode = null;

/**
 * Components are the basic units of composition in React.
 *
 * Every component accepts a set of keyed input parameters known as "props" that
 * are initialized by the constructor. Once a component is mounted, the props
 * can be mutated using `setProps` or `replaceProps`.
 *
 * Every component is capable of the following operations:
 *
 *   `mountComponent`
 *     Initializes the component, renders markup, and registers event listeners.
 *
 *   `receiveComponent`
 *     Updates the rendered DOM nodes to match the given component.
 *
 *   `unmountComponent`
 *     Releases any resources allocated by this component.
 *
 * Components can also be "owned" by other components. Being owned by another
 * component means being constructed by that component. This is different from
 * being the child of a component, which means having a DOM representation that
 * is a child of the DOM representation of that component.
 *
 * @class ReactComponent
 */
var ReactComponent = {

  injection: {
    injectEnvironment: function(ReactComponentEnvironment) {
      ("production" !== process.env.NODE_ENV ? invariant(
        !injected,
        'ReactComponent: injectEnvironment() can only be called once.'
      ) : invariant(!injected));
      mountImageIntoNode = ReactComponentEnvironment.mountImageIntoNode;
      unmountIDFromEnvironment =
        ReactComponentEnvironment.unmountIDFromEnvironment;
      ReactComponent.BackendIDOperations =
        ReactComponentEnvironment.BackendIDOperations;
      injected = true;
    }
  },

  /**
   * @internal
   */
  LifeCycle: ComponentLifeCycle,

  /**
   * Injected module that provides ability to mutate individual properties.
   * Injected into the base class because many different subclasses need access
   * to this.
   *
   * @internal
   */
  BackendIDOperations: null,

  /**
   * Base functionality for every ReactComponent constructor. Mixed into the
   * `ReactComponent` prototype, but exposed statically for easy access.
   *
   * @lends {ReactComponent.prototype}
   */
  Mixin: {

    /**
     * Checks whether or not this component is mounted.
     *
     * @return {boolean} True if mounted, false otherwise.
     * @final
     * @protected
     */
    isMounted: function() {
      return this._lifeCycleState === ComponentLifeCycle.MOUNTED;
    },

    /**
     * Sets a subset of the props.
     *
     * @param {object} partialProps Subset of the next props.
     * @param {?function} callback Called after props are updated.
     * @final
     * @public
     */
    setProps: function(partialProps, callback) {
      // Merge with the pending element if it exists, otherwise with existing
      // element props.
      var element = this._pendingElement || this._currentElement;
      this.replaceProps(
        assign({}, element.props, partialProps),
        callback
      );
    },

    /**
     * Replaces all of the props.
     *
     * @param {object} props New props.
     * @param {?function} callback Called after props are updated.
     * @final
     * @public
     */
    replaceProps: function(props, callback) {
      ("production" !== process.env.NODE_ENV ? invariant(
        this.isMounted(),
        'replaceProps(...): Can only update a mounted component.'
      ) : invariant(this.isMounted()));
      ("production" !== process.env.NODE_ENV ? invariant(
        this._mountDepth === 0,
        'replaceProps(...): You called `setProps` or `replaceProps` on a ' +
        'component with a parent. This is an anti-pattern since props will ' +
        'get reactively updated when rendered. Instead, change the owner\'s ' +
        '`render` method to pass the correct value as props to the component ' +
        'where it is created.'
      ) : invariant(this._mountDepth === 0));
      // This is a deoptimized path. We optimize for always having a element.
      // This creates an extra internal element.
      this._pendingElement = ReactElement.cloneAndReplaceProps(
        this._pendingElement || this._currentElement,
        props
      );
      ReactUpdates.enqueueUpdate(this, callback);
    },

    /**
     * Schedule a partial update to the props. Only used for internal testing.
     *
     * @param {object} partialProps Subset of the next props.
     * @param {?function} callback Called after props are updated.
     * @final
     * @internal
     */
    _setPropsInternal: function(partialProps, callback) {
      // This is a deoptimized path. We optimize for always having a element.
      // This creates an extra internal element.
      var element = this._pendingElement || this._currentElement;
      this._pendingElement = ReactElement.cloneAndReplaceProps(
        element,
        assign({}, element.props, partialProps)
      );
      ReactUpdates.enqueueUpdate(this, callback);
    },

    /**
     * Base constructor for all React components.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.construct.call(this, ...)`.
     *
     * @param {ReactElement} element
     * @internal
     */
    construct: function(element) {
      // This is the public exposed props object after it has been processed
      // with default props. The element's props represents the true internal
      // state of the props.
      this.props = element.props;
      // Record the component responsible for creating this component.
      // This is accessible through the element but we maintain an extra
      // field for compatibility with devtools and as a way to make an
      // incremental update. TODO: Consider deprecating this field.
      this._owner = element._owner;

      // All components start unmounted.
      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;

      // See ReactUpdates.
      this._pendingCallbacks = null;

      // We keep the old element and a reference to the pending element
      // to track updates.
      this._currentElement = element;
      this._pendingElement = null;
    },

    /**
     * Initializes the component, renders markup, and registers event listeners.
     *
     * NOTE: This does not insert any nodes into the DOM.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.mountComponent.call(this, ...)`.
     *
     * @param {string} rootID DOM ID of the root node.
     * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
     * @param {number} mountDepth number of components in the owner hierarchy.
     * @return {?string} Rendered markup to be inserted into the DOM.
     * @internal
     */
    mountComponent: function(rootID, transaction, mountDepth) {
      ("production" !== process.env.NODE_ENV ? invariant(
        !this.isMounted(),
        'mountComponent(%s, ...): Can only mount an unmounted component. ' +
        'Make sure to avoid storing components between renders or reusing a ' +
        'single component instance in multiple places.',
        rootID
      ) : invariant(!this.isMounted()));
      var ref = this._currentElement.ref;
      if (ref != null) {
        var owner = this._currentElement._owner;
        ReactOwner.addComponentAsRefTo(this, ref, owner);
      }
      this._rootNodeID = rootID;
      this._lifeCycleState = ComponentLifeCycle.MOUNTED;
      this._mountDepth = mountDepth;
      // Effectively: return '';
    },

    /**
     * Releases any resources allocated by `mountComponent`.
     *
     * NOTE: This does not remove any nodes from the DOM.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.unmountComponent.call(this)`.
     *
     * @internal
     */
    unmountComponent: function() {
      ("production" !== process.env.NODE_ENV ? invariant(
        this.isMounted(),
        'unmountComponent(): Can only unmount a mounted component.'
      ) : invariant(this.isMounted()));
      var ref = this._currentElement.ref;
      if (ref != null) {
        ReactOwner.removeComponentAsRefFrom(this, ref, this._owner);
      }
      unmountIDFromEnvironment(this._rootNodeID);
      this._rootNodeID = null;
      this._lifeCycleState = ComponentLifeCycle.UNMOUNTED;
    },

    /**
     * Given a new instance of this component, updates the rendered DOM nodes
     * as if that instance was rendered instead.
     *
     * Subclasses that override this method should make sure to invoke
     * `ReactComponent.Mixin.receiveComponent.call(this, ...)`.
     *
     * @param {object} nextComponent Next set of properties.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    receiveComponent: function(nextElement, transaction) {
      ("production" !== process.env.NODE_ENV ? invariant(
        this.isMounted(),
        'receiveComponent(...): Can only update a mounted component.'
      ) : invariant(this.isMounted()));
      this._pendingElement = nextElement;
      this.performUpdateIfNecessary(transaction);
    },

    /**
     * If `_pendingElement` is set, update the component.
     *
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    performUpdateIfNecessary: function(transaction) {
      if (this._pendingElement == null) {
        return;
      }
      var prevElement = this._currentElement;
      var nextElement = this._pendingElement;
      this._currentElement = nextElement;
      this.props = nextElement.props;
      this._owner = nextElement._owner;
      this._pendingElement = null;
      this.updateComponent(transaction, prevElement);
    },

    /**
     * Updates the component's currently mounted representation.
     *
     * @param {ReactReconcileTransaction} transaction
     * @param {object} prevElement
     * @internal
     */
    updateComponent: function(transaction, prevElement) {
      var nextElement = this._currentElement;

      // If either the owner or a `ref` has changed, make sure the newest owner
      // has stored a reference to `this`, and the previous owner (if different)
      // has forgotten the reference to `this`. We use the element instead
      // of the public this.props because the post processing cannot determine
      // a ref. The ref conceptually lives on the element.

      // TODO: Should this even be possible? The owner cannot change because
      // it's forbidden by shouldUpdateReactComponent. The ref can change
      // if you swap the keys of but not the refs. Reconsider where this check
      // is made. It probably belongs where the key checking and
      // instantiateReactComponent is done.

      if (nextElement._owner !== prevElement._owner ||
          nextElement.ref !== prevElement.ref) {
        if (prevElement.ref != null) {
          ReactOwner.removeComponentAsRefFrom(
            this, prevElement.ref, prevElement._owner
          );
        }
        // Correct, even if the owner is the same, and only the ref has changed.
        if (nextElement.ref != null) {
          ReactOwner.addComponentAsRefTo(
            this,
            nextElement.ref,
            nextElement._owner
          );
        }
      }
    },

    /**
     * Mounts this component and inserts it into the DOM.
     *
     * @param {string} rootID DOM ID of the root node.
     * @param {DOMElement} container DOM element to mount into.
     * @param {boolean} shouldReuseMarkup If true, do not insert markup
     * @final
     * @internal
     * @see {ReactMount.render}
     */
    mountComponentIntoNode: function(rootID, container, shouldReuseMarkup) {
      var transaction = ReactUpdates.ReactReconcileTransaction.getPooled();
      transaction.perform(
        this._mountComponentIntoNode,
        this,
        rootID,
        container,
        transaction,
        shouldReuseMarkup
      );
      ReactUpdates.ReactReconcileTransaction.release(transaction);
    },

    /**
     * @param {string} rootID DOM ID of the root node.
     * @param {DOMElement} container DOM element to mount into.
     * @param {ReactReconcileTransaction} transaction
     * @param {boolean} shouldReuseMarkup If true, do not insert markup
     * @final
     * @private
     */
    _mountComponentIntoNode: function(
        rootID,
        container,
        transaction,
        shouldReuseMarkup) {
      var markup = this.mountComponent(rootID, transaction, 0);
      mountImageIntoNode(markup, container, shouldReuseMarkup);
    },

    /**
     * Checks if this component is owned by the supplied `owner` component.
     *
     * @param {ReactComponent} owner Component to check.
     * @return {boolean} True if `owners` owns this component.
     * @final
     * @internal
     */
    isOwnedBy: function(owner) {
      return this._owner === owner;
    },

    /**
     * Gets another component, that shares the same owner as this one, by ref.
     *
     * @param {string} ref of a sibling Component.
     * @return {?ReactComponent} the actual sibling Component.
     * @final
     * @internal
     */
    getSiblingByRef: function(ref) {
      var owner = this._owner;
      if (!owner || !owner.refs) {
        return null;
      }
      return owner.refs[ref];
    }
  }
};

module.exports = ReactComponent;

},{"./Object.assign":39,"./ReactElement":65,"./ReactOwner":80,"./ReactUpdates":92,"./invariant":139,"./keyMirror":145}],46:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactComponentBrowserEnvironment
 */

/*jslint evil: true */

"use strict";

var ReactDOMIDOperations = require("./ReactDOMIDOperations");
var ReactMarkupChecksum = require("./ReactMarkupChecksum");
var ReactMount = require("./ReactMount");
var ReactPerf = require("./ReactPerf");
var ReactReconcileTransaction = require("./ReactReconcileTransaction");

var getReactRootElementInContainer = require("./getReactRootElementInContainer");
var invariant = require("./invariant");
var setInnerHTML = require("./setInnerHTML");


var ELEMENT_NODE_TYPE = 1;
var DOC_NODE_TYPE = 9;


/**
 * Abstracts away all functionality of `ReactComponent` requires knowledge of
 * the browser context.
 */
var ReactComponentBrowserEnvironment = {
  ReactReconcileTransaction: ReactReconcileTransaction,

  BackendIDOperations: ReactDOMIDOperations,

  /**
   * If a particular environment requires that some resources be cleaned up,
   * specify this in the injected Mixin. In the DOM, we would likely want to
   * purge any cached node ID lookups.
   *
   * @private
   */
  unmountIDFromEnvironment: function(rootNodeID) {
    ReactMount.purgeID(rootNodeID);
  },

  /**
   * @param {string} markup Markup string to place into the DOM Element.
   * @param {DOMElement} container DOM Element to insert markup into.
   * @param {boolean} shouldReuseMarkup Should reuse the existing markup in the
   * container if possible.
   */
  mountImageIntoNode: ReactPerf.measure(
    'ReactComponentBrowserEnvironment',
    'mountImageIntoNode',
    function(markup, container, shouldReuseMarkup) {
      ("production" !== process.env.NODE_ENV ? invariant(
        container && (
          container.nodeType === ELEMENT_NODE_TYPE ||
            container.nodeType === DOC_NODE_TYPE
        ),
        'mountComponentIntoNode(...): Target container is not valid.'
      ) : invariant(container && (
        container.nodeType === ELEMENT_NODE_TYPE ||
          container.nodeType === DOC_NODE_TYPE
      )));

      if (shouldReuseMarkup) {
        if (ReactMarkupChecksum.canReuseMarkup(
          markup,
          getReactRootElementInContainer(container))) {
          return;
        } else {
          ("production" !== process.env.NODE_ENV ? invariant(
            container.nodeType !== DOC_NODE_TYPE,
            'You\'re trying to render a component to the document using ' +
            'server rendering but the checksum was invalid. This usually ' +
            'means you rendered a different component type or props on ' +
            'the client from the one on the server, or your render() ' +
            'methods are impure. React cannot handle this case due to ' +
            'cross-browser quirks by rendering at the document root. You ' +
            'should look for environment dependent code in your components ' +
            'and ensure the props are the same client and server side.'
          ) : invariant(container.nodeType !== DOC_NODE_TYPE));

          if ("production" !== process.env.NODE_ENV) {
            console.warn(
              'React attempted to use reuse markup in a container but the ' +
              'checksum was invalid. This generally means that you are ' +
              'using server rendering and the markup generated on the ' +
              'server was not what the client was expecting. React injected ' +
              'new markup to compensate which works but you have lost many ' +
              'of the benefits of server rendering. Instead, figure out ' +
              'why the markup being generated is different on the client ' +
              'or server.'
            );
          }
        }
      }

      ("production" !== process.env.NODE_ENV ? invariant(
        container.nodeType !== DOC_NODE_TYPE,
        'You\'re trying to render a component to the document but ' +
          'you didn\'t use server rendering. We can\'t do this ' +
          'without using server rendering due to cross-browser quirks. ' +
          'See renderComponentToString() for server rendering.'
      ) : invariant(container.nodeType !== DOC_NODE_TYPE));

      setInnerHTML(container, markup);
    }
  )
};

module.exports = ReactComponentBrowserEnvironment;

},{"./ReactDOMIDOperations":54,"./ReactMarkupChecksum":75,"./ReactMount":76,"./ReactPerf":81,"./ReactReconcileTransaction":87,"./getReactRootElementInContainer":133,"./invariant":139,"./setInnerHTML":153}],47:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCompositeComponent
 */

"use strict";

var ReactComponent = require("./ReactComponent");
var ReactContext = require("./ReactContext");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactElement = require("./ReactElement");
var ReactElementValidator = require("./ReactElementValidator");
var ReactEmptyComponent = require("./ReactEmptyComponent");
var ReactErrorUtils = require("./ReactErrorUtils");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactOwner = require("./ReactOwner");
var ReactPerf = require("./ReactPerf");
var ReactPropTransferer = require("./ReactPropTransferer");
var ReactPropTypeLocations = require("./ReactPropTypeLocations");
var ReactPropTypeLocationNames = require("./ReactPropTypeLocationNames");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var instantiateReactComponent = require("./instantiateReactComponent");
var invariant = require("./invariant");
var keyMirror = require("./keyMirror");
var keyOf = require("./keyOf");
var monitorCodeUse = require("./monitorCodeUse");
var mapObject = require("./mapObject");
var shouldUpdateReactComponent = require("./shouldUpdateReactComponent");
var warning = require("./warning");

var MIXINS_KEY = keyOf({mixins: null});

/**
 * Policies that describe methods in `ReactCompositeComponentInterface`.
 */
var SpecPolicy = keyMirror({
  /**
   * These methods may be defined only once by the class specification or mixin.
   */
  DEFINE_ONCE: null,
  /**
   * These methods may be defined by both the class specification and mixins.
   * Subsequent definitions will be chained. These methods must return void.
   */
  DEFINE_MANY: null,
  /**
   * These methods are overriding the base ReactCompositeComponent class.
   */
  OVERRIDE_BASE: null,
  /**
   * These methods are similar to DEFINE_MANY, except we assume they return
   * objects. We try to merge the keys of the return values of all the mixed in
   * functions. If there is a key conflict we throw.
   */
  DEFINE_MANY_MERGED: null
});


var injectedMixins = [];

/**
 * Composite components are higher-level components that compose other composite
 * or native components.
 *
 * To create a new type of `ReactCompositeComponent`, pass a specification of
 * your new class to `React.createClass`. The only requirement of your class
 * specification is that you implement a `render` method.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return <div>Hello World</div>;
 *     }
 *   });
 *
 * The class specification supports a specific protocol of methods that have
 * special meaning (e.g. `render`). See `ReactCompositeComponentInterface` for
 * more the comprehensive protocol. Any other properties and methods in the
 * class specification will available on the prototype.
 *
 * @interface ReactCompositeComponentInterface
 * @internal
 */
var ReactCompositeComponentInterface = {

  /**
   * An array of Mixin objects to include when defining your component.
   *
   * @type {array}
   * @optional
   */
  mixins: SpecPolicy.DEFINE_MANY,

  /**
   * An object containing properties and methods that should be defined on
   * the component's constructor instead of its prototype (static methods).
   *
   * @type {object}
   * @optional
   */
  statics: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of prop types for this component.
   *
   * @type {object}
   * @optional
   */
  propTypes: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types for this component.
   *
   * @type {object}
   * @optional
   */
  contextTypes: SpecPolicy.DEFINE_MANY,

  /**
   * Definition of context types this component sets for its children.
   *
   * @type {object}
   * @optional
   */
  childContextTypes: SpecPolicy.DEFINE_MANY,

  // ==== Definition methods ====

  /**
   * Invoked when the component is mounted. Values in the mapping will be set on
   * `this.props` if that prop is not specified (i.e. using an `in` check).
   *
   * This method is invoked before `getInitialState` and therefore cannot rely
   * on `this.state` or use `this.setState`.
   *
   * @return {object}
   * @optional
   */
  getDefaultProps: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * Invoked once before the component is mounted. The return value will be used
   * as the initial value of `this.state`.
   *
   *   getInitialState: function() {
   *     return {
   *       isOn: false,
   *       fooBaz: new BazFoo()
   *     }
   *   }
   *
   * @return {object}
   * @optional
   */
  getInitialState: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * @return {object}
   * @optional
   */
  getChildContext: SpecPolicy.DEFINE_MANY_MERGED,

  /**
   * Uses props from `this.props` and state from `this.state` to render the
   * structure of the component.
   *
   * No guarantees are made about when or how often this method is invoked, so
   * it must not have side effects.
   *
   *   render: function() {
   *     var name = this.props.name;
   *     return <div>Hello, {name}!</div>;
   *   }
   *
   * @return {ReactComponent}
   * @nosideeffects
   * @required
   */
  render: SpecPolicy.DEFINE_ONCE,



  // ==== Delegate methods ====

  /**
   * Invoked when the component is initially created and about to be mounted.
   * This may have side effects, but any external subscriptions or data created
   * by this method must be cleaned up in `componentWillUnmount`.
   *
   * @optional
   */
  componentWillMount: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component has been mounted and has a DOM representation.
   * However, there is no guarantee that the DOM node is in the document.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been mounted (initialized and rendered) for the first time.
   *
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidMount: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked before the component receives new props.
   *
   * Use this as an opportunity to react to a prop transition by updating the
   * state using `this.setState`. Current props are accessed via `this.props`.
   *
   *   componentWillReceiveProps: function(nextProps, nextContext) {
   *     this.setState({
   *       likesIncreasing: nextProps.likeCount > this.props.likeCount
   *     });
   *   }
   *
   * NOTE: There is no equivalent `componentWillReceiveState`. An incoming prop
   * transition may cause a state change, but the opposite is not true. If you
   * need it, you are probably looking for `componentWillUpdate`.
   *
   * @param {object} nextProps
   * @optional
   */
  componentWillReceiveProps: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked while deciding if the component should be updated as a result of
   * receiving new props, state and/or context.
   *
   * Use this as an opportunity to `return false` when you're certain that the
   * transition to the new props/state/context will not require a component
   * update.
   *
   *   shouldComponentUpdate: function(nextProps, nextState, nextContext) {
   *     return !equal(nextProps, this.props) ||
   *       !equal(nextState, this.state) ||
   *       !equal(nextContext, this.context);
   *   }
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @return {boolean} True if the component should update.
   * @optional
   */
  shouldComponentUpdate: SpecPolicy.DEFINE_ONCE,

  /**
   * Invoked when the component is about to update due to a transition from
   * `this.props`, `this.state` and `this.context` to `nextProps`, `nextState`
   * and `nextContext`.
   *
   * Use this as an opportunity to perform preparation before an update occurs.
   *
   * NOTE: You **cannot** use `this.setState()` in this method.
   *
   * @param {object} nextProps
   * @param {?object} nextState
   * @param {?object} nextContext
   * @param {ReactReconcileTransaction} transaction
   * @optional
   */
  componentWillUpdate: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component's DOM representation has been updated.
   *
   * Use this as an opportunity to operate on the DOM when the component has
   * been updated.
   *
   * @param {object} prevProps
   * @param {?object} prevState
   * @param {?object} prevContext
   * @param {DOMElement} rootNode DOM element representing the component.
   * @optional
   */
  componentDidUpdate: SpecPolicy.DEFINE_MANY,

  /**
   * Invoked when the component is about to be removed from its parent and have
   * its DOM representation destroyed.
   *
   * Use this as an opportunity to deallocate any external resources.
   *
   * NOTE: There is no `componentDidUnmount` since your component will have been
   * destroyed by that point.
   *
   * @optional
   */
  componentWillUnmount: SpecPolicy.DEFINE_MANY,



  // ==== Advanced methods ====

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   * @overridable
   */
  updateComponent: SpecPolicy.OVERRIDE_BASE

};

/**
 * Mapping from class specification keys to special processing functions.
 *
 * Although these are declared like instance properties in the specification
 * when defining classes using `React.createClass`, they are actually static
 * and are accessible on the constructor instead of the prototype. Despite
 * being static, they must be defined outside of the "statics" key under
 * which all other static methods are defined.
 */
var RESERVED_SPEC_KEYS = {
  displayName: function(Constructor, displayName) {
    Constructor.displayName = displayName;
  },
  mixins: function(Constructor, mixins) {
    if (mixins) {
      for (var i = 0; i < mixins.length; i++) {
        mixSpecIntoComponent(Constructor, mixins[i]);
      }
    }
  },
  childContextTypes: function(Constructor, childContextTypes) {
    validateTypeDef(
      Constructor,
      childContextTypes,
      ReactPropTypeLocations.childContext
    );
    Constructor.childContextTypes = assign(
      {},
      Constructor.childContextTypes,
      childContextTypes
    );
  },
  contextTypes: function(Constructor, contextTypes) {
    validateTypeDef(
      Constructor,
      contextTypes,
      ReactPropTypeLocations.context
    );
    Constructor.contextTypes = assign(
      {},
      Constructor.contextTypes,
      contextTypes
    );
  },
  /**
   * Special case getDefaultProps which should move into statics but requires
   * automatic merging.
   */
  getDefaultProps: function(Constructor, getDefaultProps) {
    if (Constructor.getDefaultProps) {
      Constructor.getDefaultProps = createMergedResultFunction(
        Constructor.getDefaultProps,
        getDefaultProps
      );
    } else {
      Constructor.getDefaultProps = getDefaultProps;
    }
  },
  propTypes: function(Constructor, propTypes) {
    validateTypeDef(
      Constructor,
      propTypes,
      ReactPropTypeLocations.prop
    );
    Constructor.propTypes = assign(
      {},
      Constructor.propTypes,
      propTypes
    );
  },
  statics: function(Constructor, statics) {
    mixStaticSpecIntoComponent(Constructor, statics);
  }
};

function getDeclarationErrorAddendum(component) {
  var owner = component._owner || null;
  if (owner && owner.constructor && owner.constructor.displayName) {
    return ' Check the render method of `' + owner.constructor.displayName +
      '`.';
  }
  return '';
}

function validateTypeDef(Constructor, typeDef, location) {
  for (var propName in typeDef) {
    if (typeDef.hasOwnProperty(propName)) {
      ("production" !== process.env.NODE_ENV ? invariant(
        typeof typeDef[propName] == 'function',
        '%s: %s type `%s` is invalid; it must be a function, usually from ' +
        'React.PropTypes.',
        Constructor.displayName || 'ReactCompositeComponent',
        ReactPropTypeLocationNames[location],
        propName
      ) : invariant(typeof typeDef[propName] == 'function'));
    }
  }
}

function validateMethodOverride(proto, name) {
  var specPolicy = ReactCompositeComponentInterface.hasOwnProperty(name) ?
    ReactCompositeComponentInterface[name] :
    null;

  // Disallow overriding of base class methods unless explicitly allowed.
  if (ReactCompositeComponentMixin.hasOwnProperty(name)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      specPolicy === SpecPolicy.OVERRIDE_BASE,
      'ReactCompositeComponentInterface: You are attempting to override ' +
      '`%s` from your class specification. Ensure that your method names ' +
      'do not overlap with React methods.',
      name
    ) : invariant(specPolicy === SpecPolicy.OVERRIDE_BASE));
  }

  // Disallow defining methods more than once unless explicitly allowed.
  if (proto.hasOwnProperty(name)) {
    ("production" !== process.env.NODE_ENV ? invariant(
      specPolicy === SpecPolicy.DEFINE_MANY ||
      specPolicy === SpecPolicy.DEFINE_MANY_MERGED,
      'ReactCompositeComponentInterface: You are attempting to define ' +
      '`%s` on your component more than once. This conflict may be due ' +
      'to a mixin.',
      name
    ) : invariant(specPolicy === SpecPolicy.DEFINE_MANY ||
    specPolicy === SpecPolicy.DEFINE_MANY_MERGED));
  }
}

function validateLifeCycleOnReplaceState(instance) {
  var compositeLifeCycleState = instance._compositeLifeCycleState;
  ("production" !== process.env.NODE_ENV ? invariant(
    instance.isMounted() ||
      compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
    'replaceState(...): Can only update a mounted or mounting component.'
  ) : invariant(instance.isMounted() ||
    compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactCurrentOwner.current == null,
    'replaceState(...): Cannot update during an existing state transition ' +
    '(such as within `render`). Render methods should be a pure function ' +
    'of props and state.'
  ) : invariant(ReactCurrentOwner.current == null));
  ("production" !== process.env.NODE_ENV ? invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING,
    'replaceState(...): Cannot update while unmounting component. This ' +
    'usually means you called setState() on an unmounted component.'
  ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING));
}

/**
 * Mixin helper which handles policy validation and reserved
 * specification keys when building `ReactCompositeComponent` classses.
 */
function mixSpecIntoComponent(Constructor, spec) {
  if (!spec) {
    return;
  }

  ("production" !== process.env.NODE_ENV ? invariant(
    !ReactLegacyElement.isValidFactory(spec),
    'ReactCompositeComponent: You\'re attempting to ' +
    'use a component class as a mixin. Instead, just use a regular object.'
  ) : invariant(!ReactLegacyElement.isValidFactory(spec)));
  ("production" !== process.env.NODE_ENV ? invariant(
    !ReactElement.isValidElement(spec),
    'ReactCompositeComponent: You\'re attempting to ' +
    'use a component as a mixin. Instead, just use a regular object.'
  ) : invariant(!ReactElement.isValidElement(spec)));

  var proto = Constructor.prototype;

  // By handling mixins before any other properties, we ensure the same
  // chaining order is applied to methods with DEFINE_MANY policy, whether
  // mixins are listed before or after these methods in the spec.
  if (spec.hasOwnProperty(MIXINS_KEY)) {
    RESERVED_SPEC_KEYS.mixins(Constructor, spec.mixins);
  }

  for (var name in spec) {
    if (!spec.hasOwnProperty(name)) {
      continue;
    }

    if (name === MIXINS_KEY) {
      // We have already handled mixins in a special case above
      continue;
    }

    var property = spec[name];
    validateMethodOverride(proto, name);

    if (RESERVED_SPEC_KEYS.hasOwnProperty(name)) {
      RESERVED_SPEC_KEYS[name](Constructor, property);
    } else {
      // Setup methods on prototype:
      // The following member methods should not be automatically bound:
      // 1. Expected ReactCompositeComponent methods (in the "interface").
      // 2. Overridden methods (that were mixed in).
      var isCompositeComponentMethod =
        ReactCompositeComponentInterface.hasOwnProperty(name);
      var isAlreadyDefined = proto.hasOwnProperty(name);
      var markedDontBind = property && property.__reactDontBind;
      var isFunction = typeof property === 'function';
      var shouldAutoBind =
        isFunction &&
        !isCompositeComponentMethod &&
        !isAlreadyDefined &&
        !markedDontBind;

      if (shouldAutoBind) {
        if (!proto.__reactAutoBindMap) {
          proto.__reactAutoBindMap = {};
        }
        proto.__reactAutoBindMap[name] = property;
        proto[name] = property;
      } else {
        if (isAlreadyDefined) {
          var specPolicy = ReactCompositeComponentInterface[name];

          // These cases should already be caught by validateMethodOverride
          ("production" !== process.env.NODE_ENV ? invariant(
            isCompositeComponentMethod && (
              specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
              specPolicy === SpecPolicy.DEFINE_MANY
            ),
            'ReactCompositeComponent: Unexpected spec policy %s for key %s ' +
            'when mixing in component specs.',
            specPolicy,
            name
          ) : invariant(isCompositeComponentMethod && (
            specPolicy === SpecPolicy.DEFINE_MANY_MERGED ||
            specPolicy === SpecPolicy.DEFINE_MANY
          )));

          // For methods which are defined more than once, call the existing
          // methods before calling the new property, merging if appropriate.
          if (specPolicy === SpecPolicy.DEFINE_MANY_MERGED) {
            proto[name] = createMergedResultFunction(proto[name], property);
          } else if (specPolicy === SpecPolicy.DEFINE_MANY) {
            proto[name] = createChainedFunction(proto[name], property);
          }
        } else {
          proto[name] = property;
          if ("production" !== process.env.NODE_ENV) {
            // Add verbose displayName to the function, which helps when looking
            // at profiling tools.
            if (typeof property === 'function' && spec.displayName) {
              proto[name].displayName = spec.displayName + '_' + name;
            }
          }
        }
      }
    }
  }
}

function mixStaticSpecIntoComponent(Constructor, statics) {
  if (!statics) {
    return;
  }
  for (var name in statics) {
    var property = statics[name];
    if (!statics.hasOwnProperty(name)) {
      continue;
    }

    var isReserved = name in RESERVED_SPEC_KEYS;
    ("production" !== process.env.NODE_ENV ? invariant(
      !isReserved,
      'ReactCompositeComponent: You are attempting to define a reserved ' +
      'property, `%s`, that shouldn\'t be on the "statics" key. Define it ' +
      'as an instance property instead; it will still be accessible on the ' +
      'constructor.',
      name
    ) : invariant(!isReserved));

    var isInherited = name in Constructor;
    ("production" !== process.env.NODE_ENV ? invariant(
      !isInherited,
      'ReactCompositeComponent: You are attempting to define ' +
      '`%s` on your component more than once. This conflict may be ' +
      'due to a mixin.',
      name
    ) : invariant(!isInherited));
    Constructor[name] = property;
  }
}

/**
 * Merge two objects, but throw if both contain the same key.
 *
 * @param {object} one The first object, which is mutated.
 * @param {object} two The second object
 * @return {object} one after it has been mutated to contain everything in two.
 */
function mergeObjectsWithNoDuplicateKeys(one, two) {
  ("production" !== process.env.NODE_ENV ? invariant(
    one && two && typeof one === 'object' && typeof two === 'object',
    'mergeObjectsWithNoDuplicateKeys(): Cannot merge non-objects'
  ) : invariant(one && two && typeof one === 'object' && typeof two === 'object'));

  mapObject(two, function(value, key) {
    ("production" !== process.env.NODE_ENV ? invariant(
      one[key] === undefined,
      'mergeObjectsWithNoDuplicateKeys(): ' +
      'Tried to merge two objects with the same key: `%s`. This conflict ' +
      'may be due to a mixin; in particular, this may be caused by two ' +
      'getInitialState() or getDefaultProps() methods returning objects ' +
      'with clashing keys.',
      key
    ) : invariant(one[key] === undefined));
    one[key] = value;
  });
  return one;
}

/**
 * Creates a function that invokes two functions and merges their return values.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createMergedResultFunction(one, two) {
  return function mergedResult() {
    var a = one.apply(this, arguments);
    var b = two.apply(this, arguments);
    if (a == null) {
      return b;
    } else if (b == null) {
      return a;
    }
    return mergeObjectsWithNoDuplicateKeys(a, b);
  };
}

/**
 * Creates a function that invokes two functions and ignores their return vales.
 *
 * @param {function} one Function to invoke first.
 * @param {function} two Function to invoke second.
 * @return {function} Function that invokes the two argument functions.
 * @private
 */
function createChainedFunction(one, two) {
  return function chainedFunction() {
    one.apply(this, arguments);
    two.apply(this, arguments);
  };
}

/**
 * `ReactCompositeComponent` maintains an auxiliary life cycle state in
 * `this._compositeLifeCycleState` (which can be null).
 *
 * This is different from the life cycle state maintained by `ReactComponent` in
 * `this._lifeCycleState`. The following diagram shows how the states overlap in
 * time. There are times when the CompositeLifeCycle is null - at those times it
 * is only meaningful to look at ComponentLifeCycle alone.
 *
 * Top Row: ReactComponent.ComponentLifeCycle
 * Low Row: ReactComponent.CompositeLifeCycle
 *
 * +-------+---------------------------------+--------+
 * |  UN   |             MOUNTED             |   UN   |
 * |MOUNTED|                                 | MOUNTED|
 * +-------+---------------------------------+--------+
 * |       ^--------+   +-------+   +--------^        |
 * |       |        |   |       |   |        |        |
 * |    0--|MOUNTING|-0-|RECEIVE|-0-|   UN   |--->0   |
 * |       |        |   |PROPS  |   |MOUNTING|        |
 * |       |        |   |       |   |        |        |
 * |       |        |   |       |   |        |        |
 * |       +--------+   +-------+   +--------+        |
 * |       |                                 |        |
 * +-------+---------------------------------+--------+
 */
var CompositeLifeCycle = keyMirror({
  /**
   * Components in the process of being mounted respond to state changes
   * differently.
   */
  MOUNTING: null,
  /**
   * Components in the process of being unmounted are guarded against state
   * changes.
   */
  UNMOUNTING: null,
  /**
   * Components that are mounted and receiving new props respond to state
   * changes differently.
   */
  RECEIVING_PROPS: null
});

/**
 * @lends {ReactCompositeComponent.prototype}
 */
var ReactCompositeComponentMixin = {

  /**
   * Base constructor for all composite component.
   *
   * @param {ReactElement} element
   * @final
   * @internal
   */
  construct: function(element) {
    // Children can be either an array or more than one argument
    ReactComponent.Mixin.construct.apply(this, arguments);
    ReactOwner.Mixin.construct.apply(this, arguments);

    this.state = null;
    this._pendingState = null;

    // This is the public post-processed context. The real context and pending
    // context lives on the element.
    this.context = null;

    this._compositeLifeCycleState = null;
  },

  /**
   * Checks whether or not this composite component is mounted.
   * @return {boolean} True if mounted, false otherwise.
   * @protected
   * @final
   */
  isMounted: function() {
    return ReactComponent.Mixin.isMounted.call(this) &&
      this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING;
  },

  /**
   * Initializes the component, renders markup, and registers event listeners.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {number} mountDepth number of components in the owner hierarchy
   * @return {?string} Rendered markup to be inserted into the DOM.
   * @final
   * @internal
   */
  mountComponent: ReactPerf.measure(
    'ReactCompositeComponent',
    'mountComponent',
    function(rootID, transaction, mountDepth) {
      ReactComponent.Mixin.mountComponent.call(
        this,
        rootID,
        transaction,
        mountDepth
      );
      this._compositeLifeCycleState = CompositeLifeCycle.MOUNTING;

      if (this.__reactAutoBindMap) {
        this._bindAutoBindMethods();
      }

      this.context = this._processContext(this._currentElement._context);
      this.props = this._processProps(this.props);

      this.state = this.getInitialState ? this.getInitialState() : null;
      ("production" !== process.env.NODE_ENV ? invariant(
        typeof this.state === 'object' && !Array.isArray(this.state),
        '%s.getInitialState(): must return an object or null',
        this.constructor.displayName || 'ReactCompositeComponent'
      ) : invariant(typeof this.state === 'object' && !Array.isArray(this.state)));

      this._pendingState = null;
      this._pendingForceUpdate = false;

      if (this.componentWillMount) {
        this.componentWillMount();
        // When mounting, calls to `setState` by `componentWillMount` will set
        // `this._pendingState` without triggering a re-render.
        if (this._pendingState) {
          this.state = this._pendingState;
          this._pendingState = null;
        }
      }

      this._renderedComponent = instantiateReactComponent(
        this._renderValidatedComponent(),
        this._currentElement.type // The wrapping type
      );

      // Done with mounting, `setState` will now trigger UI changes.
      this._compositeLifeCycleState = null;
      var markup = this._renderedComponent.mountComponent(
        rootID,
        transaction,
        mountDepth + 1
      );
      if (this.componentDidMount) {
        transaction.getReactMountReady().enqueue(this.componentDidMount, this);
      }
      return markup;
    }
  ),

  /**
   * Releases any resources allocated by `mountComponent`.
   *
   * @final
   * @internal
   */
  unmountComponent: function() {
    this._compositeLifeCycleState = CompositeLifeCycle.UNMOUNTING;
    if (this.componentWillUnmount) {
      this.componentWillUnmount();
    }
    this._compositeLifeCycleState = null;

    this._renderedComponent.unmountComponent();
    this._renderedComponent = null;

    ReactComponent.Mixin.unmountComponent.call(this);

    // Some existing components rely on this.props even after they've been
    // destroyed (in event handlers).
    // TODO: this.props = null;
    // TODO: this.state = null;
  },

  /**
   * Sets a subset of the state. Always use this or `replaceState` to mutate
   * state. You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * There is no guarantee that calls to `setState` will run synchronously,
   * as they may eventually be batched together.  You can provide an optional
   * callback that will be executed when the call to setState is actually
   * completed.
   *
   * @param {object} partialState Next partial state to be merged with state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  setState: function(partialState, callback) {
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof partialState === 'object' || partialState == null,
      'setState(...): takes an object of state variables to update.'
    ) : invariant(typeof partialState === 'object' || partialState == null));
    if ("production" !== process.env.NODE_ENV){
      ("production" !== process.env.NODE_ENV ? warning(
        partialState != null,
        'setState(...): You passed an undefined or null state object; ' +
        'instead, use forceUpdate().'
      ) : null);
    }
    // Merge with `_pendingState` if it exists, otherwise with existing state.
    this.replaceState(
      assign({}, this._pendingState || this.state, partialState),
      callback
    );
  },

  /**
   * Replaces all of the state. Always use this or `setState` to mutate state.
   * You should treat `this.state` as immutable.
   *
   * There is no guarantee that `this.state` will be immediately updated, so
   * accessing `this.state` after calling this method may return the old value.
   *
   * @param {object} completeState Next state.
   * @param {?function} callback Called after state is updated.
   * @final
   * @protected
   */
  replaceState: function(completeState, callback) {
    validateLifeCycleOnReplaceState(this);
    this._pendingState = completeState;
    if (this._compositeLifeCycleState !== CompositeLifeCycle.MOUNTING) {
      // If we're in a componentWillMount handler, don't enqueue a rerender
      // because ReactUpdates assumes we're in a browser context (which is wrong
      // for server rendering) and we're about to do a render anyway.
      // TODO: The callback here is ignored when setState is called from
      // componentWillMount. Either fix it or disallow doing so completely in
      // favor of getInitialState.
      ReactUpdates.enqueueUpdate(this, callback);
    }
  },

  /**
   * Filters the context object to only contain keys specified in
   * `contextTypes`, and asserts that they are valid.
   *
   * @param {object} context
   * @return {?object}
   * @private
   */
  _processContext: function(context) {
    var maskedContext = null;
    var contextTypes = this.constructor.contextTypes;
    if (contextTypes) {
      maskedContext = {};
      for (var contextName in contextTypes) {
        maskedContext[contextName] = context[contextName];
      }
      if ("production" !== process.env.NODE_ENV) {
        this._checkPropTypes(
          contextTypes,
          maskedContext,
          ReactPropTypeLocations.context
        );
      }
    }
    return maskedContext;
  },

  /**
   * @param {object} currentContext
   * @return {object}
   * @private
   */
  _processChildContext: function(currentContext) {
    var childContext = this.getChildContext && this.getChildContext();
    var displayName = this.constructor.displayName || 'ReactCompositeComponent';
    if (childContext) {
      ("production" !== process.env.NODE_ENV ? invariant(
        typeof this.constructor.childContextTypes === 'object',
        '%s.getChildContext(): childContextTypes must be defined in order to ' +
        'use getChildContext().',
        displayName
      ) : invariant(typeof this.constructor.childContextTypes === 'object'));
      if ("production" !== process.env.NODE_ENV) {
        this._checkPropTypes(
          this.constructor.childContextTypes,
          childContext,
          ReactPropTypeLocations.childContext
        );
      }
      for (var name in childContext) {
        ("production" !== process.env.NODE_ENV ? invariant(
          name in this.constructor.childContextTypes,
          '%s.getChildContext(): key "%s" is not defined in childContextTypes.',
          displayName,
          name
        ) : invariant(name in this.constructor.childContextTypes));
      }
      return assign({}, currentContext, childContext);
    }
    return currentContext;
  },

  /**
   * Processes props by setting default values for unspecified props and
   * asserting that the props are valid. Does not mutate its argument; returns
   * a new props object with defaults merged in.
   *
   * @param {object} newProps
   * @return {object}
   * @private
   */
  _processProps: function(newProps) {
    if ("production" !== process.env.NODE_ENV) {
      var propTypes = this.constructor.propTypes;
      if (propTypes) {
        this._checkPropTypes(propTypes, newProps, ReactPropTypeLocations.prop);
      }
    }
    return newProps;
  },

  /**
   * Assert that the props are valid
   *
   * @param {object} propTypes Map of prop name to a ReactPropType
   * @param {object} props
   * @param {string} location e.g. "prop", "context", "child context"
   * @private
   */
  _checkPropTypes: function(propTypes, props, location) {
    // TODO: Stop validating prop types here and only use the element
    // validation.
    var componentName = this.constructor.displayName;
    for (var propName in propTypes) {
      if (propTypes.hasOwnProperty(propName)) {
        var error =
          propTypes[propName](props, propName, componentName, location);
        if (error instanceof Error) {
          // We may want to extend this logic for similar errors in
          // renderComponent calls, so I'm abstracting it away into
          // a function to minimize refactoring in the future
          var addendum = getDeclarationErrorAddendum(this);
          ("production" !== process.env.NODE_ENV ? warning(false, error.message + addendum) : null);
        }
      }
    }
  },

  /**
   * If any of `_pendingElement`, `_pendingState`, or `_pendingForceUpdate`
   * is set, update the component.
   *
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  performUpdateIfNecessary: function(transaction) {
    var compositeLifeCycleState = this._compositeLifeCycleState;
    // Do not trigger a state transition if we are in the middle of mounting or
    // receiving props because both of those will already be doing this.
    if (compositeLifeCycleState === CompositeLifeCycle.MOUNTING ||
        compositeLifeCycleState === CompositeLifeCycle.RECEIVING_PROPS) {
      return;
    }

    if (this._pendingElement == null &&
        this._pendingState == null &&
        !this._pendingForceUpdate) {
      return;
    }

    var nextContext = this.context;
    var nextProps = this.props;
    var nextElement = this._currentElement;
    if (this._pendingElement != null) {
      nextElement = this._pendingElement;
      nextContext = this._processContext(nextElement._context);
      nextProps = this._processProps(nextElement.props);
      this._pendingElement = null;

      this._compositeLifeCycleState = CompositeLifeCycle.RECEIVING_PROPS;
      if (this.componentWillReceiveProps) {
        this.componentWillReceiveProps(nextProps, nextContext);
      }
    }

    this._compositeLifeCycleState = null;

    var nextState = this._pendingState || this.state;
    this._pendingState = null;

    var shouldUpdate =
      this._pendingForceUpdate ||
      !this.shouldComponentUpdate ||
      this.shouldComponentUpdate(nextProps, nextState, nextContext);

    if ("production" !== process.env.NODE_ENV) {
      if (typeof shouldUpdate === "undefined") {
        console.warn(
          (this.constructor.displayName || 'ReactCompositeComponent') +
          '.shouldComponentUpdate(): Returned undefined instead of a ' +
          'boolean value. Make sure to return true or false.'
        );
      }
    }

    if (shouldUpdate) {
      this._pendingForceUpdate = false;
      // Will set `this.props`, `this.state` and `this.context`.
      this._performComponentUpdate(
        nextElement,
        nextProps,
        nextState,
        nextContext,
        transaction
      );
    } else {
      // If it's determined that a component should not update, we still want
      // to set props and state.
      this._currentElement = nextElement;
      this.props = nextProps;
      this.state = nextState;
      this.context = nextContext;

      // Owner cannot change because shouldUpdateReactComponent doesn't allow
      // it. TODO: Remove this._owner completely.
      this._owner = nextElement._owner;
    }
  },

  /**
   * Merges new props and state, notifies delegate methods of update and
   * performs update.
   *
   * @param {ReactElement} nextElement Next element
   * @param {object} nextProps Next public object to set as properties.
   * @param {?object} nextState Next object to set as state.
   * @param {?object} nextContext Next public object to set as context.
   * @param {ReactReconcileTransaction} transaction
   * @private
   */
  _performComponentUpdate: function(
    nextElement,
    nextProps,
    nextState,
    nextContext,
    transaction
  ) {
    var prevElement = this._currentElement;
    var prevProps = this.props;
    var prevState = this.state;
    var prevContext = this.context;

    if (this.componentWillUpdate) {
      this.componentWillUpdate(nextProps, nextState, nextContext);
    }

    this._currentElement = nextElement;
    this.props = nextProps;
    this.state = nextState;
    this.context = nextContext;

    // Owner cannot change because shouldUpdateReactComponent doesn't allow
    // it. TODO: Remove this._owner completely.
    this._owner = nextElement._owner;

    this.updateComponent(
      transaction,
      prevElement
    );

    if (this.componentDidUpdate) {
      transaction.getReactMountReady().enqueue(
        this.componentDidUpdate.bind(this, prevProps, prevState, prevContext),
        this
      );
    }
  },

  receiveComponent: function(nextElement, transaction) {
    if (nextElement === this._currentElement &&
        nextElement._owner != null) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for a element created outside a composite to be
      // deeply mutated and reused.
      return;
    }

    ReactComponent.Mixin.receiveComponent.call(
      this,
      nextElement,
      transaction
    );
  },

  /**
   * Updates the component's currently mounted DOM representation.
   *
   * By default, this implements React's rendering and reconciliation algorithm.
   * Sophisticated clients may wish to override this.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @internal
   * @overridable
   */
  updateComponent: ReactPerf.measure(
    'ReactCompositeComponent',
    'updateComponent',
    function(transaction, prevParentElement) {
      ReactComponent.Mixin.updateComponent.call(
        this,
        transaction,
        prevParentElement
      );

      var prevComponentInstance = this._renderedComponent;
      var prevElement = prevComponentInstance._currentElement;
      var nextElement = this._renderValidatedComponent();
      if (shouldUpdateReactComponent(prevElement, nextElement)) {
        prevComponentInstance.receiveComponent(nextElement, transaction);
      } else {
        // These two IDs are actually the same! But nothing should rely on that.
        var thisID = this._rootNodeID;
        var prevComponentID = prevComponentInstance._rootNodeID;
        prevComponentInstance.unmountComponent();
        this._renderedComponent = instantiateReactComponent(
          nextElement,
          this._currentElement.type
        );
        var nextMarkup = this._renderedComponent.mountComponent(
          thisID,
          transaction,
          this._mountDepth + 1
        );
        ReactComponent.BackendIDOperations.dangerouslyReplaceNodeWithMarkupByID(
          prevComponentID,
          nextMarkup
        );
      }
    }
  ),

  /**
   * Forces an update. This should only be invoked when it is known with
   * certainty that we are **not** in a DOM transaction.
   *
   * You may want to call this when you know that some deeper aspect of the
   * component's state has changed but `setState` was not called.
   *
   * This will not invoke `shouldUpdateComponent`, but it will invoke
   * `componentWillUpdate` and `componentDidUpdate`.
   *
   * @param {?function} callback Called after update is complete.
   * @final
   * @protected
   */
  forceUpdate: function(callback) {
    var compositeLifeCycleState = this._compositeLifeCycleState;
    ("production" !== process.env.NODE_ENV ? invariant(
      this.isMounted() ||
        compositeLifeCycleState === CompositeLifeCycle.MOUNTING,
      'forceUpdate(...): Can only force an update on mounted or mounting ' +
        'components.'
    ) : invariant(this.isMounted() ||
      compositeLifeCycleState === CompositeLifeCycle.MOUNTING));
    ("production" !== process.env.NODE_ENV ? invariant(
      compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
      ReactCurrentOwner.current == null,
      'forceUpdate(...): Cannot force an update while unmounting component ' +
      'or within a `render` function.'
    ) : invariant(compositeLifeCycleState !== CompositeLifeCycle.UNMOUNTING &&
    ReactCurrentOwner.current == null));
    this._pendingForceUpdate = true;
    ReactUpdates.enqueueUpdate(this, callback);
  },

  /**
   * @private
   */
  _renderValidatedComponent: ReactPerf.measure(
    'ReactCompositeComponent',
    '_renderValidatedComponent',
    function() {
      var renderedComponent;
      var previousContext = ReactContext.current;
      ReactContext.current = this._processChildContext(
        this._currentElement._context
      );
      ReactCurrentOwner.current = this;
      try {
        renderedComponent = this.render();
        if (renderedComponent === null || renderedComponent === false) {
          renderedComponent = ReactEmptyComponent.getEmptyComponent();
          ReactEmptyComponent.registerNullComponentID(this._rootNodeID);
        } else {
          ReactEmptyComponent.deregisterNullComponentID(this._rootNodeID);
        }
      } finally {
        ReactContext.current = previousContext;
        ReactCurrentOwner.current = null;
      }
      ("production" !== process.env.NODE_ENV ? invariant(
        ReactElement.isValidElement(renderedComponent),
        '%s.render(): A valid ReactComponent must be returned. You may have ' +
          'returned undefined, an array or some other invalid object.',
        this.constructor.displayName || 'ReactCompositeComponent'
      ) : invariant(ReactElement.isValidElement(renderedComponent)));
      return renderedComponent;
    }
  ),

  /**
   * @private
   */
  _bindAutoBindMethods: function() {
    for (var autoBindKey in this.__reactAutoBindMap) {
      if (!this.__reactAutoBindMap.hasOwnProperty(autoBindKey)) {
        continue;
      }
      var method = this.__reactAutoBindMap[autoBindKey];
      this[autoBindKey] = this._bindAutoBindMethod(ReactErrorUtils.guard(
        method,
        this.constructor.displayName + '.' + autoBindKey
      ));
    }
  },

  /**
   * Binds a method to the component.
   *
   * @param {function} method Method to be bound.
   * @private
   */
  _bindAutoBindMethod: function(method) {
    var component = this;
    var boundMethod = method.bind(component);
    if ("production" !== process.env.NODE_ENV) {
      boundMethod.__reactBoundContext = component;
      boundMethod.__reactBoundMethod = method;
      boundMethod.__reactBoundArguments = null;
      var componentName = component.constructor.displayName;
      var _bind = boundMethod.bind;
      boundMethod.bind = function(newThis ) {for (var args=[],$__0=1,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
        // User is trying to bind() an autobound method; we effectively will
        // ignore the value of "this" that the user is trying to use, so
        // let's warn.
        if (newThis !== component && newThis !== null) {
          monitorCodeUse('react_bind_warning', { component: componentName });
          console.warn(
            'bind(): React component methods may only be bound to the ' +
            'component instance. See ' + componentName
          );
        } else if (!args.length) {
          monitorCodeUse('react_bind_warning', { component: componentName });
          console.warn(
            'bind(): You are binding a component method to the component. ' +
            'React does this for you automatically in a high-performance ' +
            'way, so you can safely remove this call. See ' + componentName
          );
          return boundMethod;
        }
        var reboundMethod = _bind.apply(boundMethod, arguments);
        reboundMethod.__reactBoundContext = component;
        reboundMethod.__reactBoundMethod = method;
        reboundMethod.__reactBoundArguments = args;
        return reboundMethod;
      };
    }
    return boundMethod;
  }
};

var ReactCompositeComponentBase = function() {};
assign(
  ReactCompositeComponentBase.prototype,
  ReactComponent.Mixin,
  ReactOwner.Mixin,
  ReactPropTransferer.Mixin,
  ReactCompositeComponentMixin
);

/**
 * Module for creating composite components.
 *
 * @class ReactCompositeComponent
 * @extends ReactComponent
 * @extends ReactOwner
 * @extends ReactPropTransferer
 */
var ReactCompositeComponent = {

  LifeCycle: CompositeLifeCycle,

  Base: ReactCompositeComponentBase,

  /**
   * Creates a composite component class given a class specification.
   *
   * @param {object} spec Class specification (which must define `render`).
   * @return {function} Component constructor function.
   * @public
   */
  createClass: function(spec) {
    var Constructor = function(props) {
      // This constructor is overridden by mocks. The argument is used
      // by mocks to assert on what gets mounted. This will later be used
      // by the stand-alone class implementation.
    };
    Constructor.prototype = new ReactCompositeComponentBase();
    Constructor.prototype.constructor = Constructor;

    injectedMixins.forEach(
      mixSpecIntoComponent.bind(null, Constructor)
    );

    mixSpecIntoComponent(Constructor, spec);

    // Initialize the defaultProps property after all mixins have been merged
    if (Constructor.getDefaultProps) {
      Constructor.defaultProps = Constructor.getDefaultProps();
    }

    ("production" !== process.env.NODE_ENV ? invariant(
      Constructor.prototype.render,
      'createClass(...): Class specification must implement a `render` method.'
    ) : invariant(Constructor.prototype.render));

    if ("production" !== process.env.NODE_ENV) {
      if (Constructor.prototype.componentShouldUpdate) {
        monitorCodeUse(
          'react_component_should_update_warning',
          { component: spec.displayName }
        );
        console.warn(
          (spec.displayName || 'A component') + ' has a method called ' +
          'componentShouldUpdate(). Did you mean shouldComponentUpdate()? ' +
          'The name is phrased as a question because the function is ' +
          'expected to return a value.'
         );
      }
    }

    // Reduce time spent doing lookups by setting these on the prototype.
    for (var methodName in ReactCompositeComponentInterface) {
      if (!Constructor.prototype[methodName]) {
        Constructor.prototype[methodName] = null;
      }
    }

    if ("production" !== process.env.NODE_ENV) {
      return ReactLegacyElement.wrapFactory(
        ReactElementValidator.createFactory(Constructor)
      );
    }
    return ReactLegacyElement.wrapFactory(
      ReactElement.createFactory(Constructor)
    );
  },

  injection: {
    injectMixin: function(mixin) {
      injectedMixins.push(mixin);
    }
  }
};

module.exports = ReactCompositeComponent;

},{"./Object.assign":39,"./ReactComponent":45,"./ReactContext":48,"./ReactCurrentOwner":49,"./ReactElement":65,"./ReactElementValidator":66,"./ReactEmptyComponent":67,"./ReactErrorUtils":68,"./ReactLegacyElement":74,"./ReactOwner":80,"./ReactPerf":81,"./ReactPropTransferer":82,"./ReactPropTypeLocationNames":83,"./ReactPropTypeLocations":84,"./ReactUpdates":92,"./instantiateReactComponent":138,"./invariant":139,"./keyMirror":145,"./keyOf":146,"./mapObject":147,"./monitorCodeUse":149,"./shouldUpdateReactComponent":155,"./warning":158}],48:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactContext
 */

"use strict";

var assign = require("./Object.assign");

/**
 * Keeps track of the current context.
 *
 * The context is automatically passed down the component ownership hierarchy
 * and is accessible via `this.context` on ReactCompositeComponents.
 */
var ReactContext = {

  /**
   * @internal
   * @type {object}
   */
  current: {},

  /**
   * Temporarily extends the current context while executing scopedCallback.
   *
   * A typical use case might look like
   *
   *  render: function() {
   *    var children = ReactContext.withContext({foo: 'foo'}, () => (
   *
   *    ));
   *    return <div>{children}</div>;
   *  }
   *
   * @param {object} newContext New context to merge into the existing context
   * @param {function} scopedCallback Callback to run with the new context
   * @return {ReactComponent|array<ReactComponent>}
   */
  withContext: function(newContext, scopedCallback) {
    var result;
    var previousContext = ReactContext.current;
    ReactContext.current = assign({}, previousContext, newContext);
    try {
      result = scopedCallback();
    } finally {
      ReactContext.current = previousContext;
    }
    return result;
  }

};

module.exports = ReactContext;

},{"./Object.assign":39}],49:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactCurrentOwner
 */

"use strict";

/**
 * Keeps track of the current owner.
 *
 * The current owner is the component who should own any components that are
 * currently being constructed.
 *
 * The depth indicate how many composite components are above this render level.
 */
var ReactCurrentOwner = {

  /**
   * @internal
   * @type {ReactComponent}
   */
  current: null

};

module.exports = ReactCurrentOwner;

},{}],50:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOM
 * @typechecks static-only
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactElementValidator = require("./ReactElementValidator");
var ReactLegacyElement = require("./ReactLegacyElement");

var mapObject = require("./mapObject");

/**
 * Create a factory that creates HTML tag elements.
 *
 * @param {string} tag Tag name (e.g. `div`).
 * @private
 */
function createDOMFactory(tag) {
  if ("production" !== process.env.NODE_ENV) {
    return ReactLegacyElement.markNonLegacyFactory(
      ReactElementValidator.createFactory(tag)
    );
  }
  return ReactLegacyElement.markNonLegacyFactory(
    ReactElement.createFactory(tag)
  );
}

/**
 * Creates a mapping from supported HTML tags to `ReactDOMComponent` classes.
 * This is also accessible via `React.DOM`.
 *
 * @public
 */
var ReactDOM = mapObject({
  a: 'a',
  abbr: 'abbr',
  address: 'address',
  area: 'area',
  article: 'article',
  aside: 'aside',
  audio: 'audio',
  b: 'b',
  base: 'base',
  bdi: 'bdi',
  bdo: 'bdo',
  big: 'big',
  blockquote: 'blockquote',
  body: 'body',
  br: 'br',
  button: 'button',
  canvas: 'canvas',
  caption: 'caption',
  cite: 'cite',
  code: 'code',
  col: 'col',
  colgroup: 'colgroup',
  data: 'data',
  datalist: 'datalist',
  dd: 'dd',
  del: 'del',
  details: 'details',
  dfn: 'dfn',
  dialog: 'dialog',
  div: 'div',
  dl: 'dl',
  dt: 'dt',
  em: 'em',
  embed: 'embed',
  fieldset: 'fieldset',
  figcaption: 'figcaption',
  figure: 'figure',
  footer: 'footer',
  form: 'form',
  h1: 'h1',
  h2: 'h2',
  h3: 'h3',
  h4: 'h4',
  h5: 'h5',
  h6: 'h6',
  head: 'head',
  header: 'header',
  hr: 'hr',
  html: 'html',
  i: 'i',
  iframe: 'iframe',
  img: 'img',
  input: 'input',
  ins: 'ins',
  kbd: 'kbd',
  keygen: 'keygen',
  label: 'label',
  legend: 'legend',
  li: 'li',
  link: 'link',
  main: 'main',
  map: 'map',
  mark: 'mark',
  menu: 'menu',
  menuitem: 'menuitem',
  meta: 'meta',
  meter: 'meter',
  nav: 'nav',
  noscript: 'noscript',
  object: 'object',
  ol: 'ol',
  optgroup: 'optgroup',
  option: 'option',
  output: 'output',
  p: 'p',
  param: 'param',
  picture: 'picture',
  pre: 'pre',
  progress: 'progress',
  q: 'q',
  rp: 'rp',
  rt: 'rt',
  ruby: 'ruby',
  s: 's',
  samp: 'samp',
  script: 'script',
  section: 'section',
  select: 'select',
  small: 'small',
  source: 'source',
  span: 'span',
  strong: 'strong',
  style: 'style',
  sub: 'sub',
  summary: 'summary',
  sup: 'sup',
  table: 'table',
  tbody: 'tbody',
  td: 'td',
  textarea: 'textarea',
  tfoot: 'tfoot',
  th: 'th',
  thead: 'thead',
  time: 'time',
  title: 'title',
  tr: 'tr',
  track: 'track',
  u: 'u',
  ul: 'ul',
  'var': 'var',
  video: 'video',
  wbr: 'wbr',

  // SVG
  circle: 'circle',
  defs: 'defs',
  ellipse: 'ellipse',
  g: 'g',
  line: 'line',
  linearGradient: 'linearGradient',
  mask: 'mask',
  path: 'path',
  pattern: 'pattern',
  polygon: 'polygon',
  polyline: 'polyline',
  radialGradient: 'radialGradient',
  rect: 'rect',
  stop: 'stop',
  svg: 'svg',
  text: 'text',
  tspan: 'tspan'

}, createDOMFactory);

module.exports = ReactDOM;

},{"./ReactElement":65,"./ReactElementValidator":66,"./ReactLegacyElement":74,"./mapObject":147}],51:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMButton
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

var keyMirror = require("./keyMirror");

// Store a reference to the <button> `ReactDOMComponent`. TODO: use string
var button = ReactElement.createFactory(ReactDOM.button.type);

var mouseListenerNames = keyMirror({
  onClick: true,
  onDoubleClick: true,
  onMouseDown: true,
  onMouseMove: true,
  onMouseUp: true,
  onClickCapture: true,
  onDoubleClickCapture: true,
  onMouseDownCapture: true,
  onMouseMoveCapture: true,
  onMouseUpCapture: true
});

/**
 * Implements a <button> native component that does not receive mouse events
 * when `disabled` is set.
 */
var ReactDOMButton = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMButton',

  mixins: [AutoFocusMixin, ReactBrowserComponentMixin],

  render: function() {
    var props = {};

    // Copy the props; except the mouse listeners if we're disabled
    for (var key in this.props) {
      if (this.props.hasOwnProperty(key) &&
          (!this.props.disabled || !mouseListenerNames[key])) {
        props[key] = this.props[key];
      }
    }

    return button(props, this.props.children);
  }

});

module.exports = ReactDOMButton;

},{"./AutoFocusMixin":14,"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65,"./keyMirror":145}],52:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMComponent
 * @typechecks static-only
 */

"use strict";

var CSSPropertyOperations = require("./CSSPropertyOperations");
var DOMProperty = require("./DOMProperty");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactComponent = require("./ReactComponent");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactMount = require("./ReactMount");
var ReactMultiChild = require("./ReactMultiChild");
var ReactPerf = require("./ReactPerf");

var assign = require("./Object.assign");
var escapeTextForBrowser = require("./escapeTextForBrowser");
var invariant = require("./invariant");
var isEventSupported = require("./isEventSupported");
var keyOf = require("./keyOf");
var monitorCodeUse = require("./monitorCodeUse");

var deleteListener = ReactBrowserEventEmitter.deleteListener;
var listenTo = ReactBrowserEventEmitter.listenTo;
var registrationNameModules = ReactBrowserEventEmitter.registrationNameModules;

// For quickly matching children type, to test if can be treated as content.
var CONTENT_TYPES = {'string': true, 'number': true};

var STYLE = keyOf({style: null});

var ELEMENT_NODE_TYPE = 1;

/**
 * @param {?object} props
 */
function assertValidProps(props) {
  if (!props) {
    return;
  }
  // Note the use of `==` which checks for null or undefined.
  ("production" !== process.env.NODE_ENV ? invariant(
    props.children == null || props.dangerouslySetInnerHTML == null,
    'Can only set one of `children` or `props.dangerouslySetInnerHTML`.'
  ) : invariant(props.children == null || props.dangerouslySetInnerHTML == null));
  if ("production" !== process.env.NODE_ENV) {
    if (props.contentEditable && props.children != null) {
      console.warn(
        'A component is `contentEditable` and contains `children` managed by ' +
        'React. It is now your responsibility to guarantee that none of those '+
        'nodes are unexpectedly modified or duplicated. This is probably not ' +
        'intentional.'
      );
    }
  }
  ("production" !== process.env.NODE_ENV ? invariant(
    props.style == null || typeof props.style === 'object',
    'The `style` prop expects a mapping from style properties to values, ' +
    'not a string.'
  ) : invariant(props.style == null || typeof props.style === 'object'));
}

function putListener(id, registrationName, listener, transaction) {
  if ("production" !== process.env.NODE_ENV) {
    // IE8 has no API for event capturing and the `onScroll` event doesn't
    // bubble.
    if (registrationName === 'onScroll' &&
        !isEventSupported('scroll', true)) {
      monitorCodeUse('react_no_scroll_event');
      console.warn('This browser doesn\'t support the `onScroll` event');
    }
  }
  var container = ReactMount.findReactContainerForID(id);
  if (container) {
    var doc = container.nodeType === ELEMENT_NODE_TYPE ?
      container.ownerDocument :
      container;
    listenTo(registrationName, doc);
  }
  transaction.getPutListenerQueue().enqueuePutListener(
    id,
    registrationName,
    listener
  );
}

// For HTML, certain tags should omit their close tag. We keep a whitelist for
// those special cased tags.

var omittedCloseTags = {
  'area': true,
  'base': true,
  'br': true,
  'col': true,
  'embed': true,
  'hr': true,
  'img': true,
  'input': true,
  'keygen': true,
  'link': true,
  'meta': true,
  'param': true,
  'source': true,
  'track': true,
  'wbr': true
  // NOTE: menuitem's close tag should be omitted, but that causes problems.
};

// We accept any tag to be rendered but since this gets injected into abitrary
// HTML, we want to make sure that it's a safe tag.
// http://www.w3.org/TR/REC-xml/#NT-Name

var VALID_TAG_REGEX = /^[a-zA-Z][a-zA-Z:_\.\-\d]*$/; // Simplified subset
var validatedTagCache = {};
var hasOwnProperty = {}.hasOwnProperty;

function validateDangerousTag(tag) {
  if (!hasOwnProperty.call(validatedTagCache, tag)) {
    ("production" !== process.env.NODE_ENV ? invariant(VALID_TAG_REGEX.test(tag), 'Invalid tag: %s', tag) : invariant(VALID_TAG_REGEX.test(tag)));
    validatedTagCache[tag] = true;
  }
}

/**
 * Creates a new React class that is idempotent and capable of containing other
 * React components. It accepts event listeners and DOM properties that are
 * valid according to `DOMProperty`.
 *
 *  - Event listeners: `onClick`, `onMouseDown`, etc.
 *  - DOM properties: `className`, `name`, `title`, etc.
 *
 * The `style` property functions differently from the DOM API. It accepts an
 * object mapping of style properties to values.
 *
 * @constructor ReactDOMComponent
 * @extends ReactComponent
 * @extends ReactMultiChild
 */
function ReactDOMComponent(tag) {
  validateDangerousTag(tag);
  this._tag = tag;
  this.tagName = tag.toUpperCase();
}

ReactDOMComponent.displayName = 'ReactDOMComponent';

ReactDOMComponent.Mixin = {

  /**
   * Generates root tag markup then recurses. This method has side effects and
   * is not idempotent.
   *
   * @internal
   * @param {string} rootID The root DOM ID for this node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {number} mountDepth number of components in the owner hierarchy
   * @return {string} The computed markup.
   */
  mountComponent: ReactPerf.measure(
    'ReactDOMComponent',
    'mountComponent',
    function(rootID, transaction, mountDepth) {
      ReactComponent.Mixin.mountComponent.call(
        this,
        rootID,
        transaction,
        mountDepth
      );
      assertValidProps(this.props);
      var closeTag = omittedCloseTags[this._tag] ? '' : '</' + this._tag + '>';
      return (
        this._createOpenTagMarkupAndPutListeners(transaction) +
        this._createContentMarkup(transaction) +
        closeTag
      );
    }
  ),

  /**
   * Creates markup for the open tag and all attributes.
   *
   * This method has side effects because events get registered.
   *
   * Iterating over object properties is faster than iterating over arrays.
   * @see http://jsperf.com/obj-vs-arr-iteration
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Markup of opening tag.
   */
  _createOpenTagMarkupAndPutListeners: function(transaction) {
    var props = this.props;
    var ret = '<' + this._tag;

    for (var propKey in props) {
      if (!props.hasOwnProperty(propKey)) {
        continue;
      }
      var propValue = props[propKey];
      if (propValue == null) {
        continue;
      }
      if (registrationNameModules.hasOwnProperty(propKey)) {
        putListener(this._rootNodeID, propKey, propValue, transaction);
      } else {
        if (propKey === STYLE) {
          if (propValue) {
            propValue = props.style = assign({}, props.style);
          }
          propValue = CSSPropertyOperations.createMarkupForStyles(propValue);
        }
        var markup =
          DOMPropertyOperations.createMarkupForProperty(propKey, propValue);
        if (markup) {
          ret += ' ' + markup;
        }
      }
    }

    // For static pages, no need to put React ID and checksum. Saves lots of
    // bytes.
    if (transaction.renderToStaticMarkup) {
      return ret + '>';
    }

    var markupForID = DOMPropertyOperations.createMarkupForID(this._rootNodeID);
    return ret + ' ' + markupForID + '>';
  },

  /**
   * Creates markup for the content between the tags.
   *
   * @private
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @return {string} Content markup.
   */
  _createContentMarkup: function(transaction) {
    // Intentional use of != to avoid catching zero/false.
    var innerHTML = this.props.dangerouslySetInnerHTML;
    if (innerHTML != null) {
      if (innerHTML.__html != null) {
        return innerHTML.__html;
      }
    } else {
      var contentToUse =
        CONTENT_TYPES[typeof this.props.children] ? this.props.children : null;
      var childrenToUse = contentToUse != null ? null : this.props.children;
      if (contentToUse != null) {
        return escapeTextForBrowser(contentToUse);
      } else if (childrenToUse != null) {
        var mountImages = this.mountChildren(
          childrenToUse,
          transaction
        );
        return mountImages.join('');
      }
    }
    return '';
  },

  receiveComponent: function(nextElement, transaction) {
    if (nextElement === this._currentElement &&
        nextElement._owner != null) {
      // Since elements are immutable after the owner is rendered,
      // we can do a cheap identity compare here to determine if this is a
      // superfluous reconcile. It's possible for state to be mutable but such
      // change should trigger an update of the owner which would recreate
      // the element. We explicitly check for the existence of an owner since
      // it's possible for a element created outside a composite to be
      // deeply mutated and reused.
      return;
    }

    ReactComponent.Mixin.receiveComponent.call(
      this,
      nextElement,
      transaction
    );
  },

  /**
   * Updates a native DOM component after it has already been allocated and
   * attached to the DOM. Reconciles the root DOM node, then recurses.
   *
   * @param {ReactReconcileTransaction} transaction
   * @param {ReactElement} prevElement
   * @internal
   * @overridable
   */
  updateComponent: ReactPerf.measure(
    'ReactDOMComponent',
    'updateComponent',
    function(transaction, prevElement) {
      assertValidProps(this._currentElement.props);
      ReactComponent.Mixin.updateComponent.call(
        this,
        transaction,
        prevElement
      );
      this._updateDOMProperties(prevElement.props, transaction);
      this._updateDOMChildren(prevElement.props, transaction);
    }
  ),

  /**
   * Reconciles the properties by detecting differences in property values and
   * updating the DOM as necessary. This function is probably the single most
   * critical path for performance optimization.
   *
   * TODO: Benchmark whether checking for changed values in memory actually
   *       improves performance (especially statically positioned elements).
   * TODO: Benchmark the effects of putting this at the top since 99% of props
   *       do not change for a given reconciliation.
   * TODO: Benchmark areas that can be improved with caching.
   *
   * @private
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */
  _updateDOMProperties: function(lastProps, transaction) {
    var nextProps = this.props;
    var propKey;
    var styleName;
    var styleUpdates;
    for (propKey in lastProps) {
      if (nextProps.hasOwnProperty(propKey) ||
         !lastProps.hasOwnProperty(propKey)) {
        continue;
      }
      if (propKey === STYLE) {
        var lastStyle = lastProps[propKey];
        for (styleName in lastStyle) {
          if (lastStyle.hasOwnProperty(styleName)) {
            styleUpdates = styleUpdates || {};
            styleUpdates[styleName] = '';
          }
        }
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        deleteListener(this._rootNodeID, propKey);
      } else if (
          DOMProperty.isStandardName[propKey] ||
          DOMProperty.isCustomAttribute(propKey)) {
        ReactComponent.BackendIDOperations.deletePropertyByID(
          this._rootNodeID,
          propKey
        );
      }
    }
    for (propKey in nextProps) {
      var nextProp = nextProps[propKey];
      var lastProp = lastProps[propKey];
      if (!nextProps.hasOwnProperty(propKey) || nextProp === lastProp) {
        continue;
      }
      if (propKey === STYLE) {
        if (nextProp) {
          nextProp = nextProps.style = assign({}, nextProp);
        }
        if (lastProp) {
          // Unset styles on `lastProp` but not on `nextProp`.
          for (styleName in lastProp) {
            if (lastProp.hasOwnProperty(styleName) &&
                (!nextProp || !nextProp.hasOwnProperty(styleName))) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = '';
            }
          }
          // Update styles that changed since `lastProp`.
          for (styleName in nextProp) {
            if (nextProp.hasOwnProperty(styleName) &&
                lastProp[styleName] !== nextProp[styleName]) {
              styleUpdates = styleUpdates || {};
              styleUpdates[styleName] = nextProp[styleName];
            }
          }
        } else {
          // Relies on `updateStylesByID` not mutating `styleUpdates`.
          styleUpdates = nextProp;
        }
      } else if (registrationNameModules.hasOwnProperty(propKey)) {
        putListener(this._rootNodeID, propKey, nextProp, transaction);
      } else if (
          DOMProperty.isStandardName[propKey] ||
          DOMProperty.isCustomAttribute(propKey)) {
        ReactComponent.BackendIDOperations.updatePropertyByID(
          this._rootNodeID,
          propKey,
          nextProp
        );
      }
    }
    if (styleUpdates) {
      ReactComponent.BackendIDOperations.updateStylesByID(
        this._rootNodeID,
        styleUpdates
      );
    }
  },

  /**
   * Reconciles the children with the various properties that affect the
   * children content.
   *
   * @param {object} lastProps
   * @param {ReactReconcileTransaction} transaction
   */
  _updateDOMChildren: function(lastProps, transaction) {
    var nextProps = this.props;

    var lastContent =
      CONTENT_TYPES[typeof lastProps.children] ? lastProps.children : null;
    var nextContent =
      CONTENT_TYPES[typeof nextProps.children] ? nextProps.children : null;

    var lastHtml =
      lastProps.dangerouslySetInnerHTML &&
      lastProps.dangerouslySetInnerHTML.__html;
    var nextHtml =
      nextProps.dangerouslySetInnerHTML &&
      nextProps.dangerouslySetInnerHTML.__html;

    // Note the use of `!=` which checks for null or undefined.
    var lastChildren = lastContent != null ? null : lastProps.children;
    var nextChildren = nextContent != null ? null : nextProps.children;

    // If we're switching from children to content/html or vice versa, remove
    // the old content
    var lastHasContentOrHtml = lastContent != null || lastHtml != null;
    var nextHasContentOrHtml = nextContent != null || nextHtml != null;
    if (lastChildren != null && nextChildren == null) {
      this.updateChildren(null, transaction);
    } else if (lastHasContentOrHtml && !nextHasContentOrHtml) {
      this.updateTextContent('');
    }

    if (nextContent != null) {
      if (lastContent !== nextContent) {
        this.updateTextContent('' + nextContent);
      }
    } else if (nextHtml != null) {
      if (lastHtml !== nextHtml) {
        ReactComponent.BackendIDOperations.updateInnerHTMLByID(
          this._rootNodeID,
          nextHtml
        );
      }
    } else if (nextChildren != null) {
      this.updateChildren(nextChildren, transaction);
    }
  },

  /**
   * Destroys all event registrations for this instance. Does not remove from
   * the DOM. That must be done by the parent.
   *
   * @internal
   */
  unmountComponent: function() {
    this.unmountChildren();
    ReactBrowserEventEmitter.deleteAllListeners(this._rootNodeID);
    ReactComponent.Mixin.unmountComponent.call(this);
  }

};

assign(
  ReactDOMComponent.prototype,
  ReactComponent.Mixin,
  ReactDOMComponent.Mixin,
  ReactMultiChild.Mixin,
  ReactBrowserComponentMixin
);

module.exports = ReactDOMComponent;

},{"./CSSPropertyOperations":17,"./DOMProperty":23,"./DOMPropertyOperations":24,"./Object.assign":39,"./ReactBrowserComponentMixin":42,"./ReactBrowserEventEmitter":43,"./ReactComponent":45,"./ReactMount":76,"./ReactMultiChild":77,"./ReactPerf":81,"./escapeTextForBrowser":122,"./invariant":139,"./isEventSupported":140,"./keyOf":146,"./monitorCodeUse":149}],53:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMForm
 */

"use strict";

var EventConstants = require("./EventConstants");
var LocalEventTrapMixin = require("./LocalEventTrapMixin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

// Store a reference to the <form> `ReactDOMComponent`. TODO: use string
var form = ReactElement.createFactory(ReactDOM.form.type);

/**
 * Since onSubmit doesn't bubble OR capture on the top level in IE8, we need
 * to capture it on the <form> element itself. There are lots of hacks we could
 * do to accomplish this, but the most reliable is to make <form> a
 * composite component and use `componentDidMount` to attach the event handlers.
 */
var ReactDOMForm = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMForm',

  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

  render: function() {
    // TODO: Instead of using `ReactDOM` directly, we should use JSX. However,
    // `jshint` fails to parse JSX so in order for linting to work in the open
    // source repo, we need to just use `ReactDOM.form`.
    return form(this.props);
  },

  componentDidMount: function() {
    this.trapBubbledEvent(EventConstants.topLevelTypes.topReset, 'reset');
    this.trapBubbledEvent(EventConstants.topLevelTypes.topSubmit, 'submit');
  }
});

module.exports = ReactDOMForm;

},{"./EventConstants":28,"./LocalEventTrapMixin":37,"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65}],54:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMIDOperations
 * @typechecks static-only
 */

/*jslint evil: true */

"use strict";

var CSSPropertyOperations = require("./CSSPropertyOperations");
var DOMChildrenOperations = require("./DOMChildrenOperations");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var ReactMount = require("./ReactMount");
var ReactPerf = require("./ReactPerf");

var invariant = require("./invariant");
var setInnerHTML = require("./setInnerHTML");

/**
 * Errors for properties that should not be updated with `updatePropertyById()`.
 *
 * @type {object}
 * @private
 */
var INVALID_PROPERTY_ERRORS = {
  dangerouslySetInnerHTML:
    '`dangerouslySetInnerHTML` must be set using `updateInnerHTMLByID()`.',
  style: '`style` must be set using `updateStylesByID()`.'
};

/**
 * Operations used to process updates to DOM nodes. This is made injectable via
 * `ReactComponent.BackendIDOperations`.
 */
var ReactDOMIDOperations = {

  /**
   * Updates a DOM node with new property values. This should only be used to
   * update DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A valid property name, see `DOMProperty`.
   * @param {*} value New value of the property.
   * @internal
   */
  updatePropertyByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updatePropertyByID',
    function(id, name, value) {
      var node = ReactMount.getNode(id);
      ("production" !== process.env.NODE_ENV ? invariant(
        !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
        'updatePropertyByID(...): %s',
        INVALID_PROPERTY_ERRORS[name]
      ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));

      // If we're updating to null or undefined, we should remove the property
      // from the DOM node instead of inadvertantly setting to a string. This
      // brings us in line with the same behavior we have on initial render.
      if (value != null) {
        DOMPropertyOperations.setValueForProperty(node, name, value);
      } else {
        DOMPropertyOperations.deleteValueForProperty(node, name);
      }
    }
  ),

  /**
   * Updates a DOM node to remove a property. This should only be used to remove
   * DOM properties in `DOMProperty`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} name A property name to remove, see `DOMProperty`.
   * @internal
   */
  deletePropertyByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'deletePropertyByID',
    function(id, name, value) {
      var node = ReactMount.getNode(id);
      ("production" !== process.env.NODE_ENV ? invariant(
        !INVALID_PROPERTY_ERRORS.hasOwnProperty(name),
        'updatePropertyByID(...): %s',
        INVALID_PROPERTY_ERRORS[name]
      ) : invariant(!INVALID_PROPERTY_ERRORS.hasOwnProperty(name)));
      DOMPropertyOperations.deleteValueForProperty(node, name, value);
    }
  ),

  /**
   * Updates a DOM node with new style values. If a value is specified as '',
   * the corresponding style property will be unset.
   *
   * @param {string} id ID of the node to update.
   * @param {object} styles Mapping from styles to values.
   * @internal
   */
  updateStylesByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updateStylesByID',
    function(id, styles) {
      var node = ReactMount.getNode(id);
      CSSPropertyOperations.setValueForStyles(node, styles);
    }
  ),

  /**
   * Updates a DOM node's innerHTML.
   *
   * @param {string} id ID of the node to update.
   * @param {string} html An HTML string.
   * @internal
   */
  updateInnerHTMLByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updateInnerHTMLByID',
    function(id, html) {
      var node = ReactMount.getNode(id);
      setInnerHTML(node, html);
    }
  ),

  /**
   * Updates a DOM node's text content set by `props.content`.
   *
   * @param {string} id ID of the node to update.
   * @param {string} content Text content.
   * @internal
   */
  updateTextContentByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'updateTextContentByID',
    function(id, content) {
      var node = ReactMount.getNode(id);
      DOMChildrenOperations.updateTextContent(node, content);
    }
  ),

  /**
   * Replaces a DOM node that exists in the document with markup.
   *
   * @param {string} id ID of child to be replaced.
   * @param {string} markup Dangerous markup to inject in place of child.
   * @internal
   * @see {Danger.dangerouslyReplaceNodeWithMarkup}
   */
  dangerouslyReplaceNodeWithMarkupByID: ReactPerf.measure(
    'ReactDOMIDOperations',
    'dangerouslyReplaceNodeWithMarkupByID',
    function(id, markup) {
      var node = ReactMount.getNode(id);
      DOMChildrenOperations.dangerouslyReplaceNodeWithMarkup(node, markup);
    }
  ),

  /**
   * Updates a component's children by processing a series of updates.
   *
   * @param {array<object>} updates List of update configurations.
   * @param {array<string>} markup List of markup strings.
   * @internal
   */
  dangerouslyProcessChildrenUpdates: ReactPerf.measure(
    'ReactDOMIDOperations',
    'dangerouslyProcessChildrenUpdates',
    function(updates, markup) {
      for (var i = 0; i < updates.length; i++) {
        updates[i].parentNode = ReactMount.getNode(updates[i].parentID);
      }
      DOMChildrenOperations.processUpdates(updates, markup);
    }
  )
};

module.exports = ReactDOMIDOperations;

},{"./CSSPropertyOperations":17,"./DOMChildrenOperations":22,"./DOMPropertyOperations":24,"./ReactMount":76,"./ReactPerf":81,"./invariant":139,"./setInnerHTML":153}],55:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMImg
 */

"use strict";

var EventConstants = require("./EventConstants");
var LocalEventTrapMixin = require("./LocalEventTrapMixin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

// Store a reference to the <img> `ReactDOMComponent`. TODO: use string
var img = ReactElement.createFactory(ReactDOM.img.type);

/**
 * Since onLoad doesn't bubble OR capture on the top level in IE8, we need to
 * capture it on the <img> element itself. There are lots of hacks we could do
 * to accomplish this, but the most reliable is to make <img> a composite
 * component and use `componentDidMount` to attach the event handlers.
 */
var ReactDOMImg = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMImg',
  tagName: 'IMG',

  mixins: [ReactBrowserComponentMixin, LocalEventTrapMixin],

  render: function() {
    return img(this.props);
  },

  componentDidMount: function() {
    this.trapBubbledEvent(EventConstants.topLevelTypes.topLoad, 'load');
    this.trapBubbledEvent(EventConstants.topLevelTypes.topError, 'error');
  }
});

module.exports = ReactDOMImg;

},{"./EventConstants":28,"./LocalEventTrapMixin":37,"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65}],56:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMInput
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var LinkedValueUtils = require("./LinkedValueUtils");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");
var ReactMount = require("./ReactMount");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var invariant = require("./invariant");

// Store a reference to the <input> `ReactDOMComponent`. TODO: use string
var input = ReactElement.createFactory(ReactDOM.input.type);

var instancesByReactID = {};

function forceUpdateIfMounted() {
  /*jshint validthis:true */
  if (this.isMounted()) {
    this.forceUpdate();
  }
}

/**
 * Implements an <input> native component that allows setting these optional
 * props: `checked`, `value`, `defaultChecked`, and `defaultValue`.
 *
 * If `checked` or `value` are not supplied (or null/undefined), user actions
 * that affect the checked state or value will trigger updates to the element.
 *
 * If they are supplied (and not null/undefined), the rendered element will not
 * trigger updates to the element. Instead, the props must change in order for
 * the rendered element to be updated.
 *
 * The rendered element will be initialized as unchecked (or `defaultChecked`)
 * with an empty value (or `defaultValue`).
 *
 * @see http://www.w3.org/TR/2012/WD-html5-20121025/the-input-element.html
 */
var ReactDOMInput = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMInput',

  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

  getInitialState: function() {
    var defaultValue = this.props.defaultValue;
    return {
      initialChecked: this.props.defaultChecked || false,
      initialValue: defaultValue != null ? defaultValue : null
    };
  },

  render: function() {
    // Clone `this.props` so we don't mutate the input.
    var props = assign({}, this.props);

    props.defaultChecked = null;
    props.defaultValue = null;

    var value = LinkedValueUtils.getValue(this);
    props.value = value != null ? value : this.state.initialValue;

    var checked = LinkedValueUtils.getChecked(this);
    props.checked = checked != null ? checked : this.state.initialChecked;

    props.onChange = this._handleChange;

    return input(props, this.props.children);
  },

  componentDidMount: function() {
    var id = ReactMount.getID(this.getDOMNode());
    instancesByReactID[id] = this;
  },

  componentWillUnmount: function() {
    var rootNode = this.getDOMNode();
    var id = ReactMount.getID(rootNode);
    delete instancesByReactID[id];
  },

  componentDidUpdate: function(prevProps, prevState, prevContext) {
    var rootNode = this.getDOMNode();
    if (this.props.checked != null) {
      DOMPropertyOperations.setValueForProperty(
        rootNode,
        'checked',
        this.props.checked || false
      );
    }

    var value = LinkedValueUtils.getValue(this);
    if (value != null) {
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
    }
  },

  _handleChange: function(event) {
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(this);
    if (onChange) {
      returnValue = onChange.call(this, event);
    }
    // Here we use asap to wait until all updates have propagated, which
    // is important when using controlled components within layers:
    // https://github.com/facebook/react/issues/1698
    ReactUpdates.asap(forceUpdateIfMounted, this);

    var name = this.props.name;
    if (this.props.type === 'radio' && name != null) {
      var rootNode = this.getDOMNode();
      var queryRoot = rootNode;

      while (queryRoot.parentNode) {
        queryRoot = queryRoot.parentNode;
      }

      // If `rootNode.form` was non-null, then we could try `form.elements`,
      // but that sometimes behaves strangely in IE8. We could also try using
      // `form.getElementsByName`, but that will only return direct children
      // and won't include inputs that use the HTML5 `form=` attribute. Since
      // the input might not even be in a form, let's just use the global
      // `querySelectorAll` to ensure we don't miss anything.
      var group = queryRoot.querySelectorAll(
        'input[name=' + JSON.stringify('' + name) + '][type="radio"]');

      for (var i = 0, groupLen = group.length; i < groupLen; i++) {
        var otherNode = group[i];
        if (otherNode === rootNode ||
            otherNode.form !== rootNode.form) {
          continue;
        }
        var otherID = ReactMount.getID(otherNode);
        ("production" !== process.env.NODE_ENV ? invariant(
          otherID,
          'ReactDOMInput: Mixing React and non-React radio inputs with the ' +
          'same `name` is not supported.'
        ) : invariant(otherID));
        var otherInstance = instancesByReactID[otherID];
        ("production" !== process.env.NODE_ENV ? invariant(
          otherInstance,
          'ReactDOMInput: Unknown radio button ID %s.',
          otherID
        ) : invariant(otherInstance));
        // If this is a controlled radio button group, forcing the input that
        // was previously checked to update will cause it to be come re-checked
        // as appropriate.
        ReactUpdates.asap(forceUpdateIfMounted, otherInstance);
      }
    }

    return returnValue;
  }

});

module.exports = ReactDOMInput;

},{"./AutoFocusMixin":14,"./DOMPropertyOperations":24,"./LinkedValueUtils":36,"./Object.assign":39,"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65,"./ReactMount":76,"./ReactUpdates":92,"./invariant":139}],57:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMOption
 */

"use strict";

var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");

var warning = require("./warning");

// Store a reference to the <option> `ReactDOMComponent`. TODO: use string
var option = ReactElement.createFactory(ReactDOM.option.type);

/**
 * Implements an <option> native component that warns when `selected` is set.
 */
var ReactDOMOption = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMOption',

  mixins: [ReactBrowserComponentMixin],

  componentWillMount: function() {
    // TODO (yungsters): Remove support for `selected` in <option>.
    if ("production" !== process.env.NODE_ENV) {
      ("production" !== process.env.NODE_ENV ? warning(
        this.props.selected == null,
        'Use the `defaultValue` or `value` props on <select> instead of ' +
        'setting `selected` on <option>.'
      ) : null);
    }
  },

  render: function() {
    return option(this.props, this.props.children);
  }

});

module.exports = ReactDOMOption;

},{"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65,"./warning":158}],58:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelect
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var LinkedValueUtils = require("./LinkedValueUtils");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");

// Store a reference to the <select> `ReactDOMComponent`. TODO: use string
var select = ReactElement.createFactory(ReactDOM.select.type);

function updateWithPendingValueIfMounted() {
  /*jshint validthis:true */
  if (this.isMounted()) {
    this.setState({value: this._pendingValue});
    this._pendingValue = 0;
  }
}

/**
 * Validation function for `value` and `defaultValue`.
 * @private
 */
function selectValueType(props, propName, componentName) {
  if (props[propName] == null) {
    return;
  }
  if (props.multiple) {
    if (!Array.isArray(props[propName])) {
      return new Error(
        ("The `" + propName + "` prop supplied to <select> must be an array if ") +
        ("`multiple` is true.")
      );
    }
  } else {
    if (Array.isArray(props[propName])) {
      return new Error(
        ("The `" + propName + "` prop supplied to <select> must be a scalar ") +
        ("value if `multiple` is false.")
      );
    }
  }
}

/**
 * If `value` is supplied, updates <option> elements on mount and update.
 * @param {ReactComponent} component Instance of ReactDOMSelect
 * @param {?*} propValue For uncontrolled components, null/undefined. For
 * controlled components, a string (or with `multiple`, a list of strings).
 * @private
 */
function updateOptions(component, propValue) {
  var multiple = component.props.multiple;
  var value = propValue != null ? propValue : component.state.value;
  var options = component.getDOMNode().options;
  var selectedValue, i, l;
  if (multiple) {
    selectedValue = {};
    for (i = 0, l = value.length; i < l; ++i) {
      selectedValue['' + value[i]] = true;
    }
  } else {
    selectedValue = '' + value;
  }
  for (i = 0, l = options.length; i < l; i++) {
    var selected = multiple ?
      selectedValue.hasOwnProperty(options[i].value) :
      options[i].value === selectedValue;

    if (selected !== options[i].selected) {
      options[i].selected = selected;
    }
  }
}

/**
 * Implements a <select> native component that allows optionally setting the
 * props `value` and `defaultValue`. If `multiple` is false, the prop must be a
 * string. If `multiple` is true, the prop must be an array of strings.
 *
 * If `value` is not supplied (or null/undefined), user actions that change the
 * selected option will trigger updates to the rendered options.
 *
 * If it is supplied (and not null/undefined), the rendered options will not
 * update in response to user actions. Instead, the `value` prop must change in
 * order for the rendered options to update.
 *
 * If `defaultValue` is provided, any options with the supplied values will be
 * selected.
 */
var ReactDOMSelect = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMSelect',

  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

  propTypes: {
    defaultValue: selectValueType,
    value: selectValueType
  },

  getInitialState: function() {
    return {value: this.props.defaultValue || (this.props.multiple ? [] : '')};
  },

  componentWillMount: function() {
    this._pendingValue = null;
  },

  componentWillReceiveProps: function(nextProps) {
    if (!this.props.multiple && nextProps.multiple) {
      this.setState({value: [this.state.value]});
    } else if (this.props.multiple && !nextProps.multiple) {
      this.setState({value: this.state.value[0]});
    }
  },

  render: function() {
    // Clone `this.props` so we don't mutate the input.
    var props = assign({}, this.props);

    props.onChange = this._handleChange;
    props.value = null;

    return select(props, this.props.children);
  },

  componentDidMount: function() {
    updateOptions(this, LinkedValueUtils.getValue(this));
  },

  componentDidUpdate: function(prevProps) {
    var value = LinkedValueUtils.getValue(this);
    var prevMultiple = !!prevProps.multiple;
    var multiple = !!this.props.multiple;
    if (value != null || prevMultiple !== multiple) {
      updateOptions(this, value);
    }
  },

  _handleChange: function(event) {
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(this);
    if (onChange) {
      returnValue = onChange.call(this, event);
    }

    var selectedValue;
    if (this.props.multiple) {
      selectedValue = [];
      var options = event.target.options;
      for (var i = 0, l = options.length; i < l; i++) {
        if (options[i].selected) {
          selectedValue.push(options[i].value);
        }
      }
    } else {
      selectedValue = event.target.value;
    }

    this._pendingValue = selectedValue;
    ReactUpdates.asap(updateWithPendingValueIfMounted, this);
    return returnValue;
  }

});

module.exports = ReactDOMSelect;

},{"./AutoFocusMixin":14,"./LinkedValueUtils":36,"./Object.assign":39,"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65,"./ReactUpdates":92}],59:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMSelection
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var getNodeForCharacterOffset = require("./getNodeForCharacterOffset");
var getTextContentAccessor = require("./getTextContentAccessor");

/**
 * While `isCollapsed` is available on the Selection object and `collapsed`
 * is available on the Range object, IE11 sometimes gets them wrong.
 * If the anchor/focus nodes and offsets are the same, the range is collapsed.
 */
function isCollapsed(anchorNode, anchorOffset, focusNode, focusOffset) {
  return anchorNode === focusNode && anchorOffset === focusOffset;
}

/**
 * Get the appropriate anchor and focus node/offset pairs for IE.
 *
 * The catch here is that IE's selection API doesn't provide information
 * about whether the selection is forward or backward, so we have to
 * behave as though it's always forward.
 *
 * IE text differs from modern selection in that it behaves as though
 * block elements end with a new line. This means character offsets will
 * differ between the two APIs.
 *
 * @param {DOMElement} node
 * @return {object}
 */
function getIEOffsets(node) {
  var selection = document.selection;
  var selectedRange = selection.createRange();
  var selectedLength = selectedRange.text.length;

  // Duplicate selection so we can move range without breaking user selection.
  var fromStart = selectedRange.duplicate();
  fromStart.moveToElementText(node);
  fromStart.setEndPoint('EndToStart', selectedRange);

  var startOffset = fromStart.text.length;
  var endOffset = startOffset + selectedLength;

  return {
    start: startOffset,
    end: endOffset
  };
}

/**
 * @param {DOMElement} node
 * @return {?object}
 */
function getModernOffsets(node) {
  var selection = window.getSelection && window.getSelection();

  if (!selection || selection.rangeCount === 0) {
    return null;
  }

  var anchorNode = selection.anchorNode;
  var anchorOffset = selection.anchorOffset;
  var focusNode = selection.focusNode;
  var focusOffset = selection.focusOffset;

  var currentRange = selection.getRangeAt(0);

  // If the node and offset values are the same, the selection is collapsed.
  // `Selection.isCollapsed` is available natively, but IE sometimes gets
  // this value wrong.
  var isSelectionCollapsed = isCollapsed(
    selection.anchorNode,
    selection.anchorOffset,
    selection.focusNode,
    selection.focusOffset
  );

  var rangeLength = isSelectionCollapsed ? 0 : currentRange.toString().length;

  var tempRange = currentRange.cloneRange();
  tempRange.selectNodeContents(node);
  tempRange.setEnd(currentRange.startContainer, currentRange.startOffset);

  var isTempRangeCollapsed = isCollapsed(
    tempRange.startContainer,
    tempRange.startOffset,
    tempRange.endContainer,
    tempRange.endOffset
  );

  var start = isTempRangeCollapsed ? 0 : tempRange.toString().length;
  var end = start + rangeLength;

  // Detect whether the selection is backward.
  var detectionRange = document.createRange();
  detectionRange.setStart(anchorNode, anchorOffset);
  detectionRange.setEnd(focusNode, focusOffset);
  var isBackward = detectionRange.collapsed;

  return {
    start: isBackward ? end : start,
    end: isBackward ? start : end
  };
}

/**
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setIEOffsets(node, offsets) {
  var range = document.selection.createRange().duplicate();
  var start, end;

  if (typeof offsets.end === 'undefined') {
    start = offsets.start;
    end = start;
  } else if (offsets.start > offsets.end) {
    start = offsets.end;
    end = offsets.start;
  } else {
    start = offsets.start;
    end = offsets.end;
  }

  range.moveToElementText(node);
  range.moveStart('character', start);
  range.setEndPoint('EndToStart', range);
  range.moveEnd('character', end - start);
  range.select();
}

/**
 * In modern non-IE browsers, we can support both forward and backward
 * selections.
 *
 * Note: IE10+ supports the Selection object, but it does not support
 * the `extend` method, which means that even in modern IE, it's not possible
 * to programatically create a backward selection. Thus, for all IE
 * versions, we use the old IE API to create our selections.
 *
 * @param {DOMElement|DOMTextNode} node
 * @param {object} offsets
 */
function setModernOffsets(node, offsets) {
  if (!window.getSelection) {
    return;
  }

  var selection = window.getSelection();
  var length = node[getTextContentAccessor()].length;
  var start = Math.min(offsets.start, length);
  var end = typeof offsets.end === 'undefined' ?
            start : Math.min(offsets.end, length);

  // IE 11 uses modern selection, but doesn't support the extend method.
  // Flip backward selections, so we can set with a single range.
  if (!selection.extend && start > end) {
    var temp = end;
    end = start;
    start = temp;
  }

  var startMarker = getNodeForCharacterOffset(node, start);
  var endMarker = getNodeForCharacterOffset(node, end);

  if (startMarker && endMarker) {
    var range = document.createRange();
    range.setStart(startMarker.node, startMarker.offset);
    selection.removeAllRanges();

    if (start > end) {
      selection.addRange(range);
      selection.extend(endMarker.node, endMarker.offset);
    } else {
      range.setEnd(endMarker.node, endMarker.offset);
      selection.addRange(range);
    }
  }
}

var useIEOffsets = ExecutionEnvironment.canUseDOM && document.selection;

var ReactDOMSelection = {
  /**
   * @param {DOMElement} node
   */
  getOffsets: useIEOffsets ? getIEOffsets : getModernOffsets,

  /**
   * @param {DOMElement|DOMTextNode} node
   * @param {object} offsets
   */
  setOffsets: useIEOffsets ? setIEOffsets : setModernOffsets
};

module.exports = ReactDOMSelection;

},{"./ExecutionEnvironment":34,"./getNodeForCharacterOffset":132,"./getTextContentAccessor":134}],60:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDOMTextarea
 */

"use strict";

var AutoFocusMixin = require("./AutoFocusMixin");
var DOMPropertyOperations = require("./DOMPropertyOperations");
var LinkedValueUtils = require("./LinkedValueUtils");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");
var ReactDOM = require("./ReactDOM");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var invariant = require("./invariant");

var warning = require("./warning");

// Store a reference to the <textarea> `ReactDOMComponent`. TODO: use string
var textarea = ReactElement.createFactory(ReactDOM.textarea.type);

function forceUpdateIfMounted() {
  /*jshint validthis:true */
  if (this.isMounted()) {
    this.forceUpdate();
  }
}

/**
 * Implements a <textarea> native component that allows setting `value`, and
 * `defaultValue`. This differs from the traditional DOM API because value is
 * usually set as PCDATA children.
 *
 * If `value` is not supplied (or null/undefined), user actions that affect the
 * value will trigger updates to the element.
 *
 * If `value` is supplied (and not null/undefined), the rendered element will
 * not trigger updates to the element. Instead, the `value` prop must change in
 * order for the rendered element to be updated.
 *
 * The rendered element will be initialized with an empty value, the prop
 * `defaultValue` if specified, or the children content (deprecated).
 */
var ReactDOMTextarea = ReactCompositeComponent.createClass({
  displayName: 'ReactDOMTextarea',

  mixins: [AutoFocusMixin, LinkedValueUtils.Mixin, ReactBrowserComponentMixin],

  getInitialState: function() {
    var defaultValue = this.props.defaultValue;
    // TODO (yungsters): Remove support for children content in <textarea>.
    var children = this.props.children;
    if (children != null) {
      if ("production" !== process.env.NODE_ENV) {
        ("production" !== process.env.NODE_ENV ? warning(
          false,
          'Use the `defaultValue` or `value` props instead of setting ' +
          'children on <textarea>.'
        ) : null);
      }
      ("production" !== process.env.NODE_ENV ? invariant(
        defaultValue == null,
        'If you supply `defaultValue` on a <textarea>, do not pass children.'
      ) : invariant(defaultValue == null));
      if (Array.isArray(children)) {
        ("production" !== process.env.NODE_ENV ? invariant(
          children.length <= 1,
          '<textarea> can only have at most one child.'
        ) : invariant(children.length <= 1));
        children = children[0];
      }

      defaultValue = '' + children;
    }
    if (defaultValue == null) {
      defaultValue = '';
    }
    var value = LinkedValueUtils.getValue(this);
    return {
      // We save the initial value so that `ReactDOMComponent` doesn't update
      // `textContent` (unnecessary since we update value).
      // The initial value can be a boolean or object so that's why it's
      // forced to be a string.
      initialValue: '' + (value != null ? value : defaultValue)
    };
  },

  render: function() {
    // Clone `this.props` so we don't mutate the input.
    var props = assign({}, this.props);

    ("production" !== process.env.NODE_ENV ? invariant(
      props.dangerouslySetInnerHTML == null,
      '`dangerouslySetInnerHTML` does not make sense on <textarea>.'
    ) : invariant(props.dangerouslySetInnerHTML == null));

    props.defaultValue = null;
    props.value = null;
    props.onChange = this._handleChange;

    // Always set children to the same thing. In IE9, the selection range will
    // get reset if `textContent` is mutated.
    return textarea(props, this.state.initialValue);
  },

  componentDidUpdate: function(prevProps, prevState, prevContext) {
    var value = LinkedValueUtils.getValue(this);
    if (value != null) {
      var rootNode = this.getDOMNode();
      // Cast `value` to a string to ensure the value is set correctly. While
      // browsers typically do this as necessary, jsdom doesn't.
      DOMPropertyOperations.setValueForProperty(rootNode, 'value', '' + value);
    }
  },

  _handleChange: function(event) {
    var returnValue;
    var onChange = LinkedValueUtils.getOnChange(this);
    if (onChange) {
      returnValue = onChange.call(this, event);
    }
    ReactUpdates.asap(forceUpdateIfMounted, this);
    return returnValue;
  }

});

module.exports = ReactDOMTextarea;

},{"./AutoFocusMixin":14,"./DOMPropertyOperations":24,"./LinkedValueUtils":36,"./Object.assign":39,"./ReactBrowserComponentMixin":42,"./ReactCompositeComponent":47,"./ReactDOM":50,"./ReactElement":65,"./ReactUpdates":92,"./invariant":139,"./warning":158}],61:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultBatchingStrategy
 */

"use strict";

var ReactUpdates = require("./ReactUpdates");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");

var RESET_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: function() {
    ReactDefaultBatchingStrategy.isBatchingUpdates = false;
  }
};

var FLUSH_BATCHED_UPDATES = {
  initialize: emptyFunction,
  close: ReactUpdates.flushBatchedUpdates.bind(ReactUpdates)
};

var TRANSACTION_WRAPPERS = [FLUSH_BATCHED_UPDATES, RESET_BATCHED_UPDATES];

function ReactDefaultBatchingStrategyTransaction() {
  this.reinitializeTransaction();
}

assign(
  ReactDefaultBatchingStrategyTransaction.prototype,
  Transaction.Mixin,
  {
    getTransactionWrappers: function() {
      return TRANSACTION_WRAPPERS;
    }
  }
);

var transaction = new ReactDefaultBatchingStrategyTransaction();

var ReactDefaultBatchingStrategy = {
  isBatchingUpdates: false,

  /**
   * Call the provided function in a context within which calls to `setState`
   * and friends are batched such that components aren't updated unnecessarily.
   */
  batchedUpdates: function(callback, a, b) {
    var alreadyBatchingUpdates = ReactDefaultBatchingStrategy.isBatchingUpdates;

    ReactDefaultBatchingStrategy.isBatchingUpdates = true;

    // The code is written this way to avoid extra allocations
    if (alreadyBatchingUpdates) {
      callback(a, b);
    } else {
      transaction.perform(callback, null, a, b);
    }
  }
};

module.exports = ReactDefaultBatchingStrategy;

},{"./Object.assign":39,"./ReactUpdates":92,"./Transaction":108,"./emptyFunction":120}],62:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultInjection
 */

"use strict";

var BeforeInputEventPlugin = require("./BeforeInputEventPlugin");
var ChangeEventPlugin = require("./ChangeEventPlugin");
var ClientReactRootIndex = require("./ClientReactRootIndex");
var CompositionEventPlugin = require("./CompositionEventPlugin");
var DefaultEventPluginOrder = require("./DefaultEventPluginOrder");
var EnterLeaveEventPlugin = require("./EnterLeaveEventPlugin");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var HTMLDOMPropertyConfig = require("./HTMLDOMPropertyConfig");
var MobileSafariClickEventPlugin = require("./MobileSafariClickEventPlugin");
var ReactBrowserComponentMixin = require("./ReactBrowserComponentMixin");
var ReactComponentBrowserEnvironment =
  require("./ReactComponentBrowserEnvironment");
var ReactDefaultBatchingStrategy = require("./ReactDefaultBatchingStrategy");
var ReactDOMComponent = require("./ReactDOMComponent");
var ReactDOMButton = require("./ReactDOMButton");
var ReactDOMForm = require("./ReactDOMForm");
var ReactDOMImg = require("./ReactDOMImg");
var ReactDOMInput = require("./ReactDOMInput");
var ReactDOMOption = require("./ReactDOMOption");
var ReactDOMSelect = require("./ReactDOMSelect");
var ReactDOMTextarea = require("./ReactDOMTextarea");
var ReactEventListener = require("./ReactEventListener");
var ReactInjection = require("./ReactInjection");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactMount = require("./ReactMount");
var SelectEventPlugin = require("./SelectEventPlugin");
var ServerReactRootIndex = require("./ServerReactRootIndex");
var SimpleEventPlugin = require("./SimpleEventPlugin");
var SVGDOMPropertyConfig = require("./SVGDOMPropertyConfig");

var createFullPageComponent = require("./createFullPageComponent");

function inject() {
  ReactInjection.EventEmitter.injectReactEventListener(
    ReactEventListener
  );

  /**
   * Inject modules for resolving DOM hierarchy and plugin ordering.
   */
  ReactInjection.EventPluginHub.injectEventPluginOrder(DefaultEventPluginOrder);
  ReactInjection.EventPluginHub.injectInstanceHandle(ReactInstanceHandles);
  ReactInjection.EventPluginHub.injectMount(ReactMount);

  /**
   * Some important event plugins included by default (without having to require
   * them).
   */
  ReactInjection.EventPluginHub.injectEventPluginsByName({
    SimpleEventPlugin: SimpleEventPlugin,
    EnterLeaveEventPlugin: EnterLeaveEventPlugin,
    ChangeEventPlugin: ChangeEventPlugin,
    CompositionEventPlugin: CompositionEventPlugin,
    MobileSafariClickEventPlugin: MobileSafariClickEventPlugin,
    SelectEventPlugin: SelectEventPlugin,
    BeforeInputEventPlugin: BeforeInputEventPlugin
  });

  ReactInjection.NativeComponent.injectGenericComponentClass(
    ReactDOMComponent
  );

  ReactInjection.NativeComponent.injectComponentClasses({
    'button': ReactDOMButton,
    'form': ReactDOMForm,
    'img': ReactDOMImg,
    'input': ReactDOMInput,
    'option': ReactDOMOption,
    'select': ReactDOMSelect,
    'textarea': ReactDOMTextarea,

    'html': createFullPageComponent('html'),
    'head': createFullPageComponent('head'),
    'body': createFullPageComponent('body')
  });

  // This needs to happen after createFullPageComponent() otherwise the mixin
  // gets double injected.
  ReactInjection.CompositeComponent.injectMixin(ReactBrowserComponentMixin);

  ReactInjection.DOMProperty.injectDOMPropertyConfig(HTMLDOMPropertyConfig);
  ReactInjection.DOMProperty.injectDOMPropertyConfig(SVGDOMPropertyConfig);

  ReactInjection.EmptyComponent.injectEmptyComponent('noscript');

  ReactInjection.Updates.injectReconcileTransaction(
    ReactComponentBrowserEnvironment.ReactReconcileTransaction
  );
  ReactInjection.Updates.injectBatchingStrategy(
    ReactDefaultBatchingStrategy
  );

  ReactInjection.RootIndex.injectCreateReactRootIndex(
    ExecutionEnvironment.canUseDOM ?
      ClientReactRootIndex.createReactRootIndex :
      ServerReactRootIndex.createReactRootIndex
  );

  ReactInjection.Component.injectEnvironment(ReactComponentBrowserEnvironment);

  if ("production" !== process.env.NODE_ENV) {
    var url = (ExecutionEnvironment.canUseDOM && window.location.href) || '';
    if ((/[?&]react_perf\b/).test(url)) {
      var ReactDefaultPerf = require("./ReactDefaultPerf");
      ReactDefaultPerf.start();
    }
  }
}

module.exports = {
  inject: inject
};

},{"./BeforeInputEventPlugin":15,"./ChangeEventPlugin":19,"./ClientReactRootIndex":20,"./CompositionEventPlugin":21,"./DefaultEventPluginOrder":26,"./EnterLeaveEventPlugin":27,"./ExecutionEnvironment":34,"./HTMLDOMPropertyConfig":35,"./MobileSafariClickEventPlugin":38,"./ReactBrowserComponentMixin":42,"./ReactComponentBrowserEnvironment":46,"./ReactDOMButton":51,"./ReactDOMComponent":52,"./ReactDOMForm":53,"./ReactDOMImg":55,"./ReactDOMInput":56,"./ReactDOMOption":57,"./ReactDOMSelect":58,"./ReactDOMTextarea":60,"./ReactDefaultBatchingStrategy":61,"./ReactDefaultPerf":63,"./ReactEventListener":70,"./ReactInjection":71,"./ReactInstanceHandles":73,"./ReactMount":76,"./SVGDOMPropertyConfig":93,"./SelectEventPlugin":94,"./ServerReactRootIndex":95,"./SimpleEventPlugin":96,"./createFullPageComponent":116}],63:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerf
 * @typechecks static-only
 */

"use strict";

var DOMProperty = require("./DOMProperty");
var ReactDefaultPerfAnalysis = require("./ReactDefaultPerfAnalysis");
var ReactMount = require("./ReactMount");
var ReactPerf = require("./ReactPerf");

var performanceNow = require("./performanceNow");

function roundFloat(val) {
  return Math.floor(val * 100) / 100;
}

function addValue(obj, key, val) {
  obj[key] = (obj[key] || 0) + val;
}

var ReactDefaultPerf = {
  _allMeasurements: [], // last item in the list is the current one
  _mountStack: [0],
  _injected: false,

  start: function() {
    if (!ReactDefaultPerf._injected) {
      ReactPerf.injection.injectMeasure(ReactDefaultPerf.measure);
    }

    ReactDefaultPerf._allMeasurements.length = 0;
    ReactPerf.enableMeasure = true;
  },

  stop: function() {
    ReactPerf.enableMeasure = false;
  },

  getLastMeasurements: function() {
    return ReactDefaultPerf._allMeasurements;
  },

  printExclusive: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getExclusiveSummary(measurements);
    console.table(summary.map(function(item) {
      return {
        'Component class name': item.componentName,
        'Total inclusive time (ms)': roundFloat(item.inclusive),
        'Exclusive mount time (ms)': roundFloat(item.exclusive),
        'Exclusive render time (ms)': roundFloat(item.render),
        'Mount time per instance (ms)': roundFloat(item.exclusive / item.count),
        'Render time per instance (ms)': roundFloat(item.render / item.count),
        'Instances': item.count
      };
    }));
    // TODO: ReactDefaultPerfAnalysis.getTotalTime() does not return the correct
    // number.
  },

  printInclusive: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(measurements);
    console.table(summary.map(function(item) {
      return {
        'Owner > component': item.componentName,
        'Inclusive time (ms)': roundFloat(item.time),
        'Instances': item.count
      };
    }));
    console.log(
      'Total time:',
      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
    );
  },

  getMeasurementsSummaryMap: function(measurements) {
    var summary = ReactDefaultPerfAnalysis.getInclusiveSummary(
      measurements,
      true
    );
    return summary.map(function(item) {
      return {
        'Owner > component': item.componentName,
        'Wasted time (ms)': item.time,
        'Instances': item.count
      };
    });
  },

  printWasted: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    console.table(ReactDefaultPerf.getMeasurementsSummaryMap(measurements));
    console.log(
      'Total time:',
      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
    );
  },

  printDOM: function(measurements) {
    measurements = measurements || ReactDefaultPerf._allMeasurements;
    var summary = ReactDefaultPerfAnalysis.getDOMSummary(measurements);
    console.table(summary.map(function(item) {
      var result = {};
      result[DOMProperty.ID_ATTRIBUTE_NAME] = item.id;
      result['type'] = item.type;
      result['args'] = JSON.stringify(item.args);
      return result;
    }));
    console.log(
      'Total time:',
      ReactDefaultPerfAnalysis.getTotalTime(measurements).toFixed(2) + ' ms'
    );
  },

  _recordWrite: function(id, fnName, totalTime, args) {
    // TODO: totalTime isn't that useful since it doesn't count paints/reflows
    var writes =
      ReactDefaultPerf
        ._allMeasurements[ReactDefaultPerf._allMeasurements.length - 1]
        .writes;
    writes[id] = writes[id] || [];
    writes[id].push({
      type: fnName,
      time: totalTime,
      args: args
    });
  },

  measure: function(moduleName, fnName, func) {
    return function() {for (var args=[],$__0=0,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
      var totalTime;
      var rv;
      var start;

      if (fnName === '_renderNewRootComponent' ||
          fnName === 'flushBatchedUpdates') {
        // A "measurement" is a set of metrics recorded for each flush. We want
        // to group the metrics for a given flush together so we can look at the
        // components that rendered and the DOM operations that actually
        // happened to determine the amount of "wasted work" performed.
        ReactDefaultPerf._allMeasurements.push({
          exclusive: {},
          inclusive: {},
          render: {},
          counts: {},
          writes: {},
          displayNames: {},
          totalTime: 0
        });
        start = performanceNow();
        rv = func.apply(this, args);
        ReactDefaultPerf._allMeasurements[
          ReactDefaultPerf._allMeasurements.length - 1
        ].totalTime = performanceNow() - start;
        return rv;
      } else if (moduleName === 'ReactDOMIDOperations' ||
        moduleName === 'ReactComponentBrowserEnvironment') {
        start = performanceNow();
        rv = func.apply(this, args);
        totalTime = performanceNow() - start;

        if (fnName === 'mountImageIntoNode') {
          var mountID = ReactMount.getID(args[1]);
          ReactDefaultPerf._recordWrite(mountID, fnName, totalTime, args[0]);
        } else if (fnName === 'dangerouslyProcessChildrenUpdates') {
          // special format
          args[0].forEach(function(update) {
            var writeArgs = {};
            if (update.fromIndex !== null) {
              writeArgs.fromIndex = update.fromIndex;
            }
            if (update.toIndex !== null) {
              writeArgs.toIndex = update.toIndex;
            }
            if (update.textContent !== null) {
              writeArgs.textContent = update.textContent;
            }
            if (update.markupIndex !== null) {
              writeArgs.markup = args[1][update.markupIndex];
            }
            ReactDefaultPerf._recordWrite(
              update.parentID,
              update.type,
              totalTime,
              writeArgs
            );
          });
        } else {
          // basic format
          ReactDefaultPerf._recordWrite(
            args[0],
            fnName,
            totalTime,
            Array.prototype.slice.call(args, 1)
          );
        }
        return rv;
      } else if (moduleName === 'ReactCompositeComponent' && (
        fnName === 'mountComponent' ||
        fnName === 'updateComponent' || // TODO: receiveComponent()?
        fnName === '_renderValidatedComponent')) {

        var rootNodeID = fnName === 'mountComponent' ?
          args[0] :
          this._rootNodeID;
        var isRender = fnName === '_renderValidatedComponent';
        var isMount = fnName === 'mountComponent';

        var mountStack = ReactDefaultPerf._mountStack;
        var entry = ReactDefaultPerf._allMeasurements[
          ReactDefaultPerf._allMeasurements.length - 1
        ];

        if (isRender) {
          addValue(entry.counts, rootNodeID, 1);
        } else if (isMount) {
          mountStack.push(0);
        }

        start = performanceNow();
        rv = func.apply(this, args);
        totalTime = performanceNow() - start;

        if (isRender) {
          addValue(entry.render, rootNodeID, totalTime);
        } else if (isMount) {
          var subMountTime = mountStack.pop();
          mountStack[mountStack.length - 1] += totalTime;
          addValue(entry.exclusive, rootNodeID, totalTime - subMountTime);
          addValue(entry.inclusive, rootNodeID, totalTime);
        } else {
          addValue(entry.inclusive, rootNodeID, totalTime);
        }

        entry.displayNames[rootNodeID] = {
          current: this.constructor.displayName,
          owner: this._owner ? this._owner.constructor.displayName : '<root>'
        };

        return rv;
      } else {
        return func.apply(this, args);
      }
    };
  }
};

module.exports = ReactDefaultPerf;

},{"./DOMProperty":23,"./ReactDefaultPerfAnalysis":64,"./ReactMount":76,"./ReactPerf":81,"./performanceNow":152}],64:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactDefaultPerfAnalysis
 */

var assign = require("./Object.assign");

// Don't try to save users less than 1.2ms (a number I made up)
var DONT_CARE_THRESHOLD = 1.2;
var DOM_OPERATION_TYPES = {
  'mountImageIntoNode': 'set innerHTML',
  INSERT_MARKUP: 'set innerHTML',
  MOVE_EXISTING: 'move',
  REMOVE_NODE: 'remove',
  TEXT_CONTENT: 'set textContent',
  'updatePropertyByID': 'update attribute',
  'deletePropertyByID': 'delete attribute',
  'updateStylesByID': 'update styles',
  'updateInnerHTMLByID': 'set innerHTML',
  'dangerouslyReplaceNodeWithMarkupByID': 'replace'
};

function getTotalTime(measurements) {
  // TODO: return number of DOM ops? could be misleading.
  // TODO: measure dropped frames after reconcile?
  // TODO: log total time of each reconcile and the top-level component
  // class that triggered it.
  var totalTime = 0;
  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    totalTime += measurement.totalTime;
  }
  return totalTime;
}

function getDOMSummary(measurements) {
  var items = [];
  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var id;

    for (id in measurement.writes) {
      measurement.writes[id].forEach(function(write) {
        items.push({
          id: id,
          type: DOM_OPERATION_TYPES[write.type] || write.type,
          args: write.args
        });
      });
    }
  }
  return items;
}

function getExclusiveSummary(measurements) {
  var candidates = {};
  var displayName;

  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var allIDs = assign(
      {},
      measurement.exclusive,
      measurement.inclusive
    );

    for (var id in allIDs) {
      displayName = measurement.displayNames[id].current;

      candidates[displayName] = candidates[displayName] || {
        componentName: displayName,
        inclusive: 0,
        exclusive: 0,
        render: 0,
        count: 0
      };
      if (measurement.render[id]) {
        candidates[displayName].render += measurement.render[id];
      }
      if (measurement.exclusive[id]) {
        candidates[displayName].exclusive += measurement.exclusive[id];
      }
      if (measurement.inclusive[id]) {
        candidates[displayName].inclusive += measurement.inclusive[id];
      }
      if (measurement.counts[id]) {
        candidates[displayName].count += measurement.counts[id];
      }
    }
  }

  // Now make a sorted array with the results.
  var arr = [];
  for (displayName in candidates) {
    if (candidates[displayName].exclusive >= DONT_CARE_THRESHOLD) {
      arr.push(candidates[displayName]);
    }
  }

  arr.sort(function(a, b) {
    return b.exclusive - a.exclusive;
  });

  return arr;
}

function getInclusiveSummary(measurements, onlyClean) {
  var candidates = {};
  var inclusiveKey;

  for (var i = 0; i < measurements.length; i++) {
    var measurement = measurements[i];
    var allIDs = assign(
      {},
      measurement.exclusive,
      measurement.inclusive
    );
    var cleanComponents;

    if (onlyClean) {
      cleanComponents = getUnchangedComponents(measurement);
    }

    for (var id in allIDs) {
      if (onlyClean && !cleanComponents[id]) {
        continue;
      }

      var displayName = measurement.displayNames[id];

      // Inclusive time is not useful for many components without knowing where
      // they are instantiated. So we aggregate inclusive time with both the
      // owner and current displayName as the key.
      inclusiveKey = displayName.owner + ' > ' + displayName.current;

      candidates[inclusiveKey] = candidates[inclusiveKey] || {
        componentName: inclusiveKey,
        time: 0,
        count: 0
      };

      if (measurement.inclusive[id]) {
        candidates[inclusiveKey].time += measurement.inclusive[id];
      }
      if (measurement.counts[id]) {
        candidates[inclusiveKey].count += measurement.counts[id];
      }
    }
  }

  // Now make a sorted array with the results.
  var arr = [];
  for (inclusiveKey in candidates) {
    if (candidates[inclusiveKey].time >= DONT_CARE_THRESHOLD) {
      arr.push(candidates[inclusiveKey]);
    }
  }

  arr.sort(function(a, b) {
    return b.time - a.time;
  });

  return arr;
}

function getUnchangedComponents(measurement) {
  // For a given reconcile, look at which components did not actually
  // render anything to the DOM and return a mapping of their ID to
  // the amount of time it took to render the entire subtree.
  var cleanComponents = {};
  var dirtyLeafIDs = Object.keys(measurement.writes);
  var allIDs = assign({}, measurement.exclusive, measurement.inclusive);

  for (var id in allIDs) {
    var isDirty = false;
    // For each component that rendered, see if a component that triggered
    // a DOM op is in its subtree.
    for (var i = 0; i < dirtyLeafIDs.length; i++) {
      if (dirtyLeafIDs[i].indexOf(id) === 0) {
        isDirty = true;
        break;
      }
    }
    if (!isDirty && measurement.counts[id] > 0) {
      cleanComponents[id] = true;
    }
  }
  return cleanComponents;
}

var ReactDefaultPerfAnalysis = {
  getExclusiveSummary: getExclusiveSummary,
  getInclusiveSummary: getInclusiveSummary,
  getDOMSummary: getDOMSummary,
  getTotalTime: getTotalTime
};

module.exports = ReactDefaultPerfAnalysis;

},{"./Object.assign":39}],65:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElement
 */

"use strict";

var ReactContext = require("./ReactContext");
var ReactCurrentOwner = require("./ReactCurrentOwner");

var warning = require("./warning");

var RESERVED_PROPS = {
  key: true,
  ref: true
};

/**
 * Warn for mutations.
 *
 * @internal
 * @param {object} object
 * @param {string} key
 */
function defineWarningProperty(object, key) {
  Object.defineProperty(object, key, {

    configurable: false,
    enumerable: true,

    get: function() {
      if (!this._store) {
        return null;
      }
      return this._store[key];
    },

    set: function(value) {
      ("production" !== process.env.NODE_ENV ? warning(
        false,
        'Don\'t set the ' + key + ' property of the component. ' +
        'Mutate the existing props object instead.'
      ) : null);
      this._store[key] = value;
    }

  });
}

/**
 * This is updated to true if the membrane is successfully created.
 */
var useMutationMembrane = false;

/**
 * Warn for mutations.
 *
 * @internal
 * @param {object} element
 */
function defineMutationMembrane(prototype) {
  try {
    var pseudoFrozenProperties = {
      props: true
    };
    for (var key in pseudoFrozenProperties) {
      defineWarningProperty(prototype, key);
    }
    useMutationMembrane = true;
  } catch (x) {
    // IE will fail on defineProperty
  }
}

/**
 * Base constructor for all React elements. This is only used to make this
 * work with a dynamic instanceof check. Nothing should live on this prototype.
 *
 * @param {*} type
 * @param {string|object} ref
 * @param {*} key
 * @param {*} props
 * @internal
 */
var ReactElement = function(type, key, ref, owner, context, props) {
  // Built-in properties that belong on the element
  this.type = type;
  this.key = key;
  this.ref = ref;

  // Record the component responsible for creating this element.
  this._owner = owner;

  // TODO: Deprecate withContext, and then the context becomes accessible
  // through the owner.
  this._context = context;

  if ("production" !== process.env.NODE_ENV) {
    // The validation flag and props are currently mutative. We put them on
    // an external backing store so that we can freeze the whole object.
    // This can be replaced with a WeakMap once they are implemented in
    // commonly used development environments.
    this._store = { validated: false, props: props };

    // We're not allowed to set props directly on the object so we early
    // return and rely on the prototype membrane to forward to the backing
    // store.
    if (useMutationMembrane) {
      Object.freeze(this);
      return;
    }
  }

  this.props = props;
};

// We intentionally don't expose the function on the constructor property.
// ReactElement should be indistinguishable from a plain object.
ReactElement.prototype = {
  _isReactElement: true
};

if ("production" !== process.env.NODE_ENV) {
  defineMutationMembrane(ReactElement.prototype);
}

ReactElement.createElement = function(type, config, children) {
  var propName;

  // Reserved names are extracted
  var props = {};

  var key = null;
  var ref = null;

  if (config != null) {
    ref = config.ref === undefined ? null : config.ref;
    if ("production" !== process.env.NODE_ENV) {
      ("production" !== process.env.NODE_ENV ? warning(
        config.key !== null,
        'createElement(...): Encountered component with a `key` of null. In ' +
        'a future version, this will be treated as equivalent to the string ' +
        '\'null\'; instead, provide an explicit key or use undefined.'
      ) : null);
    }
    // TODO: Change this back to `config.key === undefined`
    key = config.key == null ? null : '' + config.key;
    // Remaining properties are added to a new props object
    for (propName in config) {
      if (config.hasOwnProperty(propName) &&
          !RESERVED_PROPS.hasOwnProperty(propName)) {
        props[propName] = config[propName];
      }
    }
  }

  // Children can be more than one argument, and those are transferred onto
  // the newly allocated props object.
  var childrenLength = arguments.length - 2;
  if (childrenLength === 1) {
    props.children = children;
  } else if (childrenLength > 1) {
    var childArray = Array(childrenLength);
    for (var i = 0; i < childrenLength; i++) {
      childArray[i] = arguments[i + 2];
    }
    props.children = childArray;
  }

  // Resolve default props
  if (type.defaultProps) {
    var defaultProps = type.defaultProps;
    for (propName in defaultProps) {
      if (typeof props[propName] === 'undefined') {
        props[propName] = defaultProps[propName];
      }
    }
  }

  return new ReactElement(
    type,
    key,
    ref,
    ReactCurrentOwner.current,
    ReactContext.current,
    props
  );
};

ReactElement.createFactory = function(type) {
  var factory = ReactElement.createElement.bind(null, type);
  // Expose the type on the factory and the prototype so that it can be
  // easily accessed on elements. E.g. <Foo />.type === Foo.type.
  // This should not be named `constructor` since this may not be the function
  // that created the element, and it may not even be a constructor.
  factory.type = type;
  return factory;
};

ReactElement.cloneAndReplaceProps = function(oldElement, newProps) {
  var newElement = new ReactElement(
    oldElement.type,
    oldElement.key,
    oldElement.ref,
    oldElement._owner,
    oldElement._context,
    newProps
  );

  if ("production" !== process.env.NODE_ENV) {
    // If the key on the original is valid, then the clone is valid
    newElement._store.validated = oldElement._store.validated;
  }
  return newElement;
};

/**
 * @param {?object} object
 * @return {boolean} True if `object` is a valid component.
 * @final
 */
ReactElement.isValidElement = function(object) {
  // ReactTestUtils is often used outside of beforeEach where as React is
  // within it. This leads to two different instances of React on the same
  // page. To identify a element from a different React instance we use
  // a flag instead of an instanceof check.
  var isElement = !!(object && object._isReactElement);
  // if (isElement && !(object instanceof ReactElement)) {
  // This is an indicator that you're using multiple versions of React at the
  // same time. This will screw with ownership and stuff. Fix it, please.
  // TODO: We could possibly warn here.
  // }
  return isElement;
};

module.exports = ReactElement;

},{"./ReactContext":48,"./ReactCurrentOwner":49,"./warning":158}],66:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactElementValidator
 */

/**
 * ReactElementValidator provides a wrapper around a element factory
 * which validates the props passed to the element. This is intended to be
 * used only in DEV and could be replaced by a static type checker for languages
 * that support it.
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactPropTypeLocations = require("./ReactPropTypeLocations");
var ReactCurrentOwner = require("./ReactCurrentOwner");

var monitorCodeUse = require("./monitorCodeUse");

/**
 * Warn if there's no key explicitly set on dynamic arrays of children or
 * object keys are not valid. This allows us to keep track of children between
 * updates.
 */
var ownerHasKeyUseWarning = {
  'react_key_warning': {},
  'react_numeric_key_warning': {}
};
var ownerHasMonitoredObjectMap = {};

var loggedTypeFailures = {};

var NUMERIC_PROPERTY_REGEX = /^\d+$/;

/**
 * Gets the current owner's displayName for use in warnings.
 *
 * @internal
 * @return {?string} Display name or undefined
 */
function getCurrentOwnerDisplayName() {
  var current = ReactCurrentOwner.current;
  return current && current.constructor.displayName || undefined;
}

/**
 * Warn if the component doesn't have an explicit key assigned to it.
 * This component is in an array. The array could grow and shrink or be
 * reordered. All children that haven't already been validated are required to
 * have a "key" property assigned to it.
 *
 * @internal
 * @param {ReactComponent} component Component that requires a key.
 * @param {*} parentType component's parent's type.
 */
function validateExplicitKey(component, parentType) {
  if (component._store.validated || component.key != null) {
    return;
  }
  component._store.validated = true;

  warnAndMonitorForKeyUse(
    'react_key_warning',
    'Each child in an array should have a unique "key" prop.',
    component,
    parentType
  );
}

/**
 * Warn if the key is being defined as an object property but has an incorrect
 * value.
 *
 * @internal
 * @param {string} name Property name of the key.
 * @param {ReactComponent} component Component that requires a key.
 * @param {*} parentType component's parent's type.
 */
function validatePropertyKey(name, component, parentType) {
  if (!NUMERIC_PROPERTY_REGEX.test(name)) {
    return;
  }
  warnAndMonitorForKeyUse(
    'react_numeric_key_warning',
    'Child objects should have non-numeric keys so ordering is preserved.',
    component,
    parentType
  );
}

/**
 * Shared warning and monitoring code for the key warnings.
 *
 * @internal
 * @param {string} warningID The id used when logging.
 * @param {string} message The base warning that gets output.
 * @param {ReactComponent} component Component that requires a key.
 * @param {*} parentType component's parent's type.
 */
function warnAndMonitorForKeyUse(warningID, message, component, parentType) {
  var ownerName = getCurrentOwnerDisplayName();
  var parentName = parentType.displayName;

  var useName = ownerName || parentName;
  var memoizer = ownerHasKeyUseWarning[warningID];
  if (memoizer.hasOwnProperty(useName)) {
    return;
  }
  memoizer[useName] = true;

  message += ownerName ?
    (" Check the render method of " + ownerName + ".") :
    (" Check the renderComponent call using <" + parentName + ">.");

  // Usually the current owner is the offender, but if it accepts children as a
  // property, it may be the creator of the child that's responsible for
  // assigning it a key.
  var childOwnerName = null;
  if (component._owner && component._owner !== ReactCurrentOwner.current) {
    // Name of the component that originally created this child.
    childOwnerName = component._owner.constructor.displayName;

    message += (" It was passed a child from " + childOwnerName + ".");
  }

  message += ' See http://fb.me/react-warning-keys for more information.';
  monitorCodeUse(warningID, {
    component: useName,
    componentOwner: childOwnerName
  });
  console.warn(message);
}

/**
 * Log that we're using an object map. We're considering deprecating this
 * feature and replace it with proper Map and ImmutableMap data structures.
 *
 * @internal
 */
function monitorUseOfObjectMap() {
  var currentName = getCurrentOwnerDisplayName() || '';
  if (ownerHasMonitoredObjectMap.hasOwnProperty(currentName)) {
    return;
  }
  ownerHasMonitoredObjectMap[currentName] = true;
  monitorCodeUse('react_object_map_children');
}

/**
 * Ensure that every component either is passed in a static location, in an
 * array with an explicit keys property defined, or in an object literal
 * with valid key property.
 *
 * @internal
 * @param {*} component Statically passed child of any type.
 * @param {*} parentType component's parent's type.
 * @return {boolean}
 */
function validateChildKeys(component, parentType) {
  if (Array.isArray(component)) {
    for (var i = 0; i < component.length; i++) {
      var child = component[i];
      if (ReactElement.isValidElement(child)) {
        validateExplicitKey(child, parentType);
      }
    }
  } else if (ReactElement.isValidElement(component)) {
    // This component was passed in a valid location.
    component._store.validated = true;
  } else if (component && typeof component === 'object') {
    monitorUseOfObjectMap();
    for (var name in component) {
      validatePropertyKey(name, component[name], parentType);
    }
  }
}

/**
 * Assert that the props are valid
 *
 * @param {string} componentName Name of the component for error messages.
 * @param {object} propTypes Map of prop name to a ReactPropType
 * @param {object} props
 * @param {string} location e.g. "prop", "context", "child context"
 * @private
 */
function checkPropTypes(componentName, propTypes, props, location) {
  for (var propName in propTypes) {
    if (propTypes.hasOwnProperty(propName)) {
      var error;
      // Prop type validation may throw. In case they do, we don't want to
      // fail the render phase where it didn't fail before. So we log it.
      // After these have been cleaned up, we'll let them throw.
      try {
        error = propTypes[propName](props, propName, componentName, location);
      } catch (ex) {
        error = ex;
      }
      if (error instanceof Error && !(error.message in loggedTypeFailures)) {
        // Only monitor this failure once because there tends to be a lot of the
        // same error.
        loggedTypeFailures[error.message] = true;
        // This will soon use the warning module
        monitorCodeUse(
          'react_failed_descriptor_type_check',
          { message: error.message }
        );
      }
    }
  }
}

var ReactElementValidator = {

  createElement: function(type, props, children) {
    var element = ReactElement.createElement.apply(this, arguments);

    // The result can be nullish if a mock or a custom function is used.
    // TODO: Drop this when these are no longer allowed as the type argument.
    if (element == null) {
      return element;
    }

    for (var i = 2; i < arguments.length; i++) {
      validateChildKeys(arguments[i], type);
    }

    var name = type.displayName;
    if (type.propTypes) {
      checkPropTypes(
        name,
        type.propTypes,
        element.props,
        ReactPropTypeLocations.prop
      );
    }
    if (type.contextTypes) {
      checkPropTypes(
        name,
        type.contextTypes,
        element._context,
        ReactPropTypeLocations.context
      );
    }
    return element;
  },

  createFactory: function(type) {
    var validatedFactory = ReactElementValidator.createElement.bind(
      null,
      type
    );
    validatedFactory.type = type;
    return validatedFactory;
  }

};

module.exports = ReactElementValidator;

},{"./ReactCurrentOwner":49,"./ReactElement":65,"./ReactPropTypeLocations":84,"./monitorCodeUse":149}],67:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEmptyComponent
 */

"use strict";

var ReactElement = require("./ReactElement");

var invariant = require("./invariant");

var component;
// This registry keeps track of the React IDs of the components that rendered to
// `null` (in reality a placeholder such as `noscript`)
var nullComponentIdsRegistry = {};

var ReactEmptyComponentInjection = {
  injectEmptyComponent: function(emptyComponent) {
    component = ReactElement.createFactory(emptyComponent);
  }
};

/**
 * @return {ReactComponent} component The injected empty component.
 */
function getEmptyComponent() {
  ("production" !== process.env.NODE_ENV ? invariant(
    component,
    'Trying to return null from a render, but no null placeholder component ' +
    'was injected.'
  ) : invariant(component));
  return component();
}

/**
 * Mark the component as having rendered to null.
 * @param {string} id Component's `_rootNodeID`.
 */
function registerNullComponentID(id) {
  nullComponentIdsRegistry[id] = true;
}

/**
 * Unmark the component as having rendered to null: it renders to something now.
 * @param {string} id Component's `_rootNodeID`.
 */
function deregisterNullComponentID(id) {
  delete nullComponentIdsRegistry[id];
}

/**
 * @param {string} id Component's `_rootNodeID`.
 * @return {boolean} True if the component is rendered to null.
 */
function isNullComponentID(id) {
  return nullComponentIdsRegistry[id];
}

var ReactEmptyComponent = {
  deregisterNullComponentID: deregisterNullComponentID,
  getEmptyComponent: getEmptyComponent,
  injection: ReactEmptyComponentInjection,
  isNullComponentID: isNullComponentID,
  registerNullComponentID: registerNullComponentID
};

module.exports = ReactEmptyComponent;

},{"./ReactElement":65,"./invariant":139}],68:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactErrorUtils
 * @typechecks
 */

"use strict";

var ReactErrorUtils = {
  /**
   * Creates a guarded version of a function. This is supposed to make debugging
   * of event handlers easier. To aid debugging with the browser's debugger,
   * this currently simply returns the original function.
   *
   * @param {function} func Function to be executed
   * @param {string} name The name of the guard
   * @return {function}
   */
  guard: function(func, name) {
    return func;
  }
};

module.exports = ReactErrorUtils;

},{}],69:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventEmitterMixin
 */

"use strict";

var EventPluginHub = require("./EventPluginHub");

function runEventQueueInBatch(events) {
  EventPluginHub.enqueueEvents(events);
  EventPluginHub.processEventQueue();
}

var ReactEventEmitterMixin = {

  /**
   * Streams a fired top-level event to `EventPluginHub` where plugins have the
   * opportunity to create `ReactEvent`s to be dispatched.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {object} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native environment event.
   */
  handleTopLevel: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    var events = EventPluginHub.extractEvents(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent
    );

    runEventQueueInBatch(events);
  }
};

module.exports = ReactEventEmitterMixin;

},{"./EventPluginHub":30}],70:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactEventListener
 * @typechecks static-only
 */

"use strict";

var EventListener = require("./EventListener");
var ExecutionEnvironment = require("./ExecutionEnvironment");
var PooledClass = require("./PooledClass");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactMount = require("./ReactMount");
var ReactUpdates = require("./ReactUpdates");

var assign = require("./Object.assign");
var getEventTarget = require("./getEventTarget");
var getUnboundedScrollPosition = require("./getUnboundedScrollPosition");

/**
 * Finds the parent React component of `node`.
 *
 * @param {*} node
 * @return {?DOMEventTarget} Parent container, or `null` if the specified node
 *                           is not nested.
 */
function findParent(node) {
  // TODO: It may be a good idea to cache this to prevent unnecessary DOM
  // traversal, but caching is difficult to do correctly without using a
  // mutation observer to listen for all DOM changes.
  var nodeID = ReactMount.getID(node);
  var rootID = ReactInstanceHandles.getReactRootIDFromNodeID(nodeID);
  var container = ReactMount.findReactContainerForID(rootID);
  var parent = ReactMount.getFirstReactDOM(container);
  return parent;
}

// Used to store ancestor hierarchy in top level callback
function TopLevelCallbackBookKeeping(topLevelType, nativeEvent) {
  this.topLevelType = topLevelType;
  this.nativeEvent = nativeEvent;
  this.ancestors = [];
}
assign(TopLevelCallbackBookKeeping.prototype, {
  destructor: function() {
    this.topLevelType = null;
    this.nativeEvent = null;
    this.ancestors.length = 0;
  }
});
PooledClass.addPoolingTo(
  TopLevelCallbackBookKeeping,
  PooledClass.twoArgumentPooler
);

function handleTopLevelImpl(bookKeeping) {
  var topLevelTarget = ReactMount.getFirstReactDOM(
    getEventTarget(bookKeeping.nativeEvent)
  ) || window;

  // Loop through the hierarchy, in case there's any nested components.
  // It's important that we build the array of ancestors before calling any
  // event handlers, because event handlers can modify the DOM, leading to
  // inconsistencies with ReactMount's node cache. See #1105.
  var ancestor = topLevelTarget;
  while (ancestor) {
    bookKeeping.ancestors.push(ancestor);
    ancestor = findParent(ancestor);
  }

  for (var i = 0, l = bookKeeping.ancestors.length; i < l; i++) {
    topLevelTarget = bookKeeping.ancestors[i];
    var topLevelTargetID = ReactMount.getID(topLevelTarget) || '';
    ReactEventListener._handleTopLevel(
      bookKeeping.topLevelType,
      topLevelTarget,
      topLevelTargetID,
      bookKeeping.nativeEvent
    );
  }
}

function scrollValueMonitor(cb) {
  var scrollPosition = getUnboundedScrollPosition(window);
  cb(scrollPosition);
}

var ReactEventListener = {
  _enabled: true,
  _handleTopLevel: null,

  WINDOW_HANDLE: ExecutionEnvironment.canUseDOM ? window : null,

  setHandleTopLevel: function(handleTopLevel) {
    ReactEventListener._handleTopLevel = handleTopLevel;
  },

  setEnabled: function(enabled) {
    ReactEventListener._enabled = !!enabled;
  },

  isEnabled: function() {
    return ReactEventListener._enabled;
  },


  /**
   * Traps top-level events by using event bubbling.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapBubbledEvent: function(topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return;
    }
    return EventListener.listen(
      element,
      handlerBaseName,
      ReactEventListener.dispatchEvent.bind(null, topLevelType)
    );
  },

  /**
   * Traps a top-level event by using event capturing.
   *
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {string} handlerBaseName Event name (e.g. "click").
   * @param {object} handle Element on which to attach listener.
   * @return {object} An object with a remove function which will forcefully
   *                  remove the listener.
   * @internal
   */
  trapCapturedEvent: function(topLevelType, handlerBaseName, handle) {
    var element = handle;
    if (!element) {
      return;
    }
    return EventListener.capture(
      element,
      handlerBaseName,
      ReactEventListener.dispatchEvent.bind(null, topLevelType)
    );
  },

  monitorScrollValue: function(refresh) {
    var callback = scrollValueMonitor.bind(null, refresh);
    EventListener.listen(window, 'scroll', callback);
    EventListener.listen(window, 'resize', callback);
  },

  dispatchEvent: function(topLevelType, nativeEvent) {
    if (!ReactEventListener._enabled) {
      return;
    }

    var bookKeeping = TopLevelCallbackBookKeeping.getPooled(
      topLevelType,
      nativeEvent
    );
    try {
      // Event queue being processed in the same cycle allows
      // `preventDefault`.
      ReactUpdates.batchedUpdates(handleTopLevelImpl, bookKeeping);
    } finally {
      TopLevelCallbackBookKeeping.release(bookKeeping);
    }
  }
};

module.exports = ReactEventListener;

},{"./EventListener":29,"./ExecutionEnvironment":34,"./Object.assign":39,"./PooledClass":40,"./ReactInstanceHandles":73,"./ReactMount":76,"./ReactUpdates":92,"./getEventTarget":130,"./getUnboundedScrollPosition":135}],71:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInjection
 */

"use strict";

var DOMProperty = require("./DOMProperty");
var EventPluginHub = require("./EventPluginHub");
var ReactComponent = require("./ReactComponent");
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactEmptyComponent = require("./ReactEmptyComponent");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactNativeComponent = require("./ReactNativeComponent");
var ReactPerf = require("./ReactPerf");
var ReactRootIndex = require("./ReactRootIndex");
var ReactUpdates = require("./ReactUpdates");

var ReactInjection = {
  Component: ReactComponent.injection,
  CompositeComponent: ReactCompositeComponent.injection,
  DOMProperty: DOMProperty.injection,
  EmptyComponent: ReactEmptyComponent.injection,
  EventPluginHub: EventPluginHub.injection,
  EventEmitter: ReactBrowserEventEmitter.injection,
  NativeComponent: ReactNativeComponent.injection,
  Perf: ReactPerf.injection,
  RootIndex: ReactRootIndex.injection,
  Updates: ReactUpdates.injection
};

module.exports = ReactInjection;

},{"./DOMProperty":23,"./EventPluginHub":30,"./ReactBrowserEventEmitter":43,"./ReactComponent":45,"./ReactCompositeComponent":47,"./ReactEmptyComponent":67,"./ReactNativeComponent":79,"./ReactPerf":81,"./ReactRootIndex":88,"./ReactUpdates":92}],72:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInputSelection
 */

"use strict";

var ReactDOMSelection = require("./ReactDOMSelection");

var containsNode = require("./containsNode");
var focusNode = require("./focusNode");
var getActiveElement = require("./getActiveElement");

function isInDocument(node) {
  return containsNode(document.documentElement, node);
}

/**
 * @ReactInputSelection: React input selection module. Based on Selection.js,
 * but modified to be suitable for react and has a couple of bug fixes (doesn't
 * assume buttons have range selections allowed).
 * Input selection module for React.
 */
var ReactInputSelection = {

  hasSelectionCapabilities: function(elem) {
    return elem && (
      (elem.nodeName === 'INPUT' && elem.type === 'text') ||
      elem.nodeName === 'TEXTAREA' ||
      elem.contentEditable === 'true'
    );
  },

  getSelectionInformation: function() {
    var focusedElem = getActiveElement();
    return {
      focusedElem: focusedElem,
      selectionRange:
          ReactInputSelection.hasSelectionCapabilities(focusedElem) ?
          ReactInputSelection.getSelection(focusedElem) :
          null
    };
  },

  /**
   * @restoreSelection: If any selection information was potentially lost,
   * restore it. This is useful when performing operations that could remove dom
   * nodes and place them back in, resulting in focus being lost.
   */
  restoreSelection: function(priorSelectionInformation) {
    var curFocusedElem = getActiveElement();
    var priorFocusedElem = priorSelectionInformation.focusedElem;
    var priorSelectionRange = priorSelectionInformation.selectionRange;
    if (curFocusedElem !== priorFocusedElem &&
        isInDocument(priorFocusedElem)) {
      if (ReactInputSelection.hasSelectionCapabilities(priorFocusedElem)) {
        ReactInputSelection.setSelection(
          priorFocusedElem,
          priorSelectionRange
        );
      }
      focusNode(priorFocusedElem);
    }
  },

  /**
   * @getSelection: Gets the selection bounds of a focused textarea, input or
   * contentEditable node.
   * -@input: Look up selection bounds of this input
   * -@return {start: selectionStart, end: selectionEnd}
   */
  getSelection: function(input) {
    var selection;

    if ('selectionStart' in input) {
      // Modern browser with input or textarea.
      selection = {
        start: input.selectionStart,
        end: input.selectionEnd
      };
    } else if (document.selection && input.nodeName === 'INPUT') {
      // IE8 input.
      var range = document.selection.createRange();
      // There can only be one selection per document in IE, so it must
      // be in our element.
      if (range.parentElement() === input) {
        selection = {
          start: -range.moveStart('character', -input.value.length),
          end: -range.moveEnd('character', -input.value.length)
        };
      }
    } else {
      // Content editable or old IE textarea.
      selection = ReactDOMSelection.getOffsets(input);
    }

    return selection || {start: 0, end: 0};
  },

  /**
   * @setSelection: Sets the selection bounds of a textarea or input and focuses
   * the input.
   * -@input     Set selection bounds of this input or textarea
   * -@offsets   Object of same form that is returned from get*
   */
  setSelection: function(input, offsets) {
    var start = offsets.start;
    var end = offsets.end;
    if (typeof end === 'undefined') {
      end = start;
    }

    if ('selectionStart' in input) {
      input.selectionStart = start;
      input.selectionEnd = Math.min(end, input.value.length);
    } else if (document.selection && input.nodeName === 'INPUT') {
      var range = input.createTextRange();
      range.collapse(true);
      range.moveStart('character', start);
      range.moveEnd('character', end - start);
      range.select();
    } else {
      ReactDOMSelection.setOffsets(input, offsets);
    }
  }
};

module.exports = ReactInputSelection;

},{"./ReactDOMSelection":59,"./containsNode":114,"./focusNode":124,"./getActiveElement":126}],73:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactInstanceHandles
 * @typechecks static-only
 */

"use strict";

var ReactRootIndex = require("./ReactRootIndex");

var invariant = require("./invariant");

var SEPARATOR = '.';
var SEPARATOR_LENGTH = SEPARATOR.length;

/**
 * Maximum depth of traversals before we consider the possibility of a bad ID.
 */
var MAX_TREE_DEPTH = 100;

/**
 * Creates a DOM ID prefix to use when mounting React components.
 *
 * @param {number} index A unique integer
 * @return {string} React root ID.
 * @internal
 */
function getReactRootIDString(index) {
  return SEPARATOR + index.toString(36);
}

/**
 * Checks if a character in the supplied ID is a separator or the end.
 *
 * @param {string} id A React DOM ID.
 * @param {number} index Index of the character to check.
 * @return {boolean} True if the character is a separator or end of the ID.
 * @private
 */
function isBoundary(id, index) {
  return id.charAt(index) === SEPARATOR || index === id.length;
}

/**
 * Checks if the supplied string is a valid React DOM ID.
 *
 * @param {string} id A React DOM ID, maybe.
 * @return {boolean} True if the string is a valid React DOM ID.
 * @private
 */
function isValidID(id) {
  return id === '' || (
    id.charAt(0) === SEPARATOR && id.charAt(id.length - 1) !== SEPARATOR
  );
}

/**
 * Checks if the first ID is an ancestor of or equal to the second ID.
 *
 * @param {string} ancestorID
 * @param {string} descendantID
 * @return {boolean} True if `ancestorID` is an ancestor of `descendantID`.
 * @internal
 */
function isAncestorIDOf(ancestorID, descendantID) {
  return (
    descendantID.indexOf(ancestorID) === 0 &&
    isBoundary(descendantID, ancestorID.length)
  );
}

/**
 * Gets the parent ID of the supplied React DOM ID, `id`.
 *
 * @param {string} id ID of a component.
 * @return {string} ID of the parent, or an empty string.
 * @private
 */
function getParentID(id) {
  return id ? id.substr(0, id.lastIndexOf(SEPARATOR)) : '';
}

/**
 * Gets the next DOM ID on the tree path from the supplied `ancestorID` to the
 * supplied `destinationID`. If they are equal, the ID is returned.
 *
 * @param {string} ancestorID ID of an ancestor node of `destinationID`.
 * @param {string} destinationID ID of the destination node.
 * @return {string} Next ID on the path from `ancestorID` to `destinationID`.
 * @private
 */
function getNextDescendantID(ancestorID, destinationID) {
  ("production" !== process.env.NODE_ENV ? invariant(
    isValidID(ancestorID) && isValidID(destinationID),
    'getNextDescendantID(%s, %s): Received an invalid React DOM ID.',
    ancestorID,
    destinationID
  ) : invariant(isValidID(ancestorID) && isValidID(destinationID)));
  ("production" !== process.env.NODE_ENV ? invariant(
    isAncestorIDOf(ancestorID, destinationID),
    'getNextDescendantID(...): React has made an invalid assumption about ' +
    'the DOM hierarchy. Expected `%s` to be an ancestor of `%s`.',
    ancestorID,
    destinationID
  ) : invariant(isAncestorIDOf(ancestorID, destinationID)));
  if (ancestorID === destinationID) {
    return ancestorID;
  }
  // Skip over the ancestor and the immediate separator. Traverse until we hit
  // another separator or we reach the end of `destinationID`.
  var start = ancestorID.length + SEPARATOR_LENGTH;
  for (var i = start; i < destinationID.length; i++) {
    if (isBoundary(destinationID, i)) {
      break;
    }
  }
  return destinationID.substr(0, i);
}

/**
 * Gets the nearest common ancestor ID of two IDs.
 *
 * Using this ID scheme, the nearest common ancestor ID is the longest common
 * prefix of the two IDs that immediately preceded a "marker" in both strings.
 *
 * @param {string} oneID
 * @param {string} twoID
 * @return {string} Nearest common ancestor ID, or the empty string if none.
 * @private
 */
function getFirstCommonAncestorID(oneID, twoID) {
  var minLength = Math.min(oneID.length, twoID.length);
  if (minLength === 0) {
    return '';
  }
  var lastCommonMarkerIndex = 0;
  // Use `<=` to traverse until the "EOL" of the shorter string.
  for (var i = 0; i <= minLength; i++) {
    if (isBoundary(oneID, i) && isBoundary(twoID, i)) {
      lastCommonMarkerIndex = i;
    } else if (oneID.charAt(i) !== twoID.charAt(i)) {
      break;
    }
  }
  var longestCommonID = oneID.substr(0, lastCommonMarkerIndex);
  ("production" !== process.env.NODE_ENV ? invariant(
    isValidID(longestCommonID),
    'getFirstCommonAncestorID(%s, %s): Expected a valid React DOM ID: %s',
    oneID,
    twoID,
    longestCommonID
  ) : invariant(isValidID(longestCommonID)));
  return longestCommonID;
}

/**
 * Traverses the parent path between two IDs (either up or down). The IDs must
 * not be the same, and there must exist a parent path between them. If the
 * callback returns `false`, traversal is stopped.
 *
 * @param {?string} start ID at which to start traversal.
 * @param {?string} stop ID at which to end traversal.
 * @param {function} cb Callback to invoke each ID with.
 * @param {?boolean} skipFirst Whether or not to skip the first node.
 * @param {?boolean} skipLast Whether or not to skip the last node.
 * @private
 */
function traverseParentPath(start, stop, cb, arg, skipFirst, skipLast) {
  start = start || '';
  stop = stop || '';
  ("production" !== process.env.NODE_ENV ? invariant(
    start !== stop,
    'traverseParentPath(...): Cannot traverse from and to the same ID, `%s`.',
    start
  ) : invariant(start !== stop));
  var traverseUp = isAncestorIDOf(stop, start);
  ("production" !== process.env.NODE_ENV ? invariant(
    traverseUp || isAncestorIDOf(start, stop),
    'traverseParentPath(%s, %s, ...): Cannot traverse from two IDs that do ' +
    'not have a parent path.',
    start,
    stop
  ) : invariant(traverseUp || isAncestorIDOf(start, stop)));
  // Traverse from `start` to `stop` one depth at a time.
  var depth = 0;
  var traverse = traverseUp ? getParentID : getNextDescendantID;
  for (var id = start; /* until break */; id = traverse(id, stop)) {
    var ret;
    if ((!skipFirst || id !== start) && (!skipLast || id !== stop)) {
      ret = cb(id, traverseUp, arg);
    }
    if (ret === false || id === stop) {
      // Only break //after// visiting `stop`.
      break;
    }
    ("production" !== process.env.NODE_ENV ? invariant(
      depth++ < MAX_TREE_DEPTH,
      'traverseParentPath(%s, %s, ...): Detected an infinite loop while ' +
      'traversing the React DOM ID tree. This may be due to malformed IDs: %s',
      start, stop
    ) : invariant(depth++ < MAX_TREE_DEPTH));
  }
}

/**
 * Manages the IDs assigned to DOM representations of React components. This
 * uses a specific scheme in order to traverse the DOM efficiently (e.g. in
 * order to simulate events).
 *
 * @internal
 */
var ReactInstanceHandles = {

  /**
   * Constructs a React root ID
   * @return {string} A React root ID.
   */
  createReactRootID: function() {
    return getReactRootIDString(ReactRootIndex.createReactRootIndex());
  },

  /**
   * Constructs a React ID by joining a root ID with a name.
   *
   * @param {string} rootID Root ID of a parent component.
   * @param {string} name A component's name (as flattened children).
   * @return {string} A React ID.
   * @internal
   */
  createReactID: function(rootID, name) {
    return rootID + name;
  },

  /**
   * Gets the DOM ID of the React component that is the root of the tree that
   * contains the React component with the supplied DOM ID.
   *
   * @param {string} id DOM ID of a React component.
   * @return {?string} DOM ID of the React component that is the root.
   * @internal
   */
  getReactRootIDFromNodeID: function(id) {
    if (id && id.charAt(0) === SEPARATOR && id.length > 1) {
      var index = id.indexOf(SEPARATOR, 1);
      return index > -1 ? id.substr(0, index) : id;
    }
    return null;
  },

  /**
   * Traverses the ID hierarchy and invokes the supplied `cb` on any IDs that
   * should would receive a `mouseEnter` or `mouseLeave` event.
   *
   * NOTE: Does not invoke the callback on the nearest common ancestor because
   * nothing "entered" or "left" that element.
   *
   * @param {string} leaveID ID being left.
   * @param {string} enterID ID being entered.
   * @param {function} cb Callback to invoke on each entered/left ID.
   * @param {*} upArg Argument to invoke the callback with on left IDs.
   * @param {*} downArg Argument to invoke the callback with on entered IDs.
   * @internal
   */
  traverseEnterLeave: function(leaveID, enterID, cb, upArg, downArg) {
    var ancestorID = getFirstCommonAncestorID(leaveID, enterID);
    if (ancestorID !== leaveID) {
      traverseParentPath(leaveID, ancestorID, cb, upArg, false, true);
    }
    if (ancestorID !== enterID) {
      traverseParentPath(ancestorID, enterID, cb, downArg, true, false);
    }
  },

  /**
   * Simulates the traversal of a two-phase, capture/bubble event dispatch.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseTwoPhase: function(targetID, cb, arg) {
    if (targetID) {
      traverseParentPath('', targetID, cb, arg, true, false);
      traverseParentPath(targetID, '', cb, arg, false, true);
    }
  },

  /**
   * Traverse a node ID, calling the supplied `cb` for each ancestor ID. For
   * example, passing `.0.$row-0.1` would result in `cb` getting called
   * with `.0`, `.0.$row-0`, and `.0.$row-0.1`.
   *
   * NOTE: This traversal happens on IDs without touching the DOM.
   *
   * @param {string} targetID ID of the target node.
   * @param {function} cb Callback to invoke.
   * @param {*} arg Argument to invoke the callback with.
   * @internal
   */
  traverseAncestors: function(targetID, cb, arg) {
    traverseParentPath('', targetID, cb, arg, true, false);
  },

  /**
   * Exposed for unit testing.
   * @private
   */
  _getFirstCommonAncestorID: getFirstCommonAncestorID,

  /**
   * Exposed for unit testing.
   * @private
   */
  _getNextDescendantID: getNextDescendantID,

  isAncestorIDOf: isAncestorIDOf,

  SEPARATOR: SEPARATOR

};

module.exports = ReactInstanceHandles;

},{"./ReactRootIndex":88,"./invariant":139}],74:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactLegacyElement
 */

"use strict";

var ReactCurrentOwner = require("./ReactCurrentOwner");

var invariant = require("./invariant");
var monitorCodeUse = require("./monitorCodeUse");
var warning = require("./warning");

var legacyFactoryLogs = {};
function warnForLegacyFactoryCall() {
  if (!ReactLegacyElementFactory._isLegacyCallWarningEnabled) {
    return;
  }
  var owner = ReactCurrentOwner.current;
  var name = owner && owner.constructor ? owner.constructor.displayName : '';
  if (!name) {
    name = 'Something';
  }
  if (legacyFactoryLogs.hasOwnProperty(name)) {
    return;
  }
  legacyFactoryLogs[name] = true;
  ("production" !== process.env.NODE_ENV ? warning(
    false,
    name + ' is calling a React component directly. ' +
    'Use a factory or JSX instead. See: http://fb.me/react-legacyfactory'
  ) : null);
  monitorCodeUse('react_legacy_factory_call', { version: 3, name: name });
}

function warnForPlainFunctionType(type) {
  var isReactClass =
    type.prototype &&
    typeof type.prototype.mountComponent === 'function' &&
    typeof type.prototype.receiveComponent === 'function';
  if (isReactClass) {
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'Did not expect to get a React class here. Use `Component` instead ' +
      'of `Component.type` or `this.constructor`.'
    ) : null);
  } else {
    if (!type._reactWarnedForThisType) {
      try {
        type._reactWarnedForThisType = true;
      } catch (x) {
        // just incase this is a frozen object or some special object
      }
      monitorCodeUse(
        'react_non_component_in_jsx',
        { version: 3, name: type.name }
      );
    }
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'This JSX uses a plain function. Only React components are ' +
      'valid in React\'s JSX transform.'
    ) : null);
  }
}

function warnForNonLegacyFactory(type) {
  ("production" !== process.env.NODE_ENV ? warning(
    false,
    'Do not pass React.DOM.' + type.type + ' to JSX or createFactory. ' +
    'Use the string "' + type.type + '" instead.'
  ) : null);
}

/**
 * Transfer static properties from the source to the target. Functions are
 * rebound to have this reflect the original source.
 */
function proxyStaticMethods(target, source) {
  if (typeof source !== 'function') {
    return;
  }
  for (var key in source) {
    if (source.hasOwnProperty(key)) {
      var value = source[key];
      if (typeof value === 'function') {
        var bound = value.bind(source);
        // Copy any properties defined on the function, such as `isRequired` on
        // a PropTypes validator.
        for (var k in value) {
          if (value.hasOwnProperty(k)) {
            bound[k] = value[k];
          }
        }
        target[key] = bound;
      } else {
        target[key] = value;
      }
    }
  }
}

// We use an object instead of a boolean because booleans are ignored by our
// mocking libraries when these factories gets mocked.
var LEGACY_MARKER = {};
var NON_LEGACY_MARKER = {};

var ReactLegacyElementFactory = {};

ReactLegacyElementFactory.wrapCreateFactory = function(createFactory) {
  var legacyCreateFactory = function(type) {
    if (typeof type !== 'function') {
      // Non-function types cannot be legacy factories
      return createFactory(type);
    }

    if (type.isReactNonLegacyFactory) {
      // This is probably a factory created by ReactDOM we unwrap it to get to
      // the underlying string type. It shouldn't have been passed here so we
      // warn.
      if ("production" !== process.env.NODE_ENV) {
        warnForNonLegacyFactory(type);
      }
      return createFactory(type.type);
    }

    if (type.isReactLegacyFactory) {
      // This is probably a legacy factory created by ReactCompositeComponent.
      // We unwrap it to get to the underlying class.
      return createFactory(type.type);
    }

    if ("production" !== process.env.NODE_ENV) {
      warnForPlainFunctionType(type);
    }

    // Unless it's a legacy factory, then this is probably a plain function,
    // that is expecting to be invoked by JSX. We can just return it as is.
    return type;
  };
  return legacyCreateFactory;
};

ReactLegacyElementFactory.wrapCreateElement = function(createElement) {
  var legacyCreateElement = function(type, props, children) {
    if (typeof type !== 'function') {
      // Non-function types cannot be legacy factories
      return createElement.apply(this, arguments);
    }

    var args;

    if (type.isReactNonLegacyFactory) {
      // This is probably a factory created by ReactDOM we unwrap it to get to
      // the underlying string type. It shouldn't have been passed here so we
      // warn.
      if ("production" !== process.env.NODE_ENV) {
        warnForNonLegacyFactory(type);
      }
      args = Array.prototype.slice.call(arguments, 0);
      args[0] = type.type;
      return createElement.apply(this, args);
    }

    if (type.isReactLegacyFactory) {
      // This is probably a legacy factory created by ReactCompositeComponent.
      // We unwrap it to get to the underlying class.
      if (type._isMockFunction) {
        // If this is a mock function, people will expect it to be called. We
        // will actually call the original mock factory function instead. This
        // future proofs unit testing that assume that these are classes.
        type.type._mockedReactClassConstructor = type;
      }
      args = Array.prototype.slice.call(arguments, 0);
      args[0] = type.type;
      return createElement.apply(this, args);
    }

    if ("production" !== process.env.NODE_ENV) {
      warnForPlainFunctionType(type);
    }

    // This is being called with a plain function we should invoke it
    // immediately as if this was used with legacy JSX.
    return type.apply(null, Array.prototype.slice.call(arguments, 1));
  };
  return legacyCreateElement;
};

ReactLegacyElementFactory.wrapFactory = function(factory) {
  ("production" !== process.env.NODE_ENV ? invariant(
    typeof factory === 'function',
    'This is suppose to accept a element factory'
  ) : invariant(typeof factory === 'function'));
  var legacyElementFactory = function(config, children) {
    // This factory should not be called when JSX is used. Use JSX instead.
    if ("production" !== process.env.NODE_ENV) {
      warnForLegacyFactoryCall();
    }
    return factory.apply(this, arguments);
  };
  proxyStaticMethods(legacyElementFactory, factory.type);
  legacyElementFactory.isReactLegacyFactory = LEGACY_MARKER;
  legacyElementFactory.type = factory.type;
  return legacyElementFactory;
};

// This is used to mark a factory that will remain. E.g. we're allowed to call
// it as a function. However, you're not suppose to pass it to createElement
// or createFactory, so it will warn you if you do.
ReactLegacyElementFactory.markNonLegacyFactory = function(factory) {
  factory.isReactNonLegacyFactory = NON_LEGACY_MARKER;
  return factory;
};

// Checks if a factory function is actually a legacy factory pretending to
// be a class.
ReactLegacyElementFactory.isValidFactory = function(factory) {
  // TODO: This will be removed and moved into a class validator or something.
  return typeof factory === 'function' &&
    factory.isReactLegacyFactory === LEGACY_MARKER;
};

ReactLegacyElementFactory.isValidClass = function(factory) {
  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      false,
      'isValidClass is deprecated and will be removed in a future release. ' +
      'Use a more specific validator instead.'
    ) : null);
  }
  return ReactLegacyElementFactory.isValidFactory(factory);
};

ReactLegacyElementFactory._isLegacyCallWarningEnabled = true;

module.exports = ReactLegacyElementFactory;

},{"./ReactCurrentOwner":49,"./invariant":139,"./monitorCodeUse":149,"./warning":158}],75:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMarkupChecksum
 */

"use strict";

var adler32 = require("./adler32");

var ReactMarkupChecksum = {
  CHECKSUM_ATTR_NAME: 'data-react-checksum',

  /**
   * @param {string} markup Markup string
   * @return {string} Markup string with checksum attribute attached
   */
  addChecksumToMarkup: function(markup) {
    var checksum = adler32(markup);
    return markup.replace(
      '>',
      ' ' + ReactMarkupChecksum.CHECKSUM_ATTR_NAME + '="' + checksum + '">'
    );
  },

  /**
   * @param {string} markup to use
   * @param {DOMElement} element root React element
   * @returns {boolean} whether or not the markup is the same
   */
  canReuseMarkup: function(markup, element) {
    var existingChecksum = element.getAttribute(
      ReactMarkupChecksum.CHECKSUM_ATTR_NAME
    );
    existingChecksum = existingChecksum && parseInt(existingChecksum, 10);
    var markupChecksum = adler32(markup);
    return markupChecksum === existingChecksum;
  }
};

module.exports = ReactMarkupChecksum;

},{"./adler32":111}],76:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMount
 */

"use strict";

var DOMProperty = require("./DOMProperty");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactElement = require("./ReactElement");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactPerf = require("./ReactPerf");

var containsNode = require("./containsNode");
var deprecated = require("./deprecated");
var getReactRootElementInContainer = require("./getReactRootElementInContainer");
var instantiateReactComponent = require("./instantiateReactComponent");
var invariant = require("./invariant");
var shouldUpdateReactComponent = require("./shouldUpdateReactComponent");
var warning = require("./warning");

var createElement = ReactLegacyElement.wrapCreateElement(
  ReactElement.createElement
);

var SEPARATOR = ReactInstanceHandles.SEPARATOR;

var ATTR_NAME = DOMProperty.ID_ATTRIBUTE_NAME;
var nodeCache = {};

var ELEMENT_NODE_TYPE = 1;
var DOC_NODE_TYPE = 9;

/** Mapping from reactRootID to React component instance. */
var instancesByReactRootID = {};

/** Mapping from reactRootID to `container` nodes. */
var containersByReactRootID = {};

if ("production" !== process.env.NODE_ENV) {
  /** __DEV__-only mapping from reactRootID to root elements. */
  var rootElementsByReactRootID = {};
}

// Used to store breadth-first search state in findComponentRoot.
var findComponentRootReusableArray = [];

/**
 * @param {DOMElement} container DOM element that may contain a React component.
 * @return {?string} A "reactRoot" ID, if a React component is rendered.
 */
function getReactRootID(container) {
  var rootElement = getReactRootElementInContainer(container);
  return rootElement && ReactMount.getID(rootElement);
}

/**
 * Accessing node[ATTR_NAME] or calling getAttribute(ATTR_NAME) on a form
 * element can return its control whose name or ID equals ATTR_NAME. All
 * DOM nodes support `getAttributeNode` but this can also get called on
 * other objects so just return '' if we're given something other than a
 * DOM node (such as window).
 *
 * @param {?DOMElement|DOMWindow|DOMDocument|DOMTextNode} node DOM node.
 * @return {string} ID of the supplied `domNode`.
 */
function getID(node) {
  var id = internalGetID(node);
  if (id) {
    if (nodeCache.hasOwnProperty(id)) {
      var cached = nodeCache[id];
      if (cached !== node) {
        ("production" !== process.env.NODE_ENV ? invariant(
          !isValid(cached, id),
          'ReactMount: Two valid but unequal nodes with the same `%s`: %s',
          ATTR_NAME, id
        ) : invariant(!isValid(cached, id)));

        nodeCache[id] = node;
      }
    } else {
      nodeCache[id] = node;
    }
  }

  return id;
}

function internalGetID(node) {
  // If node is something like a window, document, or text node, none of
  // which support attributes or a .getAttribute method, gracefully return
  // the empty string, as if the attribute were missing.
  return node && node.getAttribute && node.getAttribute(ATTR_NAME) || '';
}

/**
 * Sets the React-specific ID of the given node.
 *
 * @param {DOMElement} node The DOM node whose ID will be set.
 * @param {string} id The value of the ID attribute.
 */
function setID(node, id) {
  var oldID = internalGetID(node);
  if (oldID !== id) {
    delete nodeCache[oldID];
  }
  node.setAttribute(ATTR_NAME, id);
  nodeCache[id] = node;
}

/**
 * Finds the node with the supplied React-generated DOM ID.
 *
 * @param {string} id A React-generated DOM ID.
 * @return {DOMElement} DOM node with the suppled `id`.
 * @internal
 */
function getNode(id) {
  if (!nodeCache.hasOwnProperty(id) || !isValid(nodeCache[id], id)) {
    nodeCache[id] = ReactMount.findReactNodeByID(id);
  }
  return nodeCache[id];
}

/**
 * A node is "valid" if it is contained by a currently mounted container.
 *
 * This means that the node does not have to be contained by a document in
 * order to be considered valid.
 *
 * @param {?DOMElement} node The candidate DOM node.
 * @param {string} id The expected ID of the node.
 * @return {boolean} Whether the node is contained by a mounted container.
 */
function isValid(node, id) {
  if (node) {
    ("production" !== process.env.NODE_ENV ? invariant(
      internalGetID(node) === id,
      'ReactMount: Unexpected modification of `%s`',
      ATTR_NAME
    ) : invariant(internalGetID(node) === id));

    var container = ReactMount.findReactContainerForID(id);
    if (container && containsNode(container, node)) {
      return true;
    }
  }

  return false;
}

/**
 * Causes the cache to forget about one React-specific ID.
 *
 * @param {string} id The ID to forget.
 */
function purgeID(id) {
  delete nodeCache[id];
}

var deepestNodeSoFar = null;
function findDeepestCachedAncestorImpl(ancestorID) {
  var ancestor = nodeCache[ancestorID];
  if (ancestor && isValid(ancestor, ancestorID)) {
    deepestNodeSoFar = ancestor;
  } else {
    // This node isn't populated in the cache, so presumably none of its
    // descendants are. Break out of the loop.
    return false;
  }
}

/**
 * Return the deepest cached node whose ID is a prefix of `targetID`.
 */
function findDeepestCachedAncestor(targetID) {
  deepestNodeSoFar = null;
  ReactInstanceHandles.traverseAncestors(
    targetID,
    findDeepestCachedAncestorImpl
  );

  var foundNode = deepestNodeSoFar;
  deepestNodeSoFar = null;
  return foundNode;
}

/**
 * Mounting is the process of initializing a React component by creatings its
 * representative DOM elements and inserting them into a supplied `container`.
 * Any prior content inside `container` is destroyed in the process.
 *
 *   ReactMount.render(
 *     component,
 *     document.getElementById('container')
 *   );
 *
 *   <div id="container">                   <-- Supplied `container`.
 *     <div data-reactid=".3">              <-- Rendered reactRoot of React
 *       // ...                                 component.
 *     </div>
 *   </div>
 *
 * Inside of `container`, the first element rendered is the "reactRoot".
 */
var ReactMount = {
  /** Exposed for debugging purposes **/
  _instancesByReactRootID: instancesByReactRootID,

  /**
   * This is a hook provided to support rendering React components while
   * ensuring that the apparent scroll position of its `container` does not
   * change.
   *
   * @param {DOMElement} container The `container` being rendered into.
   * @param {function} renderCallback This must be called once to do the render.
   */
  scrollMonitor: function(container, renderCallback) {
    renderCallback();
  },

  /**
   * Take a component that's already mounted into the DOM and replace its props
   * @param {ReactComponent} prevComponent component instance already in the DOM
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @param {?function} callback function triggered on completion
   */
  _updateRootComponent: function(
      prevComponent,
      nextComponent,
      container,
      callback) {
    var nextProps = nextComponent.props;
    ReactMount.scrollMonitor(container, function() {
      prevComponent.replaceProps(nextProps, callback);
    });

    if ("production" !== process.env.NODE_ENV) {
      // Record the root element in case it later gets transplanted.
      rootElementsByReactRootID[getReactRootID(container)] =
        getReactRootElementInContainer(container);
    }

    return prevComponent;
  },

  /**
   * Register a component into the instance map and starts scroll value
   * monitoring
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @return {string} reactRoot ID prefix
   */
  _registerComponent: function(nextComponent, container) {
    ("production" !== process.env.NODE_ENV ? invariant(
      container && (
        container.nodeType === ELEMENT_NODE_TYPE ||
        container.nodeType === DOC_NODE_TYPE
      ),
      '_registerComponent(...): Target container is not a DOM element.'
    ) : invariant(container && (
      container.nodeType === ELEMENT_NODE_TYPE ||
      container.nodeType === DOC_NODE_TYPE
    )));

    ReactBrowserEventEmitter.ensureScrollValueMonitoring();

    var reactRootID = ReactMount.registerContainer(container);
    instancesByReactRootID[reactRootID] = nextComponent;
    return reactRootID;
  },

  /**
   * Render a new component into the DOM.
   * @param {ReactComponent} nextComponent component instance to render
   * @param {DOMElement} container container to render into
   * @param {boolean} shouldReuseMarkup if we should skip the markup insertion
   * @return {ReactComponent} nextComponent
   */
  _renderNewRootComponent: ReactPerf.measure(
    'ReactMount',
    '_renderNewRootComponent',
    function(
        nextComponent,
        container,
        shouldReuseMarkup) {
      // Various parts of our code (such as ReactCompositeComponent's
      // _renderValidatedComponent) assume that calls to render aren't nested;
      // verify that that's the case.
      ("production" !== process.env.NODE_ENV ? warning(
        ReactCurrentOwner.current == null,
        '_renderNewRootComponent(): Render methods should be a pure function ' +
        'of props and state; triggering nested component updates from ' +
        'render is not allowed. If necessary, trigger nested updates in ' +
        'componentDidUpdate.'
      ) : null);

      var componentInstance = instantiateReactComponent(nextComponent, null);
      var reactRootID = ReactMount._registerComponent(
        componentInstance,
        container
      );
      componentInstance.mountComponentIntoNode(
        reactRootID,
        container,
        shouldReuseMarkup
      );

      if ("production" !== process.env.NODE_ENV) {
        // Record the root element in case it later gets transplanted.
        rootElementsByReactRootID[reactRootID] =
          getReactRootElementInContainer(container);
      }

      return componentInstance;
    }
  ),

  /**
   * Renders a React component into the DOM in the supplied `container`.
   *
   * If the React component was previously rendered into `container`, this will
   * perform an update on it and only mutate the DOM as necessary to reflect the
   * latest React component.
   *
   * @param {ReactElement} nextElement Component element to render.
   * @param {DOMElement} container DOM element to render into.
   * @param {?function} callback function triggered on completion
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  render: function(nextElement, container, callback) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReactElement.isValidElement(nextElement),
      'renderComponent(): Invalid component element.%s',
      (
        typeof nextElement === 'string' ?
          ' Instead of passing an element string, make sure to instantiate ' +
          'it by passing it to React.createElement.' :
        ReactLegacyElement.isValidFactory(nextElement) ?
          ' Instead of passing a component class, make sure to instantiate ' +
          'it by passing it to React.createElement.' :
        // Check if it quacks like a element
        typeof nextElement.props !== "undefined" ?
          ' This may be caused by unintentionally loading two independent ' +
          'copies of React.' :
          ''
      )
    ) : invariant(ReactElement.isValidElement(nextElement)));

    var prevComponent = instancesByReactRootID[getReactRootID(container)];

    if (prevComponent) {
      var prevElement = prevComponent._currentElement;
      if (shouldUpdateReactComponent(prevElement, nextElement)) {
        return ReactMount._updateRootComponent(
          prevComponent,
          nextElement,
          container,
          callback
        );
      } else {
        ReactMount.unmountComponentAtNode(container);
      }
    }

    var reactRootElement = getReactRootElementInContainer(container);
    var containerHasReactMarkup =
      reactRootElement && ReactMount.isRenderedByReact(reactRootElement);

    var shouldReuseMarkup = containerHasReactMarkup && !prevComponent;

    var component = ReactMount._renderNewRootComponent(
      nextElement,
      container,
      shouldReuseMarkup
    );
    callback && callback.call(component);
    return component;
  },

  /**
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into the supplied `container`.
   *
   * @param {function} constructor React component constructor.
   * @param {?object} props Initial props of the component instance.
   * @param {DOMElement} container DOM element to render into.
   * @return {ReactComponent} Component instance rendered in `container`.
   */
  constructAndRenderComponent: function(constructor, props, container) {
    var element = createElement(constructor, props);
    return ReactMount.render(element, container);
  },

  /**
   * Constructs a component instance of `constructor` with `initialProps` and
   * renders it into a container node identified by supplied `id`.
   *
   * @param {function} componentConstructor React component constructor
   * @param {?object} props Initial props of the component instance.
   * @param {string} id ID of the DOM element to render into.
   * @return {ReactComponent} Component instance rendered in the container node.
   */
  constructAndRenderComponentByID: function(constructor, props, id) {
    var domNode = document.getElementById(id);
    ("production" !== process.env.NODE_ENV ? invariant(
      domNode,
      'Tried to get element with id of "%s" but it is not present on the page.',
      id
    ) : invariant(domNode));
    return ReactMount.constructAndRenderComponent(constructor, props, domNode);
  },

  /**
   * Registers a container node into which React components will be rendered.
   * This also creates the "reactRoot" ID that will be assigned to the element
   * rendered within.
   *
   * @param {DOMElement} container DOM element to register as a container.
   * @return {string} The "reactRoot" ID of elements rendered within.
   */
  registerContainer: function(container) {
    var reactRootID = getReactRootID(container);
    if (reactRootID) {
      // If one exists, make sure it is a valid "reactRoot" ID.
      reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(reactRootID);
    }
    if (!reactRootID) {
      // No valid "reactRoot" ID found, create one.
      reactRootID = ReactInstanceHandles.createReactRootID();
    }
    containersByReactRootID[reactRootID] = container;
    return reactRootID;
  },

  /**
   * Unmounts and destroys the React component rendered in the `container`.
   *
   * @param {DOMElement} container DOM element containing a React component.
   * @return {boolean} True if a component was found in and unmounted from
   *                   `container`
   */
  unmountComponentAtNode: function(container) {
    // Various parts of our code (such as ReactCompositeComponent's
    // _renderValidatedComponent) assume that calls to render aren't nested;
    // verify that that's the case. (Strictly speaking, unmounting won't cause a
    // render but we still don't expect to be in a render call here.)
    ("production" !== process.env.NODE_ENV ? warning(
      ReactCurrentOwner.current == null,
      'unmountComponentAtNode(): Render methods should be a pure function of ' +
      'props and state; triggering nested component updates from render is ' +
      'not allowed. If necessary, trigger nested updates in ' +
      'componentDidUpdate.'
    ) : null);

    var reactRootID = getReactRootID(container);
    var component = instancesByReactRootID[reactRootID];
    if (!component) {
      return false;
    }
    ReactMount.unmountComponentFromNode(component, container);
    delete instancesByReactRootID[reactRootID];
    delete containersByReactRootID[reactRootID];
    if ("production" !== process.env.NODE_ENV) {
      delete rootElementsByReactRootID[reactRootID];
    }
    return true;
  },

  /**
   * Unmounts a component and removes it from the DOM.
   *
   * @param {ReactComponent} instance React component instance.
   * @param {DOMElement} container DOM element to unmount from.
   * @final
   * @internal
   * @see {ReactMount.unmountComponentAtNode}
   */
  unmountComponentFromNode: function(instance, container) {
    instance.unmountComponent();

    if (container.nodeType === DOC_NODE_TYPE) {
      container = container.documentElement;
    }

    // http://jsperf.com/emptying-a-node
    while (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  },

  /**
   * Finds the container DOM element that contains React component to which the
   * supplied DOM `id` belongs.
   *
   * @param {string} id The ID of an element rendered by a React component.
   * @return {?DOMElement} DOM element that contains the `id`.
   */
  findReactContainerForID: function(id) {
    var reactRootID = ReactInstanceHandles.getReactRootIDFromNodeID(id);
    var container = containersByReactRootID[reactRootID];

    if ("production" !== process.env.NODE_ENV) {
      var rootElement = rootElementsByReactRootID[reactRootID];
      if (rootElement && rootElement.parentNode !== container) {
        ("production" !== process.env.NODE_ENV ? invariant(
          // Call internalGetID here because getID calls isValid which calls
          // findReactContainerForID (this function).
          internalGetID(rootElement) === reactRootID,
          'ReactMount: Root element ID differed from reactRootID.'
        ) : invariant(// Call internalGetID here because getID calls isValid which calls
        // findReactContainerForID (this function).
        internalGetID(rootElement) === reactRootID));

        var containerChild = container.firstChild;
        if (containerChild &&
            reactRootID === internalGetID(containerChild)) {
          // If the container has a new child with the same ID as the old
          // root element, then rootElementsByReactRootID[reactRootID] is
          // just stale and needs to be updated. The case that deserves a
          // warning is when the container is empty.
          rootElementsByReactRootID[reactRootID] = containerChild;
        } else {
          console.warn(
            'ReactMount: Root element has been removed from its original ' +
            'container. New container:', rootElement.parentNode
          );
        }
      }
    }

    return container;
  },

  /**
   * Finds an element rendered by React with the supplied ID.
   *
   * @param {string} id ID of a DOM node in the React component.
   * @return {DOMElement} Root DOM node of the React component.
   */
  findReactNodeByID: function(id) {
    var reactRoot = ReactMount.findReactContainerForID(id);
    return ReactMount.findComponentRoot(reactRoot, id);
  },

  /**
   * True if the supplied `node` is rendered by React.
   *
   * @param {*} node DOM Element to check.
   * @return {boolean} True if the DOM Element appears to be rendered by React.
   * @internal
   */
  isRenderedByReact: function(node) {
    if (node.nodeType !== 1) {
      // Not a DOMElement, therefore not a React component
      return false;
    }
    var id = ReactMount.getID(node);
    return id ? id.charAt(0) === SEPARATOR : false;
  },

  /**
   * Traverses up the ancestors of the supplied node to find a node that is a
   * DOM representation of a React component.
   *
   * @param {*} node
   * @return {?DOMEventTarget}
   * @internal
   */
  getFirstReactDOM: function(node) {
    var current = node;
    while (current && current.parentNode !== current) {
      if (ReactMount.isRenderedByReact(current)) {
        return current;
      }
      current = current.parentNode;
    }
    return null;
  },

  /**
   * Finds a node with the supplied `targetID` inside of the supplied
   * `ancestorNode`.  Exploits the ID naming scheme to perform the search
   * quickly.
   *
   * @param {DOMEventTarget} ancestorNode Search from this root.
   * @pararm {string} targetID ID of the DOM representation of the component.
   * @return {DOMEventTarget} DOM node with the supplied `targetID`.
   * @internal
   */
  findComponentRoot: function(ancestorNode, targetID) {
    var firstChildren = findComponentRootReusableArray;
    var childIndex = 0;

    var deepestAncestor = findDeepestCachedAncestor(targetID) || ancestorNode;

    firstChildren[0] = deepestAncestor.firstChild;
    firstChildren.length = 1;

    while (childIndex < firstChildren.length) {
      var child = firstChildren[childIndex++];
      var targetChild;

      while (child) {
        var childID = ReactMount.getID(child);
        if (childID) {
          // Even if we find the node we're looking for, we finish looping
          // through its siblings to ensure they're cached so that we don't have
          // to revisit this node again. Otherwise, we make n^2 calls to getID
          // when visiting the many children of a single node in order.

          if (targetID === childID) {
            targetChild = child;
          } else if (ReactInstanceHandles.isAncestorIDOf(childID, targetID)) {
            // If we find a child whose ID is an ancestor of the given ID,
            // then we can be sure that we only want to search the subtree
            // rooted at this child, so we can throw out the rest of the
            // search state.
            firstChildren.length = childIndex = 0;
            firstChildren.push(child.firstChild);
          }

        } else {
          // If this child had no ID, then there's a chance that it was
          // injected automatically by the browser, as when a `<table>`
          // element sprouts an extra `<tbody>` child as a side effect of
          // `.innerHTML` parsing. Optimistically continue down this
          // branch, but not before examining the other siblings.
          firstChildren.push(child.firstChild);
        }

        child = child.nextSibling;
      }

      if (targetChild) {
        // Emptying firstChildren/findComponentRootReusableArray is
        // not necessary for correctness, but it helps the GC reclaim
        // any nodes that were left at the end of the search.
        firstChildren.length = 0;

        return targetChild;
      }
    }

    firstChildren.length = 0;

    ("production" !== process.env.NODE_ENV ? invariant(
      false,
      'findComponentRoot(..., %s): Unable to find element. This probably ' +
      'means the DOM was unexpectedly mutated (e.g., by the browser), ' +
      'usually due to forgetting a <tbody> when using tables, nesting tags ' +
      'like <form>, <p>, or <a>, or using non-SVG elements in an <svg> ' +
      'parent. ' +
      'Try inspecting the child nodes of the element with React ID `%s`.',
      targetID,
      ReactMount.getID(ancestorNode)
    ) : invariant(false));
  },


  /**
   * React ID utilities.
   */

  getReactRootID: getReactRootID,

  getID: getID,

  setID: setID,

  getNode: getNode,

  purgeID: purgeID
};

// Deprecations (remove for 0.13)
ReactMount.renderComponent = deprecated(
  'ReactMount',
  'renderComponent',
  'render',
  this,
  ReactMount.render
);

module.exports = ReactMount;

},{"./DOMProperty":23,"./ReactBrowserEventEmitter":43,"./ReactCurrentOwner":49,"./ReactElement":65,"./ReactInstanceHandles":73,"./ReactLegacyElement":74,"./ReactPerf":81,"./containsNode":114,"./deprecated":119,"./getReactRootElementInContainer":133,"./instantiateReactComponent":138,"./invariant":139,"./shouldUpdateReactComponent":155,"./warning":158}],77:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChild
 * @typechecks static-only
 */

"use strict";

var ReactComponent = require("./ReactComponent");
var ReactMultiChildUpdateTypes = require("./ReactMultiChildUpdateTypes");

var flattenChildren = require("./flattenChildren");
var instantiateReactComponent = require("./instantiateReactComponent");
var shouldUpdateReactComponent = require("./shouldUpdateReactComponent");

/**
 * Updating children of a component may trigger recursive updates. The depth is
 * used to batch recursive updates to render markup more efficiently.
 *
 * @type {number}
 * @private
 */
var updateDepth = 0;

/**
 * Queue of update configuration objects.
 *
 * Each object has a `type` property that is in `ReactMultiChildUpdateTypes`.
 *
 * @type {array<object>}
 * @private
 */
var updateQueue = [];

/**
 * Queue of markup to be rendered.
 *
 * @type {array<string>}
 * @private
 */
var markupQueue = [];

/**
 * Enqueues markup to be rendered and inserted at a supplied index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} markup Markup that renders into an element.
 * @param {number} toIndex Destination index.
 * @private
 */
function enqueueMarkup(parentID, markup, toIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.INSERT_MARKUP,
    markupIndex: markupQueue.push(markup) - 1,
    textContent: null,
    fromIndex: null,
    toIndex: toIndex
  });
}

/**
 * Enqueues moving an existing element to another index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Source index of the existing element.
 * @param {number} toIndex Destination index of the element.
 * @private
 */
function enqueueMove(parentID, fromIndex, toIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.MOVE_EXISTING,
    markupIndex: null,
    textContent: null,
    fromIndex: fromIndex,
    toIndex: toIndex
  });
}

/**
 * Enqueues removing an element at an index.
 *
 * @param {string} parentID ID of the parent component.
 * @param {number} fromIndex Index of the element to remove.
 * @private
 */
function enqueueRemove(parentID, fromIndex) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.REMOVE_NODE,
    markupIndex: null,
    textContent: null,
    fromIndex: fromIndex,
    toIndex: null
  });
}

/**
 * Enqueues setting the text content.
 *
 * @param {string} parentID ID of the parent component.
 * @param {string} textContent Text content to set.
 * @private
 */
function enqueueTextContent(parentID, textContent) {
  // NOTE: Null values reduce hidden classes.
  updateQueue.push({
    parentID: parentID,
    parentNode: null,
    type: ReactMultiChildUpdateTypes.TEXT_CONTENT,
    markupIndex: null,
    textContent: textContent,
    fromIndex: null,
    toIndex: null
  });
}

/**
 * Processes any enqueued updates.
 *
 * @private
 */
function processQueue() {
  if (updateQueue.length) {
    ReactComponent.BackendIDOperations.dangerouslyProcessChildrenUpdates(
      updateQueue,
      markupQueue
    );
    clearQueue();
  }
}

/**
 * Clears any enqueued updates.
 *
 * @private
 */
function clearQueue() {
  updateQueue.length = 0;
  markupQueue.length = 0;
}

/**
 * ReactMultiChild are capable of reconciling multiple children.
 *
 * @class ReactMultiChild
 * @internal
 */
var ReactMultiChild = {

  /**
   * Provides common functionality for components that must reconcile multiple
   * children. This is used by `ReactDOMComponent` to mount, update, and
   * unmount child components.
   *
   * @lends {ReactMultiChild.prototype}
   */
  Mixin: {

    /**
     * Generates a "mount image" for each of the supplied children. In the case
     * of `ReactDOMComponent`, a mount image is a string of markup.
     *
     * @param {?object} nestedChildren Nested child maps.
     * @return {array} An array of mounted representations.
     * @internal
     */
    mountChildren: function(nestedChildren, transaction) {
      var children = flattenChildren(nestedChildren);
      var mountImages = [];
      var index = 0;
      this._renderedChildren = children;
      for (var name in children) {
        var child = children[name];
        if (children.hasOwnProperty(name)) {
          // The rendered children must be turned into instances as they're
          // mounted.
          var childInstance = instantiateReactComponent(child, null);
          children[name] = childInstance;
          // Inlined for performance, see `ReactInstanceHandles.createReactID`.
          var rootID = this._rootNodeID + name;
          var mountImage = childInstance.mountComponent(
            rootID,
            transaction,
            this._mountDepth + 1
          );
          childInstance._mountIndex = index;
          mountImages.push(mountImage);
          index++;
        }
      }
      return mountImages;
    },

    /**
     * Replaces any rendered children with a text content string.
     *
     * @param {string} nextContent String of content.
     * @internal
     */
    updateTextContent: function(nextContent) {
      updateDepth++;
      var errorThrown = true;
      try {
        var prevChildren = this._renderedChildren;
        // Remove any rendered children.
        for (var name in prevChildren) {
          if (prevChildren.hasOwnProperty(name)) {
            this._unmountChildByName(prevChildren[name], name);
          }
        }
        // Set new text content.
        this.setTextContent(nextContent);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          errorThrown ? clearQueue() : processQueue();
        }
      }
    },

    /**
     * Updates the rendered children with new children.
     *
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @internal
     */
    updateChildren: function(nextNestedChildren, transaction) {
      updateDepth++;
      var errorThrown = true;
      try {
        this._updateChildren(nextNestedChildren, transaction);
        errorThrown = false;
      } finally {
        updateDepth--;
        if (!updateDepth) {
          errorThrown ? clearQueue() : processQueue();
        }
      }
    },

    /**
     * Improve performance by isolating this hot code path from the try/catch
     * block in `updateChildren`.
     *
     * @param {?object} nextNestedChildren Nested child maps.
     * @param {ReactReconcileTransaction} transaction
     * @final
     * @protected
     */
    _updateChildren: function(nextNestedChildren, transaction) {
      var nextChildren = flattenChildren(nextNestedChildren);
      var prevChildren = this._renderedChildren;
      if (!nextChildren && !prevChildren) {
        return;
      }
      var name;
      // `nextIndex` will increment for each child in `nextChildren`, but
      // `lastIndex` will be the last index visited in `prevChildren`.
      var lastIndex = 0;
      var nextIndex = 0;
      for (name in nextChildren) {
        if (!nextChildren.hasOwnProperty(name)) {
          continue;
        }
        var prevChild = prevChildren && prevChildren[name];
        var prevElement = prevChild && prevChild._currentElement;
        var nextElement = nextChildren[name];
        if (shouldUpdateReactComponent(prevElement, nextElement)) {
          this.moveChild(prevChild, nextIndex, lastIndex);
          lastIndex = Math.max(prevChild._mountIndex, lastIndex);
          prevChild.receiveComponent(nextElement, transaction);
          prevChild._mountIndex = nextIndex;
        } else {
          if (prevChild) {
            // Update `lastIndex` before `_mountIndex` gets unset by unmounting.
            lastIndex = Math.max(prevChild._mountIndex, lastIndex);
            this._unmountChildByName(prevChild, name);
          }
          // The child must be instantiated before it's mounted.
          var nextChildInstance = instantiateReactComponent(
            nextElement,
            null
          );
          this._mountChildByNameAtIndex(
            nextChildInstance, name, nextIndex, transaction
          );
        }
        nextIndex++;
      }
      // Remove children that are no longer present.
      for (name in prevChildren) {
        if (prevChildren.hasOwnProperty(name) &&
            !(nextChildren && nextChildren[name])) {
          this._unmountChildByName(prevChildren[name], name);
        }
      }
    },

    /**
     * Unmounts all rendered children. This should be used to clean up children
     * when this component is unmounted.
     *
     * @internal
     */
    unmountChildren: function() {
      var renderedChildren = this._renderedChildren;
      for (var name in renderedChildren) {
        var renderedChild = renderedChildren[name];
        // TODO: When is this not true?
        if (renderedChild.unmountComponent) {
          renderedChild.unmountComponent();
        }
      }
      this._renderedChildren = null;
    },

    /**
     * Moves a child component to the supplied index.
     *
     * @param {ReactComponent} child Component to move.
     * @param {number} toIndex Destination index of the element.
     * @param {number} lastIndex Last index visited of the siblings of `child`.
     * @protected
     */
    moveChild: function(child, toIndex, lastIndex) {
      // If the index of `child` is less than `lastIndex`, then it needs to
      // be moved. Otherwise, we do not need to move it because a child will be
      // inserted or moved before `child`.
      if (child._mountIndex < lastIndex) {
        enqueueMove(this._rootNodeID, child._mountIndex, toIndex);
      }
    },

    /**
     * Creates a child component.
     *
     * @param {ReactComponent} child Component to create.
     * @param {string} mountImage Markup to insert.
     * @protected
     */
    createChild: function(child, mountImage) {
      enqueueMarkup(this._rootNodeID, mountImage, child._mountIndex);
    },

    /**
     * Removes a child component.
     *
     * @param {ReactComponent} child Child to remove.
     * @protected
     */
    removeChild: function(child) {
      enqueueRemove(this._rootNodeID, child._mountIndex);
    },

    /**
     * Sets this text content string.
     *
     * @param {string} textContent Text content to set.
     * @protected
     */
    setTextContent: function(textContent) {
      enqueueTextContent(this._rootNodeID, textContent);
    },

    /**
     * Mounts a child with the supplied name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to mount.
     * @param {string} name Name of the child.
     * @param {number} index Index at which to insert the child.
     * @param {ReactReconcileTransaction} transaction
     * @private
     */
    _mountChildByNameAtIndex: function(child, name, index, transaction) {
      // Inlined for performance, see `ReactInstanceHandles.createReactID`.
      var rootID = this._rootNodeID + name;
      var mountImage = child.mountComponent(
        rootID,
        transaction,
        this._mountDepth + 1
      );
      child._mountIndex = index;
      this.createChild(child, mountImage);
      this._renderedChildren = this._renderedChildren || {};
      this._renderedChildren[name] = child;
    },

    /**
     * Unmounts a rendered child by name.
     *
     * NOTE: This is part of `updateChildren` and is here for readability.
     *
     * @param {ReactComponent} child Component to unmount.
     * @param {string} name Name of the child in `this._renderedChildren`.
     * @private
     */
    _unmountChildByName: function(child, name) {
      this.removeChild(child);
      child._mountIndex = null;
      child.unmountComponent();
      delete this._renderedChildren[name];
    }

  }

};

module.exports = ReactMultiChild;

},{"./ReactComponent":45,"./ReactMultiChildUpdateTypes":78,"./flattenChildren":123,"./instantiateReactComponent":138,"./shouldUpdateReactComponent":155}],78:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactMultiChildUpdateTypes
 */

"use strict";

var keyMirror = require("./keyMirror");

/**
 * When a component's children are updated, a series of update configuration
 * objects are created in order to batch and serialize the required changes.
 *
 * Enumerates all the possible types of update configurations.
 *
 * @internal
 */
var ReactMultiChildUpdateTypes = keyMirror({
  INSERT_MARKUP: null,
  MOVE_EXISTING: null,
  REMOVE_NODE: null,
  TEXT_CONTENT: null
});

module.exports = ReactMultiChildUpdateTypes;

},{"./keyMirror":145}],79:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactNativeComponent
 */

"use strict";

var assign = require("./Object.assign");
var invariant = require("./invariant");

var genericComponentClass = null;
// This registry keeps track of wrapper classes around native tags
var tagToComponentClass = {};

var ReactNativeComponentInjection = {
  // This accepts a class that receives the tag string. This is a catch all
  // that can render any kind of tag.
  injectGenericComponentClass: function(componentClass) {
    genericComponentClass = componentClass;
  },
  // This accepts a keyed object with classes as values. Each key represents a
  // tag. That particular tag will use this class instead of the generic one.
  injectComponentClasses: function(componentClasses) {
    assign(tagToComponentClass, componentClasses);
  }
};

/**
 * Create an internal class for a specific tag.
 *
 * @param {string} tag The tag for which to create an internal instance.
 * @param {any} props The props passed to the instance constructor.
 * @return {ReactComponent} component The injected empty component.
 */
function createInstanceForTag(tag, props, parentType) {
  var componentClass = tagToComponentClass[tag];
  if (componentClass == null) {
    ("production" !== process.env.NODE_ENV ? invariant(
      genericComponentClass,
      'There is no registered component for the tag %s',
      tag
    ) : invariant(genericComponentClass));
    return new genericComponentClass(tag, props);
  }
  if (parentType === tag) {
    // Avoid recursion
    ("production" !== process.env.NODE_ENV ? invariant(
      genericComponentClass,
      'There is no registered component for the tag %s',
      tag
    ) : invariant(genericComponentClass));
    return new genericComponentClass(tag, props);
  }
  // Unwrap legacy factories
  return new componentClass.type(props);
}

var ReactNativeComponent = {
  createInstanceForTag: createInstanceForTag,
  injection: ReactNativeComponentInjection,
};

module.exports = ReactNativeComponent;

},{"./Object.assign":39,"./invariant":139}],80:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactOwner
 */

"use strict";

var emptyObject = require("./emptyObject");
var invariant = require("./invariant");

/**
 * ReactOwners are capable of storing references to owned components.
 *
 * All components are capable of //being// referenced by owner components, but
 * only ReactOwner components are capable of //referencing// owned components.
 * The named reference is known as a "ref".
 *
 * Refs are available when mounted and updated during reconciliation.
 *
 *   var MyComponent = React.createClass({
 *     render: function() {
 *       return (
 *         <div onClick={this.handleClick}>
 *           <CustomComponent ref="custom" />
 *         </div>
 *       );
 *     },
 *     handleClick: function() {
 *       this.refs.custom.handleClick();
 *     },
 *     componentDidMount: function() {
 *       this.refs.custom.initialize();
 *     }
 *   });
 *
 * Refs should rarely be used. When refs are used, they should only be done to
 * control data that is not handled by React's data flow.
 *
 * @class ReactOwner
 */
var ReactOwner = {

  /**
   * @param {?object} object
   * @return {boolean} True if `object` is a valid owner.
   * @final
   */
  isValidOwner: function(object) {
    return !!(
      object &&
      typeof object.attachRef === 'function' &&
      typeof object.detachRef === 'function'
    );
  },

  /**
   * Adds a component by ref to an owner component.
   *
   * @param {ReactComponent} component Component to reference.
   * @param {string} ref Name by which to refer to the component.
   * @param {ReactOwner} owner Component on which to record the ref.
   * @final
   * @internal
   */
  addComponentAsRefTo: function(component, ref, owner) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReactOwner.isValidOwner(owner),
      'addComponentAsRefTo(...): Only a ReactOwner can have refs. This ' +
      'usually means that you\'re trying to add a ref to a component that ' +
      'doesn\'t have an owner (that is, was not created inside of another ' +
      'component\'s `render` method). Try rendering this component inside of ' +
      'a new top-level component which will hold the ref.'
    ) : invariant(ReactOwner.isValidOwner(owner)));
    owner.attachRef(ref, component);
  },

  /**
   * Removes a component by ref from an owner component.
   *
   * @param {ReactComponent} component Component to dereference.
   * @param {string} ref Name of the ref to remove.
   * @param {ReactOwner} owner Component on which the ref is recorded.
   * @final
   * @internal
   */
  removeComponentAsRefFrom: function(component, ref, owner) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReactOwner.isValidOwner(owner),
      'removeComponentAsRefFrom(...): Only a ReactOwner can have refs. This ' +
      'usually means that you\'re trying to remove a ref to a component that ' +
      'doesn\'t have an owner (that is, was not created inside of another ' +
      'component\'s `render` method). Try rendering this component inside of ' +
      'a new top-level component which will hold the ref.'
    ) : invariant(ReactOwner.isValidOwner(owner)));
    // Check that `component` is still the current ref because we do not want to
    // detach the ref if another component stole it.
    if (owner.refs[ref] === component) {
      owner.detachRef(ref);
    }
  },

  /**
   * A ReactComponent must mix this in to have refs.
   *
   * @lends {ReactOwner.prototype}
   */
  Mixin: {

    construct: function() {
      this.refs = emptyObject;
    },

    /**
     * Lazily allocates the refs object and stores `component` as `ref`.
     *
     * @param {string} ref Reference name.
     * @param {component} component Component to store as `ref`.
     * @final
     * @private
     */
    attachRef: function(ref, component) {
      ("production" !== process.env.NODE_ENV ? invariant(
        component.isOwnedBy(this),
        'attachRef(%s, ...): Only a component\'s owner can store a ref to it.',
        ref
      ) : invariant(component.isOwnedBy(this)));
      var refs = this.refs === emptyObject ? (this.refs = {}) : this.refs;
      refs[ref] = component;
    },

    /**
     * Detaches a reference name.
     *
     * @param {string} ref Name to dereference.
     * @final
     * @private
     */
    detachRef: function(ref) {
      delete this.refs[ref];
    }

  }

};

module.exports = ReactOwner;

},{"./emptyObject":121,"./invariant":139}],81:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPerf
 * @typechecks static-only
 */

"use strict";

/**
 * ReactPerf is a general AOP system designed to measure performance. This
 * module only has the hooks: see ReactDefaultPerf for the analysis tool.
 */
var ReactPerf = {
  /**
   * Boolean to enable/disable measurement. Set to false by default to prevent
   * accidental logging and perf loss.
   */
  enableMeasure: false,

  /**
   * Holds onto the measure function in use. By default, don't measure
   * anything, but we'll override this if we inject a measure function.
   */
  storedMeasure: _noMeasure,

  /**
   * Use this to wrap methods you want to measure. Zero overhead in production.
   *
   * @param {string} objName
   * @param {string} fnName
   * @param {function} func
   * @return {function}
   */
  measure: function(objName, fnName, func) {
    if ("production" !== process.env.NODE_ENV) {
      var measuredFunc = null;
      var wrapper = function() {
        if (ReactPerf.enableMeasure) {
          if (!measuredFunc) {
            measuredFunc = ReactPerf.storedMeasure(objName, fnName, func);
          }
          return measuredFunc.apply(this, arguments);
        }
        return func.apply(this, arguments);
      };
      wrapper.displayName = objName + '_' + fnName;
      return wrapper;
    }
    return func;
  },

  injection: {
    /**
     * @param {function} measure
     */
    injectMeasure: function(measure) {
      ReactPerf.storedMeasure = measure;
    }
  }
};

/**
 * Simply passes through the measured function, without measuring it.
 *
 * @param {string} objName
 * @param {string} fnName
 * @param {function} func
 * @return {function}
 */
function _noMeasure(objName, fnName, func) {
  return func;
}

module.exports = ReactPerf;

},{}],82:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTransferer
 */

"use strict";

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");
var invariant = require("./invariant");
var joinClasses = require("./joinClasses");
var warning = require("./warning");

var didWarn = false;

/**
 * Creates a transfer strategy that will merge prop values using the supplied
 * `mergeStrategy`. If a prop was previously unset, this just sets it.
 *
 * @param {function} mergeStrategy
 * @return {function}
 */
function createTransferStrategy(mergeStrategy) {
  return function(props, key, value) {
    if (!props.hasOwnProperty(key)) {
      props[key] = value;
    } else {
      props[key] = mergeStrategy(props[key], value);
    }
  };
}

var transferStrategyMerge = createTransferStrategy(function(a, b) {
  // `merge` overrides the first object's (`props[key]` above) keys using the
  // second object's (`value`) keys. An object's style's existing `propA` would
  // get overridden. Flip the order here.
  return assign({}, b, a);
});

/**
 * Transfer strategies dictate how props are transferred by `transferPropsTo`.
 * NOTE: if you add any more exceptions to this list you should be sure to
 * update `cloneWithProps()` accordingly.
 */
var TransferStrategies = {
  /**
   * Never transfer `children`.
   */
  children: emptyFunction,
  /**
   * Transfer the `className` prop by merging them.
   */
  className: createTransferStrategy(joinClasses),
  /**
   * Transfer the `style` prop (which is an object) by merging them.
   */
  style: transferStrategyMerge
};

/**
 * Mutates the first argument by transferring the properties from the second
 * argument.
 *
 * @param {object} props
 * @param {object} newProps
 * @return {object}
 */
function transferInto(props, newProps) {
  for (var thisKey in newProps) {
    if (!newProps.hasOwnProperty(thisKey)) {
      continue;
    }

    var transferStrategy = TransferStrategies[thisKey];

    if (transferStrategy && TransferStrategies.hasOwnProperty(thisKey)) {
      transferStrategy(props, thisKey, newProps[thisKey]);
    } else if (!props.hasOwnProperty(thisKey)) {
      props[thisKey] = newProps[thisKey];
    }
  }
  return props;
}

/**
 * ReactPropTransferer are capable of transferring props to another component
 * using a `transferPropsTo` method.
 *
 * @class ReactPropTransferer
 */
var ReactPropTransferer = {

  TransferStrategies: TransferStrategies,

  /**
   * Merge two props objects using TransferStrategies.
   *
   * @param {object} oldProps original props (they take precedence)
   * @param {object} newProps new props to merge in
   * @return {object} a new object containing both sets of props merged.
   */
  mergeProps: function(oldProps, newProps) {
    return transferInto(assign({}, oldProps), newProps);
  },

  /**
   * @lends {ReactPropTransferer.prototype}
   */
  Mixin: {

    /**
     * Transfer props from this component to a target component.
     *
     * Props that do not have an explicit transfer strategy will be transferred
     * only if the target component does not already have the prop set.
     *
     * This is usually used to pass down props to a returned root component.
     *
     * @param {ReactElement} element Component receiving the properties.
     * @return {ReactElement} The supplied `component`.
     * @final
     * @protected
     */
    transferPropsTo: function(element) {
      ("production" !== process.env.NODE_ENV ? invariant(
        element._owner === this,
        '%s: You can\'t call transferPropsTo() on a component that you ' +
        'don\'t own, %s. This usually means you are calling ' +
        'transferPropsTo() on a component passed in as props or children.',
        this.constructor.displayName,
        typeof element.type === 'string' ?
        element.type :
        element.type.displayName
      ) : invariant(element._owner === this));

      if ("production" !== process.env.NODE_ENV) {
        if (!didWarn) {
          didWarn = true;
          ("production" !== process.env.NODE_ENV ? warning(
            false,
            'transferPropsTo is deprecated. ' +
            'See http://fb.me/react-transferpropsto for more information.'
          ) : null);
        }
      }

      // Because elements are immutable we have to merge into the existing
      // props object rather than clone it.
      transferInto(element.props, this.props);

      return element;
    }

  }
};

module.exports = ReactPropTransferer;

},{"./Object.assign":39,"./emptyFunction":120,"./invariant":139,"./joinClasses":144,"./warning":158}],83:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocationNames
 */

"use strict";

var ReactPropTypeLocationNames = {};

if ("production" !== process.env.NODE_ENV) {
  ReactPropTypeLocationNames = {
    prop: 'prop',
    context: 'context',
    childContext: 'child context'
  };
}

module.exports = ReactPropTypeLocationNames;

},{}],84:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypeLocations
 */

"use strict";

var keyMirror = require("./keyMirror");

var ReactPropTypeLocations = keyMirror({
  prop: null,
  context: null,
  childContext: null
});

module.exports = ReactPropTypeLocations;

},{"./keyMirror":145}],85:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPropTypes
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactPropTypeLocationNames = require("./ReactPropTypeLocationNames");

var deprecated = require("./deprecated");
var emptyFunction = require("./emptyFunction");

/**
 * Collection of methods that allow declaration and validation of props that are
 * supplied to React components. Example usage:
 *
 *   var Props = require('ReactPropTypes');
 *   var MyArticle = React.createClass({
 *     propTypes: {
 *       // An optional string prop named "description".
 *       description: Props.string,
 *
 *       // A required enum prop named "category".
 *       category: Props.oneOf(['News','Photos']).isRequired,
 *
 *       // A prop named "dialog" that requires an instance of Dialog.
 *       dialog: Props.instanceOf(Dialog).isRequired
 *     },
 *     render: function() { ... }
 *   });
 *
 * A more formal specification of how these methods are used:
 *
 *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
 *   decl := ReactPropTypes.{type}(.isRequired)?
 *
 * Each and every declaration produces a function with the same signature. This
 * allows the creation of custom validation functions. For example:
 *
 *  var MyLink = React.createClass({
 *    propTypes: {
 *      // An optional string or URI prop named "href".
 *      href: function(props, propName, componentName) {
 *        var propValue = props[propName];
 *        if (propValue != null && typeof propValue !== 'string' &&
 *            !(propValue instanceof URI)) {
 *          return new Error(
 *            'Expected a string or an URI for ' + propName + ' in ' +
 *            componentName
 *          );
 *        }
 *      }
 *    },
 *    render: function() {...}
 *  });
 *
 * @internal
 */

var ANONYMOUS = '<<anonymous>>';

var elementTypeChecker = createElementTypeChecker();
var nodeTypeChecker = createNodeChecker();

var ReactPropTypes = {
  array: createPrimitiveTypeChecker('array'),
  bool: createPrimitiveTypeChecker('boolean'),
  func: createPrimitiveTypeChecker('function'),
  number: createPrimitiveTypeChecker('number'),
  object: createPrimitiveTypeChecker('object'),
  string: createPrimitiveTypeChecker('string'),

  any: createAnyTypeChecker(),
  arrayOf: createArrayOfTypeChecker,
  element: elementTypeChecker,
  instanceOf: createInstanceTypeChecker,
  node: nodeTypeChecker,
  objectOf: createObjectOfTypeChecker,
  oneOf: createEnumTypeChecker,
  oneOfType: createUnionTypeChecker,
  shape: createShapeTypeChecker,

  component: deprecated(
    'React.PropTypes',
    'component',
    'element',
    this,
    elementTypeChecker
  ),
  renderable: deprecated(
    'React.PropTypes',
    'renderable',
    'node',
    this,
    nodeTypeChecker
  )
};

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location) {
    componentName = componentName || ANONYMOUS;
    if (props[propName] == null) {
      var locationName = ReactPropTypeLocationNames[location];
      if (isRequired) {
        return new Error(
          ("Required " + locationName + " `" + propName + "` was not specified in ")+
          ("`" + componentName + "`.")
        );
      }
    } else {
      return validate(props, propName, componentName, location);
    }
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}

function createPrimitiveTypeChecker(expectedType) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== expectedType) {
      var locationName = ReactPropTypeLocationNames[location];
      // `propValue` being instance of, say, date/regexp, pass the 'object'
      // check, but we can offer a more precise error message here rather than
      // 'of type `object`'.
      var preciseType = getPreciseType(propValue);

      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type `" + preciseType + "` ") +
        ("supplied to `" + componentName + "`, expected `" + expectedType + "`.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createAnyTypeChecker() {
  return createChainableTypeChecker(emptyFunction.thatReturns());
}

function createArrayOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    if (!Array.isArray(propValue)) {
      var locationName = ReactPropTypeLocationNames[location];
      var propType = getPropType(propValue);
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type ") +
        ("`" + propType + "` supplied to `" + componentName + "`, expected an array.")
      );
    }
    for (var i = 0; i < propValue.length; i++) {
      var error = typeChecker(propValue, i, componentName, location);
      if (error instanceof Error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createElementTypeChecker() {
  function validate(props, propName, componentName, location) {
    if (!ReactElement.isValidElement(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
        ("`" + componentName + "`, expected a ReactElement.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createInstanceTypeChecker(expectedClass) {
  function validate(props, propName, componentName, location) {
    if (!(props[propName] instanceof expectedClass)) {
      var locationName = ReactPropTypeLocationNames[location];
      var expectedClassName = expectedClass.name || ANONYMOUS;
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
        ("`" + componentName + "`, expected instance of `" + expectedClassName + "`.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createEnumTypeChecker(expectedValues) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    for (var i = 0; i < expectedValues.length; i++) {
      if (propValue === expectedValues[i]) {
        return;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    var valuesString = JSON.stringify(expectedValues);
    return new Error(
      ("Invalid " + locationName + " `" + propName + "` of value `" + propValue + "` ") +
      ("supplied to `" + componentName + "`, expected one of " + valuesString + ".")
    );
  }
  return createChainableTypeChecker(validate);
}

function createObjectOfTypeChecker(typeChecker) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type ") +
        ("`" + propType + "` supplied to `" + componentName + "`, expected an object.")
      );
    }
    for (var key in propValue) {
      if (propValue.hasOwnProperty(key)) {
        var error = typeChecker(propValue, key, componentName, location);
        if (error instanceof Error) {
          return error;
        }
      }
    }
  }
  return createChainableTypeChecker(validate);
}

function createUnionTypeChecker(arrayOfTypeCheckers) {
  function validate(props, propName, componentName, location) {
    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (checker(props, propName, componentName, location) == null) {
        return;
      }
    }

    var locationName = ReactPropTypeLocationNames[location];
    return new Error(
      ("Invalid " + locationName + " `" + propName + "` supplied to ") +
      ("`" + componentName + "`.")
    );
  }
  return createChainableTypeChecker(validate);
}

function createNodeChecker() {
  function validate(props, propName, componentName, location) {
    if (!isNode(props[propName])) {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` supplied to ") +
        ("`" + componentName + "`, expected a ReactNode.")
      );
    }
  }
  return createChainableTypeChecker(validate);
}

function createShapeTypeChecker(shapeTypes) {
  function validate(props, propName, componentName, location) {
    var propValue = props[propName];
    var propType = getPropType(propValue);
    if (propType !== 'object') {
      var locationName = ReactPropTypeLocationNames[location];
      return new Error(
        ("Invalid " + locationName + " `" + propName + "` of type `" + propType + "` ") +
        ("supplied to `" + componentName + "`, expected `object`.")
      );
    }
    for (var key in shapeTypes) {
      var checker = shapeTypes[key];
      if (!checker) {
        continue;
      }
      var error = checker(propValue, key, componentName, location);
      if (error) {
        return error;
      }
    }
  }
  return createChainableTypeChecker(validate, 'expected `object`');
}

function isNode(propValue) {
  switch(typeof propValue) {
    case 'number':
    case 'string':
      return true;
    case 'boolean':
      return !propValue;
    case 'object':
      if (Array.isArray(propValue)) {
        return propValue.every(isNode);
      }
      if (ReactElement.isValidElement(propValue)) {
        return true;
      }
      for (var k in propValue) {
        if (!isNode(propValue[k])) {
          return false;
        }
      }
      return true;
    default:
      return false;
  }
}

// Equivalent of `typeof` but with special handling for array and regexp.
function getPropType(propValue) {
  var propType = typeof propValue;
  if (Array.isArray(propValue)) {
    return 'array';
  }
  if (propValue instanceof RegExp) {
    // Old webkits (at least until Android 4.0) return 'function' rather than
    // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
    // passes PropTypes.object.
    return 'object';
  }
  return propType;
}

// This handles more types than `getPropType`. Only used for error messages.
// See `createPrimitiveTypeChecker`.
function getPreciseType(propValue) {
  var propType = getPropType(propValue);
  if (propType === 'object') {
    if (propValue instanceof Date) {
      return 'date';
    } else if (propValue instanceof RegExp) {
      return 'regexp';
    }
  }
  return propType;
}

module.exports = ReactPropTypes;

},{"./ReactElement":65,"./ReactPropTypeLocationNames":83,"./deprecated":119,"./emptyFunction":120}],86:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactPutListenerQueue
 */

"use strict";

var PooledClass = require("./PooledClass");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");

var assign = require("./Object.assign");

function ReactPutListenerQueue() {
  this.listenersToPut = [];
}

assign(ReactPutListenerQueue.prototype, {
  enqueuePutListener: function(rootNodeID, propKey, propValue) {
    this.listenersToPut.push({
      rootNodeID: rootNodeID,
      propKey: propKey,
      propValue: propValue
    });
  },

  putListeners: function() {
    for (var i = 0; i < this.listenersToPut.length; i++) {
      var listenerToPut = this.listenersToPut[i];
      ReactBrowserEventEmitter.putListener(
        listenerToPut.rootNodeID,
        listenerToPut.propKey,
        listenerToPut.propValue
      );
    }
  },

  reset: function() {
    this.listenersToPut.length = 0;
  },

  destructor: function() {
    this.reset();
  }
});

PooledClass.addPoolingTo(ReactPutListenerQueue);

module.exports = ReactPutListenerQueue;

},{"./Object.assign":39,"./PooledClass":40,"./ReactBrowserEventEmitter":43}],87:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactReconcileTransaction
 * @typechecks static-only
 */

"use strict";

var CallbackQueue = require("./CallbackQueue");
var PooledClass = require("./PooledClass");
var ReactBrowserEventEmitter = require("./ReactBrowserEventEmitter");
var ReactInputSelection = require("./ReactInputSelection");
var ReactPutListenerQueue = require("./ReactPutListenerQueue");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");

/**
 * Ensures that, when possible, the selection range (currently selected text
 * input) is not disturbed by performing the transaction.
 */
var SELECTION_RESTORATION = {
  /**
   * @return {Selection} Selection information.
   */
  initialize: ReactInputSelection.getSelectionInformation,
  /**
   * @param {Selection} sel Selection information returned from `initialize`.
   */
  close: ReactInputSelection.restoreSelection
};

/**
 * Suppresses events (blur/focus) that could be inadvertently dispatched due to
 * high level DOM manipulations (like temporarily removing a text input from the
 * DOM).
 */
var EVENT_SUPPRESSION = {
  /**
   * @return {boolean} The enabled status of `ReactBrowserEventEmitter` before
   * the reconciliation.
   */
  initialize: function() {
    var currentlyEnabled = ReactBrowserEventEmitter.isEnabled();
    ReactBrowserEventEmitter.setEnabled(false);
    return currentlyEnabled;
  },

  /**
   * @param {boolean} previouslyEnabled Enabled status of
   *   `ReactBrowserEventEmitter` before the reconciliation occured. `close`
   *   restores the previous value.
   */
  close: function(previouslyEnabled) {
    ReactBrowserEventEmitter.setEnabled(previouslyEnabled);
  }
};

/**
 * Provides a queue for collecting `componentDidMount` and
 * `componentDidUpdate` callbacks during the the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function() {
    this.reactMountReady.reset();
  },

  /**
   * After DOM is flushed, invoke all registered `onDOMReady` callbacks.
   */
  close: function() {
    this.reactMountReady.notifyAll();
  }
};

var PUT_LISTENER_QUEUEING = {
  initialize: function() {
    this.putListenerQueue.reset();
  },

  close: function() {
    this.putListenerQueue.putListeners();
  }
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [
  PUT_LISTENER_QUEUEING,
  SELECTION_RESTORATION,
  EVENT_SUPPRESSION,
  ON_DOM_READY_QUEUEING
];

/**
 * Currently:
 * - The order that these are listed in the transaction is critical:
 * - Suppresses events.
 * - Restores selection range.
 *
 * Future:
 * - Restore document/overflow scroll positions that were unintentionally
 *   modified via DOM insertions above the top viewport boundary.
 * - Implement/integrate with customized constraint based layout system and keep
 *   track of which dimensions must be remeasured.
 *
 * @class ReactReconcileTransaction
 */
function ReactReconcileTransaction() {
  this.reinitializeTransaction();
  // Only server-side rendering really needs this option (see
  // `ReactServerRendering`), but server-side uses
  // `ReactServerRenderingTransaction` instead. This option is here so that it's
  // accessible and defaults to false when `ReactDOMComponent` and
  // `ReactTextComponent` checks it in `mountComponent`.`
  this.renderToStaticMarkup = false;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.putListenerQueue = ReactPutListenerQueue.getPooled();
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array<object>} List of operation wrap proceedures.
   *   TODO: convert to array<TransactionWrapper>
   */
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function() {
    return this.reactMountReady;
  },

  getPutListenerQueue: function() {
    return this.putListenerQueue;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */
  destructor: function() {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;

    ReactPutListenerQueue.release(this.putListenerQueue);
    this.putListenerQueue = null;
  }
};


assign(ReactReconcileTransaction.prototype, Transaction.Mixin, Mixin);

PooledClass.addPoolingTo(ReactReconcileTransaction);

module.exports = ReactReconcileTransaction;

},{"./CallbackQueue":18,"./Object.assign":39,"./PooledClass":40,"./ReactBrowserEventEmitter":43,"./ReactInputSelection":72,"./ReactPutListenerQueue":86,"./Transaction":108}],88:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactRootIndex
 * @typechecks
 */

"use strict";

var ReactRootIndexInjection = {
  /**
   * @param {function} _createReactRootIndex
   */
  injectCreateReactRootIndex: function(_createReactRootIndex) {
    ReactRootIndex.createReactRootIndex = _createReactRootIndex;
  }
};

var ReactRootIndex = {
  createReactRootIndex: null,
  injection: ReactRootIndexInjection
};

module.exports = ReactRootIndex;

},{}],89:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @typechecks static-only
 * @providesModule ReactServerRendering
 */
"use strict";

var ReactElement = require("./ReactElement");
var ReactInstanceHandles = require("./ReactInstanceHandles");
var ReactMarkupChecksum = require("./ReactMarkupChecksum");
var ReactServerRenderingTransaction =
  require("./ReactServerRenderingTransaction");

var instantiateReactComponent = require("./instantiateReactComponent");
var invariant = require("./invariant");

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup
 */
function renderToString(element) {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactElement.isValidElement(element),
    'renderToString(): You must pass a valid ReactElement.'
  ) : invariant(ReactElement.isValidElement(element)));

  var transaction;
  try {
    var id = ReactInstanceHandles.createReactRootID();
    transaction = ReactServerRenderingTransaction.getPooled(false);

    return transaction.perform(function() {
      var componentInstance = instantiateReactComponent(element, null);
      var markup = componentInstance.mountComponent(id, transaction, 0);
      return ReactMarkupChecksum.addChecksumToMarkup(markup);
    }, null);
  } finally {
    ReactServerRenderingTransaction.release(transaction);
  }
}

/**
 * @param {ReactElement} element
 * @return {string} the HTML markup, without the extra React ID and checksum
 * (for generating static pages)
 */
function renderToStaticMarkup(element) {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactElement.isValidElement(element),
    'renderToStaticMarkup(): You must pass a valid ReactElement.'
  ) : invariant(ReactElement.isValidElement(element)));

  var transaction;
  try {
    var id = ReactInstanceHandles.createReactRootID();
    transaction = ReactServerRenderingTransaction.getPooled(true);

    return transaction.perform(function() {
      var componentInstance = instantiateReactComponent(element, null);
      return componentInstance.mountComponent(id, transaction, 0);
    }, null);
  } finally {
    ReactServerRenderingTransaction.release(transaction);
  }
}

module.exports = {
  renderToString: renderToString,
  renderToStaticMarkup: renderToStaticMarkup
};

},{"./ReactElement":65,"./ReactInstanceHandles":73,"./ReactMarkupChecksum":75,"./ReactServerRenderingTransaction":90,"./instantiateReactComponent":138,"./invariant":139}],90:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactServerRenderingTransaction
 * @typechecks
 */

"use strict";

var PooledClass = require("./PooledClass");
var CallbackQueue = require("./CallbackQueue");
var ReactPutListenerQueue = require("./ReactPutListenerQueue");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");

/**
 * Provides a `CallbackQueue` queue for collecting `onDOMReady` callbacks
 * during the performing of the transaction.
 */
var ON_DOM_READY_QUEUEING = {
  /**
   * Initializes the internal `onDOMReady` queue.
   */
  initialize: function() {
    this.reactMountReady.reset();
  },

  close: emptyFunction
};

var PUT_LISTENER_QUEUEING = {
  initialize: function() {
    this.putListenerQueue.reset();
  },

  close: emptyFunction
};

/**
 * Executed within the scope of the `Transaction` instance. Consider these as
 * being member methods, but with an implied ordering while being isolated from
 * each other.
 */
var TRANSACTION_WRAPPERS = [
  PUT_LISTENER_QUEUEING,
  ON_DOM_READY_QUEUEING
];

/**
 * @class ReactServerRenderingTransaction
 * @param {boolean} renderToStaticMarkup
 */
function ReactServerRenderingTransaction(renderToStaticMarkup) {
  this.reinitializeTransaction();
  this.renderToStaticMarkup = renderToStaticMarkup;
  this.reactMountReady = CallbackQueue.getPooled(null);
  this.putListenerQueue = ReactPutListenerQueue.getPooled();
}

var Mixin = {
  /**
   * @see Transaction
   * @abstract
   * @final
   * @return {array} Empty list of operation wrap proceedures.
   */
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  /**
   * @return {object} The queue to collect `onDOMReady` callbacks with.
   */
  getReactMountReady: function() {
    return this.reactMountReady;
  },

  getPutListenerQueue: function() {
    return this.putListenerQueue;
  },

  /**
   * `PooledClass` looks for this, and will invoke this before allowing this
   * instance to be resused.
   */
  destructor: function() {
    CallbackQueue.release(this.reactMountReady);
    this.reactMountReady = null;

    ReactPutListenerQueue.release(this.putListenerQueue);
    this.putListenerQueue = null;
  }
};


assign(
  ReactServerRenderingTransaction.prototype,
  Transaction.Mixin,
  Mixin
);

PooledClass.addPoolingTo(ReactServerRenderingTransaction);

module.exports = ReactServerRenderingTransaction;

},{"./CallbackQueue":18,"./Object.assign":39,"./PooledClass":40,"./ReactPutListenerQueue":86,"./Transaction":108,"./emptyFunction":120}],91:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactTextComponent
 * @typechecks static-only
 */

"use strict";

var DOMPropertyOperations = require("./DOMPropertyOperations");
var ReactComponent = require("./ReactComponent");
var ReactElement = require("./ReactElement");

var assign = require("./Object.assign");
var escapeTextForBrowser = require("./escapeTextForBrowser");

/**
 * Text nodes violate a couple assumptions that React makes about components:
 *
 *  - When mounting text into the DOM, adjacent text nodes are merged.
 *  - Text nodes cannot be assigned a React root ID.
 *
 * This component is used to wrap strings in elements so that they can undergo
 * the same reconciliation that is applied to elements.
 *
 * TODO: Investigate representing React components in the DOM with text nodes.
 *
 * @class ReactTextComponent
 * @extends ReactComponent
 * @internal
 */
var ReactTextComponent = function(props) {
  // This constructor and it's argument is currently used by mocks.
};

assign(ReactTextComponent.prototype, ReactComponent.Mixin, {

  /**
   * Creates the markup for this text node. This node is not intended to have
   * any features besides containing text content.
   *
   * @param {string} rootID DOM ID of the root node.
   * @param {ReactReconcileTransaction|ReactServerRenderingTransaction} transaction
   * @param {number} mountDepth number of components in the owner hierarchy
   * @return {string} Markup for this text node.
   * @internal
   */
  mountComponent: function(rootID, transaction, mountDepth) {
    ReactComponent.Mixin.mountComponent.call(
      this,
      rootID,
      transaction,
      mountDepth
    );

    var escapedText = escapeTextForBrowser(this.props);

    if (transaction.renderToStaticMarkup) {
      // Normally we'd wrap this in a `span` for the reasons stated above, but
      // since this is a situation where React won't take over (static pages),
      // we can simply return the text as it is.
      return escapedText;
    }

    return (
      '<span ' + DOMPropertyOperations.createMarkupForID(rootID) + '>' +
        escapedText +
      '</span>'
    );
  },

  /**
   * Updates this component by updating the text content.
   *
   * @param {object} nextComponent Contains the next text content.
   * @param {ReactReconcileTransaction} transaction
   * @internal
   */
  receiveComponent: function(nextComponent, transaction) {
    var nextProps = nextComponent.props;
    if (nextProps !== this.props) {
      this.props = nextProps;
      ReactComponent.BackendIDOperations.updateTextContentByID(
        this._rootNodeID,
        nextProps
      );
    }
  }

});

var ReactTextComponentFactory = function(text) {
  // Bypass validation and configuration
  return new ReactElement(ReactTextComponent, null, null, null, null, text);
};

ReactTextComponentFactory.type = ReactTextComponent;

module.exports = ReactTextComponentFactory;

},{"./DOMPropertyOperations":24,"./Object.assign":39,"./ReactComponent":45,"./ReactElement":65,"./escapeTextForBrowser":122}],92:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ReactUpdates
 */

"use strict";

var CallbackQueue = require("./CallbackQueue");
var PooledClass = require("./PooledClass");
var ReactCurrentOwner = require("./ReactCurrentOwner");
var ReactPerf = require("./ReactPerf");
var Transaction = require("./Transaction");

var assign = require("./Object.assign");
var invariant = require("./invariant");
var warning = require("./warning");

var dirtyComponents = [];
var asapCallbackQueue = CallbackQueue.getPooled();
var asapEnqueued = false;

var batchingStrategy = null;

function ensureInjected() {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactUpdates.ReactReconcileTransaction && batchingStrategy,
    'ReactUpdates: must inject a reconcile transaction class and batching ' +
    'strategy'
  ) : invariant(ReactUpdates.ReactReconcileTransaction && batchingStrategy));
}

var NESTED_UPDATES = {
  initialize: function() {
    this.dirtyComponentsLength = dirtyComponents.length;
  },
  close: function() {
    if (this.dirtyComponentsLength !== dirtyComponents.length) {
      // Additional updates were enqueued by componentDidUpdate handlers or
      // similar; before our own UPDATE_QUEUEING wrapper closes, we want to run
      // these new updates so that if A's componentDidUpdate calls setState on
      // B, B will update before the callback A's updater provided when calling
      // setState.
      dirtyComponents.splice(0, this.dirtyComponentsLength);
      flushBatchedUpdates();
    } else {
      dirtyComponents.length = 0;
    }
  }
};

var UPDATE_QUEUEING = {
  initialize: function() {
    this.callbackQueue.reset();
  },
  close: function() {
    this.callbackQueue.notifyAll();
  }
};

var TRANSACTION_WRAPPERS = [NESTED_UPDATES, UPDATE_QUEUEING];

function ReactUpdatesFlushTransaction() {
  this.reinitializeTransaction();
  this.dirtyComponentsLength = null;
  this.callbackQueue = CallbackQueue.getPooled();
  this.reconcileTransaction =
    ReactUpdates.ReactReconcileTransaction.getPooled();
}

assign(
  ReactUpdatesFlushTransaction.prototype,
  Transaction.Mixin, {
  getTransactionWrappers: function() {
    return TRANSACTION_WRAPPERS;
  },

  destructor: function() {
    this.dirtyComponentsLength = null;
    CallbackQueue.release(this.callbackQueue);
    this.callbackQueue = null;
    ReactUpdates.ReactReconcileTransaction.release(this.reconcileTransaction);
    this.reconcileTransaction = null;
  },

  perform: function(method, scope, a) {
    // Essentially calls `this.reconcileTransaction.perform(method, scope, a)`
    // with this transaction's wrappers around it.
    return Transaction.Mixin.perform.call(
      this,
      this.reconcileTransaction.perform,
      this.reconcileTransaction,
      method,
      scope,
      a
    );
  }
});

PooledClass.addPoolingTo(ReactUpdatesFlushTransaction);

function batchedUpdates(callback, a, b) {
  ensureInjected();
  batchingStrategy.batchedUpdates(callback, a, b);
}

/**
 * Array comparator for ReactComponents by owner depth
 *
 * @param {ReactComponent} c1 first component you're comparing
 * @param {ReactComponent} c2 second component you're comparing
 * @return {number} Return value usable by Array.prototype.sort().
 */
function mountDepthComparator(c1, c2) {
  return c1._mountDepth - c2._mountDepth;
}

function runBatchedUpdates(transaction) {
  var len = transaction.dirtyComponentsLength;
  ("production" !== process.env.NODE_ENV ? invariant(
    len === dirtyComponents.length,
    'Expected flush transaction\'s stored dirty-components length (%s) to ' +
    'match dirty-components array length (%s).',
    len,
    dirtyComponents.length
  ) : invariant(len === dirtyComponents.length));

  // Since reconciling a component higher in the owner hierarchy usually (not
  // always -- see shouldComponentUpdate()) will reconcile children, reconcile
  // them before their children by sorting the array.
  dirtyComponents.sort(mountDepthComparator);

  for (var i = 0; i < len; i++) {
    // If a component is unmounted before pending changes apply, ignore them
    // TODO: Queue unmounts in the same list to avoid this happening at all
    var component = dirtyComponents[i];
    if (component.isMounted()) {
      // If performUpdateIfNecessary happens to enqueue any new updates, we
      // shouldn't execute the callbacks until the next render happens, so
      // stash the callbacks first
      var callbacks = component._pendingCallbacks;
      component._pendingCallbacks = null;
      component.performUpdateIfNecessary(transaction.reconcileTransaction);

      if (callbacks) {
        for (var j = 0; j < callbacks.length; j++) {
          transaction.callbackQueue.enqueue(
            callbacks[j],
            component
          );
        }
      }
    }
  }
}

var flushBatchedUpdates = ReactPerf.measure(
  'ReactUpdates',
  'flushBatchedUpdates',
  function() {
    // ReactUpdatesFlushTransaction's wrappers will clear the dirtyComponents
    // array and perform any updates enqueued by mount-ready handlers (i.e.,
    // componentDidUpdate) but we need to check here too in order to catch
    // updates enqueued by setState callbacks and asap calls.
    while (dirtyComponents.length || asapEnqueued) {
      if (dirtyComponents.length) {
        var transaction = ReactUpdatesFlushTransaction.getPooled();
        transaction.perform(runBatchedUpdates, null, transaction);
        ReactUpdatesFlushTransaction.release(transaction);
      }

      if (asapEnqueued) {
        asapEnqueued = false;
        var queue = asapCallbackQueue;
        asapCallbackQueue = CallbackQueue.getPooled();
        queue.notifyAll();
        CallbackQueue.release(queue);
      }
    }
  }
);

/**
 * Mark a component as needing a rerender, adding an optional callback to a
 * list of functions which will be executed once the rerender occurs.
 */
function enqueueUpdate(component, callback) {
  ("production" !== process.env.NODE_ENV ? invariant(
    !callback || typeof callback === "function",
    'enqueueUpdate(...): You called `setProps`, `replaceProps`, ' +
    '`setState`, `replaceState`, or `forceUpdate` with a callback that ' +
    'isn\'t callable.'
  ) : invariant(!callback || typeof callback === "function"));
  ensureInjected();

  // Various parts of our code (such as ReactCompositeComponent's
  // _renderValidatedComponent) assume that calls to render aren't nested;
  // verify that that's the case. (This is called by each top-level update
  // function, like setProps, setState, forceUpdate, etc.; creation and
  // destruction of top-level components is guarded in ReactMount.)
  ("production" !== process.env.NODE_ENV ? warning(
    ReactCurrentOwner.current == null,
    'enqueueUpdate(): Render methods should be a pure function of props ' +
    'and state; triggering nested component updates from render is not ' +
    'allowed. If necessary, trigger nested updates in ' +
    'componentDidUpdate.'
  ) : null);

  if (!batchingStrategy.isBatchingUpdates) {
    batchingStrategy.batchedUpdates(enqueueUpdate, component, callback);
    return;
  }

  dirtyComponents.push(component);

  if (callback) {
    if (component._pendingCallbacks) {
      component._pendingCallbacks.push(callback);
    } else {
      component._pendingCallbacks = [callback];
    }
  }
}

/**
 * Enqueue a callback to be run at the end of the current batching cycle. Throws
 * if no updates are currently being performed.
 */
function asap(callback, context) {
  ("production" !== process.env.NODE_ENV ? invariant(
    batchingStrategy.isBatchingUpdates,
    'ReactUpdates.asap: Can\'t enqueue an asap callback in a context where' +
    'updates are not being batched.'
  ) : invariant(batchingStrategy.isBatchingUpdates));
  asapCallbackQueue.enqueue(callback, context);
  asapEnqueued = true;
}

var ReactUpdatesInjection = {
  injectReconcileTransaction: function(ReconcileTransaction) {
    ("production" !== process.env.NODE_ENV ? invariant(
      ReconcileTransaction,
      'ReactUpdates: must provide a reconcile transaction class'
    ) : invariant(ReconcileTransaction));
    ReactUpdates.ReactReconcileTransaction = ReconcileTransaction;
  },

  injectBatchingStrategy: function(_batchingStrategy) {
    ("production" !== process.env.NODE_ENV ? invariant(
      _batchingStrategy,
      'ReactUpdates: must provide a batching strategy'
    ) : invariant(_batchingStrategy));
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof _batchingStrategy.batchedUpdates === 'function',
      'ReactUpdates: must provide a batchedUpdates() function'
    ) : invariant(typeof _batchingStrategy.batchedUpdates === 'function'));
    ("production" !== process.env.NODE_ENV ? invariant(
      typeof _batchingStrategy.isBatchingUpdates === 'boolean',
      'ReactUpdates: must provide an isBatchingUpdates boolean attribute'
    ) : invariant(typeof _batchingStrategy.isBatchingUpdates === 'boolean'));
    batchingStrategy = _batchingStrategy;
  }
};

var ReactUpdates = {
  /**
   * React references `ReactReconcileTransaction` using this property in order
   * to allow dependency injection.
   *
   * @internal
   */
  ReactReconcileTransaction: null,

  batchedUpdates: batchedUpdates,
  enqueueUpdate: enqueueUpdate,
  flushBatchedUpdates: flushBatchedUpdates,
  injection: ReactUpdatesInjection,
  asap: asap
};

module.exports = ReactUpdates;

},{"./CallbackQueue":18,"./Object.assign":39,"./PooledClass":40,"./ReactCurrentOwner":49,"./ReactPerf":81,"./Transaction":108,"./invariant":139,"./warning":158}],93:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SVGDOMPropertyConfig
 */

/*jslint bitwise: true*/

"use strict";

var DOMProperty = require("./DOMProperty");

var MUST_USE_ATTRIBUTE = DOMProperty.injection.MUST_USE_ATTRIBUTE;

var SVGDOMPropertyConfig = {
  Properties: {
    cx: MUST_USE_ATTRIBUTE,
    cy: MUST_USE_ATTRIBUTE,
    d: MUST_USE_ATTRIBUTE,
    dx: MUST_USE_ATTRIBUTE,
    dy: MUST_USE_ATTRIBUTE,
    fill: MUST_USE_ATTRIBUTE,
    fillOpacity: MUST_USE_ATTRIBUTE,
    fontFamily: MUST_USE_ATTRIBUTE,
    fontSize: MUST_USE_ATTRIBUTE,
    fx: MUST_USE_ATTRIBUTE,
    fy: MUST_USE_ATTRIBUTE,
    gradientTransform: MUST_USE_ATTRIBUTE,
    gradientUnits: MUST_USE_ATTRIBUTE,
    markerEnd: MUST_USE_ATTRIBUTE,
    markerMid: MUST_USE_ATTRIBUTE,
    markerStart: MUST_USE_ATTRIBUTE,
    offset: MUST_USE_ATTRIBUTE,
    opacity: MUST_USE_ATTRIBUTE,
    patternContentUnits: MUST_USE_ATTRIBUTE,
    patternUnits: MUST_USE_ATTRIBUTE,
    points: MUST_USE_ATTRIBUTE,
    preserveAspectRatio: MUST_USE_ATTRIBUTE,
    r: MUST_USE_ATTRIBUTE,
    rx: MUST_USE_ATTRIBUTE,
    ry: MUST_USE_ATTRIBUTE,
    spreadMethod: MUST_USE_ATTRIBUTE,
    stopColor: MUST_USE_ATTRIBUTE,
    stopOpacity: MUST_USE_ATTRIBUTE,
    stroke: MUST_USE_ATTRIBUTE,
    strokeDasharray: MUST_USE_ATTRIBUTE,
    strokeLinecap: MUST_USE_ATTRIBUTE,
    strokeOpacity: MUST_USE_ATTRIBUTE,
    strokeWidth: MUST_USE_ATTRIBUTE,
    textAnchor: MUST_USE_ATTRIBUTE,
    transform: MUST_USE_ATTRIBUTE,
    version: MUST_USE_ATTRIBUTE,
    viewBox: MUST_USE_ATTRIBUTE,
    x1: MUST_USE_ATTRIBUTE,
    x2: MUST_USE_ATTRIBUTE,
    x: MUST_USE_ATTRIBUTE,
    y1: MUST_USE_ATTRIBUTE,
    y2: MUST_USE_ATTRIBUTE,
    y: MUST_USE_ATTRIBUTE
  },
  DOMAttributeNames: {
    fillOpacity: 'fill-opacity',
    fontFamily: 'font-family',
    fontSize: 'font-size',
    gradientTransform: 'gradientTransform',
    gradientUnits: 'gradientUnits',
    markerEnd: 'marker-end',
    markerMid: 'marker-mid',
    markerStart: 'marker-start',
    patternContentUnits: 'patternContentUnits',
    patternUnits: 'patternUnits',
    preserveAspectRatio: 'preserveAspectRatio',
    spreadMethod: 'spreadMethod',
    stopColor: 'stop-color',
    stopOpacity: 'stop-opacity',
    strokeDasharray: 'stroke-dasharray',
    strokeLinecap: 'stroke-linecap',
    strokeOpacity: 'stroke-opacity',
    strokeWidth: 'stroke-width',
    textAnchor: 'text-anchor',
    viewBox: 'viewBox'
  }
};

module.exports = SVGDOMPropertyConfig;

},{"./DOMProperty":23}],94:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SelectEventPlugin
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPropagators = require("./EventPropagators");
var ReactInputSelection = require("./ReactInputSelection");
var SyntheticEvent = require("./SyntheticEvent");

var getActiveElement = require("./getActiveElement");
var isTextInputElement = require("./isTextInputElement");
var keyOf = require("./keyOf");
var shallowEqual = require("./shallowEqual");

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  select: {
    phasedRegistrationNames: {
      bubbled: keyOf({onSelect: null}),
      captured: keyOf({onSelectCapture: null})
    },
    dependencies: [
      topLevelTypes.topBlur,
      topLevelTypes.topContextMenu,
      topLevelTypes.topFocus,
      topLevelTypes.topKeyDown,
      topLevelTypes.topMouseDown,
      topLevelTypes.topMouseUp,
      topLevelTypes.topSelectionChange
    ]
  }
};

var activeElement = null;
var activeElementID = null;
var lastSelection = null;
var mouseDown = false;

/**
 * Get an object which is a unique representation of the current selection.
 *
 * The return value will not be consistent across nodes or browsers, but
 * two identical selections on the same node will return identical objects.
 *
 * @param {DOMElement} node
 * @param {object}
 */
function getSelection(node) {
  if ('selectionStart' in node &&
      ReactInputSelection.hasSelectionCapabilities(node)) {
    return {
      start: node.selectionStart,
      end: node.selectionEnd
    };
  } else if (window.getSelection) {
    var selection = window.getSelection();
    return {
      anchorNode: selection.anchorNode,
      anchorOffset: selection.anchorOffset,
      focusNode: selection.focusNode,
      focusOffset: selection.focusOffset
    };
  } else if (document.selection) {
    var range = document.selection.createRange();
    return {
      parentElement: range.parentElement(),
      text: range.text,
      top: range.boundingTop,
      left: range.boundingLeft
    };
  }
}

/**
 * Poll selection to see whether it's changed.
 *
 * @param {object} nativeEvent
 * @return {?SyntheticEvent}
 */
function constructSelectEvent(nativeEvent) {
  // Ensure we have the right element, and that the user is not dragging a
  // selection (this matches native `select` event behavior). In HTML5, select
  // fires only on input and textarea thus if there's no focused element we
  // won't dispatch.
  if (mouseDown ||
      activeElement == null ||
      activeElement != getActiveElement()) {
    return;
  }

  // Only fire when selection has actually changed.
  var currentSelection = getSelection(activeElement);
  if (!lastSelection || !shallowEqual(lastSelection, currentSelection)) {
    lastSelection = currentSelection;

    var syntheticEvent = SyntheticEvent.getPooled(
      eventTypes.select,
      activeElementID,
      nativeEvent
    );

    syntheticEvent.type = 'select';
    syntheticEvent.target = activeElement;

    EventPropagators.accumulateTwoPhaseDispatches(syntheticEvent);

    return syntheticEvent;
  }
}

/**
 * This plugin creates an `onSelect` event that normalizes select events
 * across form elements.
 *
 * Supported elements are:
 * - input (see `isTextInputElement`)
 * - textarea
 * - contentEditable
 *
 * This differs from native browser implementations in the following ways:
 * - Fires on contentEditable fields as well as inputs.
 * - Fires for collapsed selection.
 * - Fires after user input.
 */
var SelectEventPlugin = {

  eventTypes: eventTypes,

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {

    switch (topLevelType) {
      // Track the input node that has focus.
      case topLevelTypes.topFocus:
        if (isTextInputElement(topLevelTarget) ||
            topLevelTarget.contentEditable === 'true') {
          activeElement = topLevelTarget;
          activeElementID = topLevelTargetID;
          lastSelection = null;
        }
        break;
      case topLevelTypes.topBlur:
        activeElement = null;
        activeElementID = null;
        lastSelection = null;
        break;

      // Don't fire the event while the user is dragging. This matches the
      // semantics of the native select event.
      case topLevelTypes.topMouseDown:
        mouseDown = true;
        break;
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topMouseUp:
        mouseDown = false;
        return constructSelectEvent(nativeEvent);

      // Chrome and IE fire non-standard event when selection is changed (and
      // sometimes when it hasn't).
      // Firefox doesn't support selectionchange, so check selection status
      // after each key entry. The selection changes after keydown and before
      // keyup, but we check on keydown as well in the case of holding down a
      // key, when multiple keydown events are fired but only one keyup is.
      case topLevelTypes.topSelectionChange:
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        return constructSelectEvent(nativeEvent);
    }
  }
};

module.exports = SelectEventPlugin;

},{"./EventConstants":28,"./EventPropagators":33,"./ReactInputSelection":72,"./SyntheticEvent":100,"./getActiveElement":126,"./isTextInputElement":142,"./keyOf":146,"./shallowEqual":154}],95:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ServerReactRootIndex
 * @typechecks
 */

"use strict";

/**
 * Size of the reactRoot ID space. We generate random numbers for React root
 * IDs and if there's a collision the events and DOM update system will
 * get confused. In the future we need a way to generate GUIDs but for
 * now this will work on a smaller scale.
 */
var GLOBAL_MOUNT_POINT_MAX = Math.pow(2, 53);

var ServerReactRootIndex = {
  createReactRootIndex: function() {
    return Math.ceil(Math.random() * GLOBAL_MOUNT_POINT_MAX);
  }
};

module.exports = ServerReactRootIndex;

},{}],96:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SimpleEventPlugin
 */

"use strict";

var EventConstants = require("./EventConstants");
var EventPluginUtils = require("./EventPluginUtils");
var EventPropagators = require("./EventPropagators");
var SyntheticClipboardEvent = require("./SyntheticClipboardEvent");
var SyntheticEvent = require("./SyntheticEvent");
var SyntheticFocusEvent = require("./SyntheticFocusEvent");
var SyntheticKeyboardEvent = require("./SyntheticKeyboardEvent");
var SyntheticMouseEvent = require("./SyntheticMouseEvent");
var SyntheticDragEvent = require("./SyntheticDragEvent");
var SyntheticTouchEvent = require("./SyntheticTouchEvent");
var SyntheticUIEvent = require("./SyntheticUIEvent");
var SyntheticWheelEvent = require("./SyntheticWheelEvent");

var getEventCharCode = require("./getEventCharCode");

var invariant = require("./invariant");
var keyOf = require("./keyOf");
var warning = require("./warning");

var topLevelTypes = EventConstants.topLevelTypes;

var eventTypes = {
  blur: {
    phasedRegistrationNames: {
      bubbled: keyOf({onBlur: true}),
      captured: keyOf({onBlurCapture: true})
    }
  },
  click: {
    phasedRegistrationNames: {
      bubbled: keyOf({onClick: true}),
      captured: keyOf({onClickCapture: true})
    }
  },
  contextMenu: {
    phasedRegistrationNames: {
      bubbled: keyOf({onContextMenu: true}),
      captured: keyOf({onContextMenuCapture: true})
    }
  },
  copy: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCopy: true}),
      captured: keyOf({onCopyCapture: true})
    }
  },
  cut: {
    phasedRegistrationNames: {
      bubbled: keyOf({onCut: true}),
      captured: keyOf({onCutCapture: true})
    }
  },
  doubleClick: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDoubleClick: true}),
      captured: keyOf({onDoubleClickCapture: true})
    }
  },
  drag: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDrag: true}),
      captured: keyOf({onDragCapture: true})
    }
  },
  dragEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragEnd: true}),
      captured: keyOf({onDragEndCapture: true})
    }
  },
  dragEnter: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragEnter: true}),
      captured: keyOf({onDragEnterCapture: true})
    }
  },
  dragExit: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragExit: true}),
      captured: keyOf({onDragExitCapture: true})
    }
  },
  dragLeave: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragLeave: true}),
      captured: keyOf({onDragLeaveCapture: true})
    }
  },
  dragOver: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragOver: true}),
      captured: keyOf({onDragOverCapture: true})
    }
  },
  dragStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDragStart: true}),
      captured: keyOf({onDragStartCapture: true})
    }
  },
  drop: {
    phasedRegistrationNames: {
      bubbled: keyOf({onDrop: true}),
      captured: keyOf({onDropCapture: true})
    }
  },
  focus: {
    phasedRegistrationNames: {
      bubbled: keyOf({onFocus: true}),
      captured: keyOf({onFocusCapture: true})
    }
  },
  input: {
    phasedRegistrationNames: {
      bubbled: keyOf({onInput: true}),
      captured: keyOf({onInputCapture: true})
    }
  },
  keyDown: {
    phasedRegistrationNames: {
      bubbled: keyOf({onKeyDown: true}),
      captured: keyOf({onKeyDownCapture: true})
    }
  },
  keyPress: {
    phasedRegistrationNames: {
      bubbled: keyOf({onKeyPress: true}),
      captured: keyOf({onKeyPressCapture: true})
    }
  },
  keyUp: {
    phasedRegistrationNames: {
      bubbled: keyOf({onKeyUp: true}),
      captured: keyOf({onKeyUpCapture: true})
    }
  },
  load: {
    phasedRegistrationNames: {
      bubbled: keyOf({onLoad: true}),
      captured: keyOf({onLoadCapture: true})
    }
  },
  error: {
    phasedRegistrationNames: {
      bubbled: keyOf({onError: true}),
      captured: keyOf({onErrorCapture: true})
    }
  },
  // Note: We do not allow listening to mouseOver events. Instead, use the
  // onMouseEnter/onMouseLeave created by `EnterLeaveEventPlugin`.
  mouseDown: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseDown: true}),
      captured: keyOf({onMouseDownCapture: true})
    }
  },
  mouseMove: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseMove: true}),
      captured: keyOf({onMouseMoveCapture: true})
    }
  },
  mouseOut: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseOut: true}),
      captured: keyOf({onMouseOutCapture: true})
    }
  },
  mouseOver: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseOver: true}),
      captured: keyOf({onMouseOverCapture: true})
    }
  },
  mouseUp: {
    phasedRegistrationNames: {
      bubbled: keyOf({onMouseUp: true}),
      captured: keyOf({onMouseUpCapture: true})
    }
  },
  paste: {
    phasedRegistrationNames: {
      bubbled: keyOf({onPaste: true}),
      captured: keyOf({onPasteCapture: true})
    }
  },
  reset: {
    phasedRegistrationNames: {
      bubbled: keyOf({onReset: true}),
      captured: keyOf({onResetCapture: true})
    }
  },
  scroll: {
    phasedRegistrationNames: {
      bubbled: keyOf({onScroll: true}),
      captured: keyOf({onScrollCapture: true})
    }
  },
  submit: {
    phasedRegistrationNames: {
      bubbled: keyOf({onSubmit: true}),
      captured: keyOf({onSubmitCapture: true})
    }
  },
  touchCancel: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchCancel: true}),
      captured: keyOf({onTouchCancelCapture: true})
    }
  },
  touchEnd: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchEnd: true}),
      captured: keyOf({onTouchEndCapture: true})
    }
  },
  touchMove: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchMove: true}),
      captured: keyOf({onTouchMoveCapture: true})
    }
  },
  touchStart: {
    phasedRegistrationNames: {
      bubbled: keyOf({onTouchStart: true}),
      captured: keyOf({onTouchStartCapture: true})
    }
  },
  wheel: {
    phasedRegistrationNames: {
      bubbled: keyOf({onWheel: true}),
      captured: keyOf({onWheelCapture: true})
    }
  }
};

var topLevelEventsToDispatchConfig = {
  topBlur:        eventTypes.blur,
  topClick:       eventTypes.click,
  topContextMenu: eventTypes.contextMenu,
  topCopy:        eventTypes.copy,
  topCut:         eventTypes.cut,
  topDoubleClick: eventTypes.doubleClick,
  topDrag:        eventTypes.drag,
  topDragEnd:     eventTypes.dragEnd,
  topDragEnter:   eventTypes.dragEnter,
  topDragExit:    eventTypes.dragExit,
  topDragLeave:   eventTypes.dragLeave,
  topDragOver:    eventTypes.dragOver,
  topDragStart:   eventTypes.dragStart,
  topDrop:        eventTypes.drop,
  topError:       eventTypes.error,
  topFocus:       eventTypes.focus,
  topInput:       eventTypes.input,
  topKeyDown:     eventTypes.keyDown,
  topKeyPress:    eventTypes.keyPress,
  topKeyUp:       eventTypes.keyUp,
  topLoad:        eventTypes.load,
  topMouseDown:   eventTypes.mouseDown,
  topMouseMove:   eventTypes.mouseMove,
  topMouseOut:    eventTypes.mouseOut,
  topMouseOver:   eventTypes.mouseOver,
  topMouseUp:     eventTypes.mouseUp,
  topPaste:       eventTypes.paste,
  topReset:       eventTypes.reset,
  topScroll:      eventTypes.scroll,
  topSubmit:      eventTypes.submit,
  topTouchCancel: eventTypes.touchCancel,
  topTouchEnd:    eventTypes.touchEnd,
  topTouchMove:   eventTypes.touchMove,
  topTouchStart:  eventTypes.touchStart,
  topWheel:       eventTypes.wheel
};

for (var topLevelType in topLevelEventsToDispatchConfig) {
  topLevelEventsToDispatchConfig[topLevelType].dependencies = [topLevelType];
}

var SimpleEventPlugin = {

  eventTypes: eventTypes,

  /**
   * Same as the default implementation, except cancels the event when return
   * value is false. This behavior will be disabled in a future release.
   *
   * @param {object} Event to be dispatched.
   * @param {function} Application-level callback.
   * @param {string} domID DOM ID to pass to the callback.
   */
  executeDispatch: function(event, listener, domID) {
    var returnValue = EventPluginUtils.executeDispatch(event, listener, domID);

    ("production" !== process.env.NODE_ENV ? warning(
      typeof returnValue !== 'boolean',
      'Returning `false` from an event handler is deprecated and will be ' +
      'ignored in a future release. Instead, manually call ' +
      'e.stopPropagation() or e.preventDefault(), as appropriate.'
    ) : null);

    if (returnValue === false) {
      event.stopPropagation();
      event.preventDefault();
    }
  },

  /**
   * @param {string} topLevelType Record from `EventConstants`.
   * @param {DOMEventTarget} topLevelTarget The listening component root node.
   * @param {string} topLevelTargetID ID of `topLevelTarget`.
   * @param {object} nativeEvent Native browser event.
   * @return {*} An accumulation of synthetic events.
   * @see {EventPluginHub.extractEvents}
   */
  extractEvents: function(
      topLevelType,
      topLevelTarget,
      topLevelTargetID,
      nativeEvent) {
    var dispatchConfig = topLevelEventsToDispatchConfig[topLevelType];
    if (!dispatchConfig) {
      return null;
    }
    var EventConstructor;
    switch (topLevelType) {
      case topLevelTypes.topInput:
      case topLevelTypes.topLoad:
      case topLevelTypes.topError:
      case topLevelTypes.topReset:
      case topLevelTypes.topSubmit:
        // HTML Events
        // @see http://www.w3.org/TR/html5/index.html#events-0
        EventConstructor = SyntheticEvent;
        break;
      case topLevelTypes.topKeyPress:
        // FireFox creates a keypress event for function keys too. This removes
        // the unwanted keypress events. Enter is however both printable and
        // non-printable. One would expect Tab to be as well (but it isn't).
        if (getEventCharCode(nativeEvent) === 0) {
          return null;
        }
        /* falls through */
      case topLevelTypes.topKeyDown:
      case topLevelTypes.topKeyUp:
        EventConstructor = SyntheticKeyboardEvent;
        break;
      case topLevelTypes.topBlur:
      case topLevelTypes.topFocus:
        EventConstructor = SyntheticFocusEvent;
        break;
      case topLevelTypes.topClick:
        // Firefox creates a click event on right mouse clicks. This removes the
        // unwanted click events.
        if (nativeEvent.button === 2) {
          return null;
        }
        /* falls through */
      case topLevelTypes.topContextMenu:
      case topLevelTypes.topDoubleClick:
      case topLevelTypes.topMouseDown:
      case topLevelTypes.topMouseMove:
      case topLevelTypes.topMouseOut:
      case topLevelTypes.topMouseOver:
      case topLevelTypes.topMouseUp:
        EventConstructor = SyntheticMouseEvent;
        break;
      case topLevelTypes.topDrag:
      case topLevelTypes.topDragEnd:
      case topLevelTypes.topDragEnter:
      case topLevelTypes.topDragExit:
      case topLevelTypes.topDragLeave:
      case topLevelTypes.topDragOver:
      case topLevelTypes.topDragStart:
      case topLevelTypes.topDrop:
        EventConstructor = SyntheticDragEvent;
        break;
      case topLevelTypes.topTouchCancel:
      case topLevelTypes.topTouchEnd:
      case topLevelTypes.topTouchMove:
      case topLevelTypes.topTouchStart:
        EventConstructor = SyntheticTouchEvent;
        break;
      case topLevelTypes.topScroll:
        EventConstructor = SyntheticUIEvent;
        break;
      case topLevelTypes.topWheel:
        EventConstructor = SyntheticWheelEvent;
        break;
      case topLevelTypes.topCopy:
      case topLevelTypes.topCut:
      case topLevelTypes.topPaste:
        EventConstructor = SyntheticClipboardEvent;
        break;
    }
    ("production" !== process.env.NODE_ENV ? invariant(
      EventConstructor,
      'SimpleEventPlugin: Unhandled event type, `%s`.',
      topLevelType
    ) : invariant(EventConstructor));
    var event = EventConstructor.getPooled(
      dispatchConfig,
      topLevelTargetID,
      nativeEvent
    );
    EventPropagators.accumulateTwoPhaseDispatches(event);
    return event;
  }

};

module.exports = SimpleEventPlugin;

},{"./EventConstants":28,"./EventPluginUtils":32,"./EventPropagators":33,"./SyntheticClipboardEvent":97,"./SyntheticDragEvent":99,"./SyntheticEvent":100,"./SyntheticFocusEvent":101,"./SyntheticKeyboardEvent":103,"./SyntheticMouseEvent":104,"./SyntheticTouchEvent":105,"./SyntheticUIEvent":106,"./SyntheticWheelEvent":107,"./getEventCharCode":127,"./invariant":139,"./keyOf":146,"./warning":158}],97:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticClipboardEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

/**
 * @interface Event
 * @see http://www.w3.org/TR/clipboard-apis/
 */
var ClipboardEventInterface = {
  clipboardData: function(event) {
    return (
      'clipboardData' in event ?
        event.clipboardData :
        window.clipboardData
    );
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticClipboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(SyntheticClipboardEvent, ClipboardEventInterface);

module.exports = SyntheticClipboardEvent;


},{"./SyntheticEvent":100}],98:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticCompositionEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#events-compositionevents
 */
var CompositionEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticCompositionEvent(
  dispatchConfig,
  dispatchMarker,
  nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(
  SyntheticCompositionEvent,
  CompositionEventInterface
);

module.exports = SyntheticCompositionEvent;


},{"./SyntheticEvent":100}],99:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticDragEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticMouseEvent = require("./SyntheticMouseEvent");

/**
 * @interface DragEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var DragEventInterface = {
  dataTransfer: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticDragEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticMouseEvent.augmentClass(SyntheticDragEvent, DragEventInterface);

module.exports = SyntheticDragEvent;

},{"./SyntheticMouseEvent":104}],100:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticEvent
 * @typechecks static-only
 */

"use strict";

var PooledClass = require("./PooledClass");

var assign = require("./Object.assign");
var emptyFunction = require("./emptyFunction");
var getEventTarget = require("./getEventTarget");

/**
 * @interface Event
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var EventInterface = {
  type: null,
  target: getEventTarget,
  // currentTarget is set when dispatching; no use in copying it here
  currentTarget: emptyFunction.thatReturnsNull,
  eventPhase: null,
  bubbles: null,
  cancelable: null,
  timeStamp: function(event) {
    return event.timeStamp || Date.now();
  },
  defaultPrevented: null,
  isTrusted: null
};

/**
 * Synthetic events are dispatched by event plugins, typically in response to a
 * top-level event delegation handler.
 *
 * These systems should generally use pooling to reduce the frequency of garbage
 * collection. The system should check `isPersistent` to determine whether the
 * event should be released into the pool after being dispatched. Users that
 * need a persisted event should invoke `persist`.
 *
 * Synthetic events (and subclasses) implement the DOM Level 3 Events API by
 * normalizing browser quirks. Subclasses do not necessarily have to implement a
 * DOM interface; custom application-specific events can also subclass this.
 *
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 */
function SyntheticEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  this.dispatchConfig = dispatchConfig;
  this.dispatchMarker = dispatchMarker;
  this.nativeEvent = nativeEvent;

  var Interface = this.constructor.Interface;
  for (var propName in Interface) {
    if (!Interface.hasOwnProperty(propName)) {
      continue;
    }
    var normalize = Interface[propName];
    if (normalize) {
      this[propName] = normalize(nativeEvent);
    } else {
      this[propName] = nativeEvent[propName];
    }
  }

  var defaultPrevented = nativeEvent.defaultPrevented != null ?
    nativeEvent.defaultPrevented :
    nativeEvent.returnValue === false;
  if (defaultPrevented) {
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  } else {
    this.isDefaultPrevented = emptyFunction.thatReturnsFalse;
  }
  this.isPropagationStopped = emptyFunction.thatReturnsFalse;
}

assign(SyntheticEvent.prototype, {

  preventDefault: function() {
    this.defaultPrevented = true;
    var event = this.nativeEvent;
    event.preventDefault ? event.preventDefault() : event.returnValue = false;
    this.isDefaultPrevented = emptyFunction.thatReturnsTrue;
  },

  stopPropagation: function() {
    var event = this.nativeEvent;
    event.stopPropagation ? event.stopPropagation() : event.cancelBubble = true;
    this.isPropagationStopped = emptyFunction.thatReturnsTrue;
  },

  /**
   * We release all dispatched `SyntheticEvent`s after each event loop, adding
   * them back into the pool. This allows a way to hold onto a reference that
   * won't be added back into the pool.
   */
  persist: function() {
    this.isPersistent = emptyFunction.thatReturnsTrue;
  },

  /**
   * Checks if this event should be released back into the pool.
   *
   * @return {boolean} True if this should not be released, false otherwise.
   */
  isPersistent: emptyFunction.thatReturnsFalse,

  /**
   * `PooledClass` looks for `destructor` on each instance it releases.
   */
  destructor: function() {
    var Interface = this.constructor.Interface;
    for (var propName in Interface) {
      this[propName] = null;
    }
    this.dispatchConfig = null;
    this.dispatchMarker = null;
    this.nativeEvent = null;
  }

});

SyntheticEvent.Interface = EventInterface;

/**
 * Helper to reduce boilerplate when creating subclasses.
 *
 * @param {function} Class
 * @param {?object} Interface
 */
SyntheticEvent.augmentClass = function(Class, Interface) {
  var Super = this;

  var prototype = Object.create(Super.prototype);
  assign(prototype, Class.prototype);
  Class.prototype = prototype;
  Class.prototype.constructor = Class;

  Class.Interface = assign({}, Super.Interface, Interface);
  Class.augmentClass = Super.augmentClass;

  PooledClass.addPoolingTo(Class, PooledClass.threeArgumentPooler);
};

PooledClass.addPoolingTo(SyntheticEvent, PooledClass.threeArgumentPooler);

module.exports = SyntheticEvent;

},{"./Object.assign":39,"./PooledClass":40,"./emptyFunction":120,"./getEventTarget":130}],101:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticFocusEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");

/**
 * @interface FocusEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var FocusEventInterface = {
  relatedTarget: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticFocusEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticFocusEvent, FocusEventInterface);

module.exports = SyntheticFocusEvent;

},{"./SyntheticUIEvent":106}],102:[function(require,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticInputEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

/**
 * @interface Event
 * @see http://www.w3.org/TR/2013/WD-DOM-Level-3-Events-20131105
 *      /#events-inputevents
 */
var InputEventInterface = {
  data: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticInputEvent(
  dispatchConfig,
  dispatchMarker,
  nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(
  SyntheticInputEvent,
  InputEventInterface
);

module.exports = SyntheticInputEvent;


},{"./SyntheticEvent":100}],103:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticKeyboardEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");

var getEventCharCode = require("./getEventCharCode");
var getEventKey = require("./getEventKey");
var getEventModifierState = require("./getEventModifierState");

/**
 * @interface KeyboardEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var KeyboardEventInterface = {
  key: getEventKey,
  location: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  repeat: null,
  locale: null,
  getModifierState: getEventModifierState,
  // Legacy Interface
  charCode: function(event) {
    // `charCode` is the result of a KeyPress event and represents the value of
    // the actual printable character.

    // KeyPress is deprecated, but its replacement is not yet final and not
    // implemented in any major browser. Only KeyPress has charCode.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    return 0;
  },
  keyCode: function(event) {
    // `keyCode` is the result of a KeyDown/Up event and represents the value of
    // physical keyboard key.

    // The actual meaning of the value depends on the users' keyboard layout
    // which cannot be detected. Assuming that it is a US keyboard layout
    // provides a surprisingly accurate mapping for US and European users.
    // Due to this, it is left to the user to implement at this time.
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  },
  which: function(event) {
    // `which` is an alias for either `keyCode` or `charCode` depending on the
    // type of the event.
    if (event.type === 'keypress') {
      return getEventCharCode(event);
    }
    if (event.type === 'keydown' || event.type === 'keyup') {
      return event.keyCode;
    }
    return 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticKeyboardEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticKeyboardEvent, KeyboardEventInterface);

module.exports = SyntheticKeyboardEvent;

},{"./SyntheticUIEvent":106,"./getEventCharCode":127,"./getEventKey":128,"./getEventModifierState":129}],104:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticMouseEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");
var ViewportMetrics = require("./ViewportMetrics");

var getEventModifierState = require("./getEventModifierState");

/**
 * @interface MouseEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var MouseEventInterface = {
  screenX: null,
  screenY: null,
  clientX: null,
  clientY: null,
  ctrlKey: null,
  shiftKey: null,
  altKey: null,
  metaKey: null,
  getModifierState: getEventModifierState,
  button: function(event) {
    // Webkit, Firefox, IE9+
    // which:  1 2 3
    // button: 0 1 2 (standard)
    var button = event.button;
    if ('which' in event) {
      return button;
    }
    // IE<9
    // which:  undefined
    // button: 0 0 0
    // button: 1 4 2 (onmouseup)
    return button === 2 ? 2 : button === 4 ? 1 : 0;
  },
  buttons: null,
  relatedTarget: function(event) {
    return event.relatedTarget || (
      event.fromElement === event.srcElement ?
        event.toElement :
        event.fromElement
    );
  },
  // "Proprietary" Interface.
  pageX: function(event) {
    return 'pageX' in event ?
      event.pageX :
      event.clientX + ViewportMetrics.currentScrollLeft;
  },
  pageY: function(event) {
    return 'pageY' in event ?
      event.pageY :
      event.clientY + ViewportMetrics.currentScrollTop;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticMouseEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticMouseEvent, MouseEventInterface);

module.exports = SyntheticMouseEvent;

},{"./SyntheticUIEvent":106,"./ViewportMetrics":109,"./getEventModifierState":129}],105:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticTouchEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticUIEvent = require("./SyntheticUIEvent");

var getEventModifierState = require("./getEventModifierState");

/**
 * @interface TouchEvent
 * @see http://www.w3.org/TR/touch-events/
 */
var TouchEventInterface = {
  touches: null,
  targetTouches: null,
  changedTouches: null,
  altKey: null,
  metaKey: null,
  ctrlKey: null,
  shiftKey: null,
  getModifierState: getEventModifierState
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticUIEvent}
 */
function SyntheticTouchEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticUIEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticUIEvent.augmentClass(SyntheticTouchEvent, TouchEventInterface);

module.exports = SyntheticTouchEvent;

},{"./SyntheticUIEvent":106,"./getEventModifierState":129}],106:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticUIEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticEvent = require("./SyntheticEvent");

var getEventTarget = require("./getEventTarget");

/**
 * @interface UIEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var UIEventInterface = {
  view: function(event) {
    if (event.view) {
      return event.view;
    }

    var target = getEventTarget(event);
    if (target != null && target.window === target) {
      // target is a window object
      return target;
    }

    var doc = target.ownerDocument;
    // TODO: Figure out why `ownerDocument` is sometimes undefined in IE8.
    if (doc) {
      return doc.defaultView || doc.parentWindow;
    } else {
      return window;
    }
  },
  detail: function(event) {
    return event.detail || 0;
  }
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticEvent}
 */
function SyntheticUIEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticEvent.augmentClass(SyntheticUIEvent, UIEventInterface);

module.exports = SyntheticUIEvent;

},{"./SyntheticEvent":100,"./getEventTarget":130}],107:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule SyntheticWheelEvent
 * @typechecks static-only
 */

"use strict";

var SyntheticMouseEvent = require("./SyntheticMouseEvent");

/**
 * @interface WheelEvent
 * @see http://www.w3.org/TR/DOM-Level-3-Events/
 */
var WheelEventInterface = {
  deltaX: function(event) {
    return (
      'deltaX' in event ? event.deltaX :
      // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
      'wheelDeltaX' in event ? -event.wheelDeltaX : 0
    );
  },
  deltaY: function(event) {
    return (
      'deltaY' in event ? event.deltaY :
      // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
      'wheelDeltaY' in event ? -event.wheelDeltaY :
      // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
      'wheelDelta' in event ? -event.wheelDelta : 0
    );
  },
  deltaZ: null,

  // Browsers without "deltaMode" is reporting in raw wheel delta where one
  // notch on the scroll is always +/- 120, roughly equivalent to pixels.
  // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
  // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
  deltaMode: null
};

/**
 * @param {object} dispatchConfig Configuration used to dispatch this event.
 * @param {string} dispatchMarker Marker identifying the event target.
 * @param {object} nativeEvent Native browser event.
 * @extends {SyntheticMouseEvent}
 */
function SyntheticWheelEvent(dispatchConfig, dispatchMarker, nativeEvent) {
  SyntheticMouseEvent.call(this, dispatchConfig, dispatchMarker, nativeEvent);
}

SyntheticMouseEvent.augmentClass(SyntheticWheelEvent, WheelEventInterface);

module.exports = SyntheticWheelEvent;

},{"./SyntheticMouseEvent":104}],108:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule Transaction
 */

"use strict";

var invariant = require("./invariant");

/**
 * `Transaction` creates a black box that is able to wrap any method such that
 * certain invariants are maintained before and after the method is invoked
 * (Even if an exception is thrown while invoking the wrapped method). Whoever
 * instantiates a transaction can provide enforcers of the invariants at
 * creation time. The `Transaction` class itself will supply one additional
 * automatic invariant for you - the invariant that any transaction instance
 * should not be run while it is already being run. You would typically create a
 * single instance of a `Transaction` for reuse multiple times, that potentially
 * is used to wrap several different methods. Wrappers are extremely simple -
 * they only require implementing two methods.
 *
 * <pre>
 *                       wrappers (injected at creation time)
 *                                      +        +
 *                                      |        |
 *                    +-----------------|--------|--------------+
 *                    |                 v        |              |
 *                    |      +---------------+   |              |
 *                    |   +--|    wrapper1   |---|----+         |
 *                    |   |  +---------------+   v    |         |
 *                    |   |          +-------------+  |         |
 *                    |   |     +----|   wrapper2  |--------+   |
 *                    |   |     |    +-------------+  |     |   |
 *                    |   |     |                     |     |   |
 *                    |   v     v                     v     v   | wrapper
 *                    | +---+ +---+   +---------+   +---+ +---+ | invariants
 * perform(anyMethod) | |   | |   |   |         |   |   | |   | | maintained
 * +----------------->|-|---|-|---|-->|anyMethod|---|---|-|---|-|-------->
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | |   | |   |   |         |   |   | |   | |
 *                    | +---+ +---+   +---------+   +---+ +---+ |
 *                    |  initialize                    close    |
 *                    +-----------------------------------------+
 * </pre>
 *
 * Use cases:
 * - Preserving the input selection ranges before/after reconciliation.
 *   Restoring selection even in the event of an unexpected error.
 * - Deactivating events while rearranging the DOM, preventing blurs/focuses,
 *   while guaranteeing that afterwards, the event system is reactivated.
 * - Flushing a queue of collected DOM mutations to the main UI thread after a
 *   reconciliation takes place in a worker thread.
 * - Invoking any collected `componentDidUpdate` callbacks after rendering new
 *   content.
 * - (Future use case): Wrapping particular flushes of the `ReactWorker` queue
 *   to preserve the `scrollTop` (an automatic scroll aware DOM).
 * - (Future use case): Layout calculations before and after DOM upates.
 *
 * Transactional plugin API:
 * - A module that has an `initialize` method that returns any precomputation.
 * - and a `close` method that accepts the precomputation. `close` is invoked
 *   when the wrapped process is completed, or has failed.
 *
 * @param {Array<TransactionalWrapper>} transactionWrapper Wrapper modules
 * that implement `initialize` and `close`.
 * @return {Transaction} Single transaction for reuse in thread.
 *
 * @class Transaction
 */
var Mixin = {
  /**
   * Sets up this instance so that it is prepared for collecting metrics. Does
   * so such that this setup method may be used on an instance that is already
   * initialized, in a way that does not consume additional memory upon reuse.
   * That can be useful if you decide to make your subclass of this mixin a
   * "PooledClass".
   */
  reinitializeTransaction: function() {
    this.transactionWrappers = this.getTransactionWrappers();
    if (!this.wrapperInitData) {
      this.wrapperInitData = [];
    } else {
      this.wrapperInitData.length = 0;
    }
    this._isInTransaction = false;
  },

  _isInTransaction: false,

  /**
   * @abstract
   * @return {Array<TransactionWrapper>} Array of transaction wrappers.
   */
  getTransactionWrappers: null,

  isInTransaction: function() {
    return !!this._isInTransaction;
  },

  /**
   * Executes the function within a safety window. Use this for the top level
   * methods that result in large amounts of computation/mutations that would
   * need to be safety checked.
   *
   * @param {function} method Member of scope to call.
   * @param {Object} scope Scope to invoke from.
   * @param {Object?=} args... Arguments to pass to the method (optional).
   *                           Helps prevent need to bind in many cases.
   * @return Return value from `method`.
   */
  perform: function(method, scope, a, b, c, d, e, f) {
    ("production" !== process.env.NODE_ENV ? invariant(
      !this.isInTransaction(),
      'Transaction.perform(...): Cannot initialize a transaction when there ' +
      'is already an outstanding transaction.'
    ) : invariant(!this.isInTransaction()));
    var errorThrown;
    var ret;
    try {
      this._isInTransaction = true;
      // Catching errors makes debugging more difficult, so we start with
      // errorThrown set to true before setting it to false after calling
      // close -- if it's still set to true in the finally block, it means
      // one of these calls threw.
      errorThrown = true;
      this.initializeAll(0);
      ret = method.call(scope, a, b, c, d, e, f);
      errorThrown = false;
    } finally {
      try {
        if (errorThrown) {
          // If `method` throws, prefer to show that stack trace over any thrown
          // by invoking `closeAll`.
          try {
            this.closeAll(0);
          } catch (err) {
          }
        } else {
          // Since `method` didn't throw, we don't want to silence the exception
          // here.
          this.closeAll(0);
        }
      } finally {
        this._isInTransaction = false;
      }
    }
    return ret;
  },

  initializeAll: function(startIndex) {
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      try {
        // Catching errors makes debugging more difficult, so we start with the
        // OBSERVED_ERROR state before overwriting it with the real return value
        // of initialize -- if it's still set to OBSERVED_ERROR in the finally
        // block, it means wrapper.initialize threw.
        this.wrapperInitData[i] = Transaction.OBSERVED_ERROR;
        this.wrapperInitData[i] = wrapper.initialize ?
          wrapper.initialize.call(this) :
          null;
      } finally {
        if (this.wrapperInitData[i] === Transaction.OBSERVED_ERROR) {
          // The initializer for wrapper i threw an error; initialize the
          // remaining wrappers but silence any exceptions from them to ensure
          // that the first error is the one to bubble up.
          try {
            this.initializeAll(i + 1);
          } catch (err) {
          }
        }
      }
    }
  },

  /**
   * Invokes each of `this.transactionWrappers.close[i]` functions, passing into
   * them the respective return values of `this.transactionWrappers.init[i]`
   * (`close`rs that correspond to initializers that failed will not be
   * invoked).
   */
  closeAll: function(startIndex) {
    ("production" !== process.env.NODE_ENV ? invariant(
      this.isInTransaction(),
      'Transaction.closeAll(): Cannot close transaction when none are open.'
    ) : invariant(this.isInTransaction()));
    var transactionWrappers = this.transactionWrappers;
    for (var i = startIndex; i < transactionWrappers.length; i++) {
      var wrapper = transactionWrappers[i];
      var initData = this.wrapperInitData[i];
      var errorThrown;
      try {
        // Catching errors makes debugging more difficult, so we start with
        // errorThrown set to true before setting it to false after calling
        // close -- if it's still set to true in the finally block, it means
        // wrapper.close threw.
        errorThrown = true;
        if (initData !== Transaction.OBSERVED_ERROR) {
          wrapper.close && wrapper.close.call(this, initData);
        }
        errorThrown = false;
      } finally {
        if (errorThrown) {
          // The closer for wrapper i threw an error; close the remaining
          // wrappers but silence any exceptions from them to ensure that the
          // first error is the one to bubble up.
          try {
            this.closeAll(i + 1);
          } catch (e) {
          }
        }
      }
    }
    this.wrapperInitData.length = 0;
  }
};

var Transaction = {

  Mixin: Mixin,

  /**
   * Token to look for to determine if an error occured.
   */
  OBSERVED_ERROR: {}

};

module.exports = Transaction;

},{"./invariant":139}],109:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule ViewportMetrics
 */

"use strict";

var getUnboundedScrollPosition = require("./getUnboundedScrollPosition");

var ViewportMetrics = {

  currentScrollLeft: 0,

  currentScrollTop: 0,

  refreshScrollValues: function() {
    var scrollPosition = getUnboundedScrollPosition(window);
    ViewportMetrics.currentScrollLeft = scrollPosition.x;
    ViewportMetrics.currentScrollTop = scrollPosition.y;
  }

};

module.exports = ViewportMetrics;

},{"./getUnboundedScrollPosition":135}],110:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule accumulateInto
 */

"use strict";

var invariant = require("./invariant");

/**
 *
 * Accumulates items that must not be null or undefined into the first one. This
 * is used to conserve memory by avoiding array allocations, and thus sacrifices
 * API cleanness. Since `current` can be null before being passed in and not
 * null after this function, make sure to assign it back to `current`:
 *
 * `a = accumulateInto(a, b);`
 *
 * This API should be sparingly used. Try `accumulate` for something cleaner.
 *
 * @return {*|array<*>} An accumulation of items.
 */

function accumulateInto(current, next) {
  ("production" !== process.env.NODE_ENV ? invariant(
    next != null,
    'accumulateInto(...): Accumulated items must not be null or undefined.'
  ) : invariant(next != null));
  if (current == null) {
    return next;
  }

  // Both are not empty. Warning: Never call x.concat(y) when you are not
  // certain that x is an Array (x could be a string with concat method).
  var currentIsArray = Array.isArray(current);
  var nextIsArray = Array.isArray(next);

  if (currentIsArray && nextIsArray) {
    current.push.apply(current, next);
    return current;
  }

  if (currentIsArray) {
    current.push(next);
    return current;
  }

  if (nextIsArray) {
    // A bit too dangerous to mutate `next`.
    return [current].concat(next);
  }

  return [current, next];
}

module.exports = accumulateInto;

},{"./invariant":139}],111:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule adler32
 */

/* jslint bitwise:true */

"use strict";

var MOD = 65521;

// This is a clean-room implementation of adler32 designed for detecting
// if markup is not what we expect it to be. It does not need to be
// cryptographically strong, only reasonably good at detecting if markup
// generated on the server is different than that on the client.
function adler32(data) {
  var a = 1;
  var b = 0;
  for (var i = 0; i < data.length; i++) {
    a = (a + data.charCodeAt(i)) % MOD;
    b = (b + a) % MOD;
  }
  return a | (b << 16);
}

module.exports = adler32;

},{}],112:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelize
 * @typechecks
 */

var _hyphenPattern = /-(.)/g;

/**
 * Camelcases a hyphenated string, for example:
 *
 *   > camelize('background-color')
 *   < "backgroundColor"
 *
 * @param {string} string
 * @return {string}
 */
function camelize(string) {
  return string.replace(_hyphenPattern, function(_, character) {
    return character.toUpperCase();
  });
}

module.exports = camelize;

},{}],113:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule camelizeStyleName
 * @typechecks
 */

"use strict";

var camelize = require("./camelize");

var msPattern = /^-ms-/;

/**
 * Camelcases a hyphenated CSS property name, for example:
 *
 *   > camelizeStyleName('background-color')
 *   < "backgroundColor"
 *   > camelizeStyleName('-moz-transition')
 *   < "MozTransition"
 *   > camelizeStyleName('-ms-transition')
 *   < "msTransition"
 *
 * As Andi Smith suggests
 * (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
 * is converted to lowercase `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function camelizeStyleName(string) {
  return camelize(string.replace(msPattern, 'ms-'));
}

module.exports = camelizeStyleName;

},{"./camelize":112}],114:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule containsNode
 * @typechecks
 */

var isTextNode = require("./isTextNode");

/*jslint bitwise:true */

/**
 * Checks if a given DOM node contains or is another DOM node.
 *
 * @param {?DOMNode} outerNode Outer DOM node.
 * @param {?DOMNode} innerNode Inner DOM node.
 * @return {boolean} True if `outerNode` contains or is `innerNode`.
 */
function containsNode(outerNode, innerNode) {
  if (!outerNode || !innerNode) {
    return false;
  } else if (outerNode === innerNode) {
    return true;
  } else if (isTextNode(outerNode)) {
    return false;
  } else if (isTextNode(innerNode)) {
    return containsNode(outerNode, innerNode.parentNode);
  } else if (outerNode.contains) {
    return outerNode.contains(innerNode);
  } else if (outerNode.compareDocumentPosition) {
    return !!(outerNode.compareDocumentPosition(innerNode) & 16);
  } else {
    return false;
  }
}

module.exports = containsNode;

},{"./isTextNode":143}],115:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createArrayFrom
 * @typechecks
 */

var toArray = require("./toArray");

/**
 * Perform a heuristic test to determine if an object is "array-like".
 *
 *   A monk asked Joshu, a Zen master, "Has a dog Buddha nature?"
 *   Joshu replied: "Mu."
 *
 * This function determines if its argument has "array nature": it returns
 * true if the argument is an actual array, an `arguments' object, or an
 * HTMLCollection (e.g. node.childNodes or node.getElementsByTagName()).
 *
 * It will return false for other array-like objects like Filelist.
 *
 * @param {*} obj
 * @return {boolean}
 */
function hasArrayNature(obj) {
  return (
    // not null/false
    !!obj &&
    // arrays are objects, NodeLists are functions in Safari
    (typeof obj == 'object' || typeof obj == 'function') &&
    // quacks like an array
    ('length' in obj) &&
    // not window
    !('setInterval' in obj) &&
    // no DOM node should be considered an array-like
    // a 'select' element has 'length' and 'item' properties on IE8
    (typeof obj.nodeType != 'number') &&
    (
      // a real array
      (// HTMLCollection/NodeList
      (Array.isArray(obj) ||
      // arguments
      ('callee' in obj) || 'item' in obj))
    )
  );
}

/**
 * Ensure that the argument is an array by wrapping it in an array if it is not.
 * Creates a copy of the argument if it is already an array.
 *
 * This is mostly useful idiomatically:
 *
 *   var createArrayFrom = require('createArrayFrom');
 *
 *   function takesOneOrMoreThings(things) {
 *     things = createArrayFrom(things);
 *     ...
 *   }
 *
 * This allows you to treat `things' as an array, but accept scalars in the API.
 *
 * If you need to convert an array-like object, like `arguments`, into an array
 * use toArray instead.
 *
 * @param {*} obj
 * @return {array}
 */
function createArrayFrom(obj) {
  if (!hasArrayNature(obj)) {
    return [obj];
  } else if (Array.isArray(obj)) {
    return obj.slice();
  } else {
    return toArray(obj);
  }
}

module.exports = createArrayFrom;

},{"./toArray":156}],116:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createFullPageComponent
 * @typechecks
 */

"use strict";

// Defeat circular references by requiring this directly.
var ReactCompositeComponent = require("./ReactCompositeComponent");
var ReactElement = require("./ReactElement");

var invariant = require("./invariant");

/**
 * Create a component that will throw an exception when unmounted.
 *
 * Components like <html> <head> and <body> can't be removed or added
 * easily in a cross-browser way, however it's valuable to be able to
 * take advantage of React's reconciliation for styling and <title>
 * management. So we just document it and throw in dangerous cases.
 *
 * @param {string} tag The tag to wrap
 * @return {function} convenience constructor of new component
 */
function createFullPageComponent(tag) {
  var elementFactory = ReactElement.createFactory(tag);

  var FullPageComponent = ReactCompositeComponent.createClass({
    displayName: 'ReactFullPageComponent' + tag,

    componentWillUnmount: function() {
      ("production" !== process.env.NODE_ENV ? invariant(
        false,
        '%s tried to unmount. Because of cross-browser quirks it is ' +
        'impossible to unmount some top-level components (eg <html>, <head>, ' +
        'and <body>) reliably and efficiently. To fix this, have a single ' +
        'top-level component that never unmounts render these elements.',
        this.constructor.displayName
      ) : invariant(false));
    },

    render: function() {
      return elementFactory(this.props);
    }
  });

  return FullPageComponent;
}

module.exports = createFullPageComponent;

},{"./ReactCompositeComponent":47,"./ReactElement":65,"./invariant":139}],117:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule createNodesFromMarkup
 * @typechecks
 */

/*jslint evil: true, sub: true */

var ExecutionEnvironment = require("./ExecutionEnvironment");

var createArrayFrom = require("./createArrayFrom");
var getMarkupWrap = require("./getMarkupWrap");
var invariant = require("./invariant");

/**
 * Dummy container used to render all markup.
 */
var dummyNode =
  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Pattern used by `getNodeName`.
 */
var nodeNamePattern = /^\s*<(\w+)/;

/**
 * Extracts the `nodeName` of the first element in a string of markup.
 *
 * @param {string} markup String of markup.
 * @return {?string} Node name of the supplied markup.
 */
function getNodeName(markup) {
  var nodeNameMatch = markup.match(nodeNamePattern);
  return nodeNameMatch && nodeNameMatch[1].toLowerCase();
}

/**
 * Creates an array containing the nodes rendered from the supplied markup. The
 * optionally supplied `handleScript` function will be invoked once for each
 * <script> element that is rendered. If no `handleScript` function is supplied,
 * an exception is thrown if any <script> elements are rendered.
 *
 * @param {string} markup A string of valid HTML markup.
 * @param {?function} handleScript Invoked once for each rendered <script>.
 * @return {array<DOMElement|DOMTextNode>} An array of rendered nodes.
 */
function createNodesFromMarkup(markup, handleScript) {
  var node = dummyNode;
  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'createNodesFromMarkup dummy not initialized') : invariant(!!dummyNode));
  var nodeName = getNodeName(markup);

  var wrap = nodeName && getMarkupWrap(nodeName);
  if (wrap) {
    node.innerHTML = wrap[1] + markup + wrap[2];

    var wrapDepth = wrap[0];
    while (wrapDepth--) {
      node = node.lastChild;
    }
  } else {
    node.innerHTML = markup;
  }

  var scripts = node.getElementsByTagName('script');
  if (scripts.length) {
    ("production" !== process.env.NODE_ENV ? invariant(
      handleScript,
      'createNodesFromMarkup(...): Unexpected <script> element rendered.'
    ) : invariant(handleScript));
    createArrayFrom(scripts).forEach(handleScript);
  }

  var nodes = createArrayFrom(node.childNodes);
  while (node.lastChild) {
    node.removeChild(node.lastChild);
  }
  return nodes;
}

module.exports = createNodesFromMarkup;

},{"./ExecutionEnvironment":34,"./createArrayFrom":115,"./getMarkupWrap":131,"./invariant":139}],118:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule dangerousStyleValue
 * @typechecks static-only
 */

"use strict";

var CSSProperty = require("./CSSProperty");

var isUnitlessNumber = CSSProperty.isUnitlessNumber;

/**
 * Convert a value into the proper css writable value. The style name `name`
 * should be logical (no hyphens), as specified
 * in `CSSProperty.isUnitlessNumber`.
 *
 * @param {string} name CSS property name such as `topMargin`.
 * @param {*} value CSS property value such as `10px`.
 * @return {string} Normalized style value with dimensions applied.
 */
function dangerousStyleValue(name, value) {
  // Note that we've removed escapeTextForBrowser() calls here since the
  // whole string will be escaped when the attribute is injected into
  // the markup. If you provide unsafe user data here they can inject
  // arbitrary CSS which may be problematic (I couldn't repro this):
  // https://www.owasp.org/index.php/XSS_Filter_Evasion_Cheat_Sheet
  // http://www.thespanner.co.uk/2007/11/26/ultimate-xss-css-injection/
  // This is not an XSS hole but instead a potential CSS injection issue
  // which has lead to a greater discussion about how we're going to
  // trust URLs moving forward. See #2115901

  var isEmpty = value == null || typeof value === 'boolean' || value === '';
  if (isEmpty) {
    return '';
  }

  var isNonNumeric = isNaN(value);
  if (isNonNumeric || value === 0 ||
      isUnitlessNumber.hasOwnProperty(name) && isUnitlessNumber[name]) {
    return '' + value; // cast to string
  }

  if (typeof value === 'string') {
    value = value.trim();
  }
  return value + 'px';
}

module.exports = dangerousStyleValue;

},{"./CSSProperty":16}],119:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule deprecated
 */

var assign = require("./Object.assign");
var warning = require("./warning");

/**
 * This will log a single deprecation notice per function and forward the call
 * on to the new API.
 *
 * @param {string} namespace The namespace of the call, eg 'React'
 * @param {string} oldName The old function name, eg 'renderComponent'
 * @param {string} newName The new function name, eg 'render'
 * @param {*} ctx The context this forwarded call should run in
 * @param {function} fn The function to forward on to
 * @return {*} Will be the value as returned from `fn`
 */
function deprecated(namespace, oldName, newName, ctx, fn) {
  var warned = false;
  if ("production" !== process.env.NODE_ENV) {
    var newFn = function() {
      ("production" !== process.env.NODE_ENV ? warning(
        warned,
        (namespace + "." + oldName + " will be deprecated in a future version. ") +
        ("Use " + namespace + "." + newName + " instead.")
      ) : null);
      warned = true;
      return fn.apply(ctx, arguments);
    };
    newFn.displayName = (namespace + "_" + oldName);
    // We need to make sure all properties of the original fn are copied over.
    // In particular, this is needed to support PropTypes
    return assign(newFn, fn);
  }

  return fn;
}

module.exports = deprecated;

},{"./Object.assign":39,"./warning":158}],120:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyFunction
 */

function makeEmptyFunction(arg) {
  return function() {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
function emptyFunction() {}

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function() { return this; };
emptyFunction.thatReturnsArgument = function(arg) { return arg; };

module.exports = emptyFunction;

},{}],121:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule emptyObject
 */

"use strict";

var emptyObject = {};

if ("production" !== process.env.NODE_ENV) {
  Object.freeze(emptyObject);
}

module.exports = emptyObject;

},{}],122:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule escapeTextForBrowser
 * @typechecks static-only
 */

"use strict";

var ESCAPE_LOOKUP = {
  "&": "&amp;",
  ">": "&gt;",
  "<": "&lt;",
  "\"": "&quot;",
  "'": "&#x27;"
};

var ESCAPE_REGEX = /[&><"']/g;

function escaper(match) {
  return ESCAPE_LOOKUP[match];
}

/**
 * Escapes text to prevent scripting attacks.
 *
 * @param {*} text Text value to escape.
 * @return {string} An escaped string.
 */
function escapeTextForBrowser(text) {
  return ('' + text).replace(ESCAPE_REGEX, escaper);
}

module.exports = escapeTextForBrowser;

},{}],123:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule flattenChildren
 */

"use strict";

var ReactTextComponent = require("./ReactTextComponent");

var traverseAllChildren = require("./traverseAllChildren");
var warning = require("./warning");

/**
 * @param {function} traverseContext Context passed through traversal.
 * @param {?ReactComponent} child React child component.
 * @param {!string} name String name of key path to child.
 */
function flattenSingleChildIntoContext(traverseContext, child, name) {
  // We found a component instance.
  var result = traverseContext;
  var keyUnique = !result.hasOwnProperty(name);
  ("production" !== process.env.NODE_ENV ? warning(
    keyUnique,
    'flattenChildren(...): Encountered two children with the same key, ' +
    '`%s`. Child keys must be unique; when two children share a key, only ' +
    'the first child will be used.',
    name
  ) : null);
  if (keyUnique && child != null) {
    var type = typeof child;
    var normalizedValue;

    if (type === 'string') {
      normalizedValue = ReactTextComponent(child);
    } else if (type === 'number') {
      normalizedValue = ReactTextComponent('' + child);
    } else {
      normalizedValue = child;
    }

    result[name] = normalizedValue;
  }
}

/**
 * Flattens children that are typically specified as `props.children`. Any null
 * children will not be included in the resulting object.
 * @return {!object} flattened children keyed by name.
 */
function flattenChildren(children) {
  if (children == null) {
    return children;
  }
  var result = {};
  traverseAllChildren(children, flattenSingleChildIntoContext, result);
  return result;
}

module.exports = flattenChildren;

},{"./ReactTextComponent":91,"./traverseAllChildren":157,"./warning":158}],124:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule focusNode
 */

"use strict";

/**
 * @param {DOMElement} node input/textarea to focus
 */
function focusNode(node) {
  // IE8 can throw "Can't move focus to the control because it is invisible,
  // not enabled, or of a type that does not accept the focus." for all kinds of
  // reasons that are too expensive and fragile to test.
  try {
    node.focus();
  } catch(e) {
  }
}

module.exports = focusNode;

},{}],125:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule forEachAccumulated
 */

"use strict";

/**
 * @param {array} an "accumulation" of items which is either an Array or
 * a single item. Useful when paired with the `accumulate` module. This is a
 * simple utility that allows us to reason about a collection of items, but
 * handling the case when there is exactly one item (and we do not need to
 * allocate an array).
 */
var forEachAccumulated = function(arr, cb, scope) {
  if (Array.isArray(arr)) {
    arr.forEach(cb, scope);
  } else if (arr) {
    cb.call(scope, arr);
  }
};

module.exports = forEachAccumulated;

},{}],126:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getActiveElement
 * @typechecks
 */

/**
 * Same as document.activeElement but wraps in a try-catch block. In IE it is
 * not safe to call document.activeElement if there is nothing focused.
 *
 * The activeElement will be null only if the document body is not yet defined.
 */
function getActiveElement() /*?DOMElement*/ {
  try {
    return document.activeElement || document.body;
  } catch (e) {
    return document.body;
  }
}

module.exports = getActiveElement;

},{}],127:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventCharCode
 * @typechecks static-only
 */

"use strict";

/**
 * `charCode` represents the actual "character code" and is safe to use with
 * `String.fromCharCode`. As such, only keys that correspond to printable
 * characters produce a valid `charCode`, the only exception to this is Enter.
 * The Tab-key is considered non-printable and does not have a `charCode`,
 * presumably because it does not produce a tab-character in browsers.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `charCode` property.
 */
function getEventCharCode(nativeEvent) {
  var charCode;
  var keyCode = nativeEvent.keyCode;

  if ('charCode' in nativeEvent) {
    charCode = nativeEvent.charCode;

    // FF does not set `charCode` for the Enter-key, check against `keyCode`.
    if (charCode === 0 && keyCode === 13) {
      charCode = 13;
    }
  } else {
    // IE8 does not implement `charCode`, but `keyCode` has the correct value.
    charCode = keyCode;
  }

  // Some non-printable keys are reported in `charCode`/`keyCode`, discard them.
  // Must not discard the (non-)printable Enter-key.
  if (charCode >= 32 || charCode === 13) {
    return charCode;
  }

  return 0;
}

module.exports = getEventCharCode;

},{}],128:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventKey
 * @typechecks static-only
 */

"use strict";

var getEventCharCode = require("./getEventCharCode");

/**
 * Normalization of deprecated HTML5 `key` values
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var normalizeKey = {
  'Esc': 'Escape',
  'Spacebar': ' ',
  'Left': 'ArrowLeft',
  'Up': 'ArrowUp',
  'Right': 'ArrowRight',
  'Down': 'ArrowDown',
  'Del': 'Delete',
  'Win': 'OS',
  'Menu': 'ContextMenu',
  'Apps': 'ContextMenu',
  'Scroll': 'ScrollLock',
  'MozPrintableKey': 'Unidentified'
};

/**
 * Translation from legacy `keyCode` to HTML5 `key`
 * Only special keys supported, all others depend on keyboard layout or browser
 * @see https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent#Key_names
 */
var translateToKey = {
  8: 'Backspace',
  9: 'Tab',
  12: 'Clear',
  13: 'Enter',
  16: 'Shift',
  17: 'Control',
  18: 'Alt',
  19: 'Pause',
  20: 'CapsLock',
  27: 'Escape',
  32: ' ',
  33: 'PageUp',
  34: 'PageDown',
  35: 'End',
  36: 'Home',
  37: 'ArrowLeft',
  38: 'ArrowUp',
  39: 'ArrowRight',
  40: 'ArrowDown',
  45: 'Insert',
  46: 'Delete',
  112: 'F1', 113: 'F2', 114: 'F3', 115: 'F4', 116: 'F5', 117: 'F6',
  118: 'F7', 119: 'F8', 120: 'F9', 121: 'F10', 122: 'F11', 123: 'F12',
  144: 'NumLock',
  145: 'ScrollLock',
  224: 'Meta'
};

/**
 * @param {object} nativeEvent Native browser event.
 * @return {string} Normalized `key` property.
 */
function getEventKey(nativeEvent) {
  if (nativeEvent.key) {
    // Normalize inconsistent values reported by browsers due to
    // implementations of a working draft specification.

    // FireFox implements `key` but returns `MozPrintableKey` for all
    // printable characters (normalized to `Unidentified`), ignore it.
    var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
    if (key !== 'Unidentified') {
      return key;
    }
  }

  // Browser does not implement `key`, polyfill as much of it as we can.
  if (nativeEvent.type === 'keypress') {
    var charCode = getEventCharCode(nativeEvent);

    // The enter-key is technically both printable and non-printable and can
    // thus be captured by `keypress`, no other non-printable key should.
    return charCode === 13 ? 'Enter' : String.fromCharCode(charCode);
  }
  if (nativeEvent.type === 'keydown' || nativeEvent.type === 'keyup') {
    // While user keyboard layout determines the actual meaning of each
    // `keyCode` value, almost all function keys have a universal value.
    return translateToKey[nativeEvent.keyCode] || 'Unidentified';
  }
  return '';
}

module.exports = getEventKey;

},{"./getEventCharCode":127}],129:[function(require,module,exports){
/**
 * Copyright 2013 Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventModifierState
 * @typechecks static-only
 */

"use strict";

/**
 * Translation from modifier key to the associated property in the event.
 * @see http://www.w3.org/TR/DOM-Level-3-Events/#keys-Modifiers
 */

var modifierKeyToProp = {
  'Alt': 'altKey',
  'Control': 'ctrlKey',
  'Meta': 'metaKey',
  'Shift': 'shiftKey'
};

// IE8 does not implement getModifierState so we simply map it to the only
// modifier keys exposed by the event itself, does not support Lock-keys.
// Currently, all major browsers except Chrome seems to support Lock-keys.
function modifierStateGetter(keyArg) {
  /*jshint validthis:true */
  var syntheticEvent = this;
  var nativeEvent = syntheticEvent.nativeEvent;
  if (nativeEvent.getModifierState) {
    return nativeEvent.getModifierState(keyArg);
  }
  var keyProp = modifierKeyToProp[keyArg];
  return keyProp ? !!nativeEvent[keyProp] : false;
}

function getEventModifierState(nativeEvent) {
  return modifierStateGetter;
}

module.exports = getEventModifierState;

},{}],130:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getEventTarget
 * @typechecks static-only
 */

"use strict";

/**
 * Gets the target node from a native browser event by accounting for
 * inconsistencies in browser DOM APIs.
 *
 * @param {object} nativeEvent Native browser event.
 * @return {DOMEventTarget} Target node.
 */
function getEventTarget(nativeEvent) {
  var target = nativeEvent.target || nativeEvent.srcElement || window;
  // Safari may fire events on text nodes (Node.TEXT_NODE is 3).
  // @see http://www.quirksmode.org/js/events_properties.html
  return target.nodeType === 3 ? target.parentNode : target;
}

module.exports = getEventTarget;

},{}],131:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getMarkupWrap
 */

var ExecutionEnvironment = require("./ExecutionEnvironment");

var invariant = require("./invariant");

/**
 * Dummy container used to detect which wraps are necessary.
 */
var dummyNode =
  ExecutionEnvironment.canUseDOM ? document.createElement('div') : null;

/**
 * Some browsers cannot use `innerHTML` to render certain elements standalone,
 * so we wrap them, render the wrapped nodes, then extract the desired node.
 *
 * In IE8, certain elements cannot render alone, so wrap all elements ('*').
 */
var shouldWrap = {
  // Force wrapping for SVG elements because if they get created inside a <div>,
  // they will be initialized in the wrong namespace (and will not display).
  'circle': true,
  'defs': true,
  'ellipse': true,
  'g': true,
  'line': true,
  'linearGradient': true,
  'path': true,
  'polygon': true,
  'polyline': true,
  'radialGradient': true,
  'rect': true,
  'stop': true,
  'text': true
};

var selectWrap = [1, '<select multiple="true">', '</select>'];
var tableWrap = [1, '<table>', '</table>'];
var trWrap = [3, '<table><tbody><tr>', '</tr></tbody></table>'];

var svgWrap = [1, '<svg>', '</svg>'];

var markupWrap = {
  '*': [1, '?<div>', '</div>'],

  'area': [1, '<map>', '</map>'],
  'col': [2, '<table><tbody></tbody><colgroup>', '</colgroup></table>'],
  'legend': [1, '<fieldset>', '</fieldset>'],
  'param': [1, '<object>', '</object>'],
  'tr': [2, '<table><tbody>', '</tbody></table>'],

  'optgroup': selectWrap,
  'option': selectWrap,

  'caption': tableWrap,
  'colgroup': tableWrap,
  'tbody': tableWrap,
  'tfoot': tableWrap,
  'thead': tableWrap,

  'td': trWrap,
  'th': trWrap,

  'circle': svgWrap,
  'defs': svgWrap,
  'ellipse': svgWrap,
  'g': svgWrap,
  'line': svgWrap,
  'linearGradient': svgWrap,
  'path': svgWrap,
  'polygon': svgWrap,
  'polyline': svgWrap,
  'radialGradient': svgWrap,
  'rect': svgWrap,
  'stop': svgWrap,
  'text': svgWrap
};

/**
 * Gets the markup wrap configuration for the supplied `nodeName`.
 *
 * NOTE: This lazily detects which wraps are necessary for the current browser.
 *
 * @param {string} nodeName Lowercase `nodeName`.
 * @return {?array} Markup wrap configuration, if applicable.
 */
function getMarkupWrap(nodeName) {
  ("production" !== process.env.NODE_ENV ? invariant(!!dummyNode, 'Markup wrapping node not initialized') : invariant(!!dummyNode));
  if (!markupWrap.hasOwnProperty(nodeName)) {
    nodeName = '*';
  }
  if (!shouldWrap.hasOwnProperty(nodeName)) {
    if (nodeName === '*') {
      dummyNode.innerHTML = '<link />';
    } else {
      dummyNode.innerHTML = '<' + nodeName + '></' + nodeName + '>';
    }
    shouldWrap[nodeName] = !dummyNode.firstChild;
  }
  return shouldWrap[nodeName] ? markupWrap[nodeName] : null;
}


module.exports = getMarkupWrap;

},{"./ExecutionEnvironment":34,"./invariant":139}],132:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getNodeForCharacterOffset
 */

"use strict";

/**
 * Given any node return the first leaf node without children.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {DOMElement|DOMTextNode}
 */
function getLeafNode(node) {
  while (node && node.firstChild) {
    node = node.firstChild;
  }
  return node;
}

/**
 * Get the next sibling within a container. This will walk up the
 * DOM if a node's siblings have been exhausted.
 *
 * @param {DOMElement|DOMTextNode} node
 * @return {?DOMElement|DOMTextNode}
 */
function getSiblingNode(node) {
  while (node) {
    if (node.nextSibling) {
      return node.nextSibling;
    }
    node = node.parentNode;
  }
}

/**
 * Get object describing the nodes which contain characters at offset.
 *
 * @param {DOMElement|DOMTextNode} root
 * @param {number} offset
 * @return {?object}
 */
function getNodeForCharacterOffset(root, offset) {
  var node = getLeafNode(root);
  var nodeStart = 0;
  var nodeEnd = 0;

  while (node) {
    if (node.nodeType == 3) {
      nodeEnd = nodeStart + node.textContent.length;

      if (nodeStart <= offset && nodeEnd >= offset) {
        return {
          node: node,
          offset: offset - nodeStart
        };
      }

      nodeStart = nodeEnd;
    }

    node = getLeafNode(getSiblingNode(node));
  }
}

module.exports = getNodeForCharacterOffset;

},{}],133:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getReactRootElementInContainer
 */

"use strict";

var DOC_NODE_TYPE = 9;

/**
 * @param {DOMElement|DOMDocument} container DOM element that may contain
 *                                           a React component
 * @return {?*} DOM element that may have the reactRoot ID, or null.
 */
function getReactRootElementInContainer(container) {
  if (!container) {
    return null;
  }

  if (container.nodeType === DOC_NODE_TYPE) {
    return container.documentElement;
  } else {
    return container.firstChild;
  }
}

module.exports = getReactRootElementInContainer;

},{}],134:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getTextContentAccessor
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var contentKey = null;

/**
 * Gets the key used to access text content on a DOM node.
 *
 * @return {?string} Key used to access text content.
 * @internal
 */
function getTextContentAccessor() {
  if (!contentKey && ExecutionEnvironment.canUseDOM) {
    // Prefer textContent to innerText because many browsers support both but
    // SVG <text> elements don't support innerText even when <div> does.
    contentKey = 'textContent' in document.documentElement ?
      'textContent' :
      'innerText';
  }
  return contentKey;
}

module.exports = getTextContentAccessor;

},{"./ExecutionEnvironment":34}],135:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule getUnboundedScrollPosition
 * @typechecks
 */

"use strict";

/**
 * Gets the scroll position of the supplied element or window.
 *
 * The return values are unbounded, unlike `getScrollPosition`. This means they
 * may be negative or exceed the element boundaries (which is possible using
 * inertial scrolling).
 *
 * @param {DOMWindow|DOMElement} scrollable
 * @return {object} Map with `x` and `y` keys.
 */
function getUnboundedScrollPosition(scrollable) {
  if (scrollable === window) {
    return {
      x: window.pageXOffset || document.documentElement.scrollLeft,
      y: window.pageYOffset || document.documentElement.scrollTop
    };
  }
  return {
    x: scrollable.scrollLeft,
    y: scrollable.scrollTop
  };
}

module.exports = getUnboundedScrollPosition;

},{}],136:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenate
 * @typechecks
 */

var _uppercasePattern = /([A-Z])/g;

/**
 * Hyphenates a camelcased string, for example:
 *
 *   > hyphenate('backgroundColor')
 *   < "background-color"
 *
 * For CSS style names, use `hyphenateStyleName` instead which works properly
 * with all vendor prefixes, including `ms`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenate(string) {
  return string.replace(_uppercasePattern, '-$1').toLowerCase();
}

module.exports = hyphenate;

},{}],137:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule hyphenateStyleName
 * @typechecks
 */

"use strict";

var hyphenate = require("./hyphenate");

var msPattern = /^ms-/;

/**
 * Hyphenates a camelcased CSS property name, for example:
 *
 *   > hyphenateStyleName('backgroundColor')
 *   < "background-color"
 *   > hyphenateStyleName('MozTransition')
 *   < "-moz-transition"
 *   > hyphenateStyleName('msTransition')
 *   < "-ms-transition"
 *
 * As Modernizr suggests (http://modernizr.com/docs/#prefixed), an `ms` prefix
 * is converted to `-ms-`.
 *
 * @param {string} string
 * @return {string}
 */
function hyphenateStyleName(string) {
  return hyphenate(string).replace(msPattern, '-ms-');
}

module.exports = hyphenateStyleName;

},{"./hyphenate":136}],138:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule instantiateReactComponent
 * @typechecks static-only
 */

"use strict";

var warning = require("./warning");

var ReactElement = require("./ReactElement");
var ReactLegacyElement = require("./ReactLegacyElement");
var ReactNativeComponent = require("./ReactNativeComponent");
var ReactEmptyComponent = require("./ReactEmptyComponent");

/**
 * Given an `element` create an instance that will actually be mounted.
 *
 * @param {object} element
 * @param {*} parentCompositeType The composite type that resolved this.
 * @return {object} A new instance of the element's constructor.
 * @protected
 */
function instantiateReactComponent(element, parentCompositeType) {
  var instance;

  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      element && (typeof element.type === 'function' ||
                     typeof element.type === 'string'),
      'Only functions or strings can be mounted as React components.'
    ) : null);

    // Resolve mock instances
    if (element.type._mockedReactClassConstructor) {
      // If this is a mocked class, we treat the legacy factory as if it was the
      // class constructor for future proofing unit tests. Because this might
      // be mocked as a legacy factory, we ignore any warnings triggerd by
      // this temporary hack.
      ReactLegacyElement._isLegacyCallWarningEnabled = false;
      try {
        instance = new element.type._mockedReactClassConstructor(
          element.props
        );
      } finally {
        ReactLegacyElement._isLegacyCallWarningEnabled = true;
      }

      // If the mock implementation was a legacy factory, then it returns a
      // element. We need to turn this into a real component instance.
      if (ReactElement.isValidElement(instance)) {
        instance = new instance.type(instance.props);
      }

      var render = instance.render;
      if (!render) {
        // For auto-mocked factories, the prototype isn't shimmed and therefore
        // there is no render function on the instance. We replace the whole
        // component with an empty component instance instead.
        element = ReactEmptyComponent.getEmptyComponent();
      } else {
        if (render._isMockFunction && !render._getMockImplementation()) {
          // Auto-mocked components may have a prototype with a mocked render
          // function. For those, we'll need to mock the result of the render
          // since we consider undefined to be invalid results from render.
          render.mockImplementation(
            ReactEmptyComponent.getEmptyComponent
          );
        }
        instance.construct(element);
        return instance;
      }
    }
  }

  // Special case string values
  if (typeof element.type === 'string') {
    instance = ReactNativeComponent.createInstanceForTag(
      element.type,
      element.props,
      parentCompositeType
    );
  } else {
    // Normal case for non-mocks and non-strings
    instance = new element.type(element.props);
  }

  if ("production" !== process.env.NODE_ENV) {
    ("production" !== process.env.NODE_ENV ? warning(
      typeof instance.construct === 'function' &&
      typeof instance.mountComponent === 'function' &&
      typeof instance.receiveComponent === 'function',
      'Only React Components can be mounted.'
    ) : null);
  }

  // This actually sets up the internal instance. This will become decoupled
  // from the public instance in a future diff.
  instance.construct(element);

  return instance;
}

module.exports = instantiateReactComponent;

},{"./ReactElement":65,"./ReactEmptyComponent":67,"./ReactLegacyElement":74,"./ReactNativeComponent":79,"./warning":158}],139:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule invariant
 */

"use strict";

/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if ("production" !== process.env.NODE_ENV) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        'Invariant Violation: ' +
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

},{}],140:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isEventSupported
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var useHasFeature;
if (ExecutionEnvironment.canUseDOM) {
  useHasFeature =
    document.implementation &&
    document.implementation.hasFeature &&
    // always returns true in newer browsers as per the standard.
    // @see http://dom.spec.whatwg.org/#dom-domimplementation-hasfeature
    document.implementation.hasFeature('', '') !== true;
}

/**
 * Checks if an event is supported in the current execution environment.
 *
 * NOTE: This will not work correctly for non-generic events such as `change`,
 * `reset`, `load`, `error`, and `select`.
 *
 * Borrows from Modernizr.
 *
 * @param {string} eventNameSuffix Event name, e.g. "click".
 * @param {?boolean} capture Check if the capture phase is supported.
 * @return {boolean} True if the event is supported.
 * @internal
 * @license Modernizr 3.0.0pre (Custom Build) | MIT
 */
function isEventSupported(eventNameSuffix, capture) {
  if (!ExecutionEnvironment.canUseDOM ||
      capture && !('addEventListener' in document)) {
    return false;
  }

  var eventName = 'on' + eventNameSuffix;
  var isSupported = eventName in document;

  if (!isSupported) {
    var element = document.createElement('div');
    element.setAttribute(eventName, 'return;');
    isSupported = typeof element[eventName] === 'function';
  }

  if (!isSupported && useHasFeature && eventNameSuffix === 'wheel') {
    // This is the only way to test support for the `wheel` event in IE9+.
    isSupported = document.implementation.hasFeature('Events.wheel', '3.0');
  }

  return isSupported;
}

module.exports = isEventSupported;

},{"./ExecutionEnvironment":34}],141:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isNode
 * @typechecks
 */

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM node.
 */
function isNode(object) {
  return !!(object && (
    typeof Node === 'function' ? object instanceof Node :
      typeof object === 'object' &&
      typeof object.nodeType === 'number' &&
      typeof object.nodeName === 'string'
  ));
}

module.exports = isNode;

},{}],142:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextInputElement
 */

"use strict";

/**
 * @see http://www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary
 */
var supportedInputTypes = {
  'color': true,
  'date': true,
  'datetime': true,
  'datetime-local': true,
  'email': true,
  'month': true,
  'number': true,
  'password': true,
  'range': true,
  'search': true,
  'tel': true,
  'text': true,
  'time': true,
  'url': true,
  'week': true
};

function isTextInputElement(elem) {
  return elem && (
    (elem.nodeName === 'INPUT' && supportedInputTypes[elem.type]) ||
    elem.nodeName === 'TEXTAREA'
  );
}

module.exports = isTextInputElement;

},{}],143:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule isTextNode
 * @typechecks
 */

var isNode = require("./isNode");

/**
 * @param {*} object The object to check.
 * @return {boolean} Whether or not the object is a DOM text node.
 */
function isTextNode(object) {
  return isNode(object) && object.nodeType == 3;
}

module.exports = isTextNode;

},{"./isNode":141}],144:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule joinClasses
 * @typechecks static-only
 */

"use strict";

/**
 * Combines multiple className strings into one.
 * http://jsperf.com/joinclasses-args-vs-array
 *
 * @param {...?string} classes
 * @return {string}
 */
function joinClasses(className/*, ... */) {
  if (!className) {
    className = '';
  }
  var nextClass;
  var argLength = arguments.length;
  if (argLength > 1) {
    for (var ii = 1; ii < argLength; ii++) {
      nextClass = arguments[ii];
      if (nextClass) {
        className = (className ? className + ' ' : '') + nextClass;
      }
    }
  }
  return className;
}

module.exports = joinClasses;

},{}],145:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyMirror
 * @typechecks static-only
 */

"use strict";

var invariant = require("./invariant");

/**
 * Constructs an enumeration with keys equal to their value.
 *
 * For example:
 *
 *   var COLORS = keyMirror({blue: null, red: null});
 *   var myColor = COLORS.blue;
 *   var isColorValid = !!COLORS[myColor];
 *
 * The last line could not be performed if the values of the generated enum were
 * not equal to their keys.
 *
 *   Input:  {key1: val1, key2: val2}
 *   Output: {key1: key1, key2: key2}
 *
 * @param {object} obj
 * @return {object}
 */
var keyMirror = function(obj) {
  var ret = {};
  var key;
  ("production" !== process.env.NODE_ENV ? invariant(
    obj instanceof Object && !Array.isArray(obj),
    'keyMirror(...): Argument must be an object.'
  ) : invariant(obj instanceof Object && !Array.isArray(obj)));
  for (key in obj) {
    if (!obj.hasOwnProperty(key)) {
      continue;
    }
    ret[key] = key;
  }
  return ret;
};

module.exports = keyMirror;

},{"./invariant":139}],146:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule keyOf
 */

/**
 * Allows extraction of a minified key. Let's the build system minify keys
 * without loosing the ability to dynamically use key strings as values
 * themselves. Pass in an object with a single key/val pair and it will return
 * you the string key of that single record. Suppose you want to grab the
 * value for a key 'className' inside of an object. Key/val minification may
 * have aliased that key to be 'xa12'. keyOf({className: null}) will return
 * 'xa12' in that case. Resolve keys you want to use once at startup time, then
 * reuse those resolutions.
 */
var keyOf = function(oneKeyObj) {
  var key;
  for (key in oneKeyObj) {
    if (!oneKeyObj.hasOwnProperty(key)) {
      continue;
    }
    return key;
  }
  return null;
};


module.exports = keyOf;

},{}],147:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule mapObject
 */

'use strict';

var hasOwnProperty = Object.prototype.hasOwnProperty;

/**
 * Executes the provided `callback` once for each enumerable own property in the
 * object and constructs a new object from the results. The `callback` is
 * invoked with three arguments:
 *
 *  - the property value
 *  - the property name
 *  - the object being traversed
 *
 * Properties that are added after the call to `mapObject` will not be visited
 * by `callback`. If the values of existing properties are changed, the value
 * passed to `callback` will be the value at the time `mapObject` visits them.
 * Properties that are deleted before being visited are not visited.
 *
 * @grep function objectMap()
 * @grep function objMap()
 *
 * @param {?object} object
 * @param {function} callback
 * @param {*} context
 * @return {?object}
 */
function mapObject(object, callback, context) {
  if (!object) {
    return null;
  }
  var result = {};
  for (var name in object) {
    if (hasOwnProperty.call(object, name)) {
      result[name] = callback.call(context, object[name], name, object);
    }
  }
  return result;
}

module.exports = mapObject;

},{}],148:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule memoizeStringOnly
 * @typechecks static-only
 */

"use strict";

/**
 * Memoizes the return value of a function that accepts one string argument.
 *
 * @param {function} callback
 * @return {function}
 */
function memoizeStringOnly(callback) {
  var cache = {};
  return function(string) {
    if (cache.hasOwnProperty(string)) {
      return cache[string];
    } else {
      return cache[string] = callback.call(this, string);
    }
  };
}

module.exports = memoizeStringOnly;

},{}],149:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule monitorCodeUse
 */

"use strict";

var invariant = require("./invariant");

/**
 * Provides open-source compatible instrumentation for monitoring certain API
 * uses before we're ready to issue a warning or refactor. It accepts an event
 * name which may only contain the characters [a-z0-9_] and an optional data
 * object with further information.
 */

function monitorCodeUse(eventName, data) {
  ("production" !== process.env.NODE_ENV ? invariant(
    eventName && !/[^a-z0-9_]/.test(eventName),
    'You must provide an eventName using only the characters [a-z0-9_]'
  ) : invariant(eventName && !/[^a-z0-9_]/.test(eventName)));
}

module.exports = monitorCodeUse;

},{"./invariant":139}],150:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule onlyChild
 */
"use strict";

var ReactElement = require("./ReactElement");

var invariant = require("./invariant");

/**
 * Returns the first child in a collection of children and verifies that there
 * is only one child in the collection. The current implementation of this
 * function assumes that a single child gets passed without a wrapper, but the
 * purpose of this helper function is to abstract away the particular structure
 * of children.
 *
 * @param {?object} children Child collection structure.
 * @return {ReactComponent} The first and only `ReactComponent` contained in the
 * structure.
 */
function onlyChild(children) {
  ("production" !== process.env.NODE_ENV ? invariant(
    ReactElement.isValidElement(children),
    'onlyChild must be passed a children with exactly one child.'
  ) : invariant(ReactElement.isValidElement(children)));
  return children;
}

module.exports = onlyChild;

},{"./ReactElement":65,"./invariant":139}],151:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performance
 * @typechecks
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var performance;

if (ExecutionEnvironment.canUseDOM) {
  performance =
    window.performance ||
    window.msPerformance ||
    window.webkitPerformance;
}

module.exports = performance || {};

},{"./ExecutionEnvironment":34}],152:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule performanceNow
 * @typechecks
 */

var performance = require("./performance");

/**
 * Detect if we can use `window.performance.now()` and gracefully fallback to
 * `Date.now()` if it doesn't exist. We need to support Firefox < 15 for now
 * because of Facebook's testing infrastructure.
 */
if (!performance || !performance.now) {
  performance = Date;
}

var performanceNow = performance.now.bind(performance);

module.exports = performanceNow;

},{"./performance":151}],153:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule setInnerHTML
 */

"use strict";

var ExecutionEnvironment = require("./ExecutionEnvironment");

var WHITESPACE_TEST = /^[ \r\n\t\f]/;
var NONVISIBLE_TEST = /<(!--|link|noscript|meta|script|style)[ \r\n\t\f\/>]/;

/**
 * Set the innerHTML property of a node, ensuring that whitespace is preserved
 * even in IE8.
 *
 * @param {DOMElement} node
 * @param {string} html
 * @internal
 */
var setInnerHTML = function(node, html) {
  node.innerHTML = html;
};

if (ExecutionEnvironment.canUseDOM) {
  // IE8: When updating a just created node with innerHTML only leading
  // whitespace is removed. When updating an existing node with innerHTML
  // whitespace in root TextNodes is also collapsed.
  // @see quirksmode.org/bugreports/archives/2004/11/innerhtml_and_t.html

  // Feature detection; only IE8 is known to behave improperly like this.
  var testElement = document.createElement('div');
  testElement.innerHTML = ' ';
  if (testElement.innerHTML === '') {
    setInnerHTML = function(node, html) {
      // Magic theory: IE8 supposedly differentiates between added and updated
      // nodes when processing innerHTML, innerHTML on updated nodes suffers
      // from worse whitespace behavior. Re-adding a node like this triggers
      // the initial and more favorable whitespace behavior.
      // TODO: What to do on a detached node?
      if (node.parentNode) {
        node.parentNode.replaceChild(node, node);
      }

      // We also implement a workaround for non-visible tags disappearing into
      // thin air on IE8, this only happens if there is no visible text
      // in-front of the non-visible tags. Piggyback on the whitespace fix
      // and simply check if any non-visible tags appear in the source.
      if (WHITESPACE_TEST.test(html) ||
          html[0] === '<' && NONVISIBLE_TEST.test(html)) {
        // Recover leading whitespace by temporarily prepending any character.
        // \uFEFF has the potential advantage of being zero-width/invisible.
        node.innerHTML = '\uFEFF' + html;

        // deleteData leaves an empty `TextNode` which offsets the index of all
        // children. Definitely want to avoid this.
        var textNode = node.firstChild;
        if (textNode.data.length === 1) {
          node.removeChild(textNode);
        } else {
          textNode.deleteData(0, 1);
        }
      } else {
        node.innerHTML = html;
      }
    };
  }
}

module.exports = setInnerHTML;

},{"./ExecutionEnvironment":34}],154:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shallowEqual
 */

"use strict";

/**
 * Performs equality by iterating through keys on an object and returning
 * false when any key has values which are not strictly equal between
 * objA and objB. Returns true when the values of all keys are strictly equal.
 *
 * @return {boolean}
 */
function shallowEqual(objA, objB) {
  if (objA === objB) {
    return true;
  }
  var key;
  // Test for A's keys different from B.
  for (key in objA) {
    if (objA.hasOwnProperty(key) &&
        (!objB.hasOwnProperty(key) || objA[key] !== objB[key])) {
      return false;
    }
  }
  // Test for B's keys missing from A.
  for (key in objB) {
    if (objB.hasOwnProperty(key) && !objA.hasOwnProperty(key)) {
      return false;
    }
  }
  return true;
}

module.exports = shallowEqual;

},{}],155:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule shouldUpdateReactComponent
 * @typechecks static-only
 */

"use strict";

/**
 * Given a `prevElement` and `nextElement`, determines if the existing
 * instance should be updated as opposed to being destroyed or replaced by a new
 * instance. Both arguments are elements. This ensures that this logic can
 * operate on stateless trees without any backing instance.
 *
 * @param {?object} prevElement
 * @param {?object} nextElement
 * @return {boolean} True if the existing instance should be updated.
 * @protected
 */
function shouldUpdateReactComponent(prevElement, nextElement) {
  if (prevElement && nextElement &&
      prevElement.type === nextElement.type &&
      prevElement.key === nextElement.key &&
      prevElement._owner === nextElement._owner) {
    return true;
  }
  return false;
}

module.exports = shouldUpdateReactComponent;

},{}],156:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule toArray
 * @typechecks
 */

var invariant = require("./invariant");

/**
 * Convert array-like objects to arrays.
 *
 * This API assumes the caller knows the contents of the data type. For less
 * well defined inputs use createArrayFrom.
 *
 * @param {object|function|filelist} obj
 * @return {array}
 */
function toArray(obj) {
  var length = obj.length;

  // Some browse builtin objects can report typeof 'function' (e.g. NodeList in
  // old versions of Safari).
  ("production" !== process.env.NODE_ENV ? invariant(
    !Array.isArray(obj) &&
    (typeof obj === 'object' || typeof obj === 'function'),
    'toArray: Array-like object expected'
  ) : invariant(!Array.isArray(obj) &&
  (typeof obj === 'object' || typeof obj === 'function')));

  ("production" !== process.env.NODE_ENV ? invariant(
    typeof length === 'number',
    'toArray: Object needs a length property'
  ) : invariant(typeof length === 'number'));

  ("production" !== process.env.NODE_ENV ? invariant(
    length === 0 ||
    (length - 1) in obj,
    'toArray: Object should have keys for indices'
  ) : invariant(length === 0 ||
  (length - 1) in obj));

  // Old IE doesn't give collections access to hasOwnProperty. Assume inputs
  // without method will throw during the slice call and skip straight to the
  // fallback.
  if (obj.hasOwnProperty) {
    try {
      return Array.prototype.slice.call(obj);
    } catch (e) {
      // IE < 9 does not support Array#slice on collections objects
    }
  }

  // Fall back to copying key by key. This assumes all keys have a value,
  // so will not preserve sparsely populated inputs.
  var ret = Array(length);
  for (var ii = 0; ii < length; ii++) {
    ret[ii] = obj[ii];
  }
  return ret;
}

module.exports = toArray;

},{"./invariant":139}],157:[function(require,module,exports){
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule traverseAllChildren
 */

"use strict";

var ReactElement = require("./ReactElement");
var ReactInstanceHandles = require("./ReactInstanceHandles");

var invariant = require("./invariant");

var SEPARATOR = ReactInstanceHandles.SEPARATOR;
var SUBSEPARATOR = ':';

/**
 * TODO: Test that:
 * 1. `mapChildren` transforms strings and numbers into `ReactTextComponent`.
 * 2. it('should fail when supplied duplicate key', function() {
 * 3. That a single child and an array with one item have the same key pattern.
 * });
 */

var userProvidedKeyEscaperLookup = {
  '=': '=0',
  '.': '=1',
  ':': '=2'
};

var userProvidedKeyEscapeRegex = /[=.:]/g;

function userProvidedKeyEscaper(match) {
  return userProvidedKeyEscaperLookup[match];
}

/**
 * Generate a key string that identifies a component within a set.
 *
 * @param {*} component A component that could contain a manual key.
 * @param {number} index Index that is used if a manual key is not provided.
 * @return {string}
 */
function getComponentKey(component, index) {
  if (component && component.key != null) {
    // Explicit key
    return wrapUserProvidedKey(component.key);
  }
  // Implicit key determined by the index in the set
  return index.toString(36);
}

/**
 * Escape a component key so that it is safe to use in a reactid.
 *
 * @param {*} key Component key to be escaped.
 * @return {string} An escaped string.
 */
function escapeUserProvidedKey(text) {
  return ('' + text).replace(
    userProvidedKeyEscapeRegex,
    userProvidedKeyEscaper
  );
}

/**
 * Wrap a `key` value explicitly provided by the user to distinguish it from
 * implicitly-generated keys generated by a component's index in its parent.
 *
 * @param {string} key Value of a user-provided `key` attribute
 * @return {string}
 */
function wrapUserProvidedKey(key) {
  return '$' + escapeUserProvidedKey(key);
}

/**
 * @param {?*} children Children tree container.
 * @param {!string} nameSoFar Name of the key path so far.
 * @param {!number} indexSoFar Number of children encountered until this point.
 * @param {!function} callback Callback to invoke with each child found.
 * @param {?*} traverseContext Used to pass information throughout the traversal
 * process.
 * @return {!number} The number of children in this subtree.
 */
var traverseAllChildrenImpl =
  function(children, nameSoFar, indexSoFar, callback, traverseContext) {
    var nextName, nextIndex;
    var subtreeCount = 0;  // Count of children found in the current subtree.
    if (Array.isArray(children)) {
      for (var i = 0; i < children.length; i++) {
        var child = children[i];
        nextName = (
          nameSoFar +
          (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
          getComponentKey(child, i)
        );
        nextIndex = indexSoFar + subtreeCount;
        subtreeCount += traverseAllChildrenImpl(
          child,
          nextName,
          nextIndex,
          callback,
          traverseContext
        );
      }
    } else {
      var type = typeof children;
      var isOnlyChild = nameSoFar === '';
      // If it's the only child, treat the name as if it was wrapped in an array
      // so that it's consistent if the number of children grows
      var storageName =
        isOnlyChild ? SEPARATOR + getComponentKey(children, 0) : nameSoFar;
      if (children == null || type === 'boolean') {
        // All of the above are perceived as null.
        callback(traverseContext, null, storageName, indexSoFar);
        subtreeCount = 1;
      } else if (type === 'string' || type === 'number' ||
                 ReactElement.isValidElement(children)) {
        callback(traverseContext, children, storageName, indexSoFar);
        subtreeCount = 1;
      } else if (type === 'object') {
        ("production" !== process.env.NODE_ENV ? invariant(
          !children || children.nodeType !== 1,
          'traverseAllChildren(...): Encountered an invalid child; DOM ' +
          'elements are not valid children of React components.'
        ) : invariant(!children || children.nodeType !== 1));
        for (var key in children) {
          if (children.hasOwnProperty(key)) {
            nextName = (
              nameSoFar + (nameSoFar ? SUBSEPARATOR : SEPARATOR) +
              wrapUserProvidedKey(key) + SUBSEPARATOR +
              getComponentKey(children[key], 0)
            );
            nextIndex = indexSoFar + subtreeCount;
            subtreeCount += traverseAllChildrenImpl(
              children[key],
              nextName,
              nextIndex,
              callback,
              traverseContext
            );
          }
        }
      }
    }
    return subtreeCount;
  };

/**
 * Traverses children that are typically specified as `props.children`, but
 * might also be specified through attributes:
 *
 * - `traverseAllChildren(this.props.children, ...)`
 * - `traverseAllChildren(this.props.leftPanelChildren, ...)`
 *
 * The `traverseContext` is an optional argument that is passed through the
 * entire traversal. It can be used to store accumulations or anything else that
 * the callback might find relevant.
 *
 * @param {?*} children Children tree object.
 * @param {!function} callback To invoke upon traversing each child.
 * @param {?*} traverseContext Context for traversal.
 * @return {!number} The number of children in this subtree.
 */
function traverseAllChildren(children, callback, traverseContext) {
  if (children == null) {
    return 0;
  }

  return traverseAllChildrenImpl(children, '', 0, callback, traverseContext);
}

module.exports = traverseAllChildren;

},{"./ReactElement":65,"./ReactInstanceHandles":73,"./invariant":139}],158:[function(require,module,exports){
/**
 * Copyright 2014, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @providesModule warning
 */

"use strict";

var emptyFunction = require("./emptyFunction");

/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = emptyFunction;

if ("production" !== process.env.NODE_ENV) {
  warning = function(condition, format ) {for (var args=[],$__0=2,$__1=arguments.length;$__0<$__1;$__0++) args.push(arguments[$__0]);
    if (format === undefined) {
      throw new Error(
        '`warning(condition, format, ...args)` requires a warning ' +
        'message argument'
      );
    }

    if (!condition) {
      var argIndex = 0;
      console.warn('Warning: ' + format.replace(/%s/g, function()  {return args[argIndex++];}));
    }
  };
}

module.exports = warning;

},{"./emptyFunction":120}],159:[function(require,module,exports){
module.exports = require('./lib/React');

},{"./lib/React":41}]},{},[1]);
