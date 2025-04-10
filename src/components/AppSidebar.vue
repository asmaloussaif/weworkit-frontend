<script setup>
import { RouterLink } from 'vue-router'

import { logo } from '@/assets/brand/logo'
import { sygnet } from '@/assets/brand/sygnet'
import { AppSidebarNav } from '@/components/AppSidebarNav.js'
import { useSidebarStore } from '@/stores/sidebar.js'

import {
  cilUser,
  cilEnvelopeOpen,
  cilBriefcase,
  cilTask,
  cilBell,
  cilSettings,
  cilSearch
} from '@coreui/icons'

const sidebar = useSidebarStore()
</script>

<template>
  <CSidebar
    class="border-end custom-sidebar"
    colorScheme="dark"
    position="fixed"
    :unfoldable="sidebar.unfoldable"
    :visible="sidebar.visible"
    @visible-change="(value) => {
      sidebar.toggleVisible(value)
      console.log('Sidebar visibility changed:', value)
    }"
  >
    <!-- Sidebar Header -->
    <CSidebarHeader class="border-bottom">
      <RouterLink custom to="/" v-slot="{ href, navigate }">
        <CSidebarBrand v-bind="$attrs" as="a" :href="href" @click="navigate">
          <CIcon custom-class-name="sidebar-brand-full" :icon="logo" :height="32" />
          <CIcon custom-class-name="sidebar-brand-narrow" :icon="sygnet" :height="32" />
        </CSidebarBrand>
      </RouterLink>
      <CCloseButton class="d-lg-none" dark @click="sidebar.toggleVisible()" />
    </CSidebarHeader>

    <!-- Sidebar Navigation -->
    <CNav>
      <CNavItem>
        <RouterLink to="/pages/profil" class="nav-link">
          <CIcon :icon="cilUser" /> Profile
        </RouterLink>
      </CNavItem>
      <CNavItem>
        <RouterLink to="/messages" class="nav-link">
          <CIcon :icon="cilEnvelopeOpen" /> Messages
        </RouterLink>
      </CNavItem>
      <CNavItem>
        <RouterLink to="/offers" class="nav-link">
          <CIcon :icon="cilBriefcase" /> Offers List
        </RouterLink>
      </CNavItem>
      <CNavItem>
        <RouterLink to="/projects" class="nav-link">
          <CIcon :icon="cilTask" /> My Projects
        </RouterLink>
      </CNavItem>
      <CNavItem>
        <RouterLink to="/notifications" class="nav-link">
          <CIcon :icon="cilBell" /> Notifications
        </RouterLink>
      </CNavItem>
      <CNavItem>
        <RouterLink to="/settings" class="nav-link">
          <CIcon :icon="cilSettings" /> Settings
        </RouterLink>
      </CNavItem>
      <CNavItem>
        <RouterLink to="/search" class="nav-link">
          <CIcon :icon="cilSearch" /> Search
        </RouterLink>
      </CNavItem>
    </CNav>

    <!-- Sidebar Footer -->
    <CSidebarFooter class="border-top d-none d-lg-flex">
      <CSidebarToggler @click="sidebar.toggleUnfoldable()" />
    </CSidebarFooter>
  </CSidebar>
</template>

<style scoped>
.custom-sidebar {
  background: linear-gradient(to bottom, #0f172a, #1e293b); /* dark blue gradient */
  color: #fff;
}

.nav-link {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 12px 16px;
  color: #60a5fa !important; /* soft blue */
  font-weight: 500;
  transition: background 0.3s, color 0.3s;
}

.nav-link:hover {
  background-color: rgba(96, 165, 250, 0.1); /* subtle hover */
  color: #3b82f6 !important; /* deeper blue */
  text-decoration: none;
}

.nav-link .c-icon {
  font-size: 18px;
}
</style>
