import React from 'react';
import HomeScreen from '../src/screens/HomeScreen';
import {render} from '@testing-library/react-native';

test('HomeScreen component renders correctly', () => {
  const {getByText} = render(<HomeScreen />);
  expect(getByText('Welcome to the Home Screen!')).toBeDefined();
});
