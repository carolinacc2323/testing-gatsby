import React from 'react';
import { render } from '@testing-library/react';
import TeamCard from '../teamcard/TeamCard';

describe('Card', () => {
  it('renderizamos bien el Componente', () => {
    const { container } = render(
    <TeamCard
        imageSrc="https://via.placeholder.com/150"
        title="Sample Title"
        role="jefe de equipo"
        description="This is a sample description for the card."
    />
    );
    expect(container.firstChild).toMatchSnapshot();
});
});
