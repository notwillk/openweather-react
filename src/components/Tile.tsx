import styled from 'styled-components';

interface TileProps {
    background: string;
    foreground: string;
}

const Tile = styled.div<TileProps>`
  min-width: 100px;
  min-height: 100px;
  color: ${({foreground}) => foreground};
  background: ${({background}) => background};
  border-radius: 15px;
`;
Tile.displayName = "Tile";

export default Tile;
