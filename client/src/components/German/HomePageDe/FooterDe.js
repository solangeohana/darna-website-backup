/*eslint-disable*/
import React from "react";

// reactstrap components
import { Container } from "reactstrap";

function FooterDe() {
  return (
    <footer className="footer" data-background-color="black">
      <Container>
        <nav>
          <ul>
            <li>
              <a
                href="/blog"
                target="_blank"
                onClick={(e) => e.preventDefault()}
              >
                Blog
              </a>
            </li>
            <li>
              <a
                href="/legal"
                target="_blank"
                onClick={(e) => e.preventDefault()}
              >
                Legal
              </a>
            </li>
            <li>
              <a
                href="/career"
                target="_blank"
                onClick={(e) => e.preventDefault()}
              >
                Karriere
              </a>
            </li>
          </ul>
        </nav>
        <div className="copyright" id="copyright">
          © {new Date().getFullYear()}, Codiert von{" "}
          <a
            href="https://www.linkedin.com/in/solange-ohana"
            target="_blank"
          >
            Solange Ohana
          </a>
        </div>
      </Container>
    </footer>
  );
}

export default FooterDe;
