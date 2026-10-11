import { LogoMark } from "@/components/Logo";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <section className="container-x grid min-h-[80vh] place-items-center pt-32 text-center">
      <div>
        <LogoMark className="mx-auto h-16 w-auto animate-float text-brand" />
        <p className="mt-8 font-display text-[9rem] font-semibold leading-none tracking-tighter text-gradient">404</p>
        <p className="mt-4 text-lg text-ink-soft">This page wandered off. Let&apos;s get you back.</p>
        <div className="mt-8 flex justify-center">
          <Button href="/">Back to home</Button>
        </div>
      </div>
    </section>
  );
}
