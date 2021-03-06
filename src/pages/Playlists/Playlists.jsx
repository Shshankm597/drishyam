import { useData } from "../../context";
import { PlaylistOverview } from "../../components";

export default function Playlists() {
  const { playlists } = useData();
  return (
    <div className="container">
      <h1 className="my-8">Playlists</h1>
      {playlists &&
        playlists.map((playlistItem) => (
          <PlaylistOverview key={playlistItem._id} playlist={playlistItem} />
        ))}
    </div>
  );
}
