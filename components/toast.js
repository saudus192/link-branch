"use client";

import { createContext, useContext, useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";

/**
 * White-theme Toast system
 * Usage:
 *   1. Wrap your app (layout.jsx) with <ToastProvider>{children}</ToastProvider>
 *   2. In any component: const { showToast } = useToast();
 *      showToast("Link saved successfully!", "success");
 *      showToast("Something went wrong", "error");
 *      showToast("Please fill all required fields", "validation");
 */

const ToastContext = createContext(null);

const TOAST_STYLES = {
  success: {
    bg: "bg-white",
    border: "border-l-4 border-green-500",
    icon: "✅",
    text: "text-gray-800",
  },
  error: {
    bg: "bg-white",
    border: "border-l-4 border-red-500",
    icon: "❌",
    text: "text-gray-800",
  },
  validation: {
    bg: "bg-white",
    border: "border-l-4 border-yellow-500",
    icon: "⚠️",
    text: "text-gray-800",
  },
};

export function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = useCallback((message, type = "success", duration = 10000) => {
    const id = Date.now() + Math.random();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  }, []);

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}

      {/* Toast container - fixed top-right */}
      <div className="fixed top-4 right-4 z-9999 flex flex-col gap-2 w-[90%] max-w-sm">
        <AnimatePresence>
          {toasts.map((toast) => {
            const style = TOAST_STYLES[toast.type] || TOAST_STYLES.success;
            return (
              <motion.div
                key={toast.id}
                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, x: 50, scale: 0.9 }}
                transition={{ duration: 0.25 }}
                className={`${style.bg} ${style.border} ${style.text} shadow-lg rounded-md px-4 py-3 flex items-start gap-3`}
              >
                <span className="text-lg leading-none">{style.icon}</span>
                <p className="text-sm flex-1">{toast.message}</p>
                <button
                  onClick={() => removeToast(toast.id)}
                  className="text-gray-400 hover:text-gray-600 text-sm leading-none"
                >
                  ✕
                </button>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return ctx;
}