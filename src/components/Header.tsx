import Link from 'next/link';

export default function Header() {
  return (
    <header className="w-full bg-gray-800 text-white p-4 fixed top-0">
      <nav className="flex justify-between max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold">Quilombo Digital</h1>
        <div>
          <Link href="/login" className="mr-4 hover:underline">
            Login
          </Link>
          <Link href="/register" className="hover:underline">
            Cadastro
          </Link>
        </div>
      </nav>
    </header>
  );
}
