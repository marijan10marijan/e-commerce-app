import useFetch from "../hooks/useFetch";
import Card from "../Card/Card";

export default function AllProducts({ catId, sort, subCat }) {
  const { data, loading, error } = useFetch(
    `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCat.map(
      (item) => `&[filters][sub_categories][id][$eq]=${item}`
    )}&sort=price:${sort}`
  );

  return (
    <div className="w-full mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 pt-8">
      {error ? (
        "Error happend"
      ) : (
        <>
          {loading ? (
            "Loading..."
          ) : (
            <>
              {data?.map((item) => (
                <Card key={item.id} item={item} />
              ))}
            </>
          )}
        </>
      )}
    </div>
  );
}
