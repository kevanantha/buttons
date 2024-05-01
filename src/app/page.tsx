import Button from "@/components/button";
import StarButton from "@/components/star-button";

export default function Home() {
  return (
    <main className="flex gap-8 min-h-screen p-24">
      <UIShell>
        <StarButton />
      </UIShell>
      <UIShell>
        <Button />
      </UIShell>
    </main>
  );
}

function UIShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid place-items-center rounded-lg border-border h-56 w-56">
      {children}
    </div>
  );
}
