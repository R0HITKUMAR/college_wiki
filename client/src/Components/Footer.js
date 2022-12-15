import React from "react";

export default function Footer() {
  return (
    <React.Fragment>
      <footer class="site-footer">
        <div class="container">
          <div class="row">
            <div class="col-sm-12 col-md-6">
              <h6>About</h6>
              <p class="text-justify">
                College Wiki is a simple solution for the teachers and students
                to come near. With simple steps teacher can upload notes and
                students can use it. Also your suggestions are of great help to
                me. So please feel free to contact me.
              </p>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>Tech Stack</h6>
              <ul class="footer-links">
                <li>Express.js</li>
                <li>Node.js</li>
                <li>React.js</li>
                <li>MongoDB</li>
                <li>Bootstrap</li>
                <li>Material UI</li>
              </ul>
            </div>

            <div class="col-xs-6 col-md-3">
              <h6>About Me</h6>
              <ul class="footer-links">
                <li>
                  <a
                    target="_blank"
                    href="#"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a target="_blank" href="#">
                    Github
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="#"
                  >
                    Instagram
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <hr />
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-8 col-sm-6 col-xs-12">
              <p class="copyright-text">
                Copyright &copy; {new Date().getFullYear()} All Rights Reserved
                by Ayushi Jindal
              </p>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}
