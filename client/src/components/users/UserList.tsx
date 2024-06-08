import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
}

const UserList: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const itemsPerPage = 5;

  const users: User[] = [
    { id: 1, firstName: 'Alice', lastName: 'Johnson', email: 'alicej@example.com', role: 'Admin' },
    { id: 2, firstName: 'Bob', lastName: 'Brown', email: 'bobb@example.com', role: 'User' },
    { id: 3, firstName: 'Charlie', lastName: 'Davis', email: 'charlied@example.com', role: 'User' },
    { id: 4, firstName: 'Diana', lastName: 'Evans', email: 'dianae@example.com', role: 'Admin' },
    { id: 5, firstName: 'Ethan', lastName: 'Foster', email: 'ethanf@example.com', role: 'User' },
    { id: 6, firstName: 'Fiona', lastName: 'Garcia', email: 'fionag@example.com', role: 'Admin' },
    { id: 7, firstName: 'George', lastName: 'Harris', email: 'georgeh@example.com', role: 'User' },
    { id: 8, firstName: 'Hannah', lastName: 'Ivy', email: 'hannahi@example.com', role: 'Admin' },
    { id: 9, firstName: 'Ian', lastName: 'Jones', email: 'ianj@example.com', role: 'User' },
    { id: 10, firstName: 'Julia', lastName: 'Klein', email: 'juliak@example.com', role: 'Admin' }
  ];

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentUsers = users.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(users.length / itemsPerPage);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="container mx-auto py-8">
      {users.length > 0 ? (
        <div>
         <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
                    First Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
                    Last Name
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
                    Email
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
                    Role
                  </th>
                  <th className="px-6 py-3 text-left text-xs  text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentUsers.map((user) => (
                  <tr
                    key={user.id}
                    className="hover:bg-gray-100 transition-colors duration-200"
                  >
                    <td className="px-6 py-4 whitespace-nowrap">{user.firstName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.lastName}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
                    <td className="px-6 py-4 whitespace-nowrap flex justify-center">
                      <FaEdit className="text-blue-500 hover:text-blue-700 cursor-pointer mr-2" />
                      <FaTrash
                        className="text-red-500 hover:text-red-700 cursor-pointer"
                        onClick={() => handleDelete(user.id)}
                      />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="mt-4 flex justify-center">
            <nav aria-label="Pagination">
              <ul className="flex list-style-none">
                <li>
                  <button
                    className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === 1 ? 'disabled:opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                  >
                    Précédent
                  </button>
                </li>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <li key={page}>
                    <button
                      className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                        page === currentPage ? 'bg-gray-200' : ''
                      }`}
                      onClick={() => handlePageChange(page)}
                    >
                      {page}
                    </button>
                  </li>
                ))}
                <li>
                  <button
                    className={`px-3 py-2 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ${
                      currentPage === totalPages ? 'disabled:opacity-50 cursor-not-allowed' : ''
                    }`}
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                  >
                    Suivant
                  </button>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      ) : (
        <p className="text-center py-4">Aucun utilisateur existant.</p>
      )}
    </div>
  );
};

export default UserList;