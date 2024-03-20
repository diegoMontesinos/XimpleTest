import { render, fireEvent, act, waitFor } from '@testing-library/react-native';
import '@testing-library/jest-native/extend-expect';

import LogInForm from '../../src/components/LogInForm';

describe('LogInForm Component', () => {
  const mockOnLogin = jest.fn();
  const mockResponse = [
    {
      name: 'Crédito 1',
      price: 500,
    },
    {
      name: 'Crédito 2',
      price: 1500,
    },
    {
      name: 'Crédito 3',
      price: 2500,
    },
  ];

  beforeEach(() => {
    jest.clearAllMocks();

    (global.fetch as jest.Mock).mockResolvedValueOnce({
      json: () => Promise.resolve(mockResponse),
    });
  });

  it('render correctly', () => {
    const { getByText, getByTestId } = render(
      <LogInForm onLogin={mockOnLogin} />
    );

    expect(getByText('Nombre')).toBeTruthy();
    expect(getByTestId('name-input')).toBeTruthy();
    expect(getByText('Correo')).toBeTruthy();
    expect(getByTestId('email-input')).toBeTruthy();
    expect(getByText('Descubrir créditos')).toBeTruthy();
  });

  it('changing text on the inputs, the value prop should change', () => {
    const { getByTestId } = render(<LogInForm onLogin={mockOnLogin} />);

    const nameInput = getByTestId('name-input');
    fireEvent.changeText(nameInput, 'hello world');
    expect(nameInput.props.value).toBe('hello world');

    const emailInput = getByTestId('email-input');
    fireEvent.changeText(emailInput, 'hello world');
    expect(emailInput.props.value).toBe('hello world');
  });

  it('the submit button is disabled if any of the inputs are empty', async () => {
    const { getByTestId } = render(<LogInForm onLogin={mockOnLogin} />);

    expect(getByTestId('login-button-disabled')).toBeTruthy();
    fireEvent.changeText(getByTestId('name-input'), 'hello world');
    expect(getByTestId('login-button-disabled')).toBeTruthy();
    fireEvent.changeText(getByTestId('email-input'), 'hello world');

    await waitFor(() => {
      expect(getByTestId('login-button')).toBeVisible();
    });
  });

  it('onLogin should be called after fill inputs and press submit', async () => {
    const { getByTestId } = render(<LogInForm onLogin={mockOnLogin} />);

    fireEvent.changeText(getByTestId('name-input'), 'hello world');
    fireEvent.changeText(getByTestId('email-input'), 'hello world');

    act(() => {
      fireEvent.press(getByTestId('login-button'));
    });

    await waitFor(() => {
      expect(mockOnLogin).toHaveBeenCalledWith(mockResponse);
    });
  });
});
