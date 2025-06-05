import React from 'react';
import { Bubble } from "@typebot.io/react";



const WhatsAppButton: React.FC = () => {
  return (
    <Bubble
      typebot="open-ai-assistant-chat-30pe3ns"
      apiHost="https://bot.autoiax.com"
      prefilledVariables={{

      }}
      previewMessage={{
        message: "¡Hola! Soy Vitorio, tu asesor legal. Cuéntame tu consulta y estaré encantado de ayudarte 👇",
        autoShowDelay: 5000,
        avatarUrl:
          "https://images.unsplash.com/photo-1633625576932-348e73c45e82?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      }}
      theme={{
        placement: "left",    
        button: {
          backgroundColor: "#666460",
          customIconSrc:
            "https://images.unsplash.com/photo-1633625576932-348e73c45e82?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            /*customCloseIconSrc: "",*/
            size: "65px",
          
        },
        previewMessage: { backgroundColor: "#ffffff", textColor: "black", closeButtonBackgroundColor: "#666460"},
        chatWindow: { backgroundColor: "#fff" }
      }}
    />
  );
};

export default WhatsAppButton;