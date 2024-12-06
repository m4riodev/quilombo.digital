import Header from '../components/Header';

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-bold">Bem-vindo ao Quilombo Digital</h1>
        <p className="mt-4 text-lg text-gray-600">
          Construindo um espaço de resistência e solidariedade no digital.
        </p>
      </main>
    </>
  );
}
