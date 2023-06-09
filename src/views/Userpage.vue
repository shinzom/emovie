<template>
  <div style="display:flex;flex-direction: row;justify-content:space-between;">
    <el-card class="user_container"
      style="margin-top: 30px;box-shadow:  5px 5px 56px #bbddc1,-5px -5px 56px #e1ffe7;background-color: #f0f1f0;border-radius: 50px;">
      <span
        style="font-size: 45px;display: flex;align-items: center;text-align: center;justify-content: center;color: rgb(16, 99, 55);">个人信息</span>
      <div class="user_header">
        <!-- <img class="avatar" :src="avatarUrl" alt="user-avatar" @click="updateAvatar"> -->
        <div class="user_username">
          <span>{{ user.username }}</span>
        </div>
      </div>
      <div class="user_info">
        <div class="user_phone">
          <svg t="1680521604004" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25px"
            height="25px">
            <path d="M725.333333 721.066667l-38.4-38.4H379.733333l-38.4
              38.4V768h384v-46.933333z m85.333334-38.4v170.666666H256v-170.666666h4.266667l85.333333-85.333334h375.466667l89.6
              85.333334z m-85.333334-320c0 106.666667-85.333333 192-192 192S341.333333 469.333333 341.333333 362.666667 426.666667
              170.666667 533.333333 170.666667 725.333333 256 725.333333 362.666667z m-85.333333 0C640 302.933333 593.066667 256
              533.333333 256S426.666667 302.933333 426.666667 362.666667s46.933333 106.666667 106.666666 106.666666S640 422.4 640
              362.666667z" fill="#444444"></path>
          </svg>
          <span class="user_label">手机号：</span>
          <span>{{ user.phone }}</span>
        </div>
        <div class="user_email">
          <svg t="1680521604004" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" width="25px"
            height="25px">
            <path d="M725.333333 721.066667l-38.4-38.4H379.733333l-38.4
              38.4V768h384v-46.933333z m85.333334-38.4v170.666666H256v-170.666666h4.266667l85.333333-85.333334h375.466667l89.6
              85.333334z m-85.333334-320c0 106.666667-85.333333 192-192 192S341.333333 469.333333 341.333333 362.666667 426.666667
              170.666667 533.333333 170.666667 725.333333 256 725.333333 362.666667z m-85.333333 0C640 302.933333 593.066667 256
              533.333333 256S426.666667 302.933333 426.666667 362.666667s46.933333 106.666667 106.666666 106.666666S640 422.4 640
              362.666667z" fill="#444444"></path>
          </svg>
          <span class="user_label">邮箱：</span>
          <span>{{ user.email }}</span>
        </div>
      </div>
      <div class="user_password">
        <button class="user_button" @click="changePassword">修改密码</button>
        <div v-if="isChangePasswordVisible" class="change-password-form">
          <input class="user_input" type="password" v-model="oldPassword" placeholder="旧密码">
          <input class="user_input" type="password" v-model="newPassword" placeholder="新密码">
          <input class="user_input" type="password" v-model="confirmPassword" placeholder="确认密码"
            @keyup.enter="submitNewPassword">
          <div class="button-group">
            <button @click="cancelChangePassword" class="user_short-button">取消</button>
            <button @click="submitNewPassword" class="user_short-button">确认</button>
          </div>
        </div>
      </div>
    </el-card>

    <el-card
      style="width: 50%;height:600px;margin-top: 30px;margin-right: 30px;box-shadow:  5px 5px 56px #bbddc1,-5px -5px 56px #e1ffe7;background-color: #f0f1f0;border-radius: 50px;">
      <span
        style="font-size: 45px;display: flex;align-items: center;text-align: center;justify-content: center;color: rgb(16, 99, 55);">我的评分</span>
      <el-scrollbar height="470px" style="margin-top: 10px;">
        <div v-for="item in ratingData" style="margin-right: 10px;margin-left: 10px;"
          @click="clickToMovieDetail(item.movie.movieId)">
          <el-card style="background: #e7f2e9;margin-top: 5px;">
            <span style="display: inline-block;width: 450px;font-size: 20px;">{{ item.movie.title }}</span>
            <el-rate style="display: inline-block;" v-model="item.rating" disabled text-color="#ff9900" />
            <span style="display: inline-block;font-size: 20px;">{{ item.rating }}</span>
          </el-card>
        </div>
      </el-scrollbar>
    </el-card>
  </div>
</template>
 
<script>
import { getUserData } from "../utils/api";
import { getUserRatingData } from "../utils/api";
import { modifyPwd } from "../utils/api";
export default {
  data() {
    return {
      oldPassword: '', // 旧密码
      newPassword: '', // 新密码
      confirmPassword: '', // 确认新密码
      isChangePasswordVisible: false, // 是否显示修改密码

      token: 0,
      user: [],
      ratingData: [],
      modifyPwdData: {
        username: "",
        password: "",
        newPassword: ""
      },

    }
  },
  created() {
    this.token = window.localStorage.getItem('token');
    if (this.token == 0) {
      this.$message({
        showClose: true,
        message: '用户未登录，请先登录',
        type: 'error'
      })
      this.$router.push('/login');
    } else {
      getUserData(this.token).then((res) => {
        console.log(res)
        if (res.code == 1) {
          this.user = res.data;

        } else {
          this.$message({
            showClose: true,
            message: '显示个人主页失败',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err.response)
      });

      getUserRatingData(this.token).then((res) => {
        console.log(res)
        if (res.code == 1) {
          this.ratingData = res.data.infoMap;
          console.log(this.ratingData)
        } else {
          this.$message({
            showClose: true,
            message: '显示我的评分失败',
            type: 'error'
          })
        }
      }).catch(err => {
        console.log(err.response)
      })
    }
  },
  methods: {
    cancelChangePassword() {
      this.newPassword = ''
      this.isChangePasswordVisible = false
    },
    changePassword() {
      this.isChangePasswordVisible = true
    },
    submitNewPassword() {
      if (this.oldPassword == "") {
        this.$message({
          showClose: true,
          message: '旧密码为空，请输入旧密码',
          type: 'error'
        })
      } else if (this.newPassword == "" || this.confirmPassword == "") {
        this.$message({
          showClose: true,
          message: '新密码为空，请输入新密码',
          type: 'error'
        })
      } else if (this.newPassword != this.confirmPassword) {
        this.$message({
          showClose: true,
          message: '两次输入的新密码不一致',
          type: 'error'
        })
      } else {
        this.modifyPwdData.username = this.user.username;
        this.modifyPwdData.password = this.oldPassword;
        this.modifyPwdData.newPassword = this.newPassword;
        modifyPwd(this.modifyPwdData).then((res) => {
          console.log(res)
          if (res.code == 1) {
            this.$message({
              showClose: true,
              message: '修改密码成功',
              type: 'success'
            })
            this.oldPassword = ''
            this.newPassword = ''
            this.confirmPassword = ''
            this.isChangePasswordVisible = false
          } else {
            this.$message({
              showClose: true,
              message: res.msg,
              type: 'error'
            })
            this.oldPassword = ''
            this.newPassword = ''
            this.confirmPassword = ''
          }
        }).catch(err => {
          console.log(err.response)
        })
      }
    },
    //从评分列表跳转到电影详情页
    clickToMovieDetail(movieId) {
      this.$router.push('/moviedetails/' + movieId)
    },
  },

}
</script>

<style>
.user_container {
  width: 40%;
  height: 500px;
  box-shadow: 5px 5px 56px #bbddc1, -5px -5px 56px #e1ffe7;
  background-color: #f0f1f0;
  border-radius: 50px;
  margin-top: 30px;
  margin-left: 30px;
}

.user_header {
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  margin-top: 50px;
  margin-bottom: 30px;
}

.user_avatar {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  cursor: pointer;
}

.user_username {
  display: flex;
  align-items: center;
  font-size: 30px;
  font-weight: bold;
  margin-bottom: 10px;
}

.user_phone,
.user_email {
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  justify-content: center;
  align-items: center;
}


.user_edit-icon {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  cursor: pointer;
}

.user_password {
  margin-top: 30px;
  display: flex;
  justify-content: center;
}

.user_change-password-form {
  margin-top: 10px;
  margin-left: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.user_input[type="password"],
.user_button {
  font-size: 16px;
  padding: 5px;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 300px;
  justify-content: center;
  align-items: center;
}

.user_button {
  background-color: #4e655d;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-right: 10px;
  justify-content: center;
  align-items: center;
}

*/ .user_label {
  font-size: 24px;
  font-weight: bold;
  margin-right: 10px;

}

.user_rating {
  display: flex;
  justify-content: center;
  margin-top: 50px;
}

.user_short-button {
  width: 144px;
  justify-content: center;
  align-items: center;
}

.user_rating-list span:first-child {
  font-size: 24px;
  font-weight: bold;
  color: #025c5f;

}

.user_rating-list span:last-child {
  font-size: px;
  color: #ff9900;
  margin-left: 10px;

}
</style>
