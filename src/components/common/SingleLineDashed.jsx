export default function SingleLineDashed({ text }) {
  return (
    <>
      <h2 className="tp-2 text-neutral-700 pt-8">
        {text}
        <span className="inline-block w-10 border-b-4 border-blue-500"></span>
      </h2>
    </>
  );
}
