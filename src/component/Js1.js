import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import remarkGfm from 'remark-gfm';
import PropTypes from 'prop-types';

const Js1 = ({ props, collapsed }) => {

  const [markdown, setMarkdown] = useState('');

  useEffect(() => {
    // Get the contents from the Markdown file and update the state with the fetched data
    fetch(props.mdFile)
      .then((res) => res.text())
      .then((text) => setMarkdown(text));
  }, [props.mdFile]);

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
              <a href={props.prev}>Prev - {props.prevTitle}</a>
            </button>
            <button>
              <a href={props.next}>Next - {props.nextTitle}</a>
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
              <a href={props.prev}>Prev - {props.prevTitle}</a>
            </button>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button>
                <a href={props.next}>Next - {props.nextTitle}</a>
              </button>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Js1.propTypes = {
  mdFile: PropTypes.string.isRequired,
  prev: PropTypes.string.isRequired,
  next: PropTypes.string.isRequired,
  prevTitle: PropTypes.string.isRequired,
  nextTitle: PropTypes.string.isRequired,
};

Js1.defaultProps = {
  mdFile: '',
};

export default Js1;
