<template>

  <ColorScheme placeholder="..." tag="span">
    Color mode: <b> {{ $colorMode.preference }}</b>
     <span v-if="$colorMode.preference === 'system'">(<i>{{ $colorMode.value }}</i> mode detected)</span>
  </ColorScheme>

  <div class="container">
    <header>
      <div class="navbar">
        <NuxtLogo />
        <ul>
          <li>
            <NuxtLink to="/timeline">Timeline</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/map">Map</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/chat">Chat</NuxtLink>
          </li>
          <li>
            <NuxtLink to="/my-page">My Page</NuxtLink>
          </li>
        </ul>
        <NuxtLink to="/login"> <icon name="material-symbols:account-circle-full" class="iconic" /> </NuxtLink>
        <icon name="material-symbols:dark-mode-outline" class="iconic" @click="$colorMode.preference = 'dark'"/>
        <icon name="material-symbols:wb-sunny-outline" class="iconic" @click="$colorMode.preference = 'light'"/>
      </div>
    </header>
    <hr>
    <NuxtPage />
  </div>
</template>

<script setup>

</script>

<style>
@import '~/assets/main.css';

.iconic{
  margin-top: 18px;
  size: 20em;
  color: var(--color-primary);
}

.iconic:hover {
  cursor: pointer;
}

.container {
  text-align: center;
  padding: 50px;
  margin: 0 auto;
}

.navbar {
  display: flex;
  justify-content: center;
}

.navbar ul {
  display: flex;
  line-height: 300%
}

.navbar ul li {
  list-style: none;
  margin: 0 15px;
}

p {
  padding: 20px 0;
  margin: 0;
}

.note {
  transition: all 0.3s;
  display: inline-block;
  padding: 15px 15px;
  border-radius: 5px;
  background-color: var(--bg-secondary);
  color: var(--color-secondary);
}

</style>
