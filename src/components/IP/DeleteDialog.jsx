import { useIPContext } from '../../context/IPContext';

const DeleteDialog = ({ ip, onClose }) => {
  const { deleteIP } = useIPContext();

  const handleDelete = () => {
    deleteIP(ip.id);
    onClose();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40 z-50">
      <div className="bg-white rounded-xl p-6 w-full max-w-sm shadow-lg">
        <h2 className="text-lg font-bold mb-4">Confirm Deletion</h2>
        <p>Are you sure you want to delete IP <strong>{ip.number}</strong>?</p>
        <div className="flex justify-end gap-3 mt-5">
          <button onClick={onClose} className="btn-secondary">Cancel</button>
          <button onClick={handleDelete} className="btn-danger">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default DeleteDialog;
