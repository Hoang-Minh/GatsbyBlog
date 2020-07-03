import React from "react"
import Layout from "../components/layout"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <h1>Contact Me</h1>
        <p>
          The best way to contact me via{" "}
          <a
            href="https://github.com/Hoang-Minh"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Github
          </a>
        </p>
      </Layout>
    </div>
  )
}

export default ContactPage
