<script>
import { ref, computed } from 'vue'
import stores from '../stores/index.js'
import { ElMessage } from 'element-plus'

export default {
  setup() {
    const show = ref(false)
    const userName = ref('')
    const passward = ref('')
    const usernameed = computed(() => {
      return stores.state.signin.username
    })
    const matched = computed(() => {
      return stores.state.match
    })
    let match = ref(false)
    const signup = async () => {
      const bo = await stores.dispatch('axiosSetUserData', {
        userName: userName.value,
        password: passward.value
      })
      if (bo) {
        ElMessage('注册成功')
      } else {
        ElMessage('注册失败')
      }
    }
    

    return { show, userName, passward, signup, usernameed, match, matched }
  }
}
</script>




<template>
    <form class="c-form">
  <fieldset class="c-form__fieldset">
    <legend class="c-form__title">注册</legend>

    <div class="u-spacer--sm"></div>

    <label class="c-formGroup" for="email">
            <input class="c-formGroup__input u-ripple" type="email" id="email" placeholder="Email ID" autocomplete="off" v-model="userName">
            <span class="c-formGroup__title">账号</span>
            <i class="c-formGroup__icon"><svg><use xlink:href="#icon-email" /></svg></i>
        </label>

    <div class="u-spacer"></div>

    <label class="c-formGroup" for="password">
            <input class="c-formGroup__input u-ripple" type="password" id="password" placeholder="Password" v-model="passward">
            <span class="c-formGroup__title">密码</span>
            <i class="c-formGroup__icon"><svg><use xlink:href="#icon-padlock" /></svg></i>
        </label>

    <div class="u-spacer--sm"></div>


    <button type="button" class="c-form__button u-ripple" @click="signup">注册</button>
  </fieldset>
</form>

<svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
    <symbol id="icon-email" viewBox="0 0 16 16">
        <title>Email icon</title>
        <path d="M8,10c-0.266,0-0.5-0.094-1-0.336L0,6v7c0,0.55,0.45,1,1,1h14c0.55,0,1-0.45,1-1V6L9,9.664C8.5,9.906,8.266,10,8,10z M15,2  H1C0.45,2,0,2.45,0,3v0.758l8,4.205l8-4.205V3C16,2.45,15.55,2,15,2z" />
    </symbol>

    <symbol id="icon-padlock" viewBox="0 0 402 402">
        <title>Padlock icon</title>
        <path d="M357 191c-5-6-11-8-19-8h-9v-55c0-35-13-65-38-90S236 0 201 0s-65 13-90 38-38 55-38 90v55h-9c-8 0-14 2-19 8-6 5-8 12-8 19v165c0 7 2 14 8 19 5 5 11 8 19 8h274c8 0 14-3 19-8 6-5 8-12 8-19V210c0-7-2-14-8-19zm-83-8H128v-55c0-20 7-37 21-52 15-14 32-21 52-21s37 7 52 21c14 15 21 32 21 52v55z" />
    </symbol>
</svg>
</template>
<style lang="scss">
$primary-color: #0952ac;
$transition: 0.3s;
$font-size: 16px; // Change value to scale

.c-form {
    font-family: 'Montserrat', sans-serif;
    font-size: $font-size;
    color: #fff;
    
    position: relative;
    max-width: 24em;
    height: 22em;
    padding: 1.5em 2em 0;
    background-color: $primary-color;
    box-shadow: 0 8px 17px 2px rgba(black, 0.14),
                0 3px 14px 2px rgba(black, 0.12),
                0 5px 5px -3px rgba(black, 0.2);
}

.c-form__fieldset {
    border: 0;
    padding: 0;
    margin: 0;
}

.c-form__title {
    text-align: center;
    font-weight: 600;
}

.c-formGroup {
    display: block;
    height: 3em;
    position: relative;
    cursor: pointer;
}

.c-formGroup__icon {
    position: absolute;
    top: 0;
    left: 0;
    width: 3em;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    transform: scale(0.5);
    transform-origin: center bottom;
    pointer-events: none;
    opacity: 0;
    transition: transform $transition,
                opacity $transition;

    svg {
        height: 1.1em;
        width: 1.1em;
        fill: #a9a9a9;
    }
}

.c-formGroup__input {
    --focus-color: #fff;
    --active-color: #d6d6d6;
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 0;
    padding: 0 1em 0 3em;
    outline: 0;
    border: 0.15em solid transparent;
    border-radius: 0.4em;
    font: inherit;
    font-weight: 700;
    color: #585858;
    background-color: var(--focus-color);
    box-sizing: border-box;
    cursor: pointer;
    pointer-events: none;
    box-shadow: 0 2px 2px 0 rgba(black, 0.14),
                0 3px 1px -2px rgba(black, 0.12),
                0 1px 5px 0 rgba(black, 0.2);
    transition: height $transition,
                background 0.8s; // used by .u-ripple
    

    &::placeholder {
        opacity: 0;
    }

    &:focus,
    &:not(:placeholder-shown) {
        pointer-events: initial;
        cursor: text;
        height: 100%;
        box-shadow: 0 4px 5px 0 rgba(black, 0.14),
                    0 1px 10px 0 rgba(black, 0.12),
                    0 2px 4px -1px rgba(black, 0.3);
        
        & ~ .c-formGroup__icon {
            transform: scale(1);
            opacity: 1;
        }

        & ~ .c-formGroup__title {
            top: -40%;
            opacity: 0.7;
            font-size: 0.8em;
        }
    }
}

.c-formGroup__title {
    position: absolute;
    top: 40%;
    margin-left: 0.25em;
    font-size: 0.9em;
    font-weight: 400;
    transition: top $transition,
                font-size $transition;
}

.c-form__link {
    float: right;
    text-decoration: none;
    font-size: 0.8em;
    color: lighten($primary-color, 50);
    outline: 0;
}

.c-form__button {
    --focus-color: #{darken($primary-color, 5)};
    --active-color: #{lighten($primary-color, 1)};
    font: inherit;
    font-size: 1.2em;
    font-weight: 600;
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3em;
    border: 0;
    outline: 0;
    color: inherit;
    cursor: pointer;
    background-color: var(--focus-color);
    transition: background 0.8s; // used by .u-ripple
}

.u-spacer {
  height: 3em;
}

.u-spacer--sm {
  height: 2em;
}

.u-ripple {
  background-position: center;

  &:hover {
    background: var(--focus-color)
      radial-gradient(circle, transparent 1%, var(--focus-color) 1%)
      center/15000%;
  }

  &:active {
    background-color: var(--active-color);
    background-size: 100%;
    transition: background 0s;
  }
}

// Styles below for demonstration purposes only
body {
  background-color: #ffffff;
  
  .c-form {
    display: block;
    margin: 100px auto 0;
  }
}
</style>