import GlobeClient from "./globe-client";

interface Coordinate {
  latitude: number;
  longitude: number;
}

interface Marker {
  location: [number, number];
  size: number;
}

export default async function Globe() {
  const response = await fetch(
    `https://api.us-east.tinybird.co/v0/pipes/coordinates.json`,
    {
      headers: {
        Authorization: `Bearer ${process.env.TINYBIRD_API_KEY}`,
      },
      next: {
        revalidate: 43200, // every 12 hours
      },
    }
  )
    .then((res) => res.json())
    .then((res) => res.data as Coordinate[]); // Explicitly type the response data

  const markers: Marker[] = response.map(
    ({ latitude, longitude }, idx) => ({
      location: [latitude, longitude],
      size: 0.075 - (0.075 / 50) * idx,
    })
  );

  return <GlobeClient markers={markers} />;
}
