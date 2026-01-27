export default function About({ content = [] }) {
  return (
    <div className="space-y-4 text-gray-700 leading-relaxed">
      {content.map((text, index) => (
        <p key={index} className="whitespace-pre-line">
          {text}
        </p>
      ))}
    </div>
  );
}
