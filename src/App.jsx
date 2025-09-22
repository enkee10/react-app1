import Hello from "./components/Hello";
import Card from "./components/Card";
import Button from "./components/Button";

export default function App() {
  return (
    <main className="min-h-screen bg-gray-50 p-6">
      <div className="mx-auto max-w-3xl space-y-6">
        <Hello name="Enrique" />

        <Card title="Tarjeta con contenido">
          <p>Esto es JSX dentro del <code>children</code>.</p>
          <div className="mt-4 flex gap-3">
            <Button onClick={() => alert("Primary!")}>Primary</Button>
            <Button variant="secondary" onClick={() => alert("Secondary!")}>Secondary</Button>
            <Button variant="danger" onClick={() => alert("Danger!")}>Danger</Button>
          </div>
        </Card>

        <Card title="Listas y keys (mini preview)">
          <ul className="mt-2 list-disc pl-6">
            {["React", "Tailwind", "Vite"].map((item) => (
              <li key={item} className="text-gray-700">{item}</li>
            ))}
          </ul>
        </Card>
      </div>
    </main>
  );
}
