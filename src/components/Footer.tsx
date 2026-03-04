import { Instagram, Mail } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full py-12 px-6 border-t border-stone-200 mt-24">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                <div className="flex flex-col items-center md:items-start">
                    <span className="font-serif text-2xl tracking-wide font-medium mb-2">AQEEB</span>
                    <p className="text-stone-500 text-sm tracking-wider uppercase">Professional Makeup Artist</p>
                </div>

                <div className="flex gap-6">
                    <a href="https://www.instagram.com/glam_withakib/" target="_blank" rel="noopener noreferrer" className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
                        <Instagram size={20} />
                    </a>
                    <a href="mailto:rautaqeeb343@gmail.com" className="p-2 text-stone-500 hover:text-stone-900 transition-colors">
                        <Mail size={20} />
                    </a>
                </div>
            </div>
            <div className="max-w-7xl mx-auto mt-12 text-center md:text-left text-xs text-stone-400">
                &copy; {new Date().getFullYear()} Aqeeb. All rights reserved.
            </div>
        </footer>
    );
}
