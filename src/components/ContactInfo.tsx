import React from "react";
import { Outlet } from "react-router-dom";

const ContactInfo = () => {
  return (
    <div>
      <p>Email: example@gmail.com</p>
      <p>Phone: +62812345678</p>
      <p>Address: Bandung, Jawa Barat</p>
    </div>
  );
};

export default ContactInfo;
