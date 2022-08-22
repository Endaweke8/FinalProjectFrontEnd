import App from './App.vue'
import  apolloClient from './ApolloClient'
import { createApp, provide, h } from 'vue'
import { DefaultApolloClient } from '@vue/apollo-composable'
import { createAuth0 } from '@auth0/auth0-vue';
import './tailwind.css'
import router from './routes/index.js'

const app = createApp({
    setup() {
        provide(DefaultApolloClient,apolloClient)
    },

    render: () => h(App),
})
app.use(
    createAuth0({
      domain: "dev-ttz49z63.us.auth0.com",
      client_id: "hEVccCUFvVYyrT9owQwEBpItcrBW8ARo",
      redirect_uri: window.location.origin
    })
  );

app.use(router)
app.mount("#app");
