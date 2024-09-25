import React, { useState, useEffect } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';


export default function ChatScreen() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    // Set initial message
    setMessages([
      {
        _id: 1,
        text: 'Welcome to Echo!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'Echo Bot',
          avatar: 'https://path-to-your-echo-avatar.png',
        },
      },
    ]);
  }, []);

  const onSend = (newMessages = []) => {
    setMessages(GiftedChat.append(messages, newMessages));
  };

  return (
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1, // Current user ID
      }}
    />
  );
}
