<template>
  <div class="col-sm-8 blog-main">
  	<h2>Add new post</h2>
    <form id="form" v-on:submit.prevent="addPost">
  		<div class="form-group">
    		<label for="postTitle">Post name</label>
    		<input type="text" id="postTitle" v-model="newPost.title" class="form-control" placeholder="Enter post name">
  		</div>
  		<div class="form-group">
    		<label for="postLink">Link</label>
    		<input type="text" id="postLink" v-model="newPost.link" class="form-control" placeholder="Enter link">
  		</div>
  		<div class="form-group">
    		<label for="postDate">Date</label>
    		<input type="text" id="postDate" v-model="newPost.date" class="form-control" placeholder="Enter Date">
  		</div>
		<div class="form-group">
    		<label for="postLittle">Little description</label>
    		<textarea class="form-control" id="postLittle" v-model="newPost.little" rows="3"></textarea>
  		</div>
  		<div class="form-group">
    		<label for="postFull">Full description</label>
    		<textarea class="form-control" id="postFull" v-model="newPost.full" rows="3"></textarea>
  		</div>
  		<button type="submit" class="btn btn-primary">Send</button>
  	</form>
  	<br />
  </div>
</template>

<script>
import * as Firebase from "firebase";
import toastr from "toastr";

let config = {
  apiKey: "AIzaSyBesALoeQMrZAScDjAQ_gldi2jowlX6wbE",
  authDomain: "blog-d832c.firebaseapp.com",
  databaseURL: "https://blog-d832c.firebaseio.com",
  storageBucket: "blog-d832c.appspot.com",
  messagingSenderId: "182037371908"
}

let app = Firebase.initializeApp(config, "new");
let db = app.database();
let postsRef = db.ref('posts');

export default {
  name: 'new',
  data () {
  	return {
  		newPost: {
  			title: '',
  			link: '',
  			date: '',
  			little: '',
  			full: ''
  		}
  	}
  },
  methods: {
  	addPost: function() {
  		postsRef.push(this.newPost);
  		this.newPost.title = '';
  		this.newPost.link = '';
  		this.newPost.date = '';
  		this.newPost.little = '';
  		this.newPost.full = '';
  		toastr.success("new post success add!");
  	}
  }
}
</script>