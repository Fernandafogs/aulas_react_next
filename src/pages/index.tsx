import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1>Principal</h1>
      <Link href="/contexto/contador">
        <span>Contador</span>
      </Link>
    </div>
  );
}