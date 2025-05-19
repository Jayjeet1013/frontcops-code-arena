
import ProtectedRoute from "@/components/ProtectedRoute";

export default function Challenges() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen flex items-center justify-center bg-bg font-inter">
        <div className="bg-white shadow-soft rounded-2xl p-8">
          <h2 className="text-2xl font-bold mb-2 text-primary">Code Challenges</h2>
          <p className="text-gray-600">Coming soon: Practice coding challenges and real-time code evaluation.</p>
        </div>
      </div>
    </ProtectedRoute>
  );
}
