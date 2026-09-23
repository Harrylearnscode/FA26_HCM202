import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Star,
  Users,
  HeartHandshake,
  Shield,
  Layers,
  X,
  Quote,
  CheckCircle2,
  Network,
  MessageSquare
} from "lucide-react";

const theorySections = [
  {
    id: "01",
    title: "Vai trò của đại đoàn kết toàn dân tộc",
    icon: Star,
    iconTone: "bg-rose-100 text-rose-700",
    glow: "from-rose-400/20 via-transparent to-transparent",
    usePopup: false,
    preview:
      "Đại đoàn kết là vấn đề có ý nghĩa chiến lược, quyết định thành công của cách mạng.",
  },
  {
    id: "02",
    title: "Lực lượng của khối đại đoàn kết toàn dân tộc",
    icon: Users,
    iconTone: "bg-emerald-100 text-emerald-700",
    glow: "from-emerald-400/20 via-transparent to-transparent",
    usePopup: false,
    preview:
      "Chủ thể bao gồm toàn thể nhân dân, nền tảng là liên minh công - nông - trí thức.",
  },
  {
    id: "03",
    title: "Điều kiện xây dựng khối đại đoàn kết toàn dân tộc",
    icon: HeartHandshake,
    iconTone: "bg-blue-100 text-blue-700",
    glow: "from-blue-400/20 via-transparent to-transparent",
    usePopup: true,
    preview:
      "Lấy lợi ích chung làm điểm quy tụ, khoan dung, độ lượng và có niềm tin vào nhân dân.",
  },
  {
    id: "04",
    title: "Hình thức và nguyên tắc tổ chức : Mặt trận dân tộc thống nhất",
    icon: Shield,
    iconTone: "bg-indigo-100 text-indigo-700",
    glow: "from-indigo-400/20 via-transparent to-transparent",
    usePopup: true,
    preview:
      "Mặt trận dân tộc thống nhất là nơi quy tụ, tập hợp mọi tổ chức và cá nhân yêu nước.",
  },
  {
    id: "05",
    title: "Phương thức xây dựng khối đại đoàn kết dân tộc",
    icon: Layers,
    iconTone: "bg-amber-100 text-amber-700",
    glow: "from-amber-400/20 via-transparent to-transparent",
    usePopup: true,
    preview:
      "Làm tốt công tác dân vận, thành lập các đoàn thể và tập hợp trong Mặt trận.",
  },
];

const motionVariant = {
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0 },
};

const modalVariant = {
  hidden: { opacity: 0, scale: 0.95, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 },
  exit: { opacity: 0, scale: 0.95, y: 20 }
};

function SectionOneContent() {
  return (
    <div className="mt-8 space-y-6 text-left">
      <div className="bg-rose-50 border-l-4 border-rose-600 p-6 rounded-r-xl italic font-medium text-rose-800 flex items-start gap-4 shadow-sm">
        <Quote className="text-rose-400 shrink-0" size={32} />
        <p className="text-xl">"Đoàn kết, đoàn kết, đại đoàn kết - Thành công, thành công, đại thành công"</p>
      </div>
      
      <div className="space-y-4">
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-rose-900 mb-2">1. Đại đoàn kết là vấn đề chiến lược, quyết định thành công của cách mạng</h4>
          <li>Đại đoàn kết toàn dân tộc là vấn đề mang tính sống còn của dân tộc Việt Nam</li>
          <li>Trong mỗi giai đoạn cách mạng, đại đoàn kết toàn dân tộc là nhân tố quyết định sự thành bại của cách mạng</li>
        </div>
        <div className="bg-white p-5 rounded-2xl border border-slate-200 shadow-sm">
          <h4 className="font-bold text-rose-900 mb-2">2.Đại đoàn kết là mục tiêu và nhiệm vụ hàng đầu của cách mạng</h4>
          <p className="text-slate-700 leading-relaxed">
            Đại đoàn kết không chỉ là khẩu hiệu chiến lược mà còn là mục tiêu lâu dài của cách mạng.
          </p>
          <p className="text-slate-700 leading-relaxed">
            Đảng phải xem việc xây dựng khối đại đoàn kết là nhiệm vụ hàng đầu và thực hiện trong mọi lĩnh vực:
            <li>Đường lối.</li>
            <li>Chủ trương.</li>
            <li>Chính sách.</li>
            <li>Hoạt động thực tiễn.</li>
            <li>Công tác vận động nhân dân.</li>
          </p>
          <p>Hồ Chí Minh từng xác định mục đích của Đảng Lao động Việt Nam bằng tám chữ:<br/> 
              <strong>Đoàn kết toàn dân, phụng sự Tổ quốc.</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

function SectionTwoContent() {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-3 text-left">
      <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
        <div className="bg-emerald-100 p-3 rounded-full mb-3 text-emerald-700">
          <Users size={28} />
        </div>
        <h4 className="font-bold text-emerald-900 mb-2">Chủ thể của khối đại đoàn kết toàn dân tộc</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Bao gồm <strong>toàn thể nhân dân</strong> Việt Nam yêu nước, không phân biệt giai cấp, tầng lớp, tôn giáo, đảng phái hay giới tính.
        </p>
      </div>
      
      <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
        <div className="bg-emerald-100 p-3 rounded-full mb-3 text-emerald-700">
          <Layers size={28} />
        </div>
        <h4 className="font-bold text-emerald-900 mb-2">Nền tảng của khối đại đoàn kết dân tộc</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Được xây dựng trên cơ sở <strong>liên minh công nhân - nông dân - trí thức</strong>. Đây là "gốc" của đại đoàn kết.
        </p>
      </div>

      <div className="bg-white p-5 rounded-2xl border border-emerald-100 shadow-sm relative overflow-hidden flex flex-col items-center text-center">
        <div className="bg-emerald-100 p-3 rounded-full mb-3 text-emerald-700">
          <Star size={28} />
        </div>
        <h4 className="font-bold text-emerald-900 mb-2">Hạt nhân lãnh đạo</h4>
        <p className="text-sm text-slate-700 leading-relaxed">
          Sự đoàn kết và thống nhất trong Đảng là yếu tố "hạt nhân" trong khối đại đoàn kết toàn dân tộc
        </p>
      </div>
    </div>
  );
}

function SectionThreeContent() {
  return (
    <div className="mt-4 space-y-4 text-left">
      <p className="text-slate-700 leading-relaxed mb-4">Để xây dựng và củng cố khối đại đoàn kết, Chủ tịch Hồ Chí Minh đã chỉ ra 4 điều kiện cốt lõi:</p>
      
      <div className="grid sm:grid-cols-2 gap-4">
        <div className="flex gap-4 items-start bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">1</div>
          <div>
            <h4 className="font-bold text-blue-900">Lợi ích chung làm điểm quy tụ</h4>
            <p className="text-sm text-slate-700 mt-1">Phải lấy độc lập, tự do, hạnh phúc của dân tộc làm mục tiêu chung, đồng thời tôn trọng các lợi ích khác biệt chính đáng.</p>
          </div>
        </div>
        
        <div className="flex gap-4 items-start bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">2</div>
          <div>
            <h4 className="font-bold text-blue-900">Kế thừa truyền thống</h4>
            <p className="text-sm text-slate-700 mt-1">Phát huy truyền thống yêu nước, nhân nghĩa, tinh thần tương thân tương ái ngàn đời của dân tộc.</p>
          </div>
        </div>
        
        <div className="flex gap-4 items-start bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">3</div>
          <div>
            <h4 className="font-bold text-blue-900">Khoan dung, độ lượng</h4>
            <p className="text-sm text-slate-700 mt-1">Biết trân trọng phần thiện dù nhỏ nhất, không định kiến, cảm hóa cả những người từng lạc lối để quy tụ mọi lực lượng.</p>
          </div>
        </div>
        
        <div className="flex gap-4 items-start bg-blue-50/50 p-4 rounded-xl border border-blue-100">
          <div className="bg-blue-100 text-blue-700 rounded-full w-10 h-10 flex items-center justify-center font-bold shrink-0">4</div>
          <div>
            <h4 className="font-bold text-blue-900">Niềm tin vào nhân dân</h4>
            <p className="text-sm text-slate-700 mt-1">Quán triệt nguyên tắc "lấy dân làm gốc", tin tưởng tuyệt đối vào sức mạnh vô địch của quần chúng nhân dân.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function SectionFourContent() {
  return (
    <div className="mt-4 space-y-5 text-left">
      <div className="bg-indigo-50 p-5 rounded-2xl border border-indigo-100 flex items-center gap-4">
        <Shield className="text-indigo-600 shrink-0 w-12 h-12" />
        <p className="text-slate-800 font-medium">
          Mặt trận dân tộc thống nhất là nơi quy tụ mọi tổ chức và cá nhân yêu nước, 
          tập hợp mọi người dân nước Việt, cả trong nước và kiều bào sinh sống ở nước ngoài
        </p>
      </div>

      <h4 className="text-lg font-bold text-indigo-900 mt-6 mb-3">Các nguyên tắc hoạt động cơ bản:</h4>
      
      <ul className="space-y-4">
        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" />
          <span className="text-slate-700 text-sm leading-relaxed">
            <strong>Nền tảng và lãnh đạo:</strong> Được xây dựng trên nền tảng liên minh công - nông - trí thức và đặt dưới sự lãnh đạo vững chắc của Đảng Cộng sản.
          </span>
        </li>
        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" />
          <span className="text-slate-700 text-sm leading-relaxed">
            <strong>Hiệp thương dân chủ:</strong> Hoạt động dựa trên sự bàn bạc công khai, tôn trọng ý kiến của nhau để đi đến sự thống nhất chung.
          </span>
        </li>
        <li className="flex items-start gap-3 bg-white p-4 rounded-xl border border-slate-100 shadow-sm">
          <CheckCircle2 className="text-indigo-500 shrink-0 mt-0.5" />
          <span className="text-slate-700 text-sm leading-relaxed">
            <strong>Đoàn kết lâu dài, chân thành:</strong> Thực hiện phương châm <em>"cầu đồng tồn dị"</em> (lấy cái chung lớn để hạn chế những khác biệt nhỏ), giúp đỡ nhau cùng tiến bộ.
          </span>
        </li>
      </ul>
    </div>
  );
}

function SectionFiveContent() {
  return (
    <div className="mt-4 space-y-6 text-left">
      <p className="text-slate-700 leading-relaxed mb-2">Để hiện thực hóa khối đại đoàn kết, cần trải qua các bước và phương thức cụ thể:</p>
      
      <div className="space-y-4">
        <div className="flex gap-5 bg-white p-5 rounded-2xl border-l-4 border-amber-400 shadow-sm items-center">
          <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
            <MessageSquare size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-lg">1. Công tác dân vận</h4>
            <p className="text-sm text-slate-600 mt-1">
              Giáo dục, tuyên truyền, giải thích để quần chúng hiểu rõ quyền lợi. Phương pháp phải phù hợp tâm tư, trình độ, văn hóa và phong tục tập quán của nhân dân.
            </p>
          </div>
        </div>

        <div className="flex gap-5 bg-white p-5 rounded-2xl border-l-4 border-amber-500 shadow-sm items-center">
          <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
            <Users size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-lg">2. Thành lập các đoàn thể</h4>
            <p className="text-sm text-slate-600 mt-1">
              Tổ chức các hội nhóm linh hoạt, phù hợp với từng giai cấp, lứa tuổi, nghề nghiệp (ví dụ: Công đoàn, Đoàn Thanh niên, Hội Phụ nữ...) để dễ dàng tập hợp và giáo dục.
            </p>
          </div>
        </div>

        <div className="flex gap-5 bg-white p-5 rounded-2xl border-l-4 border-amber-600 shadow-sm items-center">
          <div className="bg-amber-100 p-3 rounded-full text-amber-600 shrink-0">
            <Network size={24} />
          </div>
          <div>
            <h4 className="font-bold text-slate-800 text-lg">3. Tập hợp trong Mặt trận</h4>
            <p className="text-sm text-slate-600 mt-1">
              Các tổ chức quần chúng không hoạt động rời rạc mà được gắn kết lại thành một khối sức mạnh vô địch thông qua hệ thống Mặt trận dân tộc thống nhất.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function renderSectionContent(sectionId) {
  if (sectionId === "01") return <SectionOneContent />;
  if (sectionId === "02") return <SectionTwoContent />;
  if (sectionId === "03") return <SectionThreeContent />;
  if (sectionId === "04") return <SectionFourContent />;
  if (sectionId === "05") return <SectionFiveContent />;
  return <div>Nội dung đang cập nhật...</div>;
}

function PopupModal({ onClose, title, children }) {
  return (
    // Sử dụng fixed inset-0 z-50 để đảm bảo Modal nằm trên mọi phần tử khác
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 px-4 sm:px-6">
      {/* Backdrop */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm cursor-pointer"
      />
      
      {/* Modal Content Wrapper */}
      <motion.div
        variants={modalVariant}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ type: "spring", duration: 0.5, bounce: 0.1 }}
        // max-h-[90vh] để không tràn màn hình, flex col để tách header và phần cuộn (body)
        className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
      >
        {/* Sticky Header của Modal */}
        <div className="flex items-center justify-between border-b border-slate-100 px-6 py-4 bg-slate-50 shrink-0">
          <h3 className="text-xl font-bold text-slate-800">{title}</h3>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-200 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        
        {/* Body của Modal có thể cuộn độc lập */}
        <div className="p-6 overflow-y-auto">
          {children}
        </div>
      </motion.div>
    </div>
  );
}

function TheorySectionCard({ section, index, onOpen }) {
  const Icon = section.icon;
  
  // Trích xuất màu chủ đạo để style nút bấm cho đồng bộ
  const toneColorMatch = section.iconTone.match(/text-([a-z]+)-/);
  const primaryTone = toneColorMatch ? toneColorMatch[1] : 'emerald';
  const buttonToneClass = `border-${primaryTone}-300 text-${primaryTone}-700 hover:bg-${primaryTone}-50`;

  return (
    <motion.article
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={motionVariant}
      transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-[30px] bg-white/80 p-6 sm:p-8 shadow-[0_10px_30px_rgba(0,0,0,0.05)] backdrop-blur-md border border-slate-100"
    >
      <div
        className={`pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-r ${section.glow}`}
        aria-hidden="true"
      />

      <div className="relative z-10">
        <div className="mb-4 flex flex-col sm:flex-row sm:items-center gap-4 text-left">
          <span
            className={`flex h-14 w-14 items-center justify-center rounded-2xl shadow-sm ${section.iconTone}`}
            aria-hidden="true"
          >
            <Icon className="h-7 w-7" />
          </span>
          <div>
            <span className="text-sm font-bold text-slate-400">
              Phần {section.id}
            </span>
            <h2 className="text-2xl font-bold text-slate-800 sm:text-3xl">
              {section.title}
            </h2>
          </div>
        </div>

        {/* 
          Nếu cấu hình usePopup = true, chỉ hiển thị Preview và nút Bấm để mở Modal.
          Ngược lại, render thẳng nội dung bằng hàm renderSectionContent.
        */}
        {section.usePopup ? (
          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50/70 p-5 sm:p-6 text-left transition-all hover:bg-white hover:shadow-sm">
            <p className="text-sm leading-relaxed text-slate-700 sm:text-base mb-4">
              {section.preview}
            </p>
            <button
              type="button"
              onClick={() => onOpen(section)}
              className={`inline-flex items-center rounded-xl border px-4 py-2 text-sm font-semibold transition bg-white shadow-sm hover:shadow-md ${buttonToneClass}`}
            >
              Xem chi tiết
            </button>
          </div>
        ) : (
          renderSectionContent(section.id)
        )}
      </div>
    </motion.article>
  );
}

export default function App() {
  // Đưa state quản lý Modal lên root Component để Modal luôn được render ở cấp cao nhất
  const [activeSection, setActiveSection] = useState(null);

  // Vô hiệu hóa cuộn body khi modal mở (Optional UX improvement)
  React.useEffect(() => {
    if (activeSection) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-rose-200 font-sans pb-24 relative">
      {/* Background Decor */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-40">
        <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-rose-400/20 blur-[100px]" />
        <div className="absolute top-1/2 -left-40 w-[400px] h-[400px] rounded-full bg-blue-400/20 blur-[80px]" />
        <div className="absolute -bottom-40 right-20 w-[600px] h-[600px] rounded-full bg-amber-400/10 blur-[100px]" />
      </div>

      <main className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-16">
        <motion.header
          initial="hidden"
          animate="visible"
          variants={motionVariant}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-16 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 mb-6 rounded-full bg-rose-100 text-rose-700 text-xs font-bold tracking-widest uppercase shadow-sm">
            <Star size={14} />
            Môn học: Tư tưởng Hồ Chí Minh
          </div>
          
          <h1 className="text-4xl font-extrabold text-slate-800 sm:text-5xl lg:text-6xl tracking-tight mb-6 leading-[1.2]">
            Tư tưởng về <br className="hidden sm:block" />
            <span className="text-rose-600 relative inline-block mt-2">
              Đại đoàn kết toàn dân tộc
              <svg className="absolute w-full h-3 -bottom-1 left-0 text-amber-400 opacity-60" viewBox="0 0 100 10" preserveAspectRatio="none">
                <path d="M0 5 Q 50 15 100 5" stroke="currentColor" strokeWidth="3" fill="transparent" />
              </svg>
            </span>
          </h1>
          
          <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600 sm:text-xl font-medium">
            Phân tích chiến lược, lực lượng, điều kiện và phương thức xây dựng khối đại đoàn kết, nhằm đạt được mục tiêu chung của cách mạng Việt Nam.
          </p>
        </motion.header>

        <div className="space-y-10">
          {theorySections.map((section, index) => (
            <TheorySectionCard
              key={section.id}
              section={section}
              index={index}
              onOpen={setActiveSection} // Chỉ cần truyền hàm set state xuống Card
            />
          ))}
        </div>
      </main>

      {/* 
        Render Modal ở đây (cuối Component root) 
        kết hợp với fixed inset-0 z-50 sẽ đảm bảo nó chồng lên tất cả nội dung khác
      */}
      <AnimatePresence>
        {activeSection && (
          <PopupModal 
            title={`Phần ${activeSection.id}: ${activeSection.title}`} 
            onClose={() => setActiveSection(null)}
          >
            {renderSectionContent(activeSection.id)}
          </PopupModal>
        )}
      </AnimatePresence>
    </div>
  );
}