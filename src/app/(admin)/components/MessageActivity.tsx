export default function MessageActivity() {
  return (
    <div className="col-span-2 bg-white p-4 rounded-lg shadow">
      <h2 className="text-gray-700 font-semibold mb-4">Message Activity</h2>
      <p className="text-gray-500 mb-4">Total messages and flagged content over the past week</p>
      <div className="h-64 bg-gray-200 flex items-center justify-center">
        <p className="text-gray-500">[Graph Placeholder]</p>
      </div>
    </div>
  );
}