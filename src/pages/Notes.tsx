
import { useState, useEffect } from "react";
import ProtectedRoute from "@/components/ProtectedRoute";
import { useAuth } from "@/auth/SupabaseProvider";

export default function Notes() {
  const { supabase, user } = useAuth();
  const [notes, setNotes] = useState<{ id: number, content: string }[]>([]);
  const [content, setContent] = useState("");
  const [saving, setSaving] = useState(false);

  // fetch notes (user-specific)
  useEffect(() => {
    if (!user) return;
    supabase
      .from("notes")
      .select("*")
      .eq("user_id", user.id)
      .order("id", { ascending: false })
      .then(({ data }) => setNotes(data || []));
  }, [user, saving]);

  async function handleSave(e: React.FormEvent) {
    e.preventDefault();
    if (!content.trim()) return;
    setSaving(true);
    await supabase.from("notes").insert({ content, user_id: user.id });
    setContent("");
    setSaving(false);
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-bg p-6 pb-20 max-w-2xl mx-auto font-inter">
        <h2 className="text-2xl font-bold mb-4 text-primary">Notes</h2>
        <form className="flex gap-2 mb-6" onSubmit={handleSave}>
          <input
            type="text"
            className="w-full border rounded-lg py-2 px-3 font-inter"
            placeholder="Write a note for any topic…"
            value={content}
            onChange={e => setContent(e.target.value)}
            disabled={saving}
          />
          <button
            type="submit"
            className="bg-primary text-white rounded-lg px-5 ml-2 font-semibold disabled:bg-gray-300"
            disabled={saving}
          >
            Add
          </button>
        </form>
        <div className="flex flex-col gap-4">
          {notes.length === 0 && <div className="text-gray-400">No notes yet.</div>}
          {notes.map(note => (
            <div key={note.id} className="bg-white shadow-soft rounded-xl px-5 py-3">
              {note.content}
            </div>
          ))}
        </div>
      </div>
    </ProtectedRoute>
  );
}
