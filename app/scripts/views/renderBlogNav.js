import $ from 'jquery';
import Backbone from 'backbone';

function renderBlogNav(posts) {
  posts.fetch({
    success: function(data) {
      console.log('got stuff!', data);
      const blogNav = $(`
        <nav class="blogNav">
        </nav>
        `);
        $('.container').append(blogNav);
        data.forEach(function(post, i, arr) {
          let li = $(`
            <li class="blogTitles"><a href="${post.get('_id')}">${post.get('title')}</a></li>
            `);
            blogNav.append(li);
        });
    }
  });
}

export default renderBlogNav;
