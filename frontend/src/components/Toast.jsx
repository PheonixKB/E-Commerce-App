import { AlertCircle, CheckCircle2, X } from "lucide-react";

const Toast = ({
  show,
  message,
  type = "error",
  onClose,
}) => {
  if (!show) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-50 w-96 overflow-hidden rounded-xl border border-stone-200 bg-white shadow-2xl"
    >
      {/* Content */}
      <div className="flex items-start gap-3 p-4">

        {type === "error" ? (
          <AlertCircle className="mt-0.5 text-red-500" size={22} />
        ) : (
          <CheckCircle2 className="mt-0.5 text-green-500" size={22} />
        )}

        <div className="flex-1">
          <h4 className="font-semibold text-stone-900">
            {type === "error"
              ? "Invalid Email"
              : "Success"}
          </h4>

          <p className="mt-1 text-sm text-stone-600">
            {message}
          </p>
        </div>

        <button
          onClick={onClose}
          className="text-stone-400 hover:text-stone-700"
        >
          <X size={18} />
        </button>

      </div>

      {/* Reverse Loading Bar */}
      <div className="h-1 bg-stone-200">

        <div
          className={`h-full ${
            type === "error"
              ? "bg-red-500"
              : "bg-green-500"
          } animate-toast`}
        />

      </div>
    </div>
  );
};

export default Toast;