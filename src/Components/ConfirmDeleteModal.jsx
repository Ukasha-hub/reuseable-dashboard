import React from 'react';

const ConfirmDeleteModal = ({ isOpen, onClose, onConfirm, userName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-30">
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-lg font-semibold mb-4">Are you sure?</h2>
        <p className="mb-6">Do you really want to delete <strong>{userName}</strong>?</p>
        <div className="flex justify-end gap-2">
          <button onClick={onClose} className="btn btn-sm">Cancel</button>
          <button onClick={onConfirm} className="btn btn-sm bg-red-500 text-white">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
