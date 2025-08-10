import React, { useState, useEffect, useRef } from 'react';

import { useChatbot, aiContext } from './ChatbotContext';

const Chatbot = ({onClose}) => {
  // obteneeer historial
  const { messages, setMessages } = useChatbot(); 
  
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const getAIResponse = async (userInput) => {
    setIsLoading(true);
    let chatHistory = [
        { role: "user", parts: [{ text: aiContext }] },
        { role: "model", parts: [{ text: "Entendido. Soy BullitaBot y estoy listo para ayudar." }] }
    ];
    
    messages.forEach(msg => {
        if (msg.from === 'bot') {
            chatHistory.push({ role: "model", parts: [{ text: msg.text }] });
        } else {
            chatHistory.push({ role: "user", parts: [{ text: msg.text }] });
        }
    });
    chatHistory.push({ role: "user", parts: [{ text: userInput }] });

    try {
      const payload = { contents: chatHistory };
      const apiKey = "AIzaSyCijGYSxltQRKSdhfe__9MhKxthoKaMC6g";
      const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash-preview-05-20:generateContent?key=${apiKey}`;

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`Error de la API: ${response.statusText}`);
      }

      const result = await response.json();
      const botResponse = result.candidates[0].content.parts[0].text;
      return botResponse;

    } catch (error) {
      console.error("Error al contactar la IA:", error);
      return "Lo siento, tuve un problema para conectarme. Inténtalo de nuevo.";
    } finally {
      setIsLoading(false);
    }
  };

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    const userMessage = { from: 'user', text: input };
    
    // act el historial
    setMessages(prev => [...prev, userMessage]);
    
    const currentInput = input;
    setInput('');

    const botResponseText = await getAIResponse(currentInput);
    const botMessage = { from: 'bot', text: botResponseText };
    
    // act con respuesta del bot
    setMessages(prev => [...prev,botMessage]);
  };

  return (
      //DIV PRINCIPAL
      <div className="fixed bottom-24 right-5 w-85 h-106 bg-[#050505] rounded-lg shadow-xl flex flex-col border border-indigo-500/50">
      {/* Cabecera con botón de cierre */}
      <div className="p-3 border-b border-gray-700 flex justify-between items-center text-white font-bold">
        <span>Asistente Virtual</span>
        <button 
          onClick={onClose} 
          className="text-gray-400 hover:text-white text-5xl leading-none font-bold"
          title="Cerrar chat">&times;</button>
      </div>

      {/* DIV DE MSJs*/}
      <div className="flex-1 p-3 overflow-y-auto space-y-4">
        {messages.map((msg, index) => (
          <div key={index} className={`flex ${msg.from === 'user' ? 'justify-end' : 'justify-start'}`}>
            {msg.from === 'bot' &&
            <img src="Bot/BullitaBot.png" className='w-8 h-8 rounded-full object-cover border-2 border-indigo-700 mr-1'></img>}
            <div className={`p-2 rounded-xl max-w-[80%] text-sm ${
              msg.from === 'bot' ? 'bg-indigo-600 text-white' : 'bg-gray-600 text-white'
            }`}>
              {msg.text}
            </div>
          </div>
        ))}
        {isLoading && (
            <div className="flex justify-start">
                <div className="p-2 rounded-lg max-w-xs text-sm bg-indigo-600 text-white">
                    BullitaBot está escribiendo...
                </div>
            </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/*INPUT USER*/}
      <div className="p-3 border-t border-gray-700 flex">
        <input
          type="text"
          className="flex-1 bg-gray-700 text-white rounded-xl p-2 outline-none focus:ring-2 focus:ring-indigo-500"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder="Escribe tu pregunta..."
          disabled={isLoading}
        />
        <button
          onClick={handleSend}
          disabled={isLoading}
        >
          <img className="w-5 h-5" src="Bot/Enviar.png"></img>
        </button>
      </div>
    </div>
  );
};

export default Chatbot;