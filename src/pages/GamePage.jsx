import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Eye, Trophy, Sparkles, Keyboard as KeyboardIcon } from 'lucide-react';

const QUESTIONS = [
  {
    answer: "CẦU ĐỒNG TỒN DỊ",
    hint: "Phương châm đoàn kết lâu dài, chặt chẽ, chân thành, mang ý nghĩa lấy cái chung để hạn chế cái khác biệt."
  },
  {
    answer: "HIỆP THƯƠNG DÂN CHỦ",
    hint: "Nguyên tắc hoạt động cốt lõi của Mặt trận dân tộc thống nhất, nơi mọi vấn đề được bàn bạc công khai để đi đến nhất trí."
  },
  {
    answer: "KHOAN DUNG",
    hint: "Thái độ cần có để xây dựng khối đại đoàn kết, thể hiện qua việc trân trọng phần thiện dù nhỏ nhất ở mỗi người."
  },
  {
    answer: "DÂN VẬN",
    hint: "Công tác giáo dục, tuyên truyền, giải thích và hướng dẫn để quần chúng hiểu rõ quyền lợi và trách nhiệm của mình."
  },
  {
    answer: "NHÂN DÂN",
    hint: "Quán triệt nguyên tắc 'Nước lấy (...) làm gốc', Hồ Chí Minh nhấn mạnh phải có niềm tin vào sức mạnh vô địch của lực lượng này."
  }
];

const ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

// Hàm chuẩn hóa tiếng Việt thành không dấu
const removeDiacritics = (str) => {
  return str
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/Đ/g, "D")
    .replace(/đ/g, "d")
    .toUpperCase();
};

const Tile = ({ char, isRevealed }) => {
  // Khoảng trắng không render ô
  if (char === " ") {
    return <div className="w-4 sm:w-8 h-16 sm:h-20 shrink-0" />;
  }

  return (
    <div className="relative w-12 h-16 sm:w-16 sm:h-20 shrink-0 select-none perspective-[1000px]">
      <motion.div
        className="w-full h-full relative"
        style={{ transformStyle: "preserve-3d" }}
        animate={{ rotateY: isRevealed ? 180 : 0 }}
        transition={{ type: "spring", stiffness: 60, damping: 14 }}
      >
        {/* Mặt trước (Khi bị che - Nền xanh) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-blue-500 to-indigo-700 rounded-lg shadow-[0_6px_0_#312e81,0_10px_15px_rgba(0,0,0,0.5)] border border-blue-400 flex items-center justify-center cursor-default"
          style={{ backfaceVisibility: "hidden" }}
        >
          <div className="w-1/2 h-1/2 rounded-sm bg-blue-300/20 shadow-inner" />
        </div>

        {/* Mặt sau (Khi lật ra - Hiển thị chữ) */}
        <div
          className="absolute inset-0 bg-gradient-to-b from-yellow-50 to-amber-100 rounded-lg shadow-[0_6px_0_#b45309,0_10px_15px_rgba(0,0,0,0.5)] flex items-center justify-center border-2 border-yellow-200"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <span className="text-3xl sm:text-4xl font-extrabold text-slate-800 tracking-tighter">
            {char}
          </span>
        </div>
      </motion.div>
    </div>
  );
};

const Keyboard = ({ guessedLetters, onGuess, isWon }) => {
  return (
    <div className="w-full max-w-4xl mx-auto mt-12 bg-slate-900/60 p-4 sm:p-6 rounded-3xl backdrop-blur-md border border-white/10 shadow-2xl">
      <div className="flex items-center gap-2 text-slate-400 mb-4 justify-center text-sm font-medium uppercase tracking-widest">
        <KeyboardIcon size={16} />
        Nhập phím hoặc click
      </div>
      <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
        {ALPHABET.map((letter) => {
          const isGuessed = guessedLetters.includes(letter);
          return (
            <button
              key={letter}
              disabled={isGuessed || isWon}
              onClick={() => onGuess(letter)}
              className={`
                w-10 h-12 sm:w-12 sm:h-14 rounded-lg font-bold text-lg sm:text-xl transition-all
                flex items-center justify-center shadow-md border-b-4 active:border-b-0 active:translate-y-1
                ${isGuessed 
                  ? "bg-slate-800 text-slate-600 border-slate-900 cursor-not-allowed opacity-50" 
                  : "bg-gradient-to-b from-slate-200 to-slate-400 text-slate-900 border-slate-500 hover:brightness-110 hover:shadow-lg"}
              `}
            >
              {letter}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default function GamePage() {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [guessedLetters, setGuessedLetters] = useState([]);
  const [forceReveal, setForceReveal] = useState(false);

  const currentQ = QUESTIONS[currentQIndex];
  const normalizedAnswer = useMemo(() => removeDiacritics(currentQ.answer), [currentQ.answer]);

  // Kiểm tra điều kiện thắng
  const isWon = useMemo(() => {
    return [...normalizedAnswer].every(char => 
      char === ' ' || guessedLetters.includes(char)
    ) || forceReveal;
  }, [normalizedAnswer, guessedLetters, forceReveal]);

  const handleGuess = useCallback((letter) => {
    const upperLetter = letter.toUpperCase();
    if (!ALPHABET.includes(upperLetter)) return;
    if (guessedLetters.includes(upperLetter) || isWon) return;

    setGuessedLetters(prev => [...prev, upperLetter]);
  }, [guessedLetters, isWon]);

  // Lắng nghe bàn phím vật lý
  useEffect(() => {
    const handleKeyDown = (e) => {
      // Chỉ nhận ký tự A-Z khi không focus vào input nào khác (mặc dù ở đây không có input)
      if (/^[a-zA-Z]$/.test(e.key) && !e.ctrlKey && !e.metaKey && !e.altKey) {
        handleGuess(e.key);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleGuess]);

  const resetBoard = () => {
    setGuessedLetters([]);
    setForceReveal(false);
  };

  const goToNext = () => {
    if (currentQIndex < QUESTIONS.length - 1) {
      setCurrentQIndex(prev => prev + 1);
      resetBoard();
    }
  };

  const goToPrev = () => {
    if (currentQIndex > 0) {
      setCurrentQIndex(prev => prev - 1);
      resetBoard();
    }
  };

  const revealAll = () => {
    setForceReveal(true);
  };

  // Tách từ để có thể xuống dòng (wrap) theo từng từ chứ không đứt ngang từ
  const words = currentQ.answer.split(' ');

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-indigo-950 to-rose-950 flex flex-col items-center justify-center p-4 sm:p-8 font-sans overflow-hidden relative">
      
      {/* Background Decor */}
      <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-blue-600/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-rose-600/20 rounded-full blur-[120px] pointer-events-none" />

      {/* Header & Controls */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 mb-8 relative z-10">
        <div className="flex gap-2">
          <button onClick={goToPrev} disabled={currentQIndex === 0} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 font-medium">
            <ChevronLeft size={18} /> Trước
          </button>
          <button onClick={goToNext} disabled={currentQIndex === QUESTIONS.length - 1} className="px-4 py-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center gap-1 font-medium">
            Tiếp <ChevronRight size={18} />
          </button>
        </div>

        <div className="text-rose-200/80 font-semibold tracking-widest text-sm bg-rose-950/50 px-4 py-1.5 rounded-full border border-rose-800/50">
          CÂU HỎI {currentQIndex + 1} / {QUESTIONS.length}
        </div>

        <button onClick={revealAll} disabled={isWon} className="px-5 py-2 bg-amber-500 hover:bg-amber-400 text-amber-950 rounded-lg transition shadow-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2">
          <Eye size={18} /> Mở toàn bộ
        </button>
      </div>

      {/* Hint Box */}
      <motion.div 
        key={`hint-${currentQIndex}`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-4xl bg-slate-800/80 backdrop-blur-xl border border-indigo-400/30 p-6 sm:p-8 rounded-3xl shadow-[0_0_40px_rgba(79,70,229,0.15)] relative z-10 mb-12 text-center min-h-[140px] flex items-center justify-center"
      >
        <p className="text-xl sm:text-2xl text-indigo-100 leading-relaxed font-medium">
          {currentQ.hint}
        </p>
      </motion.div>

      {/* Board */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center relative z-10 min-h-[250px]">
        <AnimatePresence>
          {isWon && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.5, y: -50 }}
              animate={{ opacity: 1, scale: 1, y: -90 }}
              className="absolute top-0 flex items-center gap-3 bg-gradient-to-r from-amber-400 to-yellow-500 text-amber-950 px-8 py-3 rounded-full font-bold text-2xl shadow-xl shadow-amber-500/20 z-20 border-2 border-yellow-200"
            >
              <Sparkles size={28} className="animate-pulse" />
              CHÍNH XÁC!
              <Trophy size={28} />
            </motion.div>
          )}
        </AnimatePresence>

        <div className="flex flex-wrap justify-center gap-y-4 gap-x-3 sm:gap-x-4 max-w-[90%]">
          {words.map((word, wordIdx) => (
            // Flex row cho mỗi từ để các ký tự trong một từ không bị rớt dòng ngẫu nhiên
            <div key={wordIdx} className="flex gap-1 sm:gap-2">
              {[...word].map((char, charIdx) => {
                const normChar = removeDiacritics(char);
                const isRevealed = guessedLetters.includes(normChar) || forceReveal;
                return (
                  <Tile key={`${wordIdx}-${charIdx}`} char={char} isRevealed={isRevealed} />
                );
              })}
            </div>
          ))}
        </div>
      </div>

      {/* Keyboard */}
      <div className="relative z-10 w-full mt-auto">
        <Keyboard guessedLetters={guessedLetters} onGuess={handleGuess} isWon={isWon} />
      </div>

    </div>
  );
}