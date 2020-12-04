/*
export function someMutation (state) {
}
*/
// src/store/showcase/mutations.js
export const updateDrawerState = (state, opened) => {
    state.drawerState = opened
  }
  
  // src/store/showcase/state.js
  // Always use a function to return state if you use SSR
  export default function () {
    return {
      drawerState: true
    }
  }