<template>
    <div>
        <!-- ============ Right Side Image ============== -->
        <img src="../../assets/img/sigin.png" alt="" class="wave">
        <img src="../../assets/img/doctor.png" alt="" class="wave">
        <!-- ============== End of Right side Image =============== -->

        <!-- =========== Form  =================-->
        <div class="container">
            <div class="form-container">
                <div class="banner">
                    <img src="../../assets/img/logo.png" alt="" class="img-fluid logo">
                    <h1>Reset Password</h1>
                    <p>Please enter your email address and we'll send you a link to reset your password.</p>
                </div>

                <form class="signin-form" @submit.prevent="onSubmit">
                    <label for="">Email address</label>
                    <div class="input-field form-group" :class="{ 'form-group--error': v$.firstname.$error}">
                        <img src="../../assets/img/icons/EnvelopeSimple.png" alt="" class="fa-envelope">
                        <input name="text" placeholder="Email Address" class="form-control" v-model.trim="v$.firstname.$model" :class="{'is-invalid': v$.firstname.$error, 'is-valid': !v$.firstname.$invalid}" >
                    </div>
                    <span class="error"  v-if=" v$.firstname.$error"> {{v$.firstname.$errors[0].$message}}</span> 
                    <!-- <span class="error" v-if="!v$.firstname.minLength">First name is must have at most {{v$.firstname.$params.minLength.min}} letters.</span>  -->
                    <tree-view :data="v$.firstname" :options="{rootObjectKey: 'v$.firstname', maxDepth: 2}"></tree-view>



                    <!-- <div class="" v-if="!v$.firstname.minLength">First name is valid</div> -->

                    <!-- <div class="invalid-feedback d-block"> -->
                        <!-- <span >First name is required.</span> -->
                        <!-- <span v-if="!v$.firstname.minLength" style="color: red">First name is must have at least letters.</span>
                        <span v-if="!v$.firstname.maxLength" style="color: red">First name is must have at most letters.</span> -->
                    <!-- </div> -->
                    <!-- <div class="valid-feedback d-block" style="color: red">Your first name is valid!</div> -->
                    <!-- <div >
                                <ErrorMessage name="email"/>
                    </div> -->

                    <button class="btn sign-up">Submit</button>

                    <!-- <button class="btn sign-up" :disabled = "getStatus" @click="handleForgotPassword()">Submit</button> -->
                </form>

                <div class="terms">
                    <div class="copy">
                        &copy; 2021 SDG ALL rights reserved.
                    </div>
                    <div class="privacy">
                    Terms of Service. Privacy Policy
                    </div>
                </div>
            </div>
            <!-- =============== End Form =============== -->

            <div class="form-image">
            <!-- <div class="overlay"> -->
                <!-- <img src="img/shutterstock_1720389688 1.png" alt=""> -->
            <!-- </div> -->
            </div>
        </div>
    </div>
</template>

<script>
import * as types from '../../store/types'
import { mapGetters } from 'vuex';
// import { Field, Form} from 'vee-validate'
// import * as Yup from 'yup';
import useValidate from '@vuelidate/core'
import {required,maxLength,minLength} from '@vuelidate/validators'

    export default {
        name: 'Forget',
         setup () {
            return { v$: useValidate()}
        },
        data () {
            return {

                firstname: '',
            }
        },
        validations: {
            firstname : {
                required,
                minLength: minLength(5),
                maxLength : maxLength(10)
            }
        },
        computed : {
            ...mapGetters({
                getStatus : types.AUTH_STATE
            })
        },
        methods : {
            handleForgotPassword() {
                const formData = {
                    email: this.authData.email,
                }
                this.$store.dispatch(types.FORGOT_PASSWORD_ACTION , formData);
            },
            submitForm(){
                alert('Form successfully');
                console.log(this.v$)
            }
            // validateEmail(value) {

            //     if(!value){
            //         return 'This field is required'
            //     }

            //     return true;
            // }
        },
    }
</script>

<style>

    
</style>