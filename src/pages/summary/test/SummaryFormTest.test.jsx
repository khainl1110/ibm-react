import { render, screen, fireEvent } from '@testing-library/react';
import SummaryFrom from '../SummaryForm';

test('Testing Summary Form ', () => {
    render(<SummaryFrom />);
    const checkbox = screen.getByTestId('checkbox-agree');
    const button = screen.getByRole('button');
    expect(checkbox).not.toBeChecked();
    expect(button).toBeDisabled();
    fireEvent.click(checkbox);
    expect(checkbox).toBeChecked();
    expect(button).not.toBeDisabled();
});