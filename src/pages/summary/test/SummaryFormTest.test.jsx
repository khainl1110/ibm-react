import { render, screen, fireEvent } from '@testing-library/react';
import SummaryFrom from '../SummaryForm';

test('Testing Summary Form ', () => {
    render(<SummaryFrom />);
    const element = screen.getByTestId('checkbox-agree');
    const button = screen.getByRole('button');
    expect(element).not.toBeChecked();
    expect(button).toBeDisabled();
    fireEvent.click(element);
    expect(element).toBeChecked();
    expect(button).not.toBeDisabled();
});