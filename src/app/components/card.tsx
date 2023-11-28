interface CardProps {
  title: string;
  content: string;
}

/*
  Preconditions:
  1. Card component should accept `title` and `content` props.
  2. The title should be styled bold, and both title and content should be displayed within a styled card container.
*/
export default function Card({ title, content }: CardProps) {
  return (
    <div className="bg-white shadow-md rounded p-10 m-2 max-w-sm">
      <div className="font-bold text-lg mb-2">{title}</div>
      <div>{content}</div>
    </div>
  );
}
