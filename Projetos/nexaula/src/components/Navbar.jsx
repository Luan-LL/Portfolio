function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-2xl font-bold text-blue-600">
          Nex<span className="text-violet-600">aula</span>
        </span>

        {/* Botões */}
        <div className="flex gap-3">
          <button className="px-5 py-2 rounded-full text-blue-600 border border-blue-600 font-medium hover:bg-blue-50 transition">
            Entrar
          </button>
          <button className="px-5 py-2 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition">
            Cadastrar
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
