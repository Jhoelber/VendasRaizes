type Props = { atual: number; total: number };

export function BarraProgresso({ atual, total }: Props) {
  const pct = Math.round((atual / total) * 100);

  return (
    <div className="w-full max-w-md h-3 rounded-full bg-gray-200 overflow-hidden">
      <div
        className="h-full bg-indigo-600 transition-all duration-300"
        style={{ width: `${pct}%` }}
      />
    </div>
  );
}
