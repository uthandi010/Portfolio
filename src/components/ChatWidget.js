import React, { useEffect, useMemo, useState } from "react";
import { Bot, MessageSquareText, SendHorizonal, X } from "lucide-react";
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
    text: "Hello, I'm Uthandi's portfolio agent. Ask me about skills, projects, experience, resume, or contact details.",
  },
];

const getAgentReply = (question) => {
  const normalized = question.toLowerCase();

  if (
    normalized.includes("build") ||
    normalized.includes("work") ||
    normalized.includes("do")
  ) {
    return "Uthandi builds full-stack applications with polished frontends, reliable backend systems, and mobile-friendly product experiences.";
  }

  if (
    normalized.includes("tech") ||
    normalized.includes("stack") ||
    normalized.includes("skills") ||
    normalized.includes("use")
  ) {
    return "His main stack includes React, Vue 3, Python (FastAPI), Ruby on Rails, Node.js, C# (.NET/.NET MAUI), SQL, MongoDB, Git, and GitHub Actions for CI.";
  }

  if (
    normalized.includes("experience") ||
    normalized.includes("job") ||
    normalized.includes("company")
  ) {
    return "He is working as a Full-Stack Developer at Francium Tech since February 2025, building applications across Python, Rails, React, Vue 3, .NET, and .NET MAUI.";
  }

  if (
    normalized.includes("project") ||
    normalized.includes("portfolio") ||
    normalized.includes("apps")
  ) {
    return "Featured work includes six full-stack SaaS-style apps: BoardRoom (project management), BookedIn (appointment booking), LinkFolio (link-in-bio with analytics), HelpDeskly (a support helpdesk), ShelfSpace (inventory with a native desktop client), and PayDesk (subscription billing).";
  }

  if (
    normalized.includes("contact") ||
    normalized.includes("hire") ||
    normalized.includes("email") ||
    normalized.includes("linkedin") ||
    normalized.includes("whatsapp")
  ) {
    return "You can reach him by email at uthandi40@gmail.com, or through LinkedIn, GitHub, and Instagram in the contact section.";
  }

  if (normalized.includes("resume") || normalized.includes("cv")) {
    return "There's no downloadable resume posted here yet — email uthandi40@gmail.com and he'll send one over.";
  }

  return "I can help with skills, projects, experience, resume, or contact details. Try asking what he builds or how to contact him.";
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
        <div className="chat-panel reveal">
          <div className="chat-panel-top">
            <div className="chat-agent-meta">
              <span className="chat-agent-icon">
                <Bot size={18} />
              </span>
              <div>
                <strong>Uthandi Agent</strong>
                <small>Portfolio assistant online</small>
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

          <div className="chat-body">
            {messages.map((message, index) => (
              <div
                key={`${message.role}-${index}`}
                className={`agent-message ${message.role}`}
              >
                <span className="agent-role">
                  {message.role === "assistant" ? "Agent" : "You"}
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
              placeholder="Ask about skills, projects, contact..."
              aria-label="Ask the portfolio agent"
            />
            <button type="submit" className="chat-send-button" aria-label="Send">
              <SendHorizonal size={18} />
            </button>
          </form>
        </div>
      )}

      <button
        type="button"
        className="chat-fab"
        onClick={() => setIsOpen((open) => !open)}
        aria-label={isOpen ? "Close portfolio agent" : "Open portfolio agent"}
      >
        <MessageSquareText size={22} />
      </button>
    </div>
  );
};

export default ChatWidget;
