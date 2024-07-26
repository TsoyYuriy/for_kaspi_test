<template>
  <form @submit="onSubmit">
    <div class="form">
      <div class="form__inner">
        <template v-if="isSignUp">
          <input
            class="form__input"
            :style="{ borderColor: errors.username && 'red', background: errors.username && '#fce2e2' }"
            type="text"
            v-model="username"
            v-bind="usernameAttrs"
            placeholder="Name"
          />
          <p class="form__error">{{ errors.username }}</p>
        </template>

        <input
          class="form__input"
          :style="{ borderColor: errors.email && 'red', background: errors.email && '#fce2e2' }"
          type="email"
          v-model="email"
          v-bind="emailAttrs"
          placeholder="Email"
        />

        <p class="form__error">{{ errors.email }}</p>

        <div class="form__input_show">
          <input
            class="form__input"
          :style="{ borderColor: errors.password && 'red', background: errors.password && '#fce2e2' }"

            :type="passwordFieldType"
            v-model="password"
            v-bind="passwordAttrs"
            placeholder="Password"
          />
          <button class="form__btn-show" @click.prevent="showPassword">Show</button>
        </div>
        <p class="form__error">{{ errors.password }}</p>


        <template v-if="isSignUp">
          <label class="form__label">
            <input type="checkbox" v-model="subscription" v-bind="subscriptionAttrs" />
            <span class="form__label-text"
              >I would like to receive your newsletter and other promotional information.</span
            >
          </label>
        </template>
      </div>

      <button class="form__btn">{{ isSignUp ? 'Sign Up' : 'Log In' }}</button>

      <template v-if="!isSignUp">
        <button class="form__forgot">Forgot your password?</button>
      </template>
    </div>
  </form>
</template>

<script setup>
import { ref, computed } from 'vue'
import { useForm } from 'vee-validate'
import * as yup from 'yup'
import { useAuthStore } from '@/stores/auth'

const props = defineProps({
  isSignUp: {
    type: Boolean,
    default: false
  }
})
const hidePassword = ref(true)
const passwordFieldType = computed(() => (hidePassword.value ? 'password' : 'text'))
const userStore = useAuthStore()

const { errors, handleSubmit, defineField } = useForm({
  validationSchema: yup.object({
    email: yup.string().email().required('Email is required'),
    password: yup.string().min(6).required('Min 6 characters'),
    username: props.isSignUp ? yup.string().required('Name is required') : yup.string().notRequired()
  })
})

const [email, emailAttrs] = defineField('email')
const [password, passwordAttrs] = defineField('password')
const [username, usernameAttrs] = defineField('username')
const [subscription, subscriptionAttrs] = defineField('subscription')

const showPassword = () => {
  hidePassword.value = !hidePassword.value
}

const onSubmit = handleSubmit((values) => {
  if (!props.isSignUp) {
    userStore.logIn(values)
  } else {
    console.log(123);
    userStore.signup(values);
  }
})
</script>

<style scoped lang="scss" src="./form.scss"></style>
