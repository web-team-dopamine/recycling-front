const Footer = () => {
  return (
    <footer className="bg-[#ACDACD] text-black px-4 py-3 flex justify-between items-center h-[120px]">
      <div className="flex items-center ml-6">
        <img src="/logo.png" alt="로고" className="h-10" />
        <div className="ml-5 font-bold text-sm">2024 Dopamine, Team.</div>
      </div>

      <div className="flex items-center space-x-4 relative mr-6">
        <a
          className="hover:text-[#2E9093]"
          href="https://github.com/web-team-dopamine"
          target="_blank"
          rel="noopener noreferrer"
        >
          Dopamine, Team’s GitHub
        </a>
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/Github-desktop-logo-symbol.svg/2048px-Github-desktop-logo-symbol.svg.png"
          className="w-10 h-10"
          alt="github"
        />
      </div>
    </footer>
  );
};

export default Footer;
