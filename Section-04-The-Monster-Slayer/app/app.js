(function() {
    new Vue({
        el: '#app',
        data: {
            playerHealth: 100,
            monsterHealth: 100,
            gameIsRunning: false,
            turns: []
        },
        methods:{
            startGame: function () {
                this.gameIsRunning = true;
                this.playerHealth = 100;
                this.monsterHealth = 100;
                this.turns = [];
            },
            attack: function () {
                this.generalAttack(3, 10, 'Player hits Monster for');
            },
            specialAttack: function () {
                this.generalAttack(10, 20, 'Player hits Monster hard for');
            },
            generalAttack: function (min, max, message){
                var damage = this.calculateDamage(min, max);
                this.monsterHealth -= damage;
                if(this.verifyMonsterDeath()) return;

                this.addTurnInformation(true, damage, message);

                this.monsterAttacks();
            },
            heal: function () {
                if(this.playerHealth <= 90){
                    this.playerHealth += 10;
                }else{
                    this.playerHealth = 100;
                }                
                this.addTurnInformation(true, 10, 'Player heals for');

                this.monsterAttacks();
            },
            giveUp: function () {
                this.gameIsRunning = false;
            },
            monsterAttacks: function () {
                var damage = this.calculateDamage(5, 12);
                this.playerHealth -= damage;
                this.verifyPlayerDeath();

                this.addTurnInformation(false, damage, 'Monster hits Player for');
            },
            addTurnInformation(isPlayer, damage, message){
                this.turns.unshift({
                    isPlayer: isPlayer,
                    text: [message, damage].join(' ')
                });
            },
            calculateDamage : function(min, max){
                return Math.max(Math.floor(Math.random() * max), min)
            },            
            verifyMonsterDeath: function (){
                return this.verifyDeath('monsterHealth', 'You won!');
            },            
            verifyPlayerDeath: function(){
                return this.verifyDeath('playerHealth', 'You lost!');
            },            
            verifyDeath: function(prop, message){
                if(this[prop] <= 0){
                    if(confirm(message + ' New Game?')){
                        this.startGame();
                    }else{                    
                        this.gameIsRunning = false;
                    }
                    return true;            
                }
                return false;
            },
        }
    });



})();