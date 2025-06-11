export default function UserManagement() {
  return (
    <div className="col-span-3 bg-white p-4 rounded-lg shadow">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-gray-700 font-semibold">User Management</h2>
        <div className="flex space-x-2">
          <input
            type="text"
            placeholder="Search users..."
            className="border rounded-lg px-3 py-1 text-gray-700"
          />
          <button className="bg-gray-800 text-white px-4 py-1 rounded-lg">Export</button>
          <button className="bg-blue-600 text-white px-4 py-1 rounded-lg">Add User</button>
        </div>
      </div>
      <table className="w-full text-left">
        <thead>
          <tr className="text-gray-500">
            <th className="py-2">NAME</th>
            <th>EMAIL</th>
            <th>STATUS</th>
            <th>LAST ACTIVE</th>
            <th>MESSAGES</th>
            <th>ACTIONS</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-t">
            <td className="py-2">User</td>
            <td>NA</td>
            <td><span className="text-green-500">active</span></td>
            <td>10 days ago</td>
            <td>0</td>
            <td>...</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">User</td>
            <td>NA</td>
            <td><span className="text-yellow-500">inactive</span></td>
            <td>11 days ago</td>
            <td>0</td>
            <td>...</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">KHUSHA</td>
            <td>NA</td>
            <td><span className="text-green-500">active</span></td>
            <td>6 days ago</td>
            <td>0</td>
            <td>...</td>
          </tr>
          <tr className="border-t">
            <td className="py-2">User</td>
            <td>NA</td>
            <td><span className="text-yellow-500">inactive</span></td>
            <td>11 days ago</td>
            <td>0</td>
            <td>...</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}