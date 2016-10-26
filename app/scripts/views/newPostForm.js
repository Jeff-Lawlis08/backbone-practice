import $ from 'jquery';
import Backbone from 'backbone';

function renderNewPost(posts) {
  const newPost = $(`
<form class="post-form">
  <input class ="title" type="text" name="title" placeholder="title"></input>
  <textarea class="body" placeholder="body contents"></textarea>
  <input class="submit" type="submit" name="name" value="save">
</form>
    `);
    newPost.on('submit', function(e) {
      e.preventDefault();
      const title = $('.title').val();
      const body = $('.body').val();
      posts.create({title, body}, {
        success: () => {
          location.hash = 'posts';
        }
      });
    });
    return newPost;
}

export default renderNewPost;
