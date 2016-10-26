import $ from 'jquery';
import Backbone from 'backbone';

function renderNewPerson(people) {
  const newPerson = $(`
<form class="person-form">
  <input class="first" type="text" name="first" placeholder="First Name"></input>
  <input class="last" type="text" name="last" placeholder="Last Name"></input>
  <input class="address" type="text" name="address" placeholder="Address"></input>
  <input class="phone" type="number" name="phone" placeholder="Phone"></input>
  <input class="save" type="submit" name="name" value="save">
  </form>
    `);
    newPerson.on('submit', function(e) {
      e.preventDefault();
      const firstName = $('.first').val();
      const lastName = $('.last').val();
      const address = $('.address').val();
      const phone = $('.phone').val();
      people.create({firstName, lastName, address, phone}, {
        success: () => {
          location.hash='people';
        }
      });
    });
    return newPerson;
}

export default renderNewPerson;
