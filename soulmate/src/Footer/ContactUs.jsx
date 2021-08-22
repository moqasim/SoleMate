import React from "react";
import { useState } from "react";

function ContactUs(props) {
  return (
    <div class="contactUsContainer">
      <form action="action_page.php">
        <label for="fullname">full name </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="Your name.."
        />
        <br />

        <div className="emailDiv">
          <label for="email">email </label>
          <input type="text" id="email" placeholder="your email.." />
        </div>
        <br />

        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="australia">united states of america</option>

          <option value="canada">france</option>

          <option value="usa">united arab emirates</option>
        </select>
        <br />

        <label for="subject">Subject</label>
        <textarea
          id="subject"
          name="subject"
          placeholder="Write something.."
        ></textarea>
        <br />

        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}

export default ContactUs;
