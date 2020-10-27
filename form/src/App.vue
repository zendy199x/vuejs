<template>
	<div class="container">
		<form>
			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
				>
					<h1>File a Complaint</h1>
					<hr />
					<div class="form-group">
						<label for="email">Mail</label>
						<input
							type="text"
							id="email"
							class="form-control"
							:value="userData.email"
							@input="userData.email = $event.target.value"
						/>
						<p>{{ userData.email }}</p>
					</div>
					<div class="form-group">
						<label for="password">Password</label>
						<input
							type="password"
							id="password"
							class="form-control"
							v-model="userData.password"
						/>
					</div>
					<div class="form-group">
						<label for="age">Age</label>
						<input
							type="number"
							id="age"
							class="form-control"
							v-model="userData.age"
						/>
					</div>
				</div>
			</div>
			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
				>
					<label for="message">Message</label><br />
					<!-- Interpolation between <textarea>{{ test }}</textarea> doesn't work!-->
					<textarea
						id="message"
						rows="5"
						class="form-control"
						v-model="message"
					></textarea>
				</div>
			</div>
			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
				>
					<div class="form-group">
						<label for="sendmail">
							<input
								type="checkbox"
								id="sendmail"
								value="Send Mail"
								v-model="sendEmail"
							/>
							Send Mail
						</label>
						<label for="sendInfomail">
							<input
								type="checkbox"
								id="sendInfomail"
								value="Send Info Mail"
								v-model="sendEmail"
							/>
							Send Info Mail
						</label>
						<label for="cutMail">
							<input
								type="checkbox"
								id="cutMail"
								value="Cut Mail"
								v-model="sendEmail"
							/>
							Cut Mail
						</label>
					</div>
				</div>
			</div>
			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
				>
					<label for="male">
						<input type="radio" id="male" value="Male" v-model="gender" /> Male
					</label>
					<label for="female">
						<input type="radio" id="female" value="Female" v-model="gender" />
						Female
					</label>
				</div>
			</div>
			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 from-group"
				>
					<label for="priority">Priority</label>
					<select id="priority" class="form-control">
						<option
							v-for="item in level"
							:key="item"
							:selected="item === 'Low'"
							>{{ item }}</option
						>
					</select>
				</div>
			</div>
			<hr />
			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3 form-group"
				>
					<label for="message">Switched:</label><br />
					<CustomControl v-model="dataSwitch"></CustomControl>
				</div>
			</div>

			<div class="row">
				<div
					class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3"
				>
					<button class="btn btn-primary" @click.prevent="submited">
						Submit!
					</button>
				</div>
			</div>
		</form>
		<hr />
		<div class="row" v-if="isSubmit">
			<div class="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
				<div class="panel panel-default">
					<div class="panel-heading">
						<h4>Your Data</h4>
					</div>
					<div class="panel-body">
						<p>Mail: {{ userData.email }}</p>
						<p>Password: {{ userData.password }}</p>
						<p>Age: {{ userData.age }}</p>
						<p style="white-space: pre">Message: {{ message }}</p>
						<p><strong>Send Mail?</strong></p>
						<ul>
							<li v-for="item in sendEmail" :key="item">{{ item }}</li>
						</ul>
						<p>Gender: {{ gender }}</p>
						<p>Priority:</p>
						<p>Switched: {{ dataSwitch }}</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import CustomControl from "./components/CustomControl"

export default {
	data() {
		return {
			userData: {
				email: "",
				password: "",
				age: 0,
			},
			message: "Please hold text something...",
			sendEmail: [],
			gender: "Male",
			level: ["Hight", "Medium", "Low"],
			selectedPriority: "Low",
			dataSwitch: true,
			isSubmit: false,
		}
	},
	methods: {
		submited() {
			this.isSubmit = true
		},
	},
	components: {
		CustomControl,
	},
}
</script>

<style></style>
