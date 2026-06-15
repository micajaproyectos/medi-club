import Image from "next/image";


export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#000a2e]">
      <div className="flex flex-col items-center gap-14">
        <div className="logo-glow">
          <Image
            src="/trasnparente.png"
            alt="MediClub"
            width={220}
            height={220}
            priority
            className="select-none"
          />
        </div>

        <div className="flex flex-col items-center gap-5 text-center w-screen px-6">
          <p className="text-white/70 text-base sm:text-lg font-light tracking-wide whitespace-nowrap">
            La salud está a punto de cambiar para siempre.
          </p>
          <p className="text-white/90 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase whitespace-nowrap">
            Bienvenidos a la Nueva Era.
          </p>
        </div>

        {/* Loading bar */}
        <div className="w-48 h-[2px] rounded-full bg-white/10 overflow-hidden">
          <div className="loading-bar h-full w-1/3 rounded-full bg-gradient-to-r from-transparent via-[#00e5b3] to-transparent" />
        </div>
      </div>
    </main>
  );
}
