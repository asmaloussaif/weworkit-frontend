<template>
    <div class="container">
      <!-- Offer List Card -->
      <CCard class="mb-4">
        <CCardBody>
          <!-- Search Bar with Search Icon -->
          <CInputGroup class="mb-3">
            <CInputGroupText>
              <CIcon :icon="cilSearch" size="sm" />
            </CInputGroupText>
            <CFormInput placeholder="Search for projects..." aria-label="Search" />
          </CInputGroup>
  
          <!-- Offer Card for Each Project -->
          <div v-for="(offer, index) in offers" :key="index" class="mb-4">
            <CCard class="p-3">
              <div class="d-flex justify-content-between">
                <!-- Title and Description -->
                <div>
                  <h4 class="mb-1">Title: {{ offer.title }}</h4>
                  <p>{{ offer.description }}</p>
                </div>
                <!-- Project State -->
                <div class="text-end">
                  <span :class="offer.state === 'Open' ? 'badge bg-success' : 'badge bg-danger'">
                    {{ offer.state }}
                  </span>
                </div>
              </div>
  
              <!-- Apply Button -->
              <CButton color="primary" @click="openModal(offer)">
                Apply
              </CButton>
            </CCard>
          </div>
        </CCardBody>
      </CCard>
  
      <!-- Modal for Motivation Input -->
      <!-- <CModal v-model="modalVisible" @hide="clearModal" size="lg">
        <CModalHeader>
          <CModalTitle>Apply for Project: {{ selectedOffer?.title }}</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <CFormTextarea
            v-model="motivationText"
            placeholder="Write your motivation here..."
            rows="5"
          />
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" @click="closeModal">Cancel</CButton>
          <CButton color="primary" @click="submitApplication">Submit</CButton>
        </CModalFooter>
      </CModal> -->
    </div>
  </template>
  
  <script setup>
  import { ref } from 'vue'
  import {
    CCard,
    CCardBody,
    CFormInput,
    CInputGroup,
    CInputGroupText,
    CButton,
    CModal,
    CModalHeader,
    CModalTitle,
    CModalBody,
    CModalFooter,
    CFormTextarea,
  } from '@coreui/vue'
  
  import { CIcon } from '@coreui/icons-vue' // Corrected import for CIcon
  import { cilSearch } from '@coreui/icons' // Importing the search icon
  
  // Sample offers data
  const offers = ref([
    {
      title: 'Web Development Project',
      description: 'A challenging web development project using Vue.js.',
      state: 'Open',
    },
    {
      title: 'Mobile App Development',
      description: 'Create a mobile app for a healthcare startup.',
      state: 'Closed',
    },
  ])
  
  // Modal state and motivation input
  const modalVisible = ref(false)
  const motivationText = ref('')
  const selectedOffer = ref(null)
  
  // Functions to open and close the modal
  const openModal = (offer) => {
    selectedOffer.value = offer
    modalVisible.value = true
  }
  
  const closeModal = () => {
    modalVisible.value = false
  }
  
  const clearModal = () => {
    motivationText.value = ''
    selectedOffer.value = null
  }
  
  // Handle form submission
  const submitApplication = () => {
    // Logic to handle the submission of the application
    console.log('Motivation:', motivationText.value)
    closeModal()
  }
  </script>
  
  <style scoped>
  /* Custom styles for the card */
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .mb-4 {
    margin-bottom: 20px;
  }
  
  h4 {
    font-size: 20px;
    color: #333;
  }
  
  p {
    color: #666;
  }
  
  .badge {
    font-size: 14px;
    padding: 5px 10px;
  }
  
  .badge.bg-success {
    background-color: #28a745;
  }
  
  .badge.bg-danger {
    background-color: #dc3545;
  }
  
  input[type='text'] {
    border-radius: 5px;
  }
  
  button {
    border-radius: 5px;
  }
  
  .modal-body {
    font-size: 16px;
  }
  </style>
  