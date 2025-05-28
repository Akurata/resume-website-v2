import ResumeButton from "app/components/ResumeButton";

export default function Index() {
  return (
    <section className="flex flex-col items-center justify-center gap-[18px] sm:gap-6">
      <div className="text-center text-[clamp(40px,10vw,44px)] font-bold leading-[1.2] tracking-tighter sm:text-[64px]">
        <div className="bg-hero-section-title bg-clip-text">Alex Kurata</div>
      </div>

      <p className="text-center font-normal leading-7 text-default-500 sm:w-[466px] sm:text-[18px]">
        🚧 Website under construction 🚧
      </p>

      <div className="flex flex-col text-center">
        <span>🖥️ alexkurata.com 🖥️</span>
        <span>📧 alex@alexkurata.com 📧</span>
      </div>

      <div>
        <ResumeButton />
      </div>
    </section>
  );
}
