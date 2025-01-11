import React, { useEffect, useState } from 'react';
import { useTable } from 'react-table';
export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // Fetch users from MongoDB API running on localhost:5000
    fetch('http://localhost:5000/users')
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
      });
  }, []);

  const data = React.useMemo(() => users, [users]);

  const columns = React.useMemo(
    () => [
      {
        Header: 'User ID',
        accessor: '_id', // MongoDB ID
      },
      {
        Header: 'Name',
        accessor: 'name', // Name field from MongoDB
      },
      {
        Header: 'Email',
        accessor: 'email', // Email field from MongoDB
      },
      {
        Header: 'Role',
        accessor: 'role', // Role field (if applicable)
      },
      {
        Header: 'Created At',
        accessor: 'formattedCreatedAt', // Date created field, formatted
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({
    columns,
    data,
  });

  return (
    <section>
      <h1>All Users</h1>
      <p>Manage all registered users here.</p>
      <table {...getTableProps()} className="table" style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          {headerGroups.map((headerGroup) => (
            <tr {...headerGroup.getHeaderGroupProps()}>
              {headerGroup.headers.map((column) => (
                <th
                  {...column.getHeaderProps()}
                  style={{
                    padding: '10px',
                    textAlign: 'left',
                    borderBottom: '1px solid #ccc',
                    backgroundColor: '#f4f4f4',
                  }}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map((row) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} style={{ borderBottom: '1px solid #eee' }}>
                {row.cells.map((cell) => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      style={{
                        padding: '8px',
                        borderBottom: '1px solid #eee',
                      }}
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </section>
  );
}
