<template>
    <div class="row">
      <h2>Dashboard</h2>
      <div>
        <p><strong>Username:</strong> {{ $route.params.username }}</p>
      <p><strong>Email:</strong> {{ $route.params.email }}</p>
        <!-- Display other user information as needed -->
      </div>

      <!-- Logout button -->
    <button @click="logout">Logout</button>

    </div>

  </template>
  
  <script setup>
  import { ref } from 'vue';

  import {useRoute, useRouter} from "vue-router"
  
  const showRegistrationForm = ref(false);

  const router = useRouter(); // Get the router instance

  //   const route = useRoute()
// //   const postId = parseInt(route.params.id)
//   const postId = route.params.email

//   console.log(postId)

// // Simulate user data
// const user = ref({
// username: '116058',
// email: 'syednuman@example.com',
// // Add more user data here
// });
  
const logout = () => {
  // Implement logout logic here (e.g., clearing user session)
  // After logout, redirect to a login page or another appropriate page
  router.push('/'); // Replace '/login' with the actual login page route
};
    
  </script>
  