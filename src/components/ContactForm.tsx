import React from "react";
import { Outlet } from "react-router-dom";

const ContactForm = () => {
  return (
    <div>
      <form>
        <input type="text" placeholder="Name" />
        <br />
        <input type="text" placeholder="Email" />
        <br />
        <textarea></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
