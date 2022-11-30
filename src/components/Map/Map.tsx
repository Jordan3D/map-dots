// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import L, { MapOptions } from 'leaflet';
import { ReactElement, useEffect, useMemo, memo } from 'react';
import { MapContainer, TileLayer, ScaleControl, Circle, CircleProps, useMap } from 'react-leaflet';
import styled from 'styled-components';
import 'leaflet.offline';

const StyledMapContainer = styled(MapContainer)`
  height: 100%;
`;

const outerBounds = [
  [50.505, -29.09],
  [52.505, 29.09],
];

const CircleA = (): ReactElement => {
  const configs = useMemo(
    () =>
      ({
        bounds: outerBounds,
        center: [
          (outerBounds[0][0] + outerBounds[1][0]) / 2,
          (outerBounds[0][1] + outerBounds[1][1]) / 2,
        ],
        radius: 100,
        pathOptions: { color: 'red' },
      } as CircleProps),
    [],
  );
  return <Circle {...configs} />;
};

const OfflineLoader = memo(function OfflineLoader(){
  const map = useMap();

  useEffect(() => {
    if (map) {
      const tileLayerOffline = L.tileLayer.offline(
        'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        {
          attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
          minZoom: 13,
        },
      );

      tileLayerOffline.addTo(map);

      const controlSaveTiles = L.control.savetiles(tileLayerOffline, {
        zoomlevels: [13, 14, 15, 16], // optional zoomlevels to save, default current zoomlevel
      });

      controlSaveTiles.addTo(map!);
    }
    // Make fix for "savetiles"
  }, []);

  return null;
});

const CustomMap = memo(function CustomMap(): ReactElement{
  const mapConfig: Partial<MapOptions> = useMemo(
    () => ({
      center: [51.505, -0.09],
      zoom: 13,
    }),
    [],
  );


  return (
    <StyledMapContainer {...mapConfig}>
      <OfflineLoader />
      {/* <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      /> */}
      <ScaleControl position="topright" />
      <CircleA />
    </StyledMapContainer>
  );
});

export default CustomMap;
