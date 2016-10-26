import $ from 'jquery';
import Backbone from 'backbone';

function renderPosts(posts) {
  posts.fetch({
    success: function(data) {
      console.log('got stuff!', data);
      const blogNav = $(`
        <nav class="blogNav">
        </nav>
        `);
      const singleBlog = $(`
        <div class="blogShow">
        </div>
        `);
        $('.container').append(blogNav, singleBlog);
        data.forEach(function(post, i, arr) {
          let li = $(`
            <li class="blogTitles"><a href="${post.get('_id')}">${post.get('title')}</a></li>
            `);
            blogNav.append(li);
        });
    }
  });
  const viewPost = $(`
    <h2 class="soloTitle">${posts.get('title')}</h2>
    <p class="soloBody">${posts.get('body')}</p>
    <span class="post-date">${posts.get('timestamp')}</span>
    `);
    console.log(viewPost);
}
export default renderPosts;
