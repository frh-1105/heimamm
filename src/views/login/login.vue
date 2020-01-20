<template>
  <div class="login-container">
    <!-- 左侧表单 -->
    <div class="left">
      <div class="title-box">
        <img src="@/assets/login_icon.png" alt />
        <span class="title">黑马面面</span>
        <span class="line"></span>
        <span class="sub-title">用户登录</span>
      </div>
      <!-- 表单 -->
      <el-form ref="form" class="login-form">
        <!-- 输入账号 -->
        <el-form-item>
          <el-input placeholder="请输入手机号码" prefix-icon="el-icon-user"></el-input>
        </el-form-item>
        <!-- 输入密码 -->
        <el-form-item>
          <el-input placeholder="请输入密码" prefix-icon="el-icon-lock" show-password></el-input>
        </el-form-item>
        <!-- 输入验证码 -->
        <el-form-item>
          <el-row>
            <el-col :span="17">
              <el-input placeholder="请输入验证码" prefix-icon="el-icon-key"></el-input>
            </el-col>
            <el-col :span="7">
              <img src alt />
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 勾选协议 -->
        <el-form-item>
          <el-checkbox>
            我已阅读并同意
            <el-link type="primary">用户协议</el-link>
            <span>和</span>
            <el-link type="primary">隐私条款</el-link>
          </el-checkbox>
        </el-form-item>
        <!-- 按钮 -->
        <el-form-item class="btn-box">
          <el-button type="primary">登录</el-button>
          <el-button @click="registerFormVisible = true">注册</el-button>
        </el-form-item>
      </el-form>
    </div>
    <!-- 右侧图片 -->
    <div class="right">
      <img src="@/assets/login_bg.png" alt />
    </div>
    <!-- 注册对话框 -->
    <el-dialog title="用户注册" :visible.sync="registerFormVisible">
      <el-form>
        <el-form-item label="活动名称">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="活动区域">
          <el-select placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button>取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
        registerFormVisible:true //注册对话框显示状态
    };
  },
  methods: {}
};
</script>

<style lang="less">
.login-container {
  height: 100%;
  background: linear-gradient(
    225deg,
    rgba(1, 198, 250, 1),
    rgba(20, 147, 250, 1)
  );
  display: flex;
  align-items: center;
  justify-content: space-around;
  .left {
    width: 478px;
    height: 550px;
    background-color: rgb(245, 245, 245);
    padding: 48px;
    .title-box {
      display: flex;
      align-items: center;
      img {
        width: 22px;
        height: 17px;
        margin-right: 16px;
      }
      .title {
        font-size: 24px;
        margin-right: 14px;
      }
      .line {
        width: 1px;
        background-color: #c7c7c7;
        height: 27px;
        margin-right: 12px;
      }
      .sub-title {
        font-size: 22px;
      }
    }
    .login-form {
      margin-top: 29px;
    }
    .btn-box {
      .el-button {
        width: 100%;
        margin-left: 0;
        margin-bottom: 28px;
      }
    }
  }
}
</style>