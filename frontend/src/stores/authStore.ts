import { writable } from "svelte/store";
import type firebase from "firebase/compat/app";

const authStore = writable<{
  isLoggedIn: boolean;
  user?: firebase.User;
  firebaseControlled: boolean;
  userToken?: Promise<String>;
}>({
  isLoggedIn: false,
  firebaseControlled: false,
});

export default {
  subscribe: authStore.subscribe,
  set: authStore.set,
};
