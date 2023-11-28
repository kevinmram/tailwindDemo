import { IconX } from '@tabler/icons-react';

interface ModalProps {
  title: string;
  isOpen: boolean;
  onClose: () => void;
}

/*
  Preconditions:
  1. Modal should render based on the value of `isOpen` prop.
  2. Should include a close button that triggers `onClose` function.
  3. Should display a title from the `title` prop.
*/
export default function Modal({ title, isOpen, onClose }: ModalProps) {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-96">
        <div className="flex justify-between items-center">
          <div className="text-center text-lg font-bold flex-grow">{title}</div>
          <button onClick={onClose} className="focus:outline-none">
            <IconX size={24} />
          </button>
        </div>
        <div className="text-center mt-6">
          <p>Jason is the GOAT!</p>
        </div>
      </div>
    </div>
  );
}

