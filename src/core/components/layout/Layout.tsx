import { Outlet } from 'react-router-dom';
import SearchBar from '../search/Search';
import { useDispatch } from 'react-redux';
import { fetchUsersStart } from '../../redux/reducers/users/userSlice';

export default function Layout() {
  const dispatch = useDispatch();

  const findData = async (query: any) => {
      let payload = {
        username: query.target.value,
        total: 1
      }
      dispatch(fetchUsersStart(payload));
  }

  return (
    <div className="flex flex-col bg-[#F1F1F1] w-screen min-h-screen">
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
      <footer className="bg-gray-500 text-center text-amber-50 p-4">
        &copy; {new Date().getFullYear()} My App
      </footer>
    </div>
  );
}
