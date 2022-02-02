import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#2196F3",
        secondary: "#263238",
        amber: "#ffc107",
        red: "#f44336",
        accent: "#8c9eff",
        error: "#b71c1c",
        bg: "#fafafa",
      },
    },
  },
});
