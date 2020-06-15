<template>
  <div class="layout">
    <header class="header">
      <strong>
        <g-link to="/">{{ $static.metadata.siteName }}</g-link>
      </strong>
      <nav class="nav">
        <g-link class="nav__link" to="/">Home</g-link>
        <g-link class="nav__link" to="/portuguese/">PT</g-link>
        <g-link class="nav__link" to="/english/">EN</g-link>
        <g-link class="nav__link" to="/spanish/">ES</g-link>
        <g-link class="nav__link" to="/french/">FR</g-link>
        <g-link class="nav__link" to="/italian/">IT</g-link>
      </nav>
    </header>
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>
