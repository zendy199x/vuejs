<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <a class="navbar-brand" href="#">Vue Router</a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav mr-auto">
        <router-link
          class="nav-item"
          tag="li"
          to="/"
          active-class="active"
          exact
          ><a class="nav-link">Home</a></router-link
        >

        <router-link class="nav-item" tag="li" to="/user/1" active-class="active"
          ><a class="nav-link">User</a></router-link
        >

        <router-link class="nav-item" tag="li" to="/user/10" active-class="active"
          ><a class="nav-link">Admin</a></router-link
        >
      </ul>
    </div>
  </nav>
</template>
