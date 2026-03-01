function LandingPage() {
  return (
    <main>
      <section className="min-h-screen bg-gray-50 flex items-center pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center gap-10">
          {/*Title*/}
          <div className=" flex flex-col gap-10">
            <h1 className="text-5xl md:text6xl font-extrabold text-gray-900 leading-tight">
              <span className="text-blue-600">Nex</span>
              <span className="text-violet-600">aula</span> -{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-600">
                conectando professores e alunos
              </span>
            </h1>
            <p className="text-xl text-gray-500 max-w-2x1 mx-auto">
              Encontre o professor ideal ou ofereça suas aulas. Tudo em um só
              lugar, de forma fácil e rápida.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full">
            {/* Card Aluno */}
            <div
              className="group relative overflow-hidden rounded-3x1 bg-blue-600 p-10 flex flex-col justify-between min-h-64 cursor-pointer shadow-xl
                 shadow-blue-200 hover:scale-105 transition-transform duration-300 rounded-3xl"
            >
              <div className="flex flex-col gap-2 z-10">
                <span className="text-blue-200 text-sm font-medium">
                  Para alunos
                </span>
                <h2 className="text-white text-4xl font-extrabold">
                  Quero Aprender
                </h2>
                <p className="text-blue-100 text-base">
                  Encontre professores para aprender novas habilidades
                </p>
              </div>
              <button className="mt-6 self-start bg-white text-blue-600 font-semibold px-6 py-2 rounded-full hover:bg-blue-50 transition z-10">
                Explorar aulas →
              </button>
              <div className="absolute -bottom-6 -right-6 text-9xl opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                🎓
              </div>
            </div>
            {/*Card Professor*/}
            <div className="group relative overflow-hidden rounded-3x1 bg-violet-600 p-10 flex flex-col justify-between min-h-64 cursor-pointer shadow-xl shadow-violet-200 hover:scale-105 transition-transform duration-300 rounded-3xl">
              <div className="flex flex-col gap-2 z-10">
                <span className="text-violet-200 text-sm font-medium">
                  Para Professores
                </span>
                <h2 className="text-white text-4xl font-extrabold">
                  Quero Ensinar
                </h2>
                <p className="text-violet-100 text-base">
                  Crie suas salas e defina seus horários
                </p>
              </div>
              <button className="mt-6 self-start bg-white text-violet-600 font-semibold px-6 py-2 rounded-full hover:bg-violet-50 transition z-10">
                Começar a ensinar →{" "}
              </button>
              <div className="absolute -bottom-6 -right-6 text-9xl opacity-40 group-hover:opacity-70 transition-opacity duration-300">
                👩‍🏫
              </div>
            </div>
          </div>
          {/* Statistics */}
          <div className="grid grid-cols-3 gap-6 w-full">
            <div className="bg-white rounded-2x1 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <p className="text-4xl font-extrabold text-blue-600">100+</p>
              <p className="text-gray-500 font-bold text-sm mt-1">
                Professores ativos
              </p>
            </div>

            <div className="bg-white rounded-2x1 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <p className="text-4xl font-extrabold text-blue-600">10k+</p>
              <p className="text-gray-500 font-bold text-sm mt-1">
                Alunos conectados
              </p>
            </div>

            <div className="bg-white rounded-2x1 p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <p className="text-4xl font-extrabold text-blue-600">50+</p>
              <p className="text-gray-500 font-bold text-sm mt-1">
                Cursos disponíveis
              </p>
            </div>
          </div>

          {/* Como funciona */}
          <section className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto px-6 flex flex-col items-center gap-14">
              {/* Título da seção */}
              <div className="flex flex-col items-center gap-3 text-center">
                <span className="bg-blue-100 text-blue-700 text-sm font-medium px-4 py-1 rounded-full">
                  Simples assim
                </span>
                <h2 className="text-4xl font-extrabold text-gray-900">
                  Como funciona?
                </h2>
                <p className="text-gray-500 text-lg max-w-xl">
                  Em poucos passos você já está aprendendo ou ensinando na
                  Nexaula. É fácil, rápido e intuitivo.
                </p>
              </div>
              {/* Cards Passos */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
                {/* Passo 1 */}
                <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl">
                    👤
                  </div>
                  <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    1
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Crie sua conta
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Cadastre-se como aluno ou professor em poucos segundos.
                    <br />
                    Rápido,fácil e gratuito!
                  </p>
                </div>
                {/* Passo 2 */}
                <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300 bg-blue-600">
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center text-3xl">
                    🔍
                  </div>
                  <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-blue-600 font-bold text-sm">
                    2
                  </div>
                  <h3 className="text-xl font-bold text-white">
                    Encontre sua aula
                  </h3>
                  <p className="text-blue-100 text-sm leading-relaxed">
                    Busque por matérias, professores ou habilidades, encontre a
                    aula perfeita para você.
                  </p>
                </div>
                {/* Passo 3 */}
                <div className="flex flex-col items-center text-center gap-4 p-8 rounded-3xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-violet-100 rounded-2xl flex items-center justify-center text-3xl">
                    🎯
                  </div>
                  <div className="w-8 h-8 bg-violet-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                    3
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Aprenda no seu tempo!
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Assista às aulas quando quiser e onde quiser.
                    <br />
                    Com a Nexaula, o aprendizado é flexível e adaptado à sua
                    rotina.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
export default LandingPage;
