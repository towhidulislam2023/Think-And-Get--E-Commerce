import Swiper, { SwiperSlide } from "../swiper";
import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import ErrorMessage from "../ErrorMessage";
import Preloader from "../Preloader";
import useFetch from "../../hooks/use-fetch";

const params = {
    spaceBetween: 15,
    breakpoints: {
        370: {
            slidesPerView: 5,
        },
        320: {
            slidesPerView: 3,
        },
    },
};

const CategorySlider = () => {
    const { data, isLoading, errorMessage } = useFetch("category.json");

    if (isLoading) return <Preloader />;
    if (errorMessage) return <ErrorMessage errorMessage={errorMessage} />;

    return (
        <div className="category-slider-area bg-color--grey space-pb--25 space-mb--25">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        {/* section title */}
                        <h2 className="section-title space-mt--10 space-mb--20">
                            Categories
                        </h2>
                        {/* category slider */}
                        <div className="category-slider-wrapper">
                            {!!data.length && (
                                <Swiper options={params}>
                                    {data.map((single) => (
                                        <SwiperSlide key={single.id}>
                                            <div className="category-item ">
                                                <div className="category-item__image">
                                                    <Link
                                                        to={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            single.url
                                                        }
                                                    >
                                                        <ReactSVG
                                                            src={
                                                                process.env
                                                                    .PUBLIC_URL +
                                                                single.image
                                                            }
                                                        />
                                                    </Link>
                                                </div>
                                                <div className="category-item__title">
                                                    <Link
                                                        to={
                                                            process.env
                                                                .PUBLIC_URL +
                                                            single.url
                                                        }
                                                    >
                                                        {single.name}
                                                    </Link>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySlider;
