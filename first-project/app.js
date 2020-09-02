new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
		turns: [],
	},
	methods: {
		startNewGame: function () {
			this.gameIsRunning = true
			this.playerHealth = 100
			this.monsterHealth = 100
		},
		attack: function () {
			//Check option
			if (this.checkPlayerOption()) {
				return
			}

			//Monster
			damage = this.inputDamage(4, 10)
			this.monsterHealth -= damage
			this.turns.unshift({
				isPlayer: true,
				textLog: "Player hits Monster for: " + damage,
			})

			//Player
			this.monsterAttack()
		},
		specialAttack: function () {
			//Check option
			if (this.checkPlayerOption()) {
				return
			}

			//Monster
			damage = this.inputDamage(10, 20)
			this.monsterHealth -= damage
			this.turns.unshift({
				isPlayer: true,
				textLog: "Player hits Monster for: " + damage,
			})

			//Player
			this.monsterAttack()
		},
		heal: function () {
			//Player
			if (this.playerHealth > 70) {
				return false
			} else if (this.playerHealth <= 60) {
				this.playerHealth += 10
			} else {
				this.playerHealth = 70
			}

			//Monster
			this.monsterAttack()
		},
		giveUp: function () {
			this.gameIsRunning = false
			alert("You lost")
		},
		monsterAttack: function () {
			damage = this.inputDamage(5, 12)
			this.playerHealth -= damage
			this.turns.unshift({
				isPlayer: false,
				textLog: "Monster hits Player for: " + damage,
			})
			this.checkPlayerOption()
		},
		inputDamage: function (minDamage, maxDamage) {
			return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage)
		},
		checkPlayerOption: function () {
			if (this.monsterHealth <= 0) {
				if (confirm("You won! New game ?")) {
					this.startNewGame()
					// this.gameIsRunning = true
				} else {
					this.gameIsRunning = false
				}
				return true
			} else if (this.playerHealth <= 0) {
				if (confirm("You lost! New game ?")) {
					this.startNewGame()
					// this.gameIsRunning = true
				} else {
					this.gameIsRunning = false
				}
				return true
			}
			return
		},
	},
})
