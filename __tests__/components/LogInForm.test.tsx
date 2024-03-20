import { render } from '@testing-library/react-native';

import LogInForm from '../../src/components/LogInForm';

describe('LogInForm Component', () => {
  const mockOnLogin = jest.fn();

  it('render correctly', () => {
    render(<LogInForm onLogin={mockOnLogin} />);
  });
});
