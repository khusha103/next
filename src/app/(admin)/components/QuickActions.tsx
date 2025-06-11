export default function QuickActions() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-gray-700 font-semibold mb-4">Quick Actions</h2>
      <p className="text-gray-500 mb-4">Common administrative tasks</p>
      <ul className="space-y-3">
        <li className="flex items-center space-x-2">
          <span className="w-6 h-6 bg-pink-100 rounded-full flex items-center justify-center">
            <span className="w-3 h-3 bg-pink-500 rounded-full"></span>
          </span>
          <p className="text-gray-700">Block User</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
            <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          </span>
          <p className="text-gray-700">Send Notification</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
            <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          </span>
          <p className="text-gray-700">Broadcast Message</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-6 h-6 bg-teal-100 rounded-full flex items-center justify-center">
            <span className="w-3 h-3 bg-teal-500 rounded-full"></span>
          </span>
          <p className="text-gray-700">Export Logs</p>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
            <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          </span>
          <p className="text-gray-700">View Alerts</p>
        </li>
      </ul>
    </div>
  );
}