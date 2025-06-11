export default function MetricsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-gray-500">TOTAL USERS</h2>
        <p className="text-2xl font-bold">24,532</p>
        <p className="text-green-500">+128 from yesterday</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-gray-500">ACTIVE USERS</h2>
        <p className="text-2xl font-bold">18,249</p>
        <p className="text-green-500">+74 from yesterday</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-gray-500">BLOCKED USERS</h2>
        <p className="text-2xl font-bold">253</p>
        <p className="text-red-500">12 from yesterday</p>
      </div>
      <div className="bg-white p-4 rounded-lg shadow">
        <h2 className="text-gray-500">TOTAL MESSAGES TODAY</h2>
        <p className="text-2xl font-bold">45,624</p>
        <p className="text-green-500">+5.5% from yesterday</p>
      </div>
    </div>
  );
}