interface CardProps {
  children: JSX.Element;
}

function Card({ children }: CardProps) {
  return <div className="w-full border-gray-200 rounded-lg shadow-xl p-4">{children}</div>;
}

export default Card;
