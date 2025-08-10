import React from 'react';
import { Routes, Route } from "react-router-dom";
import Principal from "./home";
import Exp from "./experiencia";
import Educacion from "./educacion";
import GalleryPage from "./GalleryPage";
import Layout from "./layout"; 
import Chatbot from './ChatBot';
import { ChatbotProvider, useChatbot } from './ChatbotContext';

//para manejar la lógica de visibilidad
const ChatbotController = () => {
  const { chatbotVisible, toggleChatbot } = useChatbot();

  return (
    <>
      {/* El ícono flotante que abre el chat */}
      <div 
          className="fixed bottom-5 right-5 z-50 cursor-pointer transition-transform hover:scale-110"
          onClick={toggleChatbot}
          title="¡Chatea conmigo!">
          <img 
              src="Bot/BullitaBot.png" 
              alt="Abrir chat" 
              className="w-16 h-16 rounded-full shadow-lg  bg-gradient-to-r from-[#1e3a8a] via-[#b91c1c] to-[#1e3a8a] 
            bg-[length:300%_300%] animate-neon-blue-red"/>
      </div>
      {/*para q se muestre o oculte */}
      {chatbotVisible && <Chatbot onClose={toggleChatbot} />}
    </>
  );
}

function App() {
  return (
    <ChatbotProvider>
      <Routes>
        <Route index element={<Principal />} />
        <Route path="/" element={<Layout />}>
          <Route path="experiencia" element={<Exp />} />
          <Route path="educacion" element={<Educacion />} />
          <Route path="proyectos" element={<GalleryPage />} />
        </Route>
      </Routes>
      <ChatbotController />
    </ChatbotProvider>
  );
}

export default App;