const ChatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");

let userMessage;

const API_KEY = "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";
const inputInitHeight = ChatInput.scrollHeight;

const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p></p>` : `<span class="material-symbols-outlined">smart_toy</span><p></p>`;
    chatLi.innerHTML = chatContent;
    chatLi.querySelector("p").textContent = message;
    return chatLi;
}

const API_URL = "https://api.openai.com/v1/chat/completions";
const MODEL = "gpt-3.5-turbo";

const generateResponse = (incomingChatLi) => {
    const messageElement = incomingChatLi.querySelector("p");

    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            model: MODEL,
            messages: [{ role: "user", content: userMessage }]
        })
    }

    fetch(API_URL, requestOptions)
        .then(res => res.json())
        .then(data => {
            // Filter responses to only those related to meal planning and food management
            let response = data.choices.find(choice => choice.message.content.toLowerCase().includes("meal") || choice.message.content.toLowerCase().includes("food"));
            
            // If there's a relevant response, display it. Otherwise, display a default message.
            if (response) {
                messageElement.textContent = response.message.content;
            } else {
                messageElement.textContent = "I'm sorry, I'm not sure how to help with that. Can you ask me something about meal planning or food management?";
            }
        })
        .catch((error) => {
            messageElement.classList.add("error");
            messageElement.textContent = "Oops! Something went wrong. Please try again.";
        })
        .finally(() => chatbox.scrollTo(0, chatbox.scrollHeight));
}

const handleChat = () => {
    userMessage = ChatInput.value.trim();
    if (!userMessage) return;
    ChatInput.value = "";
    ChatInput.style.height = `${inputInitHeight}px`;

    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);

    setTimeout(() => {
        const incomingChatLi = createChatLi("Thinking...", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);
    }, 600);
}

ChatInput.addEventListener("input", () => {
    ChatInput.style.height = `${inputInitHeight}px`;
    ChatInput.style.height = `${ChatInput.scrollHeight}px`;
});

ChatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey && window.innerWidth > 800) {
        e.preventDefault();
        handleChat();
    }
});

sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
