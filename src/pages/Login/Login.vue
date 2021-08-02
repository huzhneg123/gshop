<template>
  <section class="loginContainer">
    <div class="loginInner">
      <div class="login_header">
        <p class="login_logo">硅谷外卖</p>
        <div class="login_header_title">
          <a href="javascript:;" class="on">短信登录</a>
          <a href="javascript:;">密码登录</a>
        </div>
      </div>
      <div class="login_content">
        <form>
          <div class="on">
            <section class="login_message">
              <input type="tel" maxlength="11" placeholder="手机号" />
              <button disabled="disabled" class="get_verification">获取验证码</button>
            </section>
            <section class="login_verification">
              <input type="tel" maxlength="8" placeholder="验证码" />
            </section>
            <section class="login_hint">
              温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
              <a href="javascript:;">《用户服务协议》</a>
            </section>
          </div>
          <div class="off">
            <section>
              <section class="login_message">
                <input type="tel" maxlength="11" placeholder="手机/邮箱/用户名" />
              </section>
              <section class="login_verification">
                <input type="tel" maxlength="8" placeholder="密码" />
                <div class="switch_button off">
                  <div class="switch_circle"></div>
                  <span class="switch_text">...</span>
                </div>
              </section>
              <section class="login_message">
                <input type="text" maxlength="11" placeholder="验证码" />
                <img class="get_verification" src="/images/captcha.svg" alt="captcha" />
              </section>
            </section>
          </div>
          <button class="login_submit">登录</button>
        </form>
        <a href="javascript:;" class="about_us">关于我们</a>
      </div>
      <a href="javascript:" class="go_back" @click="$router.back()">
        <i class="iconfont icon-jiantou-copy"></i>
      </a>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.login_header {
  height: 150px;
  position: relative;
}
.login_logo {
  font-size: 50px;
  font-weight: 600;
  display: inline-block;
  margin-left: 25%;
  margin-top: 30px;
  color: green;
}
.login_header_title {
  margin-top: 30px;
  margin-left: 25%;
  /* background-color: royalblue; */
  color: green;
}
.login_header_title a:first-child {
  border-bottom: 2px solid green;
  margin-right: 70px;
}
.login_header_title a:last-child {
  color: black;
}
/* ----------- */
.login_message {
  height: 35px;
}
.login_message input {
  position: relative;
  font-size: 14px;
  margin-left: 10%;
  line-height: 34px;
  /* width: 80%; */
  width: 300px;
  border: 1px solid rgb(143, 139, 139);

  box-sizing: border-box;
}
.login_message button {
  position: absolute;
  height: 30px;
  margin-top: 3px;
  margin-left: -83px;
  background-color: #ffffff;
  border: 0;
}
.login_verification {
  height: 35px;
}
.login_verification input {
  font-size: 14px;
  margin-left: 10%;
  line-height: 34px;
  /* width: 80%; */
  width: 298px;
  border: 1px solid rgb(143, 139, 139);
}
.login_hint {
  margin-top: 10px;
  margin-left: 10%;
  width: 300px;
  font-size: 13px;
  color: rgb(143, 139, 139);
}
.login_hint a {
  color: green;
}
.login_submit {
  width: 300px;
  color: #ffffff;
  text-align: center;
  height: 35px;
  line-height: 30px;
  margin-left: 10%;
  background-color: green;
  margin-top: 20px;
}
.about_us {
  display: inline-block;
  margin-top: 10px;
  margin-left: 41%;
}
.go_back .icon-jiantou-copy {
  position: absolute;
  font-size: 20px;
  margin-top: -325px;
  margin-left: 5px;
}
/* .login_content .on {
  display: none;
} */
.off {
  display: none;
}
.login_header_title a:hover {
  display: block;
}
</style>