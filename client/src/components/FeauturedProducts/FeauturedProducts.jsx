import Card from "../Card/Card";
import useFetch from "../hooks/useFetch";

const FeauturedProducts = ({ type }) => {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][type][$eq]=${type}`
  );

  return (
    <div className="max-w-7xl mx-auto px-4 pt-20 ">
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-between">
        <div className="sm:w-2/5">
          <h1 className="font-bold text-3xl">
            {type[0].toUpperCase() + type.slice(1)} Products
          </h1>
        </div>
        <div className="sm:w-3/5">
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus
            eligendi similique aliquam optio, perspiciatis a velit molestiae
            mollitia eaque quas, aperiam enim cumque sed excepturi placeat sequi
            vel, ipsam assumenda?
          </p>
        </div>
      </div>
      <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
        {error ? (
          <h1 className="text-center font-bold text-xl">Error occured.</h1>
        ) : (
          <>
            {loading ? (
              <h1 className="text-center font-bold text-xl">Loading...</h1>
            ) : (
              <>
                {data ? (
                  <>
                    {data
                      ?.slice(0, 4)
                      .reverse()
                      .map((item) => (
                        <Card key={item.id} item={item} />
                      ))}
                  </>
                ) : (
                  <p className="text-center font-bold text-xl italic">
                    Currently not awailible any of our Products.
                  </p>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default FeauturedProducts;
