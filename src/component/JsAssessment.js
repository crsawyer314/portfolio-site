import React, { useEffect, useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
// import PropTypes from 'prop-types';

const JsAssessment = ({ mdFile, prev, prevTitle, collapsed }) => {

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    fetch(mdFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [mdFile]);

  return (
    <div>
      <div id="main" className={collapsed ? "collapsed" : "expanded"}>
        <div className="inner">
          {/* <!-- Header --> */}
          <header id="header">
            <a href="index.html" className="logo">
              <strong>Catherine Sawyer</strong>
            </a>
            <ul className="icons">
              <li>
                <a href="https://www.linkedin.com/in/catherine-sawyer/" className="icon brands fa-linkedin">
                  <span className="label">LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://github.com/crsawyer314" className="icon brands fa-github">
                  <span className="label">GitHub</span>
                </a>
              </li>
            </ul>
          </header>

          {/* <!-- Content --> */}
          <section>
            <button>
              <a href={prev}>Prev - {prevTitle}</a>
            </button>
            <ReactMarkdown
              children={markdown}
              remarkPlugins={[remarkGfm]}
              components={{
                code({ node, inline, className, children, ...props }) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <SyntaxHighlighter
                      children={String(children).replace(/\n$/, '')}
                      // style={dark}
                      language={match[1]}
                      PreTag="div"
                      {...props}
                    />
                  ) : (
                    <code className={className} {...props}>
                      {children}
                    </code>
                  );
                },
              }}
            />

            <br />
            <button>
              <a href={prev}>Prev - {prevTitle}</a>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}

// JsAssessment.propTypes = {
//   markdown: PropTypes.string.isRequired,
//   prev: PropTypes.string.isRequired,
//   prevTitle: PropTypes.string.isRequired,
// };

// JsAssessment.defaultProps = {
//   markdown: `# My Markdown File

//   This is an example markdown file.`,
// };

export default JsAssessment;
