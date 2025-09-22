const styles = {
  primary: "bg-indigo-600 hover:bg-indigo-700 text-white",
  secondary: "bg-gray-100 hover:bg-gray-200 text-gray-900",
  danger: "bg-rose-600 hover:bg-rose-700 text-white",
};

export default function Button({ variant = "primary", className = "", ...props }) {
  return (
    <button
      className={`px-4 py-2 rounded-xl transition active:scale-95 ${styles[variant]} ${className}`}
      {...props}
    />
  );
}
