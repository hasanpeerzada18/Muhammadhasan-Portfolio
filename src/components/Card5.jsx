import { useState } from "react";
import { X } from "lucide-react";

const Card5 = ({ image }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Original Card */}
      <div
        data-aos="fade-up"
        onClick={() => setIsOpen(true)}
        className="w-full h-[220px] sm:h-[280px] md:h-[300px] lg:h-[350px] bg-black rounded-2xl bg-center bg-cover bg-no-repeat cursor-pointer"
        style={{ backgroundImage: `url(${image})` }}
      />

      {/* Expanded Image */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-md flex items-center justify-center p-4 md:p-8"
        >
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 md:top-6 md:right-6 text-white bg-white/10 hover:bg-white/20 p-3 rounded-full"
          >
            <X size={26} />
          </button>

          <img
            src={image}
            alt="Expanded artwork"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-5xl max-h-[85vh] object-contain rounded-xl animate-in zoom-in-95 duration-300"
          />
        </div>
      )}
    </>
  );
};

export default Card5;
