import { render } from '@testing-library/react-native';

import TestingWrapper from '../../jest/utils/TestingWrapper';

import Navigation from '../../src/Navigation';

describe('Accept Screen', () => {
  it('render correctly', () => {
    const { getByText, getByTestId } = render(
      <Navigation initialRouteName="Accept" />,
      {
        wrapper: TestingWrapper,
      }
    );

    expect(getByText('Acepta tu crédito')).toBeTruthy();
    expect(
      getByText('Confirma que has seleccionado el crédito deseado.')
    ).toBeTruthy();
    expect(getByText('Crédito seleccionado')).toBeTruthy();
    expect(getByText('Dummy credit')).toBeTruthy();
    expect(getByText('$3,100')).toBeTruthy();

    expect(getByTestId('submit-button')).toBeTruthy();
  });
});
