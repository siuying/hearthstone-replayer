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

class Player {
    constructor(id, name, firstPlayer, hero, power) {
        this.id = id;
        this.name = name;
        this.firstPlayer = firstPlayer;
        this.hero = hero;
        this.power = power;
    }

    heroClass() {
        var cardId = this.hero.card.id;
        return _heroClass[cardId];
    }
}

module.exports = Player;