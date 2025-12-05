import { EditorPanel } from "@/components/builder/EditorPanel";
import { PreviewPanel } from "@/components/builder/PreviewPanel";
import { Toolbar } from "@/components/builder/Toolbar";
import { Github, Linkedin } from "lucide-react";
import { SiKofi, SiNextdotjs, SiTailwindcss } from "react-icons/si";

export default function BuilderPage() {
  return (
    <div className="min-h-screen md:h-screen w-full bg-gray-100 flex flex-col font-sans text-gray-900 overflow-auto md:overflow-hidden print:h-auto print:overflow-visible">
      <div className="flex-1 flex flex-col max-w-[1920px] mx-auto w-full md:p-4 p-0 h-full print:p-0 print:m-0 print:max-w-none">
        <main className="flex-1 bg-white md:rounded-2xl md:shadow-2xl flex flex-col md:flex-row relative h-auto md:h-full md:overflow-hidden shadow-none print:shadow-none print:h-auto print:w-full print:max-w-none print:overflow-visible print:block">
          <div className="print:hidden">
            <Toolbar />
          </div>

          <div className="order-2 md:order-1 w-full md:w-1/2 lg:w-[45%] flex flex-col border-r border-gray-200 bg-white md:h-full h-auto print:hidden">
            <EditorPanel />
          </div>

          <div className="order-3 md:order-2 flex-1 relative bg-gray-700 md:h-full h-[500px] print:h-auto print:bg-white print:overflow-visible">
            <PreviewPanel />
          </div>
        </main>

        {/* Footer */}
        <footer className="no-print print:hidden shrink-0 mt-3 text-base text-gray-500 w-full flex flex-col md:flex-row justify-between items-center px-4 md:px-2 pb-2">
          <div className="mb-2 md:mb-0 font-medium flex flex-wrap items-center justify-center gap-2">
            <span>Built with</span>

            <a
              href="https://nextjs.org"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors group"
            >
              <SiNextdotjs className="text-black group-hover:text-black transition-colors" />
              <span className="text-xs font-semibold text-gray-700 group-hover:text-black">
                Next.js
              </span>
            </a>

            <a
              href="https://tailwindcss.com"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-2 py-1 rounded-md bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-colors group"
            >
              <SiTailwindcss className="text-[#38bdf8] group-hover:text-[#0ea5e9] transition-colors" />
              <span className="text-xs font-semibold text-gray-700 group-hover:text-[#0ea5e9]">
                Tailwind CSS
              </span>
            </a>
            {/* Ko-fi Link */}
            <a
              href="https://ko-fi.com/mamangcao"
              target="_blank"
              className="text-xs font-medium bg-rose-50 text-rose-600 border border-rose-100 px-2 py-1 rounded hover:bg-rose-100 transition-colors flex items-center gap-1"
            >
              <SiKofi size={10} />
              <span>Buy Me a Coffee</span>
            </a>
          </div>

          <div className="flex items-center gap-6">
            <span className="flex text-xs lg:text-sm items-center gap-1">
              Developed by{" "}
              <a
                href="https://mamangcao.vercel.app/"
                className="font-semibold text-xs lg:text-base text-gray-700 hover:text-blue-600 transition-colors"
              >
                Abdul Haleem Mamangcao
              </a>
            </span>
            <div className="flex gap-4 items-center">
              <a
                href="https://github.com/mamangcao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-900 transition-colors"
                aria-label="GitHub"
              >
                <Github size={16} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdulhaleemmamangcao"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-700 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={16} />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
