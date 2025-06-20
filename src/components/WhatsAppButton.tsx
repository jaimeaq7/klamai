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
        message: "¡Hola! Soy VitorIA, tu asesor legal. Cuéntame tu consulta y estaré encantado de ayudarte 👇",
        autoShowDelay: 2000,
        avatarUrl:
          "https://minio-go488ckkg444kcgswwkoc844.autoiax.com/publico/KLAMAI/abogado.png",
      }}
      theme={{
        placement: "left",    
        button: {
          backgroundColor: "#666460",
          customIconSrc:
            "https://minio-go488ckkg444kcgswwkoc844.autoiax.com/publico/KLAMAI/abogado.png",
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