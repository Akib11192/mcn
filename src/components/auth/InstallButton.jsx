"use client";

import { useEffect, useRef, useState } from "react";

export default function InstallButton() {
  const deferredPrompt = useRef(null);
  const [isInstalled, setIsInstalled] = useState(false);
  const [showHelp, setShowHelp] = useState(false);

  useEffect(() => {
    const checkInstalled = () =>
      window.matchMedia("(display-mode: standalone)").matches ||
      window.navigator.standalone === true;

    setIsInstalled(checkInstalled());

    const handleBeforeInstall = (event) => {
      event.preventDefault();
      deferredPrompt.current = event;
    };

    const handleInstalled = () => {
      setIsInstalled(true);
      setShowHelp(false);
      deferredPrompt.current = null;
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstall);
    window.addEventListener("appinstalled", handleInstalled);

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstall);
      window.removeEventListener("appinstalled", handleInstalled);
    };
  }, []);

  async function handleInstall() {
    if (isInstalled) return;

    if (!deferredPrompt.current) {
      setShowHelp((previous) => !previous);
      return;
    }

    const promptEvent = deferredPrompt.current;
    deferredPrompt.current = null;

    await promptEvent.prompt();

    const { outcome } = await promptEvent.userChoice;

    if (outcome === "accepted") {
      setIsInstalled(true);
      setShowHelp(false);
    }
  }

  if (isInstalled) return null;

  return (
    <div className="flex flex-col items-center gap-3">
      <button
        type="button"
        onClick={handleInstall}
        className="inline-flex items-center justify-center gap-2 rounded-xl border border-amber-400/30 bg-amber-400/10 px-5 py-3 text-sm font-semibold text-amber-300 transition hover:border-amber-400/60 hover:bg-amber-400/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-amber-400"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="19"
          height="19"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <rect x="3" y="3" width="18" height="18" rx="4" />
          <path d="M12 7v10m-4-4 4 4 4-4" />
        </svg>
        Install MCN App
      </button>

      {showHelp && (
        <div
          className="max-w-sm rounded-xl border border-zinc-800 bg-zinc-900 p-4 text-sm leading-6 text-zinc-300"
          role="status"
        >
          <p className="font-semibold text-white">Install MCN Network</p>
          <p className="mt-2">
            <strong>Chrome on Android or desktop:</strong> open the browser menu
            and select Install app or Add to Home screen, if available.
          </p>
          <p className="mt-2">
            <strong>Safari on iPhone:</strong> tap Share, then Add to Home
            Screen.
          </p>
        </div>
      )}
    </div>
  );
}
