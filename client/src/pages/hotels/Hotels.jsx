import "./hotels.css";
import Header from "../../components/header/Header";
import { useLocation } from "react-router-dom";
import { useState, useContext } from "react";
import { format } from "date-fns";
import { DateRange } from "react-date-range";
import SearchItem from "../../components/searchItem/SearchItem";
import useFetch from "../../hooks/useFetch";
import MailList from "../../components/mailList/MailList";
import { SearchContext } from "./../../context/SearchContext";

const Hotels = () => {
  const { dispatch } = useContext(SearchContext);

  const location = useLocation();
  const [destination, setDestination] = useState(location.state.destination);
  const [dates, setDates] = useState(location.state.dates);
  const [options, setOptions] = useState(location.state.options);
  const [openDate, setOpenDate] = useState(false);

  const { data, loading, error, reFetch } = useFetch(
    `hotels?city=${destination}&min=${options.min}&max=${options.max}&maxPeople=${options.adult}&room=${options.room}&dates=${dates}`
  );

  const handleSearch = () => {
    dispatch({ type: "NEW_SEARCH", payload: { destination, dates, options } });
    reFetch();
  };

  return (
    <div>
      <Header type="list" />
      <div className="listContainer">
        <div className="listWrapper">
          <div className="listSearch">
            <h1 className="lsTitle">Search</h1>
            <div className="lsItem">
              <label>Destination</label>
              <input
                placeholder={destination}
                type="text"
                onChange={(e) => setDestination(e.target.value)}
              />
            </div>
            <div className="lsItem">
              <label>Check-in Date</label>
              <span onClick={() => setOpenDate(!openDate)}>{`${format(
                dates[0].startDate,
                "dd/MM/yyyy"
              )} to ${format(dates[0].endDate, "dd/MM/yyyy")}`}</span>
              {openDate && (
                <DateRange
                  onChange={(item) => setDates([item.selection])}
                  minDate={new Date()}
                  ranges={dates}
                />
              )}
            </div>
            <div className="lsItem">
              <label>Options</label>
              <div className="lsOptions">
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Min price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={(e) =>
                      setOptions({ ...options, min: e.target.value })
                    }
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">
                    Max price <small>per night</small>
                  </span>
                  <input
                    type="number"
                    className="lsOptionInput"
                    onChange={(e) =>
                      setOptions({ ...options, max: e.target.value })
                    }
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Adult</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.adult}
                    onChange={(e) =>
                      setOptions({ ...options, adult: e.target.value })
                    }
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Children</span>
                  <input
                    type="number"
                    min={0}
                    className="lsOptionInput"
                    placeholder={options.children}
                    onChange={(e) =>
                      setOptions({ ...options, children: e.target.value })
                    }
                  />
                </div>
                <div className="lsOptionItem">
                  <span className="lsOptionText">Room</span>
                  <input
                    type="number"
                    min={1}
                    className="lsOptionInput"
                    placeholder={options.room}
                    onChange={(e) =>
                      setOptions({ ...options, room: e.target.value })
                    }
                  />
                </div>
              </div>
            </div>
            <button onClick={handleSearch}>Search</button>
          </div>
          <div className="listResult">
            {loading ? (
              "Loading"
            ) : (
              <>
                {data.length > 0 ? (
                  data.map((item) => <SearchItem item={item} key={item._id} />)
                ) : (
                  <h1 style={{ padding: "100px" }}>Not Found Hotel!</h1>
                )}
              </>
            )}
          </div>
        </div>
        <MailList />
      </div>
    </div>
  );
};

export default Hotels;
