import Backbone from 'backbone';
import $ from 'jquery';
import renderNewPost from './views/newPostForm';
import Posts from './collections/posts';
import renderNewPerson from './views/newPersonForm';
import People from './collections/people';
import renderBlogNav from './views/renderBlogNav';
import renderSinglePost from './views/renderSinglePost';

let posts = new Posts();
let people = new People();

const Router = Backbone.Router.extend({
      routes: {
          '': 'renderNewPerson',
          'create': 'renderNewPost',
          'posts' : 'renderPost'
      },
      renderNewPost: function() {
        $('.container').empty();
        $('.container').append(renderNewPost(posts));
      },
      renderNewPerson: function() {
        $('.container').empty();
        $('.container').append(renderNewPerson(people));
        console.log('home');
      },
      renderPost: function () {
        $('.container').empty();
        $('.container').append(renderBlogNav(posts));
        $('.container').append(renderSinglePost(posts));
      }

});

const router = new Router();

export default router;
