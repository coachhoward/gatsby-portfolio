import React from "react"
import picture from "../images/vscode.png"

class Bio extends React.Component  {
  render(){
    return(
      <div>

        <div className="line-numbers">
          <p>1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26 27 28 29 30 31 32 33 34</p>
        </div>
        <div className="divider">
        </div>

        <div className="about-content-container">

          <div className="comments">
              <p>{`// I look forward to helping`}</p>
              <p>{`/* you on your project */`}</p>
              <p>{`// please contact me`}</p> 
          </div>

            <div className="about-main-section">
             
              <ul className="about-list">
                <li>
                  <p><span style={{ color: "#FF97FF"}}>const myInfo = </span> &#123; </p>
                    <p className="tag-info"> first name: Chris, <br/  > <span>   </span>last name: Howard, <br/>
                    email:  <a href ="mailto:Chris@AppsArchitect.com" style={{ color: "#ffa500"}}>Chris@AppsArchitect.com</a> 
                    <br/> phone: (352)459-1298</p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#86FFF8"}}>const myBio = () => </span> &#123; </p>
                    <p className="tag-info"> <span style={{ color: "#FF97FF"}}>return  </span>“My experience with structural engineering, architectural design, and the general construction of large-scale industrial projects led me to be a software engineer. Being able to deliver the architecture that creates the roadmap to a solution is very satisfying. I put myself in the client’s shoes daily as I build the technology that solves problems specific to their needs”; </p>
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#94D381"}}>const techSkills = () => </span> &#123; </p>
                    <p className="tag-info"><span style={{ color: "#FF97FF"}}>return  </span>"Web: HTML,
                     Web: CSS, Web: Javascript, Dev: React, Dev: Express, Dev: node, Dev: UI/UX, Dev: Bootstrap, Dev: React Context, Dev: JSON/JSON API, Test: Jest, Dev: MongoDb, Dev: Postgress, Dev: Rest API, Dev: Rails, Dev: Git, Dev: Web Sockets";  </p>
                    {/* <p className="tag-info">Web: Javascript;</p>
                    <p className="tag-info">Framework: React;</p>
                    <p className="tag-info">Framework: Nodejs;</p>
                    <p className="tag-info">Cloud Platform: Heroku;</p> */}
                  <p>&#125;</p>
                </li>
                <li>
                  <p><span style={{ color: "#FF97FF"}}>const recentProjects = </span> &#123; </p>
                    <p className="tag-info">  </p>
                    <a href ="https://www.artistconcerts.com/" style={{ color: "#94D381"}}>Project: Artist Concerts,</a>
                    <p className="tag-info">  </p>
                    <a href ="https://coinstance.herokuapp.com/" style={{ color: "#ffa500"}}>Project: Fintech Coinstance,</a>
                    <p className="tag-info"> </p>
                    <a href ="https://coachhoward.github.io/froggerproject/" style={{ color: "#86FFF8"}}>Project: Frogger Video Game,</a>
                    <p className="tag-info"> </p>
                    <a href ="https://coinstance.herokuapp.com/" style={{ color: "#86FFF8"}}>Project: RealWealth FinTech,</a>
                    <p className="tag-info"> </p>
                    <a href ="https://artistconcertsfaqs.herokuapp.com/artists" style={{ color: "#ffa500"}}>Project: FAQ's Twilio' </a>


                    {/* <p className="tag-info" >Web: Frogger Video Game;</p>
                    <p className="tag-info">We: RealWealth;</p> */}
                    
                    {/* <p className="tag-info">Framework: Nodejs;</p>
                    <p className="tag-info">Cloud Platform: Heroku;</p> */}
                  <p>&#125;</p>
                </li>
              </ul>

              <div className="about-image-container">
                <img src={picture} /> 
              </div>

            </div>  
                     

        </div>
      </div>
  
    )
    
  }
}

export default Bio
