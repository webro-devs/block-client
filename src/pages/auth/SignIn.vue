<template>
  <div>Sign In</div>
  <div>
    {{ store.state.auth.isAuth }}
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'src/store';
import { mapActions, mapMutations, mapState, mapGetters } from 'vuex';

export default defineComponent({
  setup() {
    const store = useStore();

    return { store };
  },

  methods: {
    ...mapActions({
      signin: 'auth/signin',
    }),
    ...mapMutations({
      setAuth: 'auth/setAuth',
    }),
  },

  computed: {
    ...mapState({
      isAuth: (state) => state.auth.isAuth,
      token: (state) => state.auth.token,
    }),
  },
});
</script>
