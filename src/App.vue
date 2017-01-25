<template>
  <div id="app">
    <div class="blog-masthead">
      <div class="container">
        <nav class="blog-nav">
          <router-link  class="blog-nav-item" to="/" exact active-class="active">Home</router-link>
          <router-link  class="blog-nav-item" to="/new" exact active-class="active">Add post</router-link>
        </nav>
      </div>
    </div>

    <div class="container">
      <div class="blog-header">
        <h1 class="blog-title">The Bootstrap Blog</h1>
        <p class="lead blog-description">This is motherfucker blog!</p>
      </div>
      <div class="row">
        <router-view></router-view>
        <div class="col-sm-3 col-sm-offset-1 blog-sidebar">
          <div class="sidebar-module sidebar-module-inset">
            <h4>About</h4>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
          </div>
          <div class="sidebar-module">
            <h4>Elsewhere</h4>
            <ol class="list-unstyled">
              <li><a href="https://github.com/voroncv">GitHub</a></li>
              <li><a href="https://telegram.me/voroncov">Telegram</a></li>
              <li><a href="https://www.instagram.com/voroncv/">Instagram</a></li>
            </ol>
          </div>
        </div>
      </div>
    </div>
    <footer class="blog-footer">
      <p>Company name 2017</p>
      <p><a href="#">Back to top</a></p>
    </footer>
  </div>
</template>

<script>

export default {
  name: 'app'
}
</script>