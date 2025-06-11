export default function Notifications() {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h2 className="text-gray-700 font-semibold mb-4">Recent Notifications</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-blue-500 rounded-full"></span>
          <div>
            <p className="text-gray-700">New User Registration</p>
            <p className="text-gray-500 text-sm">Jane Cooper has registered a new account</p>
            <p className="text-gray-400 text-xs">2 hours ago</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-yellow-500 rounded-full"></span>
          <div>
            <p className="text-gray-700">Message Flagged</p>
            <p className="text-gray-500 text-sm">A message has been flagged for inappropriate content</p>
            <p className="text-gray-400 text-xs">3 hours ago</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-green-500 rounded-full"></span>
          <div>
            <p className="text-gray-700">System Update</p>
            <p className="text-gray-500 text-sm">System update successfully completed to version 2.1.0</p>
            <p className="text-gray-400 text-xs">5 hours ago</p>
          </div>
        </li>
        <li className="flex items-center space-x-2">
          <span className="w-3 h-3 bg-red-500 rounded-full"></span>
          <div>
            <p className="text-gray-700">Failed Authentication</p>
            <p className="text-gray-500 text-sm">Multiple failed login attempts detected</p>
            <p className="text-gray-400 text-xs">Yesterday</p>
          </div>
        </li>
      </ul>
    </div>
  );
}