import { render, screen, fireEvent } from '@testing-library/react';
import BookingForm from '../../components/BookingForm';

describe('BookingForm Component', () => {
    test('renders form elements', () => {
        render(<BookingForm flight={{ id: '1' }} onConfirmBooking={() => {}} />);

        expect(screen.getByLabelText(/User ID:/i)).toBeInTheDocument();
        expect(screen.getByText(/Confirm Booking/i)).toBeInTheDocument();
    });

    test('calls onConfirmBooking when the form is submitted', () => {
        const handleConfirmBooking = jest.fn();
        render(<BookingForm flight={{ id: '1' }} onConfirmBooking={handleConfirmBooking} />);

        fireEvent.change(screen.getByLabelText(/User ID:/i), { target: { value: '12345' } });
        fireEvent.click(screen.getByText(/Confirm Booking/i));

        expect(handleConfirmBooking).toHaveBeenCalledWith({ userId: '12345', flightId: '1' });
    });
});
