"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyAddress({ address }: { address: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(address);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // 클립보드 권한이 없는 환경에서는 조용히 무시
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      className="inline-flex items-center gap-1.5 text-sm text-ink/60 transition-colors hover:text-forest"
    >
      {copied ? <Check className="size-4" /> : <Copy className="size-4" />}
      {copied ? "복사되었습니다" : "주소 복사"}
    </button>
  );
}
