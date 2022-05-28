import Layout from "../components/Layout"
import Link from "next/link"
import { skills1, skills2, experiences, projects } from "../profile"

const Index = () => (
  <Layout>
    
    <header className="row mb-3">
        <div className="col-md-12">
          <div className="card card-body bg-light">
            <div className="row">
              <div className="col-md-4">
                <img className="img-fluid" src="seijo-lucas-profile-picture.jpg" alt="profile-picture"/>
              </div>
              <div className="col-md-8">
                <h1 className="mb-3">Lucas Seijo</h1>
                <h4 className="mb-3">Fullstack Blockchain Developer</h4>
                <p className="mb-4">I am passionate about programming and its power. The moment I wrote my first line of code I realized that this is what I want to do. I really enjoy it and it's fun. My goal is to be an excellent developer mixing my fullstack knowledge with my passion for the blockchain world.</p>
                <a href="https://www.linkedin.com/in/lucas-seijo-6b4318aa/" target="_blank" className="btn btn-secondary">Contact</a>
              </div>
            </div>
          </div>
        </div>
    </header>

    <div className="row mb-3">
      <div className="col-md-4">
        <div className="card bg-light h-100">
          <div className="card-body">
            
             <h3 className="mb-3">Skills</h3>

            <div className="row">
              <div className="col-6">
                {skills1.map((skill , i) => (
                  <div className="mt-2" key={i}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
              <div className="col-6">
                {skills2.map((skill , i) => (
                  <div className="mt-2" key={i}>
                    <p>{skill}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">

            <h3 className="mb-3">Experience</h3>
            <ul>
              {/* List Item Experience */}
              {experiences.map(({ title, description, from, to }, index) => (
                <li key={index}>
                  <h5>{title}</h5>
                  <p className="mt-2">
                    {from} {to ? `- ${to}` : "- Current"}
                  </p>
                  <p className="p-0">
                    {description}
                  </p>
                </li>
              ))}
            </ul>
                        
          </div>
        </div>
      </div>
    </div>

    {/* Porfolio */}
    <div className="row">
      <div className="col-md-12">
        <div className="card card-body bg-light">
          <div className="row">

            <div className="col-md-12 my-2">
              <h2 className="text-center">Portfolio</h2>
            </div>

            {projects.map(({ name, description, image, link}, index) => (
              <div className="col-md-4 p-2" key={index}>
                <div className="card h-100">
                  <div className="overflow">
                    <img
                      src={`/${image}`}
                      alt=""
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body">
                    <h4>{name}</h4>
                    <p>{description}</p>
                    <a href={link} target="_blank">Know More</a>
                  </div>
                </div>
              </div>
            ))}

            <div className="col-md-12 mt-4">
              <div className="text-center">
                <a href="https://github.com/Carmelitu?tab=repositories" target="_blank" className="btn btn-secondary">More Projects</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </Layout>
)

export default Index