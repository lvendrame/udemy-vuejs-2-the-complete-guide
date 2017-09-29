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
            },
            attack: function () {
                var damage = this.calculateDamage(3, 10);
                this.monsterHealth -= damage;
                if(this.verifyMonsterDeath()) return;
                this.turns.unshift({
                    isPlayer: true,
                    text: 'Monster hits Player for ' + damage
                });

                this.monsterAttacks();
            },
            specialAttack: function () {
                this.monsterHealth -= this.calculateDamage(10, 20);
                if(this.verifyMonsterDeath()) return;
                
                this.monsterAttacks();                
            },
            heal: function () {
                if(this.playerHealth <= 90){
                    this.playerHealth += 10;
                }else{
                    this.playerHealth = 100;
                }

                this.monsterAttacks();
            },
            giveUp: function () {
                this.gameIsRunning = false;
            },
            monsterAttacks: function () {
                var damage = this.calculateDamage(5, 12);
                this.playerHealth -= damage;
                this.verifyPlayerDeath();

                this.turns.unshift({
                    isPlayer: false,
                    text: 'Monster hits Player for ' + damage
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