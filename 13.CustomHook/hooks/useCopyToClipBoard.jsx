import React from "react";
import { useState } from "react";

export default function useCopyToClipBoard(text) {
  const [copied, setCopied] = useState(false);

  const copy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopied(true);
      })
      .catch(() => {
        setCopied(false);
      });
  };
  return [copied, copy];
}
