<template>
  <amplify-authenticator></amplify-authenticator>
</template>

<script>
import { AmplifyEventBus } from "aws-amplify-vue";
import { Auth } from "aws-amplify";
export default {
  mounted() {
    AmplifyEventBus.$on("authState", eventInfo => {
      if (eventInfo === "signedIn") {
        this.$router.push({ name: "ShoppingList" });
      } else if (eventInfo === "signedOut") {
        this.$router.push({ name: "Auth" });
      }
    });

    if (Auth.currentAuthenticatedUser()) {
      this.$router.push({ name: "ShoppingList" });
    } else {
      this.$router.push({ name: "Auth" })
    }
  }
};
</script>
