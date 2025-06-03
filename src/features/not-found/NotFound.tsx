import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-red-500">404 - Not Found</h1>
      <p>The page you are looking for doesn't exist.</p>
      <Link to="/" className="text-blue-500 underline">Go back Home</Link>
    </div>
  );
}
