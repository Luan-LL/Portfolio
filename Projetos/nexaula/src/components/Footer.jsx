import { Instagram, Linkedin, Github, Mail } from "lucide-react";
function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Topo do footer*/}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b border-gray-700">
          {/*Coluna 1 - Logo e descrição*/}
          <div className="flex flex-col gap-4">
            <span className="text-2x1 font-bold">
              <span className="text-blue-400">Nex</span>
              <span className="text-violet-400">aula</span>
            </span>
            <p className="text-gray-400 text-sm leading-relaxed">
              Conectando professores e alunos em uma plataforma inovadora de
              ensino.
            </p>
            <div className="flex gap-4 mt-2">
              <a
                href="https://www.instagram.com/lu4nl/"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://www.linkedin.com/in/luan-laurentino/"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="https://github.com/Luan-LL"
                target="_blank"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Github size={20} />
              </a>
              <a
                href="mailto:luan.llaurentino@gmail.com"
                className="text-gray-400 hover:text-blue-400 transition"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
          {/*Coluna 2 - Links da Plataforma*/}
          <div className=" flex flex-col gap-3">
            <h3 className="text-white font-semibold text-base mb-1">
              Plataforma
            </h3>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Quero Aprender
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Quero Ensinar
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Planos
            </a>
          </div>
          {/*Coluna 3 - Suporte*/}
          <div className="flex flex-col gap-3">
            <h3 className="text-white font-semibold text-base mb-1">Suporte</h3>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Central de Ajuda
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Fale Conosco
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Termos de Uso
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition text-sm"
            >
              Politicas de Privacidade
            </a>
          </div>
        </div>
        {/* Rodapé */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Nexaula. Todos os direitos
            reservados.
          </p>
          <p className="text-gray-500 text-sm">
            Desenvolvido por Luan para transformar a edução
          </p>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
