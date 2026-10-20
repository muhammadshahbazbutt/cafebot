const MOCK_REPLY = "Hi! I’m CafeBot. My AI brain isn’t connected yet.";
const REPLY_DELAY_MS = 600;

const toggleBtn = document.getElementById("chat-toggle");
const closeBtn = document.getElementById("chat-close");
const chatWindow = document.getElementById("chat-window");
const messages = document.getElementById("chat-messages");
const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");

function setOpen(open) {
  chatWindow.hidden = !open;
  toggleBtn.setAttribute("aria-expanded", String(open));
  toggleBtn.setAttribute("aria-label", open ? "Close chat" : "Open chat");
  if (open) {
    // restart the slide-up animation each time the window opens
    chatWindow.classList.remove("is-open");
    void chatWindow.offsetWidth;
    chatWindow.classList.add("is-open");
    input.focus();
  } else {
    toggleBtn.focus();
  }
}

function addMessage(text, who) {
  const bubble = document.createElement("div");
  bubble.className = "chat-bubble chat-bubble-" + who;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}

toggleBtn.addEventListener("click", () => setOpen(chatWindow.hidden));
closeBtn.addEventListener("click", () => setOpen(false));
chatWindow.addEventListener("keydown", (e) => {
  if (e.key === "Escape") setOpen(false);
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  addMessage(text, "user");
  input.value = "";
  setTimeout(() => addMessage(MOCK_REPLY, "bot"), REPLY_DELAY_MS);
});
