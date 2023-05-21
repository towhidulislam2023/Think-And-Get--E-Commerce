import { Link } from "react-router-dom";
import { ReactSVG } from "react-svg";
import { Preloader, ErrorMessage } from "../../components";
import useFetch from "../../hooks/use-fetch";

const Profile = () => {
    const { data, isLoading, errorMessage } = useFetch("profile.json");

    if (isLoading) return <Preloader />;
    if (errorMessage) return <ErrorMessage errorMessage={errorMessage} />;

    return (
        <div className="body-wrapper bg-color--gradient space-pt--70 space-pb--120">
            {/* profile header */}
            <div className="profile-header-area space-pt--30 space-mb--40">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="profile-header">
                                <div className="profile-header__image">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + data.image
                                        }
                                        className="img-fluid"
                                        alt=""
                                    />
                                </div>
                                <div className="profile-header__content space-mt--10">
                                    <h3 className="name space-mb--15">
                                        {data.name}
                                    </h3>
                                    <div className="profile-info space-mb--10">
                                        <div className="profile-info-block">
                                            <div className="profile-info-block__value">
                                                {data.id}
                                            </div>
                                            <div className="profile-info-block__title">
                                                ID Number
                                            </div>
                                        </div>
                                        <div className="profile-info-block">
                                            <div className="profile-info-block__value">
                                                {`${data.points.number} (${data.points.currencySymbol}${data.points.moneyValue})`}
                                            </div>
                                            <div className="profile-info-block__title">
                                                Points
                                            </div>
                                        </div>
                                    </div>
                                    <div className="profile-level">
                                        <div className="profile-level__title">
                                            {`Level ${data.level.number}`}{" "}
                                        </div>
                                        <div className="profile-level__progress progress">
                                            <div
                                                className="progress-bar"
                                                role="progressbar"
                                                style={{
                                                    width: `${data.level.percent}%`,
                                                }}
                                                aria-valuenow={
                                                    data.level.percent
                                                }
                                                aria-valuemin={0}
                                                aria-valuemax={100}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* profile body */}
            <div className="profile-body-area">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="profile-body">
                                <div className="profile-info-table space-mb--40">
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Full Name
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.name}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            User Name
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.username}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Phone
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.phone}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            E-mail Address
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.email}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Shipping Address
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.shippingAddress}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Total Order
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.totalOrder}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Edit Profile
                                        </div>
                                        <div className="profile-info-block__value">
                                            <Link
                                                to={
                                                    process.env.PUBLIC_URL +
                                                    "/edit-profile"
                                                }
                                            >
                                                <ReactSVG
                                                    src={
                                                        process.env.PUBLIC_URL +
                                                        "/assets/img/icons/edit.svg"
                                                    }
                                                />
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="profile-info-table">
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Help Center
                                        </div>
                                        <div className="profile-info-block__value">
                                            62256
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            To be Shiped
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.toBeShipped}
                                        </div>
                                    </div>
                                    <div className="profile-info-block">
                                        <div className="profile-info-block__title">
                                            Review
                                        </div>
                                        <div className="profile-info-block__value">
                                            {data.reviewCount}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;
