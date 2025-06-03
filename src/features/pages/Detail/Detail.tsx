import { useParams } from 'react-router-dom';

export default function Detail() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-2xl font-bold">Detail Page</h1>
    </div>
  );
}
