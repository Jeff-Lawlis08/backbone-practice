import $ from 'jquery';
import Backbone from 'backbone';

function renderSinglePost(posts) {
      const singleBlog = $(`
        <div class="blogShow">
        </div>
        `);
    $('.container').append(singleBlog);
    let id = (location.hash).split('/')[1];
    let currentPost = posts.get(id);


  let viewPost = $(`
    <h2 class="soloTitle">${currentPost.attribute.title}</h2>
    <p class="soloBody">${currentPost.attribute.body}</p>
    <span class="post-date">${currentPost.attribute.timestamp}</span>
    `);
    singleBlog.append(viewPost);
    return singleBlog;
  }
export default renderSinglePost;
