<template>
  <div class="col-sm-8 blog-main">
    <div class="blog-post" v-for="post in posts">
      <h2 class="blog-post-title">{{ post.title }}</h2>
      <p class="blog-post-meta">{{ post.date }}</p>
      <p>{{ post.full }}</p>
    </div>
  </div>
</template>

<script>
import * as Firebase from "firebase";

let config = {
  apiKey: "AIzaSyBesALoeQMrZAScDjAQ_gldi2jowlX6wbE",
  authDomain: "blog-d832c.firebaseapp.com",
  databaseURL: "https://blog-d832c.firebaseio.com",
  storageBucket: "blog-d832c.appspot.com",
  messagingSenderId: "182037371908"
}

let app = Firebase.initializeApp(config, "detail");
let db = app.database();
let postsRef = db.ref('posts');

export default {
  name: 'list',
  firebase() {
    return { posts: postsRef.orderByChild("link").equalTo(this.$route.params.id) }
  }
}
</script>