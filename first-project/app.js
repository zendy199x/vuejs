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
			//Monster
			if (this.monsterHealth <= 0) {
				alert("Player Win")
				this.gameIsRunning = false
				return
			}

			var maxDamage = 10
			var minDamage = 4
			var damage = Math.max(
				Math.floor(Math.random() * maxDamage) + 1,
				minDamage
			)
			this.monsterHealth -= damage

			//Player
			if (this.playerHealth <= 0) {
				alert("Monster Win")
				this.gameIsRunning = false
				return
			}

			var maxDamage = 12
			var minDamage = 5
			var damage = Math.max(
				Math.floor(Math.random() * maxDamage) + 1,
				minDamage
			)
			this.playerHealth -= damage
		},
		specialAttack: function () {},
		heal: function () {},
		giveUp: function () {},
	},
})
