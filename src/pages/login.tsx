export default function Login() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <form className="bg-white p-8 rounded shadow-md w-80">
        <h2 className="text-2xl font-bold mb-6">Login</h2>
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            E-mail
          </label>
          <input
            type="email"
            id="email"
            className="mt-1 block w-full p-2 border rounded"
            placeholder="Digite seu e-mail"
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Senha
          </label>
          <input
            type="password"
            id="password"
            className="mt-1 block w-full p-2 border rounded"
            placeholder="Digite sua senha"
          />
        </div>
        <button className="w-full bg-gray-800 text-white py-2 rounded hover:bg-gray-700">
          Entrar
        </button>
      </form>
    </div>
  );
}
