import React from 'react';
import { Popup } from "@typebot.io/react";



const ChatbotPopup: React.FC = () => {
  return (
    <Popup
      typebot="open-ai-assistant-chat-30pe3ns"
      apiHost="https://bot.autoiax.com"
      autoShowDelay={2000}
    />
  );
};

export default ChatbotPopup;