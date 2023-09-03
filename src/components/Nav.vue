<script setup>
import {ref} from 'vue'
import {RouterLink} from "vue-router"

// defineProps(['showRegistrationForm'])

  

</script>
<template>
        <header class="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
            <a href="/" class="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
                <svg class="bi me-2" width="40" height="32"><use xlink:href="#bootstrap"></use></svg>
                <span class="fs-4">Simple Blog</span>
            </a>

            <ul class="nav nav-pills">
                <li class="nav-item " >

                <!-- <a :href="cat['id']" class="nav-link" aria-current="page">{{ cat['name'] }}</a> -->
                
                <RouterLink class="nav-link "  to="/">Home</RouterLink>
                </li>
            
                <li class="nav-item " >

                <!-- <a :href="cat['id']" class="nav-link" aria-current="page">{{ cat['name'] }}</a> -->
                
                <RouterLink class="nav-link "  to="/about">About</RouterLink>
                </li>
                <li class="nav-item ">

                <!-- <a :href="cat['id']" class="nav-link" aria-current="page">{{ cat['name'] }}</a> -->
                
                <RouterLink class="nav-link "  to="/registration">Registration</RouterLink>
                </li>
            
            </ul>
        </header>
</template>