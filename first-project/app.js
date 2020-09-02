new Vue({
	el: "#app",
	data: {
		playerHealth: 100,
		monsterHealth: 100,
		gameIsRunning: false,
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
			this.monsterHealth -= this.inputDamage(4, 10)

			//Player
			this.playerHealth -= this.inputDamage(5, 12)
		},
		specialAttack: function () {},
		heal: function () {},
		giveUp: function () {},
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
