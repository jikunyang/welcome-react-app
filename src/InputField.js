import React from 'react';

export default function InputField() {
  return (
    <div>
      <form action="/action_page.php">
      <label for="name">Your Name:</label>
      <input type="text" id="name" name="name"></input>
      <input type="submit" value="Submit"></input>
      </form>
    </div>
  );
}
