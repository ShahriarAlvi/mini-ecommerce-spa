import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { X } from 'lucide-react';
import { clsx } from 'clsx';

const schema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Email is required'),
  address: z.string().min(2, 'Address is required'),
});

type CheckoutFormData = z.infer<typeof schema>;

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: CheckoutFormData) => void;
}

export default function CheckoutModal({
  isOpen,
  onClose,
  onSubmit,
}: CheckoutModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CheckoutFormData>({
    resolver: zodResolver(schema),
  });

  const handleFormSubmit = (data: CheckoutFormData) => {
    onSubmit?.(data);
    reset();
    onClose();
  };

  return (
    <div
      className={clsx(
        'fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity',
        !isOpen && 'pointer-events-none opacity-0'
      )}
    >
      <div className="bg-white w-full max-w-md rounded-xl shadow-lg p-6 relative">
        <button onClick={onClose} className="absolute top-3 right-3 text-grey">
          <X className="w-5 h-5" />
        </button>

        <h2 className="text-xl text-center font-semibold mb-4">Checkout</h2>

        <div>
          <form onSubmit={handleSubmit(handleFormSubmit)} className="space-y-4">
            <div>
              <label className="block text-left px-1 font-medium mb-1 text-gray-700">
                Name
              </label>
              <input
                {...register('name')}
                className="w-full border px-3 py-2
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-left px-1 font-medium mb-1 text-gray-700">
                Email
              </label>
              <input
                {...register('email')}
                type={'email'}
                className="w-full border px-3 py-2
              rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            <div>
              <label className="block text-left px-1 font-medium mb-1 text-gray-700">
                Address
              </label>
              <textarea
                {...register('address')}
                rows={3}
                className="w-full border px-3 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your address"
              />
              {errors.address && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.address.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full mt-4 bg-blue-500 hover:bg-blue-700
            text-white py-2 px-4 rounded-md transition"
            >
              Place Order
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
