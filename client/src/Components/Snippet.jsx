import React from "react";
import { Badge } from "react-bootstrap";
import hljs from "highlight.js";
import "highlight.js/styles/default.css";

// config for highlight.js
hljs.configure({
  ignoreUnescapedHTML: true,
});

// render code snippents
export default class Snippet extends React.Component {
  componentDidMount() {
    this.highlightCallBack();
  }

  componentDidUpdate() {
    this.highlightCallBack();
  }

  highlightCallBack = () => {
    // gets document elements to apply effect
    document.querySelectorAll("pre").forEach((element) => {
      try {
        hljs.highlightElement(element);
      } catch (e) {
        console.log(e);
      }
    });
  };

  render() {
    const { language, storage } = this.props;
    const Lang = language.replace(/^\w/, (c) => c.toUpperCase());
    return (
      <div className="snippet-panel">
        <div style={{ height: 10 }} />
        <div className="snippet-header">
          <Badge bg="secondary">{Lang}</Badge>
        </div>
        <div className="snippet-code">
          <pre className={language} style={{ margin: 0 }}>
            <code>{storage}</code>
          </pre>
        </div>
        <div style={{ height: 15 }} />
      </div>
    );
  }
}
