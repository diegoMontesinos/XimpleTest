import { render, fireEvent, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import TestingWrapper from '../../jest/utils/TestingWrapper';

import CreditsModal from '../../src/components/CreditsModal';

describe('CreditsModal Component', () => {
  const mockOnConfirmSelection = jest.fn();
  const mockCredits = [
    {
      id: '1',
      name: 'Crédito 1',
      price: 500,
    },
    {
      id: '2',
      name: 'Crédito 2',
      price: 1500,
    },
    {
      id: '3',
      name: 'Crédito 3',
      price: 2500,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('render correctly', () => {
    const { getByText, getByTestId } = render(
      <CreditsModal
        credits={mockCredits}
        visible
        onConfirmSelection={mockOnConfirmSelection}
      />,
      { wrapper: TestingWrapper }
    );

    expect(getByText('¡Felicidades!')).toBeTruthy();
    expect(
      getByText('Encontramos estos créditos perfectos para ti:')
    ).toBeTruthy();
    expect(getByTestId('credits-radio-group')).toBeTruthy();
    expect(getByTestId('select-button-disabled')).toBeTruthy();
  });

  it('select button is enabled until an option is selected', () => {
    const { getByTestId } = render(
      <CreditsModal
        credits={mockCredits}
        visible
        onConfirmSelection={mockOnConfirmSelection}
      />,
      { wrapper: TestingWrapper }
    );

    expect(getByTestId('select-button-disabled')).toBeVisible();
    fireEvent.press(getByTestId('radio-button-1'));
    expect(getByTestId('select-button')).toBeVisible();
  });

  it('onConfirmSelection is called after submit button is pressed', async () => {
    const { getByTestId } = render(
      <CreditsModal
        credits={mockCredits}
        visible
        onConfirmSelection={mockOnConfirmSelection}
      />,
      { wrapper: TestingWrapper }
    );

    fireEvent.press(getByTestId('radio-button-1'));
    fireEvent.press(getByTestId('select-button'));
    await waitFor(() => {
      expect(mockOnConfirmSelection).toHaveBeenCalledWith(mockCredits[0]);
    });
  });
});
