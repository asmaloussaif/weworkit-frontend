<template>
    <div class="message-page">
      <CContainer>
        <CRow>
          <CCol xs="12" md="8" class="mx-auto">
            <CCard>
              <CCardHeader>Messages</CCardHeader>
              <CCardBody>
                <div class="message-container">
                  <div
                    v-for="(message, index) in messages"
                    :key="index"
                    :class="['message', message.user === 'Client' ? 'client' : 'freelancer']"
                  >
                    <strong>{{ message.user }}: </strong>{{ message.text }}
                  </div>
                </div>
                <div class="message-input">
                  <CInput
                    v-model="messageInput"
                    placeholder="Type a message..."
                    @keyup.enter="handleSendMessage"
                  />
                  <CButton color="primary" @click="handleSendMessage">Send</CButton>
                </div>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  </template>
  
  <script>
  import { CCard, CCardBody, CCardHeader, CButton, CInput, CContainer, CRow, CCol } from '@coreui/vue';
  
  export default {
    name: 'MessagePage',
    data() {
      return {
        messages: [
          { user: 'Client', text: 'Hello, I need help with my project!' },
          { user: 'Freelancer', text: 'Sure! How can I assist you?' },
        ],
        messageInput: '',
      };
    },
    methods: {
      handleSendMessage() {
        if (this.messageInput.trim()) {
          this.messages.push({ user: 'Client', text: this.messageInput });
          this.messageInput = '';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .message-page {
    background-color: #f8f9fa;
    padding: 20px;
  }
  
  .message-container {
    max-height: 400px;
    overflow-y: auto;
    margin-bottom: 20px;
  }
  
  .message {
    margin-bottom: 10px;
    padding: 10px;
    border-radius: 8px;
  }
  
  .client {
    background-color: #e9ecef;
    text-align: left;
  }
  
  .freelancer {
    background-color: #d1f7d1;
    text-align: right;
  }
  
  .message-input {
    display: flex;
    align-items: center;
  }
  
  .message-input .CInput {
    flex-grow: 1;
    margin-right: 10px;
  }
  </style>
  