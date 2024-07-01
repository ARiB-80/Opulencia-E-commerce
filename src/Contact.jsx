import React, { useState } from "react";
import Footer from "./components/Footer";
import { useAuth0 } from "@auth0/auth0-react";

const Contact = () => {
  const { user, isAuthenticated } = useAuth0();
  const [formData, setFormData] = useState({
    username: isAuthenticated ? user.name : "",
    email: isAuthenticated ? user.email : "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <>
      <h2 className="text-center font-semibold text-2xl my-5">Contact</h2>
      <div className="mx-5">
        <div className="sm:rounded-tl-[150px] rounded-sm overflow-hidden gap-5 grid sm:grid-cols-2 grid-cols-1 justify-center sm:border border-[#0A0A0A]/40 mb-10 mx-auto max-w-[1000px]">
          <div className="sm:block hidden ">
            <img
              src="imgs/side.png"
              alt=""
              className="saturate-[0.8] object-cover h-full"
            />
          </div>
          <div className="sm:p-5 grid place-content-center">
            <form
              action="https://formspree.io/f/xrgnwvnd"
              method="POST"
              className="grid gap-4">
              <input
                type="text"
                placeholder="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
                autoComplete="off"
                className="p-3 border border-slate-300 rounded-sm"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                autoComplete="off"
                className="p-3 border border-slate-300 rounded-sm"
              />
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                required
                autoComplete="off"
                cols="80"
                rows="5"
                className="p-3 border border-slate-300 rounded-sm"></textarea>
              <input
                type="submit"
                value="Send"
                className="py-2 px-24 mx-auto cursor-pointer w-fit hover:bg-[#9ad6b5]/50 active:bg-[#397367] bg-[#9ad6b5] text-[#0A0B0A] border border-[#0A0B0A] rounded-sm font-semibold text-lg"
              />
            </form>
          </div>
        </div>
      </div>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3617.6144564055276!2d67.11308912510718!3d24.94520079186196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338a24e592ea7%3A0x396c11bf227c8d35!2sUBIT%20-%20Umaer%20Basha%20Institute%20of%20Information%20Technology!5e0!3m2!1sen!2s!4v1717768975306!5m2!1sen!2s"
        width="100%"
        height="400"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
      <Footer />
    </>
  );
};

export default Contact;
