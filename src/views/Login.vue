<template>
  <v-app>
    <v-main class="bg-image pa-6">
      <v-sheet class="pa-12 glass">
        <v-row justify="center" align="center">
          <v-col cols="6" class="pt-12">
            <v-row justify="center">
              <v-icon size="45" color="orange" style="top: -20px; left: 20px"
                >fa-sun</v-icon
              >
              <v-icon size="40" color="blue">fa-cloud</v-icon>
            </v-row>
          </v-col>
          <v-col cols="12" class="pt-12">
            <v-text-field label="Email" />
          </v-col>
          <v-col cols="12">
            <v-text-field label="Password" type="password" />
          </v-col>
          <v-col cols="12">
            <v-btn block color="amber" rounded large>Sign In</v-btn>
          </v-col>
          <v-col cols="12">
            <v-btn block color="red" dark rounded large>
              <v-icon left>mdi-google</v-icon>
              Sign in with Google
            </v-btn>
          </v-col>
          <v-col cols="12" align-self="end">
            <v-row justify="center">
              <v-col class="shrink">
                <v-btn small text>Forgot password</v-btn>
              </v-col>
            </v-row>
          </v-col>
        </v-row>
      </v-sheet>
      <v-col cols="12" class="white--text">
        <v-row align="center">
          <v-col cols="5"><v-divider class="white" /></v-col>
          <v-col cols="2">OR</v-col>
          <v-col cols="5"><v-divider class="white" /></v-col>
        </v-row>
      </v-col>
      <v-sheet class="pa-12 glass">
        <v-row justify="center" align="center">
          <v-col cols="12">
            <v-btn block color="primary" large rounded>Create An Account</v-btn>
          </v-col>
        </v-row>
      </v-sheet>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "Login",
};
</script>

<style scoped lang="scss">
.bg-image {
  background: #005aa7; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #fffde4,
    #005aa7
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #fffde4,
    #005aa7
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
