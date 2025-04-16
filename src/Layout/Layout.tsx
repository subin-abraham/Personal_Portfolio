'use client';

import React, { useEffect, useState } from 'react';
import Footer from "@/components/Footer";
import Header from "../components/Header";
import SplashCursor from "../components/SplashCursor";
import Meta from "@/meta/meta";
import ScrollingMessage from "@/components/ScrollingMessage";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    const fetchMessage = async () => {
      try {
        const res = await fetch('/common.json');
        if (res.ok) {
          const data = await res.json();
          setMessage(data.scrollMessage || '');
        } else {
          console.error('Failed to fetch message:', res.status);
        }
      } catch (error) {
        console.error('Error fetching message:', error);
      }
    };

    fetchMessage();

    const interval = setInterval(fetchMessage, 60000);
    return () => clearInterval(interval);
  }, []);

  const zeroWidthChars = /[\u200B\u200C\u200D\uFEFF]/g;
  const cleanedMessage = message.replace(zeroWidthChars, '');
  const hasMessage = cleanedMessage.trim().length > 0;

  return (
    <div className="custom-container">
      <Meta />
      <Header />
      {hasMessage && <ScrollingMessage message={message} />}
      <SplashCursor />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
