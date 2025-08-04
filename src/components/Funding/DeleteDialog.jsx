import * as Dialog from '@radix-ui/react-dialog';
import { useFunding } from '../../context/FundingContext';

const DeleteDialog = ({ type, id, onClose }) => {
  const { deleteFunding } = useFunding();

  const handleDelete = () => {
    deleteFunding(type, id);
    onClose();
  };

  return (
    <Dialog.Root open onOpenChange={onClose}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/30 z-40" />
        <Dialog.Content className="fixed z-50 top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg w-[320px] shadow-lg">
          <Dialog.Title className="text-lg font-semibold mb-4">Confirm Delete</Dialog.Title>
          <p className="text-sm text-gray-600 mb-4">Are you sure you want to delete this funding?</p>
          <div className="flex justify-end gap-2">
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm bg-gray-200 hover:bg-gray-300 rounded"
            >
              Cancel
            </button>
            <button
              onClick={handleDelete}
              className="px-4 py-2 text-sm bg-red-600 hover:bg-red-700 text-white rounded"
            >
              Delete
            </button>
          </div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default DeleteDialog;
