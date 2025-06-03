import { Outlet } from 'react-router-dom';
import SearchBar from '../search/Search';
import { useDispatch } from 'react-redux';
import { fetchUsersStart } from '../../redux/reducers/users/userSlice';
import { Alert } from 'antd';

export default function Layout() {
  const dispatch = useDispatch();

  const findData = async (query: string) => {
    if (query !== "") {
      let payload = {
        username: query,
        total: 1
      }
      dispatch(fetchUsersStart(payload));
    }
    if (query === "") {
      return (
        <Alert
          message="Error"
          description="Error"
          type="error"
          showIcon
          className="m-4 overflow-auto"
        />
      );
    }
  }

  return (
    <div className="flex flex-col bg-[#F1F1F1] w-screen h-screen">
      {/* Header */}
      <header className=" text-white p-4">
        <SearchBar
          placeholder='Input user here...'
          onSearch={findData}
        />
      </header>

      {/* Main Content */}
      <main className="flex-1 p-4">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-gray-500 text-center p-4">
        &copy; {new Date().getFullYear()} My App
      </footer>
    </div>
  );
}
