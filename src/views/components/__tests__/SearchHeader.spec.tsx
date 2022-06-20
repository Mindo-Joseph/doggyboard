/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
import * as React from 'react';
import { getByAltText, render, RenderResult } from '@testing-library/react';
import SearchHeader from '../SearchHeader';

let documentBody: RenderResult;

/**
 * @jest-environment jsdom
 */
describe('<SearchHeader/>', () => {
  beforeEach(() => {
    documentBody = render(
      <SearchHeader
        allDogs={['Labrador', 'German Shepherd', 'Golden Retriever', 'Poodle', 'Beagle']}
        setButtonsStatus={() => { }}
        setImagesStatus={() => { }}
        setActiveDog={() => { }}
        setFilteredDogs={() => { }}

      />,
    );
  }),
//   it('should have a heading to tell the user to either search or select a breed', () => {
//     expect(documentBody.getByText('Search or Select a breed')).toBeInTheDocument();
//   });
  it('should contain a search bar', () => {
    expect(documentBody.getByDisplayValue('Search')).toHaveAttribute('id', 'search-breeds');
  });
});
