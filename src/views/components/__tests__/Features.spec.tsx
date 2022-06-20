/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import * as React from 'react';
import { getByAltText, render, RenderResult } from '@testing-library/react';
import Features from '../Features';

let documentBody: RenderResult;

/**
 * @jest-environment jsdom
 */
describe('<Features/>', () => {
  beforeEach(() => {
    documentBody = render(<Features />);
  }),
  it('should have a introduction of the features', () => {
    expect(documentBody.getByText('Select or search for a breed of dog and see the images of the breed.')).toBeInTheDocument();
  });
  it('should have a feature list', () => {
    expect(documentBody.getByText('Search')).toBeInTheDocument();
    expect(documentBody.getByText('Search for a particular breed by typing in the search bar.')).toBeInTheDocument();
    expect(documentBody.getByText('Choose a breed')).toBeInTheDocument();
    expect(documentBody.getByText('Press one of the generated buttons representing the breeds to see the images of the breed.')).toBeInTheDocument();
    expect(documentBody.getByText('View Images')).toBeInTheDocument();
    expect(documentBody.getByText('Checkout the cool dog images of the breed you selected.')).toBeInTheDocument();
    getByAltText(documentBody.container, 'search-icon');
    getByAltText(documentBody.container, 'click-icon');
    getByAltText(documentBody.container, 'view-icon');
  });
});
