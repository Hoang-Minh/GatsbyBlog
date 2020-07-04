import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Head from "../components/head"

const AboutPage = () => {
  return (
    <div>
      <Layout>
        <Head title="About"></Head>
        <h1>About Me</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Porro eius
          sunt necessitatibus sed praesentium perspiciatis odio harum quos!
          Nobis id nihil deleniti eligendi reiciendis facilis omnis
          reprehenderit quas obcaecati unde?Reiciendis repudiandae nihil totam
          nostrum. Quaerat doloribus voluptas deleniti labore ullam fuga rem
          quisquam voluptatum molestiae cumque omnis, excepturi, commodi
          praesentium quidem? Necessitatibus aperiam, maiores optio incidunt
          obcaecati cumque voluptas.
        </p>
        <p>
          <Link to="/contact">Want to work with me ? Reach out.</Link>
        </p>
      </Layout>
    </div>
  )
}

export default AboutPage
