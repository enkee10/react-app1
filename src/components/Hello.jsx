export default function Hello({ name = "Mundo" }) {
  return (
    <h2 className="text-xl font-semibold text-gray-800">
      Hola, {name} 👋
    </h2>
  );
}