import React from 'react';

const Footer = () => {
    return (
        <footer className="border-t border-white/10 bg-black/20 backdrop-blur-md py-16 mt-16">
            <div className="container">
                <div className="footer-content grid md:grid-cols-4 gap-8 mb-12">
                    <div className="footer-brand md:col-span-2">
                        <a href="#" className="logo text-2xl font-bold text-white font-mono tracking-tighter mb-4 inline-block">AM.</a>
                        <p className="text-slate-400 max-w-xs">Crafting the future of the web, one pixel at a time.</p>
                    </div>
                    <div className="footer-links">
                        <h4 className="text-lg font-semibold text-white mb-6">Navigate</h4>
                        <ul className="space-y-3">
                            {['Home', 'About', 'Work'].map((item) => {
                                let href = `#${item.toLowerCase()}`;
                                if (item === 'Home') href = '#hero';
                                if (item === 'Work') href = '#projects';
                                return (
                                    <li key={item}>
                                        <a href={href} className="text-slate-400 hover:text-pink-500 transition-colors">
                                            {item}
                                        </a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    <div className="footer-social">
                        <h4 className="text-lg font-semibold text-white mb-6">Social</h4>
                        <div className="social-icons flex gap-4">
                            {[
                                { icon: 'github', url: 'https://github.com/mascris' },
                                { icon: 'linkedin-in', url: 'https://linkedin.com/in/mascris' },
                                { icon: 'twitter', url: 'https://x.com/Mascris_001' }
                            ].map((social) => (
                                <a key={social.icon} href={social.url} target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-pink-500 hover:-translate-y-1 transition-all">
                                    <i className={`fab fa-${social.icon}`}></i>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer-bottom text-center pt-8 border-t border-white/5 text-slate-500 text-sm">
                    <p>&copy; 2025 Mascris. Made with <i className="fas fa-heart text-pink-500 mx-1"></i> and Code.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
