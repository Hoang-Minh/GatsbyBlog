import React from "react"
import Layout from "../components/layout"
import Head from "../components/head"

const ContactPage = () => {
  return (
    <div>
      <Layout>
        <Head title="Contact"></Head>
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
