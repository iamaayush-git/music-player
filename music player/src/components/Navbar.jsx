import musicLogo from "../assets/musicLogo.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setFilterSongs, setSearchStatus } from "../features/filterSlice";
const Navbar = () => {
  const dispatch = useDispatch();
  const songs = useSelector((state) => state.songs.list);

  function handleSearch(e) {
    let query = e.target.value;
    let filteredSongs = songs.filter((song, i) => {
      return (
        song.album.title.toLowerCase().includes(query.toLowerCase()) ||
        song.artist.name.toLowerCase().includes(query.toLowerCase())
      );
    });
    dispatch(setFilterSongs(filteredSongs));
    dispatch(setSearchStatus(true));
  }
  
  return (
    <nav className="flex flex-col mt-5 items-center justify-center lg:flex-row lg:gap-4">
      <div className="flex flex-col items-center justify-center gap-1">
        <div className="flex items-center justify-center">
          <Link to={"/"}>
            <img
              className="rounded-[50%] w-[50px] sm:w-[80px]"
              src={musicLogo}
              alt="Music Logo"
            />
          </Link>
          <Link to={"/"}>
            <p className="font-bold mx-2 text-xl sm:text-2xl">Music</p>
          </Link>
        </div>
        <ul className="text-sm sm:text-md font-bold text-slate-600">
          <Link to={"/favSong"} ><li className="cursor-pointer">My Songs</li></Link>
        </ul>
      </div>
      <div className="w-full my-3">
        <input
          className="px-3 w-full border-2 rounded-lg h-10"
          type="text"
          placeholder="Search for songs, artist"
          onChange={handleSearch}
        />
      </div>

      <div className="flex items-center justify-center flex-col gap-2 lg:flex-row text-nowrap">
        <div className="flex items-center justify-center gap-2">
          <div>
            <h2 className="text-sm sm:text-md font-bold">Music Languages</h2>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">
              English
            </p>
          </div>
          <span className="text-lg sm:text-xl font-semibold cursor-pointer">
            ^
          </span>
        </div>
        <div className="text-sm sm:text-md font-semibold text-slate-600 cursor-pointer">
          Login
        </div>
        <div className="text-sm sm:text-md font-semibold text-slate-600 cursor-pointer">
          Sign Up
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
