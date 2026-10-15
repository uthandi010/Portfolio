import React, { useEffect, useMemo, useState } from "react";
import { MessageSquare, X, Send, Sparkles } from "lucide-react";
import { EXPERIENCE_START_LABEL } from "../experience";
import "../fresh-styles.css";

const promptSuggestions = [
  "What does Uthandi build?",
  "Which technologies does he use?",
  "Tell me about his experience.",
  "How can I contact him?",
];

const initialMessages = [
  {
    role: "assistant",
    text: "Hi! I'm a quick-answers assistant for this portfolio (canned replies, not an AI model). Ask about his tech stack, projects, experience, or contact details.",
  },
];

const hasWord = (text, words) =>
  words.some((word) => new RegExp(`\\b${word}\\b`).test(text));

const getAgentReply = (question) => {
  const normalized = question.toLowerCase();

  if (hasWord(normalized, ["build", "builds", "work", "works"])) {
    return "Uthandi builds high-performance full-stack applications with responsive frontends, secure backend APIs, and native desktop/mobile solutions.";
  }

  if (hasWord(normalized, ["tech", "technology", "technologies", "stack", "skills", "use", "uses"])) {
    return "His core tech stack includes React, Vue 3, TypeScript, Python (FastAPI), Ruby on Rails, Node.js (Express), C# (.NET Core & .NET MAUI), MongoDB, SQL, and GitHub Actions CI/CD.";
  }

  if (hasWord(normalized, ["experience", "job", "company"])) {
    return `He works as a Full-Stack Developer at Francium Tech (since ${EXPERIENCE_START_LABEL}), architecting web and mobile solutions across Python, Rails, React, Vue 3, .NET, and .NET MAUI.`;
  }

  if (hasWord(normalized, ["project", "portfolio", "apps", "app"])) {
    return "He has built 6 full-stack projects (none are deployed; source is on GitHub): BoardRoom (project management), BookedIn (appointment booking engine), LinkFolio (analytics builder), HelpDeskly (support portal), ShelfSpace (.NET MAUI desktop inventory), and PayDesk (subscription billing).";
  }

  if (hasWord(normalized, ["contact", "hire", "email", "linkedin"])) {
    return "You can reach out via email at uthandi40@gmail.com or connect on LinkedIn and GitHub.";
  }

  if (hasWord(normalized, ["resume", "cv"])) {
    return "You can download his resume using the 'Résumé' button in the top navigation bar or request it directly via email at uthandi40@gmail.com.";
  }

  return "I can assist with questions about Uthandi's skills, projects, background, resume, or contact info. Try clicking one of the suggestions below!";
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState(initialMessages);
  const [question, setQuestion] = useState("");

  const visibleSuggestions = useMemo(() => promptSuggestions.slice(0, 3), []);

  useEffect(() => {
    const openAgent = () => {
      setIsOpen(true);
    };

    window.addEventListener("portfolio-agent:open", openAgent);

    return () => {
      window.removeEventListener("portfolio-agent:open", openAgent);
    };
  }, []);

  const submitQuestion = (nextQuestion) => {
    const trimmedQuestion = nextQuestion.trim();

    if (!trimmedQuestion) {
      return;
    }

    setMessages((currentMessages) => [
      ...currentMessages,
      { role: "user", text: trimmedQuestion },
      { role: "assistant", text: getAgentReply(trimmedQuestion) },
    ]);
    setQuestion("");
    setIsOpen(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    submitQuestion(question);
  };

  return (
    <div className="chat-widget">
      {isOpen && (
        <div
          className="chat-panel"
          role="dialog"
          aria-label="Portfolio quick answers"
        >
          <div className="chat-panel-top">
            <div className="chat-agent-meta">
              <div className="chat-agent-avatar">
                <Sparkles size={16} aria-hidden="true" />
              </div>
              <div>
                <strong>Quick Answers</strong>
                <small>Portfolio FAQ</small>
              </div>
            </div>

            <button
              type="button"
              className="chat-close-button"
              onClick={() => setIsOpen(false)}
              aria-label="Close chat"
            >
              <X size={18} />
            </button>
          </div>

          <div className="chat-body" aria-live="polite">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`agent-message ${message.role}`}
              >
                <span className="agent-role">
                  {message.role === "assistant" ? "Assistant" : "You"}
                </span>
                <p>{message.text}</p>
              </div>
            ))}
          </div>

          <div className="chat-suggestions">
            {visibleSuggestions.map((prompt) => (
              <button
                key={prompt}
                type="button"
                className="prompt-chip"
                onClick={() => submitQuestion(prompt)}
              >
                {prompt}
              </button>
            ))}
          </div>

          <form className="chat-form" onSubmit={handleSubmit}>
            <input
              type="text"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              className="agent-input"
              placeholder="Ask a question..."
              aria-label="Ask a question about the portfolio"
            />
            <button type="submit" className="chat-send-button" aria-label="Send">
              <Send size={15} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close quick answers" : "Open portfolio quick answers"}
        title="Quick answers about Uthandi"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
      </button>
    </div>
  );
};

export default ChatWidget;
