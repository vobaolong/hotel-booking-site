import "./featured.css";
import useFetch from "./../../hooks/useFetch";

const Featured = () => {
  const { data, loading, error } = useFetch(
    "hotels/countByCity?cities=Ha Noi,Ho Chi Minh,Da Nang"
  );

  return (
    <div className="featured">
      {loading ? (
        "Loading"
      ) : (
        <>
          <div className="featuredItem">
            <img
              src="https://nemtv.vn/wp-content/uploads/2019/01/ho-guom-ha-noi.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ha Noi</h1>
              <h2>{data[0]} properties</h2>
            </div>
          </div>

          <div className="featuredItem">
            <img
              src="https://cdn.vntrip.vn/cam-nang/wp-content/uploads/2020/07/Landmark81-hinh-bo-tre.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Ho Chi Minh</h1>
              <h2>{data[1]} properties</h2>
            </div>
          </div>
          <div className="featuredItem">
            <img
              src="https://danangreviews.vn/wp-content/uploads/2021/05/ca-chep-hoa-rong.jpg"
              alt=""
              className="featuredImg"
            />
            <div className="featuredTitles">
              <h1>Da Nang</h1>
              <h2>{data[2]} properties</h2>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Featured;
