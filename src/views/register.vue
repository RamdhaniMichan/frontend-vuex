<template>
    <div class="login">
        <b-card style="max-width: 25rem;">
            <b-form @submit.prevent="handleSubmit" >
                <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                    <b-form-input type="text" required placeholder="Enter Name"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-1" label="Email:" label-for="input-1">
                    <b-form-input id="input-1" v-model="email" type="email" required placeholder="Enter Email"></b-form-input>
                </b-form-group>
                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                    <b-form-input id="input-2" v-model="password" type="password" required placeholder="Enter Password"></b-form-input>
                </b-form-group>
                <b-button type="submit" block variant="danger">Register</b-button>
            </b-form>
        </b-card>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: "register",
    data() {
        return {
            email: '',
            password: '',
            role: 'user'
        }
    },
    methods: {
        handleSubmit(){
            const data = {
                email: this.email,
                password: this.password,
                role: this.role
            }

            axios.post("http://localhost:8081/users", data)
            this.$store.dispatch('Register', data)
            .then(() => {
                this.$router.push('/')
                alert("Regustrasi Sukses")
            })
            .catch((err) => {
                console.log(err)
            })
            
        }
    },
}
</script>

<style>
.login {
    margin: 16rem 35rem;
}

</style>