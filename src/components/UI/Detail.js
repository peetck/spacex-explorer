import Button from "./Button";

const Detail = ({
  imageUrl,
  title,
  active,
  description,
  wikipedia,
  videoLink,
  isLoading,
}) => {
  return (
    <div className="flex flex-col justify-around mt-32 xl:flex-row">
      <div className="w-full">
        {!isLoading ? (
          <img
            className="mx-auto shadow-2xl rounded-2xl w-2/5"
            src={imageUrl}
            alt="Can't load img"
          />
        ) : (
          <div className="mx-auto shadow-2xl rounded-2xl w-2/5"></div>
        )}
      </div>

      <div className="flex flex-col w-full text-center mb-10 xl:text-left ">
        <div className="flex items-center justify-center w-full mt-7 xl:mt-0 xl:justify-start">
          <h1 className="text-5xl font-bold my-5">
            {!isLoading ? (
              <div>
                {title}
                <span className="relative  rounded-md shadow-sm ml-8 hidden xl:inline-flex">
                  <span
                    className={`animate-ping absolute inline-flex h-full w-full rounded-full ${
                      active ? "bg-green-500" : "bg-red-500"
                    } opacity-75`}
                  />
                  <span
                    className={`relative inline-flex rounded-full h-6 w-6 ${
                      active ? "bg-green-500" : "bg-red-500"
                    }`}
                  />
                </span>
              </div>
            ) : (
              "Loading..."
            )}
          </h1>
        </div>

        <div className='mb-7'>xx/xx/xxxx</div>

        <div className="text-center mx-20 xl:mx-0 xl:w-2/3 xl:text-left ">
          {!isLoading ? description : "Loading..."}
        </div>

        <div className="flex items-end h-full justify-center xl:justify-start mt-7 gap-8">
          {wikipedia && <Button href={wikipedia}>Wikipedia</Button>}
          {videoLink && <Button href={videoLink}>Youtube</Button>}
        </div>
      </div>
    </div>
  );
};

export default Detail;
