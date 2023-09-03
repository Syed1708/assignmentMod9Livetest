<template>
    <div class="row">
      <h2>Registration Form</h2>
      <form @submit.prevent="submitForm">
        <div class="mb-3">
          <label for="username" class="form-label">Username:</label>
          <input type="text" class="form-control" id="username" v-model="formData.username" required>
        </div>
        <div>
          <label for="email">Email:</label>
          <input type="email" class="form-control" id="email" v-model="formData.email" required>
        </div>
        <!-- Add more fields as needed -->
        <button type="submit" class="btn btn-primary mb-3 mt-3">Register</button>
      </form>
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue';
  import { useRouter, useRoute } from 'vue-router'; // Import the router
  // Define a ref for the form data
  const formData = ref({
    username: '',
    email: '',
    // Add more fields as needed
  });
  



  const router = useRouter(); // Access the router

  // Function to submit the form
  const submitForm = () => {
    // Assuming you have a router for navigation
    // Here, displaying user data in an alert
    alert(`Registration successful!\nUsername: ${formData.value.username}\nEmail: ${formData.value.email}`);
    //alert(email)
    // Redirect to the landing page
//   router.push('/dashboard/:email');

    router.push({
        name: 'dashboard',
        params: {
        username: formData.value.username,
        email: formData.value.email,
        },
    });

  };
  </script>