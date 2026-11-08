import { Plus } from "lucide-react";

const FAQCard = ({
  number,
  question,
  p,
  p1,
  p2,
  p3,
  answer,
  isOpen,
  onClick,
}) => {
  return (
    <div
      className={`rounded-2xl border p-5 md:p-6 transition-all duration-300 ${
        isOpen
          ? "border border-[#182E28]/10 bg-gradient-to-br from-[#F5F4F0] to-[#EAE8DF]"
          : "border border-[#182E28]/10 bg-gradient-to-br from-[#F5F4F0] to-[#EAE8DF] hover:border-[#182E28]/30"
      }`}
    >
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between gap-4 text-left"
      >
        <div className="flex items-center gap-4">
          <span className="text-xs text-gray-400">{number}</span>

          <h3 className="text-sm md:text-base font-semibold text-[#182E28]">
            {question}
          </h3>
        </div>

        <span className="shrink-0 rounded-full border border-[#182E28]/20 p-2">
          <Plus
            size={17}
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-45" : ""
            }`}
          />
        </span>
      </button>

      <div
        className={`grid transition-all duration-300 ${
          isOpen
            ? "grid-rows-[1fr] opacity-100 mt-5"
            : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-[#182E28]/10 pt-4 ml-8 text-sm leading-7 text-gray-500">
            {p && <p>{p}</p>}

            {(p1 || p2 || p3) && (
              <div className="my-3 space-y-1">
                {p1 && (
                  <p>
                    <span className="text-black">•</span> {p1}
                  </p>
                )}
                {p2 && (
                  <p>
                    <span className="text-black">•</span> {p2}
                  </p>
                )}
                {p3 && (
                  <p>
                    <span className="text-black">•</span> {p3}
                  </p>
                )}
              </div>
            )}

            {answer && <p>{answer}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQCard;
