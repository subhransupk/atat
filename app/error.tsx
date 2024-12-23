"use client";

import { useEffect } from "react";

// Error logging function
function logErrorToService(error: Error) {
  // In a production environment, you would send this to your error tracking service
  if (process.env.NODE_ENV === "development") {
    console.error("Error occurred:", error);
  }
}

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logErrorToService(error);
  }, [error]);

  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] px-4">
      <h2 className="text-2xl font-bold text-center mb-4">Something went wrong!</h2>
      <button
        onClick={() => reset()}
        className="px-4 py-2 bg-primary text-white rounded-md hover:bg-primary/90 transition-colors"
      >
        Try again
      </button>
    </div>
  );
}
